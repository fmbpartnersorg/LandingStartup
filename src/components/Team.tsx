import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: "Marcus Thorne",
    role: "Socio Director",
    desc: "Ex-arquitecto en FAANG con 15 años liderando infraestructuras escalables."
  },
  {
    name: "Elena Vance",
    role: "Directora Técnica",
    desc: "Especialista en sistemas distribuidos y optimización de rendimiento crítico."
  },
  {
    name: "David Chen",
    role: "Estratega de Producto",
    desc: "Experto en transformar flujos de trabajo complejos en interfaces intuitivas."
  },
  {
    name: "Sofia Rossi",
    role: "Socia de Automatización",
    desc: "Ingeniera líder enfocada en IA aplicada y procesos de negocio autónomos."
  }
];

export const Team = () => {
  return (
    <section className="team-section bg-dot-grid" id="team">
      <div className="section-label font-mono uppercase text-muted">
        [03] EL EQUIPO
      </div>
      <div className="container">
        <motion.h2 
          className="section-title font-serif"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Conozca a los Socios
        </motion.h2>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index}
              className="team-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="team-photo border-color bg-dark">
                <div className="stripe-pattern photo-pattern"></div>
              </div>
              <h4 className="font-serif text-2xl mb-1">{member.name}</h4>
              <p className="font-mono team-role text-accent tracking-widest uppercase mb-4">
                {member.role}
              </p>
              <p className="font-sans text-muted text-xs leading-relaxed">
                {member.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
