import { useI18n } from '../i18n/I18nProvider.jsx';

export default function Waters() {
  const { t } = useI18n();
  return (
    <section className="section section--river on-dark page-title">
      <div className="wrap">
        <p className="kicker">{t.waters.kicker}</p>
        <h1 className="lede">{t.waters.title}</h1>
        <p className="prose">{t.waters.intro}</p>

        <div className="two">
          <article className="place">
            <h3>{t.waters.nashik}</h3>
            <p className="where">{t.waters.nashikWhere}</p>
            <p className="tagline">{t.waters.nashikLine}</p>
            <dl>
              <div className="spec"><dt>{t.waters.distance}</dt><dd>{t.waters.nashikDist}</dd></div>
              <div className="spec"><dt>{t.waters.water}</dt><dd>{t.waters.nashikWater}</dd></div>
            </dl>
          </article>

          <article className="place">
            <h3>{t.waters.trimbak}</h3>
            <p className="where">{t.waters.trimbakWhere}</p>
            <p className="tagline">{t.waters.trimbakLine}</p>
            <dl>
              <div className="spec"><dt>{t.waters.distance}</dt><dd>{t.waters.trimbakDist}</dd></div>
              <div className="spec"><dt>{t.waters.water}</dt><dd>{t.waters.trimbakWater}</dd></div>
            </dl>
          </article>
        </div>

        <p className="caution">
          <b>{t.waters.caution}.</b> {t.waters.cautionText}
        </p>
      </div>
    </section>
  );
}
