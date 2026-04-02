import { Features } from '../components/Features';
import { CallToAction } from '../components/CallToAction';
import { useEffect } from 'react';

export const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-transition">
      <div style={{ paddingTop: '8rem', paddingBottom: '4rem' }}>
        <Features />
      </div>
      <CallToAction 
        title="Potencia tu negocio con tecnología a medida" 
        link="/contacto" 
        buttonText="AGENDAR LLAMADA" 
      />
    </div>
  );
};
