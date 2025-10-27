const insiderRaw = $('Insider Trading').first().json;
const insiderTrading = Array.isArray(insiderRaw) ? insiderRaw : (insiderRaw.data || []);

const insiderSummary = Array.isArray(insiderTrading) && insiderTrading.length > 0 
  ? insiderTrading.slice(0, 5).map(trade => 
      `${trade.name || 'Unknown'}: ${trade.transactionCode === 'P' ? 'BOUGHT' : 'SOLD'} ${trade.change ? Math.abs(trade.change) : 'N/A'} shares at $${trade.transactionPrice || 'N/A'} on ${trade.transactionDate || 'N/A'}`
    ).join('\n')
  : 'No recent insider trading data available';

return [{
  json: {
    insiderSummary: insiderSummary
  }
}];
