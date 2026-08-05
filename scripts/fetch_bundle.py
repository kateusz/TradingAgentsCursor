#!/usr/bin/env python3
"""Fetch a TradingAgents data bundle for Cursor hybrid analysis (no LLM)."""
from __future__ import annotations

import argparse
import json
import sys
from datetime import datetime, timedelta, timezone
from pathlib import Path

from tradingagents.dataflows.config import set_config
from tradingagents.dataflows.interface import route_to_vendor
from tradingagents.default_config import DEFAULT_CONFIG

INDICATORS = [
    "close_50_sma",
    "close_200_sma",
    "close_10_ema",
    "macd",
    "macds",
    "macdh",
    "rsi",
    "boll",
    "boll_ub",
    "boll_lb",
    "atr",
    "vwma",
]


def _parse_date(date_str: str) -> datetime:
    return datetime.strptime(date_str, "%Y-%m-%d")


def fetch_bundle(*, ticker: str, date: str, out_dir: Path) -> dict:
    ticker = ticker.strip().upper()
    trade_dt = _parse_date(date)
    lookback_start = (trade_dt - timedelta(days=365)).strftime("%Y-%m-%d")
    news_start = (trade_dt - timedelta(days=7)).strftime("%Y-%m-%d")

    set_config(DEFAULT_CONFIG.copy())
    out_dir.mkdir(parents=True, exist_ok=True)

    files: list[str] = []

    def write(name: str, content: str) -> None:
        (out_dir / name).write_text(content if content is not None else "", encoding="utf-8")
        files.append(name)

    meta = {
        "ticker": ticker,
        "date": date,
        "lookback_start": lookback_start,
        "created_at": datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"),
    }
    write("meta.json", json.dumps(meta, indent=2) + "\n")

    write("stock.txt", route_to_vendor("get_stock_data", ticker, lookback_start, date))

    ind_parts = []
    for ind in INDICATORS:
        try:
            ind_parts.append(route_to_vendor("get_indicators", ticker, ind, date, 30))
        except Exception as e:  # ponytail: one bad indicator must not kill the bundle
            ind_parts.append(f"## {ind}\nError: {e}")
    write("indicators.txt", "\n\n".join(ind_parts))

    write("fundamentals.txt", route_to_vendor("get_fundamentals", ticker, date))
    write("balance_sheet.txt", route_to_vendor("get_balance_sheet", ticker, "quarterly", date))
    write("cashflow.txt", route_to_vendor("get_cashflow", ticker, "quarterly", date))
    write("income_statement.txt", route_to_vendor("get_income_statement", ticker, "quarterly", date))
    write("news.txt", route_to_vendor("get_news", ticker, news_start, date))
    write("global_news.txt", route_to_vendor("get_global_news", date, 7, 5))
    write("insider_transactions.txt", route_to_vendor("get_insider_transactions", ticker))

    return {"ticker": ticker, "date": date, "out": str(out_dir), "files": files}


def main(argv: list[str] | None = None) -> int:
    p = argparse.ArgumentParser(description=__doc__)
    p.add_argument("--ticker", required=True)
    p.add_argument("--date", required=True, help="YYYY-MM-DD")
    p.add_argument("--out", required=True, type=Path)
    args = p.parse_args(argv)
    try:
        summary = fetch_bundle(ticker=args.ticker, date=args.date, out_dir=args.out)
    except ValueError as e:
        print(str(e), file=sys.stderr)
        return 2
    except Exception as e:
        print(f"fetch failed: {e}", file=sys.stderr)
        return 1
    print(json.dumps(summary))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
