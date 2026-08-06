from pathlib import Path
import importlib.util


def _load():
    path = Path(__file__).resolve().parents[1] / "scripts" / "portfolio_memory.py"
    spec = importlib.util.spec_from_file_location("portfolio_memory", path)
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod


def test_portfolio_memory_roundtrip(tmp_path: Path):
    mod = _load()
    path = tmp_path / "holdings.json"
    assert (
        mod.cmd_set(
            path,
            ticker="geni.us",
            status="owned",
            entry=7.3,
            stop_loss=6.39,
            tp1=9.0,
            tp2=10.0,
            horizon="swing",
            run_dir="reports/GENI.US_x",
            event="bought",
            notes=None,
        )
        == 0
    )
    pos = mod._load(path)["positions"]["GENI.US"]
    assert pos["status"] == "owned"
    assert pos["entry"] == 7.3
    assert pos["history"][-1]["event"] == "bought"

    assert (
        mod.cmd_set(
            path,
            ticker="NVDA",
            status="watching",
            entry=None,
            stop_loss=None,
            tp1=None,
            tp2=None,
            horizon="swing",
            run_dir=None,
            event="skipped",
            notes="no buy",
        )
        == 0
    )
    assert mod._load(path)["positions"]["NVDA"]["status"] == "watching"
    assert mod._load(path)["positions"]["NVDA"]["notes"] == "no buy"
