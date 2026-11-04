# Market Analyst

# Market Analysis: CDR.WA (CD Projekt S.A.)

**Analysis date:** 2026-09-04  
**Ticker:** CDR.WA (Warsaw Stock Exchange)  
**Lookback:** 2025-09-04 to 2026-09-04 (251 trading sessions)  
**Last close:** 227.7 PLN (−2.2% on the session; intraday range 226.0–235.5)

---

## Executive Summary

CDR.WA is in a **confirmed multi-timeframe downtrend** following a high-volume capitulation event on 2026-08-25 (close 242.9 on 2.1M shares, roughly 6× average volume). Price has fallen a further ~6% since that gap-down and now trades **below all major moving averages**, with bearish MACD momentum accelerating and RSI approaching—but not yet reaching—oversold extremes. The stock sits **just above the Bollinger lower band** (~222 PLN), a zone that has historically attracted short-covering bounces but not sustained reversals without a volume-backed reclaim of the 50 SMA (~241.5 PLN).

The actionable framework for the next 2–4 weeks: treat rallies toward 236–242 PLN (10 EMA / 50 SMA cluster) as **sell-the-bounce** zones unless accompanied by declining ATR and a MACD histogram inflection toward zero. Downside risk is bounded near 222 PLN (lower Bollinger) with a break opening 215–217 PLN (June 2026 swing lows). Risk management should use ATR-based stops (~7.7 PLN per share).

---

## Selected Indicators (8)

The following eight indicators were chosen for this **post-capitulation bearish regime with elevated volatility**. They span trend (three horizons), momentum, mean-reversion, volatility/risk, and volume confirmation—without redundant overlap.

| # | Indicator | Category | Why Selected for Current Context |
|---|-----------|----------|----------------------------------|
| 1 | **close_200_sma** | Long-term trend | Defines strategic regime; price 7.6% below confirms structural weakness |
| 2 | **close_50_sma** | Medium-term trend | Key dynamic resistance after Aug breakdown; reclaim needed for trend repair |
| 3 | **close_10_ema** | Short-term momentum | Fastest trend filter; currently sloping down sharply, flags failed bounce attempts |
| 4 | **macdh** (Histogram) | Momentum | Visualizes accelerating bearish momentum without duplicating signal-line crossover noise |
| 5 | **rsi** | Momentum / mean-reversion | Tracks oversold proximity; divergence watch as price makes new lows |
| 6 | **boll_lb** | Volatility / support | Nearest statistical support floor; price proximity signals potential bounce or breakdown |
| 7 | **atr** | Volatility / risk | Elevated at 7.74 PLN; essential for stop placement and position sizing in a whipsaw environment |
| 8 | **vwma** | Volume-weighted trend | Confirms whether price moves are supported by institutional flow; currently bearish |

*Excluded for redundancy:* `macds` (signal line) is derivable from `macd` and `macdh`; `boll` middle and `boll_ub` are less actionable when price is hugging the lower band; raw `macd` line duplicates histogram directionality in this setup.

---

## Price Action & Structural Context

### Year-long narrative

CDR.WA spent the first half of the lookback in a **250–280 PLN consolidation**, punctuated by two major upside spikes:

1. **January 2026 rally** — Price surged from ~240 to 294 PLN (Jan 15–29) on record volume (831K shares on Jan 30 reversal day), then collapsed.
2. **April 2026 rally** — Recovery from 234 to 293 PLN (Apr 14–22), followed by gradual erosion.

The **May 27, 2026 event** (close 233.0 from 257.5 open, 2.0M volume) marked a regime change: a gap that broke the 200-session support shelf near 245 PLN. Price bottomed at **211.3 PLN** on Jun 26 before a **July–August recovery** to 268 PLN (Aug 12).

### Recent breakdown (Aug 18 – Sep 4)

The recovery stalled in mid-August. Key sequence:

| Date | Close | Volume | Event |
|------|-------|--------|-------|
| 2026-08-12 | 266.4 | 372K | Local high; RSI hit 71.2 (overbought) |
| 2026-08-25 | 242.9 | **2.11M** | Capitulation gap-down (−5.6% from prior close) |
| 2026-08-27 | 234.0 | 574K | Follow-through selling |
| 2026-09-03 | 232.7 | 499K | Failed intraday recovery (high 242, close 232.7) |
| 2026-09-04 | **227.7** | 380K | New local low; weak close near session low |

The Aug 25 volume spike is the **defining event** of the current leg. Comparable spikes (May 27: 2.0M; Mar 20: 1.26M) all preceded extended declines or prolonged basing. Current price (227.7) is **6.3% below** the Aug 25 close, indicating the market has not yet absorbed the supply overhang.

---

## Indicator-by-Indicator Analysis

### 1. close_200_sma — Long-Term Trend Benchmark

| Metric | Value (2026-09-04) | Prior (2026-08-05) |
|--------|-------------------|-------------------|
| 200 SMA | **246.43** | 246.82 |
| Price vs SMA | **−7.6%** below | +1.0% above (Aug 5 close 248.5) |

The 200 SMA has been **flat to slightly declining** (246.82 → 246.43 over 30 sessions), reflecting a transition from neutral to mildly bearish long-term bias. Price crossed below the 200 SMA during the May collapse and has **not reclaimed it** despite the July–August rally (which peaked ~22 PLN above it).

**Implication:** Strategic bias remains **cautious to bearish**. Any rally toward 246–248 PLN would test the 200 SMA as major resistance. A sustained close above 250 PLN would be required to neutralize the long-term damage.

### 2. close_50_sma — Medium-Term Trend & Dynamic Resistance

| Metric | Value (2026-09-04) | 30-day change |
|--------|-------------------|---------------|
| 50 SMA | **241.50** | +10.17 (+4.4%) |
| Price vs SMA | **−5.7%** below | Was +3.0% above on Aug 5 |

The 50 SMA is **still rising** (231.33 on Aug 5 → 241.50 now) because it incorporates the July–August rally. This creates a **widening negative spread** between price and the medium-term average—a classic "price below rising MA" configuration that often precedes the MA rolling over.

**Implication:** The 50 SMA at ~241.5 PLN is the **first meaningful resistance** on any bounce. Traders should watch for rejection at 240–242 PLN. A daily close above 245 PLN with volume below 400K would signal initial repair.

### 3. close_10_ema — Short-Term Momentum

| Metric | Value (2026-09-04) | Peak (Aug 24) |
|--------|-------------------|---------------|
| 10 EMA | **236.89** | 257.30 |
| Price vs EMA | **−3.9%** below | +0.1% (in-line) |

The 10 EMA has **collapsed from 257.3 to 236.9** in 11 sessions (−7.9%), one of the steepest declines in the lookback. Price has remained below the 10 EMA since Aug 26 without a single reclaim attempt holding.

**Implication:** Short-term trend is **strongly bearish**. Intraday longs are counter-trend until price reclaims and holds above 237 PLN for 2+ sessions.

### 4. macdh — MACD Histogram (Momentum Acceleration)

| Date | MACD | Signal | Histogram |
|------|------|--------|-----------|
| 2026-08-24 | +5.29 | +6.12 | −0.83 (bearish cross imminent) |
| 2026-08-25 | +3.80 | +5.66 | −1.86 |
| 2026-08-28 | −0.47 | +3.18 | −3.65 |
| 2026-09-04 | **−4.30** | **−1.13** | **−3.17** |

The histogram turned negative on Aug 24–25 (coinciding with the volume capitulation) and has remained **deeply negative** for 10 sessions. The histogram value improved marginally on Sep 4 (−3.17 vs −3.22 on Sep 3) but remains far from a bullish inflection.

**Implication:** Bearish momentum is **entrenched but not accelerating** on the latest bar—a marginal stabilization signal. Watch for histogram bars shrinking toward zero over 3–5 sessions as an early bounce warning. A bullish signal requires histogram crossing above zero, which at current MACD trajectory likely needs price above ~240 PLN.

### 5. rsi — Relative Strength Index

| Metric | Value (2026-09-04) | Range (30d) |
|--------|-------------------|-------------|
| RSI (14) | **33.39** | 33.4 – 71.2 |

RSI has declined from 71.2 (Aug 12 overbought) to 33.4, entering the **lower third** of the range but **not yet below 30** (classic oversold). Notably, RSI made a lower low (33.4 on Sep 4 vs 35.1 on Sep 2) while price also made lower lows—**no bullish divergence** yet.

**Implication:** Momentum is weak but the market has not reached capitulation-level oversold readings seen in prior bottoms (e.g., Nov 2025 lows often saw RSI in the high 20s). This suggests **room for further downside** before a statistically reliable mean-reversion bounce. If price reaches 222 PLN with RSI holding above 30, a positive divergence setup may form.

### 6. boll_lb — Bollinger Lower Band (Statistical Support)

| Band | Value (2026-09-04) | Price position |
|------|-------------------|----------------|
| Lower | **222.00** | +2.6% above |
| Middle | 248.20 | −8.3% below |
| Upper | 274.40 | −17.0% below |

Price is **walking the lower band** — a pattern consistent with strong downtrends where bounces are shallow. The lower band has descended from 245.5 (Aug 25) to 222.0, reflecting expanding volatility to the downside. Band width (upper − lower) is ~52 PLN, the widest in the 30-day window.

**Implication:** **222 PLN is the immediate statistical floor.** A close below 222 on volume >500K would signal a volatility expansion breakdown targeting ~215 PLN (prior June low zone). A bounce from 222–225 that holds for 2 sessions would be a tactical long setup with stop below 218.

### 7. atr — Average True Range (Risk Management)

| Metric | Value (2026-09-04) | 30-day avg |
|--------|-------------------|------------|
| ATR (14) | **7.74 PLN** | ~7.8 PLN |
| ATR % of price | **3.4%** | Elevated |

ATR spiked to 8.53 on Aug 25 (capitulation day) and has remained elevated (7.4–8.5 range) versus the 6.97 baseline on Aug 5. This confirms the market is pricing **higher daily uncertainty**.

**Actionable risk levels (ATR multiples from 227.7 close):**

| Level | Calculation | Use |
|-------|-------------|-----|
| Tight stop (long) | 227.7 − 1.0 × ATR = **220.0** | Scalp bounce only |
| Standard stop (long) | 227.7 − 1.5 × ATR = **216.1** | Swing long from support |
| Stop (short) | 227.7 + 1.5 × ATR = **239.3** | Cover on squeeze |
| Position size guide | Risk 1% of capital ÷ 7.74 PLN | Shares per 1% portfolio risk |

### 8. vwma — Volume-Weighted Moving Average

| Metric | Value (2026-09-04) | Aug 24 peak |
|--------|-------------------|-------------|
| VWMA (20) | **241.03** | 258.46 |
| Price vs VWMA | **−5.5%** below | −0.6% (near parity) |

VWMA has fallen from 258.5 to 241.0, tracking the 50 SMA closely. Price trading below VWMA confirms that **recent volume has been dominated by selling** — the Aug 25 spike (2.1M shares at ~248 average) heavily weights the average downward.

