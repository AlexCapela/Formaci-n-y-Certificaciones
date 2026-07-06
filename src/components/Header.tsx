import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Download, X } from 'lucide-react';

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#about", label: "Sobre mí" },
  { href: "#trayectoria", label: "Trayectoria" },
  { href: "#projects", label: "Proyectos" },
  { href: "#expertise", label: "Habilidades" },
  { href: "#formacion", label: "Formación" },
  { href: "#contact", label: "Contacto" }
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 w-full z-50 mix-blend-difference px-6 py-6 flex justify-between items-center gap-6">
        <div className="flex flex-col">
          <span className="font-display font-bold text-xl tracking-tighter uppercase leading-none">
            Alex Capela
          </span>
          <span className="font-mono text-[10px] text-zinc-400 tracking-widest uppercase mt-1">
            Portfolio Profesional
          </span>
        </div>
        <nav className="hidden lg:flex gap-8 font-mono text-xs tracking-widest uppercase items-center" aria-label="Navegación principal">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-acid transition-colors">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <a
            href="/Alex-Capela-CV-Espanol.pdf"
            download
            className="hidden md:inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest border border-white px-4 py-2 rounded-sm hover:bg-white hover:text-black transition-colors"
          >
            <Download size={14} />
            Descargar CV
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="lg:hidden font-mono text-xs uppercase tracking-widest border border-white px-4 py-2 rounded-sm"
          >
            Menú
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
            className="fixed inset-0 z-[60] bg-black/98 flex flex-col lg:hidden"
          >
            <div className="flex justify-between items-center px-6 py-6">
              <span className="font-display font-bold text-xl tracking-tighter uppercase">
                Alex Capela
              </span>
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                aria-label="Cerrar menú"
                className="p-3 border border-zinc-700 rounded-sm hover:border-acid hover:text-acid transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            <nav className="flex-1 flex flex-col justify-center px-6 gap-2" aria-label="Navegación móvil">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="font-display text-4xl font-bold uppercase tracking-tighter py-3 border-b border-zinc-900 hover:text-acid transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            <div className="px-6 pb-10">
              <a
                href="/Alex-Capela-CV-Espanol.pdf"
                download
                onClick={() => setMenuOpen(false)}
                className="brutal-btn-primary inline-flex items-center gap-2 w-full justify-center"
              >
                <Download size={16} />
                Descargar CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
