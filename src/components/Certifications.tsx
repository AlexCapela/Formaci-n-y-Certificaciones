import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useApp } from '../i18n/useApp';

// Datos fijos de los certificados. El título y la categoría se traducen (i18n).
// Para añadir uno nuevo: copiar la imagen a /public (nombre sin espacios ni
// acentos), añadir una entrada aquí y otra en `certs.items` de cada idioma.
const certMeta = [
  { src: "/cert-power-bi.png", institution: "SENAI São Paulo", hours: "32h", period: "2025" },
  { src: "/cert-ciencia-datos-google-cloud.png", institution: "SENAI São Paulo", hours: "20h", period: "2025" },
  { src: "/cert-banco-de-datos.png", institution: "SENAI São Paulo", hours: "120h", period: "2025" },
  { src: "/cert-python-ciberseguridad.png", institution: "SENAI São Paulo", hours: "40h", period: "2025" },
  { src: "/cert-logica-programacion.png", institution: "SENAI São Paulo", hours: "14h", period: "2025" },
  { src: "/cert-sql-xperiun.png", institution: "Xperiun", hours: "2h", period: "2025" },
];

export function Certifications() {
  const { t } = useApp();
  const gallery = certMeta.map((c, i) => ({ ...c, ...t.certs.items[i] }));
  const [selected, setSelected] = useState<typeof gallery[number] | null>(null);

  useEffect(() => {
    if (!selected) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelected(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [selected]);

  return (
    <section id="formacion" className="py-24 md:py-32 px-6 border-t border-zinc-900 bg-black">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">

        <div className="flex flex-col gap-6 max-w-3xl">
          <div className="flex items-center gap-4">
            <span className="h-px w-12 bg-acid"></span>
            <span className="font-mono text-acid text-xs tracking-widest uppercase">{t.certs.eyebrow}</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display uppercase tracking-tighter leading-none">
            {t.certs.title1}<br/>{t.certs.title2}
          </h2>
          <p className="text-zinc-400 font-sans text-lg md:text-xl leading-relaxed">
            {t.certs.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-900 border border-zinc-900">
          {gallery.map((item, index) => (
            <motion.button
              key={item.src}
              type="button"
              onClick={() => setSelected(item)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              className="bg-black hover:bg-zinc-950 transition-colors group flex flex-col text-left cursor-pointer"
            >
              <div className="aspect-[3/4] overflow-hidden bg-zinc-950 p-4">
                <img
                  src={item.src}
                  alt={`${t.certs.certLabel}: ${item.title} — ${item.institution}`}
                  loading="lazy"
                  className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6 flex flex-col gap-2 border-t border-zinc-900">
                <div className="flex items-center justify-between gap-4">
                  <span className="font-mono text-acid text-[10px] tracking-widest uppercase">
                    {item.category}
                  </span>
                  <span className="font-mono text-zinc-600 text-[10px] tracking-widest">
                    {item.hours} · {item.period}
                  </span>
                </div>
                <h3 className="font-sans font-bold text-base leading-snug">
                  {item.title}
                </h3>
                <p className="font-mono text-zinc-500 text-[11px] tracking-widest uppercase">
                  {item.institution}
                </p>
              </div>
            </motion.button>
          ))}
        </div>

      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
          >
            <button
              type="button"
              onClick={() => setSelected(null)}
              aria-label={t.certs.close}
              className="absolute top-6 right-6 p-3 border border-zinc-700 hover:border-acid hover:text-acid transition-colors"
            >
              <X size={20} />
            </button>
            <motion.figure
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-5xl w-full flex flex-col gap-4 cursor-default"
            >
              <img
                src={selected.src}
                alt={selected.title}
                className="w-full max-h-[75vh] object-contain border border-zinc-800"
              />
              <figcaption className="flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-4">
                <span className="font-sans font-bold text-lg">{selected.title}</span>
                <span className="font-mono text-acid text-xs tracking-widest uppercase">
                  {selected.institution} · {selected.hours} · {selected.period}
                </span>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
