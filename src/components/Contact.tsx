import { motion } from 'framer-motion';
import { useState } from 'react';

export const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [project, setProject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Nombre: ${name}\nEmail: ${email}\nProyecto: ${project}\nMensaje: ${message}`;
    const whatsappUrl = `https://wa.me/5493525518649?text=${encodeURIComponent(whatsappMessage)}`;
    window.location.href = whatsappUrl;
  };

  return (
    <section className="contact-section bg-dot-grid" id="contact">
      <div className="section-label font-mono uppercase text-muted">
        [05] CONTACTO
      </div>
      <div className="container contact-container">
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif contact-title leading-tight">
            ¿Listo para construir algo excepcional?
          </h2>
          <p className="font-sans text-muted contact-desc">
            Complete el formulario para iniciar una conversación sobre su próximo gran proyecto. Respondemos a todas las consultas en menos de 24 horas.
          </p>
          <div className="contact-details font-mono text-sm">
            <div className="contact-row">
              <span className="text-accent">DIR:</span>
              <span>Córdoba Capital, Argentina</span>
            </div>
            <div className="contact-row">
              <span className="text-accent">EML:</span>
              <span>fmbpartnersorg@gmail.com</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="contact-form-box border-color bg-card"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="font-roboto label-text text-accent tracking-widest uppercase">Nombre Completo</label>
              <input
                className="form-input"
                placeholder="Su nombre aquí"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label className="font-roboto label-text text-accent tracking-widest uppercase">Email Corporativo</label>
              <input
                className="form-input"
                placeholder="email@empresa.com"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label className="font-roboto label-text text-accent tracking-widest uppercase">Tipo de Proyecto</label>
              <select
                className="form-select uppercase"
                value={project}
                onChange={(e) => setProject(e.target.value)}
              >
                <option value="">Seleccione una opción</option>
                <option value="Software a Medida">Software a Medida</option>
                <option value="Automatización">Automatización</option>
                <option value="Consultoría">Consultoría</option>
              </select>
            </div>

            <div className="form-group">
              <label className="font-roboto label-text text-accent tracking-widest uppercase">Mensaje</label>
              <textarea
                className="form-textarea"
                placeholder="Cuéntenos sobre sus objetivos..."
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>

            <button className="btn-primary form-submit" type="submit">Enviar Mensaje</button>


          </form>
        </motion.div>
      </div>
    </section>
  );
};
