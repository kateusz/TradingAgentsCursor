import assert from "node:assert/strict";
import test from "node:test";
import { buildOverview, classifyImportName, closedStats, filterClosed, filterOpenGroups, filterWatch, groupClosed, openStats, stageImports } from "./metrics.js";

function lot(currency, ticker, value, pnl, extra = {}) {
  const id = extra.position_id ?? `${ticker}-${value}`;
  return {
    position_key: `${ticker}#${id}`,
    position_id: id,
    ticker,
    account_currency: currency,
    volume: extra.volume ?? 1,
    value,
    current_price: extra.current ?? value,
    open_price: extra.open ?? value - pnl,
    open_time_utc: extra.opened ?? "2026-10-01 10:00:00",
    broker_stop_loss: extra.stop ?? null,
    net_profit: pnl,
    margin: extra.margin ?? null,
    swap: extra.swap ?? null,
  };
}

const asOf = "2026-11-04T11:08:10Z";

test("keeps each currency book isolated", () => {
  const view = buildOverview({
    open: {
      updated_at: asOf,
      lots: [lot("USD", "TTWO.US", 100, -40), lot("PLN", "XTB.PL", 50, -10)],
    },
    closed: { records: [] },
    thesis: { positions: {} },
  });

  assert.equal(view.accounts.USD.value, 100);
  assert.equal(view.accounts.USD.pnl, -40);
  assert.equal(view.accounts.PLN.value, 50);
  assert.equal(view.accounts.EUR.lots, 0);
  assert.equal(view.accounts.EUR.value, 0);
  assert.equal(view.alerts.USD.find((alert) => alert.id === "concentration").text.includes("TTWO.US"), true);
  assert.equal(view.alerts.PLN.some((alert) => alert.text.includes("TTWO")), false);
  assert.equal(view.alerts.PLN.find((alert) => alert.id === "concentration").text.includes("XTB.PL"), true);
  assert.equal(view.alerts.EUR.length, 0);
  assert.equal("total" in view, false);
});

test("derives percent from cost basis and groups lots by ticker", () => {
  const view = buildOverview({
    open: {
      updated_at: asOf,
      lots: [
        lot("USD", "TTWO.US", 80, -20, { position_id: "1", volume: 2, open: 50 }),
        lot("USD", "TTWO.US", 20, -5, { position_id: "2", volume: 1, open: 25 }),
        lot("USD", "GENI.US", 25, 5, { position_id: "3" }),
      ],
    },
    closed: { records: [] },
    thesis: {
      positions: {
        TTWO: { status: "owned", stop_loss: 190, last_run_dir: "reports/TTWO_20261001_120000", history: [{ at: "2026-10-01T12:00:00Z" }] },
      },
    },
  });
  const ttwo = view.groups.USD.find((row) => row.ticker === "TTWO.US");

  assert.equal(view.accounts.USD.pnlPct, -13.79);
  assert.equal(view.accounts.USD.tickers, 2);
  assert.equal(ttwo.lots, 2);
  assert.equal(ttwo.value, 100);
  assert.equal(ttwo.pnl, -25);
  assert.ok(Math.abs(ttwo.weight - 0.8) < 1e-9);
  assert.equal(ttwo.plan.stopLoss, 190);
  assert.equal(view.accounts.USD.top.ticker, "TTWO.US");
});

test("uses the newest thesis when ticker keys differ", () => {
  const view = buildOverview({
    open: {
      updated_at: asOf,
      lots: [lot("USD", "TTWO.US", 80, -20)],
    },
    closed: { records: [] },
    thesis: {
      positions: {
        "TTWO.US": { stop_loss: 204, history: [{ at: "2026-10-21T12:19:44Z" }] },
        TTWO: { stop_loss: 194.5, history: [{ at: "2026-10-21T12:20:06Z" }] },
        "TTWO.EMPTY": { stop_loss: null, history: [{ at: "2026-10-22T12:20:06Z" }] },
      },
    },
  });

  assert.equal(view.groups.USD[0].plan.stopLoss, 194.5);
});

