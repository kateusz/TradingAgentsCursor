import { useMemo, useState } from "react";
import closedBook from "../../portfolio/broker/closed.json";
import openBook from "../../portfolio/broker/open.json";
import thesisBook from "../../portfolio/thesis.json";
import { CURRENCIES, buildOverview, money, signedPercent } from "./metrics.js";

const NAV = ["Overview", "Open positions", "Closed trades", "Watchlist", "Data & import"];
const BOOKS = {
  USD: ["USD book", "Primary focus"],
  PLN: ["PLN book", "Domestic GPW"],
  EUR: ["EUR book", "Xetra"],
};

function stamp(value) {
  if (!value) return "No snapshot";
  const formatted = new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "UTC",
    hourCycle: "h23",
  }).format(new Date(value));
  return `${formatted} UTC`;
}

function age(value) {
  if (!value) return "";
  const minutes = Math.max(0, Math.round((Date.now() - Date.parse(value)) / 60000));
  if (minutes < 60) return `${minutes}m ago`;
  return `${Math.round(minutes / 60)}h ago`;
}

function qty(value) {
  return Number(value).toLocaleString("en-US", { maximumFractionDigits: 4 });
}

function level(value) {
  return value == null ? "none" : Number(value).toLocaleString("en-US", { maximumFractionDigits: 2 });
}

