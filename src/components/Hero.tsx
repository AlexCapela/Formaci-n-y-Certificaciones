import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-28 pb-16 px-6 overflow-hidden bg-grid">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-black" />

      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-20 items-center relative z-10">
        <div className="flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-mono text-acid text-xs md:text-sm tracking-widest uppercase"
          >
            Alex Capela // Portfolio Profesional
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-display font-bold leading-[0.92] tracking-tighter uppercase"
          >
            Transformando<br/>
            <span className="text-transparent border-text">Datos en</span><br/>
            Resultados
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="font-mono text-zinc-300 text-xs md:text-sm tracking-widest uppercase"
          >
            Data Analyst · AI Automation · Web Designer · SaaS Builder
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-acid opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-acid"></span>
            </span>
            <span className="font-mono text-white text-xs tracking-widest uppercase">
              Disponible para oportunidades en España y remoto
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-6 flex flex-wrap gap-4"
          >
            <a href="#contact" className="brutal-btn-primary">
              Contactar
            </a>
            <a
              href="/Alex-Capela-CV-Espanol.pdf"
              download
              className="brutal-btn inline-flex items-center gap-2"
            >
              <Download size={16} />
              Descargar CV
            </a>
            <a href="#about" className="brutal-btn">
              Mi Trayectoria
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="hidden lg:block relative"
        >
          <div className="absolute -inset-3 border border-acid/25 rounded-sm translate-x-4 translate-y-4 pointer-events-none" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-zinc-800">
            <img
              src="/alex-capela-retrato.png"
              alt="Alex Capela — retrato profesional"
              className="object-cover object-top w-full h-full img-brutal"
            />
          </div>
        </motion.div>
      </div>

      <style>{`
        .border-text {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.5);
          color: transparent;
        }
      `}</style>
    </section>
  );
}
