import { createContext } from 'react';
import type { Lang, Translation } from './translations';

export type Theme = 'dark' | 'light';

export interface AppState {
  lang: Lang;
  setLang: (lang: Lang) => void;
  theme: Theme;
  toggleTheme: () => void;
  t: Translation;
}

export const AppContext = createContext<AppState | null>(null);
