import { useEffect, useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { useI18n } from '../i18n/I18nProvider.jsx';
import { CalendarProvider, useCalendar } from '../data/CalendarProvider.jsx';

const LINKS = [
  { to: '/', key: 'home' },
  { to: '/days', key: 'days' },
  { to: '/choose', key: 'choose' },
  { to: '/waters', key: 'waters' },
  { to: '/practical', key: 'practical' },
  { to: '/methodology', key: 'methodology' },
  { to: '/stats', key: 'stats' },
];

function Header() {
  const { t, lang, setLang, langs } = useI18n();
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header className="site-head">
      <NavLink to="/" className="brand">
        Simhastha <b>2027</b>
      </NavLink>

      <button
        type="button"
        className="menu-btn"
        aria-expanded={open}
        aria-controls="primary-nav"
        onClick={() => setOpen((v) => !v)}
      >
        {open ? '×' : '≡'}
      </button>

      <nav id="primary-nav" className={`nav ${open ? 'is-open' : ''}`} aria-label={t.nav.home}>
        {LINKS.map((l) => (
          <NavLink key={l.to} to={l.to} end={l.to === '/'} className={({ isActive }) => (isActive ? 'is-active' : '')}>
            {t.nav[l.key]}
          </NavLink>
        ))}
        <div className="lang-switch" role="group" aria-label={t.nav.lang}>
          {langs.map((l) => (
            <button
              key={l.code}
              type="button"
              className="lang-btn"
              aria-pressed={lang === l.code}
              onClick={() => setLang(l.code)}
            >
              {l.label}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
}

/** Read once, so the render stays pure. */
function CopyrightYear() {
  const [year] = useState(() => new Date().getFullYear());
  return <>{year}</>;
}

function Footer() {
  const { t } = useI18n();
  return (
    <footer className="site-foot">
      <p className="blessing">{t.closing.blessing}</p>
      <p>{t.footer.about}</p>
      <p className="method-note">{t.footer.methodNote}</p>
      <p style={{ marginTop: '0.8rem' }}>
        <CopyrightYear /> · {t.footer.verify}
      </p>
    </footer>
  );
}

function Shell() {
  const { t } = useI18n();
  const { status } = useCalendar();

  return (
    <>
      <a className="skip" href="#main">{t.common.skip}</a>
      <Header />
      <main id="main">
        {status === 'error' && (
          <div className="wrap" style={{ paddingTop: '1rem' }}>
            <p className="callout">{t.days.error}</p>
          </div>
        )}
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default function Layout() {
  return (
    <CalendarProvider>
      <Shell />
    </CalendarProvider>
  );
}
