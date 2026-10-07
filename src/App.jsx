import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { I18nProvider, useI18n } from "./i18n/I18nProvider.jsx";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import Days from "./pages/Days.jsx";
import Choose from "./pages/Choose.jsx";
import Waters from "./pages/Waters.jsx";
import Practical from "./pages/Practical.jsx";
import Stats from './pages/Stats.jsx';
import Methodology from "./pages/Methodology.jsx";
import NotFound from "./pages/NotFound.jsx";

function VisitorTracker() {
  const { pathname } = useLocation();
  useEffect(() => {
    fetch('https://api.mahakumbh.net/track-visit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        page: pathname || '/',
        device: /mobile/i.test(navigator.userAgent) ? 'mobile' : 'desktop',
        lang: (navigator.language || 'en').slice(0,2),
      }),
    }).catch(() => {});
  }, [pathname]);
  return null;
}


function Title() {
  const { t } = useI18n();
  const { pathname } = useLocation();
  useEffect(() => {
    document.title = `${t.meta.title} - ${t.nav[pathname === "/" ? "home" : pathname.slice(1)] || t.nav.home}`;
    const m = document.querySelector('meta[name="description"]');
    if (m) m.setAttribute("content", t.meta.description);
  }, [t, pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <I18nProvider>
        <Title />
        <VisitorTracker />
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="days" element={<Days />} />
            <Route path="choose" element={<Choose />} />
            <Route path="waters" element={<Waters />} />
            <Route path="practical" element={<Practical />} />
            <Route path="methodology" element={<Methodology />} />
            <Route path="stats" element={<Stats />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </I18nProvider>
    </BrowserRouter>
  );
}
