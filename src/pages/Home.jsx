import { Link } from 'react-router-dom';
import { useI18n } from '../i18n/I18nProvider.jsx';
import { useCalendar } from '../data/CalendarProvider.jsx';
import { isRoyal } from '../data/calendar.js';
import { formatDate } from '../lib/format.js';
import HeroScene from '../components/HeroScene.jsx';
import Countdown from '../components/Countdown.jsx';
import BandMeter from '../components/BandMeter.jsx';

export default function Home() {
  const { t, lang } = useI18n();
  const { days } = useCalendar();
  const royals = days.filter(isRoyal).slice().sort((a, b) => a.date - b.date);
  const first = royals[0];

  const EVENTS = [
    { key: 'opening', iso: '2026-10-31' },
    { key: 'first' },
    { key: 'second' },
    { key: 'third' },
    { key: 'conclusion', iso: '2028-07-24' },
  ];

  return (
    <>
      <section className="hero">
        <HeroScene />
        <div className="hero-inner">
          <h1>
            <span className="eyebrow">{t.hero.eyebrow}</span>
            <span className="poem">
              {t.hero.line1}
              <br />
              <span className="soft">{t.hero.line2}</span>
            </span>
          </h1>
          <p className="intro">{t.hero.intro}</p>
          <div className="hero-actions">
            <Link className="btn btn--primary" to="/days">{t.hero.cta}</Link>
            <Link className="btn btn--ghost" to="/practical">{t.hero.ctaSecondary}</Link>
          </div>
          {days.length > 0 && <Countdown days={days} t={t} />}
          <p className="sr-only">{t.hero.independent}</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap on-dark">
          <p className="kicker">{t.keyDates.kicker}</p>
          <h2 className="lede">{t.keyDates.title}</h2>
          <p className="prose">{t.keyDates.intro}</p>

          <ol className="timeline">
            {EVENTS.map((e) => {
              const day = e.key === 'first' || e.key === 'second' || e.key === 'third'
                ? royals[['first', 'second', 'third'].indexOf(e.key)]
                : null;
              const iso = day ? day.iso : e.iso;
              const isPeak = Boolean(day);
              return (
                <li className={`event ${isPeak ? 'peak' : ''}`} key={e.key}>
                  <p className="what">{t.keyDates[e.key]}</p>
                  <p className="when">{formatDate(new Date(`${iso}T12:00:00+05:30`), lang)}</p>
                  <p className="ev-note">{t.keyDates[`${e.key}Note`]}</p>
                  <div className="ev-meta">
                    {day && <BandMeter day={day} dark />}
                    <span className="pill">{t.keyDates.expected}</span>
                  </div>
                </li>
              );
            })}
          </ol>

          {!first && days.length === 0 && (
            <p className="callout">{t.days.error}</p>
          )}
        </div>
      </section>

      <section className="closing">
        <h2 className="final">{t.closing.line}</h2>
        <p className="disclaimer"><strong>{t.meta.title}.</strong> {t.closing.disclaimer}</p>
        <p className="fineprint">{t.closing.fineprint}</p>
      </section>
    </>
  );
}
