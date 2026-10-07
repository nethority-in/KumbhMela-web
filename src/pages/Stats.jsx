import { useEffect, useState } from 'react';

const API_BASE = 'https://api.mahakumbh.net';

function StatCard({ title, value, color = 'bg-blue-600' }) {
  return (
    <div className={`p-4 rounded-lg shadow text-white ${color}`}>
      <p className="text-sm font-semibold">{title}</p>
      <p className="text-3xl font-bold">{value}</p>
    </div>
  );
}

export default function Stats() {
  const [data, setData] = useState(null);
  const [err, setErr] = useState('');
  const [byLang, setByLang] = useState([]);
  const [byIntent, setByIntent] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE}/stats/json`)
      .then((r) => {
        if (!r.ok) throw new Error('HTTP ' + r.status);
        return r.json();
      })
      .then((d) => {
        setData(d);
        setByLang(d.by_lang);
        setByIntent(d.by_intent);
      })
      .catch((e) => setErr(e.message));
  }, []);

  if (err) return <div className="text-red-500 p-4">Error loading stats: {err}</div>;
  if (!data) return <div className="p-4">Loading...</div>;

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Bot + Website Stats</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <StatCard title="Total bot conversations" value={data.total_conversations} color="bg-purple-600" />
        <StatCard title="Free conversations" value={data.free_conversations} color="bg-green-600" />
        <StatCard title="Total page views" value={data.total_visits} color="bg-blue-600" />
      </div>

      <h2 className="text-xl font-semibold mb-2">Conversations by language</h2>
      <div className="space-y-2 mb-8">
        {byLang.map((x) => (
          <div key={x.lang} className="flex items-center">
            <span className="w-16 text-sm">{x.lang.toUpperCase()}</span>
            <div className="flex-grow bg-gray-700 rounded-full h-4">
              <div className="bg-yellow-400 h-4 rounded-full" style={{ width: `${(x.count / Math.max(...byLang.map((l) => l.count), 1)) * 100}%` }} />
            </div>
            <span className="ml-2 text-sm font-medium w-8">{x.count}</span>
          </div>
        ))}
      </div>

      <h2 className="text-xl font-semibold mb-2">Top intents</h2>
      <div className="space-y-2 mb-8">
        {byIntent.map((x) => (
          <div key={x.intent} className="flex items-center">
            <span className="w-32 text-sm">{x.intent}</span>
            <div className="flex-grow bg-gray-700 rounded-full h-4">
              <div className="bg-teal-400 h-4 rounded-full" style={{ width: `${(x.count / Math.max(...byIntent.map((i) => i.count), 1)) * 100}%` }} />
            </div>
            <span className="ml-2 text-sm font-medium w-8">{x.count}</span>
          </div>
        ))}
      </div>

      <h2 className="text-xl font-semibold mb-2">Daily conversations</h2>
      <table className="w-full border border-gray-700 rounded-lg overflow-hidden">
        <thead className="bg-gray-800">
          <tr>
            <th className="px-4 py-2 text-left">Date</th>
            <th className="px-4 py-2 text-left">Messages</th>
          </tr>
        </thead>
        <tbody>
          {data.by_day.map((x, i) => (
            <tr key={i} className="border-b border-gray-700">
              <td className="px-4 py-2">{x.day}</td>
              <td className="px-4 py-2">{x.messages}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
