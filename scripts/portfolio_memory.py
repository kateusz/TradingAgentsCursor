#!/usr/bin/env python3
"""Personal holdings memory for Cursor /analyze-ticker (no LLM)."""
from __future__ import annotations

import argparse
import json
import re
import sys
from datetime import datetime, timezone
from pathlib import Path

DEFAULT_PATH = Path("portfolio/holdings.json")
_POSITION_KEY_RE = re.compile(r"^(.+?)(?:#(\d+))?$")


def _now() -> str:
    return datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")


def _load(path: Path) -> dict:
    if not path.is_file():
        return {"updated_at": None, "positions": {}}
    return json.loads(path.read_text(encoding="utf-8"))


def _save(path: Path, data: dict) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    data["updated_at"] = _now()
    path.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")


def _norm(ticker: str) -> str:
    return ticker.strip().upper()


def _base_ticker(position_key: str) -> str:
    m = _POSITION_KEY_RE.match(position_key.strip().upper())
    return m.group(1) if m else position_key.strip().upper()


def _ensure_ticker_field(position_key: str, pos: dict) -> dict:
    pos = dict(pos)
    pos.setdefault("ticker", _base_ticker(position_key))
    pos["position_key"] = position_key
    return pos


def _positions_for_ticker(positions: dict, ticker: str) -> dict[str, dict]:
    ticker = _norm(ticker)
    out: dict[str, dict] = {}
    for key, pos in positions.items():
        if _base_ticker(key) == ticker:
            out[key] = _ensure_ticker_field(key, pos)
    return out


def _next_position_key(positions: dict, ticker: str) -> str:
    ticker = _norm(ticker)
    matches = _positions_for_ticker(positions, ticker)
    if not matches:
        return ticker
    nums = [1]
    for key in matches:
        m = _POSITION_KEY_RE.match(key)
        if m and m.group(2):
            nums.append(int(m.group(2)))
    return f"{ticker}#{max(nums) + 1}"


def _resolve_position_key(
    positions: dict,
    *,
    ticker: str,
    position_key: str | None,
    new: bool,
) -> str:
    ticker = _norm(ticker)
    if position_key:
        key = position_key.strip().upper()
        if _base_ticker(key) != ticker:
            raise ValueError(f"position_key {key!r} does not match ticker {ticker!r}")
        return key
    if new:
        return _next_position_key(positions, ticker)
    matches = _positions_for_ticker(positions, ticker)
    if not matches:
        return ticker
    if len(matches) == 1:
        return next(iter(matches))
    raise ValueError(
        f"multiple positions for {ticker}; pass --position-key or --new "
        f"({', '.join(sorted(matches))})"
    )


def cmd_get(path: Path, ticker: str, position_key: str | None) -> int:
    data = _load(path)
    positions = data.get("positions", {})
    if position_key:
        key = position_key.strip().upper()
        pos = positions.get(key)
        if pos is None:
            print(json.dumps({"status": "unknown", "position_key": key}, ensure_ascii=False))
            return 0
        print(json.dumps(_ensure_ticker_field(key, pos), ensure_ascii=False))
        return 0

    matches = _positions_for_ticker(positions, ticker)
    if not matches:
        print(json.dumps({"status": "unknown", "ticker": _norm(ticker)}, ensure_ascii=False))
        return 0
    if len(matches) == 1:
        key, pos = next(iter(matches.items()))
        print(json.dumps(_ensure_ticker_field(key, pos), ensure_ascii=False))
        return 0
    print(
        json.dumps(
            {"ticker": _norm(ticker), "positions": matches},
            indent=2,
            ensure_ascii=False,
        )
    )
    return 0


def cmd_list(path: Path, status: str | None) -> int:
    data = _load(path)
    positions = {
        key: _ensure_ticker_field(key, pos)
        for key, pos in data.get("positions", {}).items()
    }
    if status:
        positions = {k: v for k, v in positions.items() if v.get("status") == status}
    print(json.dumps({"updated_at": data.get("updated_at"), "positions": positions}, indent=2, ensure_ascii=False))
    return 0


