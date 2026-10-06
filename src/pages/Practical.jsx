import { useI18n } from '../i18n/I18nProvider.jsx';

export default function Practical() {
  const { t } = useI18n();
  return (
    <section className="section section--light on-light page-title">
      <div className="wrap">
        <p className="kicker">{t.practical.kicker}</p>
        <h1 className="lede">{t.practical.title}</h1>

        <div className="cards">
          <article className="info">
            <h3>{t.nav.practical} · {t.practical.rail}</h3>
            <div className="row"><b>{t.practical.rail}</b><span>{t.practical.railText}</span></div>
            <div className="row"><b>{t.practical.road}</b><span>{t.practical.roadText}</span></div>
            <div className="row"><b>{t.practical.air}</b><span>{t.practical.airText}</span></div>
          </article>

          <article className="info">
            <h3>{t.practical.crowdTitle}</h3>
            <p>{t.practical.crowdText}</p>
            <p style={{ marginTop: '0.7rem' }}>{t.practical.calmText}</p>
          </article>

          <article className="info">
            <h3>{t.practical.safetyTitle}</h3>
            <ul>
              {t.practical.safety.map((s, i) => <li key={i}>{s}</li>)}
            </ul>
          </article>

          <article className="info">
            <h3>{t.practical.carryTitle}</h3>
            <ul className="checklist">
              {t.practical.carry.map((c) => <li key={c}>{c}</li>)}
            </ul>
          </article>

          <article className="info gentle">
            <h3>{t.practical.calmTitle}</h3>
            <p>{t.practical.calmText}</p>
          </article>
        </div>
      </div>
    </section>
  );
}
