import { useEffect, useState } from "react";
import { formatDate } from "./locale.js";
import { closedStats, filterClosed, groupClosed, money } from "./metrics.js";

function openedOn(value) {
  return formatDate(value) || "—";
}

function price(value) {
  return value == null ? "—" : Number(value).toLocaleString("pl-PL", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function tone(value) {
  return value < 0 ? "text-[#FB7185]" : value > 0 ? "text-[#34D399]" : "text-[#94A3B8]";
}

function Badges({ row }) {
  if (!row.stop && !row.takeProfit) return <span className="text-[#64748B]">—</span>;
  return (
    <span className="flex gap-1">
      {row.stop && <span className="border border-[#9F1239] px-1 text-[#FB7185]">[S/L]</span>}
      {row.takeProfit && <span className="border border-[#166534] px-1 text-[#34D399]">[T/P]</span>}
    </span>
  );
}

export default function ClosedTrades({ currency, slices }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [result, setResult] = useState("all");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [grouped, setGrouped] = useState(true);
  const [expanded, setExpanded] = useState(() => new Set());
  const stats = closedStats(slices);
  const categories = [...new Set(slices.map((slice) => slice.category).filter(Boolean))].sort();
  const visible = filterClosed(slices, { query, category, result, from, to });
  const groups = groupClosed(visible);

  useEffect(() => {
    setExpanded(new Set(groups[0] ? [groups[0].positionId] : []));
  }, [currency, query, category, result, from, to, grouped]);

  function toggle(id) {
    setExpanded((current) => {
      const next = new Set(current);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function cells(row, indent) {
    return (
      <>
        <th scope="row" className="px-2 py-1.5 text-left font-mono text-[11px] text-[#CBD5E1]">
          {indent ? "" : row.ticker} <span className="text-[#64748B]">#{row.positionId}</span>
        </th>
        <td className="px-2"><span className="border border-[#334155] px-1 font-mono text-[10px] text-[#A5B4FC]">{row.category || "—"}</span></td>
        <td className="px-2 font-mono text-[10px] text-[#94A3B8]">{row.side || "—"}</td>
        <td className="px-2 text-right font-mono text-[11px]">{row.volume}</td>
        <td className="px-2 text-right font-mono text-[11px]">{price(row.openPrice)} → {price(row.closePrice)}</td>
        <td className="px-2 font-mono text-[10px] text-[#94A3B8]">{openedOn(row.opened)} → {openedOn(row.closed)}</td>
        <td className="px-2 text-right font-mono text-[11px] text-[#94A3B8]">{row.holdDays} d</td>
        <td className={`px-2 text-right font-mono text-[11px] ${tone(row.pnl)}`}>{money(currency, row.pnl, true)}</td>
        <td className="px-2"><Badges row={row} /></td>
      </>
    );
  }

  return (
    <div className="grid min-w-0 gap-3">
      <section className="grid gap-3 min-[1200px]:grid-cols-6" aria-label={`Zamknięte transakcje ${currency}`}>
        <article className="border border-[#1E293B] bg-[#0D1322] p-3">
          <p className="font-mono text-[10px] tracking-[0.06em] text-[#64748B]">ZREALIZOWANY P&L</p>
          <p className={`mt-2 font-mono text-[22px] ${tone(stats.pnl)}`}>{stats.slices ? money(currency, stats.pnl, true) : "—"}</p>
          <p className="mt-1 font-mono text-[10px] text-[#94A3B8]">{stats.positions} {stats.positions === 1 ? "pozycja" : "pozycji"}</p>
        </article>
        <article className="border border-[#1E293B] bg-[#0D1322] p-3">
          <p className="font-mono text-[10px] tracking-[0.06em] text-[#64748B]">SKUTECZNOŚĆ</p>
          <p className="mt-2 font-mono text-[22px]">{stats.slices ? `${(stats.winRate * 100).toFixed(1)}%` : "—"}</p>
          <p className="mt-1 font-mono text-[10px] text-[#94A3B8]">Bez wyjść na zero</p>
        </article>
        <article className="border border-[#1E293B] bg-[#0D1322] p-3">
          <p className="font-mono text-[10px] tracking-[0.06em] text-[#64748B]">PROFIT FACTOR</p>
          <p className="mt-2 font-mono text-[22px]">{stats.profitFactor == null ? "—" : stats.profitFactor.toFixed(2)}</p>
          <p className="mt-1 font-mono text-[10px] text-[#94A3B8]">Zysk brutto / strata brutto</p>
        </article>
        <article className="border border-[#1E293B] bg-[#0D1322] p-3">
          <p className="font-mono text-[10px] tracking-[0.06em] text-[#64748B]">FRAGMENTY</p>
          <p className="mt-2 font-mono text-[22px]">{stats.slices}</p>
          <p className="mt-1 font-mono text-[10px] text-[#94A3B8]">Częściowe wyjścia osobno</p>
        </article>
        <article className="border border-[#1E293B] bg-[#0D1322] p-3">
          <p className="font-mono text-[10px] tracking-[0.06em] text-[#64748B]">ŚR. ZYSK / ŚR. STRATA</p>
          <p className="mt-2 font-mono text-[16px]">
            <span className="text-[#34D399]">{stats.avgWin == null ? "—" : money(currency, stats.avgWin, true)}</span>
            <span className="text-[#64748B]"> / </span>
            <span className="text-[#FB7185]">{stats.avgLoss == null ? "—" : money(currency, stats.avgLoss, true)}</span>
          </p>
          <p className="mt-1 font-mono text-[10px] text-[#94A3B8]">Na rozstrzygnięty fragment</p>
        </article>
        <article className="border border-[#1E293B] bg-[#0D1322] p-3">
          <p className="font-mono text-[10px] tracking-[0.06em] text-[#64748B]">KOSZT SWAP</p>
          <p className={`mt-2 font-mono text-[22px] ${tone(stats.swap)}`}>{money(currency, stats.swap, true)}</p>
          <p className="mt-1 font-mono text-[10px] text-[#94A3B8]">Finansowanie zamkniętych fragmentów</p>
        </article>
      </section>

      {slices.length === 0 ? (
        <p className="border border-[#1E293B] bg-[#0D1322] px-3 py-10 text-[14px] text-[#94A3B8]">
          Brak zamkniętych transakcji w {currency} w tym eksporcie.
        </p>
      ) : (
        <>
          <div className="flex flex-wrap items-end gap-2">
            <label className="grid gap-1">
              <span className="sr-only">Filtr ticker lub id pozycji</span>
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Filtr ticker lub id pozycji"
                className="h-7 min-w-52 border border-[#334155] bg-[#090D16] px-2 font-mono text-[11px] text-[#F8FAFC] focus-visible:outline focus-visible:outline-1 focus-visible:outline-[#38BDF8]"
              />
            </label>
            <button type="button" aria-pressed={category === "all"} onClick={() => setCategory("all")} className={`h-7 border px-2 font-mono text-[10px] ${category === "all" ? "border-[#38BDF8] text-white" : "border-[#334155] text-[#94A3B8]"}`}>Wszystkie</button>
            {categories.map((item) => (
              <button key={item} type="button" aria-pressed={category === item} onClick={() => setCategory(item)} className={`h-7 border px-2 font-mono text-[10px] ${category === item ? "border-[#38BDF8] text-white" : "border-[#334155] text-[#94A3B8]"}`}>{item}</button>
            ))}
            {[["all", "Zyski i straty"], ["win", "Zyski"], ["loss", "Straty"]].map(([key, label]) => (
              <button key={key} type="button" aria-pressed={result === key} onClick={() => setResult(key)} className={`h-7 border px-2 font-mono text-[10px] ${result === key ? "border-[#38BDF8] text-white" : "border-[#334155] text-[#94A3B8]"}`}>{label}</button>
            ))}
            <label className="grid gap-1 font-mono text-[10px] text-[#64748B]">
              Od
              <input type="date" value={from} onChange={(event) => setFrom(event.target.value)} className="h-7 border border-[#334155] bg-[#090D16] px-2 text-[#F8FAFC]" />
            </label>
            <label className="grid gap-1 font-mono text-[10px] text-[#64748B]">
              Do
              <input type="date" value={to} onChange={(event) => setTo(event.target.value)} className="h-7 border border-[#334155] bg-[#090D16] px-2 text-[#F8FAFC]" />
            </label>
            <button type="button" aria-pressed={grouped} onClick={() => setGrouped(true)} className={`h-7 border px-2 font-mono text-[10px] ${grouped ? "border-[#38BDF8] text-white" : "border-[#334155] text-[#94A3B8]"}`}>Po pozycji</button>
            <button type="button" aria-pressed={!grouped} onClick={() => setGrouped(false)} className={`h-7 border px-2 font-mono text-[10px] ${grouped ? "border-[#334155] text-[#94A3B8]" : "border-[#38BDF8] text-white"}`}>Fragmenty</button>
          </div>

          <div className="min-w-0 overflow-x-auto border border-[#1E293B] bg-[#0D1322]">
            <table className="w-full min-w-[1080px] border-collapse text-left">
              <caption className="sr-only">Zamknięte transakcje {currency}</caption>
              <thead className="font-mono text-[10px] tracking-[0.06em] text-[#64748B]">
                <tr className="border-b border-[#1E293B]">
                  {["Ticker", "Kategoria", "Strona", "Wolumen", "Otwarcie → zamknięcie", "Daty", "Trzymanie", "P&L", "Komentarz"].map((heading) => (
                    <th key={heading} className={`px-2 py-2 font-medium ${["Wolumen", "Otwarcie → zamknięcie", "Trzymanie", "P&L"].includes(heading) ? "text-right" : ""}`}>{heading}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {visible.length === 0 ? (
                  <tr><td colSpan={9} className="px-3 py-8 text-[13px] text-[#94A3B8]">Brak zamkniętych transakcji dla filtra {currency}.</td></tr>
                ) : grouped ? groups.flatMap((row) => {
                  const open = expanded.has(row.positionId);
                  return [
                    <tr key={row.positionId} className="border-b border-[#1E293B] bg-[#111827]">
                      <th scope="row" className="px-2 py-2 text-left">
                        <button type="button" aria-expanded={open} onClick={() => toggle(row.positionId)} className="font-mono text-[12px]">
                          {open ? "▾" : "▸"} {row.ticker} <span className="text-[10px] text-[#64748B]">#{row.positionId} · {row.slices} {row.slices === 1 ? "fragment" : "fragmenty"}</span>
                        </button>
                      </th>
                      <td className="px-2"><span className="border border-[#334155] px-1 font-mono text-[10px] text-[#A5B4FC]">{row.category || "—"}</span></td>
                      <td className="px-2 font-mono text-[10px] text-[#94A3B8]">{row.side || "—"}</td>
                      <td className="px-2 text-right font-mono text-[12px]">{row.volume}</td>
                      <td className="px-2 text-right font-mono text-[11px] text-[#64748B]">—</td>
                      <td className="px-2 font-mono text-[10px] text-[#94A3B8]">{openedOn(row.opened)} → {openedOn(row.closed)}</td>
                      <td className="px-2 text-right font-mono text-[11px] text-[#94A3B8]">{row.holdDays} d</td>
                      <td className={`px-2 text-right font-mono text-[12px] ${tone(row.pnl)}`}>{money(currency, row.pnl, true)}</td>
                      <td className="px-2"><Badges row={row} /></td>
                    </tr>,
                    ...(open ? row.children.map((slice) => (
                      <tr key={`${slice.positionId}-${slice.closed}-${slice.volume}-${slice.pnl}`} className="border-b border-[#1E293B] hover:bg-[#162036]">
                        {cells(slice, true)}
                      </tr>
                    )) : []),
                  ];
                }) : visible.map((slice) => (
                  <tr key={`${slice.positionId}-${slice.closed}-${slice.volume}-${slice.pnl}`} className="border-b border-[#1E293B] hover:bg-[#162036]">
                    {cells(slice, false)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="font-mono text-[10px] text-[#64748B]">
            Widoczne {visible.length} z {stats.slices} fragmentów · {groups.length} {groups.length === 1 ? "pozycja" : "pozycji"} · swap widocznego zbioru: {money(currency, closedStats(visible).swap, true)}
          </p>
        </>
      )}
    </div>
  );
}
