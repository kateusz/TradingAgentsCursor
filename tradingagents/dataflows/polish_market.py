"""GPW (.WA) enrichment: Bankier.pl + PAP MediaRoom (no API keys)."""

from __future__ import annotations

import re
import xml.etree.ElementTree as ET
from dataclasses import dataclass
from datetime import datetime, timedelta, timezone
from email.utils import parsedate_to_datetime
from html import unescape
from typing import Callable
from urllib.parse import urljoin

import requests
import yfinance as yf

_HEADERS = {
    "User-Agent": (
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
        "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36"
    ),
    "Accept-Language": "pl-PL,pl;q=0.9,en;q=0.8",
}
_BANKIER = "https://www.bankier.pl"
_PAP = "https://pap-mediaroom.pl"
_API = "https://api.bankier.pl"
_RSS_FEEDS = (
    f"{_BANKIER}/rss/gielda.xml",
    f"{_BANKIER}/rss/wiadomosci.xml",
)
_LIST_ITEM_RE = re.compile(
    r'<a class="m-link-with-image-list__anchor" href="([^"]+)"[^>]*>'
    r".*?<span class=\"m-link-with-image-list__title\">([^<]+)</span>",
    re.S,
)

@dataclass(frozen=True)
class BankierInstrument:
    symbol: str
    ticker_gpw: str
    name: str
    isin: str = ""


def is_gpw_ticker(ticker: str) -> bool:
    return isinstance(ticker, str) and ticker.strip().upper().endswith(".WA")


def _get(url: str, *, params: dict | None = None, timeout: float = 25) -> str:
    resp = requests.get(url, params=params, headers=_HEADERS, timeout=timeout)
    resp.raise_for_status()
    return resp.text


def _search_bankier(query: str) -> list[dict]:
    data = requests.get(
        f"{_API}/quotes/public/instrument-search/",
        params={"bankier": "true", "query": query},
        headers={**_HEADERS, "Accept": "application/json"},
        timeout=25,
    ).json()
    return data.get("companies") or []


def resolve_bankier_instrument(ticker: str) -> BankierInstrument | None:
    """Map ``CDR.WA`` → Bankier slug ``CDPROJEKT`` via GPW ticker or company name."""
    raw = ticker.strip().upper()
    if not raw.endswith(".WA"):
        return None
    gpw = raw[:-3]

    for company in _search_bankier(gpw):
        if (company.get("ticker_gpw") or "").upper() == gpw:
            return BankierInstrument(
                symbol=company["symbol"],
                ticker_gpw=company["ticker_gpw"],
                name=company.get("nazwa", ""),
                isin=company.get("isin", ""),
            )

    # ponytail: yfinance longName as fallback when ticker search returns wrong first hit
    try:
        info = yf.Ticker(raw).info or {}
    except Exception:
        info = {}
    for candidate in (info.get("longName"), info.get("shortName")):
        if not candidate:
            continue
        for company in _search_bankier(str(candidate)):
            if (company.get("ticker_gpw") or "").upper() == gpw:
                return BankierInstrument(
                    symbol=company["symbol"],
                    ticker_gpw=company["ticker_gpw"],
                    name=company.get("nazwa", ""),
                    isin=company.get("isin", ""),
                )

    return None


def _news_keywords(inst: BankierInstrument) -> list[str]:
    words: list[str] = []
    for raw in (inst.ticker_gpw, inst.symbol, inst.name):
        token = (raw or "").strip()
        if token:
            words.append(token)
    # "CD PROJEKT RED Spółka Akcyjna" → also match "CD Projekt"
    name = inst.name
    for cut in (" Spółka Akcyjna", " S.A.", " SA"):
        if cut in name:
            words.append(name.split(cut)[0].strip())
    # dedupe case-insensitive, keep order
    seen: set[str] = set()
    out: list[str] = []
    for w in words:
        key = w.lower()
        if key not in seen and len(w) >= 2:
            seen.add(key)
            out.append(w)
    return out


def _parse_rss_items(xml_text: str) -> list[tuple[datetime | None, str, str, str]]:
    root = ET.fromstring(xml_text)
    channel = root.find("channel")
    if channel is None:
        return []
    items: list[tuple[datetime | None, str, str, str]] = []
    for item in channel.findall("item"):
        title = (item.findtext("title") or "").strip()
        link = (item.findtext("link") or "").strip()
        desc = unescape(re.sub(r"<[^>]+>", " ", item.findtext("description") or ""))
        desc = re.sub(r"\s+", " ", desc).strip()
        pub_raw = item.findtext("pubDate")
        pub_dt: datetime | None = None
        if pub_raw:
            try:
                pub_dt = parsedate_to_datetime(pub_raw)
                if pub_dt.tzinfo is None:
                    pub_dt = pub_dt.replace(tzinfo=timezone.utc)
            except (TypeError, ValueError, OverflowError):
                pub_dt = None
        if title and link:
            items.append((pub_dt, title, desc, link))
    return items


