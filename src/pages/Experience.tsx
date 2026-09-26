import { motion } from 'framer-motion';
import { PROFILE } from '../data/profile';
import { Github } from 'lucide-react';

export default function Experience() {
  const primary = PROFILE.experience.find(e => e.isPrimary);
  const others = PROFILE.experience.filter(e => !e.isPrimary);

  return (
    <div className="py-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="heading-2">INDUSTRY EXPERIENCE</h1>
      </motion.div>

      {primary && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-12 glass-panel p-8 md:p-12 rounded-xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">{primary.title}</h2>
              <h3 className="text-xl text-primary font-medium mt-2">{primary.company}</h3>
            </div>
            <div className="text-left md:text-right font-mono text-sm text-textSecondary">
              <p>{primary.date}</p>
              <p>{primary.location}</p>
            </div>
          </div>

          <div className="border-t border-b border-white/10 py-8 my-8">
            <h4 className="text-sm font-mono tracking-widest text-textSecondary uppercase mb-4">Project</h4>
            <p className="text-xl font-bold tracking-wide text-white mb-8">{primary.project}</p>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {primary.metrics?.map(m => (
                <div key={m.label} className="bg-surface/50 rounded-lg p-4 border border-white/5">
                  <div className="text-2xl font-bold text-white mb-1">{m.value}</div>
                  <div className="text-xs font-mono text-textSecondary uppercase tracking-wider">{m.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="text-sm font-mono tracking-widest text-textSecondary uppercase mb-4">ML Models</h4>
              <ul className="space-y-2">
                {primary.models?.map(m => (
                  <li key={m} className="flex items-center gap-2 text-white">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    {m}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-mono tracking-widest text-textSecondary uppercase mb-4">Top Features</h4>
              <ul className="space-y-2">
                {primary.topFeatures?.map(f => (
                  <li key={f} className="flex items-center gap-2 text-white">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mb-8">
             <h4 className="text-sm font-mono tracking-widest text-textSecondary uppercase mb-4">Technology Stack</h4>
             <div className="flex flex-wrap gap-2">
               {primary.technologies?.map(t => (
                 <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 rounded text-sm text-textSecondary">
                   {t}
                 </span>
               ))}
             </div>
          </div>

          {primary.github && (
            <a 
              href={primary.github} 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md font-bold tracking-widest text-sm transition-colors"
            >
              <Github size={18} />
              VIEW PROJECT
            </a>
          )}
        </motion.div>
      )}

      <div className="mt-16">
        <h3 className="text-sm font-mono tracking-widest text-textSecondary uppercase mb-8">Other Experience</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {others.map((exp, idx) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + (idx * 0.1) }}
              className="glass-panel p-6 rounded-lg border-l-4 border-l-white/20"
            >
              <h4 className="text-lg font-bold text-white mb-1">{exp.title}</h4>
              <p className="text-primary font-medium text-sm mb-4">{exp.company}</p>
              <p className="text-sm font-mono text-textSecondary">{exp.location}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
