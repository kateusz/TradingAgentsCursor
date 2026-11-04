"""Tests for GPW (.WA) Bankier/PAP enrichment."""

from unittest.mock import patch

import pytest

from tradingagents.dataflows.polish_market import (
    BankierInstrument,
    _matches_keywords,
    _parse_rss_items,
    is_gpw_ticker,
    resolve_bankier_instrument,
)


@pytest.mark.unit
def test_is_gpw_ticker():
    assert is_gpw_ticker("CDR.WA")
    assert is_gpw_ticker(" cdr.wa ")
    assert not is_gpw_ticker("NVDA.US")
    assert not is_gpw_ticker("CDR")


@pytest.mark.unit
def test_matches_keywords():
    assert _matches_keywords("CD Projekt RED podało datę", ["CDR", "CD Projekt"])
    assert not _matches_keywords("Orlen raport kwartalny", ["CDR", "CD Projekt"])


@pytest.mark.unit
def test_parse_rss_items_minimal():
    xml = """<?xml version="1.0"?>
    <rss><channel>
      <item>
        <title>Test CD Projekt headline</title>
        <link>https://example.com/a</link>
        <description><![CDATA[Body text]]></description>
        <pubDate>Mon, 01 Sep 2026 10:00:00 +0000</pubDate>
      </item>
    </channel></rss>"""
    items = _parse_rss_items(xml)
    assert len(items) == 1
    assert items[0][1] == "Test CD Projekt headline"
    assert items[0][3] == "https://example.com/a"


@pytest.mark.unit
def test_resolve_bankier_instrument_from_search():
    fake = {
        "companies": [
            {
                "symbol": "CDPROJEKT",
                "ticker_gpw": "CDR",
                "nazwa": "CD PROJEKT RED Spółka Akcyjna",
                "isin": "PLOPTTC00011",
            }
        ]
    }
    with patch(
        "tradingagents.dataflows.polish_market._search_bankier",
        return_value=fake["companies"],
    ):
        inst = resolve_bankier_instrument("CDR.WA")
    assert inst == BankierInstrument(
        symbol="CDPROJEKT",
        ticker_gpw="CDR",
        name="CD PROJEKT RED Spółka Akcyjna",
        isin="PLOPTTC00011",
    )


@pytest.mark.unit
def test_resolve_bankier_instrument_action():
    fake = [
        {"symbol": "CALL2", "ticker_gpw": "C2A", "nazwa": "Call2Action", "isin": ""},
        {"symbol": "ACTION", "ticker_gpw": "ACT", "nazwa": "Action Spółka Akcyjna", "isin": ""},
    ]
    with patch("tradingagents.dataflows.polish_market._search_bankier", return_value=fake):
        inst = resolve_bankier_instrument("ACT.WA")
    assert inst is not None
    assert inst.symbol == "ACTION"
    assert inst.ticker_gpw == "ACT"