def _in_window(
    pub_dt: datetime | None,
    start_dt: datetime,
    end_dt: datetime,
) -> bool:
    end_exclusive = end_dt + timedelta(days=1)
    if pub_dt is not None:
        if pub_dt.tzinfo is None:
            pub_dt = pub_dt.replace(tzinfo=timezone.utc)
        return start_dt <= pub_dt.astimezone(timezone.utc) < end_exclusive.replace(tzinfo=timezone.utc)
    # undated: keep only for live-ish runs
    return end_dt.date() >= datetime.now(timezone.utc).date() - timedelta(days=1)


def _matches_keywords(text: str, keywords: list[str]) -> bool:
    hay = text.lower()
    return any(kw.lower() in hay for kw in keywords)


def fetch_bankier_rss_news(
    inst: BankierInstrument,
    start_date: str,
    end_date: str,
    *,
    limit: int = 20,
) -> str:
    start_dt = datetime.strptime(start_date, "%Y-%m-%d").replace(tzinfo=timezone.utc)
    end_dt = datetime.strptime(end_date, "%Y-%m-%d").replace(tzinfo=timezone.utc)
    keywords = _news_keywords(inst)
    seen: set[str] = set()
    lines: list[str] = []

    for feed_url in _RSS_FEEDS:
        try:
            items = _parse_rss_items(_get(feed_url))
        except Exception as exc:
            lines.append(f"(RSS error {feed_url}: {exc})")
            continue
        for pub_dt, title, desc, link in items:
            blob = f"{title} {desc}"
            if not _matches_keywords(blob, keywords):
                continue
            if not _in_window(pub_dt, start_dt, end_dt):
                continue
            if link in seen:
                continue
            seen.add(link)
            date_s = pub_dt.strftime("%Y-%m-%d") if pub_dt else "unknown-date"
            lines.append(f"### {title} (Bankier RSS, {date_s})\n{desc}\nLink: {link}\n")
            if len(lines) >= limit:
                break
        if len(lines) >= limit:
            break

    if not lines:
        return (
            f"No Bankier RSS articles for {inst.ticker_gpw} "
            f"between {start_date} and {end_date} "
            f"(keywords: {', '.join(keywords)})"
        )
    header = (
        f"## Bankier RSS ({inst.ticker_gpw} / {inst.symbol}), "
        f"{start_date} to {end_date}\n\n"
    )
    return header + "\n".join(lines)


def _parse_bankier_list_page(url: str) -> list[tuple[str, str]]:
    html = _get(url)
    return [(unescape(title.strip()), href) for href, title in _LIST_ITEM_RE.findall(html)]


def fetch_bankier_company_news(
    inst: BankierInstrument,
    start_date: str,
    end_date: str,
    *,
    limit: int = 15,
) -> str:
    """Komunikaty / wiadomości ze strony spółki na Bankier.pl."""
    base = f"{_BANKIER}/gielda/notowania/akcje/{inst.symbol}"
    sections = ("komunikaty", "wiadomosci")
    seen: set[str] = set()
    blocks: list[str] = []

    for section in sections:
        try:
            items = _parse_bankier_list_page(f"{base}/{section}")
        except Exception as exc:
            blocks.append(f"## {section}\nError: {exc}\n")
            continue
        section_lines: list[str] = []
        for title, href in items:
            if href in seen:
                continue
            seen.add(href)
            section_lines.append(f"### {title}\nLink: {href}\n")
            if len(section_lines) >= limit:
                break
        if section_lines:
            blocks.append(f"## Bankier company /{section}\n\n" + "\n".join(section_lines))

    if not blocks:
        return f"No Bankier company news for {inst.symbol} ({inst.ticker_gpw})"
    header = (
        f"# Bankier company feed: {inst.name} ({inst.ticker_gpw})\n"
        f"# Window requested: {start_date} to {end_date} "
        f"(Bankier list pages do not expose exact dates in listing)\n\n"
    )
    return header + "\n\n".join(blocks)


def fetch_pap_mediaroom_news(
    inst: BankierInstrument,
    start_date: str,
    end_date: str,
    *,
    limit: int = 15,
) -> str:
    start_dt = datetime.strptime(start_date, "%Y-%m-%d")
    end_dt = datetime.strptime(end_date, "%Y-%m-%d")
    query = inst.name.split(" Spółka")[0].split(" S.A")[0].strip() or inst.ticker_gpw
    name_parts = re.sub(r"[^a-zA-Z0-9 ]+", " ", query).lower().split()
    slug_hints = []
    if len(name_parts) >= 2:
        slug_hints.append("-".join(name_parts[:2]))
    if name_parts:
        slug_hints.append(name_parts[0])
    try:
        html = _get(f"{_PAP}/szukaj", params={"s": query})
    except Exception as exc:
        return f"PAP MediaRoom search failed: {exc}"

    lines: list[str] = []
    seen: set[str] = set()
    for path in re.findall(r'href="(/biznes-i-finanse/[^"]+)"', html):
        slug = path.rsplit("/", 1)[-1].lower()
        if not any(hint in slug for hint in slug_hints):
            continue
        if path in seen:
            continue
        seen.add(path)
        # title from slug tail
        title = unescape(path.rsplit("/", 1)[-1].replace("-", " "))
        link = urljoin(_PAP, path)
        lines.append(f"### {title} (PAP)\nLink: {link}\n")
        if len(lines) >= limit:
            break

    if not lines:
        return (
            f"No PAP MediaRoom articles for '{query}' "
            f"between {start_date} and {end_date}"
        )
    return (
        f"## PAP MediaRoom search: {query}, {start_date} to {end_date}\n\n"
        + "\n".join(lines)
    )


