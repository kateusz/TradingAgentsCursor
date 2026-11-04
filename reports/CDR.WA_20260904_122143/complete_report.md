# Market Analyst

# Market Analysis: CDR.WA (CD Projekt S.A.)

**Analysis date:** 2026-09-04  
**Current price:** 227.9 PLN  
**Lookback:** 2025-09-04 to 2026-09-04 (251 sessions)

---

## Executive Summary

CDR.WA is in a **confirmed short- and medium-term downtrend** following a high-volume capitulation event on 2026-08-25 (close 242.9 PLN on 2.1M shares — roughly 7× average daily volume). Price has since declined a further ~6% to 227.9 PLN and now sits **below every major moving average**, with MACD in bearish territory and RSI approaching oversold. The stock is pressing the lower Bollinger Band (~222 PLN), suggesting either a near-term bounce or an acceleration toward the 52-week low near 211 PLN. Trend-following shorts retain the edge; counter-trend buyers should wait for evidence of stabilization before acting.

---

## Selected Indicators (8)

| Indicator | Category | Rationale for Selection |
|-----------|----------|------------------------|
| **close_10_ema** | Moving Average | Captures the sharp August breakdown; price is ~9 PLN below it, confirming immediate bearish momentum. |
| **close_50_sma** | Moving Average | Medium-term trend filter; recently flipped from support to resistance after the Aug 25 gap-down. |
| **close_200_sma** | Moving Average | Long-term benchmark; price below it for most of 2026 signals structural weakness despite earlier rallies. |
| **macd** | MACD | Bearish crossover on ~Aug 27–28; deeply negative (-4.28) confirms accelerating downside momentum. |
| **macdh** | MACD Histogram | Histogram negative and widening (-3.16); momentum deterioration is intensifying, not stabilizing. |
| **rsi** | Momentum | At 33.5, approaching the 30 oversold threshold — useful for timing potential bounces within a downtrend. |
| **boll_lb** | Volatility | Price within ~6 PLN of the lower band (222.05); key support zone and mean-reversion reference. |
| **atr** | Volatility | Elevated at 7.74 PLN (~3.4% of price); essential for stop placement after the recent volatility spike. |

*Excluded for redundancy:* `macds` (covered by `macd` + `macdh` relationship), `boll`/`boll_ub` (middle and upper bands less actionable when price is already at the lower extreme), `vwma` (closely tracks 50 SMA in current context and adds limited incremental signal).

---

## Price Action & Trend Structure

### One-Year Arc

CDR.WA opened the lookback period at 250.0 PLN and spent Q4 2025 in a grinding decline to the low 230s. A powerful rally in January 2026 (274.6 → 285.6 PLN on heavy volume) and again in April 2026 (260 → 293.1 PLN) offered two failed recovery attempts. Each rally was followed by distribution:

- **Jan 30 selloff:** 282.4 → 259.8 PLN on 831K volume
- **May 27 crash:** 262.8 → 233.0 PLN on **2.03M volume** (largest single-day volume in the period)
- **Aug 25 crash:** 259.0 → 242.9 PLN on **2.11M volume** (new volume record)

The current close of **227.9 PLN** is the lowest since late June 2026 and only ~8% above the 52-week intraday low of 211.3 PLN (2026-06-26).

### Moving Average Stack (as of 2026-09-04)

| Level | Value | Price vs. Level | Interpretation |
|-------|-------|-----------------|----------------|
| 10 EMA | 236.93 | −9.0 PLN (−3.9%) | Short-term bearish; no reclaim since Aug 26 |
| 50 SMA | 241.50 | −13.6 PLN (−5.6%) | Former support now overhead resistance |
| 200 SMA | 246.43 | −18.5 PLN (−7.5%) | Long-term trend remains down |
| Bollinger Middle (20 SMA) | 248.21 | −20.3 PLN (−8.2%) | Price in lower half of distribution |

The moving-average ordering (10 EMA < 50 SMA < 200 SMA with price below all three) is a textbook **bearish alignment**. Notably, the 50 SMA continued rising through early September (231.3 → 241.5 over the past month) even as price fell — a bearish divergence where the average lags the breakdown.

---

## Momentum Analysis

### MACD

- **MACD line:** −4.28 (was +7.78 on Aug 14 — a 12-point swing in three weeks)
- **Signal line:** −1.13
- **Histogram:** −3.16 (negative and expanding)

The MACD crossed below its signal line around **2026-08-27 to 2026-08-28**, coinciding with the post-crash consolidation failure. The histogram turned negative on Aug 28 (−3.65) and has remained deeply negative, with only a marginal improvement on Sep 4 (−3.16 vs. −3.22 on Sep 3). This pattern indicates **selling pressure is still dominant**; there is no bullish divergence yet between price making new lows and MACD flattening.

### RSI

- **Current:** 33.53
- **Recent range:** 33–42 since Aug 25 (prior peak 71.2 on Aug 12)

RSI has not reached the 30 oversold threshold but is trending toward it. During the January and April rallies, RSI exceeded 70 before reversals. In the current decline, RSI has stayed above 30, which in strong downtrends often precedes further weakness rather than an immediate bounce. A **bullish signal** would require RSI to hold above 30 on the next leg down (positive divergence) or a sharp rebound above 40 with price reclaiming the 10 EMA.

---

## Volatility & Bollinger Bands

| Band | Value (Sep 4) | Distance from Price |
|------|---------------|---------------------|
| Upper | 274.37 | +46.5 PLN |
| Middle | 248.21 | +20.3 PLN |
| Lower | 222.05 | −5.9 PLN |

Price is **walking the lower band**, a hallmark of strong downtrends. The band width has expanded significantly: lower band dropped from 245.5 (Aug 25) to 222.1 (Sep 4), reflecting the volatility injection from the Aug 25 event. A close below 222 would signal band expansion continuing downward, targeting the 211–220 zone.

**ATR at 7.74 PLN** is elevated relative to the 6.97–7.16 range seen in early August, confirming the market is pricing in larger daily moves. For risk management:

- **Tight stop (1× ATR):** ~8 PLN below entry
- **Standard stop (1.5× ATR):** ~12 PLN below entry
- **Wide stop (2× ATR):** ~15 PLN below entry

---

## Volume Context

Although VWMA was excluded from the primary eight, volume data from `stock.txt` is critical context:

- **Aug 25 volume:** 2,106,187 shares — institutional-scale liquidation
- **Sep 4 volume:** 394,117 shares — elevated but declining; selling may be exhausting
- **Jul 29 volume:** 797,113 shares on a +6% up day — last significant accumulation attempt

The Aug 25 candle opened at 248.0 and closed at 242.9 after trading as low as 236.0, leaving a **gap that has not been filled**. Subsequent sessions (Aug 26–Sep 4) show lower highs (246.7 → 235.5) and lower lows (237.7 → 226.0), confirming the gap as resistance.

---

## Key Price Levels

| Level | Price (PLN) | Significance |
|-------|-------------|--------------|
| **Immediate support** | 226.0 | Sep 4 intraday low |
| **Bollinger lower band** | 222.05 | Dynamic support; break = acceleration |
| **52-week low** | 211.3 | Jun 26, 2026 intraday low |
| **Aug 25 gap fill** | 248.0–259.0 | Major resistance zone |
| **50 SMA** | 241.50 | First meaningful recovery target |
| **200 SMA** | 246.43 | Trend reversal confirmation level |
| **April high** | 293.1 | Structural ceiling |

---

## Actionable Scenarios

### Bearish Continuation (Higher Probability)

**Trigger:** Daily close below 222 (Bollinger lower band)  
**Target:** 211–215 (52-week low zone)  
**Stop:** Reclaim of 10 EMA (~237)  
**Rationale:** MACD negative and widening, price below all MAs, no bullish RSI divergence yet.

### Counter-Trend Bounce (Lower Probability)

**Trigger:** Hammer/doji at 222–226 with RSI holding ≥30 and MACD histogram narrowing for 2+ sessions  
**Target:** 237–241 (10 EMA / 50 SMA confluence)  
**Stop:** Close below 220  
**Rationale:** RSI near oversold, proximity to lower Bollinger Band, post-crash volume declining.

### Trend Reversal (Requires Multiple Confirmations)

**Trigger:** Sustained close above 241.5 (50 SMA) with MACD crossing above signal and RSI >50  
**Target:** 248–255 (Bollinger middle / Aug gap zone)  
**Stop:** Close back below 50 SMA  
**Rationale:** Would invalidate the Aug 25 breakdown and signal a shift from distribution to accumulation.

---

## Risk Notes

1. **Polish market liquidity:** CDR.WA is a large-cap on WSE but can gap on earnings (CD Projekt game releases, financial results). ATR understates event risk.
2. **Oversold ≠ bullish:** RSI at 33 in a downtrend is a warning, not a buy signal. Wait for price structure to confirm.
3. **Volume spikes:** Two >2M volume days in 2026 (May 27, Aug 25) both preceded extended declines. A third spike near current levels would be highly significant.
4. **MA lag:** The 50 SMA is still rising while price falls; a "death cross" (50 below 200) has not occurred yet but the spread is narrowing (241.5 vs. 246.4 = 4.9 PLN gap).

---

## Summary Table

| Dimension | Status | Key Reading | Action Bias |
|-----------|--------|-------------|-------------|
| **Short-term trend** | Bearish | Price 9 PLN below 10 EMA (236.93) | Avoid longs until 10 EMA reclaimed |
| **Medium-term trend** | Bearish | Price 13.6 PLN below 50 SMA (241.50) | 50 SMA is first recovery hurdle |
| **Long-term trend** | Bearish | Price 18.5 PLN below 200 SMA (246.43) | Structural downtrend intact |
| **MACD momentum** | Bearish | MACD −4.28, histogram −3.16 widening | Momentum favors shorts |
| **RSI** | Weak / near oversold | 33.53, approaching 30 | Watch for divergence, not blind buy |
| **Bollinger Bands** | Lower band test | Price 227.9 vs. lower 222.05 | Support test in progress |
| **Volatility (ATR)** | Elevated | 7.74 PLN (~3.4% daily range) | Widen stops; reduce position size |
| **Volume** | Post-liquidation | Aug 25 record 2.1M; Sep 4 declining 394K | Selling may be exhausting near 222 |
| **Primary support** | 222–226 PLN | Bollinger lower + Sep 4 low | Break below 222 → target 211 |
| **Primary resistance** | 237–241 PLN | 10 EMA + 50 SMA zone | Must reclaim for bullish case |
| **Overall bias** | **Bearish** | No indicator conflicts on direction | Trend-follow shorts favored; bounces are sells until 241+ reclaimed |

---

# Sentiment Analyst

# Sentiment Analysis: CD PROJEKT RED (CDR.WA)

**Coverage period:** 28 August – 4 September 2026  
**Analysis date:** 4 September 2026  
**Ticker:** CDR.WA (CD PROJEKT RED Spółka Akcyjna)

---

## Executive Summary

Public sentiment toward CD Projekt RED over the past week underwent a sharp positive inflection, driven almost entirely by the company's Q2 2026 earnings release and the accompanying investor presentation. The dominant narrative shifted from frustration over the delayed *Witcher 4* launch (now slated for 2028) to enthusiasm about a 44% earnings beat, record cash flows, and early traction on franchise extensions—particularly *The Witcher 3: Songs of the Past*, which accumulated 900,000 wishlist sign-ups across platforms.

Sell-side commentary gathered by Bloomberg was uniformly constructive, with analysts describing themselves as "enamored" by the results and noting that the franchise licensing business is "starting to pay well." The Warsaw-listed share price responded positively to the news flow. For traders, the sentiment backdrop is decisively bullish in the near term, though the absence of direct social-media data means this assessment relies on news proxies and analyst tone rather than retail crowd positioning.

---

## Data Sources and Limitations

| Source | Availability | Notes |
|--------|-------------|-------|
| Company-specific news (Bankier, PAP) | **Available** | Five Bankier headlines plus one detailed RSS item; five PAP corporate filings |
| Global/macro news | **Skipped** | Polish market run configuration excluded global feed |
| Social media (X, Reddit, Steam forums) | **Not in bundle** | v1 fetch does not include a dedicated social feed; sentiment inferred from news tone and market reaction |

Without a direct social-media stream, this report treats financial press headlines, RSS narrative text, and analyst commentary as the best available proxy for what the market and gaming community are discussing. Gaming-community sentiment around *Songs of the Past* wishlist momentum is partially captured via the company's own disclosed metric (900k wishlists), which functions as a quantitative proxy for player anticipation.

---

## Sentiment Timeline (Past Week)

### Pre-earnings (28 August – early September)

Leading into the Q2 report, the prevailing bearish overhang was the official confirmation that *Witcher 4* would not launch until 2028—a multi-year gap that had previously weighed on investor patience. Corporate housekeeping items (statute change registration, board dividend recommendation, AGM convocation notices via PAP) circulated but carried neutral-to-low sentiment impact; they reflect routine governance rather than narrative-shifting events.

### Earnings day and immediate aftermath (~3 September 2026)

The Q2 2026 results triggered a sentiment reversal:

- **Net profit:** 142.9 million PLN vs. consensus of 99.3 million PLN—a **44% beat**.
- **Year-over-year:** Net profit roughly **doubled** vs. the prior-year comparable quarter.
- **Business mix:** A newly separated business line (franchise/licensing) was the primary profitability driver, signaling that CD Projekt's IP monetization strategy is maturing beyond core game launches.
- **Cash generation:** Record operating cash flows reinforced balance-sheet optionality for R&D on new titles and undisclosed projects.
- **Market reaction:** Warsaw share price moved higher, consistent with the news describing a reversal of prior "exchange disappointment" over the *Witcher 4* timeline.

Bankier's RSS summary explicitly framed the outcome as a catalyst that "reversed stock-exchange disappointment" and positioned the earnings report as a "strong impulse for the CD Projekt RED share price."

### Post-earnings narrative consolidation (3–4 September)

Follow-on coverage deepened the bullish framing:

1. **Analyst chorus:** Bloomberg-sourced sell-side opinions were unanimous in praising the quarter; headline language ("analysts enamored") signals consensus rather than divided opinion.
2. **Pipeline confidence:** Management highlighted hundreds of millions of PLN allocated to new games and secret projects, plus two active development efforts—reinforcing a "investing through the cycle" narrative.
3. **Franchise attach-rate optimism:** Management expressed confidence in a strong attach rate for *Songs of the Past*, supported by the 900k wishlist figure—a tangible, community-visible metric that partially substitutes for social-media buzz data.

---

## Thematic Sentiment Breakdown

### 1. Earnings Surprise — Strongly Positive

The magnitude of the consensus beat (44%) and the doubling of prior-year profit created a classic "sentiment reset" event. In behavioral terms, investors who had priced in *Witcher 4* delay fatigue were forced to reassess near-term cash generation. The earnings beat is the single largest positive sentiment driver in the window.

### 2. Franchise Monetization — Positive and Growing

The emergence of a distinct, high-growth licensing/franchise line addresses a long-standing investor concern: CD Projekt's revenue concentration in blockbuster release cycles. Headlines explicitly note franchises "starting to pay well," which reframes the company from a pure AAA launch story to a recurring IP monetization platform. This theme supports a more stable sentiment floor between major releases.

### 3. *Witcher 4* Delay — Negative but Partially Neutralized

The 2028 launch date for *Witcher 4* remains a structural sentiment headwind for long-horizon holders. However, within this specific week, the earnings beat and franchise traction **overwhelmed** the delay narrative in news flow. The risk is that once the earnings euphoria fades, the multi-year content gap could re-emerge as the dominant talking point—particularly on gaming forums and social channels not captured here.

### 4. *Songs of the Past* — Cautiously Optimistic

900,000 wishlist sign-ups ahead of release is a concrete positive signal. Management's stated belief in a strong attach rate suggests confidence that existing *Witcher 3* owners will convert. For traders, this is a near-to-medium-term sentiment catalyst: successful launch could extend the post-earnings positive narrative into Q3/Q4 2026.

### 5. R&D Investment and "Secret Projects" — Neutral-to-Positive

Headlines about hundreds of millions PLN directed at new games and undisclosed projects carry dual sentiment readings: bulls see pipeline depth and management conviction; bears may worry about capital intensity without visibility. In the current news window, the tone leans positive because spending is framed alongside record cash flows rather than balance-sheet strain.

### 6. Corporate Governance — Neutral

PAP filings (statute change with company name update, dividend recommendation, AGM notices) are procedural. They do not appear to have generated meaningful sentiment movement in the financial press during this window.

---

## Inferred Community and Market Sentiment

Although direct social-media scraping is unavailable, several indirect signals allow reasonable inference:

| Signal | Inferred sentiment | Confidence |
|--------|-------------------|------------|
| 900k wishlists for *Songs of the Past* | Strong player anticipation | High (quantitative) |
| Share price rise post-earnings | Institutional/retail re-rating | High (price action cited in news) |
| Bloomberg analyst unanimity | Professional bullish consensus | High (explicit in coverage) |
| Franchise revenue surprise | Relief that IP has monetization beyond launches | Medium-high |
| *Witcher 4* 2028 date | Underlying patience fatigue (subdued this week) | Medium |

The gaming-community sentiment picture is likely more nuanced than the financial press suggests: core fans may remain split between excitement for *Songs of the Past* and frustration over the extended wait for *Witcher 4* and *Cyberpunk 2*. The earnings news temporarily shifted the balance toward optimism among investors, even if enthusiast forums retain a more skeptical long-term tone.

