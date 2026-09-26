import { motion } from 'framer-motion';
import { Server, Cpu, Database } from 'lucide-react';

export default function About() {
  const cards = [
    {
      title: 'SOFTWARE',
      icon: <Server className="text-primary mb-4" size={32} />,
      items: ['Backend Systems', 'APIs', 'Algorithms']
    },
    {
      title: 'AI / ML',
      icon: <Cpu className="text-primary mb-4" size={32} />,
      items: ['Machine Learning', 'Deep Learning', 'NLP']
    },
    {
      title: 'SYSTEMS',
      icon: <Database className="text-primary mb-4" size={32} />,
      items: ['Databases', 'Routing', 'Security', 'Scalability']
    }
  ];

  return (
    <div className="py-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16 flex flex-col md:flex-row items-center gap-12"
      >
        <div className="flex-1 max-w-3xl">
          <h1 className="heading-2">WHO I AM</h1>
          <p className="text-lg text-textSecondary leading-relaxed">
            I am an engineering student focused on building robust Software Development solutions, deploying practical Machine Learning models, and architecting scalable Backend Systems. My approach bridges theoretical algorithms (DSA) with real-world applications.
          </p>
        </div>
        <div className="flex-shrink-0">
          <img src="/profile.png" alt="Subham Kumar Singh" className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-surface shadow-2xl ring-1 ring-white/10" />
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card, idx) => (
          <motion.div 
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="glass-panel p-8 rounded-lg group hover:border-primary/50 transition-colors"
          >
            {card.icon}
            <h3 className="text-xl font-bold tracking-widest text-white mb-6">{card.title}</h3>
            <ul className="space-y-3">
              {card.items.map(item => (
                <li key={item} className="text-textSecondary font-medium flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/50"></div>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="mt-24 pt-12 border-t border-white/10"
      >
        <h3 className="text-sm font-mono tracking-widest text-textSecondary uppercase mb-8 text-center">How I Approach a Problem</h3>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          {['PROBLEM', 'ARCHITECTURE', 'ALGORITHMS', 'IMPLEMENTATION', 'DEPLOYMENT'].map((step, idx, arr) => (
            <div key={step} className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
              <div className="bg-surface border border-white/10 px-6 py-3 rounded-md w-full md:w-auto text-sm font-bold tracking-widest">
                <span className="text-primary mr-2 font-mono">0{idx + 1}</span>
                {step}
              </div>
              {idx < arr.length - 1 && (
                <div className="hidden md:block w-8 h-px bg-white/20"></div>
              )}
              {idx < arr.length - 1 && (
                <div className="md:hidden h-8 w-px bg-white/20 my-2"></div>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