test("keeps lot rows and filters them inside one currency book", () => {
  const view = buildOverview({
    open: {
      updated_at: asOf,
      lots: [
        lot("USD", "TTWO.US", 80, -20, { position_id: "100", volume: 2, open: 50, swap: -2, margin: 10, opened: "2026-06-18 10:00:00" }),
        lot("USD", "TTWO.US", 20, 5, { position_id: "200", volume: 1, open: 15, stop: 18, opened: "2026-10-02 10:00:00" }),
        lot("USD", "GENI.US", 25, -5, { position_id: "300", opened: "2026-08-01 10:00:00" }),
        lot("PLN", "XTB.PL", 50, -10, { position_id: "400" }),
      ],
    },
    closed: { records: [] },
    thesis: { positions: { TTWO: { stop_loss: 190, history: [{ at: "2026-10-01T12:00:00Z" }] } } },
  });
  const usd = view.groups.USD;
  const ttwo = usd.find((row) => row.ticker === "TTWO.US");
  const stats = openStats(usd);
  const swapped = filterOpenGroups(usd, { mode: "swap" });

  assert.equal(ttwo.children.length, 2);
  assert.equal(ttwo.children[0].positionId, "100");
  assert.equal(ttwo.children[0].financed, true);
  assert.equal(ttwo.children[0].ageDays, 139);
  assert.equal(usd.find((row) => row.ticker === "GENI.US").children[0].financed, false);
  assert.equal(stats.lots, 3);
  assert.equal(stats.losing, 2);
  assert.equal(stats.stops, 1);
  assert.equal(stats.planned, 1);
  assert.equal(swapped.length, 1);
  assert.deepEqual(swapped[0].children.map((row) => row.positionId), ["100"]);
  assert.equal(filterOpenGroups(usd, { query: "300" })[0].ticker, "GENI.US");
  assert.equal(view.groups.PLN[0].ticker, "XTB.PL");
});

test("groups closed slices inside one currency", () => {
  const view = buildOverview({
    open: { updated_at: asOf, lots: [] },
    closed: {
      records: [
        { account_currency: "USD", ticker: "TTWO.US", position_id: "1", category: "CFD", side: "BUY", volume: 2, open_price: 10, close_price: 8, open_time_utc: "2026-01-01 00:00:00", close_time_utc: "2026-01-03 00:00:00", profit_loss: -4, swap: -1, comment: "[S/L]" },
        { account_currency: "USD", ticker: "TTWO.US", position_id: "1", category: "CFD", side: "BUY", volume: 1, open_price: 10, close_price: 12, open_time_utc: "2026-01-01 00:00:00", close_time_utc: "2026-01-11 00:00:00", profit_loss: 2, swap: 0, comment: null },
        { account_currency: "PLN", ticker: "XTB.PL", position_id: "9", category: "STOCK", side: "BUY", volume: 1, open_price: 1, close_price: 2, open_time_utc: "2026-01-01 00:00:00", close_time_utc: "2026-01-02 00:00:00", profit_loss: 5, comment: "[T/P]" },
      ],
    },
    thesis: { positions: {} },
  });
  const loss = view.closed.USD.find((row) => row.pnl === -4);
  const grouped = groupClosed(view.closed.USD);
  const stats = closedStats(view.closed.USD);

  assert.equal(view.closed.USD.length, 2);
  assert.equal(view.closed.EUR.length, 0);
  assert.equal(loss.holdDays, 2);
  assert.equal(loss.stop, true);
  assert.equal(grouped.length, 1);
  assert.equal(grouped[0].slices, 2);
  assert.equal(grouped[0].pnl, -2);
  assert.equal(stats.winRate, 0.5);
  assert.equal(stats.profitFactor, 0.5);
  assert.equal(stats.avgWin, 2);
  assert.equal(stats.avgLoss, -4);
  assert.equal(stats.swap, -1);
  assert.equal(filterClosed(view.closed.USD, { category: "STOCK" }).length, 0);
  assert.equal(filterClosed(view.closed.USD, { result: "loss" })[0].positionId, "1");
  assert.equal(view.closed.PLN[0].takeProfit, true);
});

