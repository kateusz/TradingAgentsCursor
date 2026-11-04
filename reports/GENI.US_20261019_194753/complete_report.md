# Market Analyst

# GENI — Market Technical Analysis (as of 2026-10-19)

## Selected indicators (8)
| Indicator | Role in this setup |
|-----------|-------------------|
| close_10_ema | Short-term momentum |
| close_50_sma | Medium-term trend filter |
| close_200_sma | Long-term regime |
| macd + macds + macdh | Momentum inflection |
| rsi | Stretch vs mean-reversion |
| boll / boll_ub / boll_lb | Volatility envelope |
| atr | Stop placement |
| vwma | Volume-confirmed trend |

## Price action
Reference close **$6.45** (2026-10-19). After the early-October relief rally to **$6.65** (2026-10-09), GENI pulled back to **$6.13** (10-14), rebounded to **$6.58** (10-15), then eased to **$6.35** (10-16) and **$6.45** (10-19) — a **tight consolidation** above the 200 SMA rather than a fresh breakdown.

Price remains **below the 50 SMA ($6.91)** but **above the 200 SMA ($6.42)**. The 52-week range ($3.83–$12.17) keeps the stock in the lower third of the yearly range.

## Indicator read
- **10 EMA ($6.39)** tracks spot; short-term trend is flat-to-slightly up from October lows.
- **MACD** (−0.069) above signal (−0.139); **histogram (+0.070)** positive — momentum repair intact, not accelerating.
- **RSI (49.9)** neutral; no overbought stretch after the bounce.
- **Bollinger**: middle $6.23, upper $6.83, lower $5.63 — price mid-band; next resistance band **$6.80–$6.85**.
- **ATR (~$0.42)** → ~6.5% daily swing risk; place stops ~1× ATR under swing lows.
- **VWMA ($6.24)** slightly below price — rally held on acceptable volume.

## Swing setup
**Bias:** Cautious **hold / manage** within a broader downtrend from spring highs. No adds until **daily close > $6.85** with volume ≥ 5M. Protect with stop under October cluster **~$5.85**.

| Level | Type | Notes |
|-------|------|-------|
| $5.48–$5.76 | Support | September base |
| $5.85 | Support | Holder stop / invalidation |
| $6.03–$6.13 | Support | Oct swing lows |
| $6.45 | Reference | Current |
| $6.65 | Resistance | Oct 9 high |
| $6.83–$6.91 | Resistance | Boll upper / 50 SMA |
| $7.35 | Resistance | Prior consolidation |

| Signal | Reading | Implication |
|--------|---------|-------------|
| Trend (50/200) | Below 50, above 200 | Repair phase, not uptrend |
| MACD histogram | Positive | Bounce momentum holds |
| RSI | ~50 | Neutral |
| Volatility | Elevated ATR | Defined stops required |
| Volume | Moderate on pullback | No capitulation yet |

---

# Sentiment Analyst

# GENI — Sentiment & positioning (proxy)

## Data limits
Ticker-specific social sentiment feeds were not in the bundle; analysis uses **price/volume behavior** and **sector macro** from `global_news.txt`.

## Read-through
- Early-October **volume spikes** (6–11M shares on rally days) suggest **short-covering and dip-buying** after the September flush — constructive for holders, not proof of institutional accumulation.
- Recent sessions (10-15–10-19) show **lighter volume** on consolidation — neither bullish thrust nor distribution climax.
- Global tape (week of 10-12): **tech rebound but choppy week** — high-beta names like GENI remain **macro-sensitive**.

## Holder-relevant sentiment
For an existing long from **$8.28**, sentiment is **cautiously stabilizing**: fear from sub-$6 lows has eased, but **no FOMO** until price clears **$6.85–$7.00**. Reddit/X tone (inferred from typical post-earnings patterns for GENI) likely mixed — bulls cite FCF and NFL/data moat; bears cite dilution risk and profit timing.

| Signal | Assessment |
|--------|------------|
| Volume on bounce | Participatory relief rally |
| Volume on pullback | Muted — no panic |
| Sector mood | Mixed tech |
| Retail bias | Hold / wait for breakout |

---

# News Analyst

# GENI — News & catalysts

## Company news (bundle window 2026-10-12..2026-10-19)
Yahoo company feed returned **no ticker-specific headlines** for this window (API limitation — not evidence of zero news). No fresh GENI press release was captured in `news.txt`.

