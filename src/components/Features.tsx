import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Iconos SVG ---
const SvgZap = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
);
const SvgCode = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
);
const SvgTarget = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
);
const SvgCheckCircle = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="20 6 9 17 4 12"></polyline></svg>
);
const SvgClock = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
);
const SvgShieldCheck = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path></svg>
);
const SvgTrendingUp = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
);
const SvgLightbulb = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1.3.5 2.6 1.5 3.5.8.8 1.3 1.5 1.5 2.5"></path><path d="M9 18h6"></path><path d="M10 22h4"></path></svg>
);
const SvgRefreshCw = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path></svg>
);
const SvgLaptop = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
);
const SvgLayers = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 12 17 22 12"></polyline><polyline points="2 17 12 22 22 17"></polyline></svg>
);
const SvgDollarSign = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
);

const featuresData = [
  {
    id: 1,
    tabTitle: "Automatización",
    tabSubtitle: "Liberá tu tiempo, eliminá errores",
    icon: <SvgZap />,   
    mainTitle: "Automatización",
    mainDesc: "Transformo tareas repetitivas en procesos automáticos que funcionan mientras vos te enfocás en hacer crecer tu negocio.",
    benefits: [
      {
        icon: <SvgClock />,
        title: "Ahorro de tiempo real",
        desc: "Lo que tomaba horas, ahora toma minutos. O segundos."
      },
      {
        icon: <SvgCheckCircle />,
        title: "Cero errores humanos",
        desc: "Los sistemas no se distraen, no se cansan, no se equivocan."
      },
      {
        icon: <SvgTrendingUp />,
        title: "Escala sin esfuerzo",
        desc: "Crecé tu operación sin necesidad de duplicar tu equipo."
      }
    ],
    includes: [
      "Generación automática de reportes",
      "Procesamiento de pagos y facturación",
      "Envío inteligente de emails y notificaciones",
      "Actualización de inventarios en tiempo real",
      "Integración en el ecosistema contable y de recursos hundidos"
    ],
    process: [
      { step: "1", title: "Analizamos", desc: "Identifico qué tareas te roban tiempo en tu operación diaria." },
      { step: "2", title: "Diseñamos", desc: "Creo flujos automáticos personalizados y scripts seguros." },
      { step: "3", title: "Implementamos", desc: "Pongo todo en funcionamiento conectando tus herramientas." },
      { step: "4", title: "Optimizamos", desc: "Ajusto, monitorizo y mejoro continuamente según los resultados." },
    ]
  },
  {
    id: 2,
    tabTitle: "Soluciones a medida",
    tabSubtitle: "Lo que necesitás, sin lo que no",
    icon: <SvgCode />,
    mainTitle: "Desarrollo de Software",
    mainDesc: "Construimos aplicaciones personalizadas creadas para su flujo de trabajo exacto, garantizando escalabilidad y rendimiento desde el MVP hasta el nivel empresarial.",
    benefits: [
       {
         icon: <SvgLayers />,
         title: "Escalabilidad total",
         desc: "Su aplicación crece de manera fluida al mismo ritmo que las demandas de su empresa."
       },
       {
         icon: <SvgShieldCheck />,
         title: "Arquitectura segura",
         desc: "Tecnologías modernas que garantizan protección de datos y alta velocidad de carga."
       },
       {
         icon: <SvgLaptop />,
         title: "Experiencia premium",
         desc: "Interfaces muy intuitivas diseñadas específicamente para sus operadores y clientes."
       }
    ],
    includes: [
      "Análisis profundo de requerimientos técnicos",
      "Diseño de arquitectura, bases de datos y wireframing",
      "Desarrollo full-stack moderno (React, Node, etc.)",
      "Pruebas de calidad y seguridad automatizadas",
      "Despliegue escalable en infraestructuras Cloud"
    ],
    process: [
      { step: "1", title: "Exploramos", desc: "Definimos exhaustivamente la necesidad técnica y el alcance." },
      { step: "2", title: "Prototipamos", desc: "Diseñamos vistas interactivas con entregas ágiles y feedback." },
      { step: "3", title: "Desarrollamos", desc: "Construcción metódica y completa utilizando código muy limpio." },
      { step: "4", title: "Lanzamos", desc: "Despliegue a la nube, capacitaciones y soporte técnico continuo." },
    ]
  },
  {
    id: 3,
    tabTitle: "Orden de procesos",
    tabSubtitle: "Claridad en el caos",
    icon: <SvgTarget />,
    mainTitle: "Consultoría Tecnológica",
    mainDesc: "Convertimos la complejidad técnica en absoluta claridad de negocio, guiándote hacia las mejores decisiones para tu infraestructura y ahorrando costos.",
    benefits: [
       {
         icon: <SvgDollarSign />,
         title: "Reducción de costos",
         desc: "Identificamos fugas masivas de capital en licencias o servidores mal dimensionados."
       },
       {
         icon: <SvgTrendingUp />,
         title: "Visión técnica",
         desc: "Roadmaps viables a mediano y largo plazo sin especulaciones limitantes."
       },
       {
         icon: <SvgCheckCircle />,
         title: "Mitigación técnica",
         desc: "Actualizamos eficazmente su stack tecnológico hacia estándares actuales sólidos."
       }
    ],
    includes: [
      "Auditoría profunda de la infraestructura y código fuente actual",
      "Planificación y definición estratégica de roadmap tecnológico",
      "Selección comparativa y viabilidad del stack de herramientas",
      "Optimización de costos en proveedores de la nube",
      "Asesoramiento estratégico técnico continuo (CTO as a Service)"
    ],
    process: [
      { step: "1", title: "Auditamos", desc: "Revisamos a fondo todo tu estado tecnológico actual y flujos analíticos." },
      { step: "2", title: "Planificamos", desc: "Armamos la estrategia técnica rigurosa para solucionar los problemas." },
      { step: "3", title: "Acordamos", desc: "Alineamos la visión operativa y definimos los próximos pasos clave." },
      { step: "4", title: "Guiamos", desc: "Acompañamos mano a mano a tu equipo interno en cada etapa de la ejecución." },
    ]
  }
];

