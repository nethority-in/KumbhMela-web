import { useEffect, useState } from 'react';
import './Stats.css';

export default function Stats() {
  const [data, setData] = useState(null);
  const [err, setErr] = useState('');

  useEffect(() => {
    // Quick test data for now so you can see the UI form
    setData({
      total_conversations: 1240,
      free_conversations: 420,
      total_visits: 3890,
      by_lang: [
        { lang: 'en', count: 720 },
        { lang: 'hi', count: 380 },
        { lang: 'mr', count: 140 },
      ],
      by_intent: [
        { intent: 'quiet', count: 540 },
        { intent: 'crowd', count: 320 },
        { intent: 'dates', count: 230 },
        { intent: 'waters', count: 120 },
        { intent: 'helpline', count: 30 },
      ],
      by_day: [
        { day: '2026-10-05', messages: 120 },
        { day: '2026-10-04', messages: 98 },
        { day: '2026-10-03', messages: 86 },
        { day: '2026-10-02', messages: 74 },
      ],
    });
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

      <h2 className="section-title">Daily Conversations</h2>
      <table className="stats-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Messages</th>
          </tr>
        </thead>
        <tbody>
          {data.by_day.map((x) => (
            <tr key={x.day}>
              <td>{x.day}</td>
              <td>{x.messages}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
