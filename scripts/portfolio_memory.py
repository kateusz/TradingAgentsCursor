#!/usr/bin/env python3
"""Personal holdings memory for Cursor /analyze-ticker (no LLM).

Broker open lots come from portfolio/broker/open.json (xtb_import).
Thesis fields (SL/TP/horizon/history) live in portfolio/thesis.json.
"""
from __future__ import annotations

import argparse
import json
import re
import sys
from datetime import datetime, timezone
from pathlib import Path

DEFAULT_THESIS = Path("portfolio/thesis.json")
LEGACY_HOLDINGS = Path("portfolio/holdings.json")
DEFAULT_BROKER_OPEN = Path("portfolio/broker/open.json")
_POSITION_KEY_RE = re.compile(r"^(.+?)(?:#(\d+))?$")
_BROKER_KEY_RE = re.compile(r"^.+#\d{8,}$")


def _now() -> str:
    return datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")


def _load_json(path: Path) -> dict:
    if not path.is_file():
        return {}
    return json.loads(path.read_text(encoding="utf-8"))


def _save_thesis(path: Path, data: dict) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    data["updated_at"] = _now()
    path.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")


def _load(path: Path) -> dict:
    """Load thesis store (backward compat: holdings.json → thesis.json once)."""
    if path.is_file():
        return json.loads(path.read_text(encoding="utf-8"))
    if path == DEFAULT_THESIS and LEGACY_HOLDINGS.is_file():
        data = json.loads(LEGACY_HOLDINGS.read_text(encoding="utf-8"))
        _save_thesis(path, data)
        return data
    return {"updated_at": None, "positions": {}}


def _load_broker_open(path: Path = DEFAULT_BROKER_OPEN) -> dict:
    data = _load_json(path)
    if not data:
        return {"lots": []}
    return data


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


def _broker_lot_to_position(lot: dict, thesis: dict) -> dict:
    key = lot["position_key"]
    prev = thesis.get(key, {})
    open_price = lot.get("open_price")
    owned_since = lot.get("open_time_utc")
    if owned_since and len(owned_since) >= 10:
        owned_since = owned_since[:10]
    merged = {
        "ticker": lot["ticker"],
        "position_key": key,
        "status": "owned",
        "entry": open_price if open_price is not None else prev.get("entry"),
        "entry_source": "broker" if open_price is not None else prev.get("entry_source"),
        "stop_loss": prev.get("stop_loss"),
        "tp1": prev.get("tp1"),
        "tp2": prev.get("tp2"),
        "leverage": prev.get("leverage"),
        "horizon": prev.get("horizon"),
        "notes": prev.get("notes"),
        "last_run_dir": prev.get("last_run_dir"),
        "owned_since": prev.get("owned_since") or owned_since,
        "history": list(prev.get("history", [])),
        "broker": {
            "position_id": lot.get("position_id"),
            "account_currency": lot.get("account_currency"),
            "category": lot.get("category"),
            "volume": lot.get("volume"),
            "value": lot.get("value"),
            "current_price": lot.get("current_price"),
            "open_time_utc": lot.get("open_time_utc"),
            "broker_stop_loss": lot.get("broker_stop_loss"),
            "broker_take_profit": lot.get("broker_take_profit"),
            "net_profit": lot.get("net_profit"),
            "net_profit_pct": lot.get("net_profit_pct"),
            "margin": lot.get("margin"),
            "swap": lot.get("swap"),
        },
    }
    return merged


