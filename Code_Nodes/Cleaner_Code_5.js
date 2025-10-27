const yahooRaw = $('Yahoo').first().json;
const yahooData = yahooRaw.chart?.result?.[0]?.meta || {};

const yahooSummary = `Current Price: $${yahooData.regularMarketPrice || 'N/A'}
52-Week Range: ${yahooData.fiftyTwoWeekLow || 'N/A'} - ${yahooData.fiftyTwoWeekHigh || 'N/A'}
Day High: $${yahooData.regularMarketDayHigh || 'N/A'}
Day Low: $${yahooData.regularMarketDayLow || 'N/A'}
Volume Today: ${yahooData.regularMarketVolume ? yahooData.regularMarketVolume.toLocaleString() : 'N/A'}`;

return [{
  json: {
    yahooSummary: yahooSummary,
    currentPrice: yahooData.regularMarketPrice,
    volume: yahooData.regularMarketVolume
  }
}];
