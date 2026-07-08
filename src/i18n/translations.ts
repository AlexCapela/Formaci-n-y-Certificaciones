export type Lang = 'es' | 'en' | 'pt';

export const LANGS: { code: Lang; label: string; name: string }[] = [
  { code: 'es', label: 'ES', name: 'Español' },
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'pt', label: 'PT', name: 'Português (PT)' },
];

interface Stage { title: string; desc: string }
interface ProjectItem { type: string; desc: string }
interface SkillCategory { title: string; skills: string[] }
interface CertItem { title: string; category: string }

export interface Translation {
  nav: {
    home: string; about: string; trajectory: string; projects: string;
    skills: string; education: string; contact: string;
  };
  brand: { tagline: string };
  controls: {
    cv: string; menu: string; closeMenu: string; language: string;
    themeToLight: string; themeToDark: string;
  };
  hero: {
    eyebrow: string; title1: string; title2: string; title3: string;
    roles: string; availability: string;
    ctaContact: string; ctaCV: string; ctaTrajectory: string; portraitAlt: string;
  };
  about: {
    badge: string; title1: string; title2: string;
    p1: string; p2: string; p3: string; quote: string; imgAlt: string;
  };
  trajectory: {
    eyebrow: string; title1: string; title2: string; intro: string;
    tag1: string; tag2: string; tag3: string; imgAlt: string; stages: Stage[];
  };
  projects: {
    title1: string; title2: string; subtitle: string; cta: string; items: ProjectItem[];
  };
  skills: { title1: string; title2: string; subtitle: string; categories: SkillCategory[] };
  certs: {
    eyebrow: string; title1: string; title2: string; intro: string;
    close: string; certLabel: string; items: CertItem[];
  };
  footer: {
    eyebrow: string; title1: string; title2: string; desc: string;
    labelWhatsapp: string; labelEmail: string; labelLocation: string; labelLanguages: string;
    valueWhatsapp: string; valueLocation: string; valueLanguages: string;
    ctaContact: string; ctaWhatsapp: string; ctaCV: string; ctaProjects: string; ctaLinkedin: string;
    rights: string;
  };
}

