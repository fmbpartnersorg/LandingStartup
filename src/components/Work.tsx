import { useRef, useEffect, useState } from 'react';
import { motion, useAnimation, useMotionValue } from 'framer-motion';
import MB1 from '../assets/MB1.png';
import ConsulRRHH from '../assets/ConsulRRHH.png';


const projects = [
  {
    title: "Modulo de gestion de peluqueria",
    desc: "Reducción de los tiempos de atencion en un 80%, permitiendo un aumento en la productividad de mas del 50%.",
    image: MB1
  },
  {
    title: "Gestión de Recursos Humanos",
    desc: "Mejorar el proceso de gestión de postulantes y optimizar la asignación de empleos para cada uno.",
    image: ConsulRRHH
  },

];

export const Work = () => {
  const [width, setWidth] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const controls = useAnimation();

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }
  }, []);

  const handleDragEnd = () => {
    const currentX = x.get();
    if (currentX > 0) {
      controls.start({ x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } });
    } else if (currentX < -width) {
      controls.start({ x: -width, transition: { type: "spring", stiffness: 300, damping: 30 } });
    }
  };

  return (
    <section className="work-section bg-dark" id="work">
      <div className="section-label font-mono uppercase text-muted">
        [02] PORTAFOLIO
      </div>
      <div className="container overflow-hidden">
        <motion.h2
          className="section-title font-serif mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Nuestro Trabajo
        </motion.h2>

        <p className="font-mono text-muted text-xs uppercase mb-8 flex items-center gap-2">
          <span className="text-accent text-lg">↔</span> Arrastra para explorar
        </p>

        <motion.div
          ref={carouselRef}
          className="carousel"
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            style={{ x }}
            onDragEnd={handleDragEnd}
            animate={controls}
            className="inner-carousel"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="work-card border-color bg-card group"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="work-card-header stripe-pattern">
                  <img
                    alt={project.title}
                    src={project.image}

                  />
                  <h3 className="font-serif italic text-3xl z-10">{project.title}</h3>
                </div>
                <div className="work-card-body">
                  <p className="font-sans text-muted leading-relaxed flex-grow">
                    {project.desc}
                  </p>
                  {/* <a className="card-link font-mono uppercase text-accent mt-8 inline-flex" href="#contact">
                    Leer caso de estudio →
                  </a> */}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
