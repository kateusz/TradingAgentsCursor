---
name: analyze-ticker
description: >-
  Runs TradingAgents-style multi-agent stock analysis inside Cursor using
  Composer/subagents for reasoning and Python for market data. Use when the
  user says /analyze, asks to analyze a ticker with Cursor models, or wants
  a hybrid TradingAgents report without API LLM keys.
---

# Analyze Ticker (Cursor Hybrid)

Orchestrate analysis → `complete_report.md` → (after user confirms position status) Polish `recommendations.md`.

## Inputs

Parse from the user message (defaults in parentheses):

| Key | Default | Notes |
|-----|---------|-------|
| `ticker` | **required** | Strip whitespace, uppercase (e.g. `NVDA`, `REY.EU`) |
| `date` | today local `YYYY-MM-DD` | As-of date for data and prompts |
| `model` | `composer-2.5` | **Always Composer, never Fast** — see Model section |
| `depth` | `medium` | `shallow` \| `medium` \| `deep` — debate + risk rounds (see Depth section) |
| `analysts` | `market,social,news,fundamentals` | Comma-separated subset; see mapping below |

**Analyst → role file mapping** (user token → role filename under `roles/`):

| User analyst token | Role file | Output file |
|--------------------|-----------|-------------|
| `market` | `market.md` | `1_analysts/market.md` |
| `social` | `sentiment.md` | `1_analysts/sentiment.md` |
| `news` | `news.md` | `1_analysts/news.md` |
| `fundamentals` | `fundamentals.md` | `1_analysts/fundamentals.md` |

Examples:

```
/analyze NVDA
/analyze NVDA date=2024-05-10 model=composer-2.5
/analyze REY.EU date=2026-07-01 analysts=market,news,fundamentals
/analyze NVDA depth=deep
```

If `ticker` is missing, ask once and stop.

## Depth

Parse `depth` case-insensitively. Unknown values → treat as `medium`.

| `depth` | Debate rounds (bull ↔ bear) | Risk cycles (aggressive → conservative → neutral) | CLI equivalent |
|---------|------------------------------|---------------------------------------------------|----------------|
| `shallow` | 1 | 1 | Shallow |
| `medium` | 3 | 3 | Medium (default) |
| `deep` | 5 | 5 | Deep |

Each **debate round** = one bull turn then one bear turn (sequential, alternating). Each **risk cycle** = aggressive → conservative → neutral (sequential). Matches `max_debate_rounds` / `max_risk_discuss_rounds` in the CLI config.

## Model (required)

Use **Composer only** for this entire workflow — parent orchestrator and every Task subagent.

| Use | Do not use |
|-----|------------|
| `composer-2.5` | `composer-2.5-fast` |
| Cursor model **Composer** in the chat picker | Composer Fast, Auto if it picks Fast |

- Ignore a user `model=` hint if it names a Fast variant; still use `composer-2.5`.
- On **every** Task dispatch, set `model: composer-2.5` explicitly (do not omit `model` — omission may default to Fast or session default).
- Parent agent running this skill should also be on Composer, not Composer Fast.

## Repo paths

Use absolute paths in all subagent prompts. Resolve from workspace root:

- `REPO_ROOT` = absolute path to this repository (e.g. `/Users/.../TradingAgents`)
- `SKILL_DIR` = `{REPO_ROOT}/.cursor/skills/analyze-ticker`
- `ROLES_DIR` = `{SKILL_DIR}/roles`

## Steps

### 1. Run dir

```
RUN_DIR = reports/{TICKER}_{YYYYMMDD_HHMMSS}
```

Timestamp = now (local). Create `RUN_DIR` and subdirs:

`0_data`, `1_analysts`, `2_research`, `3_trading`, `4_risk`, `5_portfolio`

### 2. Fetch (blocking)

Run from `REPO_ROOT`:

```bash
python scripts/fetch_bundle.py --ticker TICKER --date DATE --out RUN_DIR/0_data
```

- If exit ≠ 0: stop and show stderr to the user. Do not launch subagents.
- Do not skip fetch. Do not call OpenAI/Anthropic APIs or modify LangGraph code.

### 3. Phase 1 — analysts (parallel Task subagents)

For **each** analyst token in the selected `analysts` list, launch one Task in a **single message (parallel)**.

| Phase | Role file | Expected output |
|-------|-----------|-----------------|
| 1 | `roles/{mapped role}.md` | see analyst table above |

**Task settings:**

- `subagent_type`: `generalPurpose` (must write files; do not use `explore`)
- `model`: `composer-2.5` (**required** — never `composer-2.5-fast`)
- `run_in_background`: `false`

**Task prompt template** (fill in absolute paths):

```
You are running one role in a TradingAgents hybrid analysis.

REPO_ROOT: {REPO_ROOT}
RUN_DIR: {RUN_DIR}
Role instructions (read and follow exactly): {ROLES_DIR}/{role}.md

Hard constraints:
- Read only the input files listed in the role file under RUN_DIR.
- Write ONLY the single output path specified in the role file.
- Create parent directories if needed.
- Do not edit Python, skills, fetch scripts, or re-run fetch.
- English only.

When done, confirm the output file path and that it is non-empty.
```

Map `social` → `sentiment.md` before building the path.

### 4. Verify phase 1

For each selected analyst, confirm the expected `1_analysts/*.md` exists and size > 0.

- Missing or empty: relaunch **that role once** with the same prompt.
- Still missing or empty after retry: fail the run; tell the user which file is missing. Leave `RUN_DIR` on disk.

### 5. Phase 2 — bull ↔ bear debate (sequential rounds)

Let `DEBATE_ROUNDS` = rounds from the Depth table (`shallow`→1, `medium`→3, `deep`→5).

