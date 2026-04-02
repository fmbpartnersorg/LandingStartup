import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

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
          <Link className="logo-title font-serif tracking-tight flex" to="/">FMB</Link>
          <span className="logo-subtitle font-mono tracking-widest text-muted uppercase">PARTNERS</span>
        </motion.div>

        <motion.div
          className="nav-links"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
        >
          <Link className="font-mono nav-link uppercase" to="/servicios">Servicios</Link>
          <Link className="font-mono nav-link uppercase" to="/trabajo">Nuestro Trabajo</Link>
          <Link className="font-mono nav-link uppercase" to="/contacto">Contacto</Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="header-action"
        >
          <Link
            className="btn-primary"
            to="/contacto"
          >
            RESERVAR CONSULTA
          </Link>
        </motion.div>

      </div>
    </nav>
  );
};
