import { Download, Mail, MapPin, Languages, UserPlus, ArrowUpRight, FolderOpen, MessageCircle } from 'lucide-react';
import { useApp } from '../i18n/useApp';

const WHATSAPP_URL = "https://wa.me/qr/UINSGCGPYZP3F1";
const LINKEDIN_URL = "https://www.linkedin.com/in/alex-capela-euro-data-solutions-b310b4285";
const GITHUB_URL = "https://github.com/AlexCapela";
const EMAIL = "acapellastore777@gmail.com";

export function Footer() {
  const { t } = useApp();

  const contactInfo = [
    { icon: <MessageCircle size={18} className="text-acid" />, label: t.footer.labelWhatsapp, value: t.footer.valueWhatsapp, href: WHATSAPP_URL, external: true },
    { icon: <Mail size={18} className="text-acid" />, label: t.footer.labelEmail, value: EMAIL, href: `mailto:${EMAIL}`, external: false },
    { icon: <MapPin size={18} className="text-acid" />, label: t.footer.labelLocation, value: t.footer.valueLocation, href: null, external: false },
    { icon: <Languages size={18} className="text-acid" />, label: t.footer.labelLanguages, value: t.footer.valueLanguages, href: null, external: false },
  ];

  return (
    <footer id="contact" className="py-24 px-6 border-t border-zinc-800 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-16 relative z-10">

        <div className="flex flex-col items-center text-center gap-8">
          <div className="flex items-center gap-4">
            <span className="h-px w-12 bg-acid"></span>
            <span className="font-mono text-acid text-xs tracking-widest uppercase">{t.footer.eyebrow}</span>
            <span className="h-px w-12 bg-acid"></span>
          </div>

          <h2 className="text-4xl md:text-6xl font-display uppercase tracking-tighter">
            {t.footer.title1}<br/>
            <span className="text-acid">{t.footer.title2}</span>
          </h2>

          <p className="text-zinc-400 font-sans text-xl max-w-2xl">
            {t.footer.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-900 border border-zinc-900">
          {contactInfo.map((item) => (
            <div key={item.label} className="bg-black p-8 flex flex-col gap-3 hover:bg-zinc-950 transition-colors">
              <div className="flex items-center gap-3">
                {item.icon}
                <span className="font-mono text-zinc-500 text-[11px] tracking-widest uppercase">
                  {item.label}
                </span>
              </div>
              {item.href ? (
                <a
                  href={item.href}
                  {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="font-sans text-white text-base md:text-lg break-all hover:text-acid transition-colors"
                >
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
          <a href={`mailto:${EMAIL}`} className="brutal-btn-primary inline-flex items-center gap-2 px-10 py-5">
            <Mail size={18} />
            {t.footer.ctaContact}
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="brutal-btn inline-flex items-center gap-2 px-10 py-5">
            <MessageCircle size={18} />
            {t.footer.ctaWhatsapp}
          </a>
          <a href="/Alex-Capela-CV-Espanol.pdf" download className="brutal-btn inline-flex items-center gap-2 px-10 py-5">
            <Download size={18} />
            {t.footer.ctaCV}
          </a>
          <a href="#projects" className="brutal-btn inline-flex items-center gap-2 px-10 py-5">
            <FolderOpen size={18} />
            {t.footer.ctaProjects}
          </a>
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="brutal-btn inline-flex items-center gap-2 px-10 py-5">
            <UserPlus size={18} />
            {t.footer.ctaLinkedin}
          </a>
        </div>

        <div className="w-full h-px bg-zinc-900" />

        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6 font-mono text-xs text-zinc-600 uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Alex Capela. {t.footer.rights}</p>
          <div className="flex gap-6">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-white transition-colors">
              WhatsApp
              <ArrowUpRight size={14} />
            </a>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-white transition-colors">
              LinkedIn
              <ArrowUpRight size={14} />
            </a>
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-white transition-colors">
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
