import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section className="hero-section bg-dot-grid">
      <div className="hero-label font-mono uppercase text-muted">
        [00] QUIÉNES SOMOS
      </div>
      
      <div className="container hero-grid">
        <motion.div 
          className="hero-text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h1 className="hero-title font-serif tracking-tight flex-col">
            <span className="text-primary">Construimos</span>
            <span className="italic text-primary">Software</span>
            <span className="hero-highlight">
              que Escala.
              <span className="highlight-line"></span>
            </span>
          </h1>
          <p className="hero-description font-sans text-muted">
            Desarrollo personalizado premium, automatización inteligente y consultoría estratégica para empresas que van en serio.
          </p>
          
          <div className="hero-actions">
            <a href="#contact" className="btn-primary">Inicia tu Proyecto →</a>
            <a href="#portfolio" className="btn-outline">Ver nuestro trabajo</a> 
          </div>
        </motion.div>

        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="visual-bg1"></div>
          <div className="visual-bg2 stripe-pattern"></div>
          
          <div className="visual-card">
            <div className="card-top-line"></div>
            <div className="card-content font-mono">
              <div className="flex justify-between">
                <span className="text-muted uppercase">ESTADO</span><span>................ ACTIVO</span></div>
              <div className="flex justify-between">
                <span className="text-muted uppercase">PROYECTOS</span><span>................... 50+</span></div>
              <div className="flex justify-between">
                <span className="text-muted uppercase">SATISFACCIÓN</span><span>............... 98%</span></div>
              <div className="flex justify-between">
                <span className="text-muted uppercase">STACK</span><span className="text-accent">... REACT · NODE · AWS</span></div>
              <div className="flex justify-between">
                <span className="text-muted uppercase">CLIENTES</span><span>................... 20+</span></div>
              
              <div className="terminal-line text-accent">
                &gt; sistema_listo <span className="cursor-blink highlight-box"></span>
              </div>
            </div>
          </div>
          <div className="hero-bg-text font-serif italic">—</div>
        </motion.div>
      </div>
    </section>
  );
};
