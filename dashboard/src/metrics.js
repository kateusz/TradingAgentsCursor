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

function matchesFor(ticker, positions) {
  const symbol = ticker.toUpperCase();
  return Object.entries(positions).filter(([key, position]) => {
    const candidate = key.toUpperCase();
    const named = String(position.ticker ?? candidate).toUpperCase();
    return root(candidate) === root(symbol) || root(named) === root(symbol);
  });
}

function pickMatch(symbol, matches) {
  const planned = matches.filter(([, position]) => (
    position.stop_loss != null || position.tp1 != null || position.tp2 != null
  ));
  const pool = (planned.length ? planned : matches).slice();
  pool.sort((left, right) => {
    const time = (latestAt(right[1]) ?? "").localeCompare(latestAt(left[1]) ?? "");
    if (time) return time;
    return Number(right[0].toUpperCase() === symbol) - Number(left[0].toUpperCase() === symbol);
  });
  return pool[0];
}

function thesisFor(ticker, positions, asOf) {
  const symbol = ticker.toUpperCase();
  const matches = matchesFor(ticker, positions);
  if (!matches.length) return null;
  const position = pickMatch(symbol, matches)[1];
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

function instant(value) {
  if (!value) return NaN;
  const text = String(value);
  return Date.parse(text.includes("T") ? text : text.replace(" ", "T") + "Z");
}

function ageDays(opened, asOf) {
  const start = instant(opened);
  const end = instant(asOf);
  if (!Number.isFinite(start) || !Number.isFinite(end)) return null;
  return Math.max(0, Math.floor((end - start) / 86400000));
}

function lotView(lot, asOf) {
  const value = Number(lot.value) || 0;
  const pnl = Number(lot.net_profit) || 0;
  const cost = value - pnl;
  return {
    positionId: String(lot.position_id),
    ticker: lot.ticker,
    volume: round2(Number(lot.volume) || 0),
    openPrice: lot.open_price ?? null,
    current: lot.current_price ?? null,
    value: round2(value),
    pnl: round2(pnl),
    pnlPct: cost ? round2((pnl / cost) * 100) : 0,
    ageDays: ageDays(lot.open_time_utc, asOf),
    opened: lot.open_time_utc ?? null,
    brokerStop: lot.broker_stop_loss ?? null,
    brokerTakeProfit: lot.broker_take_profit ?? null,
    swap: lot.swap ?? null,
    margin: lot.margin ?? null,
    financed: lot.margin != null || lot.swap != null,
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
      children: [],
    };
    row.lots += 1;
    row.value += Number(lot.value) || 0;
    row.pnl += Number(lot.net_profit) || 0;
    row.volume += Number(lot.volume) || 0;
    row.entryNotional += (Number(lot.open_price) || 0) * (Number(lot.volume) || 0);
    if (lot.broker_stop_loss == null) row.unprotected += 1;
    if (lot.open_time_utc < row.opened) row.opened = lot.open_time_utc;
    row.children.push(lotView(lot, asOf));
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
        ageDays: Math.max(...row.children.map((child) => child.ageDays ?? 0)),
        children: [...row.children].sort((left, right) => String(left.opened).localeCompare(String(right.opened))),
        plan: thesisFor(row.ticker, positions, asOf),
      };
    })
    .sort((left, right) => right.value - left.value);
}

export function filterOpenGroups(groups, { query = "", mode = "all" } = {}) {
  const needle = query.trim().toUpperCase();
  return groups.flatMap((group) => {
    const children = group.children.filter((lot) => {
      const text = `${group.ticker} ${lot.positionId}`.toUpperCase();
      if (needle && !text.includes(needle)) return false;
      if (mode === "loss" && !(lot.pnl < 0)) return false;
      if (mode === "nostop" && lot.brokerStop != null) return false;
      if (mode === "swap" && !lot.swap) return false;
      return true;
    });
    if (!children.length) return [];
    const value = round2(sum(children, "value"));
    const pnl = round2(sum(children, "pnl"));
    const volume = children.reduce((total, lot) => total + lot.volume, 0);
    const entryNotional = children.reduce((total, lot) => total + (Number(lot.openPrice) || 0) * lot.volume, 0);
    const cost = value - pnl;
    return [{
      ...group,
      lots: children.length,
      children,
      value,
      pnl,
      pnlPct: cost ? round2((pnl / cost) * 100) : 0,
      volume: round2(volume),
      avgEntry: volume ? round2(entryNotional / volume) : null,
      unprotected: children.filter((lot) => lot.brokerStop == null).length,
      swap: round2(children.reduce((total, lot) => total + (Number(lot.swap) || 0), 0)),
    }];
  });
}

