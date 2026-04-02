import { Hero } from '../components/Hero';
import { HeroMetrics } from '../components/HeroMetrics';
import { useEffect } from 'react';

export const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-transition">
      <div className="bg-dot-grid" style={{ display: 'flex', flexDirection: 'column', paddingBottom: '4rem', borderBottom: '1px solid var(--border-color)' }}>
        <Hero />
        <HeroMetrics />
      </div>
    </div>
  );
};
