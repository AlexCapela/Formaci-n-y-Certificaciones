import { motion } from 'framer-motion';
import { BarChart3, Rocket, Code2, Cpu, LineChart } from 'lucide-react';

const categories = [
  {
    icon: <BarChart3 size={24} className="text-acid" />,
    index: "01",
    title: "Datos y BI",
    skills: ["Power BI", "SQL", "Dashboards", "Análisis de datos", "Modelado de datos"]
  },
  {
    icon: <Rocket size={24} className="text-signal" />,
    index: "02",
    title: "Inteligencia Artificial",
    skills: ["IA Generativa", "Automatización con IA", "Agentes de IA", "Prompt Engineering"]
  },
  {
    icon: <Code2 size={24} className="text-white" />,
    index: "03",
    title: "Desarrollo Web",
    skills: ["React", "TypeScript", "Tailwind CSS", "Landing Pages", "E-commerce"]
  },
  {
    icon: <Cpu size={24} className="text-acid" />,
    index: "04",
    title: "Backend y Automatización",
    skills: ["Python", "APIs", "Supabase", "Google Cloud", "Automatización de procesos"]
  },
  {
    icon: <LineChart size={24} className="text-signal" />,
    index: "05",
    title: "Negocios Digitales",
    skills: ["Marketing Digital", "CRM", "Ventas", "SaaS", "Emprendimiento"]
  }
];

export function Expertise() {
  return (
    <section id="expertise" className="py-24 md:py-32 px-6 border-t border-zinc-900 bg-grid">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h2 className="text-4xl md:text-6xl font-display uppercase tracking-tighter leading-none mb-4">
              Habilidades<br/>Técnicas
            </h2>
            <p className="font-mono text-zinc-400 text-sm tracking-widest uppercase">
              // Competencias por área
            </p>
          </div>
        </div>

        <div className="flex flex-col border border-zinc-900 divide-y divide-zinc-900 bg-black">
          {categories.map((category, index) => (
            <motion.div
              key={category.index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="grid grid-cols-1 lg:grid-cols-[minmax(280px,1fr)_2fr] gap-6 lg:gap-12 p-8 md:p-10 hover:bg-zinc-950 transition-colors group"
            >
              <div className="flex items-center gap-4">
                <span className="font-mono text-zinc-600 text-xs tracking-widest">
                  {category.index}
                </span>
                <div className="p-3 bg-zinc-900 rounded-sm group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-display font-bold uppercase tracking-tight">
                  {category.title}
                </h3>
              </div>

              <ul className="flex flex-wrap items-center gap-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="font-mono text-xs tracking-widest uppercase text-zinc-300 border border-zinc-800 px-4 py-2 hover:border-acid hover:text-acid transition-colors"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
