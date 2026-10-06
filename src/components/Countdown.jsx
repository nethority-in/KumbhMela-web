import { useEffect, useState } from 'react';
import { useI18n } from '../i18n/I18nProvider.jsx';
import { isRoyal } from '../data/calendar.js';
import { formatDate, localiseNumber } from '../lib/format.js';

/**
 * Counts down to the next royal bathing day, taken from the loaded calendar
 * rather than hard-coded, so a data correction moves the countdown with it.
 * Times are anchored to IST so the count is right in any timezone.
 */
export default function Countdown({ days, t }) {
  const { lang } = useI18n();
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const snans = (days || []).filter(isRoyal);
  const next = snans.find((d) => d.date.getTime() > now);

  if (!snans.length) return null;

  if (!next) {
    return (
      <div className="countdown" role="status">
        <p className="cd-label">{t.countdown.label}</p>
        <p className="cd-done">{t.countdown.passed}</p>
        <p className="cd-done" style={{ marginTop: '0.3rem' }}>{t.countdown.passedNote}</p>
      </div>
    );
  }

  const target = new Date(`${next.iso}T04:30:00+05:30`).getTime();
  const diff = Math.max(0, target - now);
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);

  return (
    <div className="countdown">
      <p className="cd-label">{t.countdown.label}</p>
      <p className="cd-target">{formatDate(next.date, lang, { noYear: false })}</p>
      <div className="cd-clock" aria-hidden="true">
        {[
          [d, t.countdown.days],
          [h, t.countdown.hours],
          [m, t.countdown.minutes],
          [s, t.countdown.seconds],
        ].map(([v, label]) => (
          <span className="cd-unit" key={label}>
            <span className="cd-num">{String(localiseNumber(v, lang)).padStart(2, '0')}</span>
            <span className="cd-u">{label}</span>
          </span>
        ))}
      </div>
      <p className="sr-only">
        {localiseNumber(d, lang)} {t.countdown.days}
      </p>
    </div>
  );
}
