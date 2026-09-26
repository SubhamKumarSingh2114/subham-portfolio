import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROFILE } from '../data/profile';
import { ArrowRight, FileText, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ROLES = [
  { title1: 'SOFTWARE', title2: 'ENGINEER', term: 'software_engineer' },
  { title1: 'DATA', title2: 'ANALYST', term: 'data_analyst' },
  { title1: 'DATA', title2: 'ENGINEER', term: 'data_engineer' },
  { title1: 'PRODUCT', title2: 'ENGINEER', term: 'product_engineer' }
];

function Terminal({ roleIdx }: { roleIdx: number }) {
  const [lines, setLines] = useState<string[]>([]);
  
  useEffect(() => {
    const commands = [
      { cmd: 'whoami', out: 'subham_kumar_singh' },
      { cmd: 'role', out: 'software_engineer' },
      { cmd: 'focus', out: 'Full-Stack • Product • Systems' },
      { cmd: 'status', out: 'OPEN_TO_OPPORTUNITIES_' }
    ];
    
    let currentLine = 0;
    
    const interval = setInterval(() => {
      if (currentLine < commands.length) {
        const cmd = commands[currentLine].cmd;
        const out = commands[currentLine].out;
        setLines(prev => [...prev, `$ ${cmd}`, out]);
        currentLine++;
      }
    }, 800);
    
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    setLines(prev => {
      if (prev.length > 3) {
        const next = [...prev];
        next[3] = ROLES[roleIdx].term;
        return next;
      }
      return prev;
    });
  }, [roleIdx]);

  return (
    <div className="font-mono text-sm sm:text-base glass-panel rounded-lg p-6 w-full max-w-md mt-12 md:mt-0 border border-white/10 shadow-2xl relative overflow-hidden group">
      <div className="absolute top-0 left-0 right-0 h-8 bg-white/5 border-b border-white/10 flex items-center px-4 space-x-2">
        <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
        <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
      </div>
      <div className="pt-6 space-y-2 text-textSecondary">
        {lines.map((line, i) => (
          <div key={i} className="flex">
            {line.startsWith('$') ? (
              <span className="text-white font-medium mr-2">{line}</span>
            ) : (
              <span className={line.includes('OPEN') ? 'text-green-400' : 'text-primary'}>{line}</span>
            )}
          </div>
        ))}
        <motion.div 
          animate={{ opacity: [0, 1, 0] }} 
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="w-3 h-5 bg-primary inline-block ml-2 mt-1"
        />
      </div>
    </div>
  );
}

function TechVisual() {
  const tech = ['Python', 'AI/ML', 'FastAPI', 'DSA', 'MongoDB', 'AWS'];
  return (
    <div className="relative w-full h-[300px] sm:h-[400px] flex items-center justify-center mt-12 md:mt-0 opacity-80 pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10" />
      {tech.map((item, i) => {
        const angle = (i / tech.length) * Math.PI * 2;
        const radius = 120;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        
        return (
          <motion.div
            key={item}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1, x, y }}
            transition={{ duration: 1, delay: i * 0.2 }}
            className="absolute bg-surface border border-white/10 px-4 py-2 rounded-full text-xs font-mono tracking-wider shadow-lg"
          >
            {item}
          </motion.div>
        );
      })}
      
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="w-48 h-48 rounded-full border border-primary/20 border-dashed absolute"
      />
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="w-72 h-72 rounded-full border border-white/5 absolute"
      />
      
      <div className="bg-primary/20 p-6 rounded-full blur-2xl absolute" />
      <div className="text-white font-bold tracking-widest text-lg z-20">SYSTEMS</div>
    </div>
  );
}

export default function Home() {
  const [roleIdx, setRoleIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIdx(prev => (prev + 1) % ROLES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-[80vh] flex flex-col justify-center pt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h2 className="text-primary font-mono text-sm tracking-widest uppercase">
              {PROFILE.name}
            </h2>
            <h1 className="heading-1 h-32 md:h-40 flex flex-col justify-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={roleIdx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <span className="block text-white mb-2">{ROLES[roleIdx].title1}</span>
                  <span className="block text-textSecondary text-3xl md:text-4xl lg:text-5xl">{ROLES[roleIdx].title2}</span>
                </motion.div>
              </AnimatePresence>
            </h1>
            <p className="text-lg text-textSecondary max-w-xl leading-relaxed mt-6">
              {PROFILE.headline}
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <Link to="/projects" className="group flex items-center gap-2 bg-white text-black px-6 py-3 rounded-sm font-semibold tracking-wide hover:bg-gray-200 transition-colors">
              EXPLORE MY WORK
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href={PROFILE.links.resume} target="_blank" rel="noreferrer" className="flex items-center gap-2 glass-panel hover:bg-white/10 text-white px-6 py-3 rounded-sm font-semibold tracking-wide transition-colors">
              <FileText size={18} />
              VIEW RESUME
            </a>
          </div>

          <div className="flex gap-6 pt-8 border-t border-white/10">
            <a href={PROFILE.links.github} target="_blank" rel="noreferrer" className="text-sm font-mono tracking-wider text-textSecondary hover:text-white flex items-center gap-1 group">
              <ChevronRight size={14} className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" /> GitHub
            </a>
            <a href={PROFILE.links.linkedin} target="_blank" rel="noreferrer" className="text-sm font-mono tracking-wider text-textSecondary hover:text-white flex items-center gap-1 group">
              <ChevronRight size={14} className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" /> LinkedIn
            </a>
            <a href={PROFILE.links.email} className="text-sm font-mono tracking-wider text-textSecondary hover:text-white flex items-center gap-1 group">
              <ChevronRight size={14} className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" /> Email
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex flex-col items-center relative"
        >
          <TechVisual />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full flex justify-center mt-20 z-30">
            <Terminal roleIdx={roleIdx} />
          </div>
        </motion.div>
        
      </div>
    </div>
  );
}
