# Prompt for design agent — Trading portfolio dashboard mockups

Copy everything below the line into a new agent session. That agent produces **design only** (`design.md` + mockups). It must **not** write application code.

---

You are a UI/UX design agent. Your only deliverable is a **design specification** and **visual mockups**.

## Output (mandatory)

1. Write **`design.md`** in the project (or the path the user names). It is the single source of truth for layout, IA, components, states, copy, and visual rules.
2. Produce **annotated mockups** for every screen listed below (HTML mockups or equivalent visual companion — follow any mockup-studio / design skill in this workspace). Screenshots or rendered pages, not wireframe-only if a visual format is available.
3. Do **not** implement React/Vue/backend, do **not** change `scripts/`, do **not** invent APIs. If a number is shown, it is **mock data** for the design.

`design.md` must include: information architecture, page-by-page layout (regions, hierarchy, what sits above the fold), component inventory, interaction notes, empty/loading/error/sparse states, typography and density rules, color meaning for P&L, and a realistic content spec (what text/numbers appear where). Enough that an engineer can build from it without guessing.

## Product

A **personal trading dashboard** for one investor who imports **XTB broker CSVs** (three account currencies: PLN, EUR, USD) and runs stock analysis in Cursor (`/analyze-ticker`, `/analyze-portfolio`). The app is a **read-mostly cockpit**: see the book, realized history, watchlist, and links to existing analysis reports. Import is a file drop of CSVs, not a live broker connection.

Audience: the owner (power user). Dense, professional, calm — closer to a trading terminal / brokerage statement than a consumer fintech “wealth app.” Polish or English UI is fine; pick **one language** and stay consistent. Prefer **English UI chrome** with ticker symbols as-is (`TTWO.US`, `XTB.PL`).

## Hard UX constraints (non-negotiable)

1. **Never mix currencies in one total.** There is no FX conversion. “Portfolio value” as a single number across PLN+EUR+USD is **forbidden**. Overview uses **three account cards** or **currency tabs**. Charts and tables are always scoped to one currency, or clearly split.
2. **Last snapshot, not live.** All prices and P&L are as of last CSV import. Show **import timestamp** in the chrome (e.g. “As of 4 Nov 2026, 11:08 UTC”). Do not imply streaming quotes.
3. **Lot ≠ ticker.** One ticker can have several lots (e.g. four TTWO buys). Default open view: **group by ticker**, expand to lots. Each lot has an XTB position id.
4. **Thesis vs broker.** Analysis levels (stop / TP1 / TP2) come from research memory; broker SL/TP are often empty. Design a clear distinction (two columns or “Broker” vs “Plan”). Mismatch / missing plan is a first-class visual state.
5. **Open lots have no category in data** (STOCK/CFD/ETF unknown on open). Do not fake category chips on the open blotter unless labelled “unknown” / omitted. Closed trades **do** have category.
6. **No cash, no total equity, no deposits.** Do not draw a net-worth hero number.

## Realistic mock data (use these so mockups feel true)

**Open — USD (9 lots):** TTWO.US 4 lots, value ~7 788, unrealized ~−1 699 (dominant problem); INTC, GENI, NKE (2 lots), SPCX. Account value ~9 756, unrealized ~−1 828, margin ~1 862, swap ~−176.

**Open — PLN (7 lots):** XTB.PL 4 lots ~2 608, −284; CDR.PL 2 lots; DIA.PL small. Value ~4 765, unrealized ~−376.

**Open — EUR (4 lots):** FLXK.DE 3 lots ~505, −94; tiny BAYN.DE. Value ~513, unrealized ~−94.

**Closed:** 113 slices, 21 tickers. PLN realized ~+488 (high win rate); USD realized ~−211. Mix of STOCK / CFD / ETF. A few `[S/L]` and `[T/P]` comments. No EUR closed history.

**Watchlist:** a handful of names (e.g. NVDA, skipped buys) with last ticket levels, no position size.

**Alerts to show on overview:** no broker stop on almost all lots; TTWO concentration; swap drag on USD CFDs; analysis reports that may be stale; leftover research keys that don’t match broker ids (don’t dump this as a table of 30 keys — one compact “data hygiene” callout is enough).

## Information architecture

Persistent shell:

- Product name (short)
- **As-of / last import**
- Primary nav:
  - Overview
  - Open
  - Closed
  - Watchlist
  - Data (import & health)
- Secondary: currency scope control (USD / PLN / EUR) — global, affects Overview / Open / Closed charts and KPIs. Watchlist is not currency-scoped the same way (no broker value).
- Ticker detail is **not** a top-nav item; it is a drill-down from tables.

No settings beyond what’s needed for mock (theme optional). Desktop-first **1440px**; also specify a **narrow/tablet** behavior (stack account cards, tables scroll horizontally — this is a data product, don’t hide columns into mystery menus).

## Screens to mock (all required)

### 1. Overview

Job: in 5 seconds, see which account is bleeding, what’s concentrated, what to analyze next.

Layout:

