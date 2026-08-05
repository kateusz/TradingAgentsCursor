import importlib.util
import json
from pathlib import Path
from unittest.mock import patch

import pytest


def _load_module():
    path = Path(__file__).resolve().parents[1] / "scripts" / "fetch_bundle.py"
    spec = importlib.util.spec_from_file_location("fetch_bundle", path)
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod


def test_fetch_bundle_writes_meta_and_stock(tmp_path):
    mod = _load_module()

    def fake_route(method, *args, **kwargs):
        return f"MOCK:{method}:{args}"

    with patch.object(mod, "route_to_vendor", side_effect=fake_route):
        out = tmp_path / "0_data"
        summary = mod.fetch_bundle(ticker="AAPL", date="2024-05-10", out_dir=out)

    assert (out / "meta.json").exists()
    meta = json.loads((out / "meta.json").read_text())
    assert meta["ticker"] == "AAPL"
    assert meta["date"] == "2024-05-10"
    assert (out / "stock.txt").read_text().startswith("MOCK:get_stock_data")
    assert (out / "indicators.txt").exists()
    assert (out / "news.txt").exists()
    assert summary["ticker"] == "AAPL"
    assert "stock.txt" in summary["files"]


def test_fetch_bundle_normalizes_ticker(tmp_path):
    mod = _load_module()
    with patch.object(mod, "route_to_vendor", return_value="ok"):
        mod.fetch_bundle(ticker=" aapl ", date="2024-05-10", out_dir=tmp_path)
    meta = json.loads((tmp_path / "meta.json").read_text())
    assert meta["ticker"] == "AAPL"


def test_fetch_bundle_invalid_date_raises(tmp_path):
    mod = _load_module()
    with pytest.raises(ValueError):
        mod.fetch_bundle(ticker="AAPL", date="10-05-2024", out_dir=tmp_path)