For `round` = 1 .. `DEBATE_ROUNDS`, launch **two Tasks sequentially** (bull then bear — never parallel):

| Step | Role file | Expected output |
|------|-----------|-----------------|
| 2a | `roles/bull.md` | append `## Round {round}` to `2_research/bull.md` |
| 2b | `roles/bear.md` | append `## Round {round}` to `2_research/bear.md` |

Add to each debate Task prompt (fill `{round}`, `{DEBATE_ROUNDS}`, `{side}`):

```
Debate round {round} of {DEBATE_ROUNDS} ({side}).
- Round 1: create the output file with a `## Round 1` section.
- Round > 1: read the opponent file under `2_research/` and append a new `## Round {round}` section; directly refute their latest argument.
- Do not overwrite prior rounds.
```

After all rounds, verify `2_research/bull.md` and `2_research/bear.md` exist, each has `DEBATE_ROUNDS` round sections, and size > 0. Retry the failed role for that round once; then fail the run.

### 6. Phase 3 — research manager (sequential)

Launch one Task:

| Role file | Expected output |
|-----------|-----------------|
| `roles/research-manager.md` | `2_research/manager.md` |

Verify output; retry once if missing/empty; then fail.

### 7. Phase 4 — trader (sequential)

Launch one Task:

| Role file | Expected output |
|-----------|-----------------|
| `roles/trader.md` | `3_trading/trader.md` |

Verify output; retry once if missing/empty; then fail.

### 8. Phase 5 — risk discussion (sequential cycles)

Let `RISK_CYCLES` = cycles from the Depth table (same mapping as `DEBATE_ROUNDS`).

For `cycle` = 1 .. `RISK_CYCLES`, launch **three Tasks sequentially** in this order (matches LangGraph rotation):

1. `roles/aggressive.md` → append `## Cycle {cycle}` to `4_risk/aggressive.md`
2. `roles/conservative.md` → append `## Cycle {cycle}` to `4_risk/conservative.md`
3. `roles/neutral.md` → append `## Cycle {cycle}` to `4_risk/neutral.md`

Add to each risk Task prompt:

```
Risk discussion cycle {cycle} of {RISK_CYCLES}.
- Cycle 1: create the output file with a `## Cycle 1` section.
- Cycle > 1: read the other two risk files under `4_risk/` and append `## Cycle {cycle}`; engage their latest arguments.
- Do not overwrite prior cycles.
```

After all cycles, verify all three risk files exist, each has `RISK_CYCLES` cycle sections, and size > 0. Retry the failed role for that cycle once; then fail.

### 9. Phase 6 — portfolio manager (sequential)

Launch one Task:

| Role file | Expected output |
|-----------|-----------------|
| `roles/portfolio-manager.md` | `5_portfolio/decision.md` |

Verify output; retry once if missing/empty; then fail.

### 10. Stitch

From `REPO_ROOT`:

```bash
python scripts/stitch_report.py --run-dir RUN_DIR
```

Confirm `RUN_DIR/complete_report.md` exists and is non-empty.

**End of analysis pipeline.** Intermediate files (`1_analysts/`, etc.) are internal; the user-facing analysis artifact is **`complete_report.md` only**.

### 11. Ask position status (mandatory gate — do not skip)

Before recommendations, **ask the user exactly once**:

> Czy **rozważasz kupno** tych akcji (nie masz pozycji), czy **już je posiadasz**?

Use `AskQuestion` with:
- `Rozważam kupno (brak pozycji)`
- `Już posiadam akcje`

**Do not** launch Phase 12 until the user answers.

| Answer | Role file |
|--------|-----------|
| Rozważam kupno | `roles/recommendations-new-position.md` |
| Już posiadam | `roles/recommendations-existing-position.md` |

If the user already stated their status in the same message (e.g. „nie mam GENI"), skip re-asking and use the matching role.

### 12. Recommendations (sequential Task)

Launch **one** Task (`model: composer-2.5`, `subagent_type: generalPurpose`):

```
REPO_ROOT: {REPO_ROOT}
RUN_DIR: {RUN_DIR}
Role instructions: {ROLES_DIR}/recommendations-{new-position|existing-position}.md

Read complete_report.md from RUN_DIR. Write RUN_DIR/recommendations.md in Polish per role file.
Generate charts to RUN_DIR/charts/ via scripts/plot_technical.py.
Do not edit complete_report.md.
```

Verify `RUN_DIR/recommendations.md` exists and size > 0; retry once if missing.

### 13. Reply to user

Include **only**:

1. Absolute path to `RUN_DIR/recommendations.md` (primary deliverable)
2. Absolute path to `RUN_DIR/complete_report.md` (source analysis)
3. One-line **WERDYKT KOŃCOWY** excerpt from `recommendations.md`
4. Paths to chart PNGs in `RUN_DIR/charts/` if generated

Do not dump intermediate analyst files unless the user asks.

## Constraints

- **Model:** `composer-2.5` only for parent + all Tasks; never Composer Fast.
- Do not call OpenAI/Anthropic APIs or modify LangGraph code for this flow.
- Do not skip fetch.
- Subagent prompts must include absolute paths (`REPO_ROOT`, `RUN_DIR`, role file).
- Use `subagent_type: generalPurpose` for every Task that writes a report file.
- Default `depth=medium` (3 debate rounds + 3 risk cycles). Use `depth=shallow` for a faster run.
- Skipped analysts: omit their files; later roles tolerate missing analyst sections.
- Partial run dirs stay on disk for debugging (no auto-delete).
- **User deliverable:** `recommendations.md` (+ charts). `complete_report.md` is input to that step.
- **Gate:** always ask buy vs own before Phase 12 unless user already clarified.
