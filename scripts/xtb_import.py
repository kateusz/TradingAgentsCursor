#!/usr/bin/env python3
"""Import XTB open/closed CSV exports into portfolio/broker/."""
from __future__ import annotations

import argparse
import json
import shutil
import sys
from datetime import datetime, timezone
from pathlib import Path

_REPO = Path(__file__).resolve().parents[1]
if str(_REPO) not in sys.path:
    sys.path.insert(0, str(_REPO / "scripts"))

from xtb_csv import (  # noqa: E402
    detect_account_currency,
    parse_closed_csv,
    parse_open_csv,
)

DEFAULT_OPEN = Path("portfolio/broker/open.json")
DEFAULT_CLOSED = Path("portfolio/broker/closed.json")
DEFAULT_IMPORTS = Path("portfolio/imports")


def _now() -> str:
    return datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")


def _load_closed(path: Path) -> dict:
    if not path.is_file():
        return {"updated_at": None, "records": []}
    return json.loads(path.read_text(encoding="utf-8"))


def _merge_closed(existing: dict, new_rows: list[dict]) -> dict:
    seen = {r.get("dedup_key") for r in existing.get("records", []) if r.get("dedup_key")}
    records = list(existing.get("records", []))
    added = 0
    for row in new_rows:
        key = row.get("dedup_key")
        if key and key in seen:
            continue
        records.append(row)
        if key:
            seen.add(key)
        added += 1
    return {"updated_at": _now(), "records": records, "last_import_added": added}


def import_files(
    *,
    open_files: list[Path],
    closed_files: list[Path],
    open_out: Path,
    closed_out: Path,
    copy_to: Path | None,
) -> dict:
    all_lots: list[dict] = []
    source_files: list[str] = []
    for path in open_files:
        if not path.is_file():
            raise FileNotFoundError(path)
        cur = detect_account_currency(path)
        if not cur:
            raise ValueError(f"cannot detect account currency from filename: {path.name}")
        if copy_to:
            copy_to.mkdir(parents=True, exist_ok=True)
            dest = copy_to / path.name
            shutil.copy2(path, dest)
            source_files.append(str(dest))
        else:
            source_files.append(str(path.resolve()))
        all_lots.extend(parse_open_csv(path, cur))

    closed_rows: list[dict] = []
    for path in closed_files:
        if not path.is_file():
            continue
        cur = detect_account_currency(path)
        if not cur:
            raise ValueError(f"cannot detect account currency from filename: {path.name}")
        if copy_to:
            copy_to.mkdir(parents=True, exist_ok=True)
            shutil.copy2(path, copy_to / path.name)
        rows = parse_closed_csv(path, cur)
        if rows:
            closed_rows.extend(rows)

    open_out.parent.mkdir(parents=True, exist_ok=True)
    open_payload = {
        "updated_at": _now(),
        "source_files": source_files,
        "lot_count": len(all_lots),
        "lots": all_lots,
    }
    open_out.write_text(json.dumps(open_payload, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")

    closed_existing = _load_closed(closed_out)
    closed_payload = _merge_closed(closed_existing, closed_rows)
    closed_out.parent.mkdir(parents=True, exist_ok=True)
    closed_out.write_text(json.dumps(closed_payload, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")

    return {
        "open_lots": len(all_lots),
        "closed_added": closed_payload.get("last_import_added", 0),
        "closed_total": len(closed_payload.get("records", [])),
        "open_out": str(open_out.resolve()),
        "closed_out": str(closed_out.resolve()),
    }


def main(argv: list[str] | None = None) -> int:
    p = argparse.ArgumentParser(description=__doc__)
    p.add_argument(
        "csv_files",
        nargs="*",
        type=Path,
        help="XTB CSV paths (auto-routed by Open/Closed in filename)",
    )
    p.add_argument("--open-out", type=Path, default=DEFAULT_OPEN)
    p.add_argument("--closed-out", type=Path, default=DEFAULT_CLOSED)
    p.add_argument(
        "--copy-to",
        type=Path,
        default=DEFAULT_IMPORTS,
        help="copy CSVs here (pass --no-copy to skip)",
    )
    p.add_argument("--no-copy", action="store_true")
    args = p.parse_args(argv)

    open_files: list[Path] = []
    closed_files: list[Path] = []
    for path in args.csv_files:
        name = path.name.lower()
        if "open" in name:
            open_files.append(path)
        elif "closed" in name:
            closed_files.append(path)
        else:
            print(f"skip (not open/closed): {path}", file=sys.stderr)

    if not open_files:
        print("no open position CSV files given", file=sys.stderr)
        return 1

    try:
        summary = import_files(
            open_files=open_files,
            closed_files=closed_files,
            open_out=args.open_out,
            closed_out=args.closed_out,
            copy_to=None if args.no_copy else args.copy_to,
        )
    except (OSError, ValueError) as exc:
        print(str(exc), file=sys.stderr)
        return 1

    print(json.dumps(summary, indent=2))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
