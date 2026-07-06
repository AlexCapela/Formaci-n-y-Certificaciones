import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    index: "01",
    name: "Agenda Fácil Barbearia",
    type: "Sistema de Gestión / App",
    desc: "Sistema de reservas para barberías con panel administrativo: gestión de servicios, profesionales, horarios y clientes en una sola plataforma.",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL"]
  },
  {
    index: "02",
    name: "Euro Data Solutions",
    type: "Consultoría de Datos e IA",
    desc: "Proyecto de consultoría y soluciones de datos: business intelligence, automatización e inteligencia artificial aplicadas a negocios reales.",
    tech: ["Power BI", "SQL", "Python", "Google Cloud", "IA Generativa"]
  },
  {
    index: "03",
    name: "MarketFlow AI",
    type: "SaaS / Automatización Comercial",
    desc: "SaaS y agencia de automatización comercial con CRM, gestión de leads, campañas, integraciones e IA aplicada a ventas.",
    tech: ["React", "TypeScript", "CRM", "Integraciones API", "IA Aplicada"]
  },
  {
    index: "04",
    name: "TestFlow AI",
    type: "Plataforma de Testing con IA",
    desc: "Sistema de pruebas automatizadas para sitios web y apps mediante agentes de IA, personas simuladas y análisis de experiencia de usuario.",
    tech: ["Agentes de IA", "TypeScript", "Automatización", "Análisis UX"]
  },
  {
    index: "05",
    name: "Acapella School of AI",
    type: "Plataforma Educacional",
    desc: "Plataforma educativa en desarrollo para enseñar inteligencia artificial, automatización, programación y creación de productos SaaS.",
    tech: ["React", "IA", "SaaS", "EdTech"]
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 px-6 border-t border-zinc-900 bg-zinc-950">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h2 className="text-4xl md:text-6xl font-display uppercase tracking-tighter leading-none mb-4">
              Proyectos<br/>Destacados
            </h2>
            <p className="font-mono text-zinc-400 text-sm tracking-widest uppercase">
              // Portfolio técnico
            </p>
          </div>
        </div>

        <div className="flex flex-col border border-zinc-900 divide-y divide-zinc-900">
          {projects.map((project, index) => (
            <motion.article
              key={project.index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-black hover:bg-zinc-950 transition-colors group p-8 md:p-12 grid grid-cols-1 lg:grid-cols-[auto_1fr_auto] gap-8 items-start"
            >
              <span className="font-display text-2xl md:text-3xl font-bold text-zinc-700 group-hover:text-acid transition-colors select-none">
                {project.index}
              </span>

              <div className="flex flex-col gap-4 max-w-3xl">
                <div>
                  <h3 className="text-2xl md:text-4xl font-display font-bold uppercase tracking-tight leading-tight">
                    {project.name}
                  </h3>
                  <p className="font-mono text-acid text-xs tracking-widest uppercase mt-2">
                    {project.type}
                  </p>
                </div>

                <p className="text-zinc-400 font-sans text-base md:text-lg leading-relaxed">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[11px] tracking-widest uppercase text-zinc-400 border border-zinc-800 px-3 py-1.5 group-hover:border-zinc-700 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href="#"
                className="brutal-btn inline-flex items-center gap-2 whitespace-nowrap lg:self-center"
              >
                Ver detalles
                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