- Three **account summary cards** (USD, PLN, EUR) always visible together — not a single blended hero. Each card: market value, unrealized P&L ($ and %), lot count, ticker count. USD card also: margin used, swap. EUR card: small book, still honest.
- **Attention strip**: 3–5 alerts (missing stops, concentration, stale analysis, empty EUR closed). Actionable, not toast spam.
- **Open allocation** for the **selected currency** (bar or treemap): ticker vs value. TTWO should visually dominate USD.
- **Unrealized P&L by ticker** (same currency): signed bars, red/green with a rule that is **not color-only** (sign, +/−, or arrow).
- **Realized this history** (same currency): compact KPI + spark/bar of closed P&L over time (illustrative).
- **Next analyses**: short list of tickers ranked by |unrealized P&L| or size, with a ghost “Analyze” affordance (design only).

Empty: one currency with no lots (don’t invent a fourth). Loading: skeleton cards, not a spinner covering the whole app.

### 2. Open positions

Job: blotter of live lots.

- Toolbar: currency (or inherit global), search ticker, toggle “group by ticker” (default on), filter P&L sign, “missing plan SL”.
- **Grouped table**: ticker header row (lots, VWAP-ish entry, value, combined P&L) + child lot rows (id, volume, open, current, value, P&L $, P&L %, opened date, age, broker SL/TP, plan SL/TP1/TP2, horizon, link to last report).
- Visual: negative P&L readable; TTWO group is large and red without screaming.
- Row click → ticker detail. Lot id is copyable, not a secret.
- Empty search / no lots in EUR-if-filtered: one calm empty state.

### 3. Closed trades

Job: journal + simple performance, still per currency.

- Performance **strip** above the table (same currency): realized P&L, win rate, profit factor, trade/slice count, avg win vs avg loss, swap drag. Tiny, not a statistics dissertation.
- Table of closed **slices** (partial exits = multiple rows). Columns: ticker, category chip (STOCK/CFD/ETF — **here they exist**), side BUY/SELL, volume, open→close price, dates, hold days, P&L, comment badges `[S/L]` `[T/P]`.
- Control to **group by position id** (one trade story). Show this as a segmented control; mock both if space, or grouped as default with a note in design.md.
- Filters: category, win/loss, date range (simple, not a BI tool).
- EUR closed empty: dedicated empty state (“No closed trades in EUR in this export”), not a broken table.

### 4. Watchlist

Job: names you analyzed but do not hold (or skipped buy).

- Cards or compact table: ticker, horizon, plan entry/SL/TP, last report date, status `watching`.
- No fake P&L. CTA: Analyze.
- Empty watchlist state.

### 5. Ticker detail (mock two variants)

**A. Heavy name (TTWO.US):** multiple open lots, large unrealized loss, margin/swap, closed CFD history, plan vs broker levels, link block to last ticket / full report.

**B. Simple stock (GENI.US or NKE.US):** one or two lots, thesis overlay, quieter.

Include: lot ladder (entries over time), distance to plan SL/TP vs current (even if approximate), history of analysis events as a short timeline (hold / reanalyzed) — can be placeholder dates.

### 6. Data / Import

Job: trust the snapshot.

- Drop zone for six CSVs (Open+Closed × PLN/EUR/USD). Show expected file names.
- Last import summary: 20 open lots, 113 closed rows, timestamp, source file list.
- Health: “Open lots have no instrument category”; “Research memory keys don’t match lot ids — join by ticker”; “EUR closed file was empty”.
- Primary button: Import (disabled/enabled states).

### 7. Optional: Open in empty first-run

If you include a first-run: empty Overview with only the import CTA — no fake $0 portfolio pie.

## Visual language

- Dark or light: pick **one**. Prefer a **dark, low-chroma terminal** or a **light institutional** look — not purple SaaS gradients, not neon crypto.
- Numeric tables: tabular figures, right-aligned numbers, tight row height, clear header sticky.
- P&L: green/red **plus** sign and contrast that works for deuteranopia (don’t rely on hue alone).
- Hierarchy: account currency is a **label with equal weight to the number** (so “9 756” cannot be read as “the whole portfolio”).
- Density: information-dense; generous padding on overview cards, compact on tables.
- Motion: none required in mockups; no skeleton animations required in stills.

## Interactions to specify in design.md (not necessarily unique artboards)

- Currency switch updates Overview charts + Open + Closed, **not** the other two account cards’ existence (cards stay).
- Expand/collapse ticker groups.
- Sort: default Open by |unrealized P&L| desc.
- Hover: full timestamp, lot id.
- Focus states for keyboard on tables and nav.
- What happens on “Analyze” (opens a dead-end or labeled “runs in Cursor — out of scope”) — be honest in the mock.

## Do not design

- Order tickets / buy-sell buttons that look like brokerage execution
- Login, multi-user, billing
- Live charts / candlesticks (reports already have charts elsewhere; a small sparkline of **imported P&L** is enough)
- Mobile app / phone-first (a note on horizontal scroll is enough)
- Settings for FX rates (doesn’t exist)
- Gamification, streaks, “you beat the market”

## Quality bar for design.md

- Every region of each screen named.
- Mock numbers match the **realistic data** above in spirit (TTWO dominance, three currencies, EUR small).
- Accessibility: contrast, table captions, alert text not color-only.
- Annotate “broker vs plan” and “currency isolation” on the mockups themselves (small labels).

When done: `design.md` + mockup files/paths listed at the top of `design.md`.
