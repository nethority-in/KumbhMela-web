import { useMemo, useState } from 'react';
import { useI18n } from '../i18n/I18nProvider.jsx';
import { useCalendar } from '../data/CalendarProvider.jsx';
import DayCard from '../components/DayCard.jsx';
import { MONTHS } from '../lib/format.js';
import { localiseNumber } from '../lib/format.js';

const BANDS = ['very_high', 'high', 'moderate', 'lower'];
const KINDS = ['amrit_snan', 'parva_snan_major', 'auspicious_minor'];

export default function Days() {
  const { t, lang } = useI18n();
  const { days, status } = useCalendar();
  const [q, setQ] = useState('');
  const [band, setBand] = useState('');
  const [kind, setKind] = useState('');

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return days.filter((d) => {
      if (band && d.bandKey !== band) return false;
      if (kind && d.classification !== kind) return false;
      if (!needle) return true;
      const months = (MONTHS[lang] || MONTHS.en).join(' ').toLowerCase();
      const p = d.panchang || {};
      const hay = [
        d.iso,
        months,
        p.tithi, p.nakshatra, p.masa, p.weekday,
      ].filter(Boolean).join(' ').toLowerCase();
      return hay.includes(needle);
    });
  }, [days, q, band, kind, lang]);

  if (status === 'loading') {
    return (
      <section className="section section--light on-light page-title">
        <div className="wrap"><p className="prose">{t.days.loading}</p></div>
      </section>
    );
  }

  return (
    <section className="section section--light on-light page-title">
      <div className="wrap">
        <p className="kicker">{t.days.kicker}</p>
        <h1 className="lede">{t.days.title}</h1>
        <p className="prose">{t.days.intro}</p>

        <div className="toolbar">
          <label className="sr-only" htmlFor="q">{t.days.search}</label>
          <input
            id="q"
            type="search"
            value={q}
            placeholder={t.days.searchPlaceholder}
            onChange={(e) => setQ(e.target.value)}
          />

          <label className="sr-only" htmlFor="band">{t.days.filterBand}</label>
          <select id="band" value={band} onChange={(e) => setBand(e.target.value)}>
            <option value="">{t.days.filterBand}</option>
            {BANDS.map((b) => (
              <option key={b} value={b}>{t.bands[b]}</option>
            ))}
          </select>

          <label className="sr-only" htmlFor="kind">{t.days.filterKind}</label>
          <select id="kind" value={kind} onChange={(e) => setKind(e.target.value)}>
            <option value="">{t.days.filterKind}</option>
            {KINDS.map((k) => (
              <option key={k} value={k}>
                {k === 'amrit_snan' ? t.days.royalBath
                  : k === 'parva_snan_major' ? t.days.majorBathing
                    : t.days.auspicious}
              </option>
            ))}
          </select>

          <span className="count">
            {localiseNumber(filtered.length, lang)} {t.days.of} {localiseNumber(days.length, lang)} {t.days.days}
          </span>

          {(q || band || kind) && (
            <button
              type="button"
              className="clear"
              onClick={() => { setQ(''); setBand(''); setKind(''); }}
            >
              {t.days.clear}
            </button>
          )}
        </div>

        {filtered.length === 0 ? (
          <p className="empty">{t.days.noResults}</p>
        ) : (
          <div className="day-grid">
            {filtered.map((d) => <DayCard key={d.iso} day={d} />)}
          </div>
        )}

        <p className="callout">{t.estimate.note}</p>
      </div>
    </section>
  );
}
