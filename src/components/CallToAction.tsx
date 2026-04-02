import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface CallToActionProps {
  title?: string;
  link?: string;
  buttonText?: string;
}

export const CallToAction = ({ 
  title = "Inicia tu Proyecto", 
  link = "/contacto",
  buttonText = "CONTÁCTANOS"
}: CallToActionProps) => {
  return (
    <section className="cta-section bg-dot-grid" style={{ padding: '8rem 0', textAlign: 'center', position: 'relative', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        <motion.h2 
          className="features-title font-serif" 
          style={{ marginBottom: '3rem' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {title}
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link to={link} className="btn-primary" style={{ fontSize: '1.25rem', padding: '1rem 2.5rem' }}>
            {buttonText}
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