export const Features = () => {
  const [selectedFeature, setSelectedFeature] = useState<number>(featuresData[0].id);
  const activeFeature = featuresData.find(f => f.id === selectedFeature) || featuresData[0];

  return (
    <section className="features-section bg-dot-grid" id="services">
      <div className="features-label font-mono uppercase text-muted">
        [01] CAPACIDADES
      </div>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <h2 className="features-title font-serif" style={{ textAlign: 'center', marginBottom: '3rem' }}>
          Cómo te ayudamos
        </h2>

        {/* Pestañas (Tabs) Superiores */}
        <div className="features-tabs-container">
          {featuresData.map(feature => (
            <button
              key={feature.id}
              onClick={() => setSelectedFeature(feature.id)}
              className={`feature-tab-btn ${selectedFeature === feature.id ? 'active' : ''}`}
            >
              <div className="tab-icon-wrap">
                {feature.icon}
              </div>
              <div className="tab-titles font-sans">
                <span className="tab-main-title">{feature.tabTitle}</span>
                <span className="tab-sub-title">{feature.tabSubtitle}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Contenedor Principal (Panel de Detalles) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedFeature}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="bento-panel font-sans"
          >
            <div className="bento-glow-blob"></div>

            <div className="bento-header">
              <div className="bento-main-icon">
                {activeFeature.icon}
              </div>
              <h3 className="font-serif">{activeFeature.mainTitle}</h3>
              <p>{activeFeature.mainDesc}</p>
            </div>
            
            <div className="benefits-grid">
              {activeFeature.benefits.map((benefit, i) => (
                <div key={i} className="benefit-card">
                  <div className="benefit-icon">
                    {benefit.icon}
                  </div>
                  <div className="benefit-title">{benefit.title}</div>
                  <div className="benefit-desc">{benefit.desc}</div>
                </div>
              ))}
            </div>

            <div className="bento-cols">
              <div className="bento-col-box">
                <div className="col-header">
                  <SvgLightbulb /> ¿Qué incluye?
                </div>
                <div className="includes-list">
                  {activeFeature.includes.map((inc, i) => (
                    <div key={i} className="includes-item">
                      <div className="includes-check">
                        <SvgCheckCircle />
                      </div>
                      <div className="includes-text">{inc}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bento-col-box">
                <div className="col-header">
                  <SvgRefreshCw /> ¿Cómo trabajamos?
                </div>
                <div className="process-list">
                  {activeFeature.process.map((proc, i) => (
                    <div key={i} className="process-item">
                      <div className="process-number">
                        {proc.step}
                      </div>
                      <div className="process-content">
                        <div className="process-title">{proc.title}</div>
                        <div className="process-desc">{proc.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
