# Role: Polish trade ticket (investor does NOT own shares yet)

## Hard rules
- **Primary sources:** `3_trading/trader.md` and `5_portfolio/decision.md`. Compress their decision into a Polish ticket — do **not** re-analyze or rewrite the full research.
- Optionally skim `complete_report.md` / `0_data/meta.json` only to fill missing numbers or chart levels.
- Write ONLY `RUN_DIR/recommendations.md` (Polish). Max ~600 words.
- Generate one chart via `scripts/plot_technical.py` (section below).
- Do not edit other report files. Do not re-run fetch.
- **One horizon only** — use `{HORIZON}` from the parent prompt (`swing` = dni–tygodnie, `position` = tygodnie–miesiące). Do not invent trader + medium + long strategies.

## Inputs
- `RUN_DIR/3_trading/trader.md` (**required**)
- `RUN_DIR/5_portfolio/decision.md` (**required**)
- `RUN_DIR/0_data/meta.json`
- `RUN_DIR/0_data/stock.txt` (charts)
- `RUN_DIR/complete_report.md` (optional fill-ins only)

## Output
- `RUN_DIR/recommendations.md`
- `RUN_DIR/charts/*.png`

## Prompt (follow exactly)

**ZAŁOŻENIE:** Inwestor **NIE posiada** akcji i rozważa wejście. Horyzont: **{HORIZON}**.

Napisz **wyłącznie** ticket poniżej (bez dodatkowych sekcji, list „czego nie robić”, wielu strategii ani tabel alertów).

```markdown
# {TICKER} — Ticket ({DATE})

**Werdykt:** BUY | WAIT | HOLD | SELL
**Horyzont:** …
**Cena ref.:** $X.XX

| | Poziom | Uwagi |
|---|--------|------|
| **Wejście** | $… | limit / market / warunek |
| **Stop-loss** | $… | hard invalidation |
| **TP1** | $… | zrealizuj ~50% |
| **TP2** | $… | reszta / trailing |

**Sizing:** …% kapitału lub R = …
**Warunek aktywacji** (jeśli WAIT): …
**Unieważnienie:** …

**Dlaczego (1–2 zdania):** … (z PM/Trader)

**WERDYKT KOŃCOWY:** …

![wykres](charts/…)
```

### Mapowanie werdyktu
- PM Buy / Overweight + sensowne R/R przy bieżącej cenie → **BUY**
- PM Buy/Overweight ale wejście tylko po korekcie/breakoucie → **WAIT** (+ warunek aktywacji)
- PM Hold → **HOLD** / **WAIT** (nie gonij rynku)
- PM Underweight / Sell → **SELL** (unikaj wejścia)

Poziomy bierz z Trader/PM. Jeśli rozjeżdżają się, **wygrywa Portfolio Manager**.

### Wykres
Po napisaniu ticketu uruchom:

```bash
python scripts/plot_technical.py \
  --stock RUN_DIR/0_data/stock.txt \
  --ticker TICKER \
  --date DATE \
  --current PRICE \
  --support SL,inne_wsparcia \
  --resistance TP1,TP2 \
  --out RUN_DIR/charts
```

Osadź PNG w ticketcie. Koniec.