**Implication:** Institutional flow bias is **distribution**. A reclaim of VWMA (~241 PLN) on **below-average volume** (<250K) would be a weak signal; reclaim on expanding volume (>400K) would carry more weight.

---

## Key Levels & Scenarios

### Support

| Level | Basis | Confidence |
|-------|-------|------------|
| **222.0** | Bollinger lower band | High (immediate) |
| **217.4** | June 26, 2026 swing low | High (structural) |
| **211.3** | Year low (Jun 26 intraday) | Medium (if breakdown accelerates) |

### Resistance

| Level | Basis | Confidence |
|-------|-------|------------|
| **236.9** | 10 EMA | High (first hurdle) |
| **241.5** | 50 SMA + VWMA cluster | Very high |
| **246.4** | 200 SMA | Very high (major) |
| **248.2** | Bollinger middle | High (trend repair threshold) |

### Scenario Matrix

**Bearish continuation (base case, ~55% probability):** Price tests 222 PLN within 5 sessions. Failure breaks toward 217 PLN. Rallies capped at 237–242 PLN. MACD histogram remains negative.

**Oversold bounce (tactical, ~30% probability):** RSI touches 28–30 at 222–225 PLN support. 3–5 day relief rally to 240–245 PLN (50 SMA). Volume on bounce <400K suggests short-covering, not accumulation.

**Trend reversal (low probability, ~15%):** Requires daily close above 248 PLN (Bollinger middle) with MACD histogram crossing zero and RSI above 50. Would need a fundamental catalyst (earnings, product news) not visible in price data alone.

---

## Actionable Trading Insights

1. **Do not catch the falling knife without confirmation.** All three moving averages are aligned bearishly (price < 10 EMA < 50 SMA < 200 SMA on a spread basis). Wait for either (a) a hold at 222 PLN with RSI divergence, or (b) a reclaim of 237 PLN.

2. **Use ATR for every trade.** At 7.74 PLN daily range, a 2% stop (4.55 PLN) is inside normal noise. Minimum stop for swing trades: 1.5 × ATR = 11.6 PLN from entry.

3. **Sell rallies into 240–242 PLN** unless volume profile shifts. The 50 SMA/VWMA confluence at ~241 PLN is the highest-probability short zone in the current regime.

4. **Watch Aug 25 volume node (~248 PLN)** as a "volume shelf." Price gapped through this level; it will act as stiff resistance on any recovery attempt.

5. **Monitor RSI for divergence at 222 PLN.** If price makes a marginal new low but RSI holds above 32, a 5–8% bounce is historically consistent with CDR.WA's post-capitulation behavior (cf. Nov 27, 2025 bounce after 766K volume spike).

6. **Reduce position size in this environment.** ATR at 3.4% of price is ~1.5× the calm-period baseline (~2.2% in early August). Halve normal position size or widen stops proportionally.

---

## Summary Table

| Dimension | Assessment | Key Evidence | Action Bias |
|-----------|------------|--------------|-------------|
| **Long-term trend** | Bearish | Price −7.6% below 200 SMA (246.4) | Avoid strategic longs |
| **Medium-term trend** | Bearish | Price −5.7% below 50 SMA (241.5); MA still rising but spread widening | Sell rallies to 240–242 |
| **Short-term momentum** | Strongly bearish | 10 EMA at 236.9, sloping down −7.9% in 11 days | No longs until >237 reclaim |
| **MACD momentum** | Bearish, stabilizing | Histogram −3.17; MACD −4.30 below signal −1.13 | Wait for histogram inflection |
| **RSI** | Weak, not oversold | 33.4; no bullish divergence yet | Room for further decline |
| **Bollinger position** | Lower band walk | Price 227.7 vs lower band 222.0 (+2.6%) | Support test imminent |
| **Volatility (ATR)** | Elevated | 7.74 PLN (3.4% of price) | Widen stops; reduce size |
| **Volume trend** | Distribution | Price below VWMA (241.0); Aug 25 spike 2.1M | Bearish flow confirmation |
| **Nearest support** | 222.0 PLN | Bollinger lower band | Watch for hold/break |
| **Nearest resistance** | 236.9–241.5 PLN | 10 EMA / 50 SMA–VWMA cluster | Fade rallies into zone |
| **Risk/reward (swing long from 223)** | ~1.5:1 to 50 SMA | Target 241, stop 216 (1.5×ATR) | Marginal; tactical only |
| **Overall bias** | **Bearish** | Multi-timeframe alignment + volume capitulation | Defensive; bounce trades only with tight risk |

---

# Sentiment Analyst

# Sentiment Analysis: CD PROJEKT RED (CDR.WA)

**Ticker:** CDR.WA  
**Company:** CD PROJEKT RED Spółka Akcyjna  
**Analysis window:** 2026-08-28 to 2026-09-04  
**Report date:** 2026-09-04  

---

## Executive Summary

Public sentiment around CD Projekt RED over the past week has **shifted decisively positive** following the release of Q2 2026 financial results. The dominant narrative in Polish financial media is an **earnings-driven re-rating**: net profit beat consensus by 44%, franchise/licensing revenue is emerging as a meaningful profit engine, and analysts surveyed by Bloomberg uniformly describe the report as a **strong catalyst for the share price**. This positive fundamental tone has reportedly **reversed prior market disappointment** tied to the Witcher 4 launch window (2028), with Bankier coverage noting a **rise in Warsaw share price** after the results.

Product-level sentiment remains constructive: **"Wiedźmin 3: Pieśni przeszłości"** has accumulated **900,000 wishlist sign-ups** across platforms, and management commentary frames strong attach-rate expectations for the expansion. Pipeline coverage highlights **two undisclosed projects** and **hundreds of millions of PLN** allocated to new games, sustaining long-term franchise enthusiasm among gaming audiences.

No dedicated social-media feed or global macro news was available in the data bundle (`global_news.txt` skipped by config). This report infers public sentiment, narrative tone, and implied community reaction from Bankier company coverage, the Polish market news bundle, and sparse PAP regulatory filings.

**Bottom line for traders:** Sentiment has pivoted from duration-anxiety (Witcher 4 gap) to **near-term fundamental validation**. The market appears to be rewarding franchise monetization and cash-flow strength. Risk: positive sentiment may be **event-driven and front-loaded** around the earnings beat; sustainability depends on follow-through from DLC sales and continued franchise-line growth.

---

## Data Sources & Methodology

| Source | Coverage | Role in this report |
|--------|----------|---------------------|
| `bankier_company.txt` | 5 Bankier /komunikaty headlines | Primary company-specific sentiment proxy |
| `news.txt` | Bankier feed + Bankier RSS (dated 2026-09-03) + PAP MediaRoom hits | Earnings narrative, analyst tone, regulatory filings |
| `global_news.txt` | Skipped by config | No macro sentiment overlay |
| Social media | Not in v1 bundle | Tone inferred from gaming/product press framing and implied community metrics (wishlists) |

Bankier list pages do not expose exact publication dates in the fetch output. Day-by-day sentiment is reconstructed from the dated RSS item (2026-09-03), headline sequencing, and thematic clustering.

---

## Narrative Tone: What People Are Saying

### 1. Earnings surprise — investor/analyst channel (strongly positive)

The week's defining story is Q2 2026 results that **materially exceeded expectations**:

- **Net profit of 142.9 mln PLN** vs **PAP consensus of 99.3 mln PLN** — a **+44% beat**.
- Bankier RSS (2026-09-03) characterizes the quarter as a **"spectacular profitability improvement"**, with Q2 net profit **roughly doubling year-over-year**.
- The primary driver cited is the **separation and rapid growth of a new franchise/licensing business line** — a narrative shift from "single-hit studio" risk toward **recurring franchise economics**.
- **Record cash flows** are highlighted alongside the earnings beat, reinforcing balance-sheet strength and investment capacity.
- Analysts polled by **Bloomberg** are described as **unanimously positive**, with the report framed as a **"strong impulse for the CD Projekt RED share price"** (mocny impuls dla kursu).

Headline language is emphatic: analysts are **"oczarowani"** (charmed/enchanted) by results, and franczyzy (franchises) are **"zaczynają nieźle płacić"** (starting to pay off nicely). This is unambiguously bullish financial press tone — not hedged or mixed.

**Inferred investor sentiment:** Relief and re-engagement. Prior disappointment over Witcher 4 timing appears **superseded** in the media narrative by tangible near-term earnings power. Polish retail and institutional audiences likely shifted from "dead money until 2028" framing toward "franchise cash engine" framing.

### 2. Witcher 4 timing — residual but fading negative (mixed, improving)

The Witcher 4 **2028 launch window** remains a structural concern, but its **sentiment weight has diminished** in this week's coverage:

- Bankier RSS explicitly states that strong demand for upcoming projects and the earnings beat **"reversed stock-market disappointment"** from the official Witcher 4 premiere announcement.
- The narrative arc is **negative surprise → positive earnings offset**, with price action cited as **upward** in Warsaw.

**Inferred sentiment:** Bears still have a duration argument (flagship gap until 2028), but bulls have regained narrative control with hard numbers. The tone is **less despair, more debate** — a meaningful improvement from a pure "delay shock" environment.

### 3. Product pipeline — fan/community channel (positive)

Product-focused coverage supports engaged, optimistic community sentiment:

- **"Wiedźmin 3: Pieśni przeszłości"** has **900,000 wishlist registrations** across all platforms — a concrete engagement metric that proxies social/community interest better than headlines alone.
- Management expresses confidence in a **strong attach rate** for the expansion, signaling expectations that existing Witcher 3 owners will convert at high rates.
- Coverage of **two secret projects** and **hundreds of millions of PLN** committed to new games sustains the "studio is building, not hibernating" narrative among core gaming audiences.

**Inferred community sentiment:** Cautiously enthusiastic. Wishlist volume at 900K suggests broad pre-launch interest; the "secret projects" angle fuels speculation and discussion cycles typical of engaged fan communities (Reddit, Steam forums, Polish gaming portals — inferred, not directly measured).

### 4. Corporate/regulatory filings (neutral)

PAP MediaRoom items in the bundle are predominantly **administrative**: statute change with company name registration, board recommendation on net profit distribution, and historical AGM notices. These carry **low active sentiment weight** in the trading window but the **dividend recommendation** may add a mild positive tone for income-oriented Polish retail holders.

---

## Sentiment Timeline (Reconstructed)

| Period (approx.) | Dominant theme | Tone | Evidence |
|------------------|----------------|------|----------|
| Aug 28 – early Sep | Pre-earnings anticipation / Witcher 4 overhang | Mixed | Pipeline headlines; residual 2028-delay narrative in broader context |
| Early Sep (results day) | Q2 2026 earnings beat | **Strongly positive** | +44% vs consensus; profit ~2× YoY; franchise line breakout |
| Sep 2–3 | Analyst reaction wave | **Bullish** | Bloomberg survey unanimous; "analysts charmed" headlines |
| Sep 3 (RSS) | Sentiment reversal narrative | **Positive** | Earnings "reversed disappointment"; share price rise cited |
| Throughout week | Product engagement metrics | **Positive** | 900K wishlists; attach-rate confidence; secret projects |

