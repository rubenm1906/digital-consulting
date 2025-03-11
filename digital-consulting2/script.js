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
        "contact": "Contacto",
        "hero-title": "Digitaliza tu empresa hoy",
        "hero-subtitle": "Soluciones tecnológicas avanzadas para transformar tu negocio.",
        "hero-btn": "Contáctanos",
        "about-title": "Sobre Nosotros",
        "about-desc": "Somos una empresa de consultoría en transformación digital y automatización enfocada en ayudar a pequeñas y medianas empresas a optimizar sus operaciones, mejorar su presencia digital y aprovechar el poder de la inteligencia artificial.",
        "value-innov": "Innovación",
        "value-eff": "Eficiencia",
        "value-acc": "Accesibilidad",
        "value-qual": "Calidad",
        "services-title": "Nuestros Servicios",
        "service-web": "Desarrollo Web",
        "service-web-desc": "Páginas corporativas, e-commerce y más con SEO integrado.",
        "service-auto": "Automatización",
        "service-auto-desc": "Reduce trabajo manual con IA y flujos inteligentes.",
        "service-soft": "Software Personalizado",
        "service-soft-desc": "Soluciones a medida para tu negocio.",
        "service-data": "Analítica de Datos",
        "service-data-desc": "Dashboards para decisiones basadas en métricas.",
        "contact-title": "Contáctanos",
        "contact-desc": "¡Digitaliza tu negocio hoy! Contáctanos para una consulta gratuita.",
        "contact-btn": "Enviar Mensaje"
    },
    en: {
        "home": "Home",
        "services": "Services",
        "about": "About Us",
        "contact": "Contact",
        "hero-title": "Digitize Your Business Today",
        "hero-subtitle": "Advanced technological solutions to transform your business.",
        "hero-btn": "Contact Us",
        "about-title": "About Us",
        "about-desc": "We are a digital transformation and automation consulting firm focused on helping small and medium-sized businesses optimize their operations, enhance their digital presence, and leverage the power of artificial intelligence.",
        "value-innov": "Innovation",
        "value-eff": "Efficiency",
        "value-acc": "Accessibility",
        "value-qual": "Quality",
        "services-title": "Our Services",
        "service-web": "Web Development",
        "service-web-desc": "Corporate websites, e-commerce, and more with integrated SEO.",
        "service-auto": "Automation",
        "service-auto-desc": "Reduce manual work with AI and smart workflows.",
        "service-soft": "Custom Software",
        "service-soft-desc": "Tailored solutions for your business.",
        "service-data": "Data Analytics",
        "service-data-desc": "Dashboards for metric-based decision-making.",
        "contact-title": "Contact Us",
        "contact-desc": "Digitize your business today! Contact us for a free consultation.",
        "contact-btn": "Send Message"
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
        element.textContent = translations[currentLang][key];
    });
}

// Initial language setup
updateLanguage();