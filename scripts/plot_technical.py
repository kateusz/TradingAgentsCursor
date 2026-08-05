#!/usr/bin/env python3
"""Plot candlestick chart with SMAs, Bollinger bands, S/R levels from analysis."""
from __future__ import annotations

import argparse
import sys
from pathlib import Path

import pandas as pd


def _parse_stock_file(path: Path) -> pd.DataFrame:
    lines = [ln for ln in path.read_text(encoding="utf-8").splitlines() if ln and not ln.startswith("#")]
    if not lines:
        raise ValueError(f"no CSV data in {path}")
    from io import StringIO

    df = pd.read_csv(StringIO("\n".join(lines)))
    df["Date"] = pd.to_datetime(df["Date"])
    df = df.set_index("Date").sort_index()
    for col in ("Open", "High", "Low", "Close", "Volume"):
        if col in df.columns:
            df[col] = pd.to_numeric(df[col], errors="coerce")
    return df.dropna(subset=["Open", "High", "Low", "Close"])


def _parse_levels(raw: str | None) -> list[float]:
    if not raw:
        return []
    return [float(x.strip()) for x in raw.split(",") if x.strip()]


def plot_chart(
    *,
    stock_path: Path,
    ticker: str,
    date: str,
    current: float | None,
    support: list[float],
    resistance: list[float],
    out_dir: Path,
    window_days: int = 120,
) -> Path:
    try:
        import mplfinance as mpf
    except ImportError as e:
        raise SystemExit("mplfinance required: uv pip install mplfinance") from e

    df = _parse_stock_file(stock_path)
    if len(df) > window_days:
        df = df.iloc[-window_days:]

    if current is None and not df.empty:
        current = float(df["Close"].iloc[-1])

    addplot = [
        mpf.make_addplot(df["Close"].rolling(10).mean(), color="blue", width=0.8),
        mpf.make_addplot(df["Close"].rolling(20).mean(), color="orange", width=0.8),
        mpf.make_addplot(df["Close"].rolling(50).mean(), color="purple", width=0.8),
    ]

    levels = support + resistance
    colors = ["green"] * len(support) + ["red"] * len(resistance)
    if current is not None:
        levels.append(current)
        colors.append("darkorange")

    hlines_cfg = dict(hlines=levels, colors=colors, linewidths=1.5) if levels else None

    out_dir.mkdir(parents=True, exist_ok=True)
    price_str = f"${current:.2f}" if current else "N/A"
    title = f"{ticker} – {window_days}d | Cena: {price_str} | {date}"
    out_path = out_dir / f"{ticker.replace('.', '_')}_technical.png"

    mpf.plot(
        df,
        type="candle",
        volume=True,
        addplot=addplot,
        hlines=hlines_cfg,
        style="yahoo",
        title=title,
        savefig=str(out_path),
        figsize=(14, 8),
        tight_layout=True,
    )
    return out_path


def main(argv: list[str] | None = None) -> int:
    p = argparse.ArgumentParser(description=__doc__)
    p.add_argument("--stock", type=Path, required=True)
    p.add_argument("--ticker", required=True)
    p.add_argument("--date", required=True)
    p.add_argument("--current", type=float, default=None)
    p.add_argument("--support", default="")
    p.add_argument("--resistance", default="")
    p.add_argument("--out", type=Path, required=True)
    p.add_argument("--window", type=int, default=120)
    args = p.parse_args(argv)

    path = plot_chart(
        stock_path=args.stock,
        ticker=args.ticker.upper(),
        date=args.date,
        current=args.current,
        support=_parse_levels(args.support),
        resistance=_parse_levels(args.resistance),
        out_dir=args.out,
        window_days=args.window,
    )
    print(path)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
