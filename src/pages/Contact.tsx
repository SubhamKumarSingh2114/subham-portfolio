import { motion } from 'framer-motion';
import { PROFILE } from '../data/profile';
import { Github, Linkedin, Mail, FileText, Download } from 'lucide-react';

export default function Contact() {
  const contacts = [
    {
      title: 'GITHUB',
      desc: 'Explore my code and projects.',
      link: PROFILE.links.github,
      icon: <Github size={32} className="text-white mb-6 group-hover:text-primary transition-colors" />
    },
    {
      title: 'LINKEDIN',
      desc: 'Connect professionally.',
      link: PROFILE.links.linkedin,
      icon: <Linkedin size={32} className="text-white mb-6 group-hover:text-[#0A66C2] transition-colors" />
    },
    {
      title: 'EMAIL',
      desc: 'Let\'s discuss an opportunity.',
      link: PROFILE.links.email,
      icon: <Mail size={32} className="text-white mb-6 group-hover:text-red-400 transition-colors" />
    }
  ];

  return (
    <div className="py-12 min-h-[70vh] flex flex-col justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="heading-1 mb-4">LET'S CONNECT.</h1>
        <p className="text-lg text-textSecondary">I am currently open to opportunities.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto w-full">
        {contacts.map((c, idx) => (
          <motion.a 
            key={c.title}
            href={c.link}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="group glass-panel p-8 rounded-xl text-center hover:bg-white/5 transition-all duration-300 flex flex-col items-center justify-center border border-white/5 hover:border-white/20"
          >
            {c.icon}
            <h3 className="text-xl font-bold tracking-widest text-white mb-2">{c.title}</h3>
            <p className="text-sm text-textSecondary">{c.desc}</p>
          </motion.a>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mt-32 text-center"
      >
        <div className="inline-block glass-panel p-12 rounded-2xl relative overflow-hidden border border-white/10">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none"></div>
          
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-10 tracking-tight">
            LET'S BUILD SOMETHING<br/>WORTH TALKING ABOUT.
          </h2>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href={PROFILE.links.resume} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 bg-white text-black px-8 py-4 rounded-md font-bold tracking-widest text-sm hover:bg-gray-200 transition-colors w-full sm:w-auto justify-center"
            >
              <FileText size={18} />
              VIEW RESUME
            </a>
            <a 
              href={PROFILE.links.resume} 
              download
              className="flex items-center gap-2 glass-panel border border-white/20 text-white px-8 py-4 rounded-md font-bold tracking-widest text-sm hover:bg-white/10 transition-colors w-full sm:w-auto justify-center"
            >
              <Download size={18} />
              DOWNLOAD
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
