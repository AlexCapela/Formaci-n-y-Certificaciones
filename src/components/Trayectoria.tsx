import { motion } from 'framer-motion';
import { useApp } from '../i18n/useApp';

export function Trayectoria() {
  const { t } = useApp();
  const stages = t.trajectory.stages.map((s, i) => ({
    index: String(i + 1).padStart(2, '0'),
    ...s,
  }));
  return (
    <section id="trayectoria" className="py-24 md:py-32 px-6 border-t border-zinc-900 bg-black">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">

        <div className="flex flex-col gap-6 max-w-3xl">
          <div className="flex items-center gap-4">
            <span className="h-px w-12 bg-acid"></span>
            <span className="font-mono text-acid text-xs tracking-widest uppercase">{t.trajectory.eyebrow}</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display uppercase tracking-tighter leading-none">
            {t.trajectory.title1}<br/>{t.trajectory.title2}
          </h2>
          <p className="text-zinc-300 font-sans text-lg leading-relaxed">
            {t.trajectory.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          <motion.figure
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:sticky lg:top-28 flex flex-col gap-4"
          >
            <div className="relative overflow-hidden rounded-sm border border-zinc-800">
              <img
                src="/trayectoria-formador.png"
                alt={t.trajectory.imgAlt}
                loading="lazy"
                className="w-full h-auto img-brutal"
              />
            </div>
            <figcaption className="flex flex-wrap gap-2">
              <span className="font-mono text-[11px] tracking-widest uppercase text-zinc-400 border border-zinc-800 px-3 py-1.5 rounded-sm">
                {t.trajectory.tag1}
              </span>
              <span className="font-mono text-[11px] tracking-widest uppercase text-zinc-400 border border-zinc-800 px-3 py-1.5 rounded-sm">
                {t.trajectory.tag2}
              </span>
              <span className="font-mono text-[11px] tracking-widest uppercase text-zinc-400 border border-zinc-800 px-3 py-1.5 rounded-sm">
                {t.trajectory.tag3}
              </span>
            </figcaption>
          </motion.figure>

          <ol className="flex flex-col">
            {stages.map((stage, index) => (
              <motion.li
                key={stage.index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="relative pl-10 pb-10 last:pb-0 border-l border-zinc-800 last:border-transparent group"
              >
                <span className="absolute -left-[9px] top-1 h-[17px] w-[17px] rounded-full border-2 border-zinc-700 bg-black group-hover:border-acid transition-colors" />
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="font-mono text-acid text-xs tracking-widest">{stage.index}</span>
                  <h3 className="text-xl md:text-2xl font-display font-bold uppercase tracking-tight">
                    {stage.title}
                  </h3>
                </div>
                <p className="text-zinc-400 font-sans text-base leading-relaxed">
                  {stage.desc}
                </p>
              </motion.li>
            ))}
          </ol>

        </div>

      </div>
    </section>
  );
}
