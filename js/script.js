// Toggle Dark Mode
const toggleThemeBtn = document.getElementById('toggle-theme');
toggleThemeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    toggleThemeBtn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

// Language Switcher
const translations = {
    es: {
        "home": "Inicio",
        "about": "Sobre Nosotros",
        "services": "Servicios",
        "how-we-work": "Cómo Trabajamos",
        "contact": "Contacto",
        "hero-title": "Soluciones Tecnológicas Innovadoras",
        "hero-subtitle": "Transformamos tu negocio con más de 16 años de experiencia en TI.",
        "hero-btn": "Solicita una Consulta",
        "about-title": "Sobre Nosotros",
        "about-desc": "Somos <strong>DigiCore Consulting</strong>, una empresa de consultoría especializada en transformación digital y automatización. Nos dedicamos a empoderar a pequeñas y medianas empresas para optimizar sus operaciones, mejorar su presencia digital y aprovechar la inteligencia artificial.",
        "what-we-do-title": "¿Qué hacemos?",
        "what-we-do-list": "<li>📌 Diseñamos soluciones tecnológicas personalizadas para digitalizar procesos y mejorar la eficiencia operativa.</li><li>📌 Implementamos inteligencia artificial y automatización para reducir costos y optimizar el trabajo.</li><li>📌 Conectamos y mejoramos la integración entre herramientas digitales para maximizar su impacto.</li>",
        "mission-title": "Nuestra Misión",
        "mission-desc": "Empoderar a los negocios con tecnología avanzada, permitiéndoles escalar, mejorar su productividad y diferenciarse en un mundo digital en constante evolución.",
        "vision-title": "Nuestra Visión",
        "vision-desc": "Ser referentes en transformación digital y automatización, ofreciendo soluciones accesibles y efectivas que permitan a las empresas crecer de manera sostenible con la ayuda de la tecnología.",
        "values-title": "Nuestros Valores",
        "value-innov": "Innovación",
        "value-eff": "Eficiencia",
        "value-acc": "Accesibilidad",
        "value-qual": "Calidad y Soporte",
        "why-choose-us": "🔹 <strong>¿Por qué elegirnos?</strong> Ofrecemos soluciones a medida, implementación sin complicaciones, herramientas de inteligencia artificial para el crecimiento y soporte continuo. 📞 ¡Digitaliza tu empresa hoy y prepárate para el futuro!",
        "services-title": "Nuestros Servicios",
        "services-intro": "Te ayudamos a digitalizar y automatizar tu negocio con soluciones tecnológicas avanzadas. Optimizamos tus procesos para que te enfoques en crecer.",
        "service-web": "Desarrollo de Páginas Web y Presencia Digital",
        "service-web-desc": "Creamos páginas web (corporativas, e-commerce, blogs, landing pages) con chatbots, WhatsApp, calendarios y formularios inteligentes. Incluimos SEO y analítica. 📢 <em>Si no estás en internet, pierdes clientes.</em>",
        "service-auto": "Automatización de Procesos y Gestión de Datos",
        "service-auto-desc": "Ofrecemos lectura de facturas con IA y ingreso automático de datos para procesar documentos y flujos de trabajo. 📢 <em>Menos trabajo manual, más productividad.</em>",
        "service-soft": "Desarrollo de Software y Soluciones In-House",
        "service-soft-desc": "Desarrollamos aplicaciones web y software personalizado para sistemas internos y automatización. 📢 <em>Herramientas únicas para tu negocio.</em>",
        "service-data": "Analítica de Datos e Inteligencia de Negocios",
        "service-data-desc": "Creamos dashboards con Power BI, Looker Studio y Tableau para análisis y decisiones basadas en métricas. 📢 <em>Convierte datos en valor.</em>",
        "service-int": "Integraciones y Conectividad de Sistemas",
        "service-int-desc": "Automatizamos procesos entre CRMs, ERPs y e-commerce con bots y RPA. 📢 <em>Flujos de trabajo optimizados.</em>",
        "service-ai": "Automatización con Inteligencia Artificial y Agentes AI",
        "service-ai-desc": "Desarrollamos asistentes virtuales y optimizamos flujos con IA para reducir costos. 📢 <em>Transforma tu negocio con IA.</em>",
        "how-we-work-title": "Cómo Trabajamos",
        "how-we-work-desc": "En <strong>DigiCore Consulting</strong>, seguimos un enfoque estructurado para garantizar tu éxito:",
        "process-1": "1. Diagnóstico Inicial",
        "process-1-desc": "Analizamos tus necesidades y detectamos oportunidades de mejora.",
        "process-2": "2. Desarrollo e Implementación",
        "process-2-desc": "Diseñamos e integramos soluciones personalizadas en tu negocio.",
        "process-3": "3. Capacitación y Soporte",
        "process-3-desc": "Te capacitamos y ofrecemos soporte continuo.",
        "how-we-work-call": "📞 ¡Contáctanos para una consulta gratuita!",
        "contact-title": "Contáctanos",
        "contact-desc": "Agenda una consulta gratuita con nuestros expertos para digitalizar tu negocio.",
        "contact-btn": "Enviar Mensaje",
        "contact-info": "Correo: <a href='mailto:info@digicoreconsulting.com'>info@digicoreconsulting.com</a> | Teléfono: +1-800-DIGICORE"
    },
    en: {
        "home": "Home",
        "about": "About Us",
        "services": "Services",
        "how-we-work": "How We Work",
        "contact": "Contact",
        "hero-title": "Innovative Technological Solutions",
        "hero-subtitle": "We transform your business with over 16 years of IT experience.",
        "hero-btn": "Request a Consultation",
        "about-title": "About Us",
        "about-desc": "We are <strong>DigiCore Consulting</strong>, a consultancy specializing in digital transformation and automation. We empower small and medium-sized businesses to optimize their operations, enhance their digital presence, and leverage artificial intelligence.",
        "what-we-do-title": "What We Do?",
        "what-we-do-list": "<li>📌 We design customized technological solutions to digitize processes and improve operational efficiency.</li><li>📌 We implement artificial intelligence and automation to reduce costs and optimize work.</li><li>📌 We connect and enhance integration between digital tools to maximize their impact.</li>",
        "mission-title": "Our Mission",
        "mission-desc": "Empower businesses with advanced technology, enabling them to scale, improve productivity, and stand out in an ever-evolving digital world.",
        "vision-title": "Our Vision",
        "vision-desc": "To be leaders in digital transformation and automation, offering accessible and effective solutions that allow companies to grow sustainably with technology.",
        "values-title": "Our Values",
        "value-innov": "Innovation",
        "value-eff": "Efficiency",
        "value-acc": "Accessibility",
        "value-qual": "Quality and Support",
        "why-choose-us": "🔹 <strong>Why Choose Us?</strong> We offer tailored solutions, seamless technology implementation, AI tools for growth, and ongoing support. 📞 Digitize your business today and prepare for the future!",
        "services-title": "Our Services",
        "services-intro": "We help you digitize and automate your business with advanced technological solutions. We optimize your processes so you can focus on growth.",
        "service-web": "Web Development and Digital Presence",
        "service-web-desc": "We create websites (corporate, e-commerce, blogs, landing pages) with chatbots, WhatsApp, calendars, and smart forms. We include SEO and analytics. 📢 <em>If you’re not online, you’re losing customers.</em>",
        "service-auto": "Process Automation and Data Management",
        "service-auto-desc": "We offer AI-powered invoice reading and automated data entry for document processing and workflows. 📢 <em>Less manual work, more productivity.</em>",
        "service-soft": "Software Development and In-House Solutions",
        "service-soft-desc": "We develop web applications and custom software for internal systems and automation. 📢 <em>Unique tools for your business.</em>",
        "service-data": "Data Analytics and Business Intelligence",
        "service-data-desc": "We create dashboards with Power BI, Looker Studio, and Tableau for analysis and metric-based decisions. 📢 <em>Turn data into value.</em>",
        "service-int": "System Integrations and Connectivity",
        "service-int-desc": "We automate processes between CRMs, ERPs, and e-commerce with bots and RPA. 📢 <em>Optimized workflows.</em>",
        "service-ai": "Automation with Artificial Intelligence and AI Agents",
        "service-ai-desc": "We develop virtual assistants and optimize workflows with AI to reduce costs. 📢 <em>Transform your business with AI.</em>",
        "how-we-work-title": "How We Work",
        "how-we-work-desc": "At <strong>DigiCore Consulting</strong>, we follow a structured approach to ensure your success:",
        "process-1": "1. Initial Diagnosis",
        "process-1-desc": "We analyze your needs and identify improvement opportunities.",
        "process-2": "2. Development and Implementation",
        "process-2-desc": "We design and integrate tailored solutions into your business.",
        "process-3": "3. Training and Support",
        "process-3-desc": "We train you and provide ongoing support.",
        "how-we-work-call": "📞 Contact us for a free consultation!",
        "contact-title": "Contact Us",
        "contact-desc": "Schedule a free consultation with our experts to digitize your business.",
        "contact-btn": "Send Message",
        "contact-info": "Email: <a href='mailto:info@digicoreconsulting.com'>info@digicoreconsulting.com</a> | Phone: +1-800-DIGICORE"
    }
};

let currentLang = 'es';

const toggleLangBtn = document.getElementById('toggle-lang');
toggleLangBtn.addEventListener('click', () => {
    currentLang = currentLang === 'es' ? 'en' : 'es';
    toggleLangBtn.textContent = currentLang === 'es' ? 'EN/ES' : 'ES/EN';
    updateLanguage();
});

function updateLanguage() {
    document.querySelectorAll('[data-lang]').forEach(element => {
        const key = element.getAttribute('data-lang');
        const translation = translations[currentLang][key];
        if (element.tagName === 'A' || element.tagName === 'P' || element.tagName === 'UL') {
            element.innerHTML = translation;
        } else {
            element.textContent = translation;
        }
    });
}

// Initial language setup
updateLanguage();
