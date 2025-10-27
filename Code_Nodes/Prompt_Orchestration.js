const ticker = $input.first().json.ticker
const structuredData = $input.first().json.structuredData

const llmPrompt = `You are a financial analyst AI agent specialized in equity research. Your task is to analyze the following multi-source data for ${ticker} and generate a comprehensive stock insight report.

ANALYSIS FRAMEWORK:
Follow this reasoning chain step-by-step:

1. DATA SYNTHESIS: Review all provided data sources (market data, financials, sentiment, insider activity)
2. FINANCIAL HEALTH ASSESSMENT: Evaluate profitability, liquidity, debt levels, and cash generation
3. VALUATION ANALYSIS: Assess if the stock is overvalued, fairly valued, or undervalued based on ratios
4. GROWTH TRAJECTORY: Analyze growth trends in assets, revenue indicators, and operational metrics
5. RISK IDENTIFICATION: Identify key risks from debt levels, insider selling, negative sentiment, or market conditions
6. OPPORTUNITY IDENTIFICATION: Highlight positive signals like strong cash flow, insider buying, positive sentiment
7. SENTIMENT SYNTHESIS: Aggregate market sentiment from news and social sources
8. FINAL RECOMMENDATION: Provide a clear investment thesis with key drivers and risks

---
RAW DATA FOR ANALYSIS:
${structuredData}
---

OUTPUT REQUIREMENTS:

Generate a structured report with the following sections:

## EXECUTIVE SUMMARY
[2-3 sentence overview of investment thesis - bullish, bearish, or neutral with primary reasoning]

## FINANCIAL HEALTH SCORE
Overall Score: [X/10]
- Profitability: [Assessment]
- Liquidity: [Assessment]
- Leverage: [Assessment]
- Cash Generation: [Assessment]

## VALUATION ASSESSMENT
Current Valuation: [Overvalued/Fairly Valued/Undervalued]
- P/E Analysis: [Interpretation relative to industry/historical average]
- P/S Analysis: [Interpretation]
- P/B Analysis: [Interpretation]
Key Insight: [1-2 sentences]

## GROWTH ANALYSIS
Growth Momentum: [Strong/Moderate/Weak/Negative]
- Asset Growth Trend: [Analysis]
- Cash Position Trend: [Analysis]
- Debt Trend: [Analysis]
Key Insight: [1-2 sentences]

## SENTIMENT ANALYSIS
Overall Sentiment: [Positive/Neutral/Negative]
- Market Sentiment Score: [Interpretation of recent sentiment trends]
- Insider Activity Signal: [Bullish/Bearish based on buying/selling]
- News Sentiment: [If available]
Key Insight: [1-2 sentences]

## KEY DRIVERS (Top 3 Bullish Factors)
1. [Driver with supporting data point]
2. [Driver with supporting data point]
3. [Driver with supporting data point]

## KEY RISKS (Top 3 Bearish Factors)
1. [Risk with supporting data point]
2. [Risk with supporting data point]
3. [Risk with supporting data point]

## INVESTMENT THESIS
[3-4 sentences summarizing the complete picture, suitable risk level, and what type of investor this suits]

## CRITICAL METRICS TO MONITOR
- [Metric 1 and why it matters]
- [Metric 2 and why it matters]
- [Metric 3 and why it matters]

---
REASONING CHAIN INSTRUCTIONS:
- Use QUANTITATIVE data to support every claim
- Compare metrics to healthy benchmarks (e.g., Current Ratio > 1.0 is healthy, Debt-to-Equity < 2.0 is manageable)
- Synthesize MULTIPLE data sources - don't analyze in isolation
- Identify CONTRADICTIONS (e.g., strong cash flow but high insider selling)
- Be OBJECTIVE - highlight both positives and negatives
- Use SPECIFIC numbers from the data provided
- Tag sentiment as POSITIVE, NEGATIVE, or NEUTRAL with clear reasoning

Generate the analysis now:`;

return [{
  json: {
    prompt: llmPrompt,
    ticker: ticker
  }
}];
