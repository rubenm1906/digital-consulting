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
        "hero-title": "Liderando la Transformación Digital",
        "hero-subtitle": "Más de 16 años impulsando negocios con tecnología avanzada y soluciones innovadoras.",
        "hero-btn": "Solicita una Consulta",
        "about-title": "Sobre Nosotros",
        "about-desc": "En <strong>DigiCore Consulting</strong>, somos una empresa líder en consultoría de transformación digital y automatización. Nos apasiona ayudar a pequeñas y medianas empresas a optimizar sus operaciones, elevar su presencia digital y aprovechar el poder de la inteligencia artificial para alcanzar nuevos horizontes.",
        "what-we-do-title": "¿Qué hacemos?",
        "what-we-do-list": "<li>Diseñamos soluciones tecnológicas personalizadas para digitalizar procesos y mejorar la eficiencia.</li><li>Implementamos inteligencia artificial y automatización para optimizar costos y rendimiento.</li><li>Mejoramos la integración entre herramientas digitales para maximizar su impacto en tu negocio.</li>",
        "mission-title": "Nuestra Misión",
        "mission-desc": "Empoderar a los negocios con tecnología avanzada, permitiéndoles escalar, aumentar su productividad y destacarse en un mundo digital en constante cambio.",
        "vision-title": "Nuestra Visión",
        "vision-desc": "Convertirnos en referentes globales en transformación digital y automatización, ofreciendo soluciones accesibles que impulsen el crecimiento sostenible de las empresas.",
        "values-title": "Nuestros Valores",
        "value-innov": "Innovación",
        "value-eff": "Eficiencia",
        "value-acc": "Accesibilidad",
        "value-qual": "Calidad y Soporte",
        "why-choose-us-title": "¿Por qué elegir DigiCore?",
        "services-title": "Nuestros Servicios",
        "services-intro": "Transformamos tu negocio con soluciones tecnológicas avanzadas, desde el desarrollo web hasta la inteligencia artificial, optimizando cada proceso para tu éxito.",
        "service-web": "Desarrollo de Páginas Web y Presencia Digital",
        "service-web-desc": "Creamos sitios web personalizados (corporativos, e-commerce, landing pages) con funcionalidades como chatbots y SEO integrado para destacar en línea.",
        "service-auto": "Automatización de Procesos y Gestión de Datos",
        "service-auto-desc": "Implementamos soluciones como lectura de facturas con IA y automatización de flujos de trabajo para aumentar tu productividad.",
        "service-soft": "Desarrollo de Software y Soluciones In-House",
        "service-soft-desc": "Desarrollamos aplicaciones web y software a medida para optimizar tus operaciones internas.",
        "service-data": "Analítica de Datos e Inteligencia de Negocios",
        "service-data-desc": "Creamos dashboards interactivos con Power BI y Tableau para decisiones basadas en datos reales.",
        "service-int": "Integraciones y Conectividad de Sistemas",
        "service-int-desc": "Conectamos CRMs, ERPs y e-commerce con automatización avanzada para flujos de trabajo eficientes.",
        "service-ai": "Automatización con Inteligencia Artificial",
        "service-ai-desc": "Desplegamos asistentes virtuales y optimizamos procesos con IA para reducir costos y mejorar resultados.",
        "how-we-work-title": "Cómo Trabajamos",
        "how-we-work-desc": "En <strong>DigiCore Consulting</strong>, seguimos un proceso claro y colaborativo para transformar tu negocio:",
        "process-1": "1. Diagnóstico Inicial",
        "process-1-desc": "Evaluamos tus necesidades y oportunidades de mejora con un análisis profundo.",
        "process-2": "2. Desarrollo e Implementación",
        "process-2-desc": "Diseñamos e integramos soluciones personalizadas con precisión y eficiencia.",
        "process-3": "3. Capacitación y Soporte",
        "process-3-desc": "Te capacitamos y ofrecemos soporte continuo para garantizar tu éxito a largo plazo.",
        "contact-title": "Contáctanos",
        "contact-desc": "Estamos listos para impulsar tu digitalización. ¡Agenda tu consulta gratuita hoy!",
        "contact-btn": "Enviar Mensaje",
        "contact-info": "Correo: <a href='mailto:info@digicoreconsulting.com'>info@digicoreconsulting.com</a> | Teléfono: +1-800-DIGICORE"
    },
    en: {
        "home": "Home",
        "about": "About Us",
        "services": "Services",
        "how-we-work": "How We Work",
        "contact": "Contact",
        "hero-title": "Leading Digital Transformation",
        "hero-subtitle": "Over 16 years driving businesses with advanced technology and innovative solutions.",
        "hero-btn": "Request a Consultation",
        "about-title": "About Us",
        "about-desc": "At <strong>DigiCore Consulting</strong>, we are a leading firm in digital transformation and automation consulting. We are passionate about helping small and medium-sized businesses optimize their operations, enhance their digital presence, and leverage artificial intelligence to reach new heights.",
        "what-we-do-title": "What We Do?",
        "what-we-do-list": "<li>We design customized technological solutions to digitize processes and improve efficiency.</li><li>We implement artificial intelligence and automation to optimize costs and performance.</li><li>We enhance integration between digital tools to maximize their impact on your business.</li>",
        "mission-title": "Our Mission",
        "mission-desc": "Empower businesses with advanced technology, enabling them to scale, boost productivity, and stand out in an ever-changing digital world.",
        "vision-title": "Our Vision",
        "vision-desc": "To become global leaders in digital transformation and automation, offering accessible solutions that drive sustainable business growth.",
        "values-title": "Our Values",
        "value-innov": "Innovation",
        "value-eff": "Efficiency",
        "value-acc": "Accessibility",
        "value-qual": "Quality and Support",
        "why-choose-us-title": "Why Choose DigiCore?",
        "services-title": "Our Services",
        "services-intro": "We transform your business with advanced technological solutions, from web development to artificial intelligence, optimizing every process for your success.",
        "service-web": "Web Development and Digital Presence",
        "service-web-desc": "We create custom websites (corporate, e-commerce, landing pages) with features like chatbots and integrated SEO to stand out online.",
        "service-auto": "Process Automation and Data Management",
        "service-auto-desc": "We implement solutions like AI-powered invoice reading and workflow automation to boost your productivity.",
        "service-soft": "Software Development and In-House Solutions",
        "service-soft-desc": "We develop web applications and custom software to optimize your internal operations.",
        "service-data": "Data Analytics and Business Intelligence",
        "service-data-desc": "We create interactive dashboards with Power BI and Tableau for data-driven decisions.",
        "service-int": "System Integrations and Connectivity",
        "service-int-desc": "We connect CRMs, ERPs, and e-commerce with advanced automation for efficient workflows.",
        "service-ai": "Automation with Artificial Intelligence",
        "service-ai-desc": "We deploy virtual assistants and optimize processes with AI to reduce costs and improve results.",
        "how-we-work-title": "How We Work",
        "how-we-work-desc": "At <strong>DigiCore Consulting</strong>, we follow a clear and collaborative process to transform your business:",
        "process-1": "1. Initial Diagnosis",
        "process-1-desc": "We assess your needs and opportunities for improvement with a thorough analysis.",
        "process-2": "2. Development and Implementation",
        "process-2-desc": "We design and integrate tailored solutions with precision and efficiency.",
        "process-3": "3. Training and Support",
        "process-3-desc": "We train you and provide ongoing support to ensure your long-term success.",
        "contact-title": "Contact Us",
        "contact-desc": "We’re ready to drive your digitalization. Schedule your free consultation today!",
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