def _clean_cell(text: str) -> str:
    return re.sub(r"\s+", " ", text.replace("\xa0", " ")).strip()


def fetch_bankier_fundamentals(inst: BankierInstrument) -> str:
    """Quarterly PL fundamentals table from Bankier wyniki-finansowe."""
    url = f"{_BANKIER}/gielda/notowania/akcje/{inst.symbol}/wyniki-finansowe"
    try:
        html = _get(url)
    except Exception as exc:
        return f"Bankier fundamentals error for {inst.symbol}: {exc}"

    rows = re.findall(r"<tr[^>]*>(.*?)</tr>", html, re.S)
    parsed: list[list[str]] = []
    for row in rows:
        cells = [
            _clean_cell(re.sub(r"<[^>]+>", " ", c))
            for c in re.findall(r"<t[dh][^>]*>(.*?)</t[dh]>", row, re.S)
        ]
        if cells and any(cells):
            parsed.append(cells)

    if len(parsed) < 2:
        return f"No financial table found on Bankier for {inst.symbol}"

    header = parsed[0]
    # last data column index (skip label col 0)
    data_cols = [i for i in range(1, len(header)) if header[i].strip()]
    if not data_cols:
        return f"No quarterly columns on Bankier for {inst.symbol}"
    last_cols = data_cols[-4:]

    lines = [
        f"# Bankier fundamentals: {inst.name} ({inst.ticker_gpw})",
        f"# Source: {url}",
        "",
        "Recent quarters (latest columns from Bankier table):",
        "",
    ]
    for row in parsed[1:]:
        if len(row) <= max(last_cols):
            continue
        label = row[0]
        if not label or label.startswith("Nazwa"):
            continue
        values = [row[i] for i in last_cols if i < len(row)]
        if all(v in ("", "-- --") for v in values):
            continue
        quarters = [header[i] for i in last_cols if i < len(header)]
        pairs = ", ".join(f"{q}: {v}" for q, v in zip(quarters, values))
        lines.append(f"- {label}: {pairs}")

    # basic profile snippet
    try:
        profile_html = _get(f"{_BANKIER}/gielda/notowania/akcje/{inst.symbol}/podstawowe-dane")
        ticker_m = re.search(r"Ticker GPW[^<]{0,80}</[^>]+>\s*<[^>]+>([^<]+)", profile_html, re.I | re.S)
        if ticker_m:
            lines.extend(["", f"Ticker GPW (Bankier): {ticker_m.group(1).strip()}"])
    except Exception:
        pass

    body = "\n".join(lines).strip()
    return body if len(body.splitlines()) > 4 else f"Sparse Bankier fundamentals for {inst.symbol}"


def build_polish_news_bundle(
    ticker: str,
    start_date: str,
    end_date: str,
) -> str:
    inst = resolve_bankier_instrument(ticker)
    if inst is None:
        return (
            f"No Bankier mapping for {ticker}. "
            f"Add alias or verify GPW ticker on Bankier.pl."
        )
    parts = [
        fetch_bankier_company_news(inst, start_date, end_date),
        fetch_bankier_rss_news(inst, start_date, end_date),
        fetch_pap_mediaroom_news(inst, start_date, end_date),
    ]
    return (
        f"# Polish market news bundle for {ticker} "
        f"({inst.name}, Bankier={inst.symbol})\n"
        f"# Period: {start_date} to {end_date}\n\n"
        + "\n\n---\n\n".join(parts)
    )


def enrich_gpw_bundle(
    *,
    ticker: str,
    date: str,
    news_start: str,
    write: Callable[[str, str], None],
) -> list[str]:
    """Write GPW-specific files; returns list of filenames written."""
    inst = resolve_bankier_instrument(ticker)
    extra: list[str] = []

    write("news.txt", build_polish_news_bundle(ticker, news_start, date))
    extra.append("news.txt")

    if inst:
        write("bankier_company.txt", fetch_bankier_company_news(inst, news_start, date))
        write("bankier_fundamentals.txt", fetch_bankier_fundamentals(inst))
        extra.extend(["bankier_company.txt", "bankier_fundamentals.txt"])
    else:
        write(
            "bankier_company.txt",
            f"No Bankier instrument resolved for {ticker}",
        )
        write(
            "bankier_fundamentals.txt",
            f"No Bankier instrument resolved for {ticker}",
        )
        extra.extend(["bankier_company.txt", "bankier_fundamentals.txt"])

    write(
        "global_news.txt",
        f"Polish market run ({ticker}): macro/global news feed skipped by config.",
    )
    extra.append("global_news.txt")
    return extra
