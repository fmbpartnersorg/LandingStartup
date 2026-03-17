import { motion } from 'framer-motion';

export const Features = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="features-section bg-dot-grid" id="services">
      <div className="features-label font-mono uppercase text-muted">
        [01] CAPACIDADES
      </div>
      <div className="container">
        <h2 className="features-title font-serif">Lo que construimos</h2>
        
        <motion.div 
          className="grid grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Card 1 */}
          <motion.div variants={itemVariants} className="feature-card group">
            <div className="card-highlight"></div>
            <div className="card-inner">
              <div className="card-number font-serif text-accent-dim">01</div>
              <h3 className="card-title font-sans text-primary">Desarrollo de Software a Medida</h3>
              <p className="card-desc font-sans text-muted">
                Aplicaciones personalizadas creadas para su flujo de trabajo exacto. Desde MVP hasta sistemas de nivel empresarial.
              </p>
              <a className="card-link font-mono uppercase text-accent tracking-wider" href="#contact">
                Saber más →
              </a>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div variants={itemVariants} className="feature-card group">
            <div className="card-highlight"></div>
            <div className="card-inner">
              <div className="card-number font-serif text-accent-dim">02</div>
              <h3 className="card-title font-sans text-primary">Automatización de Procesos</h3>
              <p className="card-desc font-sans text-muted">
                Elimine cuellos de botella. Ahorre cientos de horas mensuales automatizando sus tareas manuales más costosas.
              </p>
              <a className="card-link font-mono uppercase text-accent tracking-wider" href="#contact">
                Saber más →
              </a>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div variants={itemVariants} className="feature-card group">
            <div className="card-highlight"></div>
            <div className="card-inner">
              <div className="card-number font-serif text-accent-dim">03</div>
              <h3 className="card-title font-sans text-primary">Consultoría Tecnológica</h3>
              <p className="card-desc font-sans text-muted">
                Orientación estratégica para auditar, planificar y trazar la hoja de ruta de su tecnología para un ROI máximo.
              </p>
              <a className="card-link font-mono uppercase text-accent tracking-wider" href="#contact">
                Saber más →
              </a>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};
