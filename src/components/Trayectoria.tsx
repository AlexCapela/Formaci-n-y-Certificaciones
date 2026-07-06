import { motion } from 'framer-motion';

const stages = [
  {
    index: "01",
    title: "Barbero Profesional",
    desc: "Inicio de una carrera de más de 16 años en el sector de la belleza, construyendo disciplina, atención al cliente y excelencia técnica."
  },
  {
    index: "02",
    title: "Propietario de Barbería",
    desc: "Gestión de negocio propio: equipo, finanzas, procesos y crecimiento. La visión de negocio que hoy aplico a la tecnología nació aquí."
  },
  {
    index: "03",
    title: "Profesor y Formador",
    desc: "Instructor de cientos de alumnos en formación presencial y grabación de cursos profesionales en estudio. Liderazgo, comunicación y enseñanza."
  },
  {
    index: "04",
    title: "Web Designer",
    desc: "Desde 2019: sitios web, e-commerce, identidad visual y landing pages. La puerta de entrada al mundo digital."
  },
  {
    index: "05",
    title: "Analista de Datos",
    desc: "Formación y proyectos con Power BI, SQL, Python y Google Cloud. Dashboards e indicadores que convierten datos en decisiones."
  },
  {
    index: "06",
    title: "Desarrollador de IA",
    desc: "Hoy: automatización con IA generativa, agentes inteligentes y desarrollo de plataformas SaaS como fundador de Euro Data Solutions."
  }
];

export function Trayectoria() {
  return (
    <section id="trayectoria" className="py-24 md:py-32 px-6 border-t border-zinc-900 bg-black">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">

        <div className="flex flex-col gap-6 max-w-3xl">
          <div className="flex items-center gap-4">
            <span className="h-px w-12 bg-acid"></span>
            <span className="font-mono text-acid text-xs tracking-widest uppercase">Evolución profesional</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display uppercase tracking-tighter leading-none">
            Trayectoria<br/>Profesional
          </h2>
          <p className="text-zinc-300 font-sans text-lg leading-relaxed">
            No empecé en la tecnología: construí una carrera sólida, desarrollé nuevas competencias y hoy entrego proyectos reales. Cada etapa sumó una habilidad que aplico en mi trabajo actual.
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
                alt="Alex Capela como formador: clases presenciales, graduaciones de alumnos y grabación de cursos en estudio"
                loading="lazy"
                className="w-full h-auto img-brutal"
              />
            </div>
            <figcaption className="flex flex-wrap gap-2">
              <span className="font-mono text-[11px] tracking-widest uppercase text-zinc-400 border border-zinc-800 px-3 py-1.5 rounded-sm">
                Formación presencial de barberos
              </span>
              <span className="font-mono text-[11px] tracking-widest uppercase text-zinc-400 border border-zinc-800 px-3 py-1.5 rounded-sm">
                Cientos de alumnos formados
              </span>
              <span className="font-mono text-[11px] tracking-widest uppercase text-zinc-400 border border-zinc-800 px-3 py-1.5 rounded-sm">
                +7 años como instructor
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
