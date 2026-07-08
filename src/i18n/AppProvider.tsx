import { useCallback, useEffect, useState, type ReactNode } from 'react';
import { AppContext, type Theme } from './context';
import { translations, type Lang } from './translations';

const LANG_KEY = 'ac-lang';
const THEME_KEY = 'ac-theme';
const VALID_LANGS: Lang[] = ['es', 'en', 'pt'];

function getInitialLang(): Lang {
  try {
    const stored = localStorage.getItem(LANG_KEY) as Lang | null;
    if (stored && VALID_LANGS.includes(stored)) return stored;
    const nav = navigator.language.slice(0, 2).toLowerCase();
    if (nav === 'en') return 'en';
    if (nav === 'pt') return 'pt';
  } catch { /* localStorage unavailable */ }
  return 'es';
}

function getInitialTheme(): Theme {
  try {
    const stored = localStorage.getItem(THEME_KEY) as Theme | null;
    if (stored === 'light' || stored === 'dark') return stored;
  } catch { /* localStorage unavailable */ }
  return 'dark';
}

export function AppProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(getInitialLang);
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.lang = lang;
    try { localStorage.setItem(LANG_KEY, lang); } catch { /* ignore */ }
  }, [lang]);

  useEffect(() => {
    document.documentElement.classList.toggle('light', theme === 'light');
    try { localStorage.setItem(THEME_KEY, theme); } catch { /* ignore */ }
  }, [theme]);

  const setLang = useCallback((next: Lang) => setLangState(next), []);
  const toggleTheme = useCallback(
    () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark')),
    [],
  );

  return (
    <AppContext.Provider value={{ lang, setLang, theme, toggleTheme, t: translations[lang] }}>
      {children}
    </AppContext.Provider>
  );
}
