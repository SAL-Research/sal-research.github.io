const API = 'https://www.googleapis.com/youtube/v3';

async function getJson(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`YouTube API ${res.status}: ${await res.text()}`);
  return res.json();
}

// Picks the public upload with the best score: interaction rate (smoothed by
// prior_views) weighted by an exponential decay on age (half_life_days).
// Returns { id, title } or null when no video can be picked.
async function pickFeaturedVideo(config = {}) {
  const key = process.env.YOUTUBE_API_KEY;
  if (!key || !config.channel_id) {
    console.log('No YouTube API key or channel; using fallback playlist.');
    return null;
  }

  try {
    const exclude = new Set(config.exclude || []);
    const halfLife = config.half_life_days || 180;
    const priorViews = config.prior_views || 100;
    const uploads = 'UU' + config.channel_id.slice(2);

    const list = await getJson(
      `${API}/playlistItems?part=contentDetails&maxResults=50&playlistId=${uploads}&key=${key}`);
    const ids = list.items.map(i => i.contentDetails.videoId).filter(id => !exclude.has(id));
    if (!ids.length) return null;

    const videos = await getJson(
      `${API}/videos?part=snippet,statistics&id=${ids.join(',')}&key=${key}`);

    let best = null;
    for (const v of videos.items) {
      const s = v.statistics || {};
      const views = Number(s.viewCount || 0);
      const interactions = Number(s.likeCount || 0) + Number(s.commentCount || 0);
      const rate = interactions / (views + priorViews);
      const ageDays = (Date.now() - new Date(v.snippet.publishedAt)) / 864e5;
      const score = rate * Math.pow(0.5, ageDays / halfLife);
      if (!best || score > best.score) best = { id: v.id, title: v.snippet.title, score };
    }
    return best && { id: best.id, title: best.title };
  } catch (err) {
    console.warn(`Featured video pick failed: ${err.message}`);
    return null;
  }
}

module.exports = { pickFeaturedVideo };
