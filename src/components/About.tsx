import { motion } from 'framer-motion';

export function About() {
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
            alt="Trayectoria de Alex Capela"
            className="object-cover w-full h-full img-brutal"
          />
          <div className="absolute inset-0 border-[10px] border-black/20 pointer-events-none" />
        </motion.div>

        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-4">
            <span className="h-px w-12 bg-acid"></span>
            <span className="font-mono text-acid text-xs tracking-widest uppercase">16+ Años de Experiencia Profesional</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-display uppercase tracking-tighter leading-none">
            De la Gestión de Negocios <br/> <span className="text-zinc-500">a la Tecnología de Datos</span>
          </h2>

          <div className="space-y-6 text-zinc-300 font-sans text-lg leading-relaxed">
            <p>
              Mi carrera comenzó como emprendedor: fundé y gestioné mis propios negocios, formé equipos y fui instructor profesional. Esa etapa me enseñó, desde dentro, los retos reales de las pequeñas y medianas empresas: falta de control, procesos manuales y decisiones tomadas sin datos.
            </p>
            <p>
              Impulsado por la tecnología, hice la transición al mundo de los datos, el desarrollo de software y la inteligencia artificial. Hoy diseño dashboards, automatizaciones con IA, sitios web y plataformas SaaS que convierten problemas de negocio en soluciones medibles.
            </p>
            <p>
              Este perfil híbrido es mi mayor valor para un equipo: entiendo el negocio porque lo he vivido, y domino la tecnología porque la construyo cada día. Busco aportar esa combinación a empresas en España, de forma presencial o en remoto.
            </p>
            <p className="text-white border-l-2 border-acid pl-6 italic">
              "Los datos no deben ser complejos. Cualquier empresa merece acceso a las mismas herramientas y estrategias que utilizan las grandes organizaciones."
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