## Macro / sector context (`global_news.txt`)
- **Tech rebound** with semiconductor-led strength mid-week (10-16) — supportive backdrop for growth/tech beta.
- **Tech headed for a losing week** narrative — reminds that rallies are **fragile**; relevant for GENI (beta ~1.9).
- Rates/gold headlines imply **falling yields** — mild positive for long-duration growth equities.

## Catalyst calendar (inferred)
- Next **earnings / guidance** update remains the primary company-specific catalyst (not dated in bundle).
- **Sports seasonality** (NFL, soccer calendars) typically supports Genius Sports narrative in Q4 — qualitative tailwind for swing hold, not a trade trigger alone.

## Trading implication
**No news-driven exit signal** in the captured window. Manage on **price levels** (200 SMA hold, 50 SMA overhead) until a company or sector headline shifts estimates.

| Item | Impact |
|------|--------|
| Ticker news in bundle | None captured |
| Sector tech tone | Mixed |
| Macro rates | Slightly supportive |
| Action | Level-based risk management |

---

# Fundamentals Analyst

# GENI — Fundamentals (Genius Sports Limited)

## Snapshot (as of fetch 2026-10-19)
- **Sector:** Communication Services / Internet Content & Information  
- **Market cap:** ~$1.73B  
- **Price:** ~$6.45 vs **52w** $3.83–$12.17  
- **Beta:** 1.91 (high equity sensitivity)  
- **Forward P/E:** ~6.0× on forward EPS ~$1.07 vs **TTM EPS** −$0.63 (still GAAP-loss)  
- **P/B:** ~2.5×; **book** ~$2.56  
- **Revenue (TTM):** ~$790M; **gross profit** ~$217M  
- **EBITDA (TTM):** −$70M; **net income** −$182M  
- **FCF:** ~+$161M (positive — key bull anchor)  
- **Balance sheet:** D/E ~120%; **current ratio** 0.97 (tight liquidity)  
- **Margins:** operating −12%; profit −23%  

## Interpretation (swing)
The equity trades like a **turnaround / operating-leverage** story: expensive on trailing losses, **cheap on forward earnings** if guidance holds. Positive **FCF** and improving quarterly EBITDA narratives (per prior cycles) support **holding** underwater positions rather than panic-selling into a technical base. **Leverage and liquidity** cap conviction for **adds** until price confirms above declining moving averages.

| Factor | Bullish | Bearish |
|--------|---------|---------|
| Valuation (fwd) | Low multiple vs growth sports-data TAM | TTM losses, execution risk |
| Cash generation | Strong FCF | EBITDA still negative TTM |
| Balance sheet | — | High D/E, CR < 1 |
| Volatility | Optionality on sports betting data | Beta ~1.9 amplifies drawdowns |

| Metric | Value | Swing takeaway |
|--------|-------|----------------|
| Forward P/E | ~6× | Upside if estimates met |
| FCF | +$161M | Supports hold thesis |
| D/E | 120% | Limits add size |
| EPS TTM | −$0.63 | No earnings support yet |

---

# Bull Researcher

## Round 1

**Bull case:** GENI continues to **defend the 200 SMA (~$6.42)** after a **20%+ bounce** from September lows, with **MACD histogram still positive** and RSI neutral (~50) — not overextended. **Forward P/E ~6×** and **positive FCF** argue the September selloff overshot operating progress. Consolidation at **$6.35–$6.45** after the $6.65 high is **healthy digestion**, not distribution. A break above **$6.85** targets **$7.35** (50 SMA zone). Holders at $8.28 should **retain core** with stop **$5.85**, not exit into a stabilizing base.

---

# Bear Researcher

## Round 1

**Bear case:** Price **failed to hold $6.65** and slipped back toward **$6.35** — classic **lower-high** pattern under the **50 SMA ($6.91)**. Holder cost **$8.28** is still **~24% underwater**; relief rallies without earnings upgrades often **retest lows**. GAAP losses, **D/E ~120%**, and **beta ~1.9** make GENI vulnerable if tech risk-off returns. MACD improvement is **shallow**; a close **below $5.85** reopens the **$5.48** September trap. Bears favor **partial reduction** into **$6.40–6.65** rather than hoping for a V-recovery to breakeven.

---

# Research Manager

# Research Manager — Investment Plan (GENI.US, swing)

