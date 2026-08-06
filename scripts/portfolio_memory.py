#!/usr/bin/env python3
"""Personal holdings memory for Cursor /analyze-ticker (no LLM)."""
from __future__ import annotations

import argparse
import json
import sys
from datetime import datetime, timezone
from pathlib import Path

DEFAULT_PATH = Path("portfolio/holdings.json")


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


def cmd_get(path: Path, ticker: str) -> int:
    data = _load(path)
    pos = data.get("positions", {}).get(_norm(ticker))
    print(json.dumps(pos if pos is not None else {"status": "unknown"}, ensure_ascii=False))
    return 0


def cmd_list(path: Path, status: str | None) -> int:
    data = _load(path)
    positions = data.get("positions", {})
    if status:
        positions = {k: v for k, v in positions.items() if v.get("status") == status}
    print(json.dumps({"updated_at": data.get("updated_at"), "positions": positions}, indent=2, ensure_ascii=False))
    return 0


def cmd_set(
    path: Path,
    *,
    ticker: str,
    status: str,
    entry: float | None,
    stop_loss: float | None,
    tp1: float | None,
    tp2: float | None,
    horizon: str | None,
    run_dir: str | None,
    event: str,
    notes: str | None,
) -> int:
    ticker = _norm(ticker)
    data = _load(path)
    positions = data.setdefault("positions", {})
    prev = positions.get(ticker, {})
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
        }
    )
    # keep history short
    history = history[-20:]

    pos = {
        "status": status,
        "entry": entry if entry is not None else prev.get("entry"),
        "stop_loss": stop_loss if stop_loss is not None else prev.get("stop_loss"),
        "tp1": tp1 if tp1 is not None else prev.get("tp1"),
        "tp2": tp2 if tp2 is not None else prev.get("tp2"),
        "horizon": horizon or prev.get("horizon"),
        "notes": notes if notes is not None else prev.get("notes"),
        "last_run_dir": run_dir or prev.get("last_run_dir"),
        "owned_since": prev.get("owned_since"),
        "history": history,
    }
    if status == "owned" and not pos.get("owned_since"):
        pos["owned_since"] = _now()[:10]
    if status in ("watching", "closed") and status != "owned":
        # leave owned_since as historical breadcrumb if it existed
        pass
    if status == "closed":
        pos["closed_at"] = _now()[:10]

    positions[ticker] = pos
    _save(path, data)
    print(json.dumps(pos, indent=2, ensure_ascii=False))
    return 0


def main(argv: list[str] | None = None) -> int:
    p = argparse.ArgumentParser(description=__doc__)
    p.add_argument("--file", type=Path, default=DEFAULT_PATH, help="path to holdings.json")
    sub = p.add_subparsers(dest="cmd", required=True)

    g = sub.add_parser("get", help="print one ticker (or status=unknown)")
    g.add_argument("--ticker", required=True)

    ls = sub.add_parser("list", help="list positions")
    ls.add_argument("--status", choices=("owned", "watching", "closed"), default=None)

    s = sub.add_parser("set", help="upsert a position + append history")
    s.add_argument("--ticker", required=True)
    s.add_argument("--status", required=True, choices=("owned", "watching", "closed"))
    s.add_argument("--entry", type=float, default=None)
    s.add_argument("--stop-loss", type=float, default=None, dest="stop_loss")
    s.add_argument("--tp1", type=float, default=None)
    s.add_argument("--tp2", type=float, default=None)
    s.add_argument("--horizon", default=None)
    s.add_argument("--run-dir", default=None, dest="run_dir")
    s.add_argument("--event", required=True, help="e.g. marked_owned, bought, skipped, exited")
    s.add_argument("--notes", default=None)

    args = p.parse_args(argv)
    if args.cmd == "get":
        return cmd_get(args.file, args.ticker)
    if args.cmd == "list":
        return cmd_list(args.file, args.status)
    if args.cmd == "set":
        return cmd_set(
            args.file,
            ticker=args.ticker,
            status=args.status,
            entry=args.entry,
            stop_loss=args.stop_loss,
            tp1=args.tp1,
            tp2=args.tp2,
            horizon=args.horizon,
            run_dir=args.run_dir,
            event=args.event,
            notes=args.notes,
        )
    return 2


if __name__ == "__main__":
    raise SystemExit(main())
