import { useMemo, useState } from 'react';
import { useI18n } from '../i18n/I18nProvider.jsx';
import { useCalendar } from '../data/CalendarProvider.jsx';
import DayCard from '../components/DayCard.jsx';
import { quietest } from '../data/calendar.js';
import { localiseNumber } from '../lib/format.js';

const GOALS = [
  { id: 'procession', key: 'procession' },
  { id: 'quiet', key: 'quiet' },
  { id: 'ritual', key: 'ritual' },
];

function goalsFor(d) {
  const g = [];
  if (d.classification === 'amrit_snan') g.push('procession', 'ritual');
  else if (d.classification === 'parva_snan_major') g.push('ritual');
  else g.push('quiet');
  if (d.classification !== 'amrit_snan' && d.bandKey === 'lower') g.push('quiet', 'ritual');
  return g;
}

export default function Choose() {
  const { t, lang } = useI18n();
  const { days } = useCalendar();
  const [active, setActive] = useState([]);

  const shown = useMemo(() => {
    if (active.length === 0) return quietest(days, 12);
    return days.filter((d) => goalsFor(d).some((g) => active.includes(g))).slice(0, 24);
  }, [days, active]);

  const toggle = (id) =>
    setActive((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));

  return (
    <section className="section section--light on-light page-title">
      <div className="wrap">
        <p className="kicker">{t.choose.kicker}</p>
        <h1 className="lede">{t.choose.title}</h1>
        <p className="prose">{t.choose.intro}</p>

        <div className="chips" role="group" aria-label={t.choose.title}>
          {GOALS.map((g) => (
            <button
              key={g.id}
              type="button"
              className="chip"
              aria-pressed={active.includes(g.id)}
              onClick={() => toggle(g.id)}
            >
              {t.choose[g.key]}
            </button>
          ))}
          {active.length > 0 && (
            <button type="button" className="chip" onClick={() => setActive([])}>
              {t.days.clear}
            </button>
          )}
        </div>

        <p className="sr-only" role="status" aria-live="polite">
          {active.length === 0
            ? `${t.choose.none} ${localiseNumber(shown.length, lang)}`
            : t.choose.result(localiseNumber(shown.length, lang))}
        </p>

        {shown.length === 0 ? (
          <p className="empty">{t.days.noResults}</p>
        ) : (
          <div className="day-grid">
            {shown.map((d) => <DayCard key={d.iso} day={d} />)}
          </div>
        )}

        <p className="callout">{t.estimate.note}</p>
      </div>
    </section>
  );
}
