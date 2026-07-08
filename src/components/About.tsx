import { motion } from 'framer-motion';
import { useApp } from '../i18n/useApp';

export function About() {
  const { t } = useApp();
  return (
    <section id="about" className="py-24 md:py-32 px-6 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32 items-center">

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative aspect-[3/4] brutal-border overflow-hidden group"
        >
          <img
            src="/about_mockup.png"
            alt={t.about.imgAlt}
            className="object-cover w-full h-full img-brutal"
          />
          <div className="absolute inset-0 border-[10px] border-black/20 pointer-events-none" />
        </motion.div>

        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-4">
            <span className="h-px w-12 bg-acid"></span>
            <span className="font-mono text-acid text-xs tracking-widest uppercase">{t.about.badge}</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-display uppercase tracking-tighter leading-none">
            {t.about.title1} <br/> <span className="text-zinc-500">{t.about.title2}</span>
          </h2>

          <div className="space-y-6 text-zinc-300 font-sans text-lg leading-relaxed">
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
            <p>{t.about.p3}</p>
            <p className="text-white border-l-2 border-acid pl-6 italic">
              {t.about.quote}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
