const cashFlowRaw = $('Cash Flow').first().json;
const cashFlow = Array.isArray(cashFlowRaw) ? cashFlowRaw[0] : (cashFlowRaw[0] || cashFlowRaw);

const cashFlowSummary = `Operating Cash Flow: $${cashFlow.netCashProvidedByOperatingActivities ? (cashFlow.netCashProvidedByOperatingActivities / 1e9).toFixed(2) : 'N/A'}B
Free Cash Flow: $${(cashFlow.netCashProvidedByOperatingActivities && cashFlow.investmentsInPropertyPlantAndEquipment) ? ((cashFlow.netCashProvidedByOperatingActivities + cashFlow.investmentsInPropertyPlantAndEquipment) / 1e9).toFixed(2) : 'N/A'}B
Capital Expenditures: $${cashFlow.investmentsInPropertyPlantAndEquipment ? (Math.abs(cashFlow.investmentsInPropertyPlantAndEquipment) / 1e9).toFixed(2) : 'N/A'}B
Net Income: $${cashFlow.netIncome ? (cashFlow.netIncome / 1e9).toFixed(2) : 'N/A'}B
Stock-Based Compensation: $${cashFlow.stockBasedCompensation ? (cashFlow.stockBasedCompensation / 1e9).toFixed(2) : 'N/A'}B`;

return [{
  json: {
    cashFlowSummary: cashFlowSummary
  }
}];
