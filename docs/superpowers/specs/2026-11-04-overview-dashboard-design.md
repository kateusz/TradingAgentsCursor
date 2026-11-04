# Overview Dashboard Design

## Scope

Implement only the localhost Overview screen from the approved Obsidian Capital design. Open, Closed, Watchlist, and Data remain visible navigation labels but are not implemented in this iteration.

## Architecture

- Create a Vite + React app in `dashboard/`.
- Use Tailwind CSS for styling and local font packages for Geist and JetBrains Mono.
- Import `portfolio/broker/open.json`, `portfolio/broker/closed.json`, and `portfolio/thesis.json` directly through Vite.
- Compute all displayed metrics in a pure client-side aggregation module. Do not add an API, database, synthetic FX conversion, or generated duplicate snapshot.

## Screen Structure

1. Terminal header with product label, imported snapshot timestamp, currency scope, and hygiene count.
2. Primary navigation with Overview active.
3. Currency-isolation notice.
4. Three always-visible account cards for USD, PLN, and EUR.
5. Attention strip derived from broker and thesis data.
6. Selected-currency workspace:
   - open allocation and position ranking,
   - action queue for the highest-risk or stalest names,
   - realized-history metrics and compact trajectory.
7. Thin terminal status footer.

At widths below 1200px, cards and workspace panels stack. Tables and dense rows preserve their columns through horizontal scrolling rather than hiding data.

## Data Rules

- Never aggregate money across currencies.
- Treat values as a last-import snapshot, not live prices.
- Group open lots by ticker while retaining lot counts.
- Derive account value, unrealized P&L, margin, swap, lot count, and ticker count from open lots.
- Derive realized P&L, win rate, profit factor, and history trajectory from closed records in the selected currency.
- Distinguish missing broker stops from thesis plan levels.
- Rank allocations by market value and actions by concentration, absolute loss, or stale thesis.
- “Analyze” copies `/analyze-ticker TICKER` to the clipboard; it does not execute a trade or analysis.

## Visual Rules

- Follow the supplied Obsidian Capital palette and screenshot layout.
- Use sharp 0px geometry, 1px structural borders, no persistent shadows, and restrained semantic color.
- Use Geist for interface text and JetBrains Mono for numbers, timestamps, tickers, and labels.
- Encode gains and losses with both sign and color.
- Keep keyboard focus visible and use semantic buttons, navigation, headings, and accessible labels.

## Error and Empty States

- A currency with no open lots shows a calm zero-data state without inventing equity or cash.
- A currency with no closed records shows “No closed trades in this export.”
- Missing thesis data appears as “No plan,” not as zero.
- Clipboard failure leaves the command visible and changes the action message to instruct manual copying.

## Verification

- Write Node built-in tests for currency isolation, account aggregation, grouped ticker metrics, and closed-history metrics before implementation.
- Run the aggregation tests and production build.
- Start the localhost app and visually verify desktop and narrow layouts against the supplied screenshot.
