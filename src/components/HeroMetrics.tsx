import { motion } from 'framer-motion';
import { Zap, RefreshCw, Cloud, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const HeroMetrics = () => {
  const cards = [
    {
      num: "01",
      icon: <Zap size={24} color="#FFF" />,
      title: "Automatización",
      desc: "Menos tareas manuales, menos errores, más tiempo para lo importante.",
      link: "/servicios"
    },
    {
      num: "02",
      icon: <RefreshCw size={24} color="#FFF" />,
      title: "Orden de procesos",
      desc: "Claridad, control y sistemas que no dependen de una sola persona.",
      link: "/servicios"
    },
    {
      num: "03",
      icon: <Cloud size={24} color="#FFF" />,
      title: "Soluciones a medida",
      desc: "No todo necesita un sistema gigante. Lo simple también escala.",
      link: "/servicios"
    },
  ];

  return (
    <section className="relative z-10" style={{ paddingTop: '8rem', paddingBottom: '6rem' }}>
      <div className="container">
        {/* Header Centrado */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center flex flex-col items-center"
           style={{ marginBottom: '5rem' }}
        >
          <h2 className="font-serif text-5xl md:text-6xl text-primary leading-tight font-bold mb-4">
            ¿Cómo lo hacemos?
          </h2>
          <p className="text-muted font-sans text-xl">
            Soluciones pensadas para escalar sin complicarte
          </p>
        </motion.div>

        {/* Cajas con Numeración */}
        <div className="metrics-grid">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="metrics-card bg-card transition-all"
              style={{
                position: 'relative',
                overflow: 'hidden',
                padding: '3rem',
                borderRadius: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                backgroundColor: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                boxShadow: '0 20px 50px rgba(0,0,0,0.3)'
              }}
            >
              {/* Icon Box */}
              <div
                className="shadow-lg"
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'var(--accent-yellow)',
                  color: 'var(--bg-dark)',
                  width: '4rem',
                  height: '4rem',
                  borderRadius: '1rem',
                  flexShrink: 0,
                  marginBottom: '2rem'
                }}
              >
                {card.icon}
              </div>

              <h3 className="font-serif text-3xl text-primary font-bold z-10" style={{ marginBottom: '1.25rem' }}>
                {card.title}
              </h3>

              <p className="text-muted font-sans text-lg font-light z-10" style={{ marginBottom: '2.5rem', flexGrow: 1, lineHeight: 1.8 }}>
                {card.desc}
              </p>

              <Link
                to={card.link}
                className="font-mono text-sm font-bold uppercase transition-colors group z-10"
                style={{ color: 'var(--accent-yellow)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
              >
                Saber más <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
              </Link>

              {/* Watermark Number */}
              <div
                className="font-serif italic"
                style={{
                  position: 'absolute',
                  right: '0',
                  bottom: '0',
                  fontSize: '14rem',
                  lineHeight: '0.8',
                  color: 'rgba(255, 255, 255, 0.03)',
                  transform: 'translate(10%, 15%)',
                  zIndex: 0,
                  pointerEvents: 'none',
                  userSelect: 'none'
                }}
              >
                {card.num}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