---

## Implications for Traders and Investors

### Near-term (days to weeks)

- **Sentiment tailwind is active.** The earnings beat, analyst upgrades/positive commentary, and wishlist momentum create a favorable news cycle. Momentum-oriented positions have narrative support.
- **Watch for sentiment peak.** Headlines using superlative language ("analysts enamored," "spectacular improvement") often coincide with short-term sentiment highs. Consider whether the 44% beat is now fully priced after the initial share-price reaction.
- **Catalyst chain:** *Songs of the Past* release metrics (sales, attach rate, review scores) are the next organic sentiment events. Underperformance relative to the 900k wishlist baseline could trigger a swift narrative reversal.

### Medium-term (months)

- **Franchise revenue durability** will determine whether this week's sentiment shift is structural or episodic. One strong quarter in licensing is encouraging; sequential growth is needed to sustain the re-rating.
- ***Witcher 4* timeline risk** remains the dominant long-cycle sentiment overhang. Any further delays or sparse development updates could erode the goodwill built this week.
- **Dividend recommendation** (per PAP filing) may attract income-oriented Polish retail interest if the payout is meaningful relative to the re-rated valuation—monitor AGM materials for specifics.

### Risk factors to sentiment

1. **Post-earnings hangover** — Once Q2 figures are digested, absence of near-term AAA launches may return focus to the 2028 gap.
2. **Wishlist-to-sales conversion** — High wishlist counts do not guarantee commercial success; review bombing or pricing backlash on social platforms could emerge post-launch (not visible in current data).
3. **Macro/global gaming sector** — Global news feed was unavailable for this run; sector-wide sentiment (PC/console spending, competitor launches) is an unobserved variable.
4. **Secret project opacity** — Lack of visibility into undisclosed titles means sentiment is vulnerable to leaks, cancellations, or timeline slips.

---

## Overall Sentiment Assessment

**Composite sentiment score (news-proxy basis): Bullish**

The past week represents one of the most positive sentiment windows for CDR.WA in recent quarters. The confluence of an earnings beat, franchise revenue validation, record cash flows, and quantifiable player interest in *Songs of the Past* overwhelmed the lingering *Witcher 4* delay concern—at least in financial media and analyst channels. Traders should treat current sentiment as elevated and event-driven, with the next major inflection likely tied to franchise product performance rather than further financial disclosures.

---

## Key Points Summary

| Category | Detail | Sentiment | Trading relevance |
|----------|--------|-----------|-------------------|
| Q2 2026 earnings | Net profit 142.9 mln PLN vs. 99.3 mln consensus (+44%) | **Strongly positive** | Primary catalyst; likely drove share-price rally |
| YoY profitability | Net profit ~2× prior year | **Positive** | Supports structural improvement narrative |
| Franchise/licensing line | New business line drove margin improvement | **Positive** | Reduces single-release dependency; sustains re-rating |
| Cash flows | Record operating cash flows reported | **Positive** | Funds R&D; supports dividend/buyback optionality |
| Analyst consensus | Bloomberg sources unanimous; "enamored" tone | **Strongly positive** | Reduces near-term downgrade risk |
| *Songs of the Past* | 900k wishlist sign-ups across platforms | **Positive** | Near-term sentiment catalyst; monitor launch conversion |
| *Witcher 4* timeline | Launch pushed to 2028 | **Negative (muted)** | Long-cycle overhang; temporarily overshadowed by earnings |
| R&D spending | Hundreds of millions PLN on new/secret projects | **Neutral-positive** | Pipeline depth vs. capital intensity trade-off |
| Corporate actions | Statute change, dividend recommendation, AGM notices | **Neutral** | Routine governance; watch dividend size at AGM |
| Social media data | Not available in v1 bundle | **N/A** | Gaming-community nuance may differ from press tone |
| Global macro context | Feed skipped for Polish market run | **N/A** | Sector-wide sentiment unobserved this cycle |

---

# News Analyst

# News Analysis: CD Projekt RED (CDR.WA)

**Coverage period:** 2026-08-28 to 2026-09-04  
**Ticker:** CDR.WA (CD PROJEKT RED Spółka Akcyjna)  
**Report date:** 2026-09-04

---

## Executive Summary

The past week was dominated by CD Projekt RED's **Q2 2026 earnings release**, which materially exceeded market expectations and shifted sentiment from cautious to bullish. Net profit of **142.9 mln PLN** beat the PAP consensus of **99.3 mln PLN by ~44%**, with profitability roughly **doubling year-over-year**. Analysts surveyed by Bloomberg uniformly described the report as a strong catalyst for the share price, and Warsaw-listed shares reacted positively.

The earnings narrative centers on a **new franchise/licensing revenue line** that drove a sharp improvement in margins and produced **record cash flows**. This partially offsets earlier disappointment over the official **Witcher 4 launch window (2028)** and reframes the investment case around nearer-term monetization (franchise attach rates, DLC) and a multi-year pipeline funded by strong balance-sheet cash generation.

Corporate housekeeping items (statute/name registration, profit-dividend board recommendation) are secondary but relevant for shareholder-return expectations.

**Macro context:** No global macro news feed was included for this GPW run; company-specific Polish sources only.

---

## 1. Q2 2026 Earnings — Primary Catalyst

### Beat magnitude and market reaction

CD Projekt RED delivered a clear earnings surprise in Q2 2026:

| Metric | Actual | Consensus (PAP) | Surprise |
|--------|--------|-----------------|----------|
| Net profit (Q2 2026) | 142.9 mln PLN | 99.3 mln PLN | **+44%** |

Coverage from Bankier and Bloomberg-linked analyst commentary characterizes the result as a **"spectacular" profitability improvement**, with net profit roughly **2× the prior-year Q2 level**. The market had been pricing in disappointment after management confirmed **Witcher 4 would not launch until 2028**; the Q2 beat reversed that overhang and supported a **Warsaw share-price rally** in the days following the release.

### Trading implication

Earnings beats of this magnitude on a thinly covered Polish large-cap typically compress the risk premium short term. The key question for traders is whether the beat is **structural** (new recurring franchise revenue) or **one-off** (timing of licensing/attach-rate recognition). Evidence so far points toward a structural shift, but confirmation in Q3/Q4 will matter for sustaining the re-rating.

---

## 2. Franchise Business Line — New Growth Narrative

Multiple articles highlight that the **main driver of Q2 profitability** was the **separation and rapid scaling of a new business line** tied to franchise monetization. Analysts describe franchise revenues as **"starting to pay off nicely"** ("Franczyzy zaczynają nieźle płacić").

This is strategically significant because:

- It diversifies revenue away from pure AAA game-release cycles.
- It provides **recurring, higher-margin cash flows** between major title launches.
- It supports management's stated belief in a **strong attach rate** for upcoming content such as *Wiedźmin 3: Pieśni przeszłości* (*The Witcher 3: Song of the Past*).

### Trading implication

If franchise/licensing becomes a visible, repeatable line item in quarterly reports, CDR could trade at a **higher earnings multiple** than the traditional "hit-driven" game-studio model. Watch management commentary and segment disclosure in subsequent filings for confirmation that Q2 was not an anomaly.

---

## 3. Pipeline and Capital Allocation

### R&D and secret projects

Management signaled continued heavy investment: **"hundreds of millions of PLN"** allocated to new games and undisclosed ("secret") projects. The company is actively developing **at least two projects** beyond publicly detailed titles.

### Near-term content catalyst: *Wiedźmin 3: Pieśni przeszłości*

Ahead of release, the expansion has accumulated **~900,000 wishlist registrations across all platforms** — a tangible demand indicator. Management explicitly ties this to expectations for a **strong attach rate** among the existing *Witcher 3* installed base.

### Long-dated flagship: *Wiedźmin 4* (2028)

The official **2028 premiere window for Witcher 4** remains the long-cycle anchor but was a prior source of market disappointment. The Q2 beat and franchise momentum have **partially de-risked the "dead zone"** between major AAA launches, though 2028 remains a distant binary event for the stock.

### Trading implication

- **Near term (3–12 months):** *Song of the Past* wishlist traction and launch attach rate are actionable KPIs; positive pre-launch metrics support sentiment but revenue recognition timing matters.
- **Medium term:** Sustained franchise cash flows fund R&D without balance-sheet stress — **record operating cash flows** in Q2 reinforce this.
- **Long term:** Witcher 4 in 2028 remains the largest upside/downside swing factor; traders should not conflate a strong Q2 with de-risking of the 2028 title itself.

---

## 4. Analyst Sentiment

Post-earnings, **analysts polled by Bloomberg were unanimously positive**, describing the report as a **strong impulse for the share price** ("mocny impuls dla kursu"). The tone shifted from skepticism (Witcher 4 delay) to endorsement of the franchise monetization model and cash-generation profile.

### Trading implication

Unanimous bullish analyst tone after a large beat often coincides with **near-term momentum** but can also mark a **sentiment peak**. Consider whether the +44% profit surprise is fully priced after the initial rally; liquidity on WSE can amplify post-earnings moves in both directions.

---

## 5. Corporate / Regulatory Items (PAP)

Lower-urgency but relevant disclosures from PAP MediaRoom in the coverage window:

| Item | Relevance |
|------|-----------|
| Registration of statute change with **company name change** | Branding alignment to "CD Projekt RED"; limited direct P&L impact |
| **Board recommendation on net profit distribution** | Signals potential dividend/buyback policy; watch AGM outcome |
| Historical AGM notices (2023–2024) | Background context only; not new catalysts |

The profit-distribution recommendation is the most tradable of these: if it implies a **meaningful dividend** supported by record cash flows, it could attract income-oriented Polish retail flows.

---

## 6. Macro and Sector Context

No dedicated global/macro news feed was provided for this GPW analysis run. Sector-level inference from company news only:

- Strong Q2 results suggest **resilient consumer spending on gaming content/IP monetization** in CDPR's core markets, at least for established franchises.
- Polish large-cap tech/gaming remains **sensitive to PLN liquidity and WIG20 flows**; no macro data here to assess rate or FX headwinds.

Traders should supplement this report with broader European macro and gaming-sector peer earnings (e.g., other EU publishers) from independent sources.

---

## 7. Key Risks and Watch Items

1. **Franchise revenue sustainability** — Q2 may include initial recognition effects; need sequential quarters to validate.
2. **Execution risk on pipeline** — Hundreds of millions PLN in R&D with limited public detail on secret projects increases opacity.
3. **Witcher 4 timeline** — 2028 is far out; any further slippage would reintroduce the "content gap" narrative.
4. **Attach-rate dependency** — Near-term thesis leans on *Song of the Past* converting wishlists to paid units; underwhelming launch would hurt sentiment.
5. **Post-earnings mean reversion** — Large beats often see profit-taking once analyst upgrades are digested.

---

## 8. Actionable Takeaways for Traders

| Horizon | Bias | Rationale |
|---------|------|-----------|
| **Short term (days–weeks)** | Cautiously bullish | Earnings beat + unanimous analyst praise + share-price momentum; watch for exhaustion after initial rally |
| **Medium term (quarters)** | Neutral-to-bullish | Franchise line and *Song of the Past* attach rate are the key validation metrics; record cash flows support R&D and possible dividends |
| **Long term (years)** | Event-driven | Witcher 4 (2028) remains the dominant swing factor; franchise model reduces but does not eliminate cycle risk |

**Highest-signal data points to monitor next:**
- Q3 2026 franchise/licensing revenue trend (sequential, not just YoY)
- *Wiedźmin 3: Pieśni przeszłości* launch sales and attach rate vs. 900k wishlists
- Board/AGM resolution on profit distribution
- Any management updates on the two undisclosed projects

---

## Summary Table

| Topic | Development | Impact | Sentiment | Actionability |
|-------|-------------|--------|-----------|---------------|
| Q2 2026 earnings | Net profit 142.9 mln PLN vs 99.3 mln consensus (+44%) | High — primary price catalyst | Bullish | High — already moving shares; watch follow-through |
| YoY profitability | ~2× prior-year Q2 net profit | High | Bullish | Medium — confirm in next quarter |
| Franchise business line | New line drove margin jump; "starting to pay" | High — structural narrative shift | Bullish | High — key metric to track quarterly |
| Cash flows | Record operating cash flows reported | Medium–High | Bullish | Medium — supports dividends & R&D |
| *Witcher 3: Song of the Past* | 900k wishlists; mgmt expects strong attach rate | Medium | Bullish | High — near-term revenue catalyst |
| *Witcher 4* timeline | Official 2028 launch | High (long dated) | Mixed (was bearish, now partially offset) | Low near term; high long term |
| R&D / pipeline | Hundreds of mln PLN; 2+ secret projects | Medium | Neutral | Low — limited visibility |
| Analyst consensus | Bloomberg poll: unanimous positive post-earnings | Medium | Bullish | Medium — sentiment tailwind, peak-risk |
| Corporate name change | Statute registration (CD Projekt RED) | Low | Neutral | Low |
| Profit distribution | Board recommendation on net profit split | Medium | Neutral–Bullish | Medium — watch AGM/dividend yield |
| Global macro | Not available for this run | N/A | N/A | Supplement externally |

---

# Fundamentals Analyst

# Fundamentals Analysis: CD Projekt Red S.A. (CDR.WA)

**Report date:** 2026-09-04  
**Sector:** Communication Services | **Industry:** Electronic Gaming & Multimedia  
**Currency:** PLN (unless noted)

---

## Executive Summary

CD Projekt Red remains a high-margin, cash-generative game developer with a fortress balance sheet and minimal financial leverage. TTM profitability is exceptional (net margin ~70%, ROE ~18%), but valuation embeds a cyclical peak: trailing P/E ~45x and forward P/E ~143x imply the market expects a sharp earnings normalization after the current franchise cycle. Q2 2026 results beat consensus by ~44% on net income, reinforcing near-term franchise monetization, while heavy intangible capex and investment activity explain negative TTM free cash flow despite strong operating cash generation. No insider transactions were reported in the lookback window.

---

## Company Profile & Market Position

CD Projekt Red S.A. is Poland's leading AAA game developer, best known for *The Witcher* franchise and *Cyberpunk 2077*. The company operates a premium, franchise-driven model with episodic revenue spikes tied to major releases and expansions.

| Metric | Value |
|--------|-------|
| Market cap | 22.77 bn PLN |
| Shares outstanding | ~99.91 mn |
| Implied share price | ~228 PLN |
| 52-week range | 211.3 – 297.0 PLN |
| 50-day / 200-day avg | 241.1 / 246.8 PLN |
| Beta | 0.38 (low vs market) |
| Dividend yield | 0.46% |

The stock trades below its 200-day moving average but within the lower half of its 52-week range, suggesting muted sentiment relative to prior highs despite solid recent earnings.

---

## Valuation

| Multiple | Value | Interpretation |
|----------|-------|----------------|
| P/E (TTM) | 44.6x | Premium; reflects peak-cycle earnings |
| Forward P/E | 143.3x | Market prices in steep earnings decline |
| P/B | 6.9x | Well above book; IP/franchise premium |
| EPS (TTM) | 5.11 PLN | Bankier TTM EPS (Jun 2026): 6.64 PLN |
| Forward EPS | 1.59 PLN | ~69% implied drop vs TTM |
| Book value / share | 32.96 PLN (Yahoo) / 35.64 PLN (Bankier Jun 2026) |

**Actionable insight:** The wide gap between TTM EPS (5.11–6.64 PLN) and forward EPS (1.59 PLN) is the central valuation tension. Traders should treat current multiples as cycle-dependent — attractive only if franchise pipeline (Witcher 4, Cyberpunk sequel, unannounced projects) resets the earnings base above consensus forward estimates.

Bankier-reported P/E improved from 47.4x (Sep 2025) to 33.8x (Jun 2026) as earnings caught up to price — still not cheap on a normalized basis.

---

## Revenue & Earnings — Quarterly Trajectory

Game revenue is highly seasonal and release-driven. Recent quarters (PLN thousands):

| Quarter | Revenue | EBIT (oper.) | Net income | EBITDA |
|---------|---------|--------------|------------|--------|
| Q2 2025 (Jun) | 216,734 | 72,181 | 68,953 | 88,351 |
| Q3 2025 (Sep) | 349,072 | 194,630 | 193,492 | 218,721 |
| Q4 2025 (Dec) | 74,877 | 107,973 | 246,278* | 130,028 |
| Q1 2026 (Mar) | 191,107 | 97,067 | 106,200 | 126,265 |
| Q2 2026 (Jun) | 244,201 | 148,272 | 142,907 | 161,387 |

*Q4 2025 net income inflated by a PLN 48.4 mn tax benefit (negative tax provision); normalized income was ~PLN 170 mn.

**TTM revenue (fundamentals feed):** PLN 947.3 mn  
**TTM net income:** PLN 588.3 mn  
**Gross margin (TTM):** ~92.6% (PLN 876.9 mn gross profit on PLN 947.3 mn revenue)  
**Operating margin (TTM):** 61.5%  
**Net margin (TTM):** 70.0%

### Q2 2026 — Recent Beat (Bankier, early Sep 2026)

- Net income PLN 142.9 mn vs PAP consensus PLN 99.3 mn (+44%).
- Revenue PLN 244.2 mn; operating profit PLN 148.3 mn.
- Analyst commentary highlights franchise attach-rate strength and solid performance from licensed/expansion content.
- *Witcher 3: Wild Hunt — A Night to Remember* (expansion) reached ~900k wishlists across platforms ahead of launch.

