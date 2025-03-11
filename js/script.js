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
        "what-we-do-list": "<li><span class='icon'>💻</span> Diseñamos soluciones tecnológicas personalizadas para digitalizar procesos y mejorar la eficiencia.</li><li><span class='icon'>🤖</span> Implementamos inteligencia artificial y automatización para optimizar costos y rendimiento.</li><li><span class='icon'>🔗</span> Mejoramos la integración entre herramientas digitales para maximizar su impacto en tu negocio.</li>",
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
        "contact-desc": "Estamos list
