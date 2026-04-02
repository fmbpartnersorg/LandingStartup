import { Team } from '../components/Team';
import { Contact } from '../components/Contact';
import { useEffect } from 'react';

export const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-transition">
      <div style={{ paddingTop: '8rem' }}>
        <Team />
        <Contact />
      </div>
    </div>
  );
};
