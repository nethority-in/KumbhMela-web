import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { I18nProvider, useI18n } from "./i18n/I18nProvider.jsx";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import Days from "./pages/Days.jsx";
import Choose from "./pages/Choose.jsx";
import Waters from "./pages/Waters.jsx";
import Practical from "./pages/Practical.jsx";
import Methodology from "./pages/Methodology.jsx";
import NotFound from "./pages/NotFound.jsx";

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
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="days" element={<Days />} />
            <Route path="choose" element={<Choose />} />
            <Route path="waters" element={<Waters />} />
            <Route path="practical" element={<Practical />} />
            <Route path="methodology" element={<Methodology />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </I18nProvider>
    </BrowserRouter>
  );
}
