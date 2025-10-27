const ticker = $('Respond to Webhook').first().json.body.ticker;

const growthSummary = $input.all()[0].json.growthSummary;
const insiderSummary = $input.all()[1].json.insiderSummary;
const ratiosSummary = $input.all()[2].json.ratiosSummary;
const sentimentSummary = $input.all()[3].json.sentimentSummary;
const yahooSummary = $input.all()[4].json.yahooSummary;
const cashFlowSummary = $input.all()[5].json.cashFlowSummary;
const profileSummary = $input.all()[6].json.profileSummary;
const balanceSheetSummary = $input.all()[7].json.balanceSheetSummary;

const finalStructuredData = `
STOCK ANALYSIS REQUEST: ${ticker}

=== COMPANY OVERVIEW ===
${profileSummary}

=== CURRENT MARKET DATA ===
${yahooSummary}

=== FINANCIAL HEALTH ===
${ratiosSummary}

=== BALANCE SHEET (Latest Annual) ===
${balanceSheetSummary}

=== CASH FLOW (Latest Annual) ===
${cashFlowSummary}

=== GROWTH TRENDS ===
${growthSummary}

=== INSIDER TRADING (Recent Activity) ===
${insiderSummary}

=== MARKET SENTIMENT (Last 7 Days) ===
${sentimentSummary}
`;

return [{
  json: {
    ticker: ticker,
    structuredData: finalStructuredData
  }
}];