**Actionable insight:** Near-term earnings momentum is positive and consensus was too conservative in Q2. However, Q3 2025's PLN 349 mn revenue quarter sets a high bar — without a comparable release, YoY comparisons may soften.

---

## Balance Sheet Strength

| Item (PLN thousands) | Mar 2026 | Dec 2025 | Mar 2025 | Trend |
|----------------------|----------|----------|----------|-------|
| Total assets | 3,643,417 | 3,503,320 | 3,119,131 | ↑ Growing |
| Stockholders' equity | 3,412,725 | 3,289,859 | 2,892,578 | ↑ Growing |
| Total liabilities | 230,692 | 213,461 | 226,553 | Stable/low |
| Cash & equivalents | 30,008 | 114,115 | 217,282 | ↓ Declining |
| Short-term investments | 942,993 | 853,410 | 957,513 | Large portfolio |
| Goodwill & intangibles | 1,472,291 | 1,301,443 | 910,209 | ↑ R&D capitalization |
| Total debt (leases) | 26,038 | 26,038 | 20,150 | Minimal |
| Working capital | 980,750 | 1,154,369 | 1,185,053 | Strong |

**Liquidity:** Current ratio 6.31x — exceptionally strong.  
**Leverage:** Debt/equity 1.0% (Bankier debt ratio ~6.3%); essentially unlevered.  
**Tangible book value:** PLN 1.94 bn vs equity PLN 3.41 bn — ~43% of equity is intangible (capitalized game development and acquisitions).

**Actionable insight:** Balance sheet risk is low. The main watch item is declining headline cash (PLN 30 mn in Mar 2026, PLN 19.4 mn in Jun 2026 per Bankier) offset by ~PLN 943 mn in short-term investments — total liquid reserves remain ~PLN 973 mn. Traders should monitor investment-portfolio revaluation and development spend, not raw cash alone.

---

## Cash Flow Analysis

| Quarter | Operating CF | Investing CF | Financing CF | Free cash flow | Capex |
|---------|-------------|-------------|-------------|----------------|-------|
| Q1 2026 | 163,491 | -246,436 | -1,162 | -17,176 | -180,667 |
| Q4 2025 | 103,806 | -111,538 | -959 | -70,035 | -173,841 |
| Q3 2025 | 237,146 | -137,772 | -123,542 | 100,680 | -136,466 |
| Q2 2025 | 98,599 | -167,288 | -1,619 | -67,553 | -166,152 |

**TTM free cash flow:** -PLN 411.7 mn (fundamentals feed)

The FCF deficit is structural, not distress-driven:
1. **Heavy capex** (~PLN 137–181 mn/quarter) — game development and studio infrastructure.
2. **Intangible purchases** (~PLN 19–31 mn/quarter) — IP and technology.
3. **Investment portfolio churn** — Q1 2026 net investment purchases of PLN 156 mn.
4. **Shareholder returns** — Q3 2025: PLN 99.9 mn dividend + PLN 22.4 mn buyback (1.0 mn shares at treasury).

Operating cash flow remains robust (PLN 164–237 mn in recent strong quarters), confirming earnings quality.

**Actionable insight:** Negative FCF during investment cycles is normal for CD Projekt. Flag only if operating CF turns negative or capex accelerates without pipeline visibility. Current spend aligns with management commentary on "hundreds of millions" allocated to new titles and undisclosed projects.

---

## Profitability & Returns

| Metric | TTM (Yahoo) | Latest (Bankier Jun 2026) |
|--------|-------------|---------------------------|
| ROE | 18.3% | 21.3% |
| ROA | 9.8% | 19.8% |
| Net margin | 70.0% | 80.2% (quarterly) |
| EBITDA (TTM) | PLN 566.0 mn | — |

Interest income (~PLN 12–18 mn/quarter) supplements operating profit; the company earns more from its cash portfolio than it pays in lease interest.

---

## Insider Activity

No insider transactions were reported for CDR.WA in the available data. Absence of insider selling near cycle highs is neutral-to-slightly-positive, but limited informational value given Polish reporting conventions.

---

## Pipeline & Strategic Context (Bankier, Aug–Sep 2026)

1. **Franchise monetization** — Expansions and back-catalog sales are contributing meaningfully between major launches.
2. **Product pipeline** — Management confirmed work on multiple projects including two unannounced titles; heavy R&D capitalization visible on the balance sheet (intangibles +PLN 562 mn YoY).
3. **Analyst sentiment** — Post-Q2 2026, Polish sell-side turned more constructive, citing franchise revenue durability.
4. **Key risk** — Concentration in few IP assets; any delay to Witcher 4 or next Cyberpunk installment would reinforce the bearish forward earnings curve already implied by the 143x forward P/E.

---

## Key Risks

| Risk | Severity | Evidence |
|------|----------|----------|
| Earnings cyclicality / post-peak normalization | High | Forward P/E 143x vs TTM 45x |
| Negative FCF during dev cycle | Medium | TTM FCF -PLN 412 mn; heavy capex |
| Intangible asset concentration | Medium | PLN 1.47 bn intangibles (43% of equity) |
| Cash headline decline | Low–Medium | Cash down to PLN 19–30 mn; offset by ST investments |
| Single-franchise dependence | High | Witcher/Cyberpunk drive revenue spikes |
| Valuation compression if pipeline disappoints | High | P/B 6.9x leaves little asset-floor support |

---

## Trading-Oriented Conclusions

1. **Quality compounder, cyclical earner** — Exceptional margins and balance sheet support a long-term quality thesis; near-term EPS is not sustainable at Q3 2025 levels without new launches.
2. **Q2 2026 beat is a positive catalyst** — Consensus was too low; franchise attach rates are working. Monitor Q3 2026 for YoY revenue deceleration vs the PLN 349 mn quarter.
3. **FCF is not the right near-term metric** — Use operating cash flow and pipeline milestones instead.
4. **Valuation requires a view on Witcher 4 / Cyberpunk sequel timing** — At ~228 PLN, the stock prices moderate growth with a cyclical trough in FY2027 earnings (per forward EPS). Upside needs pipeline confirmation; downside if forward estimates prove optimistic.
5. **Low beta (0.38)** — Defensive for a game stock; may underperform in broad risk-on rallies but offers relative stability.

---

## Summary Table

| Dimension | Assessment | Key figure | Signal |
|-----------|------------|------------|--------|
| Valuation | Expensive on TTM; priced for downturn | P/E 44.6x TTM, Fwd P/E 143x | Neutral / cautious |
| Earnings momentum | Q2 2026 beat (+44% vs consensus) | NI PLN 142.9 mn | Bullish near-term |
| Revenue quality | High-margin, release-driven | Net margin 70% TTM | Bullish (cyclical peak) |
| Balance sheet | Fortress | Current ratio 6.3x, D/E ~1% | Bullish |
| Cash flow | OCF strong, FCF negative | OCF PLN 163 mn Q1; FCF -PLN 412 mn TTM | Neutral |
| Returns | Above average | ROE 18–21% | Bullish |
| Pipeline | Active investment phase | Intangibles +PLN 562 mn YoY | Neutral / watch |
| Insider activity | No transactions reported | — | Neutral |
| Dividend | Modest yield | 0.46% | Neutral |
| Risk profile | Low financial, high business cyclicality | Beta 0.38 | Mixed |

---

# Bull Researcher

## Round 1

Look, I get it — if you only pull up the chart, CDR.WA looks like a stock in free fall. Price at 227.9 PLN, below every major moving average, MACD deeply negative, walking the lower Bollinger Band. A bear will point at the Aug 25 capitulation candle — 2.1 million shares, a new volume record — and say "institutions are leaving." Fair. But that's exactly why this is an asymmetric setup for the bull case: the market is still pricing CD Projekt as a broken, hit-driven studio stuck in a multi-year content desert. The Q2 2026 numbers tell a completely different story, and the gap between narrative and fundamentals is where the money is.

### The earnings beat wasn't a blip — it was a business-model reveal

Net profit of **142.9 million PLN** against a PAP consensus of **99.3 million PLN** is a **44% beat**. Net income roughly **doubled year-over-year**. That's not rounding error — that's the market being structurally wrong about what this company can earn between blockbuster launches.

The driver matters even more than the magnitude: a **new franchise/licensing revenue line** scaled fast enough to dominate Q2 profitability. Analysts polled by Bloomberg were unanimous — "enamored" is the word in the coverage — and the tone shifted from Witcher 4 delay fatigue to "franchises are starting to pay well." This is the single most important re-rating catalyst CD Projekt has had in years. It transforms the investment thesis from "pray for AAA release cycles" to "premium IP platform with recurring, high-margin monetization."

Gross margin at **~92.6%** and net margin at **~70% TTM** aren't accidents. This is one of the highest-quality earnings engines in European gaming. When consensus is too conservative by 44% in a quarter where the bear case was supposed to be *confirmed* by the 2028 Witcher 4 timeline, you don't fade that — you lean into it.

### Competitive moat: owned IP, fortress balance sheet, patient capital

CD Projekt isn't a publisher renting someone else's characters. It owns **The Witcher** and **Cyberpunk** — two of the most commercially proven AAA franchises in the industry. That IP ownership is why P/B sits at 6.9x and why the balance sheet looks like a fortress: **current ratio 6.3x**, debt-to-equity around **1%**, and roughly **973 million PLN** in liquid reserves (cash plus short-term investments) funding development without balance-sheet stress.

They're putting **hundreds of millions of PLN** into new games and at least **two undisclosed projects** while generating **record operating cash flows**. Negative TTM free cash flow of ~412 million PLN sounds scary until you realize it's capex and intangible investment — intangibles up **562 million PLN year-over-year** — not operational distress. Operating cash flow ran **163–237 million PLN** in recent strong quarters. This is a company *investing through the cycle*, not bleeding out.

Beta at **0.38** means you get AAA-game upside optionality with below-market volatility. For a portfolio holding, that's rare.

### Near-term catalysts the bear is underweighting

**The Witcher 3: Songs of the Past** has **900,000 wishlist sign-ups** across platforms. Management is explicitly guiding for a strong attach rate among the existing Witcher 3 installed base. That's a quantifiable demand signal — not forum speculation — and it's the next organic sentiment and revenue event after the earnings reset. A successful launch extends the franchise monetization narrative from one great quarter into a repeatable pattern.

The **board's profit distribution recommendation** (per PAP filings) adds another angle: record cash generation could translate into meaningful shareholder returns at the AGM. On a stock yielding only **0.46%** today, even a modest dividend step-up attracts Polish retail flows on the WSE.

And let's be honest about sentiment: the past week was one of the most bullish news windows CDR has seen in recent quarters. The earnings beat overwhelmed the Witcher 4 delay narrative *in the very channels that move institutional money* — financial press and sell-side. The bear who says "but Reddit is still angry" is describing a lagging indicator, not a leading one.

### Why the chart weakness is opportunity, not verdict

Yes, I'll concede the technical picture is ugly short-term. Price is **~9 PLN below the 10 EMA**, RSI at **33.5** approaching oversold, and the Aug 25 gap at 248–259 PLN is overhead resistance. But notice what happened to volume: **2.1 million shares on Aug 25**, then **394,000 on Sep 4** — elevated but declining. Selling pressure may be exhausting precisely as the stock presses the **222–226 PLN support zone** (Bollinger lower band at 222.05, Sep 4 low at 226.0). The 52-week low at **211.3 PLN** is only ~8% below current price. Downside from here is bounded; upside to a sentiment-driven re-rating toward the 50 SMA at **241.5 PLN** is ~6%, and a full gap-fill recovery toward **248–255 PLN** is ~15–20% if the franchise thesis sticks.

The Aug 25 selloff likely reflects pre-earnings positioning and Witcher 4 timeline disappointment already in the price. The post-earnings fundamental reality — beat, cash flows, analyst unanimity — hasn't fully repaired the technical damage. That's the classic setup: **fundamentals inflecting up while price is still digesting the old narrative.**

### Pre-empting the bear's best shots

**"Forward P/E of 143x means earnings collapse."** Correct — the market already prices a cyclical trough. That's not a risk revelation; it's in the stock. The bull case doesn't require sustained 70% net margins forever. It requires franchise revenue to prove durable enough that forward EPS estimates — implying a **~69% drop** from TTM — are too pessimistic. One 44% beat against that consensus is a strong opening argument.

**"Witcher 4 isn't until 2028."** Known. Priced. And now partially bridged by a licensing business line that didn't exist in investors' models a quarter ago. Songs of the Past, back-catalog sales, and franchise attach rates fill the gap between now and 2028 — funded by record OCF, not debt.

**"Hit-driven cyclicality / single-IP concentration."** Real risk, but the Q2 franchise line is the antidote in progress. Diversification of *revenue timing* matters as much as diversification of IP, and CD Projekt just demonstrated it can print 143 million PLN in net income in an ostensibly "dead" quarter.

**"No insider buying."** Neutral at best. In Polish reporting conventions, absence of insider selling near cycle highs is itself mildly reassuring — no management rush for the exits.

### The bottom line

CD Projekt at ~228 PLN is a **quality compounder trading through a sentiment-technical dislocation** after a business-model proof point that consensus missed by nearly half. You have: a 44% earnings beat, a new high-margin franchise revenue stream, 900k wishlists on the next product catalyst, record operating cash flows, unanimous sell-side praise, a fortress balance sheet funding multiple pipeline projects, and a stock pressing support with declining post-capitulation volume.

The bear sees a downtrend. I see a market that sold the delay story too hard and hasn't yet paid for the franchise monetization story that just landed. Round 1 goes to the bull: **buy the fundamental inflection at technical exhaustion, with a clear line in the sand at ~220 PLN and a first recovery target at 241+ where the narrative and the chart reconcile.**

## Round 3

Alright, final round — let me close this out by dismantling the bear's core framing, because after three rounds the same mistake keeps showing up: **treating CD Projekt like a broken momentum stock when the business just printed the evidence that changes the earnings math.**

### The "failed catalyst" is a category error

The bear's strongest punch is price action: **227.9 PLN**, still below every moving average, Aug 25 gap unfilled, MACD at **−4.28**, no reclaim of the **50 SMA at 241.5**. "If the beat were real, smart money would have bought it." I hear that — and I reject the conclusion.

Two things the bear conflates: **(1) a fundamental re-rating event** and **(2) an instant technical reversal on a Polish large-cap that just absorbed a record **2.1 million share** liquidation candle.** CD Projekt doesn't trade like NVIDIA. WSE liquidity, local retail positioning, and the Aug 25 Witcher 4 delay overhang created a structural supply shock that doesn't unwind in five sessions because Q2 printed 44% above consensus.

Look at what the news and sentiment reports actually say: Warsaw shares **rallied post-earnings**, Bloomberg analysts were **unanimously positive**, and the dominant narrative flipped from "2028 delay fatigue" to "franchises are starting to pay well." The market report itself notes Sep 4 volume at **394,000** — elevated but **declining** from capitulation — while price holds **222–226 PLN** support. That's not rejection of the thesis; that's **digestion after a volume event**. The bear wants instantaneous gap-fill confirmation. The bull case never required that on day five. It requires sequential proof that franchise earnings are real — and Q2 delivered the first proof point while price sits **~8% above the 52-week low at 211.3 PLN**, not making new lows.

The bear assigns "higher probability to bearish continuation" below **222.05**. Fine — that's the stop, not the thesis. **~2 PLN of risk to define whether the earnings inflection matters.** If you're wrong at 220, you lose a defined slice. If the franchise line holds and *Songs of the Past* converts even a fraction of **900,000 wishlists**, the path to **241+** is a **~6%** move to the 50 SMA and **~15–20%** to gap-fill territory — with a business now generating **record operating cash flows** and **142.9 million PLN** net income in a quarter consensus had written off.

### "Peak margins" misreads what actually beat

The bear keeps waving **forward P/E ~143x** and **TTM P/E ~45x** as proof you're buying peak cyclicality. But the beat wasn't driven by a one-off AAA launch quarter — **Q2 2026 revenue was 244.2 million PLN**, not the blowout **349.1 million PLN** from Q3 2025. The company beat consensus by **44% on net income** in a *moderate-revenue* quarter because a **new franchise/licensing line** scaled fast enough to dominate profitability. That's the opposite of "peak release-cycle margins." That's a **new earnings engine** showing up in the P&L for the first time.

Yes, forward EPS of **1.59 PLN** implies a **~69% drop** from TTM. The market prices a trough. The bull case is that trough estimates are **anchored to the old hit-driven model** — and Q2 is the first data point proving the anchor is wrong. Gross margin at **~92.6%**, net margin at **~70% TTM**, ROE at **18–21%** — this isn't a commodity publisher trading on the next launch alone. It's a **premium IP owner** that just demonstrated it can print **143 million PLN** in net income between blockbusters. One quarter doesn't close the debate — but it demolishes the bear's claim that the beat is a "local maximum" on peak-cycle fumes. Local maxima don't come from new segment disclosures in a 244 million PLN revenue quarter.

### The balance sheet isn't a bonfire — it's the moat funding optionality

The bear's "cash bonfire" line is emotionally effective and analytically lazy. **TTM free cash flow of −411.7 million PLN** with **capex of 137–181 million PLN per quarter** and intangibles up **562 million PLN year-over-year** — that's CD Projekt doing exactly what you want a AAA studio to do between Witcher 4 and Cyberpunk sequel: **invest through the cycle from a position of strength**, not distress.

