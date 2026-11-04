import { useEffect, useState } from "react";
import { formatDate } from "./locale.js";
import { filterOpenGroups, money, openStats, signedPercent } from "./metrics.js";

const MODES = [
  ["all", "Wszystkie"],
  ["loss", "Ujemny P&L"],
  ["nostop", "Brak SL brokera"],
  ["swap", "CFD ze swapem"],
];

function openedOn(value) {
  return formatDate(value);
}

function price(value) {
  return value == null ? "—" : Number(value).toLocaleString("pl-PL", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
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
      <section className="grid gap-3 min-[1200px]:grid-cols-5" aria-label={`Otwarte pozycje ${currency}`}>
        <article className="border border-[#1E293B] bg-[#0D1322] p-3">
          <p className="font-mono text-[10px] tracking-[0.06em] text-[#64748B]">KONTO {currency} BRUTTO</p>
          <p className="mt-2 font-mono text-[22px]">{stats.lots ? money(currency, bookValue) : "Brak otwartych lotów"}</p>
          <p className="mt-1 font-mono text-[10px] text-[#94A3B8]">{stats.lots} {stats.lots === 1 ? "lot" : "loty"} w eksporcie</p>
        </article>
        <article className="border border-[#1E293B] bg-[#0D1322] p-3">
          <p className="font-mono text-[10px] tracking-[0.06em] text-[#64748B]">NIEZREALIZOWANY P&L</p>
          <p className={`mt-2 font-mono text-[22px] ${tone(bookPnl)}`}>
            {stats.lots ? money(currency, bookPnl, true) : "—"}
          </p>
          <p className="mt-1 font-mono text-[10px] text-[#FB7185]">{stats.losing}/{stats.lots || 0} stratnych lotów</p>
        </article>
        <article className="border border-[#1E293B] bg-[#0D1322] p-3">
          <p className="font-mono text-[10px] tracking-[0.06em] text-[#64748B]">KOSZT FINANSOWANIA</p>
          <p className={`mt-2 font-mono text-[22px] ${tone(stats.swap)}`}>{money(currency, stats.swap, true)}</p>
          <p className="mt-1 font-mono text-[10px] text-[#94A3B8]">{stats.swapLots} {stats.swapLots === 1 ? "lot ze swapem" : "loty ze swapem"}</p>
        </article>
        <article className="border border-[#1E293B] bg-[#0D1322] p-3">
          <p className="font-mono text-[10px] tracking-[0.06em] text-[#64748B]">POKRYCIE SL BROKERA</p>
          <p className={`mt-2 font-mono text-[22px] ${stats.stopCoverage < 1 ? "text-[#FB7185]" : "text-[#34D399]"}`}>{(stats.stopCoverage * 100).toFixed(1)}%</p>
          <p className="mt-1 font-mono text-[10px] text-[#94A3B8]">{stats.stops}/{stats.lots || 0} lotów ma stop u brokera</p>
        </article>
        <article className="border border-[#1E293B] bg-[#0D1322] p-3">
          <p className="font-mono text-[10px] tracking-[0.06em] text-[#64748B]">ZGODNOŚĆ Z PLANEM</p>
          <p className="mt-2 font-mono text-[22px] text-[#FCD34D]">{(stats.planCoverage * 100).toFixed(1)}%</p>
          <p className="mt-1 font-mono text-[10px] text-[#94A3B8]">{stats.missingPlan} {stats.missingPlan === 1 ? "ticker bez" : "tickery bez"} stopu w planie</p>
        </article>
      </section>

      <p className="border border-[#92400E] bg-[#451A03] px-3 py-2 text-[12px] text-[#FCD34D]">
        Eksport otwartych pozycji nie ma kategorii instrumentu. Lot jest oznaczony CFD tylko wtedy, gdy w migawce jest marża lub swap. Reszta pozostaje bez etykiety.
      </p>

      <div className="flex flex-wrap items-center gap-2">
        <label className="sr-only" htmlFor="open-filter">Filtr ticker lub id lotu</label>
        <input
          id="open-filter"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Filtr ticker lub id lotu"
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
        <button type="button" aria-pressed={grouped} onClick={() => setGrouped(true)} className={`h-7 border px-2 font-mono text-[10px] ${grouped ? "border-[#38BDF8] text-white" : "border-[#334155] text-[#94A3B8]"}`}>Grupuj po tickerze</button>
        <button type="button" aria-pressed={!grouped} onClick={() => setGrouped(false)} className={`h-7 border px-2 font-mono text-[10px] ${grouped ? "border-[#334155] text-[#94A3B8]" : "border-[#38BDF8] text-white"}`}>Płaska lista lotów</button>
        <button type="button" onClick={() => setExpanded(new Set())} className="h-7 border border-[#334155] px-2 font-mono text-[10px] text-[#94A3B8]">Zwiń wszystko</button>
      </div>

      <div className="min-w-0 overflow-x-auto border border-[#1E293B] bg-[#0D1322]">
        <table className="w-full min-w-[1080px] border-collapse text-left">
          <caption className="sr-only">Otwarte pozycje {currency}, wartości z migawki</caption>
          <thead className="font-mono text-[10px] tracking-[0.06em] text-[#64748B]">
            <tr className="border-b border-[#1E293B]">
              {["Ticker / lot", "Wolumen", "Wejście", "Bieżąca", "Wartość", "P&L", "P&L %", "Wiek", "SL / TP broker", "SL / TP plan", "Akcja"].map((heading) => (
                <th key={heading} className={`px-2 py-2 font-medium ${["Wolumen", "Wejście", "Bieżąca", "Wartość", "P&L", "P&L %", "Wiek"].includes(heading) ? "text-right" : ""}`}>{heading}</th>
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
                      <span className="ml-2 text-[10px] text-[#64748B]">{row.lots} {row.lots === 1 ? "lot" : "loty"}</span>
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
                  <td className="px-2 font-mono text-[10px] text-[#FB7185]">{row.unprotected ? "SL brak" : "SL ustawiony"}</td>
                  <td className="px-2 font-mono text-[10px] text-[#FCD34D]">{row.plan?.stopLoss == null ? "Brak planu" : `SL ${price(row.plan.stopLoss)}${breached ? " przekroczony" : ""}`}</td>
                  <td className="px-2">
                    <button type="button" onClick={() => onAnalyze(row.ticker)} className="h-6 border border-[#334155] px-2 font-mono text-[10px] text-[#E2E8F0]">
                      {copied === row.ticker ? "Skopiowano" : "Popraw w Cursorze"}
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
                  <td className="px-2 font-mono text-[10px] text-[#94A3B8]">{row.plan?.stopLoss == null ? "Brak planu" : `SL ${price(row.plan.stopLoss)} · TP ${price(row.plan.tp1)}`}</td>
                  <td className="px-2 font-mono text-[10px] text-[#64748B]">{lot.brokerTakeProfit == null ? "TP brak" : `TP ${price(lot.brokerTakeProfit)}`}</td>
                </tr>
              )) : [];
              return [header, ...children].filter(Boolean);
            }) : (
              <tr><td colSpan={11} className="px-3 py-8 text-[13px] text-[#94A3B8]">Brak otwartych lotów dla filtra {currency}.</td></tr>
            )}
          </tbody>
        </table>
      </div>
      <p className="font-mono text-[10px] text-[#64748B]">
        Widoczne {rows.length} {rows.length === 1 ? "ticker" : "tickery"} / {visibleLots} {visibleLots === 1 ? "lot" : "loty"} · stopy brokera {stats.stops}/{stats.lots || 0} · stopy planu {stats.planned}/{stats.tickers || 0}
      </p>
      {copyError && <p className="font-mono text-[11px] text-[#FCD34D]">Schowek zablokowany. Skopiuj polecenie: {copyError}</p>}

      <section className="grid gap-3 min-[1200px]:grid-cols-3">
        <article className="border border-[#1E293B] bg-[#0D1322] p-3">
          <h2 className="font-mono text-[10px] tracking-[0.06em] text-[#94A3B8]">STOPY</h2>
          <p className="mt-2 text-[13px] text-[#CBD5E1]">{stats.lots - stats.stops} z {stats.lots || 0} lotów nie ma stopu u brokera. Poziomy planu to pamięć analizy, nie zlecenia oczekujące.</p>
        </article>
        <article className="border border-[#1E293B] bg-[#0D1322] p-3">
          <h2 className="font-mono text-[10px] tracking-[0.06em] text-[#94A3B8]">SWAP</h2>
          <p className="mt-2 text-[13px] text-[#CBD5E1]">Suma swap w tym koncie to {money(currency, stats.swap, true)}. Eksport nie zawiera dziennej stawki naliczania.{stats.worstSwap ? ` Największy swap lotu to ${money(currency, stats.worstSwap.swap, true)} na #${stats.worstSwap.positionId}.` : ""}</p>
        </article>
        <article className="border border-[#1E293B] bg-[#0D1322] p-3">
          <h2 className="font-mono text-[10px] tracking-[0.06em] text-[#94A3B8]">KONTROLA MIGAWKI</h2>
          <p className="mt-2 text-[13px] text-[#CBD5E1]">Wczytano {stats.lots} {stats.lots === 1 ? "lot" : "loty"}. {stats.missingPlan} {stats.missingPlan === 1 ? "ticker bez" : "tickery bez"} stopu w planie.{stats.oldest ? ` Najstarszy lot to #${stats.oldest.positionId}, ${stats.oldest.ageDays} dni.` : ""}</p>
        </article>
      </section>
    </div>
  );
}
