---
name: analyze-portfolio
description: >-
  Re-runs /analyze-ticker for every owned position in portfolio/holdings.json,
  one Cursor Task subagent per ticker. Use when the user says /analyze-portfolio,
  asks to re-analyze holdings, or analyze all owned instruments.
---

# Analyze Portfolio (owned positions)

Fan-out: for each `status=owned` ticker in `portfolio/holdings.json`, launch **one** Task subagent that runs the full [analyze-ticker](../analyze-ticker/SKILL.md) pipeline.

## Inputs

| Key | Default | Notes |
|-----|---------|-------|
| `date` | today local `YYYY-MM-DD` | Passed to every child |
| `depth` | `shallow` | Daily refresh default. Use `medium`/`deep` for a full rebuild |
| `horizon` | per-position or `swing` | Global override if set; else use holdings `horizon`, else `swing` |
| `tickers` | all owned | Optional comma filter, e.g. `tickers=GENI.US,NVDA` |
| `model` | `composer-2.5` | Always Composer, never Fast |

Examples:

```
/analyze-portfolio
/analyze-portfolio depth=medium
/analyze-portfolio date=2026-08-06 tickers=GENI.US,TTWO.US
/analyze-portfolio horizon=swing
```

**Why default `shallow`:** owned names already have a thesis in memory + prior reports. A next-day pass mainly refreshes price/levels (1 debate + 1 risk cycle). Use `depth=medium` or `deep` when the story changed (earnings, gap, thesis break) or after a long pause.
## Model (required)

Same as analyze-ticker: **`composer-2.5` only** on parent and every Task. Never Fast.

## Steps

### 1. Resolve paths

- `REPO_ROOT` = workspace root
- `ANALYZE_SKILL` = `{REPO_ROOT}/.cursor/skills/analyze-ticker/SKILL.md`

### 2. List owned

```bash
python scripts/portfolio_memory.py list --status owned
```

- If `positions` empty: stop and tell the user to mark holdings first (`portfolio_memory.py set …` or finish an `/analyze-ticker` buy flow).
- If `tickers=` given: keep only those keys (uppercase) that are owned; warn on unknowns / not-owned.

Build list `OWNED = [{ticker, entry, stop_loss, tp1, tp2, horizon}, …]`.

Confirm to the user: *Re-analyzing N owned tickers: …* then continue (no extra gate unless list is empty).

### 3. Launch one Task per ticker (parallel)

In **one message**, launch **N** Tasks (one per ticker). Do **not** analyze tickers yourself in the parent.

**Task settings (every child):**

- `subagent_type`: `generalPurpose`
- `model`: `composer-2.5`
- `run_in_background`: `false`
- `description`: `analyze {TICKER}`

**Child prompt template** (fill absolute paths and fields):

```
You are a per-ticker worker for analyze-portfolio.

REPO_ROOT: {REPO_ROOT}
Follow EXACTLY the skill at: {ANALYZE_SKILL}

Inputs for this run only:
- ticker={TICKER}
- date={DATE}
- depth={DEPTH}
- horizon={HORIZON}
- model=composer-2.5

Hard overrides for this portfolio batch:
1. Position status is OWNED (memory + user portfolio). Do NOT ask whether they own shares.
2. Use role recommendations-existing-position.md.
3. After writing the trade ticket, do NOT ask hold/add/exit.
4. Persist memory once:
   python scripts/portfolio_memory.py set --ticker {TICKER} --status owned --event reanalyzed \
     --stop-loss <from ticket> --tp1 <from ticket> --tp2 <from ticket> \
     --horizon {HORIZON} --run-dir <RUN_DIR>
   Keep existing entry unless the ticket clearly updates an add price — then pass --entry.
5. Known position context (from holdings): entry={ENTRY} sl={SL} tp1={TP1} tp2={TP2}

When done, return ONLY:
- RUN_DIR absolute path
- path to recommendations.md
- path to complete_report.md
- WERDYKT KOŃCOWY line
- chart path if any
```

Use holdings values for `{ENTRY}` etc. (`null` if missing). `{HORIZON}` = user override, else that position’s `horizon`, else `swing`.

### 4. Parent summary

After all Tasks finish, reply with a compact table:

| Ticker | Werdykt | Entry (mem) | SL | TP1 | TP2 | recommendations.md |
|--------|---------|-------------|----|-----|-----|--------------------|

Then list any failures (missing ticket / empty RUN_DIR) and offer to re-run failed tickers only (`/analyze-portfolio tickers=…`).

Do **not** paste full `complete_report.md` files.

## Constraints

- One Task = one ticker = full analyze-ticker pipeline (that child may spawn its own analyst Tasks).
- Parent never skips the list step; never invents owned tickers.
- Empty portfolio → stop.
- `composer-2.5` only.
- Batch mode skips per-ticker action Q&A; memory gets `event=reanalyzed` with refreshed SL/TP from tickets.
