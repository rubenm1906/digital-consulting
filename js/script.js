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
        "services": "Servicios",
        "about": "Sobre Nosotros",
        "how-we-work": "Cómo Trabajamos",
        "contact": "Contacto",
        "hero-title": "Soluciones Tecnológicas Innovadoras",
        "hero-subtitle": "Transformamos tu negocio con más de 16 años de experiencia en TI, empoderándote con tecnología avanzada.",
        "hero-btn": "Solicita una Consulta",
        "about-title": "Sobre Nosotros",
        "about-desc": "Somos <strong>DigiCore Consulting</strong>, una empresa de consultoría líder en transformación digital y automatización. Nos dedicamos a ayudar a pequeñas y medianas empresas a optimizar sus operaciones, mejorar su presencia digital y aprovechar el poder de la inteligencia artificial para crecer de manera sostenible. Con un enfoque en soluciones personalizadas, nuestra misión es empoderar a los negocios con tecnología avanzada en un mundo digital en constante evolución.",
        "mission-title": "Nuestra Misión",
        "mission-desc": "Empoderar a los negocios con tecnología avanzada, permitiéndoles escalar, mejorar su productividad y diferenciarse en un mundo digital en constante evolución.",
        "vision-title": "Nuestra Visión",
        "vision-desc": "Ser referentes en transformación digital y automatización, ofreciendo soluciones accesibles y efectivas que permitan a las empresas crecer de manera sostenible con la ayuda de la tecnología.",
        "values-title": "Nuestros Valores",
        "value-innov": "Innovación",
        "value-eff": "Eficiencia",
        "value-acc": "Accesibilidad",
        "value-qual": "Calidad y Soporte",
        "why-choose-us": "🔹 <strong>¿Por qué elegirnos?</strong> Ofrecemos soluciones a medida, implementamos tecnología sin complicaciones, usamos inteligencia artificial para potenciar el crecimiento y brindamos soporte continuo y asesoría experta en digitalización. ¡Digitaliza tu empresa hoy y prepárate para el futuro!",
        "services-title": "Nuestros Servicios",
        "services-intro": "Te ayudamos a digitalizar y automatizar tu negocio con soluciones tecnológicas avanzadas. Desde la creación de páginas web hasta la integración de sistemas, analítica de datos e inteligencia artificial, optimizamos tus procesos para que puedas enfocarte en hacer crecer tu empresa.",
        "service-web": "Desarrollo de Páginas Web y Presencia Digital",
        "service-web-desc": "Creamos páginas web personalizadas (corporativas, e-commerce, blogs, landing pages) con funcionalidades avanzadas como chatbots, WhatsApp, calendarios y formularios inteligentes. Incluimos optimización SEO y analítica integrada para maximizar tu visibilidad. 📢 <em>Si tu negocio no está en internet, estás perdiendo clientes.</em>",
        "service-auto": "Automatización de Procesos y Gestión de Datos",
        "service-auto-desc": "Implementamos soluciones como la lectura de facturas con IA (extracción automática de datos e integración con sistemas contables) y el ingreso automático de datos (procesamiento de documentos y automatización de flujos de trabajo). 📢 <em>Menos trabajo manual, más productividad.</em>",
        "service-soft": "Desarrollo de Software y Soluciones In-House",
        "service-soft-desc": "Desarrollamos aplicaciones web y software personalizado (sistemas internos, automatización de tareas) adaptados a las necesidades específicas de tu empresa. 📢 <em>Cada empresa es única. Creamos herramientas tecnológicas a tu medida.</em>",
        "service-data": "Analítica de Datos e Inteligencia de Negocios",
        "service-data-desc": "Ofrecemos dashboards y reportes automatizados con herramientas como Power BI, Looker Studio y Tableau, además de análisis y visualización de datos para decisiones basadas en métricas. 📢 <em>Convierte tus datos en información valiosa.</em>",
        "service-int": "Integraciones y Conectividad de Sistemas",
        "service-int-desc": "Automatizamos procesos entre aplicaciones (conexión entre CRMs, ERPs, e-commerce) y desarrollamos bots y flujos de trabajo inteligentes con RPA y extracción de datos. 📢 <em>Optimiza tu flujo de trabajo con integraciones inteligentes.</em>",
        "service-ai": "Automatización con Inteligencia Artificial y Agentes AI",
        "service-ai-desc": "Creamos asistentes virtuales inteligentes para atención al cliente y soporte automatizado, analizamos datos con IA y optimizamos flujos de trabajo para reducir costos y mejorar eficiencia. 📢 <em>Aprovecha la inteligencia artificial para transformar tu negocio.</em>",
        "how-we-work-title": "Cómo Trabajamos",
        "how-we-work-desc": "En <strong>DigiCore Consulting</strong>, seguimos un proceso estructurado y colaborativo para garantizar el éxito de tu digitalización:",
        "process-1": "1. Diagnóstico Inicial",
        "process-1-desc": "Analizamos tus necesidades actuales, detectamos oportunidades de mejora y evaluamos cómo la tecnología puede transformar tu negocio.",
        "process-2": "2. Desarrollo e Implementación",
        "process-2-desc": "Diseñamos soluciones personalizadas y las integramos sin problemas en tus operaciones, asegurando una transición fluida.",
        "process-3": "3. Capacitación y Soporte",
        "process-3-desc": "Te capacitamos para usar las herramientas y ofrecemos soporte continuo para maximizar el impacto de nuestras soluciones.",
        "how-we-work-call": "📞 ¡Digitaliza tu negocio hoy! Contáctanos para una consulta gratuita y descubre cómo podemos ayudarte.",
        "contact-title": "Contáctanos",
        "contact-desc": "¡Estamos listos para ayudarte a dar el siguiente paso hacia la digitalización! Agenda una consulta gratuita con nuestros expertos.",
        "contact-btn": "Enviar Mensaje",
        "contact-info": "Correo: <a href='mailto:info@digicoreconsulting.com'>info@digicoreconsulting.com</a> | Teléfono: +1-800-DIGICORE"
    },
    en: {
        "home": "Home",
        "services": "Services",
        "about": "About Us",
        "how-we-work": "How We Work",
        "contact": "Contact",
        "hero-title": "Innovative Technological Solutions",
        "hero-subtitle": "We transform your business with over 16 years of IT experience, empowering you with advanced technology.",
        "hero-btn": "Request a Consultation",
        "about-title": "About Us",
        "about-desc": "We are <strong>DigiCore Consulting</strong>, a leading firm in digital transformation and automation consulting. We are dedicated to helping small and medium-sized businesses optimize their operations, enhance their digital presence, and leverage the power of artificial intelligence for sustainable growth. With a focus on tailored solutions, our mission is to empower businesses with advanced technology in an ever-evolving digital world.",
        "mission-title": "Our Mission",
        "mission-desc": "Empower businesses with advanced technology, enabling them to scale, improve productivity, and stand out in an ever-evolving digital world.",
        "vision-title": "Our Vision",
        "vision-desc": "To be leaders in digital transformation and automation, offering accessible and effective solutions that allow companies to grow sustainably with the help of technology.",
        "values-title": "Our Values",
        "value-innov": "Innovation",
        "value-eff": "Efficiency",
        "value-acc": "Accessibility",
        "value-qual": "Quality and Support",
        "why-choose-us": "🔹 <strong>Why Choose Us?</strong> We offer tailored solutions, implement technology seamlessly, use artificial intelligence to drive growth, and provide ongoing support and expert advice in digitalization. Digitize your business today and prepare for the future!",
        "services-title": "Our Services",
        "services-intro": "We help you digitize and automate your business with advanced technological solutions. From website creation to system integration, data analytics, and artificial intelligence, we optimize your processes so you can focus on growing your company.",
        "service-web": "Web Development and Digital Presence",
        "service-web-desc": "We create custom websites (corporate, e-commerce, blogs, landing pages) with advanced features like chatbots, WhatsApp, calendars, and smart forms. We include SEO optimization and integrated analytics to maximize your visibility. 📢 <em>If your business isn’t online, you’re losing customers.</em>",
        "service-auto": "Process Automation and Data Management",
        "service-auto-desc": "We implement solutions like AI-powered invoice reading (automatic data extraction and integration with accounting systems) and automated data entry (document processing and workflow automation). 📢 <em>Less manual work, more productivity.</em>",
        "service-soft": "Software Development and In-House Solutions",
        "service-soft-desc": "We develop web applications and custom software (internal systems, task automation) tailored to your specific business needs. 📢 <em>Every business is unique. We create technology tools tailored to you.</em>",
        "service-data": "Data Analytics and Business Intelligence",
        "service-data-desc": "We provide automated dashboards and reports using tools like Power BI, Looker Studio, and Tableau, along with data analysis and visualization for metric-based decision-making. 📢 <em>Turn your data into valuable insights.</em>",
        "service-int": "System Integrations and Connectivity",
        "service-int-desc": "We automate processes between applications (CRM, ERP, e-commerce connections) and develop bots and intelligent workflows with RPA and data extraction. 📢 <em>Optimize your workflow with smart integrations.</em>",
        "service-ai": "Automation with Artificial Intelligence and AI Agents",
        "service-ai-desc": "We create intelligent virtual assistants for customer service and automated support, analyze data with AI, and optimize workflows to reduce costs and improve efficiency. 📢 <em>Leverage artificial intelligence to transform your business.</em>",
        "how-we-work-title": "How We Work",
        "how-we-work-desc": "At <strong>DigiCore Consulting</strong>, we follow a structured and collaborative process to ensure the success of your digital transformation:",
        "process-1": "1. Initial Diagnosis",
        "process-1-desc": "We analyze your current needs, identify improvement opportunities, and evaluate how technology can transform your business.",
        "process-2": "2. Development and Implementation",
        "process-2-desc": "We design tailored solutions and integrate them seamlessly into your operations, ensuring a smooth transition.",
        "process-3": "3. Training and Support",
        "process-3-desc": "We train you to use the tools and provide ongoing support to maximize the impact of our solutions.",
        "how-we-work-call": "📞 Digitize your business today! Contact us for a free consultation and discover how we can help you.",
        "contact-title": "Contact Us",
        "contact-desc": "We’re ready to help you take the next step toward digitalization! Schedule a free consultation with our experts.",
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
        if (element.tagName === 'A' || element.tagName === 'P') {
            element.innerHTML = translation;
        } else {
            element.textContent = translation;
        }
    });
}

// Initial language setup
updateLanguage();