**Current ratio 6.3x. Debt-to-equity ~1%. ~973 million PLN in liquid reserves** (cash plus short-term investments). Operating cash flow of **163–237 million PLN** in recent strong quarters. The company paid **99.9 million PLN in dividends** and bought back **1.0 million shares** in Q3 2025 while ramping development. Negative FCF here is **capital allocation**, not hemorrhage — and the fundamentals report explicitly flags that OCF, not FCF, is the right near-term metric for this phase.

The bear says you're paying **143x forward** for "promises." I say you're paying a trough multiple on forward estimates that **haven't yet incorporated a franchise line that didn't exist in models a quarter ago** — while the balance sheet funds **two undisclosed projects** and hundreds of millions in pipeline spend **without leverage**. That's not a bonfire. That's **patient capital with asymmetric upside**.

### Wishlists, sentiment, and the catalyst chain the bear ignores

**900,000 wishlists** for *Songs of the Past* aren't revenue — agreed. They're a **quantified demand funnel** on a product management is explicitly guiding for strong attach rates among the existing Witcher 3 installed base. That's the next organic validation event: not another earnings slide deck, but **paid conversion** of a visible community metric. The sentiment report rates player anticipation as **high confidence**. The news report flags attach-rate performance as the **highest-signal near-term KPI**.

Meanwhile, the board's **profit distribution recommendation** sits in the catalyst queue. At **0.46% yield** today, even a modest step-up on record cash generation pulls Polish retail flows — a channel the bear's institutional-liquidation narrative underweights. And analyst unanimity after a **44% beat**? The bear calls it a sentiment peak warning label. I'll call it what it is: **consensus scrambling to catch up to a business-model shift it under-modeled** — the same consensus that missed Q2 by nearly half.

### Closing the debate: asymmetry at the right price

Let's score this honestly. The bear wins on **short-term trend**: bearish MA stack, negative MACD, no bullish divergence, price walking the lower Bollinger Band. I conceded that in Round 1 and I concede it now. Trend-following shorts have the tactical edge **until 241.5 is reclaimed**.

But investing isn't only tactical charting — and the bear's error across three rounds is pricing CD Projekt as if Q2 2026 never happened. The bull case rests on five stacked facts the bear never fully refutes:

1. **Earnings surprise magnitude** — +44% vs PAP consensus, net income roughly **2× YoY**, in a non-peak revenue quarter.
2. **Business-model evidence** — franchise/licensing as a new, high-margin P&L driver, not a press-release adjective.
3. **Balance-sheet quality** — fortress liquidity funding pipeline without debt stress; OCF record in Q2.
4. **Near-term catalyst chain** — *Songs of the Past* wishlists, attach-rate proof, potential dividend action at AGM.
5. **Valuation asymmetry at 228 PLN** — trough forward multiple on estimates lagging a structural shift; **~8%** to 52-week lows vs **~6–20%** recovery path if narrative repairs.

The bear wants you to wait for **241.5 PLN with MACD turning** before engaging. That's fair for a trader. For an investor building a position in a **quality compounder at a sentiment-technical dislocation**, waiting for full confirmation means buying the same stock **6–13 PLN higher** after the market has already paid for what you're watching for. The line in the sand is **~220 PLN**. The first reconciliation target is **241+**. The multi-year upside remains **Witcher 4 (2028)**, **Cyberpunk sequel**, and two secret projects on a **6.9x P/B** franchise premium that just got its first recurring-revenue proof point.

**Round 3 — and the debate — goes to the bull.** Not because the chart is pretty. Because at ~228 PLN you're being offered a **mispriced option on owned AAA IP** at the exact moment the company proved it can monetize that IP between mega-launches — and the market, still digesting a record-volume selloff, hasn't finished pricing that in. Buy the inflection. Define the risk. Let *Songs of the Past* and Q3 franchise disclosure do the talking.

## Round 2

You made a compelling case — I'll give you that. But your Round 1 argument has a fatal timeline error, and once you fix it, most of your "failed catalyst" thesis falls apart.

### The Aug 25 crash wasn't the earnings reaction — it was the delay trade

You keep citing **2.1 million shares on Aug 25** as proof that institutions sold the beat. They didn't. The Q2 earnings release landed around **September 3**, a full week *after* that volume record. Aug 25 was the market digesting the **Witcher 4 → 2028** timeline shock — the old narrative, not the new one. The chart you're waving as evidence of a "failed catalyst" is largely still pricing **pre-earnings disappointment**, not post-earnings rejection.

The news and sentiment reports are explicit: Warsaw shares **rallied after the Q2 release**, with coverage framing the result as reversing "exchange disappointment" over the delay. Bankier called it a **"strong impulse for the share price."** Bloomberg-sourced analysts were **unanimously positive**. That's not a failed catalyst — that's a catalyst that arrived into a stock already hammered by a separate, earlier event. Conflating the two is like shorting a stock on Monday's bad headline and ignoring Tuesday's earnings beat.

Yes, price at **227.9 PLN** still looks ugly on the chart. But you're measuring recovery speed against a stock that just absorbed a **record liquidation event** seven trading days before the beat. Repairing a gap from **248–259 PLN** doesn't happen in 48 hours on a Polish large-cap with event-driven liquidity. The bear demands instant reclaim of the **50 SMA at 241.5** as proof the thesis works; the bull asks for **sequential fundamental confirmation** — and we already have the first data point.

### "Local maximum" — you're comparing the wrong quarters

Your Q3 2025 revenue comparison (**349.1 million PLN**) is a classic apples-to-oranges trap. Q3 2025 was a release-driven spike quarter. The relevant YoY comparison is **Q2 2026 vs Q2 2025**: net income **142.9 million PLN** vs **~69 million PLN** — roughly **doubled**. Revenue grew from **216.7 million to 244.2 million PLN** (+13%). Nobody credible is modeling Q2 to beat Q3 every quarter; that's not how game studios work.

The real question you raised — is the franchise line structural or one-off? — is fair. But your own framing undercuts you: management didn't bury licensing inside "other revenue." They **separated it as a distinct business line** in the investor narrative, with analysts explicitly noting franchises are **"starting to pay well."** One quarter doesn't *prove* durability, agreed. But it also doesn't prove the opposite. What it proves is that consensus (**99.3 million PLN** net income) was **systematically wrong** about what this company earns in a supposedly barren period. That's exactly how estimate revisions begin — not with four quarters of history, but with the first quarter that breaks the old model.

And here's what the bear case quietly assumes: that forward EPS of **1.59 PLN** (implying a **~69% collapse**) is gospel. At **143x forward P/E**, the market has already priced catastrophe. The bull doesn't need 70% net margins forever. We need the trough to be **less deep than consensus fears**. A 44% beat in the trough quarter is prima facie evidence the trough is shallower than modeled. If Q3 franchise revenue holds or grows sequentially, forward estimates get revised up and that 143x compresses fast — that's multiple expansion on better denominator, not hope.

### "Franchise platform" isn't rebranding — it's segment disclosure

You say it's still just Witcher and Cyberpunk. Correct — and that's the moat, not the vulnerability. Ubisoft would kill for two globally proven AAA franchises with **92.6% gross margins** and **900,000 wishlists** on the next product. The shift isn't from "one IP" to "many IPs" overnight. It's from **binary release-cycle revenue** to **layered monetization**: base game, expansion, licensing, back-catalog, franchise attach rates. Q2 demonstrated that layering works in a quarter with no AAA launch.

On wishlists being "free" — sure, they're zero-cost clicks. But they're also the **only hard demand metric** management has publicly tied to attach-rate guidance for *Songs of the Past*. The company doesn't disclose wishlists for fun; they're signaling confidence in conversion among an installed base that already owns *Witcher 3*. This isn't Reddit hype — it's a KPI with a revenue event attached. Underwhelming conversion would hurt; 900k pre-launch interest in a catalog expansion is a legitimate leading indicator, not forum noise.

And your "analyst unanimity is a peak" argument cuts both ways. When analysts were skeptical on the delay, the stock crashed on **2.1M volume**. When they turned constructive post-beat, coverage shifted to franchise durability. You can't treat bearish price action as smart-money gospel while dismissing bullish analyst revision as a contrarian warning label. Pick one framework.

### The "cash bonfire" is how you build Witcher 4 — and they've returned capital too

Negative TTM free cash flow of **−411.7 million PLN** sounds terrifying until you decompose it. Operating cash flow ran **163–237 million PLN** in recent strong quarters. Capex of **137–181 million PLN per quarter** is game development — the actual product pipeline. Intangibles up **562 million PLN YoY** aren't accounting fiction; they're **capitalized Witcher 4, Cyberpunk sequel, and two secret projects** that the entire long thesis depends on.

You call it a bonfire. I call it the only rational use of capital for a studio whose equity value is 100% IP optionality. And it's not like management is hoarding cash while ignoring shareholders: **Q3 2025 saw 99.9 million PLN in dividends plus 22.4 million PLN in buybacks** (1.0 million shares to treasury). The board's fresh **profit distribution recommendation** post-record OCF isn't a "tease" — it's the next chapter of a company that already returns capital while investing through the cycle. At **0.46% yield** today, even a modest step-up at the AGM pulls Polish retail flows on the WSE.

**973 million PLN** in liquid reserves (cash plus short-term investments) with **debt/equity at ~1%** means they fund this pipeline from strength, not leverage. The bear case requires both "they're burning cash recklessly" and "they have no earnings power between launches." Q2 just demonstrated the second claim is wrong. The first is only scary if you think Witcher 4 and the secret projects are worthless — in which case you're not arguing cyclicality, you're arguing the entire franchise is impaired. That's a much bolder claim than the data supports.

### Your technical case proves my entry, not your exit

Let's engage your chart honestly. You're right: **MACD at −4.28**, histogram still negative, price below every major MA. I conceded that in Round 1. But you also conceded the key levels: support at **222–226 PLN**, declining volume post-capitulation (**394K on Sep 4** vs **2.1M on Aug 25**), RSI at **33.5** approaching oversold. Price at **227.9** is still **above** the Bollinger lower band (**222.05**) and the Sep 4 low (**226.0**). Your bearish continuation trigger requires a **close below 222** — that hasn't happened.

You frame the risk/reward as **~7.5% downside to 211** vs **~6% upside to 241** and call it a coin flip. But that ignores what changed fundamentally: the downside case prices a cyclical trough that **just printed 44% above consensus**. The upside case to 241 isn't a moonshot — it's merely reclaiming the **50 SMA**, which the market report itself lists as the first recovery hurdle in a trend-reversal scenario. And from 227.9, that's **~6%** to a level that was support just weeks ago, while the 52-week low at **211.3** is only **~8%** below — in a stock with **beta 0.38** that already absorbed the delay shock.

More importantly: you demand technical proof *before* fundamental inflection is priced. That's backward for a business-model shift. The market report's own trend-reversal scenario requires sustained close above **241.5** with MACD turning — nobody said the chart flips on day one. The bull case is that you **accumulate into the repair phase** while franchise revenue gets sequential validation from *Songs of the Past*, not that you wait for the 50 SMA reclaim and then chase at 250.

### Direct rebuttals to your Round 1 pre-empts

**"One beat doesn't raise the structural earnings base."** Correct — which is why the next two quarters matter, and why *Songs of the Past* is the near-term catalyst you keep minimizing. The beat raised the *floor* of what investors should expect between AAA launches. That's the entire debate.

**"Bridging to 2028 is mitigation, not a moat."** Agreed it's mitigation — and mitigation is exactly what reduces the forward earnings collapse priced into **143x forward P/E**. You don't need a moat to make money; you need the trough to be less bad than the market fears. Q2 was step one.

**"Peak margins at 44.6x TTM P/E."** The fundamentals report itself notes Bankier P/E improved from **47.4x to 33.8x** as earnings caught up to price. The stock isn't at prior highs — it's in the **lower half of its 52-week range** (**211.3–297.0**), trading below the **200-day average**. You're calling it peak-cycle pricing on trough-range price action. Which is it?

**"Beta 0.38 doesn't mean low business risk."** Never claimed it did. It means you get idiosyncratic game-studio upside without full market beta drag. The **−6% slide since Aug 25** is the delay shock, not a beta failure — and it's largely already in the price before the beat reframed the forward path.

### The bottom line

Your Round 1 case rests on three pillars: (1) the chart rejected the beat, (2) franchise revenue is unproven marketing, and (3) negative FCF means you're paying for promises. All three wobble on inspection.

The chart reflects a **pre-earnings liquidation** that the beat hasn't had time to fully reverse. Franchise revenue is **segment-disclosed, analyst-endorsed, and tied to a 900k-wishlist product catalyst weeks away**. Negative FCF funds a pipeline from a **973 million PLN liquidity position** while the company already pays dividends and buys back stock.

I'm not asking you to ignore the downtrend. I'm asking you to recognize that **227.9 PLN prices the old story** — delay despair, cyclical collapse, content desert — while **142.9 million PLN of net income** whispers the new one. Round 2 stays with the bull: **the burden of proof is shifting to the bear to explain why a 44% earnings beat, unanimous sell-side revision, and record operating cash flows deserve zero re-rating while the stock sits 8% above its 52-week low with declining post-capitulation volume.** Reclaim 241.5 confirms the repair; until then, you're paid to wait at support with a fundamentally improving floor — not catching a knife, but picking up a mispriced franchise asset the market sold for the wrong reason on the wrong day.

---

# Bear Researcher

## Round 1

I appreciate the bull's enthusiasm — a 44% earnings beat is a real number, and franchise licensing is a story worth watching. But enthusiasm is not a risk-adjusted return, and right now the market is voting with its feet: **227.9 PLN**, the lowest close in months, **~8% above the 52-week low**, and still grinding lower *after* the Q2 release and the "unanimous analyst" chorus. If this were truly the business-model inflection you describe, we wouldn't be walking the lower Bollinger Band with MACD at **−4.28** and a histogram still widening. The chart isn't lagging the narrative — it's telling you the narrative doesn't clear the bar.

### The beat is real; the re-rating is not

Yes, net profit of **142.9 million PLN** beat PAP consensus of **99.3 million PLN**. Fine. But let's not confuse a quarterly surprise with a structural reset. The fundamentals report itself flags the tension: **forward P/E ~143x** versus **TTM P/E ~45x**, with forward EPS of **1.59 PLN** implying a **~69% collapse** from trailing earnings. The market isn't "wrong" about cyclicality — it's pricing exactly what CD Projekt always is: a hit-driven studio whose peak-quarter margins are not sustainable between AAA launches.

Q2 revenue was **244.2 million PLN**. Compare that to **Q3 2025 at 349.1 million PLN** — the high bar for year-over-year comparisons from here. Without a comparable release in the pipeline until *Songs of the Past* (and even that is an expansion, not a new AAA), the beat may prove to be a **local maximum**, not a new earnings floor. The news report itself asks the right question: is the franchise line **structural or one-off timing of licensing recognition?** One quarter doesn't answer that. Bulls are extrapolating a segment disclosure into a platform re-rating before sequential proof exists.

And here's the tell: **Aug 25 saw 2.1 million shares** — a new volume record — on a crash from 259 to 242.9. That wasn't retail panic; that's institutional-scale liquidation. Sep 4 volume is **394,000**, elevated but declining, while price made **lower highs and lower lows** through the earnings window. If the beat were the "single most important re-rating catalyst in years," you'd expect at least a reclaim of the **10 EMA at 236.93** or the **50 SMA at 241.50**. Instead, price sits **9 PLN below the 10 EMA** and **13.6 PLN below the 50 SMA**. The gap from Aug 25 (**248–259 PLN**) remains unfilled. Smart money sold the delay story; it hasn't rushed back to buy the beat story. That's not a dislocation to exploit — it's a **failed catalyst**.

### "Franchise platform" is a comforting label on the same concentration risk

The bull wants to rebrand CD Projekt from "hit-driven studio" to "premium IP platform with recurring monetization." Strip the marketing: it's still **The Witcher** and **Cyberpunk** driving every meaningful revenue line. The new licensing/franchise business didn't diversify IP — it diversified *timing* of Witcher monetization. One disappointing attach rate on *Songs of the Past*, one delay on the two "secret" projects, one slip on **Witcher 4 (2028)** — and you're back to a multi-year content desert with a stock priced for disappointment.

**900,000 wishlists** sounds impressive until you remember wishlists are free. The sentiment report admits the gap: high wishlist counts don't guarantee commercial success, and gaming-community frustration over the **2028 Witcher 4** date is a **medium-confidence underlying headwind** that earnings euphoria only muted for a week. Bankier headlines saying analysts are "enamored" is exactly the language that tends to coincide with **sentiment peaks**, not durable bottoms. When everyone agrees after a beat, the asymmetry flips: upside is priced, downside from disappointment is not.

### The fortress balance sheet is funding a cash bonfire, not compounding

I'll grant the balance sheet looks strong on paper: **current ratio 6.3x**, **debt/equity ~1%**, ~**973 million PLN** in cash plus short-term investments. But look at what it's doing. **TTM free cash flow: −411.7 million PLN.** Capex ran **137–181 million PLN per quarter**. Intangibles grew **+562 million PLN year-over-year** to **1.47 billion PLN** — **43% of equity** is capitalized development spend that only pays off if multiple undisclosed projects ship on time. Management is allocating **"hundreds of millions of PLN"** to games we can't see, while headline cash collapsed to **~19–30 million PLN** (offset by the investment portfolio, yes, but still a sign of aggressive deployment).

