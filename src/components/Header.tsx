import { motion } from 'framer-motion';

export const Header = () => {
  return (
    <nav className="header-nav">
      <div className="container header-container">
        
        <motion.div 
          className="logo flex-col"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="logo-title font-serif tracking-tight">FMB</span>
          <span className="logo-subtitle font-mono tracking-widest text-muted uppercase">PARTNERS</span>
        </motion.div>

        <motion.div 
          className="nav-links"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
        >
          <a className="font-mono nav-link uppercase" href="#services">Servicios</a>
          <a className="font-mono nav-link uppercase" href="#work">Nuestro Trabajo</a>
          <a className="font-mono nav-link uppercase" href="#team">Equipo</a>
          <a className="font-mono nav-link uppercase" href="#faq">Preguntas Frecuentes</a>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, x: 20 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.5 }}
           className="header-action"
        >
          <button className="btn-primary">RESERVAR CONSULTA</button>
        </motion.div>

      </div>
    </nav>
  );
};
