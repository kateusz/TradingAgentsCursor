---
description: TradingAgents hybrid ticker analysis → Polish trade ticket (Entry/SL/TP)
agent: build
---
Load the `analyze-ticker` skill via the skill tool, then execute it end-to-end.

## Arguments

Parse from `$ARGUMENTS` (same keys as the skill):

| Key | Default | Notes |
|-----|---------|-------|
| `ticker` | **required** (first bare token) | Uppercase, e.g. `NVDA`, `REY.EU` |
| `date` | today local `YYYY-MM-DD` | |
| `depth` | `medium` | `shallow` \| `medium` \| `deep` |
| `horizon` | `swing` | `swing` \| `position` |
| `analysts` | `market,social,news,fundamentals` | Comma-separated |

Examples the user may have typed:

```
/analyze-ticker NVDA
/analyze-ticker NVDA depth=deep horizon=swing
/analyze-ticker REY.EU analysts=market,news,fundamentals
```

Raw arguments: $ARGUMENTS

If ticker is missing, ask once and stop.

## OpenCode overrides (replace Cursor-only bits in the skill)

1. **Subagents:** use the `task` tool with `subagent_type: general` for every role that writes a report file. Never use `explore` for writers.
2. **Parallel:** Phase 1 analysts — launch all selected analyst `task` calls in **one** assistant message.
3. **Sequential:** bull↔bear rounds, research manager, trader, risk cycles, portfolio manager, recommendations — one `task` at a time.
4. **Model:** use the current OpenCode session model. Ignore skill rules about `composer-2.5` / Composer Fast.
5. **Paths:** `REPO_ROOT` = workspace root. `SKILL_DIR` / `ROLES_DIR` stay under `.cursor/skills/analyze-ticker` (roles are shared; symlink lives at `.opencode/skills/analyze-ticker`).
6. Do not call OpenAI/Anthropic APIs or modify LangGraph for this flow. Do not skip fetch.

Follow the skill steps exactly after applying the overrides above.