Negative FCF during a development cycle isn't automatically fatal — but paired with a **143x forward P/E**, it means you're paying a premium for *promises*, not cash returns. The **0.46% dividend yield** won't protect you if forward estimates prove right. A board "profit distribution recommendation" is a tease until AGM numbers prove it's material at this valuation. Bulls tout record operating cash flow; bears note that OCF gets reinvested and burned, not returned, while the stock trades at **P/B 6.9x** with little tangible asset floor.

### Technical exhaustion is a hope, not a signal

The bull's best chart argument is declining volume after capitulation — selling may be exhausting near **222–226 PLN** support. I'll meet you there: support is support until it isn't. The market report assigns **higher probability to bearish continuation** on a close below **222.05** (Bollinger lower band), targeting **211–215** — essentially the 52-week low zone. RSI at **33.5** is "approaching oversold," but the same report warns: **in strong downtrends, RSI staying above 30 often precedes further weakness**, not a bounce. There is **no bullish MACD divergence** yet. The 50 SMA is still rising while price falls — a bearish lag that often resolves with more downside before any real reversal.

Your "line in the sand at ~220 PLN" is **2 PLN below current price** and **~3.5% away**. Your first recovery target at **241+** is **~6% upside** — but the bearish continuation target to **211** is **~7.5% downside**, with a failed earnings reaction suggesting the path of least resistance is still down. That's not asymmetric in your favor; it's a coin flip at best with negative momentum.

### Pre-empting the bull's rebuttals

**"The 44% beat proves consensus too pessimistic."** One beat proves consensus was wrong for *one quarter*. Forward consensus still implies a massive earnings trough. Q2 didn't raise the structural earnings base — it raised the comparison hurdle for Q3/Q4 deceleration.

**"Franchise revenue bridges the gap to 2028."** Bridging two years of investor patience with DLC, licensing, and back-catalog sales is a mitigation, not a moat. The Witcher 4 delay to **2028** remains the dominant long-cycle binary event. Partial de-risking of the "dead zone" is not de-risking of the flagship.

**"Quality compounder at a sentiment-technical dislocation."** A compounder compounds *per-share value over time*. CD Projekt compounds intangibles on the balance sheet while EPS is expected to shrink ~70%. At **44.6x TTM P/E** on what the fundamentals report calls **cyclical peak margins** (net margin **~70%**, gross **~92.6%**), you're not buying cheap quality — you're buying peak earnings at a premium, hoping the pipeline rescues forward estimates that the market already distrusts.

**"Beta 0.38 — defensive game stock."** Low beta doesn't mean low business risk; it means the stock doesn't move with the index. When game-specific catalysts fail, you get idiosyncratic drawdowns exactly like the **−6% slide since Aug 25** and the **failed rallies in January and April** that both ended in distribution on heavy volume.

### The bottom line

The bull case asks you to buy a **peak-margin cyclical** at **~45x trailing earnings**, **~143x forward**, after a record-volume selloff, while price **rejects** the post-earnings narrative and remains in a **confirmed bearish alignment** across every major moving average. The Q2 beat is a data point, not a thesis. The franchise line is a quarter old. Wishlists aren't revenue. Analyst unanimity after a beat is a warning label. Witcher 4 is still four years out.

Round 1 goes to the bear: **the risk/reward favors staying out or short until price proves otherwise** — reclaim of **241.5 PLN (50 SMA)** with MACD turning and sequential franchise revenue growth, not a single beat and a press-release rebrand. Until then, you're catching a falling knife with a 220 PLN handle and calling it "technical exhaustion." I'll pass.

## Round 2

You doubled down on the "fundamentals inflecting while price digests the old narrative" framing — the classic value-trap setup dressed as asymmetry. I respect the discipline of your bull thesis, but the tape has now had its say on earnings day, and it disagrees with you louder than Bankier headlines.

### The post-earnings "rally" was a one-day head-fake

Your Round 1 close was: buy the dislocation, line in the sand at **~220 PLN**, first target **241+**. Let's update with what actually happened when the **44% beat** hit the wire on **Sep 3**:

| Session | Open | High | Low | Close | Volume |
|---------|------|------|-----|-------|--------|
| Sep 3 (earnings) | 240.0 | 242.0 | 232.7 | **232.7** | 498,634 |
| Sep 4 | 235.5 | 235.5 | 226.0 | **227.9** | 394,117 |

The stock **gapped up** on the beat — exactly what your thesis predicted — then **sold off intraday** to close near the lows. That's not "digestion." That's the marginal buyer showing up at the open and the informed seller finishing the job by the close. The next session made a **new low at 226.0**, the weakest print since late June, **6 PLN from the Bollinger lower band at 222.05**.

Bankier's RSS line about a "wzrost kursu akcji w Warszawie" is real in the sense that someone bid it up pre-market. It is not real in the sense that **holders who bought the narrative are underwater from the Sep 3 open**. If the single most important re-rating catalyst in years can't hold a **240 PLN open** for one session, what exactly are we "leaning into"? Your asymmetry table assumed **~6% upside to 241** vs **~8% downside to 211**. After earnings, price moved **the wrong way** — and momentum indicators got worse, not better: MACD still **−4.28**, histogram still negative (**−3.16**), no bullish divergence.

This is the bear's central rebuttal to your whole Round 2 pitch: **the market had the beat, the analyst unanimity, the franchise headline, and the wishlist story — and it sold anyway.** Price discovery trumps press releases.

### "Franchise platform" still fails the sequential test

You want to call Q2 a business-model reveal. Fine — show me the model repeating. The news report itself — your own side's evidence — flags the unresolved question: is this **structural or initial recognition timing?** It explicitly says Q2 may include **one-off licensing effects** and that **Q3/Q4 sequential disclosure** is what matters for a re-rating.

Until then, you're asking investors to pay **44.6x TTM P/E** on what the fundamentals report calls **cyclical peak margins** (net **~70%**, gross **~92.6%**) while forward EPS of **1.59 PLN** still implies a **~69% earnings collapse**. One beat doesn't rewrite that curve — it makes the **Q3 2025 comparison (revenue 349.1 million PLN)** the next cliff. Your franchise bridge to 2028 is a **mitigation narrative**, not a margin reset. DLC and licensing on Witcher IP don't diversify concentration; they **monetize the same two franchises** on a different schedule. One disappointing attach rate on *Songs of the Past* — and the sentiment report admits wishlists don't guarantee conversion — snaps the thread.

### Record OCF is real; shareholder returns are not

You keep waving **record operating cash flows** and the board's profit-distribution recommendation. Let's be precise. TTM **free cash flow is −411.7 million PLN**. Capex ran **137–181 million PLN per quarter**. Intangibles are **1.47 billion PLN** — **43% of equity** — capitalized bets on undisclosed projects. Headline cash fell to **~19–30 million PLN** (offset by the investment book, yes). The dividend yield is **0.46%**. Q3 2025 returned **99.9 million PLN** in dividends plus **22.4 million PLN** in buybacks — meaningful, but at **~228 PLN** and **P/B 6.9x**, you're not getting paid to wait through a **143x forward P/E** trough that the stock is *already* pricing and still can't bounce from.

"Investing through the cycle" is accurate. So is "burning cash while forward earnings compress." Those can coexist — and they're bearish at this valuation, not bullish because the balance sheet can absorb it.

### Your technical "exhaustion" story is aging badly

Round 1's best bull chart argument was declining volume after Aug 25 capitulation (**2.1M shares**). Sep 3 earnings volume was **498,634** — not capitulation, but **not apathy either**. That's active two-way trade on the beat, and the sellers won. Sep 4 volume **394,117** remains elevated vs the **~200–300K** routine pre-crash — selling isn't finished, it's just not panicking.

The market report still assigns **higher probability to bearish continuation** on a close below **222.05**, targeting **211–215**. RSI at **33.5** still hasn't hit 30, and the same report warns that in strong downtrends, RSI staying above 30 often precedes **more** weakness. Your **~220 PLN line in the sand** is now **~2% away** with bearish alignment across **10 EMA (236.93), 50 SMA (241.50), and 200 SMA (246.43)**. Every failed rally in this lookback — January, April, August — ended in **distribution on heavy volume**. We're in the same pattern post-earnings.

### Pre-empting your Round 2 counters

**"Give it time — re-ratings take weeks."** Fair window — but the first session after the beat was a sell-the-news unwind, not accumulation. In Polish large-caps, the highest-signal day is often earnings day itself. You don't get unlimited lag when unanimous analysts and a 44% surprise already lit the fuse.

**"Forward P/E 143x means upside if estimates are wrong."** Agreed — that's the bull bet. But estimates have been wrong *upward* one quarter, and price still fell. The burden isn't on bears to explain why a cyclical game stock de-rates after peak margins; it's on bulls to explain why a historic beat produced a **lower low** within 48 hours.

**"900k wishlists + Songs of the Past is the next proof point."** It's also the next **binary event risk**. Management guided strong attach; the bar is set. Miss it and you don't just lose DLC revenue — you lose the franchise-repeatability thesis your whole Round 2 rests on.

**"Beta 0.38 — defensive."** Defensive against the index, not against idiosyncratic pipeline failure. This stock drew down on its own catalysts twice in 2026 with **>2M volume days** (May 27, Aug 25). Low beta didn't cushion that.

**"No insider selling is reassuring."** Absence of selling at **peak TTM margins** and **unanimous analyst euphoria** is a null signal, not a buy signal. Nobody's putting capital at risk but you.

### Round 2 verdict

You asked for patience at **~220 PLN** while fundamentals and narrative "reconcile" toward **241+**. Earnings was supposed to be the reconciliation event. Instead we got a **gap-and-crap** on Sep 3 and a **new low** on Sep 4. The franchise story remains one quarter old with explicit caveats about recognition timing. Valuation still embeds a massive earnings step-down. The chart still says trend-follow shorts, not counter-trend heroes.

Round 2 stays with the bear: **the beat was the test, and price failed it.** Until CDR reclaims **241.5 PLN** on volume with MACD turning and sequential franchise revenue growth in filings — not in headlines — this is a short-term bounce candidate at best and a continuation toward **211–222** at base case. I'm not paying **45x peak earnings** to find out if wishlists convert.

## Round 3

Final round, so let me cut through the noise. The bull's entire case rests on a single logical leap: that a **44% earnings beat** plus a **new franchise line** equals a **business-model inflection** worth buying at **227.9 PLN** while the chart screams distribution. I don't dispute the beat — I dispute that the market is wrong to ignore it. **The market isn't ignoring it. The market tried it, and sold it.**

### The "rally" that wasn't

The news flow describes a post-earnings share-price rally and a sentiment reversal. Fine — read the tape. Price closed **242.9 PLN on Aug 25** on **2.1 million shares** — a record liquidation day that predates the Q2 release window but captures the Witcher 4 delay shock. Since then: **lower highs** (246.7 → 235.5), **lower lows** (237.7 → 226.0), and a close at **227.9 PLN** — the **lowest since late June**, **~6% below** the capitulation close, **~8% above** the 52-week low at **211.3 PLN**. If the earnings beat were the "single most important re-rating catalyst in years," we would not be walking the **lower Bollinger Band at 222.05** with **MACD at −4.28** and a histogram still **widening negative** (−3.16). The bull calls this "technical exhaustion." The market report calls it **bearish continuation with higher probability**. I'll take the price over the press release every time.

This is the tell the bull cannot explain away: **fundamentals inflecting up while price grinds down** is not a dislocation to buy — it's a **failed catalyst**. Institutions had the beat, the analyst unanimity, and the franchise narrative in hand. They did not bid the stock back above the **10 EMA at 236.93**, let alone the **50 SMA at 241.50**. Smart money is voting that the beat is **cyclical peak recognition**, not a platform re-rating.

### "Franchise platform" — one quarter, zero sequential proof

The bull rebrands CD Projekt from hit-driven studio to "premium IP platform with recurring monetization." Strip the label: Q2 net income of **142.9 million PLN** on revenue of **244.2 million PLN** is a strong quarter — but the fundamentals report itself flags the comparison trap. **Q3 2025 revenue was 349.1 million PLN.** Without a comparable release, YoY deceleration is the base case, not the exception. The news report asks the right question — is franchise revenue **structural or one-off timing of licensing recognition?** — and answers honestly: **confirmation in Q3/Q4 will matter**. We're debating a thesis built on **one quarter of segment disclosure** while forward EPS of **1.59 PLN** still implies a **~69% collapse** from trailing earnings and the stock trades at **forward P/E ~143x**.

And let's be precise about what "franchise" means here. It did not diversify IP concentration — it diversified **when Witcher and Cyberpunk cash flows arrive**. One disappointing attach rate on *Songs of the Past*, one slip on the two "secret" projects, one further delay on **Witcher 4 (2028)** — and you're back in a multi-year content desert with **1.47 billion PLN of intangibles** (**43% of equity**) capitalized on promises the market already discounts.

**900,000 wishlists** is the bull's next catalyst. Wishlists are free. The sentiment report admits high counts don't guarantee commercial success, and gaming-community frustration over the **2028 Witcher 4** date remains a **medium-confidence underlying headwind** that earnings euphoria muted for a week, not a cycle. Bankier headlines saying analysts are "enamored" is exactly the language the news report warns coincides with **sentiment peaks**, not durable bottoms.

### The fortress balance sheet is a trap at this valuation

I'll concede the balance sheet is strong: **current ratio 6.3x**, **debt/equity ~1%**, ~**973 million PLN** in liquid reserves. But at **P/B 6.9x** and **TTM P/E ~45x** on what the fundamentals report calls **cyclical peak margins** (net margin **~70%**, gross **~92.6%**), you're not buying a bargain compounder — you're buying **peak earnings at a premium** while **TTM free cash flow is −411.7 million PLN**. Capex runs **137–181 million PLN per quarter**. Operating cash flow of **163–237 million PLN** in strong quarters gets reinvested and burned, not returned — the **0.46% dividend yield** won't cushion a de-rating if forward estimates prove right. A board "profit distribution recommendation" is optionality, not a floor, at **44.6x trailing earnings**.

The bull says negative FCF is "investing through the cycle." Correct — and the cycle you're paying for is one where the market explicitly prices an earnings trough. You're funding invisible projects at a valuation that leaves **little tangible asset support** if pipeline execution stumbles.

### Closing the bull's best remaining shots

**"Forward P/E of 143x is already in the stock — that's the opportunity."** No — that's the **risk**. When the market prices a 69% earnings collapse, it's telling you it doesn't believe current margins are sustainable. One beat doesn't overturn that; it raises the hurdle for Q3/Q4. The bull needs sequential franchise growth. We have one data point and a stock making new reaction lows.

**"Declining volume after Aug 25 means selling is exhausting."** Sep 4 volume at **394,000** is elevated versus average, not dead. The market report notes two **>2M volume days** in 2026 (May 27, Aug 25) both preceded **extended declines**. Declining volume near support in a downtrend is ambivalent until price **reclaims structure** — and we haven't. Support at **222–226 PLN** is **2–6 PLN away**. A close below **222** targets **211–215** — the 52-week low zone. Your "line in the sand at ~220 PLN" is a **3.5% stop** on a stock with **ATR 7.74 PLN** (~3.4% daily range). That's not asymmetric in your favor; it's a tight rope above a cliff.

**"Beta 0.38 — defensive game stock with optionality."** Low beta means idiosyncratic risk, not low risk. When game-specific catalysts fail, you get drawdowns like **−6% since Aug 25** and failed rallies in **January** and **April** that both ended in distribution on heavy volume. This stock doesn't diversify your portfolio risk — it concentrates it in two IPs and a 2028 binary.

**"No insider selling is reassuring."** The fundamentals report calls it **neutral at best** with **limited informational value** under Polish reporting conventions. Absence of buying at cycle highs is not a bullish signal. Nobody inside is putting skin in the game at **228 PLN**.

### The verdict

Three rounds, same conclusion. The bull asks you to pay **~45x peak earnings** and **~143x trough earnings** for a company that just proved it can print a great quarter between AAA launches — while the chart, the post-earnings price action, and the forward curve all say that quarter is **not the new normal**. The franchise line is promising; it is not yet proven. The wishlist count is encouraging; it is not revenue. The analysts are unanimous; that is historically a **warning**, not an entry signal. Witcher 4 is still four years out, and the stock sits **13.6 PLN below the 50 SMA** with no MACD divergence, no 10 EMA reclaim, and an unfilled gap from **248–259 PLN** overhead.

Round 3 — and the debate — goes to the bear. **Do not buy the narrative until the tape confirms it.** Reclaim **241.5 PLN** on volume with sequential franchise revenue growth and MACD turning, or wait for **211–215** if support breaks. Until then, the risk/reward favors staying out. The beat was real. The re-rating was not. I'll pass.

---

# Research Manager

**Recommendation**: Hold

