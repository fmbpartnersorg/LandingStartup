import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ServiceDetail {
  number: string;
  title: string;
  description: string;
  details: string[];
  extras?: string;
}

const services: ServiceDetail[] = [
  {
    number: '01',
    title: 'Desarrollo de Software a Medida',
    description:
      'Aplicaciones personalizadas creadas para su flujo de trabajo exacto. Desde MVP hasta sistemas de nivel empresarial.',
    details: [
      'Aplicaciones web y móviles con las últimas tecnologías (React, Next.js, Node.js, etc.)',
      'Arquitectura escalable y preparada para crecer con su negocio',
      'Integración con APIs de terceros, pasarelas de pago y servicios cloud',
      'Diseño UI/UX centrado en el usuario para una experiencia excepcional',
      'Mantenimiento continuo y soporte técnico post-lanzamiento',
    ],
    extras:
      'Cada proyecto incluye documentación completa, pruebas automatizadas y un proceso ágil transparente con entregas periódicas.',
  },
  {
    number: '02',
    title: 'Automatización de Procesos',
    description:
      'Elimine cuellos de botella. Ahorre cientos de horas mensuales automatizando sus tareas manuales más costosas.',
    details: [
      'Automatización de flujos de trabajo repetitivos con herramientas como Zapier, n8n o scripts personalizados',
      'Bots e inteligencia artificial para atención al cliente y procesamiento de datos',
      'Integración entre sistemas (CRM, ERP, facturación, inventario)',
      'Dashboards en tiempo real para monitorizar KPIs y métricas críticas',
      'Reducción de errores humanos y tiempos de respuesta',
    ],
    extras:
      'Le ayudamos a identificar los procesos con mayor impacto para automatizar primero, garantizando un ROI rápido y medible.',
  },
  {
    number: '03',
    title: 'Consultoría Tecnológica',
    description:
      'Orientación estratégica para auditar, planificar y trazar la hoja de ruta de su tecnología para un ROI máximo.',
    details: [
      'Auditoría completa de su infraestructura tecnológica actual',
      'Diseño de arquitectura y selección del stack tecnológico ideal',
      'Plan de transformación digital con roadmap priorizado',
      'Evaluación de seguridad y cumplimiento normativo (GDPR, etc.)',
      'Capacitación y mentoring para equipos de desarrollo internos',
    ],
    extras:
      'Nuestros consultores tienen +10 años de experiencia en startups y empresas Fortune 500, brindando una perspectiva de negocio única.',
  },
];

export const Features = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="features-section bg-dot-grid" id="services">
      <div className="features-label font-mono uppercase text-muted">
        [01] CAPACIDADES
      </div>
      <div className="container">
        <h2 className="features-title font-serif">Lo que construimos</h2>

        <motion.div
          className="grid grid-cols-3 gap-8 items-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
        >
          {services.map((service, index) => {
            const isExpanded = expandedCard === index;

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`feature-card group ${isExpanded ? 'feature-card--expanded' : ''}`}
              >
                <div className="card-highlight"></div>
                <div className="card-inner">
                  <div className="card-number font-serif text-accent-dim">
                    {service.number}
                  </div>
                  <h3 className="card-title font-sans text-primary">
                    {service.title}
                  </h3>
                  <p className="card-desc font-sans text-muted">
                    {service.description}
                  </p>
                  <button
                    className="card-link card-link--toggle font-mono uppercase text-accent tracking-wider"
                    onClick={() => toggleCard(index)}
                    aria-expanded={isExpanded}
                  >
                    <span>{isExpanded ? 'Cerrar' : 'Saber más'}</span>
                    <motion.span
                      className="card-link__arrow"
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      ↓
                    </motion.span>
                  </button>
                </div>

                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      className="card-expand"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                      <div className="card-expand__inner">
                        <div className="card-expand__divider"></div>
                        <ul className="card-expand__list">
                          {service.details.map((detail, i) => (
                            <motion.li
                              key={i}
                              className="card-expand__item font-sans"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.1 + i * 0.07, duration: 0.3 }}
                            >
                              <span className="card-expand__bullet">▸</span>
                              {detail}
                            </motion.li>
                          ))}
                        </ul>
                        {service.extras && (
                          <motion.p
                            className="card-expand__extras font-sans text-muted"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.3 }}
                          >
                            {service.extras}
                          </motion.p>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
