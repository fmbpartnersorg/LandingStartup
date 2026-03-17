import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    q: "¿Cómo funciona su proceso de desarrollo?",
    a: "Trabajamos en ciclos iterativos de alta velocidad. Comenzamos con una auditoría profunda de sus necesidades, seguida de un prototipo funcional y despliegues constantes cada dos semanas hasta alcanzar la escala deseada."
  },
  {
    q: "¿Cuál es el tiempo de entrega promedio?",
    a: "Depende de la complejidad. Los MVPs suelen estar listos en 6-8 semanas, mientras que las automatizaciones de procesos pueden implementarse en tan solo 4 semanas."
  },
  {
    q: "¿Ofrecen mantenimiento post-lanzamiento?",
    a: "Sí. Proporcionamos planes de soporte continuo y optimización para asegurar que su software evolucione al ritmo de su negocio y se mantenga seguro."
  },
  {
    q: "¿Con qué tecnologías trabajan?",
    a: "Somos agnósticos pero expertos en stacks modernos: React, Node.js, Python, AWS, Google Cloud y soluciones de IA personalizadas."
  }
];

export const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="section-label font-mono uppercase text-muted">
        [04] PROTOCOLO
      </div>
      <div className="container faq-container">
        <motion.h2 
          className="section-title font-serif text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Preguntas Frecuentes
        </motion.h2>

        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <motion.div 
                key={index}
                className={`faq-item ${isOpen ? 'active' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <button 
                  className="faq-trigger font-mono uppercase text-primary"
                  onClick={() => toggleAccordion(index)}
                >
                  {faq.q}
                  <span className="font-serif text-2xl leading-none">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div 
                      className="faq-content text-muted font-sans"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="faq-inner-content">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
