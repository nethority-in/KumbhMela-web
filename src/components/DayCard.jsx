import { useI18n } from '../i18n/I18nProvider.jsx';
import { isRoyal } from '../data/calendar.js';
import { formatDate, localiseNumber } from '../lib/format.js';
import BandMeter from './BandMeter.jsx';

export default function DayCard({ day }) {
  const { lang, pick } = useI18n();
  const p = day.panchang || {};
  const kind = isRoyal(day)
    ? pick({ en: 'Royal bath', hi: 'राजा स्नान', mr: 'राजा स्नान' })
    : day.classification === 'parva_snan_major'
      ? pick({ en: 'Major bathing day', hi: 'प्रमुख स्नान दिवस', mr: 'प्रमुख स्नान दिवस' })
      : pick({ en: 'Auspicious day', hi: 'शुभ दिवस', mr: 'शुभ दिवस' });

  const panchang = [p.tithi, p.nakshatra, p.masa, p.weekday].filter(Boolean).join(' · ');

  return (
    <article className={`day-card ${isRoyal(day) ? 'is-peak' : ''}`}>
      <div className="day-top">
        <span className="day-date">{formatDate(day.date, lang)}</span>
        <span className="day-kind">{kind}</span>
      </div>

      <BandMeter day={day} />

      {panchang && <p className="day-meta">{panchang}</p>}
      <p className="day-reason">{day.reason}</p>

      {day.breakdown.length > 0 && (
        <details>
          <summary>{pick({ en: 'How this was calculated', hi: 'यह कैसे निकाला गया', mr: 'हे कसे काढले' })}</summary>
          <ul className="pts">
            {day.breakdown.map((b, i) => (
              <li key={i}>
                <span>{b.reason}</span>
                <b>
                  {b.points > 0 ? '+' : ''}
                  {localiseNumber(b.points, lang)}
                </b>
              </li>
            ))}
          </ul>
        </details>
      )}
    </article>
  );
}
