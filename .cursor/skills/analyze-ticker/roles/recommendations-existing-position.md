# Role: Polish trade ticket (investor ALREADY owns shares)

## Hard rules
- **Primary sources:** `3_trading/trader.md` and `5_portfolio/decision.md`. Compress — do **not** re-write full research from `complete_report.md`.
- Optionally skim `complete_report.md` / `meta.json` for missing numbers or chart levels.
- Write ONLY `RUN_DIR/recommendations.md` (Polish). Max ~600 words.
- Generate one chart via `scripts/plot_technical.py`.
- Do not edit other files. Do not re-run fetch.
- **One horizon only** — use `{HORIZON}` from the parent (`swing` | `position`). No multi-strategy essays.

## Inputs
- `RUN_DIR/3_trading/trader.md` (**required**)
- `RUN_DIR/5_portfolio/decision.md` (**required**)
- `RUN_DIR/0_data/meta.json`, `0_data/stock.txt`
- `REPO_ROOT/portfolio/holdings.json` (if present — use stored entry/SL for context)
- `RUN_DIR/complete_report.md` (optional fill-ins)

## Output
- `RUN_DIR/recommendations.md`
- `RUN_DIR/charts/*.png`

## Prompt (follow exactly)

**ZAŁOŻENIE:** Inwestor **JUŻ POSIADA** pozycję długą (potwierdzone przez użytkownika lub `portfolio/holdings.json`). Decyzja: trzymaj / dokup / redukuj / wyjdź. Horyzont: **{HORIZON}**.

Jeśli w holdings jest `entry` / `stop_loss` dla tickera, wspomnij je w ticketcie jako **pozycja zapisana** (nie wymyślaj innych).

Napisz **wyłącznie** ticket (bez list ostrzeżeń, 3 profili inwestora ani dużych tabel alertów).

```markdown
# {TICKER} — Ticket posiadacza ({DATE})

**Werdykt:** HOLD | ADD | REDUCE | EXIT
**Horyzont:** …
**Cena ref.:** $X.XX

| | Poziom | Uwagi |
|---|--------|------|
| **Akcja teraz** | … | trzymaj / dokup @ $… / sprzedaj X% @ market |
| **Stop-loss** | $… | twardy / trailing |
| **TP1** | $… | redukcja części |
| **TP2** | $… | wyjście reszty |

**Sizing / skala:** …
**Warunek dokupu** (jeśli ADD): …
**Unieważnienie / pełne wyjście:** …

**Dlaczego (1–2 zdania):** …

**WERDYKT KOŃCOWY:** …

![wykres](charts/…)
```

### Mapowanie werdyktu
- PM Buy / Overweight → **ADD** lub **HOLD** (ADD tylko z jasnym poziomem dokupu)
- PM Hold → **HOLD** (+ SL/TP do zarządzania)
- PM Underweight → **REDUCE** (podaj % i poziom)
- PM Sell → **EXIT**

Poziomy z Trader/PM; przy konflikcie wygrywa **Portfolio Manager**.

### Wykres
```bash
python scripts/plot_technical.py \
  --stock RUN_DIR/0_data/stock.txt \
  --ticker TICKER \
  --date DATE \
  --current PRICE \
  --support SL,... \
  --resistance TP1,TP2 \
  --out RUN_DIR/charts
```

Osadź PNG. Koniec.
