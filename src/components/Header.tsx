import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Download, X, Sun, Moon } from 'lucide-react';
import { useApp } from '../i18n/useApp';
import { LANGS, type Lang, type Translation } from '../i18n/translations';

const navItems: { href: string; key: keyof Translation['nav'] }[] = [
  { href: '#inicio', key: 'home' },
  { href: '#about', key: 'about' },
  { href: '#trayectoria', key: 'trajectory' },
  { href: '#projects', key: 'projects' },
  { href: '#expertise', key: 'skills' },
  { href: '#formacion', key: 'education' },
  { href: '#contact', key: 'contact' },
];

function LangSwitch({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  const { t } = useApp();
  return (
    <div
      role="group"
      aria-label={t.controls.language}
      className="flex items-center border border-zinc-700 rounded-sm overflow-hidden"
    >
      {LANGS.map(({ code, label }) => (
        <button
          key={code}
          type="button"
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          className={`px-2.5 py-1.5 font-mono text-[10px] tracking-widest transition-colors ${
            lang === code ? 'bg-acid text-black' : 'text-zinc-400 hover:text-acid'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

function ThemeToggle() {
  const { theme, toggleTheme, t } = useApp();
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme === 'dark' ? t.controls.themeToLight : t.controls.themeToDark}
      className="p-2 border border-zinc-700 rounded-sm text-zinc-300 hover:border-acid hover:text-acid transition-colors"
    >
      {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}

export function Header() {
  const { t, lang, setLang } = useApp();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 w-full z-50 px-6 py-5 flex justify-between items-center gap-4 backdrop-blur-sm bg-black/40 border-b border-zinc-900/60">
        <div className="flex flex-col">
          <span className="font-display font-bold text-lg md:text-xl tracking-tighter uppercase leading-none">
            Alex Capela
          </span>
          <span className="font-mono text-[10px] text-zinc-400 tracking-widest uppercase mt-1">
            {t.brand.tagline}
          </span>
        </div>

        <nav className="hidden xl:flex gap-7 font-mono text-xs tracking-widest uppercase items-center" aria-label={t.brand.tagline}>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-zinc-300 hover:text-acid transition-colors">
              {t.nav[item.key]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <LangSwitch lang={lang} setLang={setLang} />
          </div>
          <ThemeToggle />
          <a
            href="/Alex-Capela-CV-Espanol.pdf"
            download
            className="hidden lg:inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest border border-zinc-700 px-4 py-2 rounded-sm text-zinc-200 hover:border-acid hover:text-acid transition-colors"
          >
            <Download size={14} />
            {t.controls.cv}
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="xl:hidden font-mono text-xs uppercase tracking-widest border border-zinc-700 px-4 py-2 rounded-sm text-zinc-200"
          >
            {t.controls.menu}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] bg-black flex flex-col xl:hidden"
          >
            <div className="flex justify-between items-center px-6 py-5">
              <span className="font-display font-bold text-xl tracking-tighter uppercase">
                Alex Capela
              </span>
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                aria-label={t.controls.closeMenu}
                className="p-3 border border-zinc-700 rounded-sm text-zinc-300 hover:border-acid hover:text-acid transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            <nav className="flex-1 flex flex-col justify-center px-6 gap-1" aria-label={t.brand.tagline}>
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tighter py-3 border-b border-zinc-900 hover:text-acid transition-colors"
                >
                  {t.nav[item.key]}
                </motion.a>
              ))}
            </nav>

            <div className="px-6 pb-10 flex flex-col gap-5">
              <LangSwitch lang={lang} setLang={setLang} />
              <a
                href="/Alex-Capela-CV-Espanol.pdf"
                download
                onClick={() => setMenuOpen(false)}
                className="brutal-btn-primary inline-flex items-center gap-2 w-full justify-center"
              >
                <Download size={16} />
                {t.controls.cv}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
