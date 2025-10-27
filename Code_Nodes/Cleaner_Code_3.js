const ratiosRaw = $('Financial Ratios').first().json;
const ratios = Array.isArray(ratiosRaw) ? ratiosRaw[0] : (ratiosRaw[0] || ratiosRaw);

const ratiosSummary = `Profit Margins:
- Gross Margin: ${ratios.grossProfitMarginTTM ? (ratios.grossProfitMarginTTM * 100).toFixed(2) : 'N/A'}%
- Net Margin: ${ratios.netProfitMarginTTM ? (ratios.netProfitMarginTTM * 100).toFixed(2) : 'N/A'}%
- Operating Margin: ${ratios.operatingProfitMarginTTM ? (ratios.operatingProfitMarginTTM * 100).toFixed(2) : 'N/A'}%

Valuation Ratios:
- P/E Ratio: ${ratios.priceToEarningsRatioTTM ? ratios.priceToEarningsRatioTTM.toFixed(2) : 'N/A'}
- Price-to-Sales: ${ratios.priceToSalesRatioTTM ? ratios.priceToSalesRatioTTM.toFixed(2) : 'N/A'}
- Price-to-Book: ${ratios.priceToBookRatioTTM ? ratios.priceToBookRatioTTM.toFixed(2) : 'N/A'}

Liquidity & Debt:
- Current Ratio: ${ratios.currentRatioTTM ? ratios.currentRatioTTM.toFixed(2) : 'N/A'}
- Debt-to-Equity: ${ratios.debtToEquityRatioTTM ? ratios.debtToEquityRatioTTM.toFixed(2) : 'N/A'}
- Cash Ratio: ${ratios.cashRatioTTM ? ratios.cashRatioTTM.toFixed(2) : 'N/A'}`;

return [{
  json: {
    ratiosSummary: ratiosSummary
  }
}];
