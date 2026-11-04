import { useState } from "react";
import { formatDateTime } from "./locale.js";
import { CURRENCIES, importCommand, stageImports } from "./metrics.js";

const EXPECTED = [
  ["USD", "open", "XTB-USD - Open Positions.csv"],
  ["USD", "closed", "XTB-USD - Closed Positions.csv"],
  ["PLN", "open", "XTB-PLN - Open Positions.csv"],
  ["PLN", "closed", "XTB-PLN - Closed Positions.csv"],
  ["EUR", "open", "XTB-EUR - Open Positions.csv"],
  ["EUR", "closed", "XTB-EUR - Closed Positions.csv"],
];

const KIND_LABEL = { open: "otwarte", closed: "zamknięte" };

function fileState(kind, currency, imports) {
  const name = EXPECTED.find((row) => row[0] === currency && row[1] === kind)[2];
  if (kind === "open") return imports.openSources.includes(name) ? "W migawce" : "Brak w migawce";
  if (imports.closedSources.includes(name)) return "W migawce";
  if (imports.currencies[currency].closed === 0) return "Pusty w migawce";
  return "Brak w migawce";
}

export default function DataImport({ imports, copied, copyError, onCopy }) {
  const [names, setNames] = useState([]);
  const staged = stageImports(names);
  const command = importCommand(names.filter((name) => stageImports([name]).skipped.length === 0));

  function take(files) {
    setNames([...files].map((file) => file.name));
  }

  return (
    <div className="grid min-w-0 gap-3">
      <section className="grid gap-3 min-[1200px]:grid-cols-3" aria-label="Ostatni import">
        <article className="border border-[#1E293B] bg-[#0D1322] p-3">
          <p className="font-mono text-[10px] tracking-[0.06em] text-[#64748B]">OSTATNI IMPORT</p>
          <p className="mt-2 font-mono text-[18px]">{formatDateTime(imports.updatedAt)}</p>
          <p className="mt-1 font-mono text-[10px] text-[#94A3B8]">Czas migawki, nie notowanie na żywo</p>
        </article>
        <article className="border border-[#1E293B] bg-[#0D1322] p-3">
          <p className="font-mono text-[10px] tracking-[0.06em] text-[#64748B]">OTWARTE LOTY</p>
          <p className="mt-2 font-mono text-[22px]">{imports.openLots}</p>
          <p className="mt-1 font-mono text-[10px] text-[#94A3B8]">{CURRENCIES.map((currency) => `${currency} ${imports.currencies[currency].open}`).join(" · ")}</p>
        </article>
        <article className="border border-[#1E293B] bg-[#0D1322] p-3">
          <p className="font-mono text-[10px] tracking-[0.06em] text-[#64748B]">WIERSZE ZAMKNIĘTE</p>
          <p className="mt-2 font-mono text-[22px]">{imports.closedRows}</p>
          <p className="mt-1 font-mono text-[10px] text-[#94A3B8]">{CURRENCIES.map((currency) => `${currency} ${imports.currencies[currency].closed}`).join(" · ")}</p>
        </article>
      </section>

      <section className="border border-[#1E293B] bg-[#0D1322] p-3">
        <h2 className="font-mono text-[10px] tracking-[0.06em] text-[#94A3B8]">HIGIENA DANYCH</h2>
        <ul className="mt-2 grid gap-1 text-[13px] text-[#CBD5E1]">
          {imports.hygiene.length ? imports.hygiene.map((note) => <li key={note}>{note}</li>) : <li>Brak uwag higieny dla tej migawki.</li>}
        </ul>
      </section>

      <div className="min-w-0 overflow-x-auto border border-[#1E293B] bg-[#0D1322]">
        <table className="w-full min-w-[640px] border-collapse text-left">
          <caption className="sr-only">Oczekiwane pliki eksportu XTB</caption>
          <thead className="font-mono text-[10px] tracking-[0.06em] text-[#64748B]">
            <tr className="border-b border-[#1E293B]">
              {["Plik", "Konto", "Migawka"].map((heading) => <th key={heading} className="px-2 py-2 font-medium">{heading}</th>)}
            </tr>
          </thead>
          <tbody>
            {EXPECTED.map(([currency, kind, name]) => (
              <tr key={name} className="border-b border-[#1E293B]">
                <th scope="row" className="px-2 py-1.5 text-left font-mono text-[11px]">{name}</th>
                <td className="px-2 font-mono text-[11px] text-[#94A3B8]">{currency} {KIND_LABEL[kind]}</td>
                <td className="px-2 font-mono text-[11px] text-[#CBD5E1]">{fileState(kind, currency, imports)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="border border-dashed border-[#334155] bg-[#0D1322] p-3">
        <h2 className="font-mono text-[10px] tracking-[0.06em] text-[#94A3B8]">PRZYGOTUJ PLIKI CSV</h2>
        <p className="mt-2 text-[13px] text-[#CBD5E1]">Przeglądarka nie zapisuje migawki. Wybór plików buduje polecenie importu. Uruchom je w repozytorium, potem odśwież stronę.</p>
        <label className="mt-3 block">
          <span className="sr-only">Wybierz pliki CSV XTB</span>
          <input
            type="file"
            accept=".csv,text/csv"
            multiple
            onChange={(event) => take(event.target.files)}
            className="block w-full font-mono text-[11px] text-[#94A3B8] file:mr-3 file:h-7 file:border file:border-[#334155] file:bg-[#090D16] file:px-2 file:font-mono file:text-[10px] file:text-[#E2E8F0]"
          />
        </label>
        {names.length > 0 && (
          <ul className="mt-3 grid gap-1 font-mono text-[11px] text-[#CBD5E1]">
            {names.map((name) => <li key={name}>{staged.skipped.includes(name) ? `${name} — pominięty` : name}</li>)}
          </ul>
        )}
        <p className="mt-2 font-mono text-[10px] text-[#64748B]">
          {staged.ready
            ? "Przygotowano trzy pliki otwartych pozycji."
            : `Brakuje CSV otwartych: ${staged.missingOpen.join(", ") || "brak"}. Import bez nich zastąpiłby otwarte konto pustą listą.`}
        </p>
        <button
          type="button"
          disabled={!staged.ready}
          onClick={() => onCopy(command)}
          className="mt-3 h-7 border border-[#334155] px-2 font-mono text-[10px] text-[#E2E8F0] disabled:cursor-not-allowed disabled:text-[#64748B]"
        >
          {copied === command ? "Skopiowano" : "Kopiuj polecenie importu"}
        </button>
        {copyError && <p className="mt-2 font-mono text-[11px] text-[#FCD34D]">Schowek zablokowany. Skopiuj polecenie: {copyError}</p>}
      </section>
    </div>
  );
}