**Net directional shift:** The week closes with **clear positive momentum** in financial media, partially rehabilitating sentiment damaged by the Witcher 4 timeline disclosure.

---

## Sentiment Drivers: Bullish vs Bearish

### Bullish factors

1. **Earnings beat magnitude (+44%)** — resets fundamental narrative; hard to dismiss as noise.
2. **Franchise/licensing line emergence** — addresses the "one-game studio" bear case with a new recurring revenue story.
3. **Record cash flows** — supports R&D spend, buybacks/dividends, and investor confidence.
4. **Unanimous analyst positivity (Bloomberg)** — reduces information asymmetry; may attract incremental institutional interest.
5. **900K wishlists for Pieśni przeszłości** — quantifiable community demand signal ahead of launch.
6. **Share price recovery narrative** — positive feedback loop between media tone and tape (as reported).

### Bearish / cautionary factors

1. **Witcher 4 still 2028** — structural duration risk remains even if temporarily overshadowed.
2. **Event-driven sentiment** — earnings beats can fade if subsequent quarters normalize or DLC attach rates disappoint.
3. **Secret projects opacity** — fuels speculation but offers no near-term revenue visibility; disappointment risk if reveals underwhelm.
4. **No social-media direct measurement** — press positivity may overstate retail/community mood if echo chambers differ from financial media.
5. **Polish market concentration** — sentiment may be domestically driven with limited ADR/foreign-holder participation to broaden the bid.

---

## Social Media Proxy Assessment

**Limitation:** No Twitter/X, Reddit, Steam community API, or sentiment-score data was bundled.

**Reasonable inferences from available proxies:**

| Audience segment | Likely stance | Rationale |
|------------------|---------------|-----------|
| Polish retail investors | **Turning bullish** | Earnings beat + share price rise coverage; dividend recommendation |
| Institutional / analysts | **Bullish** | Bloomberg survey unanimity; franchise economics thesis |
| Core Witcher/Cyberpunk fans | **Moderately positive** | 900K wishlists; interim DLC bridge content; secret project intrigue |
| Duration-focused bears | **Still skeptical** | 2028 Witcher 4 gap; franchise line may be lumpy |
| Gaming press (PL) | **Positive** | Product pipeline headlines; attach-rate optimism |

Wishlist counts function as a **weak but directionally useful** social proxy: 900K registrations imply active consideration across PC and console platforms, consistent with pre-launch buzz rather than indifference.

---

## Implications for Traders and Investors

### Short-term (days to weeks)

- Sentiment supports **continued positive drift or consolidation at higher levels** following the earnings catalyst, assuming no negative pre-announcements on secret projects or DLC delays.
- **Headline risk is skewed positive**: further analyst notes, index inclusion chatter, or dividend confirmation could extend the rally.
- Traders should watch for **"sell the news"** exhaustion if volume fades while media tone remains uniformly bullish — a classic post-earnings pattern.

### Medium-term (quarters)

- The **franchise/licensing narrative** is the new sentiment anchor. Evidence of sustained growth in this line in Q3/Q4 would reinforce the bull case; a reversion to game-launch-lumpiness would undermine it.
- **Pieśni przeszłości attach rate** at launch will be a live sentiment event — success would validate management confidence and fan engagement; miss would reopen Cyberpunk-era trust questions.
- Witcher 4 2028 remains a **valuation ceiling argument** for growth investors requiring nearer-term EPS acceleration.

### Positioning considerations

- **Existing holders:** Sentiment favors holding through the post-earnings re-rating rather than panic-selling on duration fears alone.
- **New entrants:** Positive sentiment is real but **partially priced** if the share already reacted; define entry on pullbacks to earnings-support levels rather than chasing headline momentum.
- **Risk management:** Set stops or hedges around known catalyst dates (DLC launch, next quarterly report) where sentiment can inflect quickly.

---

## Key Takeaways

1. **Sentiment inflection confirmed:** Q2 2026 results transformed the narrative from Witcher 4 delay frustration to franchise-earnings optimism.
2. **Analyst unanimity is a rare bullish signal** in CDPR's recent history — treat it as a sentiment high-water mark that requires fundamental follow-through.
3. **Product metrics (900K wishlists) align with financial bullishness**, reducing the fan-vs-investor divergence seen in prior weeks.
4. **Global macro contributed nothing** to sentiment in this window; CDR.WA moves are idiosyncratic and Poland-centric.
5. **Sustainability is the open question** — this week's tone is strong, but duration to Witcher 4 still defines the long-term sentiment ceiling.

---

## Summary Table

| Theme | Sentiment direction | Strength | Key evidence | Trading implication |
|-------|---------------------|----------|--------------|---------------------|
| Q2 2026 earnings | Bullish | High | +44% vs consensus; ~2× YoY profit | Supports post-earnings bid; watch for fade |
| Analyst consensus | Bullish | High | Bloomberg survey unanimous | Reduces bearish information edge |
| Franchise/licensing line | Bullish | High | Cited as main profitability driver | New thesis pillar; monitor continuity |
| Cash flows | Bullish | Medium-High | Record flows per Bankier RSS | Balance-sheet comfort; dividend optionality |
| Share price reaction | Bullish | Medium | Reported rise in Warsaw post-results | Confirms sentiment-to-price transmission |
| Witcher 3 DLC (Pieśni przeszłości) | Bullish | Medium | 900K wishlists; attach-rate confidence | Near-term catalyst; launch execution risk |
| Secret projects / R&D spend | Mixed-positive | Medium | Hundreds of mln PLN; two undisclosed titles | Speculation fuel; no revenue visibility |
| Witcher 4 (2028 window) | Bearish (structural) | Medium | Still distant flagship | Caps long-term growth sentiment |
| PAP regulatory filings | Neutral | Low | Statute/name change; dividend rec | Minor positive from dividend headline |
| Global macro overlay | Neutral | None | Feed skipped | Idiosyncratic stock dynamics |
| **Composite sentiment** | **Bullish** | **7/10** | Earnings-led reversal of prior negativity | Favor patience/long bias with defined risk |

---

# News Analyst

# News Analysis: CD Projekt RED (CDR.WA)

**Ticker:** CDR.WA | **Analysis date:** 2026-09-04 | **News window:** 2026-08-28 to 2026-09-04

---

## Executive Summary

The past week has been dominated by CD Projekt RED's **Q2 2026 earnings release**, which materially exceeded market expectations and triggered a positive re-rating of the stock on the Warsaw Stock Exchange (GPW). Net profit of **142.9 mln PLN** beat the PAP consensus of **99.3 mln PLN by 44%**, with analysts surveyed by Bloomberg uniformly describing the report as a strong catalyst for the share price.

The narrative has shifted from disappointment over the **Witcher 4 delay to 2028** toward optimism driven by: (1) a newly visible franchise/licensing revenue line, (2) record cash flows, (3) strong early demand signals for the upcoming expansion **"Wiedźmin 3: Pieśni przeszłości"** (900,000 wishlist signups across platforms), and (4) continued heavy R&D investment in two undisclosed projects alongside the known pipeline.

**Macro context:** No global/macro news feed was available for this GPW run; the analysis below is company- and Poland-market-specific.

---

## Company-Specific Developments

### 1. Q2 2026 Earnings Beat — Primary Catalyst

CD Projekt RED delivered a sharp improvement in financial performance in Q2 2026, with net profit roughly **doubling year-over-year**. The magnitude of the beat — 44% above consensus — is the single most important data point for traders this week.

**Key figures (vs. PAP consensus):**

| Metric | Actual | Consensus | Variance |
|--------|--------|-----------|----------|
| Net profit (Q2 2026) | 142.9 mln PLN | 99.3 mln PLN | +44% |

The company also reported **record cash flows**, strengthening the balance sheet and funding capacity for the multi-year development pipeline.

**Trading implication:** Earnings surprises of this magnitude typically sustain positive momentum for 1–3 sessions post-release, especially when accompanied by analyst upgrades. Monitor whether follow-up broker notes revise full-year estimates upward.

### 2. Franchise Business Line — New Growth Narrative

A central theme in post-earnings commentary is the **emergence of a distinct franchise/licensing business line** that drove a step-change in profitability. This line was apparently separated and scaled during the quarter, contributing disproportionately to the earnings beat.

**Trading implication:** If franchise revenue proves recurring (licensing, merchandising, cross-media), it reduces the binary risk associated with AAA game launch cycles. Traders should watch management commentary and segment disclosures in future reports to confirm sustainability vs. one-off licensing deals.

### 3. Pipeline & Product Momentum

**"Wiedźmin 3: Pieśni przeszłości" (Witcher 3: Songs of the Past):**
- **900,000 wishlist signups** across all platforms ahead of launch.
- Management expressed confidence in a **strong attach rate** (DLC/expansion uptake among existing Witcher 3 owners).
- This is a near-term revenue event that partially bridges the gap to Witcher 4 (2028).

**Undisclosed projects:**
- The company is investing **hundreds of millions of PLN** in new games, including **two secret/unannounced projects** beyond the public pipeline.
- Capital allocation toward R&D signals management confidence but also means elevated burn before monetization.

**Witcher 4 delay (2028):**
- The official confirmation of a 2028 launch window initially weighed on sentiment.
- The Q2 beat and franchise momentum have **largely offset** this disappointment in the market's reaction, as evidenced by the Warsaw share price rise.

**Trading implication:** Songs of the Past is the nearest identifiable revenue catalyst. Wishlist velocity (900k) is a positive demand signal; traders should track Steam/console store metrics and attach-rate data post-launch for confirmation.

### 4. Analyst Sentiment

Bloomberg-surveyed analysts are **unanimously positive** on the Q2 report, with commentary highlighting:
- Surprise magnitude of the earnings beat
- Franchise line as a structural positive
- Cash flow strength
- Pipeline demand signals reversing prior skepticism

**Trading implication:** Consensus upgrades are likely in progress. Watch for target price revisions from local brokers (mBank, PKO BP, Erste, etc.) that could provide additional upside triggers.

### 5. Corporate Actions (PAP Filings)

Recent regulatory filings via PAP MediaRoom include:

| Filing | Significance |
|--------|-------------|
| Statute change & company name change registration | Formalizes rebrand to **CD Projekt RED** — cosmetic/legal, low trading impact |
| Board recommendation on net profit distribution | Signals upcoming dividend decision at AGM — relevant for income-oriented holders |
| AGM convocation notice | Shareholder meeting scheduled; dividend and governance votes expected |

**Trading implication:** The profit distribution recommendation is the most actionable filing. If the board proposes a meaningful dividend given record cash flows, this could attract additional domestic institutional buying. Monitor the AGM agenda for the proposed DPS (dividend per share).

---

## Sentiment Assessment

