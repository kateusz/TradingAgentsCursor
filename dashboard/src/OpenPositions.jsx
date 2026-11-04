import { useEffect, useState } from "react";
import { filterOpenGroups, money, openStats, signedPercent } from "./metrics.js";

const MODES = [
  ["all", "All"],
  ["loss", "Neg P&L"],
  ["nostop", "Missing broker SL"],
  ["swap", "CFD with swap"],
];

function openedOn(value) {
  if (!value) return "";
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(String(value).replace(" ", "T") + "Z"));
}

function price(value) {
  return value == null ? "—" : Number(value).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function tone(value) {
  return value < 0 ? "text-[#FB7185]" : value > 0 ? "text-[#34D399]" : "text-[#94A3B8]";
}

export default function OpenPositions({ currency, groups, onAnalyze, copied, copyError }) {
  const [query, setQuery] = useState("");
  const [mode, setMode] = useState("all");
  const [grouped, setGrouped] = useState(true);
  const [expanded, setExpanded] = useState(() => new Set());
  const stats = openStats(groups);
  const bookValue = groups.reduce((total, row) => total + row.value, 0);
  const bookPnl = groups.reduce((total, row) => total + row.pnl, 0);
  const rows = filterOpenGroups(groups, { query, mode });
  const visibleLots = rows.reduce((total, row) => total + row.children.length, 0);

  useEffect(() => {
    setExpanded(new Set(rows[0] ? [rows[0].ticker] : []));
  }, [currency, mode, query, grouped]);

  function toggle(ticker) {
    setExpanded((current) => {
      const next = new Set(current);
      if (next.has(ticker)) next.delete(ticker);
      else next.add(ticker);
      return next;
    });
  }

  return (
    <div className="grid min-w-0 gap-3">
      <section className="grid gap-3 min-[1200px]:grid-cols-5" aria-label={`${currency} open book`}>
        <article className="border border-[#1E293B] bg-[#0D1322] p-3">
          <p className="font-mono text-[10px] tracking-[0.06em] text-[#64748B]">{currency} BOOK GROSS</p>
          <p className="mt-2 font-mono text-[22px]">{stats.lots ? money(currency, bookValue) : "No open lots"}</p>
          <p className="mt-1 font-mono text-[10px] text-[#94A3B8]">{stats.lots} lots in this export</p>
        </article>
        <article className="border border-[#1E293B] bg-[#0D1322] p-3">
          <p className="font-mono text-[10px] tracking-[0.06em] text-[#64748B]">NET UNREALIZED P&L</p>
          <p className={`mt-2 font-mono text-[22px] ${tone(bookPnl)}`}>
            {stats.lots ? money(currency, bookPnl, true) : "—"}
          </p>
          <p className="mt-1 font-mono text-[10px] text-[#FB7185]">{stats.losing}/{stats.lots || 0} losing lots</p>
        </article>
        <article className="border border-[#1E293B] bg-[#0D1322] p-3">
          <p className="font-mono text-[10px] tracking-[0.06em] text-[#64748B]">FINANCING DRAG</p>
          <p className={`mt-2 font-mono text-[22px] ${tone(stats.swap)}`}>{money(currency, stats.swap, true)}</p>
          <p className="mt-1 font-mono text-[10px] text-[#94A3B8]">{stats.swapLots} lots carry swap</p>
        </article>
        <article className="border border-[#1E293B] bg-[#0D1322] p-3">
          <p className="font-mono text-[10px] tracking-[0.06em] text-[#64748B]">BROKER SL COVERAGE</p>
          <p className={`mt-2 font-mono text-[22px] ${stats.stopCoverage < 1 ? "text-[#FB7185]" : "text-[#34D399]"}`}>{(stats.stopCoverage * 100).toFixed(1)}%</p>
          <p className="mt-1 font-mono text-[10px] text-[#94A3B8]">{stats.stops}/{stats.lots || 0} lots have a broker stop</p>
        </article>
        <article className="border border-[#1E293B] bg-[#0D1322] p-3">
          <p className="font-mono text-[10px] tracking-[0.06em] text-[#64748B]">PLAN ALIGNMENT</p>
          <p className="mt-2 font-mono text-[22px] text-[#FCD34D]">{(stats.planCoverage * 100).toFixed(1)}%</p>
          <p className="mt-1 font-mono text-[10px] text-[#94A3B8]">{stats.missingPlan} {stats.missingPlan === 1 ? "ticker has" : "tickers have"} no plan stop</p>
        </article>
      </section>

      <p className="border border-[#92400E] bg-[#451A03] px-3 py-2 text-[12px] text-[#FCD34D]">
        Open exports have no instrument category. A lot is marked CFD only when the snapshot has margin or swap. Everything else stays unlabeled.
      </p>

      <div className="flex flex-wrap items-center gap-2">
        <label className="sr-only" htmlFor="open-filter">Filter ticker or lot id</label>
        <input
          id="open-filter"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Filter ticker or lot id"
          className="h-7 min-w-52 border border-[#334155] bg-[#090D16] px-2 font-mono text-[11px] text-[#F8FAFC] focus-visible:outline focus-visible:outline-1 focus-visible:outline-[#38BDF8]"
        />
        {MODES.map(([key, label]) => {
          const count = key === "all" ? stats.lots : filterOpenGroups(groups, { mode: key }).reduce((total, row) => total + row.children.length, 0);
          return (
            <button
              key={key}
              type="button"
              aria-pressed={mode === key}
              onClick={() => setMode(key)}
              className={`h-7 border px-2 font-mono text-[10px] focus-visible:outline focus-visible:outline-1 focus-visible:outline-[#38BDF8] ${mode === key ? "border-[#38BDF8] text-white" : "border-[#334155] text-[#94A3B8]"}`}
            >
              {label} ({count})
            </button>
          );
        })}
        <button type="button" aria-pressed={grouped} onClick={() => setGrouped(true)} className={`h-7 border px-2 font-mono text-[10px] ${grouped ? "border-[#38BDF8] text-white" : "border-[#334155] text-[#94A3B8]"}`}>Grouped by ticker</button>
        <button type="button" aria-pressed={!grouped} onClick={() => setGrouped(false)} className={`h-7 border px-2 font-mono text-[10px] ${grouped ? "border-[#334155] text-[#94A3B8]" : "border-[#38BDF8] text-white"}`}>Flat lot list</button>
        <button type="button" onClick={() => setExpanded(new Set())} className="h-7 border border-[#334155] px-2 font-mono text-[10px] text-[#94A3B8]">Collapse all</button>
      </div>

      <div className="min-w-0 overflow-x-auto border border-[#1E293B] bg-[#0D1322]">
        <table className="w-full min-w-[1080px] border-collapse text-left">
          <caption className="sr-only">Open positions in {currency}, snapshot values</caption>
          <thead className="font-mono text-[10px] tracking-[0.06em] text-[#64748B]">
            <tr className="border-b border-[#1E293B]">
              {["Ticker / lot", "Volume", "Entry", "Current", "Value", "P&L", "P&L %", "Age", "Broker SL / TP", "Plan SL / TP", "Action"].map((heading) => (
                <th key={heading} className={`px-2 py-2 font-medium ${["Volume", "Entry", "Current", "Value", "P&L", "P&L %", "Age"].includes(heading) ? "text-right" : ""}`}>{heading}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.length ? rows.flatMap((row) => {
              const showChildren = !grouped || expanded.has(row.ticker);
              const breached = row.plan?.stopLoss != null && row.current < row.plan.stopLoss;
              const header = grouped ? (
                <tr key={row.ticker} className="border-b border-[#1E293B] bg-[#111827]">
                  <th scope="row" className="px-2 py-2 text-left font-mono text-[12px]">
                    <button type="button" aria-expanded={showChildren} onClick={() => toggle(row.ticker)} className="font-mono text-[12px]">
                      {showChildren ? "▾" : "▸"} {row.ticker}
                      <span className="ml-2 text-[10px] text-[#64748B]">{row.lots} {row.lots === 1 ? "lot" : "lots"}</span>
                      {row.children.some((lot) => lot.financed) && <span className="ml-2 border border-[#4338CA] px-1 text-[10px] text-[#A5B4FC]">CFD</span>}
                    </button>
                  </th>
                  <td className="px-2 text-right font-mono text-[12px]">{row.volume}</td>
                  <td className="px-2 text-right font-mono text-[12px]">{price(row.avgEntry)}</td>
                  <td className="px-2 text-right font-mono text-[12px]">{price(row.current)}</td>
                  <td className="px-2 text-right font-mono text-[12px]">{money(currency, row.value)}</td>
                  <td className={`px-2 text-right font-mono text-[12px] ${tone(row.pnl)}`}>{money(currency, row.pnl, true)}</td>
                  <td className={`px-2 text-right font-mono text-[12px] ${tone(row.pnlPct)}`}>{signedPercent(row.pnlPct)}</td>
                  <td className="px-2 text-right font-mono text-[11px] text-[#94A3B8]">{row.ageDays}d</td>
                  <td className="px-2 font-mono text-[10px] text-[#FB7185]">{row.unprotected ? "SL none" : "SL set"}</td>
                  <td className="px-2 font-mono text-[10px] text-[#FCD34D]">{row.plan?.stopLoss == null ? "No plan" : `SL ${price(row.plan.stopLoss)}${breached ? " breached" : ""}`}</td>
                  <td className="px-2">
                    <button type="button" onClick={() => onAnalyze(row.ticker)} className="h-6 border border-[#334155] px-2 font-mono text-[10px] text-[#E2E8F0]">
                      {copied === row.ticker ? "Copied" : "Revise in Cursor"}
                    </button>
                  </td>
                </tr>
              ) : null;
              const children = showChildren ? row.children.map((lot) => (
                <tr key={lot.positionId} className="border-b border-[#1E293B] hover:bg-[#162036]">
                  <th scope="row" className="px-2 py-1.5 text-left font-mono text-[11px] text-[#CBD5E1]">{grouped ? "" : `${lot.ticker} `}#{lot.positionId}<span className="ml-2 text-[#64748B]">{openedOn(lot.opened)}</span></th>
                  <td className="px-2 text-right font-mono text-[11px]">{lot.volume}{lot.financed ? " CFD" : ""}</td>
                  <td className="px-2 text-right font-mono text-[11px]">{price(lot.openPrice)}</td>
                  <td className="px-2 text-right font-mono text-[11px]">{price(lot.current)}</td>
                  <td className="px-2 text-right font-mono text-[11px]">{money(currency, lot.value)}</td>
                  <td className={`px-2 text-right font-mono text-[11px] ${tone(lot.pnl)}`}>{money(currency, lot.pnl, true)}</td>
                  <td className={`px-2 text-right font-mono text-[11px] ${tone(lot.pnlPct)}`}>{signedPercent(lot.pnlPct)}</td>
                  <td className="px-2 text-right font-mono text-[11px] text-[#94A3B8]">{lot.ageDays}d</td>
                  <td className="px-2 font-mono text-[10px] text-[#94A3B8]">SL {price(lot.brokerStop)}{lot.swap ? ` · swap ${money(currency, lot.swap, true)}` : ""}</td>
                  <td className="px-2 font-mono text-[10px] text-[#94A3B8]">{row.plan?.stopLoss == null ? "No plan" : `SL ${price(row.plan.stopLoss)} · TP ${price(row.plan.tp1)}`}</td>
                  <td className="px-2 font-mono text-[10px] text-[#64748B]">{lot.brokerTakeProfit == null ? "TP none" : `TP ${price(lot.brokerTakeProfit)}`}</td>
                </tr>
              )) : [];
              return [header, ...children].filter(Boolean);
            }) : (
              <tr><td colSpan={11} className="px-3 py-8 text-[13px] text-[#94A3B8]">No open lots match this {currency} filter.</td></tr>
            )}
          </tbody>
        </table>
      </div>
      <p className="font-mono text-[10px] text-[#64748B]">
        Showing {rows.length} tickers / {visibleLots} lots · broker stops {stats.stops}/{stats.lots || 0} · plan stops {stats.planned}/{stats.tickers || 0}
      </p>
      {copyError && <p className="font-mono text-[11px] text-[#FCD34D]">Clipboard blocked. Copy this command: {copyError}</p>}

      <section className="grid gap-3 min-[1200px]:grid-cols-3">
        <article className="border border-[#1E293B] bg-[#0D1322] p-3">
          <h2 className="font-mono text-[10px] tracking-[0.06em] text-[#94A3B8]">STOPS</h2>
          <p className="mt-2 text-[13px] text-[#CBD5E1]">{stats.lots - stats.stops} of {stats.lots || 0} lots have no broker stop. Plan levels are research memory, not resting orders.</p>
        </article>
        <article className="border border-[#1E293B] bg-[#0D1322] p-3">
          <h2 className="font-mono text-[10px] tracking-[0.06em] text-[#94A3B8]">SWAP</h2>
          <p className="mt-2 text-[13px] text-[#CBD5E1]">Total swap in this book is {money(currency, stats.swap, true)}. The export has no daily accrual rate.{stats.worstSwap ? ` Largest lot swap is ${money(currency, stats.worstSwap.swap, true)} on #${stats.worstSwap.positionId}.` : ""}</p>
        </article>
        <article className="border border-[#1E293B] bg-[#0D1322] p-3">
          <h2 className="font-mono text-[10px] tracking-[0.06em] text-[#94A3B8]">SNAPSHOT CHECK</h2>
          <p className="mt-2 text-[13px] text-[#CBD5E1]">{stats.lots} lots loaded. {stats.missingPlan} {stats.missingPlan === 1 ? "ticker has" : "tickers have"} no plan stop.{stats.oldest ? ` Oldest lot is #${stats.oldest.positionId} at ${stats.oldest.ageDays} days.` : ""}</p>
        </article>
      </section>
    </div>
  );
}
