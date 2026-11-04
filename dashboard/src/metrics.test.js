import assert from "node:assert/strict";
import test from "node:test";
import { buildOverview } from "./metrics.js";

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
