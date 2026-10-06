import { useI18n } from '../i18n/I18nProvider.jsx';

export default function Methodology() {
  const { t } = useI18n();
  return (
    <section className="section section--light on-light page-title">
      <div className="wrap">
        <p className="kicker">{t.methodology.kicker}</p>
        <h1 className="lede">{t.methodology.title}</h1>
        <p className="prose">{t.methodology.intro}</p>

        <h2 style={{ marginTop: '2.6rem', fontFamily: 'var(--serif)', fontSize: '1.4rem' }}>
          {t.methodology.bandsTitle}
        </h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">{t.methodology.bandsTitle}</th>
              <th scope="col">0–100</th>
              <th scope="col"> </th>
            </tr>
          </thead>
          <tbody>
            {t.methodology.bands.map((b) => (
              <tr key={b.band}>
                <td>
                  <span className={`meter ${b.band === 'very_high' || b.band === 'high' ? 'level-high'
                    : b.band === 'moderate' ? 'level-medium' : 'level-low'}`}>
                    <span className="dots" aria-hidden="true"><i /><i /><i /></span>
                    <span>{t.bands[b.band]}</span>
                  </span>
                </td>
                <td>{b.range}</td>
                <td>{b.meaning}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2 style={{ marginTop: '2.6rem', fontFamily: 'var(--serif)', fontSize: '1.4rem' }}>
          {t.methodology.weightsTitle}
        </h2>
        <dl className="defs">
          {t.methodology.weights.map((w) => (
            <div key={w.name}>
              <dt>{w.name}</dt>
              <dd>{w.why}</dd>
            </div>
          ))}
        </dl>

        <h2 style={{ marginTop: '2.6rem', fontFamily: 'var(--serif)', fontSize: '1.4rem' }}>
          {t.methodology.honestTitle}
        </h2>
        <ul className="defs" style={{ listStyle: 'none' }}>
          {t.methodology.honest.map((h, i) => (
            <li key={i} style={{ color: 'var(--muted-light)', fontSize: '0.95rem', paddingTop: '0.8rem', borderTop: '1px solid var(--line-light)' }}>
              {h}
            </li>
          ))}
        </ul>

        <p className="callout">{t.methodology.source}</p>
      </div>
    </section>
  );
}
