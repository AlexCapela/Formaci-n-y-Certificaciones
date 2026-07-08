import { motion } from 'framer-motion';
import { BarChart3, Rocket, Code2, Cpu, LineChart } from 'lucide-react';
import { useApp } from '../i18n/useApp';

const categoryIcons = [
  <BarChart3 size={24} className="text-acid" />,
  <Rocket size={24} className="text-signal" />,
  <Code2 size={24} className="text-white" />,
  <Cpu size={24} className="text-acid" />,
  <LineChart size={24} className="text-signal" />,
];

export function Expertise() {
  const { t } = useApp();
  const categories = t.skills.categories.map((c, i) => ({
    icon: categoryIcons[i],
    index: String(i + 1).padStart(2, '0'),
    ...c,
  }));
  return (
    <section id="expertise" className="py-24 md:py-32 px-6 border-t border-zinc-900 bg-grid">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h2 className="text-4xl md:text-6xl font-display uppercase tracking-tighter leading-none mb-4">
              {t.skills.title1}<br/>{t.skills.title2}
            </h2>
            <p className="font-mono text-zinc-400 text-sm tracking-widest uppercase">
              {t.skills.subtitle}
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
