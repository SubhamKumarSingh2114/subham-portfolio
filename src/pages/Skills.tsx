import { motion } from 'framer-motion';
import { PROFILE } from '../data/profile';

export default function Skills() {
  const sections = [
    { title: 'PROGRAMMING', data: PROFILE.skills.programming },
    { title: 'AI / MACHINE LEARNING', data: PROFILE.skills.ai_ml },
    { title: 'BACKEND', data: PROFILE.skills.backend },
    { title: 'DATABASES', data: PROFILE.skills.databases },
    { title: 'ALGORITHMS', data: PROFILE.skills.algorithms },
    { title: 'CLOUD / TOOLS', data: PROFILE.skills.cloud_tools },
  ];

  return (
    <div className="py-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h1 className="heading-2">TECHNICAL ARSENAL</h1>
        <p className="text-lg text-textSecondary">Technologies I use to build scalable systems.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
        {sections.map((section, idx) => (
          <motion.div 
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
          >
            <h3 className="text-sm font-mono tracking-widest text-primary uppercase mb-6 flex items-center gap-4">
              {section.title}
              <div className="h-px bg-white/10 flex-1"></div>
            </h3>
            <div className="flex flex-wrap gap-3">
              {section.data.map(skill => (
                <div 
                  key={skill}
                  className="px-4 py-2 bg-surface/50 border border-white/10 rounded-md text-white font-medium hover:border-primary/50 hover:bg-white/5 transition-colors cursor-default"
                >
                  {skill}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-24 pt-16 border-t border-white/10"
      >
        <h2 className="heading-2 mb-12">ACHIEVEMENTS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROFILE.achievements.map((ach, idx) => (
            <div key={idx} className="glass-panel p-6 rounded-lg border-l-2 border-primary/50">
              <p className="text-white font-medium text-sm md:text-base leading-relaxed">{ach}</p>
            </div>
          ))}
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-16"
      >
        <h2 className="heading-2 mb-12">CERTIFICATIONS</h2>
        <div className="flex flex-col space-y-4">
          {PROFILE.certifications.map((cert, idx) => (
            <div key={idx} className="bg-surface/50 border border-white/5 p-4 rounded-md flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-accent"></div>
              <p className="text-white font-medium">{cert}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.0 }}
        className="mt-16"
      >
        <h2 className="text-sm font-mono tracking-widest text-textSecondary uppercase mb-6">Education</h2>
        <div className="space-y-6">
          {PROFILE.education.map((edu, idx) => (
            <div key={idx} className="flex justify-between items-end border-b border-white/5 pb-4">
              <div>
                <h4 className="text-lg font-bold text-white">{edu.institution}</h4>
                <p className="text-primary text-sm mt-1">{edu.degree}</p>
              </div>
              <div className="text-right text-xs font-mono text-textSecondary">
                <p>{edu.date}</p>
                <p>{edu.location}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
