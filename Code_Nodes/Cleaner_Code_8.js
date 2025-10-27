const balanceSheetRaw = $('Balance Sheet').first().json;
const balanceSheet = Array.isArray(balanceSheetRaw) ? balanceSheetRaw[0] : (balanceSheetRaw[0] || balanceSheetRaw);

const balanceSheetSummary = `Cash & Equivalents: $${balanceSheet.cashAndCashEquivalents ? (balanceSheet.cashAndCashEquivalents / 1e9).toFixed(2) : 'N/A'}B
Total Assets: $${balanceSheet.totalAssets ? (balanceSheet.totalAssets / 1e9).toFixed(2) : 'N/A'}B
Total Debt: $${(balanceSheet.shortTermDebt && balanceSheet.longTermDebt) ? ((balanceSheet.shortTermDebt + balanceSheet.longTermDebt) / 1e9).toFixed(2) : 'N/A'}B
Short-Term Debt: $${balanceSheet.shortTermDebt ? (balanceSheet.shortTermDebt / 1e9).toFixed(2) : 'N/A'}B
Long-Term Debt: $${balanceSheet.longTermDebt ? (balanceSheet.longTermDebt / 1e9).toFixed(2) : 'N/A'}B
Shareholder Equity: $${balanceSheet.totalStockholdersEquity ? (balanceSheet.totalStockholdersEquity / 1e9).toFixed(2) : 'N/A'}B
Current Assets: $${balanceSheet.totalCurrentAssets ? (balanceSheet.totalCurrentAssets / 1e9).toFixed(2) : 'N/A'}B
Current Liabilities: $${balanceSheet.totalCurrentLiabilities ? (balanceSheet.totalCurrentLiabilities / 1e9).toFixed(2) : 'N/A'}B`;

return [{
  json: {
    balanceSheetSummary: balanceSheetSummary
  }
}];
