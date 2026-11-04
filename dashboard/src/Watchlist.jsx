import { useState } from "react";
import { filterWatch } from "./metrics.js";

function price(value) {
  return value == null ? "—" : Number(value).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function reportedOn(value) {
  if (!value) return "—";
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(value));
}

export default function Watchlist({ rows, onAnalyze, copied, copyError }) {
  const [query, setQuery] = useState("");
  const visible = filterWatch(rows, query);

  return (
    <div className="grid min-w-0 gap-3">
      <section className="border border-[#1E293B] bg-[#0D1322] px-3 py-2">
        <h1 className="font-mono text-[11px] font-semibold tracking-[0.04em] text-[#7DD3FC]">WATCHLIST · NO POSITION SIZE</h1>
        <p className="mt-1 text-[12px] text-[#94A3B8]">Thesis names marked watching that are not in the open book. No market value and no P&L.</p>
      </section>

      {rows.length === 0 ? (
        <p className="border border-[#1E293B] bg-[#0D1322] px-3 py-10 text-[14px] text-[#94A3B8]">
          No watched names outside the open book.
        </p>
      ) : (
        <>
          <label className="sr-only" htmlFor="watch-filter">Filter ticker</label>
          <input
            id="watch-filter"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Filter ticker"
            className="h-7 w-52 border border-[#334155] bg-[#090D16] px-2 font-mono text-[11px] text-[#F8FAFC] focus-visible:outline focus-visible:outline-1 focus-visible:outline-[#38BDF8]"
          />
          <div className="min-w-0 overflow-x-auto border border-[#1E293B] bg-[#0D1322]">
            <table className="w-full min-w-[860px] border-collapse text-left">
              <caption className="sr-only">Watched names with plan levels</caption>
              <thead className="font-mono text-[10px] tracking-[0.06em] text-[#64748B]">
                <tr className="border-b border-[#1E293B]">
                  {["Ticker", "Horizon", "Entry", "Stop", "TP1", "TP2", "Last report", "Status", "Action"].map((heading) => (
                    <th key={heading} className={`px-2 py-2 font-medium ${["Entry", "Stop", "TP1", "TP2"].includes(heading) ? "text-right" : ""}`}>{heading}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {visible.length ? visible.map((row) => (
                  <tr key={row.ticker} className="border-b border-[#1E293B] hover:bg-[#162036]">
                    <th scope="row" className="px-2 py-2 text-left font-mono text-[12px]">{row.ticker}</th>
                    <td className="px-2 font-mono text-[11px] text-[#94A3B8]">{row.horizon || "—"}</td>
                    <td className="px-2 text-right font-mono text-[11px]">{price(row.entry)}</td>
                    <td className="px-2 text-right font-mono text-[11px] text-[#FCD34D]">{price(row.stopLoss)}</td>
                    <td className="px-2 text-right font-mono text-[11px]">{price(row.tp1)}</td>
                    <td className="px-2 text-right font-mono text-[11px]">{price(row.tp2)}</td>
                    <td className="px-2 font-mono text-[11px] text-[#94A3B8]">{reportedOn(row.at)}{row.days != null ? ` · ${row.days}d` : ""}</td>
                    <td className="px-2"><span className="border border-[#334155] px-1 font-mono text-[10px] text-[#7DD3FC]">watching</span></td>
                    <td className="px-2">
                      <button type="button" onClick={() => onAnalyze(row.ticker)} className="h-6 border border-[#334155] px-2 font-mono text-[10px] text-[#E2E8F0]">
                        {copied === row.ticker ? "Copied" : "Analyze"}
                      </button>
                    </td>
                  </tr>
                )) : (
                  <tr><td colSpan={9} className="px-3 py-8 text-[13px] text-[#94A3B8]">No watched names match this filter.</td></tr>
                )}
              </tbody>
            </table>
          </div>
          <p className="font-mono text-[10px] text-[#64748B]">Showing {visible.length} of {rows.length} {rows.length === 1 ? "name" : "names"}</p>
          {copyError && <p className="font-mono text-[11px] text-[#FCD34D]">Clipboard blocked. Copy this command: {copyError}</p>}
        </>
      )}
    </div>
  );
}