**Rationale**: CDR.WA at 227.9 PLN sits at a genuine crossroads: Q2 2026 delivered a credible 44% earnings beat (142.9 mln PLN vs 99.3 mln consensus), a new franchise/licensing line, record operating cash flows, and unanimous sell-side praise — all of which support the bull's business-model inflection thesis. Yet the tape disagrees on the swing horizon that matters here. Price remains below every major moving average, MACD is deeply negative (−4.28), and the post-earnings session on Sep 3 was a gap-and-fade (open 240, close 232.7) followed by a new low at 226.0 on Sep 4. The market report assigns higher probability to bearish continuation below 222.05, and valuation still embeds a steep earnings step-down (forward P/E ~143x, forward EPS 1.59 PLN implying ~69% below TTM). Franchise revenue is promising but only one quarter old; sequential Q3/Q4 disclosure and *Songs of the Past* attach-rate conversion remain unproven. Neither side has a decisive edge — fundamentals improved without price confirmation, and the downtrend persists without invalidating the earnings surprise. Hold preserves optionality: the bull case needs a reclaim of 241.5 PLN; the bear case needs a break of 222 PLN.

**Strategic Actions**: For a swing position (days–weeks), do not add exposure at current levels. Existing holders: maintain the position with a hard stop on a daily close below 222.00 PLN (Bollinger lower band); a break targets 211–215 PLN (52-week low zone). New entries only on one of two triggers: (1) counter-trend — hammer or stabilization at 222–226 PLN with RSI holding ≥30 and MACD histogram narrowing for 2+ sessions, initial size only, or (2) trend-confirmation — sustained daily close above 241.50 PLN (50 SMA) with improving volume. Take-profit zone 1: 237–241 PLN (10 EMA / 50 SMA confluence, ~4–6% from entry). Take-profit zone 2: 248–255 PLN (Bollinger middle / Aug 25 gap zone, ~9–12%). Position sizing: reduce to 50–75% of normal given elevated ATR (7.74 PLN, ~3.4% of price). Watch *Songs of the Past* launch metrics and Q3 franchise revenue as the next fundamental validators; underwhelming attach-rate conversion would shift bias to Underweight.

**Horizon**: days–weeks

---

# Trader

**Action**: Hold

**Reasoning**: CDR.WA sits at 227.9 PLN in a confirmed bearish technical structure — below the 10 EMA (236.93), 50 SMA (241.50), and 200 SMA (246.43), with MACD at −4.28 and price walking the lower Bollinger Band (222.05). The Q2 2026 earnings beat (+44% vs consensus, franchise/licensing line, record OCF) and unanimous post-earnings analyst praise provide a fundamental tailwind, but the tape rejected the catalyst: Sep 3 gapped to 240.0 then closed 232.7, and Sep 4 printed a new low at 226.0. For a days-to-weeks swing, the market report's bearish-continuation bias outweighs sentiment/news optimism until structure repairs. Do not initiate new longs at market; existing holders should wait for stabilization above 222 or a reclaim of 237+ before adding. The conditional levels below define the plan if price holds the 222–226 support zone for 2+ sessions with declining volume and a narrowing MACD histogram.

**Entry Price**: 224.00 PLN — limit buy only on confirmed hold of 222–226 support (no daily close below 222 for 2 sessions); otherwise no entry

**Stop Loss**: 218.00 PLN — hard invalidation below the 220 psychological floor and Aug capitulation repair zone

**Take Profit 1**: 237.00 PLN — first scale-out at 10 EMA / initial post-earnings resistance (~50% of position)

**Take Profit 2**: 241.50 PLN — final target at 50 SMA reclaim; exit remainder or trail stop to breakeven

**Position Sizing**: 0% new equity at current levels; if conditional entry triggers, risk ≤1.0% of portfolio (≈2.7% stop distance from 224 to 218); existing holders cap at 3–5% total exposure with stop at 218 PLN

**Invalidation**: A daily close below 222.05 (Bollinger lower band) kills the bounce thesis and opens 211–215 (52-week low zone).

FINAL TRANSACTION PROPOSAL: **HOLD**

---

# Aggressive Risk

## Cycle 1

Look, I get why the trader landed on Hold instead of a full-throated Buy — the chart is ugly, no question. Price is below every moving average, MACD is at −4.28, and Sep 3 was a textbook gap-and-fade after earnings. A conservative desk would look at that and say "the market has spoken, stay away." A neutral desk would say "wait for confirmation above 241.5." I'm here to tell you both of those stances are leaving money on the table, and the trader's conditional plan at 224 is actually the *minimum* aggression this setup deserves.

The fundamental picture just underwent a regime change, and the tape's post-earnings rejection is a gift, not a verdict. Q2 net profit came in at 142.9 million PLN against 99.3 million consensus — a 44% beat, roughly double year-over-year. That's not a rounding error; that's the market being systematically wrong about near-term cash generation. Bloomberg-sourced analysts were unanimous and literally described as "enamored." Franchise and licensing revenue showed up as a *separate business line* for the first time and drove the margin expansion. Record operating cash flows on a fortress balance sheet (6.3x current ratio, essentially zero leverage) mean this isn't a distressed cyclical trading at distressed multiples — it's a quality compounder being priced like one that's about to go bankrupt on earnings.

Here's where the cautious crowd gets it backwards. They see forward P/E of 143x and scream "priced for collapse." I see the same number and ask: what if consensus forward EPS of 1.59 PLN is *wrong* because it still models CD Projekt as a hit-driven studio instead of an IP monetization platform? Q2 just proved franchise attach rates work between AAA launches. Nine hundred thousand wishlists for *Songs of the Past* aren't vanity metrics — they're a quantified demand pipeline that management expects to convert at a strong attach rate. That's a near-term revenue catalyst sitting right on top of the earnings surprise, not two years out at Witcher 4.

Now let's talk about what the conservatives will fixate on: "price rejected the catalyst." Sep 3 opened at 240, closed at 232.7. Sep 4 made a new low at 226. Fine — that's how Polish large-caps trade around earnings when the macro tape is soft and trend-followers are still short the breakdown from Aug 25. But look at the volume story the market report itself hands us: Aug 25 capitulation printed 2.1 million shares. Sep 4? 394,000 — elevated but *declining*. Selling is exhausting into the 222–226 zone exactly where RSI is at 33.5 and pressing the lower Bollinger Band at 222.05. In strong downtrends, oversold is a warning — agreed. But when you pair oversold momentum with a 44% earnings beat, unanimous analyst praise, and collapsing sell volume, you're not looking at continuation; you're looking at the setup for a violent short squeeze back toward the 10 EMA at 237.

The risk-reward on the trader's conditional entry is objectively attractive and the conservative side won't do the math because they're scared of a close below 222. Entry at 224 with a hard stop at 218 is 2.7% risk. First target at 237 is 5.8% — better than 2:1 before you even touch the 50 SMA at 241.50. Scale-out plan is disciplined. Position sizing at ≤1% portfolio risk is *too* conservative for this asymmetry, frankly, but I'll take it. What I won't accept is the "0% new equity at current levels" framing that treats 227.9 PLN the same as 250 PLN pre-crash. We're eight percent above the 52-week low, sitting on the lower band, after the best earnings print in recent memory. That's not "no edge" — that's coiled energy.

The neutral camp will say "neither side has decisive edge, preserve optionality." Optionality is a euphemism for paralysis. The research manager admits the bull case needs 241.5 reclaimed and the bear case needs 222 broken — meaning we're in a 15-PLN decision box with a fundamental catalyst that already fired bullish. Waiting for 241.5 confirmation means buying *after* a 6% move, paying up into the very resistance zone that rejected price on Sep 3. The aggressive play is to front-run that reclaim with size at support, because the earnings beat and franchise narrative give you a fundamental floor that pure technical traders don't have.

I'll preempt the valuation objection too. Yes, TTM P/E is 45x. Yes, margins at 70% are cyclically peaky. But ROE is 18–21%, beta is 0.38, and the company is pouring hundreds of millions into R&D on multiple undisclosed projects while funding it from operating cash flow, not debt. Negative TTM free cash flow? That's capex into Witcher 4, Cyberpunk sequel, and secret titles — exactly what you want a premium game studio doing. The conservative analyst treats negative FCF as a red flag; I treat it as the reason forward earnings estimates are too pessimistic.

On the swing horizon the trader and manager care about, the path is clear: *Songs of the Past* launch metrics hit in weeks, not quarters. Franchise revenue gets its Q3 sequential read. Dividend recommendation from the board could pull Polish retail flows. Any one of these extends the post-earnings narrative the sentiment report calls "one of the most positive windows in recent quarters." The bear case requires a daily close below 222 — and even then you're targeting 211–215, which is another 7% down from here versus 6–12% upside to the trader's take-profit zones. That's not a symmetric bet, and cautious positioning treats it like it is.

My bottom line: Hold is the right directional call versus chasing at market into a bearish MA stack, but it's not aggressive enough. The trader's 224 limit on confirmed 222–226 support should be treated as a high-conviction entry, not a footnote. If you're waiting for MACD to cross bullish or price to reclaim the 50 SMA before acting, you're not managing risk — you're paying a premium to feel comfortable while the 44% beat and franchise inflection get priced in without you. The market faded earnings once. It rarely fades them twice when the next catalyst is already sitting at 900k wishlists.

Take the conditional long. Tighten the stop if you must, but don't sit at zero exposure pretending you're being prudent when the data says the downside is capped near 211 and the upside back to mean reversion is 237–255. That's the trade.

## Cycle 2

The conservative analyst came out swinging in Cycle 1, and I respect the discipline — but you're reading the tape like a trend follower who forgot the catalyst calendar. Your entire case rests on "the market had the same information and sold anyway." Fine. That's exactly what happens at sentiment inflection points before the second leg reprices the narrative. Sep 3 wasn't price discovery rejecting the beat; it was a gap-and-fade into a bearish MA stack on a Polish large-cap that gaps on earnings. The market report itself flags that pattern: two prior >2M volume liquidation days in 2026 both preceded extended declines — but neither of those days came paired with a 44% earnings beat, unanimous Bloomberg analyst praise, and a franchise revenue line that appeared for the first time. You're comparing apples to capitulation events that had no fundamental offset.

You call declining Sep 4 volume "one day of less selling" and dismiss it. I'll meet you on your own data. Aug 25 printed 2.1 million shares on the breakdown. Sep 4 printed 394,000 — not just lower, but the first sub-500K session since the crash, while price held 226 as the intraday low instead of accelerating through 222. The MACD histogram ticked from −3.22 on Sep 3 to −3.16 on Sep 4. That's marginal, yes — but it's the first narrowing in a week, and the market report literally lists "MACD histogram narrowing for 2+ sessions" as the counter-trend bounce trigger. You're demanding that trigger fire before anyone acts, then calling the trade dead when selling volume collapses into the exact zone where the trigger is supposed to start. Pick a lane.

On valuation, you lean hard on Q2 revenue of 244 million versus Q3 2025's 349 million as proof the beat doesn't matter. That's a category error. The beat wasn't a revenue surprise — it was a profitability and business-mix surprise. Franchise and licensing showed up as a separate line and drove margin expansion to the point where net profit doubled YoY on lower revenue than the peak quarter. The fundamentals report is explicit: consensus forward EPS of 1.59 PLN implies a 69% step-down because the market still models CD Projekt as a pure release-cycle studio. Q2 just delivered evidence that the between-release earnings trough is shallower than anyone modeled. Getting rejected at 240 after opening on the beat doesn't invalidate that — it tells you the first wave of buyers were momentum chasers who bought the open. The second wave, the one that matters for a swing trade, buys the retest of support after the hot money exits. We're in that retest now.

The wishlist argument you flagged as the weakest link is actually the strongest near-term catalyst neither of you is pricing with enough urgency. Yes, the sentiment report warns that 900k wishlists don't guarantee commercial success. I agree — that's why you size at 1% risk, not 5%. But management isn't waving a vanity metric; they're tying it directly to attach-rate expectations on an expansion launching into an installed base of tens of millions of Witcher 3 owners. That's booked-revenue-adjacent in a way a random pre-order count isn't. The news report ranks Song of the Past attach rate as the highest-signal data point to monitor next, above analyst tone, above the dividend recommendation. You're asking me to ignore the next organic catalyst because the last one got faded once. Since when does a game studio get one shot to prove franchise monetization works?

Now the stop argument — ATR at 7.74 PLN, gaps, overnight slippage through 222. This is where your caution accidentally proves my point. Nobody is advocating a market buy at 227.9 with a mental stop. The trader's plan is a limit at 224 after two sessions of 222–226 hold, stop at 218, invalidation on a daily close below 222.05. That's not ignoring gap risk; that's defining the zone where gap risk is acceptable because you're entering at the lower Bollinger Band with 2.7% defined risk against a 5.8% first target. If you're scared of slippage through 222, you don't add at 240 on the earnings open — which is exactly what the sellers did to you. The conservative adjustment to "treat 224 as a speculative sleeve at most" is capitulation dressed as prudence. A speculative sleeve with 2:1 R/R into a sentiment tailwind the sentiment report calls "one of the most positive windows in recent quarters" is the core position, not a side bet.

The neutral analyst tried to split the baby in Cycle 1, and I appreciate the honesty — the trader's conditional plan is "closer to the right answer than either camp wants to admit." But then you undercut yourself. You agree chasing at market is wrong. You agree abandoning the 224 limit sacrifices the risk/reward. You agree ≤1% portfolio risk is appropriate, not too conservative. And then you conclude both extremes are "overconfident" and settle back into Hold at zero with a footnote. That's not moderation; that's having the map and refusing to walk the path. You wrote that waiting for 241.5 means paying 6% more to buy the same resistance that killed Sep 3 — and you're right. So why are you comfortable with the status quo that guarantees either missing the move or paying that premium? The moderate path isn't "Hold forever until something unambiguous happens." The moderate path the research manager already defined IS the aggressive entry with conservative sizing. I'm not asking for 5% portfolio risk into a bearish MA stack. I'm asking you to stop treating a triggered 224 limit like it's optional homework.

You both want "two sessions of stabilization" before acting. Fair — that's the trader's rule and I can live with it. But don't pretend that's a bearish outcome. Two sessions of hold at 222–226 with RSI staying above 30 and the histogram continuing to narrow is the setup completing in real time, not a reason to stay flat indefinitely. The conservative side wants MACD bullish cross and 241.5 reclaim before a single share changes hands. The neutral side wants the same triggers but won't say it plainly. Meanwhile the market report's counter-trend bounce scenario targets 237–241 with a stop below 220 — essentially the trader's plan — and labels it lower probability only because trend-following shorts retain the edge in the abstract. Lower probability with 2:1 reward and a fundamental floor is exactly the bet profile an aggressive desk takes when the bear case requires a daily close below 222, which hasn't happened.

On "analysts enamored" as sentiment peak risk: the news report flags that too, and I don't dismiss it. But sentiment peaks don't die quietly — they die when the next catalyst disappoints. Song of the Past hasn't launched. Q3 franchise revenue hasn't printed. The board's dividend recommendation hasn't gone to AGM. You're calling the peak before the follow-through events that determine whether the peak was justified. That's not conservative risk management; that's fighting the last war because Sep 3 hurt.

Last point on the fortress balance sheet cutting both ways. You're right that 6.3x current ratio doesn't put a floor under the stock price tomorrow. But it puts a floor under the business surviving long enough for Song of the Past, Witcher 4, and the secret projects to matter — and at 0.38 beta on a stock eight percent above its 52-week low, you're not being paid to sit out a franchise inflection because the chart is ugly for two weeks. The conservative case to 211 is 7% from here. The trader's first target at 237 is 5.8% from a 224 entry with half the risk. You don't need the bear case to be wrong to make money; you need support to hold for two sessions. The earnings beat, record operating cash flow, and 900k wishlists say it will. The chart hasn't confirmed yet — agreed — but that's what the limit order is for.

My Cycle 2 bottom line: the conservative analyst wants you to wait until the move is over and call it safety. The neutral analyst wants you to keep the plan on paper and never execute it. Both are the same trade — zero exposure while a 44% beat and a franchise narrative reprice without you. The trader got the structure right. I'm asking for conviction on the execution: when 222–226 holds for two sessions, the 224 limit isn't a speculative sleeve, it's the trade. Take it.

---

# Neutral Risk

## Cycle 1

I've read the aggressive take, and I'll address the conservative side through the same evidence the bear case and market report lay out — because both extremes are talking past each other while the trader's Hold plan is actually closer to the right answer than either camp wants to admit.

The aggressive analyst makes a compelling case that zero exposure at 227.9 PLN, sitting eight percent above the 52-week low after a 44% earnings beat, is leaving optionality on the table. They're not wrong about the math on the conditional entry: 224 with a stop at 218 is 2.7% risk against 5.8% to the first target at 237, and the fundamental backdrop did shift — franchise revenue as a separate line, record operating cash flow, unanimous analyst tone. Treating CDR like it's going bankrupt when the balance sheet has a 6.3x current ratio and essentially no leverage is an overreaction.

But here's where the aggressive side overreaches. Calling the Sep 3 gap-and-fade a "gift" and urging front-running the 50 SMA reclaim is momentum-chasing dressed up as conviction. The market report is explicit: price is below every major moving average, MACD is at −4.28 with a widening histogram, and there is no bullish divergence. Sep 3 opened at 240 on the beat and closed at 232.7. Sep 4 printed a new low at 226. That's not selling exhaustion proving a floor — that's the marginal buyer showing up at the open and the seller winning by the close. Declining volume from 2.1 million on Aug 25 to 394,000 on Sep 4 is interesting, but 394K is still elevated versus the 200–300K routine pre-crash. You don't get to call capitulation complete when price keeps making lower highs and lower lows through the earnings window.

