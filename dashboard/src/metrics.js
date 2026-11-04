export const CURRENCIES = ["USD", "PLN", "EUR"];

function round2(value) {
  return Math.round((value + Number.EPSILON) * 100) / 100;
}

function sum(rows, key) {
  return rows.reduce((total, row) => total + (Number(row[key]) || 0), 0);
}

function root(symbol) {
  return String(symbol).toUpperCase().split(/[.#]/)[0];
}

function latestAt(position) {
  return (position.history ?? [])
    .map((event) => event.at)
    .filter(Boolean)
    .sort()
    .at(-1) ?? null;
}

function thesisFor(ticker, positions, asOf) {
  const symbol = ticker.toUpperCase();
  const matches = Object.entries(positions).filter(([key, position]) => {
    const candidate = key.toUpperCase();
    const named = String(position.ticker ?? candidate).toUpperCase();
    return root(candidate) === root(symbol) || root(named) === root(symbol);
  });
  if (!matches.length) return null;
  const planned = matches.filter(([, position]) => (
    position.stop_loss != null || position.tp1 != null || position.tp2 != null
  ));
  const pool = planned.length ? planned : matches;
  pool.sort((left, right) => {
    const time = (latestAt(right[1]) ?? "").localeCompare(latestAt(left[1]) ?? "");
    if (time) return time;
    return Number(right[0].toUpperCase() === symbol) - Number(left[0].toUpperCase() === symbol);
  });
  const position = pool[0][1];
  const at = latestAt(position);
  const elapsed = at && asOf ? Date.parse(asOf) - Date.parse(at) : null;
  return {
    stopLoss: position.stop_loss ?? null,
    tp1: position.tp1 ?? null,
    tp2: position.tp2 ?? null,
    horizon: position.horizon ?? null,
    at,
    days: elapsed == null ? null : Math.floor(elapsed / 86400000),
  };
}

function groupBook(book, positions, asOf) {
  const grouped = new Map();
  for (const lot of book) {
    const row = grouped.get(lot.ticker) ?? {
      ticker: lot.ticker,
      lots: 0,
      value: 0,
      pnl: 0,
      volume: 0,
      entryNotional: 0,
      current: lot.current_price,
      unprotected: 0,
      opened: lot.open_time_utc,
    };
    row.lots += 1;
    row.value += Number(lot.value) || 0;
    row.pnl += Number(lot.net_profit) || 0;
    row.volume += Number(lot.volume) || 0;
    row.entryNotional += (Number(lot.open_price) || 0) * (Number(lot.volume) || 0);
    if (lot.broker_stop_loss == null) row.unprotected += 1;
    if (lot.open_time_utc < row.opened) row.opened = lot.open_time_utc;
    grouped.set(lot.ticker, row);
  }
  const total = sum([...grouped.values()], "value");
  return [...grouped.values()]
    .map((row) => {
      const cost = row.value - row.pnl;
      return {
        ticker: row.ticker,
        lots: row.lots,
        value: round2(row.value),
        pnl: round2(row.pnl),
        pnlPct: cost ? round2((row.pnl / cost) * 100) : 0,
        weight: total ? row.value / total : 0,
        volume: round2(row.volume),
        avgEntry: row.volume ? round2(row.entryNotional / row.volume) : null,
        current: row.current,
        unprotected: row.unprotected,
        opened: row.opened,
        plan: thesisFor(row.ticker, positions, asOf),
      };
    })
    .sort((left, right) => right.value - left.value);
}

function accountOf(book, groups) {
  const value = round2(sum(book, "value"));
  const pnl = round2(sum(book, "net_profit"));
  const cost = value - pnl;
  const top = groups[0] ?? null;
  return {
    value,
    pnl,
    pnlPct: cost ? round2((pnl / cost) * 100) : 0,
    lots: book.length,
    tickers: groups.length,
    margin: round2(sum(book, "margin")),
    swap: round2(sum(book, "swap")),
    cashOnly: book.every((lot) => lot.margin == null && lot.swap == null),
    names: groups.map((row) => row.ticker),
    top: top ? { ticker: top.ticker, weight: top.weight, pnl: top.pnl } : null,
    hhi: Math.round(groups.reduce((total, row) => total + row.weight ** 2, 0) * 10000),
  };
}

function realizedOf(rows) {
  const decided = rows.filter((row) => row.profit_loss);
  const wins = decided.filter((row) => row.profit_loss > 0);
  const losses = decided.filter((row) => row.profit_loss < 0);
  const gain = sum(wins, "profit_loss");
  const loss = sum(losses, "profit_loss");
  let cursor = 0;
  const trajectory = [...rows]
    .sort((left, right) => left.close_time_utc.localeCompare(right.close_time_utc))
    .map((row) => round2(cursor += Number(row.profit_loss) || 0));
  return {
    pnl: round2(sum(rows, "profit_loss")),
    slices: rows.length,
    winRate: decided.length ? wins.length / decided.length : 0,
    profitFactor: loss ? round2(gain / Math.abs(loss)) : null,
    trajectory,
  };
}

function alertsOf(lots, accounts, groups) {
  const alerts = [];
  const naked = lots.filter((lot) => lot.broker_stop_loss == null).length;
  if (lots.length) {
    alerts.push({
      id: "stops",
      tone: "loss",
      kicker: "Risk",
      value: `${round2((naked / lots.length) * 100)}% exposed`,
      text: `${naked} of ${lots.length} open lots have no broker stop.`,
      tag: "Execution",
    });
  }
  const worst = [...groups.USD].sort((left, right) => left.pnl - right.pnl)[0];
  if (worst && accounts.USD.pnl < 0 && worst.pnl < 0) {
    const share = round2((worst.pnl / accounts.USD.pnl) * 100);
    alerts.push({
      id: "concentration",
      tone: "loss",
      kicker: "Concentration",
      value: `${share}% of USD loss`,
      text: `${worst.ticker} is ${share}% of the USD unrealized drawdown.`,
      tag: "Asymmetric",
    });
  }
  if (accounts.USD.swap) {
    alerts.push({
      id: "swap",
      tone: "loss",
      kicker: "Financing",
      value: accounts.USD.swap,
      currency: "USD",
      text: "Swap drag on open USD lots.",
      tag: "Overnight",
    });
  }
  const stale = CURRENCIES
    .flatMap((currency) => groups[currency])
    .filter((row) => (row.plan?.days ?? -1) > 30)
    .sort((left, right) => right.plan.days - left.plan.days)[0];
  if (stale) {
    alerts.push({
      id: "stale",
      tone: "warn",
      kicker: "Stale thesis",
      value: `T+${stale.plan.days} days`,
      text: `${stale.ticker} was last analyzed on ${stale.plan.at.slice(0, 10)}.`,
      tag: "Research",
    });
  }
  return alerts;
}

function hygieneOf(lots, records, positions) {
  const openKeys = new Set(lots.map((lot) => lot.position_key));
  const notes = [];
  if (lots.some((lot) => !lot.category)) notes.push("Open lots have no instrument category.");
  if (Object.keys(positions).some((key) => !openKeys.has(key))) {
    notes.push("Research keys join by ticker, not lot id.");
  }
  if (!records.some((row) => row.account_currency === "EUR")) notes.push("EUR closed export is empty.");
  return notes;
}

export function buildOverview({ open, closed, thesis }) {
  const lots = open?.lots ?? [];
  const records = closed?.records ?? [];
  const positions = thesis?.positions ?? {};
  const asOf = open?.updated_at ?? null;
  const accounts = {};
  const groups = {};
  const realized = {};
  for (const currency of CURRENCIES) {
    const book = lots.filter((lot) => lot.account_currency === currency);
    groups[currency] = groupBook(book, positions, asOf);
    accounts[currency] = accountOf(book, groups[currency]);
    realized[currency] = realizedOf(records.filter((row) => row.account_currency === currency));
  }
  return {
    asOf,
    accounts,
    groups,
    realized,
    alerts: alertsOf(lots, accounts, groups),
    hygiene: hygieneOf(lots, records, positions),
  };
}

export function money(currency, value, signed = false) {
  const absolute = Math.abs(Number(value) || 0).toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  const prefix = currency === "USD" ? "$" : currency === "EUR" ? "€" : "";
  const suffix = currency === "PLN" ? " zł" : "";
  const sign = value < 0 ? "-" : signed && value > 0 ? "+" : "";
  return `${sign}${prefix}${absolute}${suffix}`;
}

export function signedPercent(value) {
  const number = Number(value) || 0;
  return `${number > 0 ? "+" : number < 0 ? "-" : ""}${Math.abs(number).toFixed(2)}%`;
}