def _merged_positions(thesis_path: Path, broker_open_path: Path) -> dict[str, dict]:
    thesis_data = _load(thesis_path)
    thesis = thesis_data.get("positions", {})
    broker = _load_broker_open(broker_open_path)
    merged: dict[str, dict] = {}

    open_keys: set[str] = set()
    tickers_with_broker_lots: set[str] = set()
    for lot in broker.get("lots", []):
        key = lot.get("position_key")
        if not key:
            continue
        open_keys.add(key)
        tickers_with_broker_lots.add(lot["ticker"])
        merged[key] = _ensure_ticker_field(key, _broker_lot_to_position(lot, thesis))

    for key, pos in thesis.items():
        if key in merged:
            continue
        status = pos.get("status")
        base = _base_ticker(key)
        if status == "owned" and base in tickers_with_broker_lots:
            continue
        if status in ("watching", "closed"):
            merged[key] = _ensure_ticker_field(key, pos)
        elif status == "owned" and not _BROKER_KEY_RE.match(key.upper()):
            merged[key] = _ensure_ticker_field(key, pos)

    return merged


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
        if m and m.group(2) and len(m.group(2)) < 8:
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


def cmd_get(
    thesis_path: Path,
    broker_open_path: Path,
    ticker: str,
    position_key: str | None,
) -> int:
    positions = _merged_positions(thesis_path, broker_open_path)
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


def cmd_list(thesis_path: Path, broker_open_path: Path, status: str | None) -> int:
    thesis_data = _load(thesis_path)
    positions = _merged_positions(thesis_path, broker_open_path)
    if status:
        positions = {k: v for k, v in positions.items() if v.get("status") == status}
    payload = {
        "updated_at": thesis_data.get("updated_at"),
        "broker_updated_at": _load_broker_open(broker_open_path).get("updated_at"),
        "positions": positions,
    }
    print(json.dumps(payload, indent=2, ensure_ascii=False))
    return 0


def cmd_set(
    thesis_path: Path,
    broker_open_path: Path,
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
    merged = _merged_positions(thesis_path, broker_open_path)
    data = _load(thesis_path)
    positions = data.setdefault("positions", {})
    try:
        key = _resolve_position_key(merged, ticker=ticker, position_key=position_key, new=new)
    except ValueError as exc:
        print(str(exc), file=sys.stderr)
        return 1

    broker_pos = merged.get(key) if key in merged and merged[key].get("broker") else None
    prev = positions.get(key, {})
    if broker_pos and not prev:
        prev = {k: v for k, v in broker_pos.items() if k != "broker"}

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
        "entry_source": prev.get("entry_source"),
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
    _save_thesis(thesis_path, data)

    out = _merged_positions(thesis_path, broker_open_path).get(key, pos)
    print(json.dumps(out, indent=2, ensure_ascii=False))
    return 0


def main(argv: list[str] | None = None) -> int:
    p = argparse.ArgumentParser(description=__doc__)
    p.add_argument("--file", type=Path, default=DEFAULT_THESIS, help="path to thesis.json")
    p.add_argument("--broker-open", type=Path, default=DEFAULT_BROKER_OPEN, dest="broker_open")
    sub = p.add_subparsers(dest="cmd", required=True)

    g = sub.add_parser("get", help="print one ticker position (or all lots for ticker)")
    g.add_argument("--ticker", required=True)
    g.add_argument("--position-key", default=None, dest="position_key", help="e.g. GENI.US#2738235085")

    ls = sub.add_parser("list", help="list positions")
    ls.add_argument("--status", choices=("owned", "watching", "closed"), default=None)

    s = sub.add_parser("set", help="upsert thesis overlay + append history")
    s.add_argument("--ticker", required=True)
    s.add_argument("--position-key", default=None, dest="position_key")
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
        return cmd_get(args.file, args.broker_open, args.ticker, args.position_key)
    if args.cmd == "list":
        return cmd_list(args.file, args.broker_open, args.status)
    if args.cmd == "set":
        return cmd_set(
            args.file,
            args.broker_open,
            ticker=args.ticker,
            position_key=args.position_key,
            new=args.new,
            status=args.status,
            entry=args.entry,
            stop_loss=args.stop_loss,
            tp1=args.tp1,
            tp2=args.tp2,
            horizon=args.horizon,
            leverage=args.leverage,
            run_dir=args.run_dir,
            event=args.event,
            notes=args.notes,
        )
    return 2


if __name__ == "__main__":
    raise SystemExit(main())
