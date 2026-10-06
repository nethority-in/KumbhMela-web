import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { dicts, LANGS } from './copy.js';

const I18nContext = createContext(null);
const STORAGE_KEY = 'kumbh.lang';

/**
 * `t` is the resolved copy tree for the current language, so components read
 * `t.days.title` directly rather than threading a lookup through every call.
 *
 * `pick` is for the occasional inline translation that is not worth a named key.
 */
export function I18nProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    if (typeof window === 'undefined') return 'en';
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored && dicts[stored] ? stored : 'en';
  });

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* private browsing: the choice simply will not persist */
    }
  }, [lang]);

  const pick = useCallback(
    (obj) => (obj && typeof obj === 'object' ? (obj[lang] ?? obj.en ?? '') : (obj ?? '')),
    [lang],
  );

  const value = useMemo(
    () => ({ lang, setLang: setLangState, t: dicts[lang], pick, langs: LANGS }),
    [lang, pick],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used inside I18nProvider');
  return ctx;
}