test("scores closed history inside the selected currency", () => {
  const view = buildOverview({
    open: { updated_at: asOf, lots: [] },
    closed: {
      records: [
        { account_currency: "USD", profit_loss: 10, close_time_utc: "2026-01-01 10:00:00" },
        { account_currency: "USD", profit_loss: -4, close_time_utc: "2026-01-02 10:00:00" },
        { account_currency: "USD", profit_loss: 0, close_time_utc: "2026-01-03 10:00:00" },
        { account_currency: "PLN", profit_loss: 100, close_time_utc: "2026-01-02 10:00:00" },
      ],
    },
    thesis: { positions: {} },
  });

  assert.equal(view.realized.USD.pnl, 6);
  assert.equal(view.realized.USD.slices, 3);
  assert.equal(view.realized.USD.winRate, 0.5);
  assert.equal(view.realized.USD.profitFactor, 2.5);
  assert.equal(view.realized.PLN.pnl, 100);
  assert.equal(view.realized.EUR.slices, 0);
  assert.deepEqual(view.realized.USD.trajectory.at(-1), 6);
});

test("lists watched names that are not open lots", () => {
  const view = buildOverview({
    open: { updated_at: asOf, lots: [lot("USD", "TTWO.US", 10, -1)] },
    closed: { records: [] },
    thesis: {
      positions: {
        "NVDA.US": { status: "watching", horizon: "swing", entry: 180, stop_loss: 160, tp1: 210, history: [{ at: "2026-10-01T00:00:00Z" }] },
        TTWO: { status: "watching", entry: 200, stop_loss: 180, history: [{ at: "2026-10-20T00:00:00Z" }] },
        "MSFT.US": { status: "closed", entry: 400, stop_loss: 380, history: [{ at: "2026-10-02T00:00:00Z" }] },
        AAPL: { status: "watching", entry: 170, stop_loss: 150, tp1: 190, history: [{ at: "2026-09-01T00:00:00Z" }] },
        "AAPL.US": { status: "watching", history: [{ at: "2026-10-15T00:00:00Z" }] },
      },
    },
  });
  const names = view.watchlist.map((row) => row.ticker);

  assert.deepEqual(names, ["AAPL.US", "NVDA.US"]);
  assert.equal(view.watchlist[0].stopLoss, 150);
  assert.equal(view.watchlist[0].entry, 170);
  assert.equal(view.watchlist[0].at, "2026-10-15T00:00:00Z");
  assert.equal(filterWatch(view.watchlist, "aapl").length, 1);
  assert.equal(view.watchlist[0].status, "watching");
});

test("describes the snapshot and stages a six-file import", () => {
  const view = buildOverview({
    open: {
      updated_at: asOf,
      source_files: ["portfolio/imports/XTB-USD - Open Positions.csv"],
      lots: [lot("USD", "TTWO.US", 10, -1)],
    },
    closed: { records: [{ account_currency: "USD", source_file: "XTB-USD - Closed Positions.csv", profit_loss: 1 }] },
    thesis: { positions: { NVDA: { status: "watching" } } },
  });
  const staged = stageImports([
    "XTB-USD - Open Positions.csv",
    "XTB-PLN - Open Positions.csv",
    "XTB-EUR - Open Positions.csv",
    "notes.txt",
  ]);

  assert.equal(view.imports.openLots, 1);
  assert.equal(view.imports.closedRows, 1);
  assert.equal(view.imports.openSources[0], "XTB-USD - Open Positions.csv");
  assert.ok(view.imports.hygiene.some((note) => note.includes("kategorii")));
  assert.equal(classifyImportName("XTB-EUR - Closed Positions.csv").kind, "closed");
  assert.equal(stageImports(["XTB-USD - Open Positions.csv"]).ready, false);
  assert.equal(staged.ready, true);
  assert.deepEqual(staged.skipped, ["notes.txt"]);
});
