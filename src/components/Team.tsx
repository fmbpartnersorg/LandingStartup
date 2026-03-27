import { motion } from 'framer-motion';
import flaco from '../assets/Brian.png';
import nau from '../assets/Nau.png';

const teamMembers = [
  {
    name: "Brian Escobar",
    role: "Full Stack Engineer",
    desc: "Especialista en desarrollo full-stack con énfasis en tecnologías modernas.",
    image: flaco
  },

  {
    name: "Mauricio Ribotta",
    role: "Product Manager & Dev Junior",
    desc: "Experto en gestión de productos con habilidades en desarrollo junior.",
    image: nau
  },
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
              <div className="team-photo border-color bg-dark" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {member.image ? (
                  <img src={`${member.image}`} alt={member.name} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                ) : (
                  <div className="stripe-pattern photo-pattern"></div>
                )}
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
