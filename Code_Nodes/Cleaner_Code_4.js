const ticker = $('Respond to Webhook').first().json.body.ticker;
const sentimentRaw = $('Sentiment').first().json;
const sentiment = sentimentRaw.data || sentimentRaw;

const sentimentSummary = sentiment && typeof sentiment === 'object' && Object.keys(sentiment).length > 0 
  ? Object.entries(sentiment).slice(-7).map(([date, data]) => {
      const tickerSentiment = data[ticker] || {};
      return `${date}: Positive: ${tickerSentiment.Positive || 0}, Negative: ${tickerSentiment.Negative || 0}, Score: ${tickerSentiment.sentiment_score || 'N/A'}`;
    }).join('\n')
  : 'No sentiment data available';

return [{
  json: {
    sentimentSummary: sentimentSummary
  }
}];
