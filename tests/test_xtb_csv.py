from pathlib import Path
import importlib.util


def _xtb_csv():
    path = Path(__file__).resolve().parents[1] / "scripts" / "xtb_csv.py"
    spec = importlib.util.spec_from_file_location("xtb_csv", path)
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod


def test_parse_decimal():
    xtb = _xtb_csv()
    assert xtb.parse_decimal("2607,6") == 2607.6
    assert xtb.parse_decimal("-66") == -66.0
    assert xtb.parse_decimal("") is None


def test_parse_open_lots(tmp_path: Path):
    xtb = _xtb_csv()
    csv = tmp_path / "XTB-USD - Open Positions.csv"
    csv.write_text(
        "Product,Instrument/Position,Ticker,Category,Type,Volume,Value,Current price,Open price,Open time (UTC),Stop Loss,Take Profit,Net Profit %,Net Profit,Gross Profit,Margin,Open Commission,Swap,Rollover\n"
        "My Trades,Genius Sports,GENI.US,STOCK,,60,408,,8,28,,,,-17,87,-88,8,-88,8,,,,\n"
        'My Trades,2738235085,GENI.US,,BUY,60,408,"6,8","8,28",2026-08-05 13:48:46,,,"-17,87","-88,8","-88,8",,,,\n',
        encoding="utf-8",
    )
    lots = xtb.parse_open_csv(csv, "USD")
    assert len(lots) == 1
    assert lots[0]["position_key"] == xtb.position_key("GENI.US", "2738235085")
    assert lots[0]["open_price"] == 8.28
    assert lots[0]["volume"] == 60.0


def test_parse_closed_skips_footer(tmp_path: Path):
    xtb = _xtb_csv()
    csv = tmp_path / "XTB-PLN - Closed Positions.csv"
    csv.write_text(
        "Instrument,Ticker,Category,Type,Volume,Open Price,Open Time (UTC),Close Price,Close Time (UTC),Product,Profit/Loss,Gross Profit,Purchase Value,Sale Value,Stop Loss,Take Profit,Commission,Margin,Swap,Rollover,Open Conversion Rate,Close Conversion Rate,Close Origin,Position ID,Comment\n"
        "Action,ACT.PL,STOCK,BUY,1,53,2026-11-02 10:52:31,54,2026-11-04 10:31:07,My Trades,1,1,53,54,,,0,,,,,,iOS,2909228654,\n"
        "Profit/loss,,,,,,,,,,488,28,,,,,,,,,,,,,,\n",
        encoding="utf-8",
    )
    rows = xtb.parse_closed_csv(csv, "PLN")
    assert len(rows) == 1
    assert rows[0]["position_id"] == "2909228654"
