import { useEffect, useState } from 'react';
import './Stats.css';

export default function Stats() {
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