export const translations: Record<Lang, Translation> = {
  es: {
    nav: { home: 'Inicio', about: 'Sobre mí', trajectory: 'Trayectoria', projects: 'Proyectos', skills: 'Habilidades', education: 'Formación', contact: 'Contacto' },
    brand: { tagline: 'Portfolio Profesional' },
    controls: { cv: 'Descargar CV', menu: 'Menú', closeMenu: 'Cerrar menú', language: 'Idioma', themeToLight: 'Activar modo claro', themeToDark: 'Activar modo oscuro' },
    hero: {
      eyebrow: 'Alex Capela // Portfolio Profesional',
      title1: 'Transformando', title2: 'Datos en', title3: 'Resultados',
      roles: 'Data Analyst · AI Automation · Web Designer · SaaS Builder',
      availability: 'Disponible para oportunidades en España y remoto',
      ctaContact: 'Contactar', ctaCV: 'Descargar CV', ctaTrajectory: 'Mi Trayectoria',
      portraitAlt: 'Alex Capela — retrato profesional',
    },
    about: {
      badge: '16+ Años de Experiencia Profesional',
      title1: 'De la Gestión de Negocios', title2: 'a la Tecnología de Datos',
      p1: 'Mi carrera comenzó como emprendedor: fundé y gestioné mis propios negocios, formé equipos y fui instructor profesional. Esa etapa me enseñó, desde dentro, los retos reales de las pequeñas y medianas empresas: falta de control, procesos manuales y decisiones tomadas sin datos.',
      p2: 'Impulsado por la tecnología, hice la transición al mundo de los datos, el desarrollo de software y la inteligencia artificial. Hoy diseño dashboards, automatizaciones con IA, sitios web y plataformas SaaS que convierten problemas de negocio en soluciones medibles.',
      p3: 'Este perfil híbrido es mi mayor valor para un equipo: entiendo el negocio porque lo he vivido, y domino la tecnología porque la construyo cada día. Busco aportar esa combinación a empresas en España, de forma presencial o en remoto.',
      quote: '"Los datos no deben ser complejos. Cualquier empresa merece acceso a las mismas herramientas y estrategias que utilizan las grandes organizaciones."',
      imgAlt: 'Trayectoria de Alex Capela',
    },
    trajectory: {
      eyebrow: 'Evolución profesional', title1: 'Trayectoria', title2: 'Profesional',
      intro: 'No empecé en la tecnología: construí una carrera sólida, desarrollé nuevas competencias y hoy entrego proyectos reales. Cada etapa sumó una habilidad que aplico en mi trabajo actual.',
      tag1: 'Formación presencial de barberos', tag2: 'Cientos de alumnos formados', tag3: '+7 años como instructor',
      imgAlt: 'Alex Capela como formador: clases presenciales, graduaciones de alumnos y grabación de cursos en estudio',
      stages: [
        { title: 'Barbero Profesional', desc: 'Inicio de una carrera de más de 16 años en el sector de la belleza, construyendo disciplina, atención al cliente y excelencia técnica.' },
        { title: 'Propietario de Barbería', desc: 'Gestión de negocio propio: equipo, finanzas, procesos y crecimiento. La visión de negocio que hoy aplico a la tecnología nació aquí.' },
        { title: 'Profesor y Formador', desc: 'Instructor de cientos de alumnos en formación presencial y grabación de cursos profesionales en estudio. Liderazgo, comunicación y enseñanza.' },
        { title: 'Web Designer', desc: 'Desde 2019: sitios web, e-commerce, identidad visual y landing pages. La puerta de entrada al mundo digital.' },
        { title: 'Analista de Datos', desc: 'Formación y proyectos con Power BI, SQL, Python y Google Cloud. Dashboards e indicadores que convierten datos en decisiones.' },
        { title: 'Desarrollador de IA', desc: 'Hoy: automatización con IA generativa, agentes inteligentes y desarrollo de plataformas SaaS como fundador de Euro Data Solutions.' },
      ],
    },
    projects: {
      title1: 'Proyectos', title2: 'Destacados', subtitle: '// Portfolio técnico', cta: 'Ver detalles',
      items: [
        { type: 'Sistema de Gestión / App', desc: 'Sistema de reservas para barberías con panel administrativo: gestión de servicios, profesionales, horarios y clientes en una sola plataforma.' },
        { type: 'Consultoría de Datos e IA', desc: 'Proyecto de consultoría y soluciones de datos: business intelligence, automatización e inteligencia artificial aplicadas a negocios reales.' },
        { type: 'SaaS / Automatización Comercial', desc: 'SaaS y agencia de automatización comercial con CRM, gestión de leads, campañas, integraciones e IA aplicada a ventas.' },
        { type: 'Plataforma de Testing con IA', desc: 'Sistema de pruebas automatizadas para sitios web y apps mediante agentes de IA, personas simuladas y análisis de experiencia de usuario.' },
        { type: 'Plataforma Educacional', desc: 'Plataforma educativa en desarrollo para enseñar inteligencia artificial, automatización, programación y creación de productos SaaS.' },
      ],
    },
    skills: {
      title1: 'Habilidades', title2: 'Técnicas', subtitle: '// Competencias por área',
      categories: [
        { title: 'Datos y BI', skills: ['Power BI', 'SQL', 'Dashboards', 'Análisis de datos', 'Modelado de datos'] },
        { title: 'Inteligencia Artificial', skills: ['IA Generativa', 'Automatización con IA', 'Agentes de IA', 'Prompt Engineering'] },
        { title: 'Desarrollo Web', skills: ['React', 'TypeScript', 'Tailwind CSS', 'Landing Pages', 'E-commerce'] },
        { title: 'Backend y Automatización', skills: ['Python', 'APIs', 'Supabase', 'Google Cloud', 'Automatización de procesos'] },
        { title: 'Negocios Digitales', skills: ['Marketing Digital', 'CRM', 'Ventas', 'SaaS', 'Emprendimiento'] },
      ],
    },
    certs: {
      eyebrow: 'Aprendizaje continuo', title1: 'Formación y', title2: 'Certificaciones',
      intro: 'Formación continua en datos, tecnología, inteligencia artificial, desarrollo web y negocios digitales.',
      close: 'Cerrar', certLabel: 'Certificado',
      items: [
        { title: 'Microsoft Power BI', category: 'Datos y BI' },
        { title: 'Fundamentos de Ciencia de Datos — Google Cloud', category: 'Datos y BI' },
        { title: 'Programación de Bases de Datos', category: 'Backend' },
        { title: 'Programación en Python para Ciberseguridad', category: 'Backend' },
        { title: 'Lógica de Programación', category: 'Fundamentos' },
        { title: 'Minicurso de SQL', category: 'Datos y BI' },
      ],
    },
    footer: {
      eyebrow: 'Contacto', title1: '¿Buscas un perfil que una', title2: 'Negocio y Tecnología?',
      desc: 'Data Analyst, automatización con IA, diseño web y desarrollo SaaS. Abierto a incorporación en España, contratación remota o proyectos internacionales.',
      labelWhatsapp: 'WhatsApp', labelEmail: 'Email', labelLocation: 'Ubicación', labelLanguages: 'Idiomas',
      valueWhatsapp: 'Enviar mensaje directo', valueLocation: 'Brasil · Disponible para España / remoto',
      valueLanguages: 'Portugués nativo · Español en desarrollo · Inglés técnico en desarrollo',
      ctaContact: 'Contactar', ctaWhatsapp: 'WhatsApp', ctaCV: 'Descargar CV', ctaProjects: 'Ver proyectos', ctaLinkedin: 'Conectar en LinkedIn',
      rights: 'Todos los derechos reservados.',
    },
  },

  en: {
    nav: { home: 'Home', about: 'About', trajectory: 'Career', projects: 'Projects', skills: 'Skills', education: 'Education', contact: 'Contact' },
    brand: { tagline: 'Professional Portfolio' },
    controls: { cv: 'Download CV', menu: 'Menu', closeMenu: 'Close menu', language: 'Language', themeToLight: 'Switch to light mode', themeToDark: 'Switch to dark mode' },
    hero: {
      eyebrow: 'Alex Capela // Professional Portfolio',
      title1: 'Turning', title2: 'Data into', title3: 'Results',
      roles: 'Data Analyst · AI Automation · Web Designer · SaaS Builder',
      availability: 'Available for opportunities in Spain and remote',
      ctaContact: 'Get in touch', ctaCV: 'Download CV', ctaTrajectory: 'My Career',
      portraitAlt: 'Alex Capela — professional portrait',
    },
    about: {
      badge: '16+ Years of Professional Experience',
      title1: 'From Running Businesses', title2: 'to Data Technology',
      p1: 'My career began as an entrepreneur: I founded and ran my own businesses, built teams and worked as a professional instructor. That stage taught me, from the inside, the real challenges small and medium businesses face: lack of control, manual processes and decisions made without data.',
      p2: 'Driven by technology, I made the transition into data, software development and artificial intelligence. Today I build dashboards, AI automations, websites and SaaS platforms that turn business problems into measurable solutions.',
      p3: 'This hybrid profile is my greatest value to a team: I understand business because I have lived it, and I master technology because I build it every day. I want to bring that combination to companies in Spain, on-site or remotely.',
      quote: '"Data should not be complex. Every company deserves access to the same tools and strategies used by large organizations."',
      imgAlt: 'Alex Capela’s career',
    },
    trajectory: {
      eyebrow: 'Professional evolution', title1: 'Professional', title2: 'Career',
      intro: 'I did not start in tech: I built a solid career, developed new skills and today I deliver real projects. Every stage added a skill that I apply in my current work.',
      tag1: 'In-person barber training', tag2: 'Hundreds of students trained', tag3: '7+ years as an instructor',
      imgAlt: 'Alex Capela as an instructor: in-person classes, student graduations and studio course recordings',
      stages: [
        { title: 'Professional Barber', desc: 'The start of a 16+ year career in the beauty industry, building discipline, customer care and technical excellence.' },
        { title: 'Barbershop Owner', desc: 'Running my own business: team, finances, processes and growth. The business mindset I now apply to technology was born here.' },
        { title: 'Teacher & Instructor', desc: 'Instructor to hundreds of students in in-person training and studio-recorded professional courses. Leadership, communication and teaching.' },
        { title: 'Web Designer', desc: 'Since 2019: websites, e-commerce, visual identity and landing pages. My gateway into the digital world.' },
        { title: 'Data Analyst', desc: 'Training and projects with Power BI, SQL, Python and Google Cloud. Dashboards and metrics that turn data into decisions.' },
        { title: 'AI Developer', desc: 'Today: generative-AI automation, intelligent agents and SaaS platform development as founder of Euro Data Solutions.' },
      ],
    },
    projects: {
      title1: 'Featured', title2: 'Projects', subtitle: '// Technical portfolio', cta: 'View details',
      items: [
        { type: 'Management System / App', desc: 'Booking system for barbershops with an admin panel: managing services, staff, schedules and clients on a single platform.' },
        { type: 'Data & AI Consulting', desc: 'Consulting project and data solutions: business intelligence, automation and artificial intelligence applied to real businesses.' },
        { type: 'SaaS / Sales Automation', desc: 'SaaS and sales-automation agency with CRM, lead management, campaigns, integrations and AI applied to sales.' },
        { type: 'AI Testing Platform', desc: 'Automated testing system for websites and apps using AI agents, simulated personas and user-experience analysis.' },
        { type: 'Education Platform', desc: 'Educational platform in development to teach artificial intelligence, automation, programming and SaaS product creation.' },
      ],
    },
    skills: {
      title1: 'Technical', title2: 'Skills', subtitle: '// Skills by area',
      categories: [
        { title: 'Data & BI', skills: ['Power BI', 'SQL', 'Dashboards', 'Data analysis', 'Data modeling'] },
        { title: 'Artificial Intelligence', skills: ['Generative AI', 'AI Automation', 'AI Agents', 'Prompt Engineering'] },
        { title: 'Web Development', skills: ['React', 'TypeScript', 'Tailwind CSS', 'Landing Pages', 'E-commerce'] },
        { title: 'Backend & Automation', skills: ['Python', 'APIs', 'Supabase', 'Google Cloud', 'Process automation'] },
        { title: 'Digital Business', skills: ['Digital Marketing', 'CRM', 'Sales', 'SaaS', 'Entrepreneurship'] },
      ],
    },
    certs: {
      eyebrow: 'Continuous learning', title1: 'Education &', title2: 'Certifications',
      intro: 'Continuous learning in data, technology, artificial intelligence, web development and digital business.',
      close: 'Close', certLabel: 'Certificate',
      items: [
        { title: 'Microsoft Power BI', category: 'Data & BI' },
        { title: 'Data Science Fundamentals — Google Cloud', category: 'Data & BI' },
        { title: 'Database Programming', category: 'Backend' },
        { title: 'Python Programming for Cybersecurity', category: 'Backend' },
        { title: 'Programming Logic', category: 'Fundamentals' },
        { title: 'SQL Short Course', category: 'Data & BI' },
      ],
    },
    footer: {
      eyebrow: 'Contact', title1: 'Looking for a profile that unites', title2: 'Business & Technology?',
      desc: 'Data Analyst, AI automation, web design and SaaS development. Open to joining a team in Spain, remote roles or international projects.',
      labelWhatsapp: 'WhatsApp', labelEmail: 'Email', labelLocation: 'Location', labelLanguages: 'Languages',
      valueWhatsapp: 'Send a direct message', valueLocation: 'Brazil · Available for Spain / remote',
      valueLanguages: 'Native Portuguese · Spanish (developing) · Technical English (developing)',
      ctaContact: 'Get in touch', ctaWhatsapp: 'WhatsApp', ctaCV: 'Download CV', ctaProjects: 'View projects', ctaLinkedin: 'Connect on LinkedIn',
      rights: 'All rights reserved.',
    },
  },

  pt: {
    nav: { home: 'Início', about: 'Sobre mim', trajectory: 'Percurso', projects: 'Projetos', skills: 'Competências', education: 'Formação', contact: 'Contacto' },
    brand: { tagline: 'Portefólio Profissional' },
    controls: { cv: 'Descarregar CV', menu: 'Menu', closeMenu: 'Fechar menu', language: 'Idioma', themeToLight: 'Ativar modo claro', themeToDark: 'Ativar modo escuro' },
    hero: {
      eyebrow: 'Alex Capela // Portefólio Profissional',
      title1: 'A Transformar', title2: 'Dados em', title3: 'Resultados',
      roles: 'Data Analyst · AI Automation · Web Designer · SaaS Builder',
      availability: 'Disponível para oportunidades em Espanha e em remoto',
      ctaContact: 'Contactar', ctaCV: 'Descarregar CV', ctaTrajectory: 'O Meu Percurso',
      portraitAlt: 'Alex Capela — retrato profissional',
    },
    about: {
      badge: '16+ Anos de Experiência Profissional',
      title1: 'Da Gestão de Negócios', title2: 'à Tecnologia de Dados',
      p1: 'A minha carreira começou como empreendedor: fundei e geri os meus próprios negócios, formei equipas e fui instrutor profissional. Essa etapa ensinou-me, por dentro, os verdadeiros desafios das pequenas e médias empresas: falta de controlo, processos manuais e decisões tomadas sem dados.',
      p2: 'Impulsionado pela tecnologia, fiz a transição para o mundo dos dados, do desenvolvimento de software e da inteligência artificial. Hoje concebo dashboards, automatizações com IA, sites e plataformas SaaS que convertem problemas de negócio em soluções mensuráveis.',
      p3: 'Este perfil híbrido é o meu maior valor para uma equipa: percebo o negócio porque o vivi, e domino a tecnologia porque a construo todos os dias. Procuro levar essa combinação a empresas em Espanha, presencialmente ou em remoto.',
      quote: '"Os dados não têm de ser complexos. Qualquer empresa merece acesso às mesmas ferramentas e estratégias que as grandes organizações utilizam."',
      imgAlt: 'Percurso de Alex Capela',
    },
    trajectory: {
      eyebrow: 'Evolução profissional', title1: 'Percurso', title2: 'Profissional',
      intro: 'Não comecei na tecnologia: construí uma carreira sólida, desenvolvi novas competências e hoje entrego projetos reais. Cada etapa acrescentou uma competência que aplico no meu trabalho atual.',
      tag1: 'Formação presencial de barbeiros', tag2: 'Centenas de alunos formados', tag3: '+7 anos como instrutor',
      imgAlt: 'Alex Capela como formador: aulas presenciais, graduações de alunos e gravação de cursos em estúdio',
      stages: [
        { title: 'Barbeiro Profissional', desc: 'O início de uma carreira de mais de 16 anos no setor da beleza, a construir disciplina, atenção ao cliente e excelência técnica.' },
        { title: 'Proprietário de Barbearia', desc: 'Gestão de negócio próprio: equipa, finanças, processos e crescimento. A visão de negócio que hoje aplico à tecnologia nasceu aqui.' },
        { title: 'Professor e Formador', desc: 'Instrutor de centenas de alunos em formação presencial e gravação de cursos profissionais em estúdio. Liderança, comunicação e ensino.' },
        { title: 'Web Designer', desc: 'Desde 2019: sites, e-commerce, identidade visual e landing pages. A porta de entrada para o mundo digital.' },
        { title: 'Analista de Dados', desc: 'Formação e projetos com Power BI, SQL, Python e Google Cloud. Dashboards e indicadores que convertem dados em decisões.' },
        { title: 'Programador de IA', desc: 'Hoje: automatização com IA generativa, agentes inteligentes e desenvolvimento de plataformas SaaS como fundador da Euro Data Solutions.' },
      ],
    },
    projects: {
      title1: 'Projetos', title2: 'em Destaque', subtitle: '// Portefólio técnico', cta: 'Ver detalhes',
      items: [
        { type: 'Sistema de Gestão / App', desc: 'Sistema de marcações para barbearias com painel administrativo: gestão de serviços, profissionais, horários e clientes numa única plataforma.' },
        { type: 'Consultoria de Dados e IA', desc: 'Projeto de consultoria e soluções de dados: business intelligence, automatização e inteligência artificial aplicadas a negócios reais.' },
        { type: 'SaaS / Automatização Comercial', desc: 'SaaS e agência de automatização comercial com CRM, gestão de leads, campanhas, integrações e IA aplicada às vendas.' },
        { type: 'Plataforma de Testes com IA', desc: 'Sistema de testes automatizados para sites e apps através de agentes de IA, personas simuladas e análise da experiência do utilizador.' },
        { type: 'Plataforma Educativa', desc: 'Plataforma educativa em desenvolvimento para ensinar inteligência artificial, automatização, programação e criação de produtos SaaS.' },
      ],
    },
    skills: {
      title1: 'Competências', title2: 'Técnicas', subtitle: '// Competências por área',
      categories: [
        { title: 'Dados e BI', skills: ['Power BI', 'SQL', 'Dashboards', 'Análise de dados', 'Modelação de dados'] },
        { title: 'Inteligência Artificial', skills: ['IA Generativa', 'Automatização com IA', 'Agentes de IA', 'Prompt Engineering'] },
        { title: 'Desenvolvimento Web', skills: ['React', 'TypeScript', 'Tailwind CSS', 'Landing Pages', 'E-commerce'] },
        { title: 'Backend e Automatização', skills: ['Python', 'APIs', 'Supabase', 'Google Cloud', 'Automatização de processos'] },
        { title: 'Negócios Digitais', skills: ['Marketing Digital', 'CRM', 'Vendas', 'SaaS', 'Empreendedorismo'] },
      ],
    },
    certs: {
      eyebrow: 'Aprendizagem contínua', title1: 'Formação e', title2: 'Certificações',
      intro: 'Formação contínua em dados, tecnologia, inteligência artificial, desenvolvimento web e negócios digitais.',
      close: 'Fechar', certLabel: 'Certificado',
      items: [
        { title: 'Microsoft Power BI', category: 'Dados e BI' },
        { title: 'Fundamentos de Ciência de Dados — Google Cloud', category: 'Dados e BI' },
        { title: 'Programação de Bases de Dados', category: 'Backend' },
        { title: 'Programação em Python para Cibersegurança', category: 'Backend' },
        { title: 'Lógica de Programação', category: 'Fundamentos' },
        { title: 'Minicurso de SQL', category: 'Dados e BI' },
      ],
    },
    footer: {
      eyebrow: 'Contacto', title1: 'Procura um perfil que una', title2: 'Negócio e Tecnologia?',
      desc: 'Data Analyst, automatização com IA, design web e desenvolvimento SaaS. Disponível para integrar uma equipa em Espanha, funções em remoto ou projetos internacionais.',
      labelWhatsapp: 'WhatsApp', labelEmail: 'Email', labelLocation: 'Localização', labelLanguages: 'Idiomas',
      valueWhatsapp: 'Enviar mensagem direta', valueLocation: 'Brasil · Disponível para Espanha / remoto',
      valueLanguages: 'Português nativo · Espanhol em desenvolvimento · Inglês técnico em desenvolvimento',
      ctaContact: 'Contactar', ctaWhatsapp: 'WhatsApp', ctaCV: 'Descarregar CV', ctaProjects: 'Ver projetos', ctaLinkedin: 'Ligar no LinkedIn',
      rights: 'Todos os direitos reservados.',
    },
  },
};