## Synthesis
Bull and bear agree: **base ~$5.5**, **bounce to ~$6.65**, **consolidation $6.35–$6.45** above **200 SMA (~$6.42)**; dispute is **trend repair vs lower-high distribution**.

**Weight of evidence (shallow run):** Technical repair **persists but weakened** — 200 SMA held through 10-19, 50 SMA not reclaimed. Fundamentals (**FCF+, low fwd P/E**) support **patience** for existing longs; balance sheet and beta veto **market adds**. No fresh company news in bundle.

## Plan for existing long (entry ~$8.28)
1. **No add** at market — require **daily close > $6.85**, volume ≥ 5M.
2. **Hold core** with **stop $5.85** (below October swing cluster).
3. **Scale-out:** **TP1 $6.90** (25–30%), **TP2 $7.35** (~30%), trail remainder toward **$7.85** if 50 SMA breaks.
4. **Full exit** on **daily close < $5.85** on volume > 7M.

## Conviction
**Moderate hold** for swing — manage risk, do not chase or capitulate on consolidation.

---

# Trader

**Action**: Hold

**Reasoning**: GENI holds above the 200 SMA ($6.42) with a still-positive MACD histogram after consolidating from the $6.65 high, but remains below the 50 SMA ($6.91) and the holder’s $8.28 cost. Fundamentals (forward P/E ~6×, positive FCF) support patience; leverage and beta argue against adding. Research plan: hold core, stop $5.85, partial profits into $6.90 / $7.35; no market add until close > $6.85.

**Entry Price**: $6.45 — reference / management price (existing position; no new buy)

**Stop Loss**: $5.85 — hard invalidation (daily close below)

**Take Profit 1**: $6.90 — first partial scale-out (25–30%)

**Take Profit 2**: $7.35 — second scale-out (~30% of original)

**Position Sizing**: Hold remaining size; do not add until daily close > $6.85 with volume ≥ 5M; ~1R risk from current to stop.

**Invalidation**: Daily close below $5.85 on elevated volume — relief structure failed, exit remaining shares.

FINAL TRANSACTION PROPOSAL: **HOLD**

---

# Aggressive Risk

## Cycle 1

**Aggressive view:** Consolidation at $6.45 is a **coil** before a push through **$6.85** toward **$7.50+**. Positive FCF and forward multiple leave **asymmetric upside** if sports-data seasonality helps sentiment. Holders should **keep full size** and only trail stop to **$5.70** if willing to tolerate retest noise — but accept that underwater cost basis is sunk; focus on **forward R/R**. Add only on **confirmed breakout > $6.85**.

---

# Neutral Risk

## Cycle 1

**Neutral synthesis:** Technicals show **repair not recovery** — 200 SMA support valid, 50 SMA resistance intact. Trader levels (**SL $5.85, TP $6.90 / $7.35**) balance aggressive upside and conservative gap risk. **Hold** is the base case for swing: neither add at market nor exit while histogram stays positive and price holds 200 SMA. Revisit if close **< $5.85** or **> $6.85** with volume.

---

# Conservative Risk

## Cycle 1

**Conservative view:** **Beta ~1.9** and **D/E ~120%** make GENI a **risk asset** in a choppy tech week. Failure to hold **$6.65** is a warning; **$5.85** stop is appropriate — do not widen. Consider **trimming 25%** now if prior TP levels were missed, then run remainder to **$6.90 / $7.35**. No adds without **two consecutive closes above $6.85**. Liquidity (current ratio <1) means **gap risk** on bad prints.

---

# Portfolio Manager Decision

**Rating**: Hold

**Executive Summary**: Maintain the GENI long at **$6.45** with **no adds**; keep **stop $5.85** and take partial profits into **$6.90 / $7.35** while price holds above the 200 SMA. Full exit only on a daily close below **$5.85**.

**Investment Thesis**: Consolidation after the October bounce is acceptable digestion if the 200 SMA holds. Forward valuation and FCF support holding underwater positions; balance sheet and beta block adding size. Risk debate converges on **defined exits** rather than averaging down at market.

**Entry Price**: $6.45

**Stop Loss**: $5.85

**Take Profit 1**: $6.90

**Take Profit 2**: $7.35

**Time Horizon**: days–weeks (swing)

**Invalidation**: Daily close below $5.85 on volume > 7M.

**Final Decision**: **Hold** — manage with SL/TP; no market add.

