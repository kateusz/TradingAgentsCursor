from pathlib import Path
import importlib.util
import json


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
            position_key=None,
            new=False,
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
    assert pos["ticker"] == "GENI.US"
    assert pos["position_key"] == "GENI.US"
    assert pos["history"][-1]["event"] == "bought"

    assert (
        mod.cmd_set(
            path,
            ticker="NVDA",
            position_key=None,
            new=False,
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


def test_multiple_lots_same_ticker(tmp_path: Path):
    mod = _load()
    path = tmp_path / "holdings.json"

    mod.cmd_set(
        path,
        ticker="GENI.US",
        position_key=None,
        new=False,
        status="owned",
        entry=7.3,
        stop_loss=6.39,
        tp1=9.0,
        tp2=10.0,
        horizon="swing",
        run_dir="reports/GENI.US_1",
        event="bought",
        notes="first lot",
    )
    mod.cmd_set(
        path,
        ticker="GENI.US",
        position_key=None,
        new=True,
        status="owned",
        entry=8.1,
        stop_loss=7.5,
        tp1=9.5,
        tp2=11.0,
        horizon="swing",
        run_dir="reports/GENI.US_2",
        event="bought",
        notes="second lot",
    )

    data = mod._load(path)
    assert set(data["positions"]) == {"GENI.US", "GENI.US#2"}
    assert data["positions"]["GENI.US"]["entry"] == 7.3
    assert data["positions"]["GENI.US#2"]["entry"] == 8.1

    import io
    from contextlib import redirect_stdout

    buf = io.StringIO()
    with redirect_stdout(buf):
        mod.cmd_get(path, "GENI.US", None)
    payload = json.loads(buf.getvalue())
    assert payload["ticker"] == "GENI.US"
    assert set(payload["positions"]) == {"GENI.US", "GENI.US#2"}

    buf = io.StringIO()
    with redirect_stdout(buf):
        mod.cmd_get(path, "GENI.US", "GENI.US#2")
    lot2 = json.loads(buf.getvalue())
    assert lot2["entry"] == 8.1
    assert lot2["position_key"] == "GENI.US#2"


def test_set_requires_key_when_multiple_lots(tmp_path: Path):
    mod = _load()
    path = tmp_path / "holdings.json"
    for entry in (7.3, 8.1):
        mod.cmd_set(
            path,
            ticker="GENI.US",
            position_key=None,
            new=entry != 7.3,
            status="owned",
            entry=entry,
            stop_loss=6.0,
            tp1=9.0,
            tp2=10.0,
            horizon="swing",
            run_dir=None,
            event="bought",
            notes=None,
        )

    assert (
        mod.cmd_set(
            path,
            ticker="GENI.US",
            position_key=None,
            new=False,
            status="owned",
            entry=None,
            stop_loss=6.5,
            tp1=None,
            tp2=None,
            horizon=None,
            run_dir=None,
            event="hold",
            notes=None,
        )
        == 1
    )

    assert (
        mod.cmd_set(
            path,
            ticker="GENI.US",
            position_key="GENI.US#2",
            new=False,
            status="owned",
            entry=None,
            stop_loss=7.8,
            tp1=None,
            tp2=None,
            horizon=None,
            run_dir=None,
            event="hold",
            notes=None,
        )
        == 0
    )
    assert mod._load(path)["positions"]["GENI.US#2"]["stop_loss"] == 7.8
