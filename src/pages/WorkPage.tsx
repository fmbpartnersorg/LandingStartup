import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CallToAction } from '../components/CallToAction';
import MB1 from '../assets/MB1.png';
import ConsulRRHH from '../assets/ConsulRRHH.png';

const allProjects = [
  {
    id: 1,
    title: "Módulo de gestión de peluquería",
    type: "SaaS",
    desc: "Reducción de los tiempos de atencion en un 80%, permitiendo un aumento en la productividad de mas del 50%. Sistema de reservas, agenda y cobros online.",
    image: MB1,
    tech: ["React", "Node.js", "PostgreSQL"]
  },
  {
    id: 2,
    title: "Gestión de Recursos Humanos",
    type: "Enterprise",
    desc: "Mejorar el proceso de gestión de postulantes y optimizar la asignación de empleos para cada uno. Algoritmo de matching de perfiles.",
    image: ConsulRRHH,
    tech: ["Next.js", "Python", "AWS"]
  },
  {
    id: 3,
    title: "Plataforma E-learning B2B",
    type: "Web",
    desc: "Sistema de capacitación corporativa con seguimiento de métricas y evaluación continua automatizada.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
    tech: ["Vue.js", "Firebase", "GCP"]
  }
];

export const WorkPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<typeof allProjects[0] | null>(null);

  const filteredProjects = filter === 'All' 
    ? allProjects 
    : allProjects.filter(p => p.type === filter);

  return (
    <div className="page-transition min-h-screen" style={{ paddingTop: '8rem' }}>
      <div className="container mb-12">
        <motion.h1 
          className="font-serif text-5xl md:text-7xl mb-6 text-primary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Nuestro Trabajo
        </motion.h1>
        <p className="text-muted max-w-2xl text-lg mb-12">
          Explora los casos de éxito donde hemos transformado problemas complejos en software elegante y escalable.
        </p>

        {/* Filters */}
        <div className="flex gap-4 mb-16 flex-wrap">
          {['All', 'SaaS', 'Enterprise', 'Web'].map(type => (
            <button 
              key={type}
              onClick={() => setFilter(type)}
              className={`font-mono uppercase text-sm px-6 py-2 rounded-full transition-all ${filter === type ? 'bg-accent text-dark' : 'border border-gray-700 text-muted hover:border-gray-500'}`}
              style={filter === type ? { backgroundColor: 'var(--accent-yellow)', color: 'var(--bg-dark)' } : {}}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24"
        >
          <AnimatePresence>
            {filteredProjects.map(project => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                key={project.id}
                className="bg-card border border-gray-800 rounded-lg overflow-hidden cursor-pointer group"
                style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-card)' }}
                onClick={() => setSelectedProject(project)}
                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}
              >
                <div className="h-64 overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all z-10"></div>
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-6">
                  <span className="text-accent font-mono text-xs uppercase tracking-widest mb-2 block">{project.type}</span>
                  <h3 className="font-serif text-2xl mb-3">{project.title}</h3>
                  <button className="text-muted hover:text-primary font-mono text-sm uppercase flex items-center transition-colors">
                    Ver Detalles <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <CallToAction title="¿Listo para tu caso de éxito?" link="/contacto" buttonText="HABLA CON NOSOTROS" />

      {/* Popout / Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="bg-dark border border-gray-700 w-full max-w-4xl rounded-xl overflow-hidden flex flex-col md:flex-row relative"
              style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
              onClick={e => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-accent hover:text-black transition-colors"
              >
                ✕
              </button>
              
              <div className="md:w-1/2 h-64 md:h-auto">
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
              </div>
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <span className="text-accent font-mono text-sm uppercase tracking-widest mb-3 block">{selectedProject.type}</span>
                <h3 className="font-serif text-3xl mb-6">{selectedProject.title}</h3>
                <p className="text-muted leading-relaxed mb-8">{selectedProject.desc}</p>
                
                <div className="mb-8">
                  <h4 className="font-mono text-xs text-white uppercase mb-4 tracking-widest">Stack Tecnológico</h4>
                  <div className="flex gap-2 flex-wrap">
                    {selectedProject.tech.map(t => (
                      <span key={t} className="px-3 py-1 bg-black rounded-sm border border-gray-800 text-xs font-mono text-muted">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="btn-outline self-start"
                >
                  Cerrar
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
