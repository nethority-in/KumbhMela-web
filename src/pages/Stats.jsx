import { useEffect, useState } from 'react';

const API_BASE = 'https://api.mahakumbh.net';

function StatTile({ label, value }) {
  return (
    <div className="stat-tile">
      <h3>{label}</h3>
      <p>{value}</p>
    </div>
  );
}

function BarList({ items, keyLabel, countLabel }) {
  const max = Math.max(...items.map((x) => x.count), 1);
  return (
    <div className="bar-list">
      {items.map((x) => (
        <div className="bar-row" key={x[keyLabel]}>
          <span className="bar-label">{x[keyLabel]}</span>
          <div className="bar-track">
            <div className="bar-fill" style={{ width: `${Math.round((x.count / max) * 100)}%` }} />
          </div>
          <span className="bar-count">{x.count}</span>
        </div>
      ))}
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
      <BarList items={data.by_lang} keyLabel="lang" />

      <h3>Top intents</h3>
      <BarList items={data.by_intent} keyLabel="intent" />

      <h3>Daily conversations</h3>
      <table className="stats-table">
        <thead>
          <tr><th>Date</th><th>Messages</th></tr>
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
