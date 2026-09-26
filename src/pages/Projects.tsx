import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROFILE } from '../data/profile';
import { ArrowRight, Github, X } from 'lucide-react';

export default function Projects() {
  const [activeProject, setActiveProject] = useState<string | null>(null);

  const selected = PROFILE.projects.find(p => p.id === activeProject);

  return (
    <div className="py-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h1 className="heading-2">PROOF OF WORK</h1>
        <p className="text-lg text-textSecondary">Architectures, models, and systems I have built.</p>
      </motion.div>

      <div className="space-y-12">
        {PROFILE.projects.map((project, idx) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="group relative glass-panel rounded-xl overflow-hidden cursor-pointer"
            onClick={() => setActiveProject(project.id)}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="p-8 md:p-12 relative z-10 flex flex-col md:flex-row justify-between gap-8">
              <div className="flex-1 space-y-6">
                <div className="text-xs font-mono tracking-widest text-primary font-bold">
                  PROJECT 0{idx + 1}
                </div>
                <h2 className="text-2xl md:text-4xl font-bold text-white tracking-tight leading-snug group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h2>
                <div className="text-sm font-mono tracking-wider text-textSecondary border border-white/10 inline-block px-3 py-1 rounded">
                  {project.category}
                </div>
                
                <div className="flex flex-wrap gap-2 pt-4">
                  {project.highlights.map(h => (
                    <span key={h} className="text-xs font-medium bg-white/5 text-textSecondary px-2 py-1 rounded group-hover:bg-primary/20 group-hover:text-white transition-colors duration-300">
                      {h}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex-shrink-0 flex items-center md:justify-end">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300 group-hover:scale-110">
                  <ArrowRight size={20} className="group-hover:-rotate-45 transition-transform duration-300" />
                </div>
              </div>
            </div>

            {/* Architecture Preview on Hover */}
            <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-500 overflow-hidden bg-black/40 border-t border-white/5">
              <div className="p-6 md:px-12">
                <div className="flex flex-col md:flex-row items-center gap-2 text-xs font-mono text-textSecondary opacity-70">
                  {project.architecture.map((node, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="bg-surface px-2 py-1 border border-white/5 rounded">{node}</span>
                      {i < project.architecture.length - 1 && <ArrowRight size={12} />}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal for Case Study */}
      <AnimatePresence>
        {selected && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setActiveProject(null)}
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-surface border border-white/10 rounded-2xl shadow-2xl z-10 custom-scrollbar"
            >
              <div className="sticky top-0 bg-surface/90 backdrop-blur-md border-b border-white/10 p-4 flex justify-between items-center z-20">
                <div className="text-xs font-mono tracking-widest text-primary">CASE STUDY</div>
                <button 
                  onClick={() => setActiveProject(null)}
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="p-8 md:p-12 space-y-12">
                <div>
                  <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">{selected.title}</h2>
                  <p className="text-primary font-mono tracking-wider">{selected.category}</p>
                </div>

                {selected.metrics && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {selected.metrics.map(m => (
                      <div key={m.label} className="bg-black/50 p-6 rounded-lg border border-white/5">
                        <div className="text-3xl font-bold text-white mb-2">{m.value}</div>
                        <div className="text-xs font-mono text-textSecondary uppercase tracking-wider">{m.label}</div>
                      </div>
                    ))}
                  </div>
                )}

                <div>
                  <h3 className="text-sm font-mono tracking-widest text-textSecondary uppercase mb-6">Technologies & Algorithms</h3>
                  <div className="flex flex-wrap gap-3">
                    {selected.highlights.map(h => (
                      <span key={h} className="px-4 py-2 bg-white/5 border border-white/10 rounded-md text-sm text-white">
                        {h}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-mono tracking-widest text-textSecondary uppercase mb-6">Technical Architecture</h3>
                  <div className="bg-black/50 p-8 rounded-xl border border-white/5">
                    <div className="flex flex-col space-y-4 font-mono text-sm text-textSecondary">
                      {selected.architecture.map((node, i) => (
                        <div key={i} className="flex flex-col items-center text-center space-y-4">
                          <div className="w-full max-w-md bg-surface border border-white/10 p-4 rounded text-white shadow-lg">
                            {node}
                          </div>
                          {i < selected.architecture.length - 1 && (
                            <ArrowRight size={24} className="text-primary/50 rotate-90" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {selected.features.length > 0 && (
                  <div>
                    <h3 className="text-sm font-mono tracking-widest text-textSecondary uppercase mb-6">Key Capabilities</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selected.features.map(f => (
                        <li key={f} className="flex items-center gap-3 text-textSecondary">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary/50"></div>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="pt-8 border-t border-white/10 flex justify-center">
                  <a 
                    href={selected.github} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-3 bg-white text-black px-8 py-4 rounded-md font-bold tracking-widest hover:bg-gray-200 transition-colors"
                  >
                    <Github size={20} />
                    VIEW ON GITHUB
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