| Factor | Direction | Weight |
|--------|-----------|--------|
| Q2 earnings beat (+44% vs consensus) | Strongly positive | High |
| Record cash flows | Positive | Medium |
| Franchise revenue emergence | Positive (structural) | High |
| Songs of the Past demand (900k wishlists) | Positive | Medium |
| Witcher 4 delay to 2028 | Negative (long-term) | Medium — partially offset |
| Heavy R&D spend on secret projects | Neutral/negative near-term | Low |
| Analyst unanimity post-earnings | Positive | Medium |

**Net sentiment: Bullish** for the near-to-medium term, with the primary risk being execution on the 2028 Witcher 4 timeline and sustainability of franchise revenues.

---

## Risks & Watch Items

1. **Franchise revenue sustainability** — One strong quarter does not confirm a recurring business model. Next quarter's segment data is critical.
2. **Witcher 4 execution risk** — A 2028 target leaves a multi-year gap; any further slippage would re-ignite negative sentiment.
3. **R&D burn** — Hundreds of millions PLN committed to undisclosed projects increases opacity and capital risk if projects underperform.
4. **GPW liquidity & sentiment** — CDR is a high-beta GPW name; broader Polish market moves (WIG, FX) can amplify or dampen company-specific catalysts.
5. **No macro overlay** — Without global news context, traders should independently monitor EUR/PLN, NBP rate decisions, and sector peers (11 bit studios, PlayWay) for relative performance signals.

---

## Actionable Takeaways for Traders

1. **Post-earnings momentum play:** The +44% earnings beat with unanimous analyst praise supports continued bullish positioning in the days following the release, barring a broader market sell-off.
2. **Catalyst calendar:** Watch for Songs of the Past launch date confirmation and early sales/attach-rate data as the next identifiable price-moving event.
3. **Dividend angle:** Board profit distribution recommendation + record cash flows suggest a potential dividend surprise at the upcoming AGM — monitor PAP filings for the proposed amount.
4. **Franchise line validation:** Treat Q2 franchise revenue as hypothesis, not thesis, until confirmed in Q3/Q4 disclosures.
5. **Risk management:** Size positions aware of the 2028 Witcher 4 gap; near-term upside is driven by DLC/expansion and licensing, not the flagship sequel.

---

## Key Points Summary

| Category | Event / Data Point | Impact | Timeframe | Action |
|----------|-------------------|--------|-----------|--------|
| Earnings | Q2 net profit 142.9 mln PLN (+44% vs consensus) | Strongly bullish | Immediate | Consider momentum; watch for estimate revisions |
| Cash flow | Record operating cash flows reported | Bullish | Q2 2026 | Supports dividend case and R&D funding |
| Franchise | New licensing/franchise line drove profitability jump | Bullish (if recurring) | Structural | Validate in next quarterly report |
| Product | Songs of the Past: 900k wishlist signups | Bullish | Pre-launch | Track launch date and attach-rate metrics |
| Pipeline | Witcher 4 confirmed for 2028 | Bearish (long-term) | 2028 | Partially offset by near-term catalysts |
| R&D | Hundreds of mln PLN on 2 secret projects | Neutral | Multi-year | Monitor for announcements |
| Analysts | Bloomberg survey: unanimous positive post-Q2 | Bullish | Near-term | Watch for target price upgrades |
| Corporate | Board profit distribution recommendation | Potentially bullish | AGM | Monitor proposed DPS |
| Corporate | Statute/name change to CD Projekt RED | Neutral | Completed | No trading action needed |
| Macro | Global news feed unavailable (GPW config) | N/A | — | Source macro data independently |

---

# Fundamentals Analyst

# Fundamentals Report: CD Projekt Red S.A. (CDR.WA)

**Analysis date:** 2026-09-04  
**Sector:** Communication Services | **Industry:** Electronic Gaming & Multimedia  
**Exchange:** Warsaw Stock Exchange (GPW)

---

## Executive Summary

CD Projekt Red is a Polish AAA game developer best known for *The Witcher* franchise and *Cyberpunk 2077*. The company remains fundamentally strong on the balance sheet — high margins, minimal leverage, and a fortress liquidity position — but operates in a highly cyclical, release-driven revenue model that produces extreme quarter-to-quarter volatility. TTM profitability metrics look exceptional (67% net margin, 16.4% ROE), yet forward estimates signal a sharp earnings normalization: forward EPS of 1.59 PLN vs. TTM EPS of 5.84 PLN implies the market expects a post-launch trough. Free cash flow is negative on a TTM basis (-243M PLN) due to heavy development capex and investment portfolio activity, not operational weakness. No insider transactions were reported in the lookback period.

**Key trader takeaway:** CDR is a quality balance-sheet story trading at a premium valuation (P/E ~39, P/B ~6.9) with a looming earnings cliff. The investment case hinges on the pipeline (Witcher 4, Cyberpunk sequel, multiplayer) and whether current spending converts into the next revenue spike.

---

## Company Profile & Market Positioning

| Metric | Value |
|--------|-------|
| Company Name | CD Projekt Red S.A. |
| Market Cap | 22.75B PLN |
| Shares Outstanding | ~99.9M |
| 52-Week Range | 211.3 – 297.0 PLN |
| 50-Day Avg / 200-Day Avg | 241.1 / 246.8 PLN |
| Beta | 0.39 (low systematic risk) |
| Dividend Yield | 0.46% |

CD Projekt Red is one of Europe's few independent AAA studios. Its business model is project-based: revenue and profit surge around major game launches and DLC releases, then contract sharply in between. This structural cyclicality is the dominant feature of any fundamental analysis and explains the wide gap between trailing and forward earnings multiples.

---

## Valuation Snapshot

| Metric | Value | Interpretation |
|--------|-------|----------------|
| P/E (TTM) | 38.99 | Premium vs. historical gaming peers; reflects strong trailing earnings |
| Forward P/E | 143.21 | Extremely elevated — market prices in major earnings decline |
| EPS (TTM) | 5.84 PLN | Sum of strong recent quarters including Q3 2025 spike |
| Forward EPS | 1.59 PLN | ~73% below TTM; signals trough-year expectations |
| P/B | 6.91 | Well above book; equity growth hasn't kept pace with share price |
| Book Value/Share | 32.96 PLN | Rising steadily (30.64 → 35.64 PLN per Bankier, Sep 2025–Jun 2026) |

The forward P/E of 143 is a red flag for value-oriented traders: at ~227 PLN share price, the market is paying for optionality on future titles rather than current earnings power. Bankier's trailing P/E improved from 47.4 (Sep 2025) to 33.8 (Jun 2026) as EPS TTM rose to 6.64 PLN, suggesting the stock has become relatively cheaper on trailing metrics even as absolute price held range-bound.

---

## Revenue & Earnings — Quarterly Trends

Revenue is highly seasonal and release-dependent. The pattern is unmistakable:

