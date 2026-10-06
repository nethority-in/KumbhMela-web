import { Link } from 'react-router-dom';
import { useI18n } from '../i18n/I18nProvider.jsx';

export default function NotFound() {
  const { t } = useI18n();
  return (
    <section className="section page-title on-dark">
      <div className="wrap">
        <p className="kicker">404</p>
        <h1 className="lede">{t.days.title}</h1>
        <p className="prose">{t.days.error}</p>
        <p style={{ marginTop: '1.6rem' }}>
          <Link className="btn btn--primary" to="/">{t.nav.home}</Link>
        </p>
      </div>
    </section>
  );
}
