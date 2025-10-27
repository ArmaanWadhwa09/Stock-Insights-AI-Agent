const balanceGrowthRaw = $('Balance Sheet Growth').first().json;
const balanceGrowth = Array.isArray(balanceGrowthRaw) ? balanceGrowthRaw[0] : (balanceGrowthRaw[0] || balanceGrowthRaw);

const growthSummary = `Total Assets Growth: ${balanceGrowth.growthTotalAssets ? (balanceGrowth.growthTotalAssets * 100).toFixed(2) : 'N/A'}%
Cash Growth: ${balanceGrowth.growthCashAndCashEquivalents ? (balanceGrowth.growthCashAndCashEquivalents * 100).toFixed(2) : 'N/A'}%
Debt Growth: ${balanceGrowth.growthTotalDebt ? (balanceGrowth.growthTotalDebt * 100).toFixed(2) : 'N/A'}%
Current Assets Growth: ${balanceGrowth.growthTotalCurrentAssets ? (balanceGrowth.growthTotalCurrentAssets * 100).toFixed(2) : 'N/A'}%
Inventory Growth: ${balanceGrowth.growthInventory ? (balanceGrowth.growthInventory * 100).toFixed(2) : 'N/A'}%`;

return [{
  json: {
    growthSummary: growthSummary
  }
}];