def cmd_set(
    path: Path,
    *,
    ticker: str,
    position_key: str | None,
    new: bool,
    status: str,
    entry: float | None,
    stop_loss: float | None,
    tp1: float | None,
    tp2: float | None,
    horizon: str | None,
    leverage: float | None,
    run_dir: str | None,
    event: str,
    notes: str | None,
) -> int:
    ticker = _norm(ticker)
    data = _load(path)
    positions = data.setdefault("positions", {})
    try:
        key = _resolve_position_key(positions, ticker=ticker, position_key=position_key, new=new)
    except ValueError as exc:
        print(str(exc), file=sys.stderr)
        return 1

    prev = positions.get(key, {})
    history = list(prev.get("history", []))
    history.append(
        {
            "at": _now(),
            "event": event,
            "status": status,
            "run_dir": run_dir,
            "entry": entry,
            "stop_loss": stop_loss,
            "tp1": tp1,
            "tp2": tp2,
            "leverage": leverage,
        }
    )
    history = history[-20:]

    pos = {
        "ticker": ticker,
        "position_key": key,
        "status": status,
        "entry": entry if entry is not None else prev.get("entry"),
        "stop_loss": stop_loss if stop_loss is not None else prev.get("stop_loss"),
        "tp1": tp1 if tp1 is not None else prev.get("tp1"),
        "tp2": tp2 if tp2 is not None else prev.get("tp2"),
        "leverage": leverage if leverage is not None else prev.get("leverage"),
        "horizon": horizon or prev.get("horizon"),
        "notes": notes if notes is not None else prev.get("notes"),
        "last_run_dir": run_dir or prev.get("last_run_dir"),
        "owned_since": prev.get("owned_since"),
        "history": history,
    }
    if status == "owned" and not pos.get("owned_since"):
        pos["owned_since"] = _now()[:10]
    if status == "closed":
        pos["closed_at"] = _now()[:10]

    positions[key] = pos
    _save(path, data)
    print(json.dumps(pos, indent=2, ensure_ascii=False))
    return 0


def main(argv: list[str] | None = None) -> int:
    p = argparse.ArgumentParser(description=__doc__)
    p.add_argument("--file", type=Path, default=DEFAULT_PATH, help="path to holdings.json")
    sub = p.add_subparsers(dest="cmd", required=True)

    g = sub.add_parser("get", help="print one ticker position (or all lots for ticker)")
    g.add_argument("--ticker", required=True)
    g.add_argument("--position-key", default=None, dest="position_key", help="e.g. GENI.US#2")

    ls = sub.add_parser("list", help="list positions")
    ls.add_argument("--status", choices=("owned", "watching", "closed"), default=None)

    s = sub.add_parser("set", help="upsert a position + append history")
    s.add_argument("--ticker", required=True)
    s.add_argument("--position-key", default=None, dest="position_key", help="target lot, e.g. GENI.US#2")
    s.add_argument("--new", action="store_true", help="create a new lot for this ticker")
    s.add_argument("--status", required=True, choices=("owned", "watching", "closed"))
    s.add_argument("--entry", type=float, default=None)
    s.add_argument("--stop-loss", type=float, default=None, dest="stop_loss")
    s.add_argument("--tp1", type=float, default=None)
    s.add_argument("--tp2", type=float, default=None)
    s.add_argument("--leverage", type=float, default=None, help="e.g. 5 for 1:5")
    s.add_argument("--horizon", default=None)
    s.add_argument("--run-dir", default=None, dest="run_dir")
    s.add_argument("--event", required=True, help="e.g. marked_owned, bought, skipped, exited")
    s.add_argument("--notes", default=None)

    args = p.parse_args(argv)
    if args.cmd == "get":
        return cmd_get(args.file, args.ticker, args.position_key)
    if args.cmd == "list":
        return cmd_list(args.file, args.status)
    if args.cmd == "set":
        return cmd_set(
            args.file,
            ticker=args.ticker,
            position_key=args.position_key,
            new=args.new,
            status=args.status,
            entry=args.entry,
            stop_loss=args.stop_loss,
            tp1=args.tp1,
            tp2=args.tp2,
            leverage=args.leverage,
            horizon=args.horizon,
            run_dir=args.run_dir,
            event=args.event,
            notes=args.notes,
        )
    return 2


if __name__ == "__main__":
    raise SystemExit(main())
