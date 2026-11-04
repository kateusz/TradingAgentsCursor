"""Parse XTB position export CSVs (European decimal commas)."""
from __future__ import annotations

import csv
import re
from pathlib import Path
from typing import Any

_POSITION_ID_RE = re.compile(r"^\d+$")


def parse_decimal(raw: str | None) -> float | None:
    if raw is None:
        return None
    s = str(raw).strip()
    if not s or s.lower() in {"-", "nan"}:
        return None
    s = s.replace("\u00a0", "").replace(" ", "").replace(",", ".")
    try:
        return float(s)
    except ValueError:
        return None


def position_key(ticker: str, position_id: str) -> str:
    return f"{ticker.strip().upper()}#{position_id.strip()}"


def is_lot_position_id(value: str | None) -> bool:
    return bool(value and _POSITION_ID_RE.match(value.strip()))


def _read_rows(path: Path) -> list[dict[str, str]]:
    text = path.read_text(encoding="utf-8-sig")
    return list(csv.DictReader(text.splitlines()))


def parse_open_csv(path: Path, account_currency: str) -> list[dict[str, Any]]:
    lots: list[dict[str, Any]] = []
    for row in _read_rows(path):
        inst = (row.get("Instrument/Position") or "").strip()
        ticker = (row.get("Ticker") or "").strip().upper()
        if not is_lot_position_id(inst) or not ticker:
            continue
        typ = (row.get("Type") or "").strip().upper()
        if typ and typ not in {"BUY", "SELL"}:
            continue
        pid = inst.strip()
        open_time = (row.get("Open time (UTC)") or row.get("Open Time (UTC)") or "").strip() or None
        owned_since = open_time[:10] if open_time and len(open_time) >= 10 else None
        lots.append(
            {
                "position_key": position_key(ticker, pid),
                "position_id": pid,
                "ticker": ticker,
                "account_currency": account_currency.upper(),
                "category": (row.get("Category") or "").strip() or None,
                "side": typ or "BUY",
                "volume": parse_decimal(row.get("Volume")),
                "value": parse_decimal(row.get("Value")),
                "current_price": parse_decimal(row.get("Current price")),
                "open_price": parse_decimal(row.get("Open price")),
                "open_time_utc": open_time,
                "broker_stop_loss": parse_decimal(row.get("Stop Loss")),
                "broker_take_profit": parse_decimal(row.get("Take Profit")),
                "net_profit": parse_decimal(row.get("Net Profit")),
                "net_profit_pct": parse_decimal(row.get("Net Profit %")),
                "gross_profit": parse_decimal(row.get("Gross Profit")),
                "margin": parse_decimal(row.get("Margin")),
                "swap": parse_decimal(row.get("Swap")),
            }
        )
    return lots


def _closed_row_id(row: dict[str, str]) -> str | None:
    ticker = (row.get("Ticker") or "").strip().upper()
    if not ticker or ticker.lower().startswith("profit"):
        return None
    inst = (row.get("Instrument") or "").strip()
    if inst.lower().startswith("profit"):
        return None
    pid = (row.get("Position ID") or "").strip()
    if not pid:
        return None
    return pid


def parse_closed_csv(path: Path, account_currency: str) -> list[dict[str, Any]]:
    out: list[dict[str, Any]] = []
    for row in _read_rows(path):
        pid = _closed_row_id(row)
        if not pid:
            continue
        ticker = (row.get("Ticker") or "").strip().upper()
        close_time = (row.get("Close Time (UTC)") or "").strip() or None
        open_time = (row.get("Open Time (UTC)") or "").strip() or None
        volume = parse_decimal(row.get("Volume"))
        close_price = parse_decimal(row.get("Close Price"))
        dedup = "|".join(
            [
                pid,
                close_time or "",
                str(volume) if volume is not None else "",
                str(close_price) if close_price is not None else "",
            ]
        )
        out.append(
            {
                "dedup_key": dedup,
                "position_key": position_key(ticker, pid),
                "position_id": pid,
                "ticker": ticker,
                "account_currency": account_currency.upper(),
                "category": (row.get("Category") or "").strip() or None,
                "side": (row.get("Type") or "").strip().upper() or None,
                "volume": volume,
                "open_price": parse_decimal(row.get("Open Price")),
                "open_time_utc": open_time,
                "close_price": close_price,
                "close_time_utc": close_time,
                "profit_loss": parse_decimal(row.get("Profit/Loss")),
                "gross_profit": parse_decimal(row.get("Gross Profit")),
                "purchase_value": parse_decimal(row.get("Purchase Value")),
                "sale_value": parse_decimal(row.get("Sale Value")),
                "broker_stop_loss": parse_decimal(row.get("Stop Loss")),
                "broker_take_profit": parse_decimal(row.get("Take Profit")),
                "commission": parse_decimal(row.get("Commission")),
                "margin": parse_decimal(row.get("Margin")),
                "swap": parse_decimal(row.get("Swap")),
                "comment": (row.get("Comment") or "").strip() or None,
                "close_origin": (row.get("Close Origin") or "").strip() or None,
                "source_file": path.name,
            }
        )
    return out


def detect_account_currency(path: Path) -> str | None:
    name = path.name.upper()
    for cur in ("PLN", "EUR", "USD"):
        if f"-{cur}" in name or f"_{cur}" in name:
            return cur
    return None
