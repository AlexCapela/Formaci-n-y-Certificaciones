import { Download, Mail, MapPin, Languages, UserPlus, ArrowUpRight, FolderOpen } from 'lucide-react';

const contactInfo = [
  {
    icon: <Mail size={18} className="text-acid" />,
    label: "Email",
    value: "acapellastore777@gmail.com",
    href: "mailto:acapellastore777@gmail.com"
  },
  {
    icon: <MapPin size={18} className="text-acid" />,
    label: "Ubicación",
    value: "Brasil · Disponible para España / remoto",
    href: null
  },
  {
    icon: <Languages size={18} className="text-acid" />,
    label: "Idiomas",
    value: "Portugués nativo · Español en desarrollo · Inglés técnico en desarrollo",
    href: null
  }
];

export function Footer() {
  return (
    <footer id="contact" className="py-24 px-6 border-t border-zinc-800 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-16 relative z-10">

        <div className="flex flex-col items-center text-center gap-8">
          <div className="flex items-center gap-4">
            <span className="h-px w-12 bg-acid"></span>
            <span className="font-mono text-acid text-xs tracking-widest uppercase">Contacto</span>
            <span className="h-px w-12 bg-acid"></span>
          </div>

          <h2 className="text-4xl md:text-6xl font-display uppercase tracking-tighter">
            ¿Buscas un perfil que una<br/>
            <span className="text-acid">Negocio y Tecnología?</span>
          </h2>

          <p className="text-zinc-400 font-sans text-xl max-w-2xl">
            Data Analyst, automatización con IA, diseño web y desarrollo SaaS.
            Abierto a incorporación en España, contratación remota o proyectos internacionales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-zinc-900 border border-zinc-900">
          {contactInfo.map((item) => (
            <div key={item.label} className="bg-black p-8 flex flex-col gap-3 hover:bg-zinc-950 transition-colors">
              <div className="flex items-center gap-3">
                {item.icon}
                <span className="font-mono text-zinc-500 text-[11px] tracking-widest uppercase">
                  {item.label}
                </span>
              </div>
              {item.href ? (
                <a href={item.href} className="font-sans text-white text-base md:text-lg break-all hover:text-acid transition-colors">
                  {item.value}
                </a>
              ) : (
                <p className="font-sans text-white text-base md:text-lg">
                  {item.value}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <a href="mailto:acapellastore777@gmail.com" className="brutal-btn-primary inline-flex items-center gap-2 px-10 py-5">
            <Mail size={18} />
            Contactar
          </a>
          <a
            href="/Alex-Capela-CV-Espanol.pdf"
            download
            className="brutal-btn inline-flex items-center gap-2 px-10 py-5"
          >
            <Download size={18} />
            Descargar CV
          </a>
          <a href="#projects" className="brutal-btn inline-flex items-center gap-2 px-10 py-5">
            <FolderOpen size={18} />
            Ver proyectos
          </a>
          <a
            href="https://www.linkedin.com/in/alex-capela-euro-data-solutions-b310b4285"
            target="_blank"
            rel="noopener noreferrer"
            className="brutal-btn inline-flex items-center gap-2 px-10 py-5"
          >
            <UserPlus size={18} />
            Conectar en LinkedIn
          </a>
        </div>

        <div className="w-full h-px bg-zinc-900" />

        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6 font-mono text-xs text-zinc-600 uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Alex Capela. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a
              href="https://www.linkedin.com/in/alex-capela-euro-data-solutions-b310b4285"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-white transition-colors"
            >
              LinkedIn
              <ArrowUpRight size={14} />
            </a>
            <a
              href="https://github.com/AlexCapela"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-white transition-colors"
            >
              GitHub
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

      </div>

      {/* Decorator element */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-[400px] bg-acid/5 blur-[120px] rounded-full pointer-events-none" />
    </footer>
  );
}