export function openStats(groups) {
  const lots = groups.flatMap((group) => group.children);
  const stops = lots.filter((lot) => lot.brokerStop != null).length;
  const planned = groups.filter((group) => group.plan?.stopLoss != null).length;
  return {
    lots: lots.length,
    tickers: groups.length,
    losing: lots.filter((lot) => lot.pnl < 0).length,
    stops,
    stopCoverage: lots.length ? stops / lots.length : 0,
    financed: lots.filter((lot) => lot.financed).length,
    swapLots: lots.filter((lot) => lot.swap).length,
    swap: round2(lots.reduce((total, lot) => total + (Number(lot.swap) || 0), 0)),
    planned,
    missingPlan: groups.length - planned,
    planCoverage: groups.length ? planned / groups.length : 0,
    oldest: lots.reduce((best, lot) => ((lot.ageDays ?? -1) > (best?.ageDays ?? -1) ? lot : best), null),
    worstSwap: lots.filter((lot) => lot.swap != null).sort((left, right) => left.swap - right.swap)[0] ?? null,
  };
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

function sliceView(row) {
  const comment = row.comment || "";
  return {
    positionId: String(row.position_id),
    ticker: row.ticker,
    category: row.category || null,
    side: row.side || null,
    volume: round2(Number(row.volume) || 0),
    openPrice: row.open_price ?? null,
    closePrice: row.close_price ?? null,
    opened: row.open_time_utc ?? null,
    closed: row.close_time_utc ?? null,
    holdDays: ageDays(row.open_time_utc, row.close_time_utc),
    pnl: round2(Number(row.profit_loss) || 0),
    swap: row.swap ?? null,
    comment: row.comment || null,
    stop: comment.includes("[S/L]"),
    takeProfit: comment.includes("[T/P]"),
  };
}

function closedBook(records) {
  return records
    .map(sliceView)
    .sort((left, right) => String(right.closed).localeCompare(String(left.closed)));
}

export function filterClosed(slices, { query = "", category = "all", result = "all", from = "", to = "" } = {}) {
  const needle = query.trim().toUpperCase();
  return slices.filter((slice) => {
    const text = `${slice.ticker} ${slice.positionId}`.toUpperCase();
    if (needle && !text.includes(needle)) return false;
    if (category !== "all" && slice.category !== category) return false;
    if (result === "win" && !(slice.pnl > 0)) return false;
    if (result === "loss" && !(slice.pnl < 0)) return false;
    const day = String(slice.closed).slice(0, 10);
    if (from && day < from) return false;
    if (to && day > to) return false;
    return true;
  });
}

export function groupClosed(slices) {
  const grouped = new Map();
  for (const slice of slices) {
    const row = grouped.get(slice.positionId) ?? {
      positionId: slice.positionId,
      ticker: slice.ticker,
      category: slice.category,
      side: slice.side,
      slices: 0,
      volume: 0,
      pnl: 0,
      swap: 0,
      opened: slice.opened,
      closed: slice.closed,
      stop: false,
      takeProfit: false,
      children: [],
    };
    row.slices += 1;
    row.volume += slice.volume;
    row.pnl += slice.pnl;
    row.swap += Number(slice.swap) || 0;
    if (String(slice.opened) < String(row.opened)) row.opened = slice.opened;
    if (String(slice.closed) > String(row.closed)) row.closed = slice.closed;
    row.stop = row.stop || slice.stop;
    row.takeProfit = row.takeProfit || slice.takeProfit;
    row.children.push(slice);
    grouped.set(slice.positionId, row);
  }
  return [...grouped.values()]
    .map((row) => ({
      ...row,
      volume: round2(row.volume),
      pnl: round2(row.pnl),
      swap: round2(row.swap),
      holdDays: ageDays(row.opened, row.closed),
      children: [...row.children].sort((left, right) => String(right.closed).localeCompare(String(left.closed))),
    }))
    .sort((left, right) => String(right.closed).localeCompare(String(left.closed)));
}

export function closedStats(slices) {
  const decided = slices.filter((slice) => slice.pnl);
  const wins = decided.filter((slice) => slice.pnl > 0);
  const losses = decided.filter((slice) => slice.pnl < 0);
  const gain = wins.reduce((total, slice) => total + slice.pnl, 0);
  const loss = losses.reduce((total, slice) => total + slice.pnl, 0);
  return {
    pnl: round2(slices.reduce((total, slice) => total + slice.pnl, 0)),
    slices: slices.length,
    positions: new Set(slices.map((slice) => slice.positionId)).size,
    winRate: decided.length ? wins.length / decided.length : 0,
    profitFactor: loss ? round2(gain / Math.abs(loss)) : null,
    avgWin: wins.length ? round2(gain / wins.length) : null,
    avgLoss: losses.length ? round2(loss / losses.length) : null,
    swap: round2(slices.reduce((total, slice) => total + (Number(slice.swap) || 0), 0)),
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

function displayTicker(matches) {
  const names = matches.map(([key, position]) => String(position.ticker || key).toUpperCase().split("#")[0]);
  return names.sort((left, right) => Number(right.includes(".")) - Number(left.includes(".")) || right.length - left.length)[0];
}

export function watchlistOf(positions, lots, asOf) {
  const held = new Set((lots ?? []).map((lot) => root(lot.ticker)));
  const grouped = new Map();
  for (const [key, position] of Object.entries(positions ?? {})) {
    if (position.status !== "watching") continue;
    const symbol = root(position.ticker || key);
    if (held.has(symbol)) continue;
    grouped.set(symbol, [...(grouped.get(symbol) ?? []), [key, position]]);
  }
  return [...grouped.entries()].map(([symbol, matches]) => {
    const position = pickMatch(symbol, matches)[1];
    const at = matches.map(([, item]) => latestAt(item)).filter(Boolean).sort().at(-1) ?? null;
    const elapsed = at && asOf ? Date.parse(asOf) - Date.parse(at) : null;
    return {
      ticker: displayTicker(matches),
      horizon: position.horizon ?? null,
      entry: position.entry ?? null,
      stopLoss: position.stop_loss ?? null,
      tp1: position.tp1 ?? null,
      tp2: position.tp2 ?? null,
      at,
      days: elapsed == null ? null : Math.floor(elapsed / 86400000),
      status: "watching",
    };
  }).sort((left, right) => (right.at ?? "").localeCompare(left.at ?? "") || left.ticker.localeCompare(right.ticker));
}

export function filterWatch(rows, query = "") {
  const needle = query.trim().toUpperCase();
  if (!needle) return rows;
  return rows.filter((row) => row.ticker.toUpperCase().includes(needle));
}

export function buildOverview({ open, closed, thesis }) {
  const lots = open?.lots ?? [];
  const records = closed?.records ?? [];
  const positions = thesis?.positions ?? {};
  const asOf = open?.updated_at ?? null;
  const closedSlices = {};
  const accounts = {};
  const groups = {};
  const realized = {};
  for (const currency of CURRENCIES) {
    const book = lots.filter((lot) => lot.account_currency === currency);
    groups[currency] = groupBook(book, positions, asOf);
    accounts[currency] = accountOf(book, groups[currency]);
    realized[currency] = realizedOf(records.filter((row) => row.account_currency === currency));
    closedSlices[currency] = closedBook(records.filter((row) => row.account_currency === currency));
  }
  return {
    asOf,
    accounts,
    groups,
    realized,
    closed: closedSlices,
    watchlist: watchlistOf(positions, lots, asOf),
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
