#!/usr/bin/env python3
from __future__ import annotations

import argparse
import sys
from pathlib import Path

SECTIONS = [
    ("# Market Analyst", "1_analysts/market.md"),
    ("# Sentiment Analyst", "1_analysts/sentiment.md"),
    ("# News Analyst", "1_analysts/news.md"),
    ("# Fundamentals Analyst", "1_analysts/fundamentals.md"),
    ("# Bull Researcher", "2_research/bull.md"),
    ("# Bear Researcher", "2_research/bear.md"),
    ("# Research Manager", "2_research/manager.md"),
    ("# Trader", "3_trading/trader.md"),
    ("# Aggressive Risk", "4_risk/aggressive.md"),
    ("# Neutral Risk", "4_risk/neutral.md"),
    ("# Conservative Risk", "4_risk/conservative.md"),
    ("# Portfolio Manager Decision", "5_portfolio/decision.md"),
]


def stitch_report(run_dir: Path) -> Path:
    parts: list[str] = []
    for title, rel in SECTIONS:
        path = run_dir / rel
        if path.is_file() and path.stat().st_size > 0:
            parts.append(f"{title}\n\n{path.read_text(encoding='utf-8').rstrip()}\n")
    out = run_dir / "complete_report.md"
    out.write_text("\n---\n\n".join(parts) + ("\n" if parts else ""), encoding="utf-8")
    return out


def main(argv: list[str] | None = None) -> int:
    p = argparse.ArgumentParser()
    p.add_argument("--run-dir", type=Path, required=True)
    args = p.parse_args(argv)
    if not args.run_dir.is_dir():
        print(f"not a directory: {args.run_dir}", file=sys.stderr)
        return 2
    out = stitch_report(args.run_dir)
    print(out)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