The aggressive analyst also hand-waves the valuation tension. Yes, forward EPS of 1.59 PLN might be too pessimistic if franchise attach rates hold. But TTM P/E at 45x on 70% net margins that the fundamentals report itself calls cyclically peaky is not "coiled energy" — it's a quality company priced for a quality that the forward curve says won't last. Negative TTM free cash flow of 412 million PLN isn't automatically bullish just because it's going into Witcher 4 and secret projects. It's a reason forward estimates are low, not proof they're wrong. The aggressive camp wants you to buy the beat and the pipeline simultaneously; the conservative camp wants you to wait until the tape confirms both. The truth is you need one or the other, not neither and not both at full size.

Now the conservative side — and the bear research makes this case clearly even without a separate risk file yet. They're right that a single quarterly beat doesn't re-rate a hit-driven studio into a platform. Q2 revenue of 244 million PLN against Q3 2025's 349 million sets a brutal YoY comparison ahead. The franchise line is one quarter old; sequential Q3 disclosure is the real test, not Bankier headlines about analysts being "enamored." Wishlists are free. RSI at 33.5 approaching oversold in a confirmed downtrend is a warning, not a buy signal — the market report says so directly. A close below 222.05 opens 211–215, and that's only another 7% from here while the first meaningful recovery hurdle at 241.5 is 6% up through a zone that already rejected price once. That's not the asymmetric slam-dunk the aggressive side claims.

Where the conservative side goes too far is treating Hold at zero conditional exposure as the same as "stay out until 241.5." Waiting for a sustained reclaim of the 50 SMA means paying roughly 6% more to enter the exact same swing thesis the trader already defined — and you'd be buying into the resistance that killed the Sep 3 rally instead of the support zone where risk is actually definable. The research manager's own plan acknowledges a counter-trend path at 222–226 with RSI holding and MACD histogram narrowing for two sessions. That's not gambling; that's a structured entry with a hard invalidation at 222. The conservative instinct to demand full trend repair before any capital deploys is how you end up always buying the second leg of the move or missing the trade entirely on a stock with 0.38 beta that doesn't need a macro tailwind to bounce 10% on franchise news flow.

So where does that leave us? The trader's Hold decision is the balanced call, but I'd sharpen the framing rather than let either extreme pull it apart.

Don't initiate at market at 227.9 — the aggressive analyst and I agree the chart is ugly and chasing into a bearish MA stack is poor execution. Don't abandon the conditional 224 limit either — the conservative "wait for 241.5" alternative sacrifices the risk/reward the setup still offers if support holds. The trader's plan — zero new equity now, limit buy at 224 only after 222–226 holds for two sessions without a daily close below 222, stop at 218, scale out at 237 and 241.5 with ≤1% portfolio risk — is exactly the moderate path. It's not paralysis; it's defined optionality. You're not paying a premium to feel safe, and you're not front-running confirmation with size.

I'd push back on the aggressive suggestion that ≤1% risk is too conservative for this asymmetry. Elevated ATR at 7.74 PLN means daily swings of 3.4% are normal, and Polish large-caps gap on earnings. The manager's 50–75% of normal sizing guidance fits a stock where the bull and bear cases are separated by a 15 PLN box between 222 and 241.5. If the conditional entry triggers, 1% risk is appropriate. If it doesn't, you lost nothing — which is the point.

On catalysts, both sides cherry-pick. Songs of the Past with 900k wishlists is a real near-term validator, and a dividend recommendation could pull Polish retail flows. But attach-rate conversion is unproven, and post-earnings analyst unanimity often marks sentiment peaks rather than durable bottoms. Neither side has a decisive edge until one of two things happens: daily close below 222 (bear case to 211–215, exit the bounce thesis) or sustained stabilization with narrowing MACD histogram and a reclaim of 237+ (bull case gets technical confirmation). Until then, Hold with the conditional plan active is the most reliable posture.

My bottom line for Cycle 1: the aggressive analyst wants you to upgrade from Hold to conviction long at support. The conservative side wants you to downgrade to permanent sideline until trend repair. Both are overconfident in a genuinely ambiguous setup. The trader got the direction right — respect the downtrend, respect the earnings surprise, don't force a position. Execute the 224 limit if and only if price proves the 222–226 zone, keep the 218 stop disciplined, and let Songs of the Past and Q3 franchise revenue be the fundamental tiebreakers. That's not sitting on the sidelines pretending to be prudent, and it's not paying up for a reclaim you can define risk under now. It's the moderate path that actually matches the data.

## Cycle 2

After reading both Cycle 1 arguments again, what strikes me is how each camp is right about the other's blind spot but wrong about what that means for action. The aggressive analyst correctly calls out conservative paralysis — waiting for 241.5 is buying the second leg into resistance. The conservative analyst correctly calls out aggressive narrative-chasing — the market had the beat and sold anyway. Neither error justifies swinging to the opposite extreme. That's the whole point of this cycle.

The aggressive side keeps framing Hold at zero market exposure as "leaving money on the table." I'd push back harder here. The trader's plan isn't zero exposure forever — it's zero exposure at 227.9 with a live conditional order at 224. That's a meaningful distinction the aggressive camp keeps collapsing. You're not betting against the franchise inflection; you're refusing to pay 227.9 for it while price is walking the lower Bollinger Band in a confirmed downtrend. The 2:1 math at 224 only works if you actually get 224. Right now you're 4 PLN above the zone with one session of marginally improving MACD histogram (−3.16 vs −3.22 on Sep 3) and zero evidence of the two-session stabilization the trader and research manager both require. Calling that "coiled energy" is projecting a fill that hasn't happened.

But the conservative side's counter — that even the 224 limit is too aggressive and should be treated as a "speculative sleeve at most" — goes too far in the other direction. The research manager explicitly defined two valid entry paths: counter-trend at 222–226 with narrowing histogram, or trend-confirmation above 241.5. Downgrading the first path to "speculative sleeve" while insisting on the second is just the 241.5 entry wearing a different hat. The whole reason the counter-trend path exists is that risk is definable at 218 with 6% upside to 237 before you hit the zone that rejected Sep 3. If you only trust the trend-confirmation path, you don't need a conditional limit at all — and you accept worse risk-reward by design. The moderate view keeps both paths alive but assigns them different probabilities, not different moral categories.

Where I think both extremes miss the same nuance is on what "confirmation" actually looks like at this stage. The aggressive analyst wants you to treat declining Sep 4 volume as exhaustion proof. The conservative analyst wants two sessions of histogram narrowing plus a hold above 222. They're actually closer than they sound. The market report's counter-trend bounce scenario requires exactly that: hammer or stabilization at 222–226, RSI holding ≥30, MACD histogram narrowing for 2+ sessions. We have one marginal histogram tick and RSI at 33.5 that hasn't broken 30 yet. That's not confirmation for either camp — it's a pre-condition starting to form, which is why Hold is correct today but not necessarily correct next week.

On the stop debate, the conservative concern about ATR and gap risk through 218 is legitimate but overstated as a reason to abandon the plan entirely. Yes, ATR at 7.74 PLN means a single-session move can blow through a tight stop. Yes, Polish large-caps gap on earnings and game news. But the trader's invalidation is a daily close below 222.05, not a wick through 218 on an intraday flush. The 218 stop is the execution backstop for a limit fill at 224; the 222 close is the thesis killer. A conservative desk should respect both layers rather than pretending the only safe stop is "don't enter." If you're that worried about gap risk, the answer is ≤1% sizing and accepting that some trades slip — not permanent sideline. The aggressive side ignores gap risk entirely; the conservative side uses it to veto any entry. The balanced approach is smaller size with a hard daily-close rule, which is exactly what the trader specified.

The wishlist argument is where the debate gets most polarized and where I land firmly in the middle. Nine hundred thousand wishlists for Songs of the Past is not nothing — the sentiment report treats it as high-confidence player anticipation, and management explicitly tied it to attach-rate expectations. The conservative rebuttal that wishlists are "marketing metrics, not booked revenue" is technically true but incomplete. For a swing trade on a Polish gaming stock, narrative catalysts move price before revenue hits the P&L. The aggressive error is treating 900k wishlists as proof the bounce is coming. The conservative error is treating them as irrelevant because the chart is bearish. The moderate read: wishlists are a necessary but insufficient condition. They keep the post-earnings narrative alive through the content gap, but they don't override a daily close below 222. If Songs of the Past launches with strong attach rates, the bull case gets fundamental validation. If it underwhelms, the sentiment report itself warns of a swift narrative reversal — and you're holding a stock already walking the lower band.

On valuation, both camps keep talking past each other. The aggressive side says forward P/E of 143x means consensus is wrong because franchise revenue is structural. The conservative side says the market rejected the beat at 240, so the forward curve is right. The fundamentals report gives us the honest answer: both could be true on different horizons. Q2 franchise revenue is one quarter old. Q3 2025 revenue of 349 million PLN is a brutal YoY comp. The beat was on profit, not revenue re-acceleration. A moderate stance doesn't need to resolve whether CD Projekt is a platform or a hit-driven studio today — it needs to acknowledge that the stock prices a cyclical trough while printing cyclically peak margins, and that tension won't resolve until Q3 franchise disclosure. Until then, neither the 44% beat nor the gap-and-fade is dispositive alone.

Here's my refined adjustment to the trader's plan after engaging both Cycle 1 arguments. Keep Hold. Keep the 224 limit active but don't mentally promote it to "high-conviction" (aggressive) or demote it to "speculative sleeve" (conservative). It's a defined-risk counter-trend entry that either triggers on evidence or doesn't — same status as the 241.5 trend-confirmation path, just with better risk-reward if it fills. Add one practical discipline both extremes skipped: if the conditional entry triggers, take profit 1 at 237 on half regardless of Songs of the Past headlines. The first target is the 10 EMA in a bearish stack — that's resistance, not a launching pad. Trail the remainder toward 241.5 but don't marry the position to franchise narrative until price reclaims the 50 SMA. Existing holders: the conservative call to reduce toward 50% of normal size is right given elevated ATR; the aggressive call to treat ≤1% risk as too small is wrong for a stock in a 15 PLN decision box.

My Cycle 2 bottom line: the aggressive analyst still wants conviction before confirmation. The conservative analyst still wants confirmation so complete that the trade is over. Both are optimizing for emotional comfort, not edge. The trader's Hold with conditional 224 entry, 218 stop, 222 daily-close invalidation, and ≤1% risk is the posture that survives being wrong either way — no fill if support breaks, defined loss if it fails after fill, asymmetric payoff if the zone holds. That's not the exciting trade. It's the reliable one, and in a setup where the tape and the fundamentals disagree, reliability beats conviction.

## Cycle 3

After three rounds, both camps have said their piece and neither has moved the needle enough to break the tie. The aggressive analyst still wants you to treat the 224 limit as a high-conviction entry and complains that zero exposure is paralysis. The conservative analyst still wants you to treat that same limit as a speculative sleeve at best and insists that waiting for 241.5 is the only responsible path to new long exposure. They're both half right and both overcommitting to their half.

Here's what hasn't changed and what should settle this: the market report's bearish alignment is real. Price at 227.9 is below the 10 EMA, 50 SMA, and 200 SMA. MACD is −4.28 with a histogram still negative at −3.16 — marginally better than Sep 3 but not narrowing in any meaningful way. RSI at 33.5 is approaching oversold in a confirmed downtrend, which the market report explicitly warns is not a buy signal. The Sep 3 gap-and-fade from 240 to 232.7 and the Sep 4 low at 226 are the tape's verdict on whether a 44% earnings beat re-rates the stock on a swing horizon. It didn't. That doesn't make the beat fake; it makes timing the issue.

The aggressive side keeps calling this coiled energy at eight percent above the 52-week low. Fine — but coiled energy that hasn't coiled yet is just a stock near support in a downtrend. Declining volume from 2.1 million to 394,000 is worth noting, but one session doesn't make a base. The conservative side keeps saying the market had the same information and sold anyway. Also true — but selling into a bearish MA stack after earnings isn't the same as pricing in franchise revenue durability across multiple quarters. Both analysts are using the same Sep 3–4 price action to prove opposite conclusions. That's exactly why neither gets to override the trader's Hold.

On fundamentals, the picture is genuinely improved but not yet proven on the swing timeframe. Q2 net profit of 142.9 million PLN beat consensus by 44%. Franchise and licensing showed up as a separate line. Record operating cash flows on a 6.3x current ratio balance sheet with minimal leverage — that's real. Forward P/E at 143x and forward EPS of 1.59 PLN implying a 69% step-down from TTM is also real. The aggressive analyst asks what if consensus is wrong; the conservative analyst asks where's the follow-through after price rejected 240. Both questions are valid. Songs of the Past at 900k wishlists is a quantified near-term catalyst, but the sentiment report itself warns that wishlists don't guarantee conversion and that underwhelming attach rates could trigger a swift reversal. Unanimous analyst praise post-earnings is a tailwind and a peak-risk signal at the same time — the news report flags both.

So here's my final stance. The trader's Hold decision stands. Do not initiate at market at 227.9. Do not abandon the conditional plan. Do not upgrade it to high-conviction size because the aggressive analyst likes the risk-reward math at 224. Do not downgrade it to permanent zero exposure because the conservative analyst wants 241.5 first.

The moderate execution path is unchanged and now fully stress-tested against both extremes:

One — zero new equity at current levels. The chart hasn't earned capital deployment yet. MACD hasn't narrowed for two sessions. Price hasn't held 222–226 without a daily close below 222. Those are the trader's own criteria and the research manager's counter-trend trigger. Respect them.

Two — keep the 224 limit buy active with a hard stop at 218 and ≤1% portfolio risk if the two-session stabilization criteria are met. This is not paralysis; it's a defined bet with 2.7% risk to 5.8% on the first target at 237. The aggressive analyst is right that the asymmetry exists if support holds. The conservative analyst is right that ATR at 7.74 PLN means gaps can blow through a 218 stop overnight — which is why the real invalidation is a daily close below 222.05, not the stop alone. Use both: 218 as execution stop, 222 close as thesis kill.

Three — scale out at 237 and 241.5 as planned. Don't let the aggressive camp talk you into holding for 255 on franchise hope. Don't let the conservative camp talk you into skipping the first target because resistance might reject again. Take the 4–6% if the bounce materializes; that's what swing trades are for.

Four — existing holders cap at 3–5% total exposure with the same 218 stop and daily close below 222 as the hard exit. The conservative sizing guidance of 50–75% of normal given elevated ATR is appropriate. The aggressive push for more size on asymmetry ignores that the market report rates bearish continuation below 222 as higher probability — you don't size up into higher-probability adverse scenarios.

The tiebreakers ahead are clear and both sides agree on what they are even if they disagree on how to trade them: Songs of the Past attach-rate conversion, Q3 franchise revenue sequential disclosure, and whether price breaks 222 or reclaims 237+. A daily close below 222.05 opens 211–215 and kills the bounce thesis — exit, no debate. Sustained stabilization with narrowing MACD histogram and a move above 237 gives the bull case technical confirmation without paying 241.5 entry. A sustained reclaim of 241.5 is the trend-confirmation path the conservative prefers and the aggressive says you'll miss — and they're right that you'd pay more, but you'd also have structure on your side. That's the trade-off. You don't need to choose it now.

Final verdict: Hold with the conditional 224 entry plan armed and ready. The aggressive analyst offered conviction without confirmation. The conservative analyst offered safety without optionality. The trader's plan captures the middle — respect the downtrend, respect the earnings inflection, define risk under support if it holds, exit cleanly if it doesn't. On a days-to-weeks swing in a 15 PLN decision box between 222 and 241.5, that's the most reliable posture. Execute the plan as written. Neither upgrade nor downgrade.

---

# Conservative Risk

## Cycle 1

I hear the aggressive case loud and clear — 44% earnings beat, franchise line, 900k wishlists, declining volume into support, 2:1 risk-reward at 224. It sounds compelling until you remember what actually happened on the tape: the market had the same information and sold the stock anyway. Sep 3 opened at 240 on the beat and closed at 232.7. Sep 4 made a new low at 226. That is not a gift. That is price discovery telling you the fundamental narrative and the swing-timeframe trend are in conflict, and on a days-to-weeks horizon the trend wins until proven otherwise.

The aggressive analyst wants to front-run a reclaim of 241.5 because waiting feels like paying a premium. I want to front-run nothing. The market report is explicit: bearish continuation below 222.05 is the higher-probability scenario. Price sits below every major moving average in textbook bearish alignment. MACD is at −4.28 with a widening histogram — no bullish divergence, no histogram narrowing, no stabilization. RSI at 33.5 is not a buy signal in a strong downtrend; the market report itself warns that oversold in this context often precedes further weakness, not a violent squeeze. Calling declining Sep 4 volume "exhaustion" is hope dressed up as analysis. Aug 25 printed 2.1 million shares on the breakdown. We have had one lower-volume session since. That is not a bottoming pattern; that is one day of less selling into a stock still making lower highs and lower lows.

On valuation, the aggressive side hand-waves the forward P/E of 143x by arguing consensus is wrong. Maybe it is. But the market is pricing a ~69% earnings step-down from TTM to forward EPS of 1.59 PLN, and the stock still got rejected at 240 after the beat that was supposed to prove consensus too pessimistic. If Q2 was the proof that franchise revenue changes the earnings trajectory, where is the follow-through? We are eight percent above the 52-week low, not coiled energy — we are one bad close away from testing 211.3. TTM P/E at 45x on 70% net margins that the fundamentals report flags as cyclically peaky is not a floor; it is a ceiling if normalization arrives faster than the bull case assumes. One quarter of franchise/licensing disclosure does not rewrite a decade of hit-driven revenue volatility. Q3 2025 revenue was 349 million PLN. Q2 2026 was 244 million. The beat was on profit, not on a revenue re-acceleration that sustains the multiple.

