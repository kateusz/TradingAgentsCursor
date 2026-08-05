from pathlib import Path
import importlib.util


def _load():
    path = Path(__file__).resolve().parents[1] / "scripts" / "stitch_report.py"
    spec = importlib.util.spec_from_file_location("stitch_report", path)
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod


def test_stitch_skips_missing_and_writes_complete(tmp_path):
    mod = _load()
    (tmp_path / "1_analysts").mkdir()
    (tmp_path / "5_portfolio").mkdir()
    (tmp_path / "1_analysts" / "market.md").write_text("market body\n")
    (tmp_path / "5_portfolio" / "decision.md").write_text("Hold\n")
    out = mod.stitch_report(tmp_path)
    text = out.read_text()
    assert "# Market Analyst" in text
    assert "market body" in text
    assert "# Portfolio Manager Decision" in text
    assert "# Sentiment Analyst" not in text
    assert out == tmp_path / "complete_report.md"