function Spark({ points }) {
  if (points.length < 2) return <p className="font-mono text-[11px] text-[#94A3B8]">No trajectory in this export.</p>;
  const min = Math.min(0, ...points);
  const max = Math.max(0, ...points);
  const span = max - min || 1;
  const path = points.map((point, index) => {
    const x = (index / (points.length - 1)) * 100;
    const y = 30 - ((point - min) / span) * 26;
    return `${index ? "L" : "M"}${x.toFixed(2)},${y.toFixed(2)}`;
  }).join(" ");
  const loss = points.at(-1) < 0;
  return (
    <svg viewBox="0 0 100 32" className="mt-3 h-16 w-full" role="img" aria-label="Realized profit trajectory">
      <path d={path} fill="none" stroke={loss ? "#F43F5E" : "#10B981"} strokeWidth="1.4" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

export default function App() {
  const view = useMemo(() => buildOverview({
    open: openBook,
    closed: closedBook,
    thesis: thesisBook,
  }), []);
  const [currency, setCurrency] = useState("USD");
  const [sort, setSort] = useState("weight");
  const [copied, setCopied] = useState("");
  const [copyError, setCopyError] = useState("");
  const [hygieneOpen, setHygieneOpen] = useState(false);
  const account = view.accounts[currency];
  const rows = [...view.groups[currency]].sort((left, right) => (
    sort === "pnl" ? left.pnl - right.pnl : right.value - left.value
  ));
  const worst = [...view.groups[currency]].sort((left, right) => left.pnl - right.pnl)[0];
  const stale = [...view.groups[currency]]
    .filter((row) => (row.plan?.days ?? -1) > 30)
    .sort((left, right) => right.plan.days - left.plan.days)[0];
  const queue = [worst, stale].filter((row, index, all) => row && all.findIndex((item) => item.ticker === row.ticker) === index);
  const history = view.realized[currency];

  async function analyze(ticker) {
    const command = `/analyze-ticker ${ticker}`;
    try {
      await Promise.race([
        navigator.clipboard.writeText(command),
        new Promise((_, reject) => setTimeout(() => reject(new Error("clipboard timeout")), 700)),
      ]);
      setCopied(ticker);
      setCopyError("");
    } catch {
      setCopied("");
      setCopyError(command);
    }
  }

  return (
    <div className="min-h-screen bg-[#090D16] text-[#DFE2EF]">
      <header className="grid gap-2 border-b border-[#1E293B] px-3 py-2 min-[1200px]:grid-cols-[minmax(220px,1fr)_auto_minmax(280px,1fr)] min-[1200px]:items-center">
        <p className="font-mono text-[10px] font-semibold tracking-[0.08em]">
          <span className="text-[#38BDF8]">TERMINAL</span> // PORTFOLIO
          <span className="ml-3 text-[#94A3B8]">XTB SNAPSHOT</span>
        </p>
        <p className="font-mono text-[11px] text-[#CBD5E1] min-[1200px]:text-center">
          Snapshot: {stamp(view.asOf)} <span className="text-[#64748B]">(Imported {age(view.asOf)})</span>
        </p>
        <div className="flex flex-wrap items-center gap-1 min-[1200px]:justify-end" role="group" aria-label="Currency scope">
          {CURRENCIES.map((item) => (
            <button
              key={item}
              type="button"
              aria-pressed={item === currency}
              onClick={() => setCurrency(item)}
              className={`h-6 border px-2 font-mono text-[10px] focus-visible:outline focus-visible:outline-1 focus-visible:outline-[#38BDF8] ${item === currency ? "border-[#38BDF8] bg-[#1E293B] text-white" : "border-[#334155] text-[#94A3B8]"}`}
            >
              {item} ({view.accounts[item].lots})
            </button>
          ))}
          <button
            type="button"
            aria-expanded={hygieneOpen}
            onClick={() => setHygieneOpen((open) => !open)}
            className="h-6 border border-[#334155] px-2 font-mono text-[10px] text-[#FCD34D] focus-visible:outline focus-visible:outline-1 focus-visible:outline-[#38BDF8]"
          >
            {view.hygiene.length} hygiene notices
          </button>
        </div>
      </header>

      <nav className="flex min-h-9 flex-wrap items-center gap-1 border-b border-[#1E293B] px-3" aria-label="Primary">
        {NAV.map((item) => (
          <button
            key={item}
            type="button"
            disabled={item !== "Overview"}
            aria-current={item === "Overview" ? "page" : undefined}
            className={`h-9 border-b px-3 font-mono text-[11px] focus-visible:outline focus-visible:outline-1 focus-visible:outline-[#38BDF8] disabled:cursor-not-allowed disabled:text-[#64748B] ${item === "Overview" ? "border-[#38BDF8] text-white" : "border-transparent"}`}
          >
            {item}
          </button>
        ))}
        <p className="ml-auto font-mono text-[10px] tracking-[0.08em] text-[#34D399]">READ ONLY</p>
      </nav>

      {hygieneOpen && (
        <ul className="border-b border-[#334155] bg-[#111827] px-3 py-2 font-mono text-[11px] text-[#CBD5E1]">
          {view.hygiene.map((note) => <li key={note}>{note}</li>)}
        </ul>
      )}

      <main className="grid gap-3 p-3">
        <section className="grid gap-2 border border-[#1E293B] bg-[#0D1322] px-3 py-2 min-[1200px]:grid-cols-[auto_minmax(0,1fr)_auto] min-[1200px]:items-center">
          <h1 className="font-mono text-[11px] font-semibold tracking-[0.04em] text-[#7DD3FC]">
            CURRENCY ISOLATION ACTIVE: NO SYNTHETIC FX CONVERSION
          </h1>
          <p className="min-w-0 text-[12px] text-[#94A3B8]">Each book stays in its account currency. There is no blended portfolio value.</p>
          <p className="w-fit border border-[#166534] px-2 py-1 font-mono text-[10px] text-[#34D399]">SNAPSHOT READY</p>
        </section>

        <section className="grid gap-3 min-[1200px]:grid-cols-3" aria-label="Account books">
          {CURRENCIES.map((item) => {
            const book = view.accounts[item];
            const selected = item === currency;
            return (
              <button
                key={item}
                type="button"
                aria-pressed={selected}
                onClick={() => setCurrency(item)}
                className={`border bg-[#0D1322] p-3 text-left focus-visible:outline focus-visible:outline-1 focus-visible:outline-[#38BDF8] ${selected ? "border-[#38BDF8]" : "border-[#1E293B]"} ${book.pnl < 0 ? "border-l-[#F43F5E]" : "border-l-[#10B981]"} border-l-2`}
              >
                <span className="flex items-center justify-between font-mono text-[10px] tracking-[0.08em] text-[#94A3B8]">
                  <span>{BOOKS[item][0]}</span>
                  <span>{BOOKS[item][1]}</span>
                </span>
                <span className="mt-3 block font-mono text-[10px] text-[#64748B]">{book.lots} lots // {book.tickers} tickers</span>
                <span className="mt-1 block text-[12px] text-[#94A3B8]">Gross market value</span>
                <span className="mt-1 block font-mono text-[28px] font-medium leading-none">{book.lots ? money(item, book.value) : "No open lots"}</span>
                <span className={`mt-2 block font-mono text-[13px] ${book.pnl < 0 ? "text-[#FB7185]" : book.pnl > 0 ? "text-[#34D399]" : "text-[#94A3B8]"}`}>
                  {book.lots ? `${money(item, book.pnl, true)} (${signedPercent(book.pnlPct)})` : "No unrealized P&L"}
                </span>
                <span className="mt-4 grid grid-cols-2 gap-2 border-t border-[#1E293B] pt-3 font-mono text-[11px]">
                  <span><span className="block text-[10px] text-[#64748B]">MARGIN</span>{book.cashOnly ? "Cash" : money(item, book.margin)}</span>
                  <span><span className="block text-[10px] text-[#64748B]">SWAP</span>{book.cashOnly ? "0.00" : money(item, book.swap, true)}</span>
                  <span className="col-span-2 text-[#CBD5E1]">{book.names.length ? book.names.join(", ") : "No holdings in this export."}</span>
                </span>
                <span className="mt-3 flex flex-wrap items-center justify-between gap-2 font-mono text-[10px] tracking-[0.06em]">
                  <span className="text-[#94A3B8]">{book.top && book.top.weight >= 0.5 ? `${book.top.ticker} is ${(book.top.weight * 100).toFixed(1)}% of this book` : "No single-name dominance"}</span>
                  <span className={book.top && book.top.weight >= 0.7 ? "text-[#FB7185]" : "text-[#94A3B8]"}>{book.cashOnly ? "UNLEVERAGED" : "FINANCED"}</span>
                </span>
              </button>
            );
          })}
        </section>

        <section className="border border-[#1E293B] bg-[#0D1322]" aria-label="Active risks">
          <header className="flex items-center justify-between border-b border-[#1E293B] px-3 py-2">
            <h2 className="font-mono text-[11px] tracking-[0.08em] text-[#94A3B8]">INTELLIGENCE AND RISK // ACTIVE BREACHES</h2>
            <span className="font-mono text-[10px] text-[#FB7185]">{view.alerts.length} NOTICES</span>
          </header>
          <div className="grid min-[1200px]:grid-cols-4">
            {view.alerts.map((alert) => (
              <article key={alert.id} className="border-[#1E293B] p-3 min-[1200px]:border-r min-[1200px]:last:border-r-0">
                <p className="font-mono text-[10px] tracking-[0.08em] text-[#94A3B8]">{alert.kicker.toUpperCase()}</p>
                <p className={`mt-2 font-mono text-[16px] ${alert.tone === "loss" ? "text-[#FB7185]" : "text-[#FCD34D]"}`}>
                  {alert.currency ? money(alert.currency, alert.value, true) : alert.value}
                </p>
                <p className="mt-2 min-h-10 text-[12px] leading-4 text-[#CBD5E1]">{alert.text}</p>
                <p className="mt-3 font-mono text-[10px] tracking-[0.06em] text-[#64748B]">{alert.tag.toUpperCase()}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid items-start gap-3 min-[1200px]:grid-cols-[minmax(0,1.4fr)_minmax(320px,0.8fr)]">
          <div className="border border-[#1E293B] bg-[#0D1322]">
            <header className="flex items-center gap-3 border-b border-[#1E293B] px-3 py-2">
              <h2 className="text-[14px] font-medium">{currency} open allocation</h2>
              <span className="border border-[#334155] px-1.5 font-mono text-[10px] text-[#CBD5E1]">ISOLATED BOOK</span>
              <div className="ml-auto flex" role="group" aria-label="Sort allocation">
                {[["weight", "Sort: weight"], ["pnl", "Sort: P&L"]].map(([key, label]) => (
                  <button
                    key={key}
                    type="button"
                    aria-pressed={sort === key}
                    onClick={() => setSort(key)}
                    className={`h-6 border px-2 font-mono text-[10px] focus-visible:outline focus-visible:outline-1 focus-visible:outline-[#38BDF8] ${sort === key ? "border-[#38BDF8] text-white" : "border-[#334155] text-[#94A3B8]"}`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </header>
            {rows.length ? (
              <ol>
                {rows.map((row) => (
                  <li key={row.ticker} className="border-b border-[#1E293B] px-3 py-2 last:border-b-0 hover:bg-[#162036]">
                    <div className="flex items-baseline gap-3">
                      <h3 className="font-mono text-[13px]">{row.ticker}</h3>
                      <span className="font-mono text-[10px] text-[#64748B]">{row.lots} {row.lots === 1 ? "lot" : "lots"}</span>
                      <span className="ml-auto font-mono text-[13px]">{money(currency, row.value)}</span>
                      <span className={`w-24 text-right font-mono text-[12px] ${row.pnl < 0 ? "text-[#FB7185]" : "text-[#34D399]"}`}>{money(currency, row.pnl, true)}</span>
                      <span className="w-12 text-right font-mono text-[11px] text-[#CBD5E1]">{(row.weight * 100).toFixed(1)}%</span>
                    </div>
                    <div className="mt-1 h-1 bg-[#1E293B]" aria-hidden="true">
                      <div className={`h-full ${row.pnl < 0 ? "bg-[#F43F5E]" : "bg-[#10B981]"}`} style={{ width: `${Math.max(row.weight * 100, 1)}%` }} />
                    </div>
                    <p className="mt-1 font-mono text-[10px] text-[#94A3B8]">
                      {qty(row.volume)} vol · avg entry {level(row.avgEntry)} · last {level(row.current)} · broker SL {row.unprotected ? "none" : "set"} · plan SL {level(row.plan?.stopLoss)}
                    </p>
                  </li>
                ))}
              </ol>
            ) : (
              <p className="px-3 py-8 text-[13px] text-[#94A3B8]">No open lots in {currency}. Import an open-positions CSV for this account.</p>
            )}
            <footer className="flex items-center justify-between border-t border-[#1E293B] px-3 py-2 font-mono text-[10px]">
              <span>HERFINDAHL INDEX (HHI): {account.hhi.toLocaleString("en-US")}</span>
              <span className={account.hhi >= 5000 ? "text-[#FB7185]" : "text-[#94A3B8]"}>
                {account.hhi >= 5000 ? "EXTREME CONCENTRATION" : account.hhi >= 2500 ? "CONCENTRATED BOOK" : "DIVERSIFIED BOOK"}
              </span>
            </footer>
          </div>

          <div className="grid gap-3">
            <section className="border border-[#1E293B] bg-[#0D1322]">
              <header className="flex items-center justify-between border-b border-[#1E293B] px-3 py-2">
                <h2 className="text-[14px] font-medium">Action queue</h2>
                <span className="font-mono text-[10px] text-[#38BDF8]">CURSOR READY</span>
              </header>
              {queue.length ? queue.map((row, index) => (
                <article key={row.ticker} className="border-b border-[#1E293B] p-3 last:border-b-0">
                  <p className="font-mono text-[10px] text-[#FB7185]">P{index + 1} · {row.ticker}</p>
                  <h3 className="mt-1 text-[13px]">{row === stale && row.plan?.days > 30 ? "Thesis aging" : "Immediate review"}</h3>
                  <p className="mt-1 text-[12px] leading-4 text-[#CBD5E1]">
                    {row.plan?.days > 30
                      ? `Last analysis was ${row.plan.days} days ago.`
                      : `${money(currency, row.pnl, true)} unrealized, ${(row.weight * 100).toFixed(1)}% of this book.`}
                  </p>
                  <button
                    type="button"
                    onClick={() => analyze(row.ticker)}
                    className="mt-3 h-7 border border-[#334155] px-2 font-mono text-[11px] text-[#E2E8F0] hover:bg-[#1E293B] focus-visible:outline focus-visible:outline-1 focus-visible:outline-[#38BDF8]"
                  >
                    {copied === row.ticker ? "Copied" : `Run /analyze-ticker ${row.ticker}`}
                  </button>
                </article>
              )) : <p className="p-3 text-[13px] text-[#94A3B8]">Nothing queued in {currency}.</p>}
              {copyError && <p className="border-t border-[#334155] px-3 py-2 font-mono text-[11px] text-[#FCD34D]">Clipboard blocked. Copy this command: {copyError}</p>}
            </section>

            <section className="border border-[#1E293B] bg-[#0D1322] p-3">
              <header className="flex items-center justify-between">
                <h2 className="text-[14px] font-medium">{currency} realized history</h2>
                <span className={`font-mono text-[12px] ${history.pnl < 0 ? "text-[#FB7185]" : history.pnl > 0 ? "text-[#34D399]" : "text-[#94A3B8]"}`}>
                  {history.slices ? money(currency, history.pnl, true) : "No closed trades"}
                </span>
              </header>
              {history.slices ? (
                <>
                  <dl className="mt-3 grid grid-cols-3 gap-2 text-center">
                    {[["Closed slices", history.slices], ["Win rate", `${(history.winRate * 100).toFixed(1)}%`], ["Profit factor", history.profitFactor ?? "—"]].map(([label, value]) => (
                      <div key={label} className="border border-[#1E293B] py-2">
                        <dt className="font-mono text-[10px] tracking-[0.06em] text-[#64748B]">{label.toUpperCase()}</dt>
                        <dd className="mt-1 font-mono text-[16px]">{value}</dd>
                      </div>
                    ))}
                  </dl>
                  <Spark points={history.trajectory} />
                  <p className="mt-1 flex justify-between font-mono text-[10px] text-[#64748B]">
                    <span>START 0.00</span>
                    <span>MAX {money(currency, Math.min(...history.trajectory), true)}</span>
                    <span>CURRENT {money(currency, history.trajectory.at(-1), true)}</span>
                  </p>
                </>
              ) : <p className="mt-4 text-[13px] text-[#94A3B8]">No closed trades in {currency} in this export.</p>}
            </section>
          </div>
        </section>
      </main>
      <footer className="flex h-8 items-center gap-4 border-t border-[#1E293B] px-3 font-mono text-[10px] text-[#64748B]">
        <span>Obsidian Capital</span>
        <span>Read-only snapshot</span>
        <span>Analysis runs in Cursor</span>
        <span className="ml-auto">Localhost</span>
      </footer>
    </div>
  );
}
