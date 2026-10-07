import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const API_BASE = 'https://api.mahakumbh.net';

function StatTile({ label, value, sub }) {
  return (
    <div className="stat-tile">
      <h3>{label}</h3>
      <p>{value}</p>
      {sub && <span className="stat-sub">{sub}</span>}
    </div>
  );
}

export default function Stats() {
  const [data, setData] = useState(null);
  const [err, setErr] = useState('');

  useEffect(() => {
    fetch(`${API_BASE}/stats/json`)
      .then((r) => {
        if (!r.ok) throw new Error('HTTP ' + r.status);
        return r.json();
      })
      .then(setData)
      .catch((e) => setErr(e.message));
  }, []);

  if (err) return <div className="stats-error">Error loading stats: {err}</div>;
  if (!data) return <div className="stats-loading">Loading...</div>;

  return (
    <div className="stats-page">
      <h2>Bot + Website Stats</h2>
      <div className="stats-grid">
        <StatTile label="Total bot conversations" value={data.total_conversations} />
        <StatTile label="Free conversations" value={data.free_conversations} />
        <StatTile label="Total page views" value={data.total_visits} />
      </div>

      <h3>Conversations by language</h3>
      <ul className="stats-list">
        {data.by_lang.map((x) => (
          <li key={x.lang}><strong>{x.lang.toUpperCase()}</strong> — {x.count}</li>
        ))}
      </ul>

      <h3>Top intents</h3>
      <ul className="stats-list">
        {data.by_intent.map((x) => (
          <li key={x.intent}><strong>{x.intent}</strong> — {x.count}</li>
        ))}
      </ul>

      <h3>Daily conversations</h3>
      <table className="stats-table">
        <thead><tr><th>Date</th><th>Messages</th></tr></thead>
        <tbody>
          {data.by_day.map((x) => (
            <tr key={x.day}><td>{x.day}</td><td>{x.messages}</td></tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
