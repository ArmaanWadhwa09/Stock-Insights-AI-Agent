const profileRaw = $('Company Profile').first().json;
const profile = Array.isArray(profileRaw) ? profileRaw[0] : (profileRaw[0] || profileRaw);

const profileSummary = `Company: ${profile.companyName || 'N/A'}
Industry: ${profile.industry || 'N/A'}
Market Cap: $${profile.marketCap ? (profile.marketCap / 1e9).toFixed(2) : 'N/A'}B
Daily Change: ${profile.changePercentage ? profile.changePercentage.toFixed(2) : 'N/A'}%
Average Volume: ${profile.averageVolume ? profile.averageVolume.toLocaleString() : 'N/A'}
Description: ${profile.description || 'N/A'}`;

return [{
  json: {
    profileSummary: profileSummary,
    companyName: profile.companyName,
    industry: profile.industry,
    averageVolume: profile.averageVolume
  }
}];
