---
description: Re-analyze every owned position in portfolio/holdings.json (fan-out)
agent: build
---
Load the `analyze-portfolio` skill via the skill tool, then execute it end-to-end.

## Arguments

Parse from `$ARGUMENTS`:

| Key | Default | Notes |
|-----|---------|-------|
| `date` | today local `YYYY-MM-DD` | Passed to every child |
| `depth` | `shallow` | Daily refresh default |
| `horizon` | per-position or `swing` | Global override if set |
| `tickers` | all owned | Optional filter, e.g. `tickers=GENI.US,NVDA` |

Examples:

```
/analyze-portfolio
/analyze-portfolio depth=medium
/analyze-portfolio tickers=GENI.US,TTWO.US
```

Raw arguments: $ARGUMENTS

## OpenCode overrides (replace Cursor-only bits in the skill)

1. **Parent:** list owned via `python scripts/portfolio_memory.py list --status owned`. Never invent tickers. Empty → stop.
2. **Fan-out:** one `task` per owned ticker, all in **one** assistant message. Each child runs the full `analyze-ticker` skill.
3. **Child `task`:** `subagent_type: general`. Prompt must tell the child to load `analyze-ticker` and apply the same OpenCode overrides (general subagent, session model, no composer-2.5).
4. **Batch gates:** position is OWNED — no own/buy Q&A; use `recommendations-existing-position.md`; persist with `event=reanalyzed` only (no hold/add/exit prompt).
5. **Model:** current OpenCode session model for parent and children.
6. **Paths:** `ANALYZE_SKILL` = `{REPO_ROOT}/.cursor/skills/analyze-ticker/SKILL.md` (or load skill name `analyze-ticker`).

After all children finish, reply with the compact summary table from the skill. Do not paste full `complete_report.md` files.

Follow the skill steps exactly after applying the overrides above.