The wishlist argument is the weakest link. Nine hundred thousand wishlists for Songs of the Past is a marketing metric, not booked revenue. The sentiment report itself says high wishlist counts do not guarantee commercial success and that underwhelming attach-rate conversion could trigger a swift narrative reversal. The news report asks the right question: is Q2 structural or one-off recognition timing? We do not know yet. Betting capital on a pre-launch KPI while the chart is in active distribution is not asymmetric risk-reward — it is paying for optionality on a catalyst that has not fired while ignoring a catalyst that already fired bearish (post-earnings gap-and-fade).

On the trader's conditional plan at 224 with a stop at 218: I do not think even that is conservative enough for a firm prioritizing capital preservation. The trader already has the right answer — Hold, zero percent new equity at 227.9, wait for either confirmed stabilization at 222–226 for two sessions or a reclaim above 241.5. The aggressive analyst calls that paralysis. I call it respecting what price is saying. A 2.7% stop from 224 to 218 sounds tight and disciplined, but ATR is 7.74 PLN — nearly 3.4% of the price. This stock gaps on earnings and game news. A hard stop at 218 does not protect you from overnight slippage through 222 if Polish retail or macro sentiment turns. The invalidation level is a daily close below 222.05, which opens 211–215. That is another 5–7% from current levels, not the 2.7% the aggressive math assumes.

The fortress balance sheet argument cuts both ways. Yes, 6.3x current ratio and minimal leverage mean the company survives a bad quarter. They do not mean the equity cannot reprice sharply lower on earnings normalization, pipeline delays, or franchise revenue that fails to repeat. Negative TTM free cash flow of 412 million PLN during heavy R&D is fine for a long-term holder who accepts multi-year development cycles. For a swing trader, it means the business is spending aggressively into a content gap that runs to Witcher 4 in 2028, with two undisclosed projects and hundreds of millions of PLN in capex and intangibles that are 43% of equity. If anything goes wrong on timing or attach rates, there is no debt cushion for the stock price — only a long wait.

What the aggressive case really asks is to bet that this earnings beat will not be faded twice. But it was faded once, hard, with unanimous analyst praise in the headlines at the same time. That is the definition of a sentiment peak risk the news and sentiment reports both flag. "Analysts enamored" is not a margin of safety; it is a crowded narrative at the moment price is walking the lower Bollinger Band. Polish large-cap liquidity can amplify moves both ways, and we have no global macro feed in this run — rate, FX, and sector flows are unobserved tail risks sitting underneath an already fragile technical picture.

My adjustment to the trader's plan: keep Hold. Do not treat the 224 limit as a high-conviction entry — treat it as a speculative sleeve at most, and only after the two-session stabilization criteria the trader and research manager both require. Existing holders should tighten discipline, not loosen it: hard stop on a daily close below 222, reduce toward 50% of normal size given elevated ATR, and do not add on Songs of the Past hype or dividend speculation until Q3 franchise revenue proves sequential durability. The aggressive path offers 6–12% upside to 237–255 against a bear case to 211 that the market report rates higher probability. That is not the kind of asymmetry a conservative desk chases — especially when the fundamental story improved and price said no.

If you want exposure to CD Projekt's franchise inflection, the conservative answer is to let the market confirm it with structure, not with headlines. Reclaim 241.5 on a sustained close with improving volume, or show me two sessions of narrowing MACD histogram and a hold above 222 with RSI not breaking 30. Until then, zero new equity is not leaving money on the table. It is the only stance consistent with protecting assets when the tape and the valuation both argue the downside is live and the upside requires paying into resistance that already rejected this exact catalyst.

## Cycle 3

We've been around this table three times now, and nothing in the data has moved enough to change my mind — which is exactly the point. The aggressive analyst keeps asking why we're sitting at zero when a 44% beat just landed, franchise revenue is real, and 900k wishlists are sitting on the launch pad. The neutral analyst splits the difference and calls the trader's conditional 224 limit "defined optionality" — not paralysis, not conviction, just a moderate bet if support holds for two sessions. I respect the neutral framing more than the aggressive one, but for a conservative mandate, even the moderate path is too much risk for too little confirmation.

Let me be direct about what three cycles of debate have not overturned: price. CDR.WA is still at 227.9 PLN, still below the 10 EMA at 236.93, the 50 SMA at 241.50, and the 200 SMA at 246.43. MACD is still −4.28 with a histogram at −3.16 that has not meaningfully narrowed — Sep 4's marginal improvement from −3.22 to −3.16 is not stabilization, it's noise inside a widening bearish momentum profile. RSI at 33.5 still has not produced the positive divergence the market report says you'd need to trust a bounce. The Sep 3 gap-and-fade — open 240, close 232.7 — and the Sep 4 new low at 226 are still the most recent price discovery events, and they happened on the exact catalyst the bull case said would re-rate the stock. Three debate cycles do not erase that. Headlines age; the chart does not.

The aggressive analyst's closing argument boils down to "the market faded earnings once, it rarely fades them twice." That is not a risk framework, that is a gambler's aphorism. The news report itself flags that unanimous post-earnings analyst praise often coincides with sentiment peaks, and the sentiment report warns that superlative language like "analysts enamored" frequently marks short-term highs. We are watching that playbook unfold in real time: spectacular Q2 numbers, unanimous sell-side tone, and price walking the lower Bollinger Band at 222.05 instead of reclaiming the 50 SMA. If the franchise inflection were being priced in, we would not be making lower highs from 246.7 to 235.5 and lower lows from 237.7 to 226.0 through the earnings window. The aggressive side wants to call declining volume "exhaustion." The market report is more honest: 394,000 shares on Sep 4 is elevated versus the 200–300K routine, not capitulation. One quieter session after a 2.1 million share liquidation does not constitute a bottom.

On the neutral compromise — the 224 limit with a 218 stop and ≤1% portfolio risk — I will concede this is a professionally structured trade for a desk whose mandate allows counter-trend entries with hard invalidation. It is not a conservative trade. ATR is 7.74 PLN, nearly 3.4% of the price. The trader's 2.7% stop distance from 224 to 218 sits inside one average daily range. Polish large-caps gap on earnings and game news; a hard stop at 218 does not protect against slippage through 222 on an overnight move, which is precisely the invalidation level the market report assigns higher probability. The bear case to 211–215 is not a tail scenario — it is the market report's higher-probability outcome on a close below 222.05. Risking even 1% of portfolio capital into a setup where the defined stop is narrower than ATR and the structural stop is 5–7% lower is not capital preservation. It is accepting gap risk while telling yourself the spreadsheet says 2.7%.

The fundamental case has not gotten safer through debate either. Forward P/E at 143x still prices a ~69% earnings step-down to 1.59 PLN forward EPS. Q2 beat consensus at 142.9 million PLN net income, but revenue was 244 million PLN against Q3 2025's 349 million — the YoY comparison in the next quarter is brutal, and the beat was on profitability and franchise recognition, not on revenue re-acceleration that sustains a 45x TTM multiple on 70% net margins the fundamentals report explicitly calls cyclically peaky. Franchise licensing as a separate line is one quarter old. The news report's central question — structural shift or one-off recognition timing — remains unanswered. Nine hundred thousand wishlists for Songs of the Past are a marketing KPI until attach-rate conversion proves otherwise, and the sentiment report is clear that underwhelming conversion could trigger a swift narrative reversal. Negative TTM free cash flow of 412 million PLN is manageable for a fortress balance sheet on a five-year horizon; on a days-to-weeks swing it means the company is spending aggressively into a content gap that runs to Witcher 4 in 2028 with 43% of equity in intangibles and no debt cushion for the equity price if timelines slip.

The neutral analyst says both extremes are overconfident in a genuinely ambiguous setup. I agree it is ambiguous — which is precisely why the conservative answer is not to deploy capital into the ambiguity. Ambiguity is not an argument for a conditional long at support; it is an argument for waiting until the ambiguity resolves in price. The research manager and trader already defined the resolution levels: daily close below 222 kills the bounce thesis toward 211–215, sustained reclaim above 241.50 confirms trend repair. We are between those levels with bearish indicator alignment and a post-earnings rejection of the bullish catalyst. In that configuration, zero new equity is not overconfidence. It is the only posture that does not require guessing which side of a 15 PLN box breaks first while paying 45x peak-cycle earnings for the privilege.

**Final stance.** Hold. Zero percent new equity at 227.9 PLN. Do not activate the 224 conditional entry on a conservative book — that plan is the trader's moderate compromise, not ours. If the firm must have gaming exposure, size it elsewhere or wait for one of two confirmations the research manager already specified: sustained daily close above 241.50 with improving volume, or — at minimum — two sessions of genuine stabilization at 222–226 with MACD histogram narrowing, RSI holding above 30 without breaking, and no daily close below 222. Even then, conservative sizing is half the trader's 1% risk cap, stops are on daily close not intraday levels, and take-profit discipline at 237 is mandatory because the 50 SMA at 241.50 already rejected this exact earnings catalyst once.

Existing holders: tighten, do not add. Hard exit on daily close below 222.05. Reduce toward 50% of normal position given elevated ATR and active distribution. Do not add on Songs of the Past hype, dividend speculation, or analyst unanimity until Q3 franchise revenue proves sequential durability — one beat quarter does not rewrite a decade of hit-driven volatility.

The aggressive path offers 6–12% upside to 237–255 against a bear case the market report rates higher probability below 222. The neutral path offers a structured gamble at support. The conservative path offers something neither side values enough: preserved capital, no gap risk, and a clear re-entry when price confirms what headlines have not. After three cycles, the evidence has not improved — only the storytelling has. For a firm whose job is to protect assets and grow them steadily, the final answer is unchanged. Stay out until the market proves the franchise thesis in structure, not in sentiment. That is not missing the trade. That is being the only desk still standing when the 222 level fails and the crowd that called declining volume "exhaustion" is scrambling for an exit.

## Cycle 2

The neutral analyst wants credit for splitting the difference, and I understand the appeal — the trader's Hold with a conditional 224 limit sounds disciplined, and calling both extremes overconfident feels wise. But moderation is not the same as safety when the underlying setup is still structurally bearish. The neutral camp agrees the chart is ugly, agrees declining volume alone doesn't prove a bottom, agrees unanimous analyst praise can mark a sentiment peak — and then still wants to keep a live limit order in the 222–226 zone as if that's a free option. It isn't. A conditional entry that triggers is a real position in a stock making lower highs through an earnings beat. The market report rates bearish continuation below 222 as higher probability. The neutral framing of "defined optionality" understates what happens when your definition of risk is 2.7% to a hard stop while ATR is 7.74 PLN and the actual bear-case path to 211 is 7% away through a level the tape has not yet defended for even one full session.

Let me be direct about what the aggressive analyst keeps getting wrong, because they doubled down on the same three mistakes. First, calling Sep 3 a "gift." A stock that gaps to 240 on a 44% beat and closes at 232.7 is not offering you a discount — it is telling you the marginal buyer at the open was wrong by the close. Sep 4 made a new low at 226. The sentiment report itself says the share price "moved higher" post-earnings, but the market data we actually have shows price walking the lower Bollinger Band at 227.9, nine PLN below the 10 EMA, with MACD histogram still negative at −3.16 and only a marginal improvement from −3.22. That is not coiled energy. That is a downtrend with slightly less selling on one session. The aggressive side pairs "declining volume" with "violent short squeeze" — pick one. Exhaustion requires price stabilization, not just lower volume into new lows.

Second, the franchise regime-change argument. I don't dispute Q2 was a good quarter. I dispute that one quarter of separated franchise disclosure rewires the risk profile of a hit-driven studio trading at 45x TTM earnings on 70% margins the fundamentals report explicitly labels cyclically peaky. Q3 2025 revenue was 349 million PLN. Q2 2026 was 244 million. The beat was on profit, not on revenue re-acceleration that sustains the multiple. Forward P/E of 143x is not screaming "consensus is wrong" to a conservative desk — it is screaming the market already prices a 69% earnings step-down, and the equity still could not hold a 240 open on the print that was supposed to prove consensus too pessimistic. The aggressive analyst asks what if forward EPS of 1.59 PLN is wrong. Fine. What if it isn't? What if Q2 included favorable recognition timing on licensing that doesn't repeat sequentially? The news report itself flags that exact question — structural shift versus one-off recognition — and says Q3/Q4 confirmation matters. We don't have it. Betting size at support before that confirmation is not asymmetric risk-reward; it is paying for a narrative that price has already rejected once.

Third, the wishlist math. Nine hundred thousand wishlists for Songs of the Past is the most overfit bullish data point in this entire debate. The sentiment report is careful here: wishlists are a quantitative proxy for anticipation, not booked revenue. High wishlist counts do not guarantee commercial success. Underwhelming attach-rate conversion could trigger a swift narrative reversal — that's their language, not mine. The aggressive analyst treats 900k wishlists as a near-term revenue pipeline sitting on top of the earnings surprise. I treat it as a pre-launch marketing KPI in a stock where the last catalyst already failed to produce follow-through. You don't get to count the wishlist catalyst and ignore that the earnings catalyst just printed a gap-and-fade. If anything, it raises the bar: the next positive headline has to overcome a tape that said no to the last one.

Now the neutral analyst's sharpest point — and the one I need to dismantle — is that waiting for 241.5 means paying 6% more to buy the same resistance that killed Sep 3. They're right about the execution math. They're wrong about what that implies for capital preservation. The conservative alternative isn't "wait for 241.5 or never trade." It's wait for evidence that the bear case is wrong before committing capital. The trader's own invalidation is a daily close below 222.05, which opens 211–215. We are 5.9 PLN above the Bollinger lower band with RSI at 33.5 trending toward 30, no bullish MACD divergence, and a textbook bearish MA stack. The neutral path says put a limit at 224 after two sessions of stabilization. I say: show me the stabilization first, then we can talk. Two sessions holding 222–226 without a close below 222 sounds reasonable until you realize we haven't even had one session that held the zone cleanly — Sep 4's low was 226, not a successful defense of 222. The "moderate" entry is a counter-trend bet in a setup the market report explicitly labels lower probability, sized at up to 1% portfolio risk into a stock that gaps on Polish earnings and game news. That is not moderate for a conservative mandate. That is the aggressive sleeve wearing a neutral label.

The aggressive analyst also attacks ≤1% portfolio risk as too conservative for the asymmetry. From where I sit, 1% is already generous given the gap risk. A hard stop at 218 is 2.7% from a 224 entry, but ATR is 3.4% of price and the market report recommends 1× ATR (~8 PLN) for a tight stop — which would put you near 216, not 218. Overnight slippage through 222 on a Polish large-cap headline doesn't respect your stop order. The fortress balance sheet protects the company, not your mark-to-market. Negative TTM free cash flow of 412 million PLN during heavy R&D into Witcher 4 (2028), two secret projects, and intangibles at 43% of equity means you're holding equity in a business spending aggressively through a content gap with limited near-term revenue visibility. The balance sheet survives a bad quarter. Your position doesn't have to.

I also want to push back on the neutral claim that both extremes are "overconfident in a genuinely ambiguous setup." Ambiguity is not symmetry. When price is below every major moving average, MACD is deeply negative with a widening histogram, the post-earnings rally failed, and the market report assigns higher probability to bearish continuation, the burden of proof is on the bulls — not equally distributed. The fundamentals improved; the tape disagreed. In a days-to-weeks swing horizon, which is what the trader and research manager are trading, the tape leads until it doesn't. Zero new equity isn't overconfidence in the bear case. It's acknowledgment that the bull case hasn't earned capital yet.

What would change my mind? Not analyst headlines — Bloomberg unanimity after a large beat is exactly what the news and sentiment reports flag as peak-risk. I'd want a daily close back above 237 with improving volume and a narrowing MACD histogram for two sessions, or a sustained reclaim of 241.5 that holds through a retest. I'd want Q3 franchise revenue showing sequential durability, not just Bankier superlatives. I'd want Songs of the Past attach rates that convert wishlists into recognized revenue without a sentiment reversal on pricing or reviews. Until then, the conservative adjustment to the trader's plan is stricter than Cycle 1, not looser: Hold is correct, the conditional 224 limit should be treated as off the table for a preservation-first mandate, and existing holders should use the 222 daily-close stop the research manager already recommends, at 50% of normal size given elevated ATR, with no adds on franchise hype or dividend speculation.

The aggressive analyst closes with "the market faded earnings once, it rarely fades them twice." That is anecdote, not evidence, and it ignores that the first fade happened with the best possible fundamental setup — a 44% beat, record cash flows, unanimous praise. If that didn't hold, what exactly is the second catalyst that commands more respect from the tape? Wishlists? A dividend recommendation that hasn't been sized? The neutral analyst says let Songs of the Past and Q3 franchise revenue be the tiebreakers. I agree — which is why we should wait for them before sizing, not after entering at support and hoping they bail us out. Protecting assets means accepting that missing the first 6% of a reversal is cheaper than catching the next 7% down to 211 because we mistook one lower-volume session near the lower band for a bottom. The trader got the direction right. The neutral compromise is still too much risk. Hold, zero new equity, tighten discipline on what you already own — that's the only posture consistent with the data when the trend, the valuation, and the post-earnings price action all say the same thing: not yet.

