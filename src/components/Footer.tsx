import { Link } from 'react-router-dom';
import { Instagram, Linkedin, MessageCircle } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="footer-section bg-dark" style={{ borderTop: '1px solid var(--border-color)', padding: '5rem 0' }}>
      <div className="container">
        <div className="footer-grid">
          {/* Logo & Desc */}
          <div className="footer-col flex flex-col">
            <Link to="/" className="logo flex-col" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>
              <span className="logo-title font-serif tracking-tight text-primary" style={{ fontSize: '32px' }}>FMB</span>
              <span className="logo-subtitle font-mono tracking-widest text-muted uppercase">PARTNERS</span>
            </Link>
            <p className="text-muted font-sans" style={{ maxWidth: '300px', marginBottom: '1.5rem', lineHeight: 1.6 }}>
              Transformamos la visión de nuestros clientes en tecnología escalable y de alto impacto.
            </p>
            <div className="text-muted font-mono" style={{ fontSize: '0.875rem' }}>
              📍 Cordoba Capital, Argentina
            </div>
          </div>

          {/* Nav */}
          <div className="footer-col flex flex-col">
            <h4 className="font-mono text-accent uppercase tracking-widest" style={{ marginBottom: '1.5rem', fontSize: '0.875rem' }}>Navegación</h4>
            <ul className="flex flex-col" style={{ gap: '1rem' }}>
              <li><Link to="/" className="text-muted hover:text-accent transition-colors font-mono uppercase text-sm">Inicio</Link></li>
              <li><Link to="/servicios" className="text-muted hover:text-accent transition-colors font-mono uppercase text-sm">Servicios</Link></li>
              <li><Link to="/trabajo" className="text-muted hover:text-accent transition-colors font-mono uppercase text-sm">Nuestro Trabajo</Link></li>
              <li><Link to="/contacto" className="text-muted hover:text-accent transition-colors font-mono uppercase text-sm">Contacto</Link></li>
            </ul>
          </div>

          {/* Contacto Directo */}
          <div className="footer-col flex flex-col">
            <h4 className="font-mono text-accent uppercase tracking-widest" style={{ marginBottom: '1.5rem', fontSize: '0.875rem' }}>Contacto Directo</h4>
            <ul className="flex flex-col" style={{ gap: '1rem' }}>
              <li className="text-muted font-mono text-sm hover:text-primary transition-colors cursor-pointer">fmbpartnersorg@gmail.com</li>
              <li className="text-muted font-mono text-sm hover:text-primary transition-colors cursor-pointer">+54 9 3525 518649</li>
            </ul>
          </div>

          {/* Socials & CTA */}
          <div className="footer-col flex flex-col" style={{ justifyContent: 'space-between' }}>
            <div>
              <h4 className="font-mono text-accent uppercase tracking-widest" style={{ marginBottom: '1.5rem', fontSize: '0.875rem' }}>Síguenos</h4>
              <div className="footer-socials flex" style={{ gap: '1.5rem', marginBottom: '2rem' }}>
                <a href="https://www.instagram.com/fmbpartnersorg/" target="_blank" rel="noreferrer" className="text-muted hover:text-accent transition-colors" aria-label="Instagram">
                  <Instagram size={24} />
                </a>
                <a href="https://www.linkedin.com/in/fmb-partners-aa9422400/" target="_blank" rel="noreferrer" className="text-muted hover:text-accent transition-colors" aria-label="LinkedIn">
                  <Linkedin size={24} />
                </a>
                <a href="https://wa.me/5493525518649?text=Hola%20FMB%20Partners,%20me%20gustar%C3%ADa%20hacer%20una%20consulta." target="_blank" rel="noreferrer" className="text-muted hover:text-accent transition-colors" aria-label="WhatsApp">
                  <MessageCircle size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-copyright font-mono text-muted uppercase flex-col sm:flex-row flex justify-between" style={{ borderTop: '1px solid var(--border-color)', paddingTop: '2rem', gap: '1rem' }}>
          <span style={{ fontSize: '0.75rem' }}>© 2026 FMB PARTNERS. Todos los derechos reservados.</span>
        </div>
      </div>
    </footer>
  );
};
