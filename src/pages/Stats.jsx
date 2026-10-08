import { useEffect, useState } from 'react';
import './Stats.css';

export default function Stats() {
  const [err, setErr] = useState('');
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch('https://api.mahakumbh.net/stats/json')
      .then((r) => {
        if (!r.ok) throw new Error('HTTP ' + r.status);
        return r.json();
      })
      .then(setData)
      .catch((e) => setErr(e.message));
  }, []);

  if (err) return <div className="no-data">Error loading stats: {err}</div>;

  if (!data) return <div className="no-data">Loading...</div>;

  return (
    <div className="stats-page">
      <h1>Bot & Website Stats</h1>

      <div className="metrics-grid">
        <div className="metric-card">
          <h3>Total Bot Conversations</h3>
          <p>{data.total_conversations}</p>
        </div>
        <div className="metric-card">
          <h3>Free Messages</h3>
          <p>{data.free_conversations}</p>
        </div>
        <div className="metric-card">
          <h3>Total Visits</h3>
          <p>{data.total_visits}</p>
        </div>
      </div>

      {/* Sections */}
      <div className="stats-section">
        <h2 className="section-title">Conversations by Language</h2>
        <div className="metric-list">
        {data.by_lang.map((x) => (
          <div className="metric-item" key={x.lang}>
            <span>{x.lang.toUpperCase()}</span>
            <div className="metric-bar">
              <div
                className="metric-fill"
                style={{
                  width: `${Math.round(
                    (x.count / data.by_lang[0].count) * 100
                  )}%`,
                }}
              />
            </div>
            <span className="metric-count">{x.count}</span>
          </div>
        ))}
        </div>
      </div>

      <div className="stats-section">
        <h2 className="section-title">Top Intents</h2>
      <div className="metric-list">
        {data.by_intent.map((x) => (
          <div className="metric-item" key={x.intent}>
            <span>{x.intent}</span>
            <div className="metric-bar">
              <div
                className="metric-fill"
                style={{
                  width: `${Math.round(
                    (x.count / data.by_intent[0].count) * 100
                  )}%`,
                }}
              />
            </div>
            <span className="metric-count">{x.count}</span>
          </div>
        ))}
      </div>

      <h2 className="section-title">Most Repeated User Messages</h2>
      <div className="metric-list">
        {(data.top_messages || []).map((x, i) => (
          <div className="metric-item" key={i}>
            <span>{x.text}</span>
            <div className="metric-bar">
              <div
                className="metric-fill"
                style={{
                  width: `${Math.round(
                    (x.count / ((data.top_messages[0] || {}).count || 1)) * 100
                  )}%`,
                }}
              />
            </div>
            <span className="metric-count">{x.count}</span>
          </div>
        ))}
      </div>


      </div>
    </div>
  );
}