| Quarter | Revenue (PLN '000) | EBIT (PLN '000) | Net Income (PLN '000) | EPS (Basic) |
|---------|---------------------|------------------|------------------------|-------------|
| Q4 2024 (Dec) | 74,877 | 107,973 | 246,278* | — |
| Q1 2025 (Mar) | 180,091 | 93,723 | 111,795 | 1.12 |
| Q2 2025 (Jun) | 216,734 | 72,181 | 68,953 | — |
| Q3 2025 (Sep) | 349,072 | 194,630 | 193,492 | 1.94 |
| Q4 2025 (Dec) | 74,877 | 107,973 | 246,278 | — |
| Q1 2026 (Mar) | 191,107 | 97,067 | 106,200 | 1.06 |
| Q2 2026 (Jun) | 244,201 | 148,272 | 142,907 | — |

*Q4 2025 net income of 246M PLN includes non-operating items (tax reversals, investment gains) that inflate the figure relative to operating performance. Normalized income for Q4 2025 was ~170M PLN.

**Observations:**

1. **Q3 2025 was the revenue peak** at 349M PLN — likely driven by sustained *Cyberpunk 2077* / *Phantom Liberty* sales and catalog momentum.
2. **Q4 is structurally weak** (~75M PLN revenue in both Q4 2024 and Q4 2025), a classic post-holiday trough for a studio without a new AAA launch.
3. **Recovery in H1 2026** is gradual: Q1 revenue of 191M and Q2 of 244M show improvement but remain far below the Q3 2025 peak.
4. **TTM revenue** per Yahoo fundamentals: ~878M PLN, consistent with the quarterly sum.
5. **Gross margins remain elite** — Q1 2026 gross profit of 177M on 191M revenue (~93%), reflecting the asset-light nature of game sales once development is complete.

---

## Profitability & Margins

| Metric (TTM) | Value |
|--------------|-------|
| Gross Profit | 799M PLN |
| EBITDA | 490M PLN |
| Net Income | 516M PLN |
| Profit Margin | 67.1% |
| Operating Margin | 51.0% |
| ROE | 16.4% |
| ROA | 8.7% |

Bankier quarterly margin data shows net margin ranging from 50.7% (Q3 2025) to 80.2% (Q2 2026), with ROE between 19–21% across recent quarters. These are best-in-class profitability metrics for the gaming sector, but they are trailing indicators inflated by the Q3 2025 revenue spike and favorable tax items in Q4 2025.

**SG&A and R&D:** Operating expenses are lumpy. Q3 2025 saw 104.7M PLN in SG&A vs. negative -5.3M in Q4 2025 (likely reversals/credits). R&D is embedded in development costs rather than reported as a separate line consistently, but intangible purchases (game development) in the cash flow statement run ~19–31M PLN per quarter, with total capex of 117–181M PLN quarterly.

---

## Balance Sheet Analysis

**As of Q1 2026 (Mar 31, 2026):**

| Item | Amount (PLN '000) | Trend |
|------|-------------------|-------|
| Total Assets | 3,643,417 | ↑ from 3,120M (Mar 2025) |
| Total Equity | 3,412,725 | ↑ from 2,893M (Mar 2025) |
| Total Liabilities | 230,692 | Stable, very low |
| Working Capital | 980,750 | ↓ from 1,185M (Mar 2025) |
| Cash & Equivalents | 30,008 | ↓ sharply from 217M (Mar 2025) |
| Short-Term Investments | 942,993 | ↑ from 958M (Mar 2025) |
| Goodwill & Intangibles | 1,472,291 | ↑ from 910M (Mar 2025) — game IP buildup |
| Total Debt | 26,038 | Minimal (capital leases only) |
| Debt/Equity | 0.74 | Very conservative |

**Balance sheet strengths:**
- **Fortress balance sheet:** Debt-to-equity of 0.74 with only ~26M PLN in lease obligations. Debt ratio per Bankier: 5.99–7.20% across recent quarters.
- **Current ratio of 6.0** — exceptional short-term liquidity.
- **Growing equity base:** Book value per share rose from 30.64 PLN (Sep 2025) to 35.64 PLN (Jun 2026).
- **Investment portfolio:** ~943M PLN in short-term investments (bonds/securities), providing yield (12–17M PLN quarterly interest income).

**Balance sheet concerns:**
- **Cash decline:** Reported cash dropped from 217M (Mar 2025) to 30M (Mar 2026) and further to 19.4M (Jun 2026 per Bankier), offset by higher investment allocations. Total liquid assets (cash + ST investments) remain ~973M PLN.
- **Rising intangibles:** Goodwill and other intangibles grew from 910M to 1,472M PLN YoY — capitalized development costs for upcoming titles. Impairment risk if projects underperform.
- **Working capital compression:** Declined from 1.19B to 981M, partly due to receivables timing and payables growth.

---

## Cash Flow Analysis

| Quarter | Operating CF | Investing CF | Financing CF | Free Cash Flow | Net Cash Change |
|---------|-------------|-------------|-------------|----------------|-----------------|
| Q1 2025 | 151.1M | -57.8M | -1.0M | +15.1M | +92.4M |
| Q2 2025 | 98.6M | -167.3M | -1.6M | -67.6M | -70.3M |
| Q3 2025 | 237.1M | -137.8M | -123.5M | +100.7M | -24.2M |
| Q4 2025 | 103.8M | -111.5M | -1.0M | -70.0M | -8.7M |
| Q1 2026 | 163.5M | -246.4M | -1.2M | -17.2M | -84.1M |

**TTM Free Cash Flow: -243M PLN** (per fundamentals.txt)

**Key cash flow drivers:**

1. **Operating cash flow is healthy** (82–237M PLN quarterly), confirming the business generates cash from game sales.
2. **Investing outflows are heavy:** Q1 2026 investing CF was -246M PLN, driven by:
   - Capex of 181M PLN (development infrastructure, intangibles)
   - Net investment purchases of 156M PLN (portfolio rebalancing into bonds)
   - Business acquisition of 91M PLN (likely small studio/IP acquisition)
3. **Financing:** Q3 2025 included a 99.9M PLN dividend payment and 22.4M PLN share buyback. No further buybacks or dividends in subsequent quarters.
4. **Interest income** of 12–18M PLN per quarter from the investment portfolio partially offsets the cash burn.

The negative FCF is a deliberate investment phase, not a distress signal. Traders should monitor whether capex/intangible spending plateaus or accelerates as Witcher 4 development progresses.

---

## Capital Allocation & Shareholder Returns

- **Dividend:** 99.9M PLN paid in Q3 2025 (~1.00 PLN/share). Current yield: 0.46%. Dividend is opportunistic, not a reliable income stream.
- **Buybacks:** 22.4M PLN repurchase in Q3 2025 (treasury stock: 22.4M PLN on balance sheet). Modest relative to market cap.
- **No equity issuance** — share count stable at 99,910,510.
- **M&A activity:** 91M PLN business purchase in Q1 2026 suggests inorganic growth/in talent acquisition.

---

## Insider Activity

No insider transactions were reported for CDR.WA in the lookback period. The absence of insider buying during a period of declining forward earnings estimates and negative FCF is neutral-to-slightly-negative sentiment signal — insiders are not signaling conviction at current levels, but neither are they selling.

---

## Risk Factors

1. **Release-cycle concentration:** Revenue depends on a handful of AAA titles. Delays or underperformance of Witcher 4 or Cyberpunk sequel would materially impact fundamentals.
2. **Earnings cliff:** Forward EPS of 1.59 PLN vs. TTM 5.84 PLN implies ~73% earnings decline. Trailing P/E will rise sharply if earnings normalize before the next launch.
3. **Capitalized development risk:** 1.47B PLN in intangibles on the balance sheet. A write-down would hit equity and sentiment.
4. **Negative FCF during investment phase:** Sustained capex without corresponding revenue growth pressures the cash/investment portfolio.
5. **Valuation premium:** P/B of 6.9x and forward P/E of 143x leave little margin of safety if pipeline timelines slip.
6. **Currency exposure:** Significant USD revenue with PLN reporting creates FX volatility (visible in quarterly FX gain/loss swings of ±8–15M PLN).

---

## Actionable Insights for Traders

1. **Do not extrapolate TTM margins.** The 67% net margin and 516M PLN TTM net income are peak-cycle figures. Model forward earnings closer to 1.59 PLN/share (~160M PLN annualized) for trough-year analysis.
2. **Watch quarterly revenue trajectory.** Q2 2026 revenue of 244M PLN (+28% QoQ) suggests gradual recovery, but needs to sustain above 200M PLN/quarter to support the current valuation without a new launch.
3. **Balance sheet is the safety net.** With 973M PLN in liquid assets, minimal debt, and 6x current ratio, bankruptcy risk is negligible. The stock floor is likely set by book value (~35.64 PLN) and cash per share (~9.7 PLN cash + ~9.4 PLN in investments).
4. **Catalyst calendar matters more than fundamentals.** The next major inflection points are game announcements, milestone reveals (Witcher 4, Cyberpunk 2), and quarterly revenue surprises. Fundamental analysis alone underweights these event-driven moves.
5. **Compare P/E on normalized earnings.** At 227 PLN share price and ~1.59 forward EPS, implied forward P/E is ~143x. Even on Jun 2026 TTM EPS of 6.64 PLN, trailing P/E is ~34x — fair only if the next game cycle matches or exceeds Cyberpunk's performance.
6. **Monitor intangible growth vs. capex.** If quarterly intangible additions decelerate, it may signal development nearing completion (positive catalyst). Acceleration suggests extended investment phase (negative for near-term FCF).

---

## Summary Table

| Category | Metric | Value | Signal |
|----------|--------|-------|--------|
| **Valuation** | P/E (TTM) | 38.99 | Premium |
| | Forward P/E | 143.21 | Very expensive on forward earnings |
| | P/B | 6.91 | Above book |
| | EPS TTM / Forward | 5.84 / 1.59 PLN | Earnings cliff expected |
| **Profitability** | Net Margin (TTM) | 67.1% | Elite (peak cycle) |
| | Operating Margin (TTM) | 51.0% | Elite |
| | ROE | 16.4% | Strong |
| | ROA | 8.7% | Moderate |
| **Revenue** | TTM Revenue | 878M PLN | Cyclical peak influenced by Q3 2025 |
| | Latest Quarter (Q2 2026) | 244M PLN | Recovering, below peak |
| | Revenue Pattern | Highly seasonal | Release-dependent |
| **Balance Sheet** | Total Assets | 3,643M PLN | Growing |
| | Equity | 3,413M PLN | Growing |
| | Debt/Equity | 0.74 | Very low leverage |
| | Current Ratio | 6.0 | Excellent liquidity |
| | Cash + Investments | ~973M PLN | Strong |
| | Intangibles | 1,472M PLN | Rising (pipeline investment) |
| **Cash Flow** | TTM Free Cash Flow | -243M PLN | Negative (investment phase) |
| | Q1 2026 Operating CF | 163M PLN | Healthy operations |
| | Q1 2026 Capex | 181M PLN | Heavy development spend |
| **Shareholder** | Dividend Yield | 0.46% | Low, opportunistic |
| | Buybacks (Q3 2025) | 22.4M PLN | Modest |
| | Insider Activity | None reported | Neutral |
| **Risk** | Earnings Normalization | Forward EPS -73% vs TTM | High |
| | Pipeline Dependency | Witcher 4, Cyberpunk 2 | High |
| | FCF | Negative TTM | Monitor |
| **Overall** | Fundamental Quality | Strong balance sheet, elite margins | Quality company |
| | Valuation vs. Earnings Power | Expensive on forward basis | Caution warranted |
| | Trading Stance | Hold / catalyst-driven | Wait for pipeline clarity or valuation reset |

---

# Bull Researcher

# Bull Research: CDR.WA (CD Projekt RED)

## Round 1

Look, I know the chart looks ugly right now — 227.7 PLN, below every major moving average, fresh off an August capitulation day. A bear will wave that in your face and call it a falling knife. Fair enough. But here's what they're missing: **the fundamental story just changed**, and the market hasn't finished pricing it in.

### The earnings beat isn't noise — it's a thesis reset

Q2 2026 net profit came in at **142.9 mln PLN**, beating PAP consensus of 99.3 mln PLN by **44%**. That's not a rounding error; that's the kind of surprise that forces analysts to rip up their models. Bloomberg-surveyed analysts are **unanimously positive** — a rare alignment for a stock that spent weeks in "dead money until 2028" purgatory after the Witcher 4 delay announcement.

The beat didn't come from accounting tricks. Revenue hit **244M PLN** in Q2 (+28% QoQ), gross margins stayed elite at ~93%, and management delivered what Polish financial media called a **"spectacular profitability improvement."** Net profit roughly **doubled year-over-year**. Bears who anchored on the Witcher 4 timeline got blindsided by actual cash generation happening *right now*.

### Franchise economics: the bear's "one-hit studio" case is breaking

The most important structural shift in this quarter is the emergence of a **distinct franchise and licensing revenue line**. This is the answer to the perennial CDPR bear argument: "You're hostage to AAA launch cycles." Licensing, merchandising, and cross-media monetization are starting to pay — Bankier's own headline framing is that franchises are **"zaczynają nieźle płacić"** (starting to pay off nicely).

If this line proves recurring — and Q2 is the first real proof point — the binary launch-cycle risk that justifies a depressed forward multiple starts to erode. You don't need Witcher 4 in 2028 to make money when your existing IP prints cash through catalog sales, DLC, and licensing deals quarter after quarter. The market was pricing a trough; the company just showed it can grow *through* the trough.

### Near-term catalysts the chart can't see

While technicians stare at the Bollinger lower band at 222 PLN, bulls should be watching the product pipeline:

- **"Wiedźmin 3: Pieśni przeszłości"** has **900,000 wishlist signups** across platforms. That's not fan fiction — it's quantifiable demand for a near-term revenue event that bridges the gap to the flagship sequel.
- Management is confident in a **strong attach rate** among existing Witcher 3 owners. High attach rates on a 93% gross-margin product are pure operating leverage.
- **Two undisclosed projects** with hundreds of millions of PLN in R&D spend signal the studio isn't hibernating — it's building optionality. Bears call this opacity; I call it a portfolio of call options on future revenue spikes.

The board's **profit distribution recommendation** ahead of the AGM adds another potential catalyst. With record cash flows and ~973M PLN in liquid assets (cash plus short-term investments), a meaningful dividend surprise could pull in domestic institutional buyers who've been sitting on the sidelines.

### Balance sheet: the floor is higher than the chart suggests

Let's talk about what you actually own at 227 PLN per share:

- **Market cap:** 22.75B PLN on a fortress balance sheet with **3.41B PLN in equity** and only **26M PLN in debt** (lease obligations).
- **Book value per share:** ~35.64 PLN and rising. **Current ratio of 6.0.** Debt-to-equity of 0.74.
- **TTM net margin of 67%** and **ROE of 16.4%** — best-in-class for gaming, even acknowledging peak-cycle distortion.
- **Beta of 0.39** — this stock doesn't even move with the market. The current selloff is idiosyncratic, not macro-driven.

Yes, TTM free cash flow is negative at -243M PLN. But that's **deliberate investment**, not distress: 181M PLN in quarterly capex, 156M PLN in portfolio rebalancing, and a 91M PLN acquisition in Q1 2026. The operating cash engine is healthy (163M PLN in Q1 2026 alone). You're paying for a studio in build mode, not one in decline.

### Addressing the bear case head-on

**"Forward P/E of 143x — it's absurdly expensive."**
Forward EPS of 1.59 PLN assumes earnings *collapse* with no new revenue catalysts. But Q2 just printed 142.9M PLN in a single quarter — annualizing that run rate alone would blow past the consensus trough. The forward multiple is a rearview mirror for a company whose earnings trajectory just inflected upward. Trailing P/E has already compressed from 47.4 to ~34x as EPS caught up. The franchise line and DLC pipeline give us reasons to believe the trough is shallower than models assume.

**"Witcher 4 isn't until 2028 — that's dead money."**
That narrative **already reversed**. Bankier explicitly reported that the Q2 beat **"reversed stock-market disappointment"** from the Witcher 4 premiere announcement. Sentiment shifted from duration-anxiety to franchise-earnings optimism in a single earnings print. You don't need to wait three years when Songs of the Past, licensing revenue, and catalog sales are generating cash *this year*.

**"The chart is bearish — don't catch the falling knife."**
I'll grant this: short-term technicals are weak. Price is 7.6% below the 200 SMA, RSI at 33.4, MACD histogram deeply negative. But this is exactly where **fundamental dislocations create opportunity**. The Aug 25 capitulation on 2.1M shares (6× average volume) flushed weak hands on a day when the earnings catalyst hadn't yet hit the tape. Post-earnings, sentiment is **7/10 bullish** in financial media while price sits near statistical support at 222 PLN. That's not a falling knife — that's a **mispriced asset at a technical floor with a fundamental catalyst underneath**.

**"Negative FCF means they're burning cash."**
They're investing in intangibles that grew from 910M to 1.47B PLN — that's capitalized IP for Witcher 4, Cyberpunk sequel, and two secret projects. When development cycles complete, those intangibles convert to revenue spikes with 90%+ gross margins. The investment phase *is* the bull case.

### The bull thesis in one sentence

CD Projekt RED just proved it can generate exceptional profits *between* major AAA launches through franchise monetization and catalog strength, and the market — still digesting a technical selloff — hasn't fully repriced a company that went from "one-game lottery ticket" to "recurring franchise cash engine" in a single quarter.

### Positioning view

- **Entry:** Current levels (~227 PLN) offer asymmetric risk/reward. Downside to June swing lows (~217 PLN) is ~4.5%; upside to the 50 SMA cluster (~241 PLN) is ~6%, with a full re-rating toward 250+ PLN if franchise revenue sustains and Songs of the Past delivers on attach-rate expectations.
- **Catalysts to watch:** DLC launch metrics, Q3/Q4 franchise line continuity, AGM dividend proposal, and any broker target-price upgrades following the Bloomberg unanimity.
- **Risk management:** Use the 217 PLN structural support as a stop reference. A break below 215 on volume would invalidate the near-term bounce thesis, but wouldn't touch the long-term franchise value.

The bears had their moment with the Witcher 4 delay. The Q2 numbers took it back. I'm long the franchise, long the balance sheet, and long the idea that 900,000 wishlists mean something the chart hasn't priced yet.

---

# Bear Researcher

# Bear Research: CDR.WA (CD Projekt RED)

## Round 1

You want to talk about a "thesis reset"? Fine — let's look at what the market actually did after your spectacular Q2 print. Price closed at **227.7 PLN** on September 4, **6.3% below** the August 25 capitulation close, sitting **below every major moving average** — 10 EMA, 50 SMA, 200 SMA, and VWMA. RSI at 33.4 with **no bullish divergence**. MACD histogram still deeply negative at −3.17. The technical report's base case assigns **55% probability to bearish continuation**, with rallies capped at 240–242 PLN. If the earnings beat were truly forcing a re-rating, why is the stock making **new local lows** while Polish financial media runs unanimously bullish headlines? That's not a mispriced opportunity — that's the market **voting against your narrative**.

### The earnings beat is real — and already the wrong anchor

I'll give you the 142.9 mln PLN net profit and the 44% consensus beat. I'm not disputing the number. I'm disputing what you think it means.

**One quarter does not restructure a release-cycle business.** Q2 2026 revenue of 244M PLN is a recovery, yes — but it's still **30% below** the Q3 2025 peak of 349M PLN. The company is climbing out of a trough, not breaking into a new growth regime. And the market knows it: forward EPS sits at **1.59 PLN** versus TTM EPS of **5.84 PLN** — a **73% earnings decline** the consensus already prices in. Forward P/E of **143x** at 227 PLN isn't a rearview mirror; it's the market telling you that today's profits are **non-recurring peak-cycle noise**, not a new floor.

Your own bull case accidentally proves the cyclicality problem. You cite Q2 profit "roughly doubling year-over-year" — that's exactly how this stock works. Spikes up, then normalizes. Q4 revenue was **75M PLN** in both Q4 2024 and Q4 2025. That's structural seasonality, not franchise resilience. Annualizing one strong quarter after a beat is how investors get trapped at 39x trailing P/E right before the cliff.

### "Franchise economics" — show me quarter two

The franchise and licensing line is the centerpiece of your argument, and it's built on **a single data point**. News and sentiment reports both flag the same caveat: *"Treat Q2 franchise revenue as hypothesis, not thesis, until confirmed in Q3/Q4 disclosures."* One separated business line in one strong quarter could easily be a licensing deal, a merchandising spike, or accounting reclassification — not a recurring engine.

This is the bear case that keeps winning with CDPR: the market **over-extrapolates** interim monetization. Catalog sales, DLC, and licensing are real, but they're **lumpy**. The sentiment report itself warns this positivity may be **"event-driven and front-loaded"** around the earnings beat. Bloomberg unanimity after a +44% surprise isn't a rare bullish signal — it's what always happens after a blowout quarter. That's the sentiment **high-water mark**, not the beginning of a sustained re-rating. Wait for Q3. If franchise revenue reverts, your structural thesis evaporates and you're holding a 143x forward multiple on a one-game studio with a 2028 flagship gap.

### 900,000 wishlists are not 900,000 sales

*"Wiedźmin 3: Pieśni przeszłości"* wishlist count is a marketing metric, not a revenue line. Wishlists cost nothing. Attach rate is **management's confidence**, not a delivered result. CDPR has a documented history of overpromising and underdelivering on product timelines — the Witcher 4 delay to **2028** is the latest proof. You're asking investors to pay a premium valuation on unconverted engagement metrics for an expansion to a decade-old game, while the next AAA title is **two years away at minimum**.

Meanwhile, the company is burning capital into opacity: **hundreds of millions of PLN** on two undisclosed projects, intangibles up from 910M to **1.47B PLN**, TTM free cash flow at **−243M PLN**, Q1 2026 capex alone at **181M PLN**. You call that "build mode." I call it **capital at risk with zero revenue visibility** and meaningful impairment exposure if any project underperforms. Bears don't fear investment — we fear paying 6.9x book for capitalized hope.

### The balance sheet floor is a mirage at 227 PLN

Yes, the balance sheet is strong. Debt is negligible, liquidity is ~973M PLN, current ratio is 6.0. Nobody's arguing bankruptcy. But **book value is 35.64 PLN per share** and you're trading at **227 PLN** — that's **6.4x book** for a company the market expects to earn 73% less next year. The "fortress balance sheet" doesn't set a price floor at 227; it sets a **survival floor** somewhere far below where longs are positioned. Beta of 0.39 doesn't help when the stock is in an **idiosyncratic distribution phase** — price below VWMA confirms institutional selling dominated the August 25 volume spike (2.1M shares, 6× average). Insiders reported **no buying** during this period. If management believed the franchise thesis reset, they'd be showing it.

### Direct rebuttal to your bull points

**"The market hasn't finished pricing in the earnings beat."**
The market had its chance. Post-earnings, price failed to reclaim the 10 EMA at 236.9, failed at the 50 SMA / VWMA cluster at ~241, and closed near session lows at 227.7. The Aug 25 capitulation on record volume hasn't been absorbed — every comparable volume spike in this lookback (May 27, Mar 20) preceded **extended declines or prolonged basing**. You're calling a falling knife a dislocation; the tape calls it **distribution into a confirmed downtrend**.

**"Forward P/E is wrong because Q2 annualizes higher."**
That's the bull trap. Q2 included what may be a one-off franchise contribution. Even if you annualize 142.9M quarterly profit (~571M/year), you're still paying **~40x** for peak earnings on a cyclical game developer with a **multi-year revenue gap** before Witcher 4. And if earnings normalize toward 160M PLN annualized (forward consensus), you're paying **140x+** for trough earnings. There is no cheap scenario here.

**"Witcher 4 delay narrative already reversed."**
Reversed in **headlines**, not in **valuation structure**. Witcher 4 is still 2028. Cyberpunk sequel and multiplayer are unscheduled. You're bridging a two-year revenue desert with DLC to a ten-year-old title and unproven licensing continuity. The sentiment report's own structural bear case — *"duration to Witcher 4 still defines the long-term sentiment ceiling"* — hasn't gone away. Q2 bought time; it didn't shorten the gap.

**"Negative FCF is the bull case."**
Negative FCF during a 143x forward multiple is a **liability**, not an option. You're paying today for revenue that may arrive in 2028, with execution risk on every intervening quarter. If Witcher 4 slips again — and this company has a track record — those 1.47B PLN in intangibles become a write-down story, not a conversion story.

### The bear thesis in one sentence

CD Projekt RED just delivered a strong quarter that Polish media loves and the **stock chart rejects**, leaving investors holding a premium-priced cyclical name with a **73% expected earnings decline**, unvalidated franchise revenue, **−243M PLN TTM free cash flow**, and no AAA launch until 2028 — all while technical structure points to **222 PLN support breaking toward 217**.

### Positioning view

- **Avoid strategic longs** at current levels. The risk/reward from 227 PLN is asymmetric to the **downside**: 4.5% to June swing lows is the bull's best-case stop; a break below 222 PLN (Bollinger lower band) opens **215–217 PLN** on elevated ATR of 7.74 PLN.
- **Fade rallies into 240–242 PLN** — the 50 SMA / VWMA confluence is the highest-probability resistance zone in a distribution regime.
- **Catalysts that hurt bulls:** Q3 franchise revenue normalization, DLC attach-rate disappointment, further Witcher 4 timeline slippage, intangible impairment headlines, or a broad GPW risk-off move amplifying this high-beta name.
- **What would change my mind:** Sustained franchise line growth for 2+ consecutive quarters, daily close above 248 PLN (Bollinger middle) with volume confirmation, and a credible Witcher 4 milestone that pulls forward revenue visibility. None of that exists today.

You had a great quarter. The chart, the forward estimates, and the volume profile say the easy money on that beat is **already gone** — and the structural bear case is very much alive.

---

# Research Manager

**Recommendation**: Underweight

**Rationale**: CD Projekt RED delivered a genuine Q2 2026 earnings beat (+44% vs PAP consensus, 142.9 mln PLN net profit, ~93% gross margins) and Polish media sentiment has turned decisively positive (7/10 composite, Bloomberg analyst unanimity). However, the stock at 227.7 PLN is making new local lows post-earnings, trading below all major moving averages with no RSI bullish divergence — the tape is rejecting the fundamental re-rating narrative. Forward EPS of 1.59 PLN versus TTM 5.84 PLN implies a ~73% earnings cliff already priced in, leaving forward P/E at ~143x with little margin of safety. The franchise/licensing line that anchors the bull thesis rests on a single quarter; news and sentiment both flag it as hypothesis until Q3/Q4 confirmation. TTM free cash flow of −243M PLN and rising intangibles (1.47B PLN) reflect deliberate investment, but at this valuation they are liabilities until revenue visibility improves. The fortress balance sheet (973M PLN liquid assets, 6.0 current ratio) prevents a Sell call, but technical distribution (Aug 25 volume spike 2.1M shares, price below VWMA at 241 PLN) and the market report's 55% bearish-continuation base case outweigh near-term fundamental optimism for new capital deployment.

**Strategic Actions**: For a swing horizon (days–weeks), do not initiate new long exposure at 227 PLN. Existing holders should trim into the 240–242 PLN resistance zone (50 SMA / VWMA cluster). Tactical entry only on a confirmed two-session hold at 222–225 PLN (Bollinger lower band) with RSI divergence; use a stop-loss at 215 PLN (June swing-low zone, ~1.5× ATR below entry). First take-profit at 237 PLN (10 EMA reclaim); second target at 241–242 PLN (50 SMA / VWMA). A daily close below 222 PLN on volume above 500K invalidates the bounce setup and opens 217 PLN — exit any tactical long and maintain Underweight stance until franchise revenue is confirmed for two consecutive quarters or price reclaims 248 PLN (Bollinger middle) on expanding volume.

**Horizon**: days–weeks

---

# Trader

**Action**: Hold

**Reasoning**: CDR.WA at 227.7 PLN sits in a confirmed multi-timeframe downtrend — below the 10 EMA (236.9), 50 SMA (241.5), and 200 SMA (246.4) with no RSI bullish divergence after the Aug 25 capitulation volume spike. Q2 2026 earnings beat (+44% vs consensus) and bullish Polish media sentiment (7/10 composite) are real, but the tape is rejecting the re-rating: price made new local lows post-earnings. Forward EPS of 1.59 PLN vs TTM 5.84 PLN implies a ~73% earnings cliff already priced in, leaving forward P/E near 143x with little margin of safety. The Research Manager's Underweight stance and 55% bearish-continuation base case outweigh near-term fundamental optimism for new capital deployment. Do not initiate new long exposure at current levels; existing holders may hold with defined risk but should trim into 240–242 PLN resistance on any relief rally. Tactical long entry is deferred until a confirmed two-session hold at 222–225 PLN (Bollinger lower band) with RSI divergence.

**Entry Price**: 227.70 PLN — reference price (current close); no new market or limit entry at this level

**Stop Loss**: 215.00 PLN — hard invalidation below June swing-low zone (~1.5× ATR from tactical support)

**Take Profit 1**: 237.00 PLN — first scale-out at 10 EMA reclaim

**Take Profit 2**: 241.00 PLN — final target at 50 SMA / VWMA resistance cluster

**Position Sizing**: 0% of equity for new positions; existing holders risk no more than 1R (~12.7 PLN per share from 227.7 to 215) on any residual exposure — halve normal size given ATR at 3.4% of price

**Invalidation**: A daily close below 222 PLN on volume above 500K kills the bounce setup and opens 217 PLN, requiring exit of any tactical long and maintaining Underweight until franchise revenue is confirmed for two consecutive quarters or price reclaims 248 PLN on expanding volume.

FINAL TRANSACTION PROPOSAL: **HOLD**

---

# Aggressive Risk

## Cycle 1

Look, I get why the cautious voices in this room are fixated on the chart — price below every moving average, MACD still negative, that ugly Aug 25 volume spike. I hear the conservative case loud and clear: "the tape is rejecting the re-rating, forward P/E is 143x, the franchise line is one quarter old, don't catch a falling knife." Fine. But that's exactly where aggressive money gets paid: when the narrative and the numbers have already shifted and the price hasn't caught up yet.

CD Projekt RED just delivered a 44% earnings beat. Not a rounding error — 142.9 million PLN net profit against 99.3 million consensus. Gross margins around 93%. Record cash flows. Bloomberg analysts unanimously bullish. Polish financial media at a 7/10 composite sentiment score, calling this a franchise monetization inflection, not a one-off licensing windfall. Nine hundred thousand wishlists on Songs of the Past. Two secret projects with hundreds of millions of PLN behind them. A fortress balance sheet with 973 million PLN in liquid assets and a 6.0 current ratio. This is not a distressed asset grinding lower — this is a quality compounder being offered at 227 PLN, sitting 6% above its Bollinger lower band at 222, with a 52-week range that stretches to 297.

The trader's Hold call is the right aggressive stance, and here's why it's actually bolder than the Research Manager's Underweight framing suggests. Underweight implies you want less exposure because the risk-reward is poor. Hold says: the fundamental story just got materially better, the sentiment inflection is real, and selling into post-earnings technical weakness is how you donate your edge to someone willing to buy the franchise cash engine at a discount. Existing holders who trim into 240–242 resistance are playing defense on a stock that just proved its earnings power can double year-over-year. That's leaving money on the table if the franchise line repeats in Q3.

Let me dismantle the bear case piece by piece.

**"The stock made new lows post-earnings — the market is rejecting the bull thesis."** No. Post-earnings digestion on a high-beta GPW name is standard operating procedure, not a verdict. Sentiment data explicitly notes that earnings "reversed stock-market disappointment" from the Witcher 4 delay narrative. The market report itself assigns only 55% probability to bearish continuation and gives 30% to an oversold bounce and 15% to a full trend reversal. You're telling me to hide from a coin flip where one side has a +44% fundamental catalyst and unanimous analyst support? That's not risk management, that's paralysis.

**"Forward EPS of 1.59 PLN implies a 73% earnings cliff — valuation is insane."** That forward estimate was built before Q2 blew the doors off. Consensus is always the last to move. Q2 revenue of 244 million PLN is up 28% quarter-over-quarter. The franchise and licensing line didn't just pad margins — it reframed the entire business model from "wait until Witcher 4 in 2028" to "recurring franchise economics bridging the gap now." At 227 PLN, you're paying for optionality on Witcher 4, Cyberpunk 2, and two undisclosed projects while the company prints 93% gross margins and generates 163 million PLN in operating cash flow in Q1 alone. The forward P/E scare is a rearview mirror. Trailing P/E has already compressed from 47 to ~34 as EPS caught up. The market is repricing — it just hasn't finished.

**"Technical distribution, no RSI divergence, below all MAs — stay away."** Aggressive traders don't wait for the 50 SMA reclaim at 241 to buy and then congratulate themselves for being "safe." They position at statistical support where the risk-reward is asymmetric. The trader's plan — confirmed two-session hold at 222–225 with a stop at 215 — is a 1.5:1 to 2:1 setup to the 50 SMA cluster with defined invalidation. RSI at 33.4 is one tick from oversold territory. MACD histogram stabilized on the latest bar (−3.17 vs −3.22 prior session) — momentum is entrenched but not accelerating. This is the setup zone, not the danger zone. ATR at 7.74 PLN means you size for volatility, not run from it.

**"Franchise revenue is unproven — one quarter doesn't make a thesis."** True, and that's exactly why the upside is still on the table. If Q3 confirms the franchise line, consensus revises up, broker targets get raised, and you're buying after the crowd. The aggressive play is to position ahead of confirmation when the evidence is already strong: earnings beat magnitude, analyst unanimity, 900K wishlists as a demand proxy, and a board dividend recommendation sitting in the wings with record cash flows behind it. Near-term catalysts are stacked — Songs of the Past launch, potential dividend surprise at AGM, Q3 segment disclosure. The conservative stance of "wait for two quarters of franchise confirmation" means buying 30–40% higher after the thesis is consensus.

**"Negative TTM free cash flow and rising intangibles are red flags."** That's deliberate investment, not distress. The company is spending 181 million PLN quarterly on capex and capitalizing 1.47 billion PLN in game IP because they're building the next revenue cycle. Negative FCF during a development phase for a studio with 973 million PLN in liquid assets and minimal debt is a feature, not a bug. Insiders aren't selling. The balance sheet is the floor — and at 227 PLN you're paying 6.9x book with equity growing quarter over quarter.

Here's what the conservative and neutral analysts will miss if they get their way: the asymmetry. Downside to the June swing low zone at 217 is roughly 4.7% from current price. Upside to the 50 SMA at 241.5 is 6.1%. To the prior August recovery high near 268, it's 17.7%. Beta of 0.39 means this move is idiosyncratic — you're not paying for macro beta, you're paying for a Polish gaming franchise with global IP at a moment when the fundamental narrative just inflected. The Witcher 4 2028 delay is old news that Q2 already offset. Bears clinging to duration risk are fighting the last war.

The trader's Hold with 0% new allocation at 227 is disciplined aggression — don't chase mid-air, but don't capitulate either. Existing holders who maintain exposure with a 1R stop at 215 are positioned for the bounce the market report itself assigns 30% probability, with a fundamental backstop that the bear case can't replicate. The real aggressive move isn't buying blindly at 227; it's refusing to Underweight a stock that just proved it can print 143 million PLN in a single quarter while the entire analyst community lines up behind it, and being ready to deploy full tactical size the moment 222–225 holds with RSI divergence.

If you're waiting for price to reclaim 248 on expanding volume before you believe the story, you'll be reading about CD Projekt's re-rating in Bankier headlines while paying 15–20% more. The high-reward path isn't reckless — it's recognizing that the intersection of a 44% earnings beat, unanimous analyst sentiment, imminent DLC catalyst, and technical proximity to Bollinger support is a rare entry window that cautious logic is designed to miss. Hold the line. Load the tactical entry at support. Let the franchise cash engine do the work.

---

# Neutral Risk

# Neutral Risk Analysis: CDR.WA

**Ticker:** CDR.WA | **Date:** 2026-09-04 | **Reference price:** 227.7 PLN

## Cycle 1

Look, I get why this stock is pulling people in opposite directions right now — and honestly, that's exactly why the trader's Hold call lands in the right neighborhood, even if I'd sharpen a few edges on it.

On one side, the bulls have real ammunition. A 44% earnings beat isn't noise — 142.9 million PLN net profit against 99.3 million consensus is a genuine surprise, and the franchise/licensing line emerging as a profit driver is exactly the kind of structural shift that can change how you model this company. Polish media is uniformly positive, Bloomberg analysts are unanimously bullish, 900K wishlists on Pieśni przeszłości, record cash flows — the sentiment report scores this at 7/10 bullish, and the news flow backs it up. If you're only reading fundamentals and headlines, you'd wonder why anyone isn't buying hand over fist.

But here's where the aggressive view overreaches: the tape is telling a completely different story. Price made new local lows after the earnings beat. That's not a minor detail — that's the market voting that the re-rating narrative isn't sticking. We're below the 10 EMA at 236.9, the 50 SMA at 241.5, and the 200 SMA at 246.4. MACD histogram is deeply negative. Aug 25 saw 2.1 million shares trade — six times average volume — and price has fallen another 6% since. The market report's 55% bearish-continuation base case isn't pessimism for its own sake; it's what happens when distribution volume meets a stock walking the Bollinger lower band at 222 PLN. Anyone arguing "earnings beat means buy now" is ignoring that the single most important price discovery mechanism — the actual price — is rejecting their thesis.

Now flip it. The conservative camp will point to forward P/E near 143x, forward EPS of 1.59 PLN versus TTM 5.84 PLN implying a 73% earnings cliff, negative TTM free cash flow of 243 million PLN, and rising intangibles at 1.47 billion PLN. They'll say this is a quality balance sheet trading at an optionality premium with no margin of safety, and they're not wrong on the numbers. But going full defensive — treating this like a Sell — ignores the fortress balance sheet that actually matters here. 973 million PLN in liquid assets, current ratio of 6.0, debt-to-equity under 1.0. This isn't a company facing distress; it's a company in a deliberate investment phase between game cycles. The balance sheet alone puts a floor under the worst-case scenario that pure technical bears sometimes underweight.

Where I land is between these poles, and it's closer to what the trader and Research Manager already outlined than either extreme would like.

For new capital: zero exposure at 227.7 PLN is correct. Not because CDR is a bad company — it's arguably one of the highest-quality gaming studios in Europe — but because the risk/reward at this price in this technical regime is asymmetric to the downside. You're paying ~39x trailing earnings on a stock making lower lows, with forward earnings expected to collapse 73%, and no RSI bullish divergence yet. Chasing the earnings headline here is how people buy the top of a relief rally that dies at 240–242 PLN resistance. The aggressive mistake is conflating "good quarter" with "good entry point."

For existing holders: Hold with defined risk is the moderate path, not a cop-out. The Q2 beat and franchise narrative give you a reason to stay, not a reason to add. The fortress balance sheet means you don't need to panic-sell into a downtrend — but you absolutely should have a plan to trim into the 240–242 zone if we get a relief bounce, because that's where the 50 SMA, VWMA, and volume shelf from the Aug 25 gap all converge. That's not being bearish; that's being disciplined about taking profits into resistance while the fundamental story sorts itself out over the next two quarters.

The tactical entry framework the trader laid out — two-session hold at 222–225 PLN with RSI divergence, stop at 215, targets at 237 and 241 — is actually well-calibrated for a neutral stance. It respects the technical reality (don't catch falling knives) while leaving a door open for a defined-risk bounce trade if the Bollinger lower band holds. The 1.5:1 risk/reward to the 50 SMA that the market report calculated is marginal, which is exactly why position sizing should be halved and why this is tactical, not strategic. You're not betting on a franchise re-rating at 222 PLN; you're betting on mean-reversion in a stock that's approaching statistical oversold without being there yet.

The one thing I'd push back on slightly: the invalidation at a daily close below 222 on volume above 500K is sound, but don't treat 217 PLN as a guaranteed bounce zone just because it's the June swing low. If franchise revenue turns out to be a one-quarter licensing windfall rather than a recurring line — and the news report itself flags this as hypothesis, not thesis — the next leg down could test book value territory around 35 PLN per share on a fundamental basis, even if the technical floor is higher. The neutral view doesn't ignore that tail risk; it sizes for it.

What would shift me toward a more constructive stance? Two consecutive quarters of franchise/licensing revenue growth, confirmed in segment disclosures. Price reclaiming 248 PLN on expanding volume. RSI divergence at 222–225 with a two-session hold. Any of those would move the needle from Underweight toward Neutral or even modest Overweight for a swing horizon.

What would shift me more defensive? Another volume spike on a down day above 500K shares. Q3 revenue falling back below 200 million PLN. Further Witcher 4 timeline slippage. Insider selling after this earnings window.

Bottom line: the trader's Hold is the right center of gravity. Don't let the earnings beat seduce you into aggressive new longs at 227 PLN when price is rejecting the narrative. Don't let the technical downtrend scare existing holders into a fire sale of a balance-sheet fortress with real near-term catalysts (DLC launch, dividend decision, analyst upgrades still in flight). Manage what you have with tight risk, wait for either technical confirmation at support or fundamental confirmation over two quarters, and keep powder dry. That's not exciting — but in a stock with 3.4% daily ATR and a 55% bearish-continuation probability, boring is a feature, not a bug.

---

# Conservative Risk

## Cycle 1

Look, I understand why the Aggressive desk is going to wave that Q2 beat in our faces — 142.9 million PLN net profit, +44% above consensus, Bloomberg analysts practically singing in unison, 900,000 wishlists on Pieśni przeszłości. That's a seductive story. And the Neutral desk will probably tell us to be patient, wait for a two-session hold at 222–225 with RSI divergence, size it down, put a stop at 215, and call it disciplined. I hear all of that. But from where I sit, protecting capital means asking a harder question: what is the market actually doing with this good news?

The tape answered that question already. CDR.WA closed at 227.7 PLN on September 4 — a new local low, down 2.2% on the session, sitting below the 10 EMA at 236.9, the 50 SMA at 241.5, and the 200 SMA at 246.4. Post-earnings, price made lower lows. That is not a market rewarding a re-rating; that is distribution. The Aug 25 capitulation on 2.1 million shares — six times average volume — is the defining event of this leg, and every comparable volume spike in this lookback preceded extended declines or prolonged basing. The market report assigns a 55% probability to bearish continuation toward 222 PLN and then 217. I don't think that's pessimism. I think that's pattern recognition.

The Aggressive case will lean on sentiment at 7/10 and the franchise/licensing narrative as a structural shift. Fine — but the Research Manager and the news desk both flag the same caveat I care about: one quarter does not confirm a recurring business model. Q2's franchise line is a hypothesis until Q3 and Q4 prove it. Meanwhile, forward EPS of 1.59 PLN against TTM 5.84 PLN implies a 73% earnings cliff the market has already priced in, leaving forward P/E near 143x. That is not a margin of safety. That is paying for hope. TTM free cash flow is negative 243 million PLN. Rising intangibles at 1.47 billion PLN are assets on paper and impairment risk in reality if Witcher 4 slips again or secret projects underwhelm. The fortress balance sheet — 973 million in liquid assets, 6.0 current ratio — is exactly why this isn't a Sell. It's also why aggressive analysts confuse solvency with upside. You don't go bankrupt holding CDR; you can absolutely lose 15–20% waiting for a narrative that the chart keeps rejecting.

On technicals, the Neutral bounce plan sounds reasonable until you look at the details. RSI is 33.4 — weak, but not oversold. No bullish divergence. Room to fall further before the market reaches capitulation-level readings that historically produced reliable mean-reversion in this name. MACD histogram is still deeply negative. Price walks the lower Bollinger band; bounces in this configuration have been shallow sell-the-rally events, not accumulation. ATR at 7.74 PLN — 3.4% of price — means your "tight" 215 stop is barely 1.5× daily noise. In a whipsaw environment, that's not risk management; that's hoping.

The trader's Hold with zero percent new equity deployment is directionally right, but I'd push further on existing exposure. "Hold with defined risk" still leaves capital tied to a stock making new lows below every major average while positive media sentiment is front-loaded and event-driven — exactly the sell-the-news setup sentiment analysis itself warns about. If you own this, the Research Manager's trim-into-240–242 guidance isn't optional caution; it's the minimum defensive action. Don't wait for a relief rally that may never reach the 50 SMA cluster. Reduce into any bounce toward 237, because that's the 10 EMA — first hurdle in a confirmed downtrend, not a gift.

I expect the Aggressive rebuttal: "You're ignoring the earnings inflection and analyst unanimity." I'm not ignoring it — I'm weighing it against what price does when unanimity peaks. Unanimous bullishness after a 44% beat, while the stock prints lower lows, is often the sentiment high-water mark, not the starting gun. I expect Neutral to say "but the risk/reward from 223 to 241 is 1.5:1." Marginal setups with 1.5:1 in a 55% bearish base case, without RSI divergence, below a volume-weighted average at 241, are how portfolios bleed slowly.

My adjustment to the trader's plan: maintain Hold for classification purposes, but treat existing holders as Underweight in practice — trim toward 50% of current exposure on any move above 232, exit residual tactical positions on a daily close below 222 on volume above 500K, and do not initiate any new long until price reclaims 248 PLN on expanding volume *and* franchise revenue is confirmed for two consecutive quarters. Until then, cash is a position. In this tape, it's the safest one we have.

---

# Portfolio Manager Decision

**Rating**: Hold

**Executive Summary**: CDR.WA earns a Hold — maintain existing exposure with defined risk, deploy zero new capital at 227.7 PLN. Q2's 44% earnings beat and franchise narrative are real, but post-earnings lower lows below all major moving averages show the tape rejecting the re-rating. Existing holders keep positions with a 215 PLN stop and trim into 237–241 PLN on any relief rally; tactical new longs remain deferred until 222–225 PLN holds for two sessions with RSI divergence.

**Investment Thesis**: CD Projekt delivered a genuine Q2 inflection — 142.9 mln PLN net profit, ~93% gross margins, record cash flows, and unanimous analyst support — but one quarter of franchise/licensing revenue does not yet confirm a structural re-rating. Forward EPS of 1.59 PLN versus TTM 5.84 PLN leaves valuation stretched at ~143x forward P/E with no margin of safety, while Aug 25 distribution volume (2.1M shares) and a 55% bearish-continuation base case keep technical risk elevated. The fortress balance sheet (973M PLN liquid assets, 6.0 current ratio) rules out Sell, and the earnings catalyst rules out aggressive new buying at current levels. Aggressive and neutral risk views align with the trader: do not capitulate into a downtrend, but do not chase a headline the market is fading. Conservative trimming above 232 PLN is prudent risk management within a Hold framework, not a full exit.

**Entry Price**: <227.70 PLN>

**Stop Loss**: <215.00 PLN>

**Take Profit 1**: <237.00 PLN>

**Take Profit 2**: <241.00 PLN>

**Time Horizon**: days–weeks

**Invalidation**: A daily close below 222 PLN on volume above 500K invalidates the bounce setup, opens 217 PLN, and requires exit of any tactical long while maintaining zero new allocation until franchise revenue confirms for two consecutive quarters or price reclaims 248 PLN on expanding volume.

