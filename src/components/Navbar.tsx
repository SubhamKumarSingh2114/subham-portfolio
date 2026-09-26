import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Github, FileText } from 'lucide-react';
import { PROFILE } from '../data/profile';
import clsx from 'clsx';

const NAV_LINKS = [
  { name: 'ABOUT', path: '/about' },
  { name: 'EXPERIENCE', path: '/experience' },
  { name: 'PROJECTS', path: '/projects' },
  { name: 'SKILLS', path: '/skills' },
  { name: 'CONTACT', path: '/contact' }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={clsx(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
      scrolled ? 'bg-background/80 backdrop-blur-lg border-white/10 py-4' : 'bg-transparent border-transparent py-6'
    )}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-between">
        
        <Link to="/" className="text-xl font-bold tracking-widest text-white hover:text-primary transition-colors">
          SK <span className="text-textSecondary font-light">/ SUBHAM</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-6">
            {NAV_LINKS.map(link => (
              <NavLink 
                key={link.path}
                to={link.path}
                className={({isActive}) => clsx(
                  'text-xs tracking-widest font-semibold transition-colors',
                  isActive ? 'text-primary' : 'text-textSecondary hover:text-white'
                )}
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center space-x-4 border-l border-white/10 pl-6">
            <a href={PROFILE.links.github} target="_blank" rel="noreferrer" className="text-textSecondary hover:text-white transition-colors" aria-label="GitHub">
              <Github size={20} />
            </a>
            <a href={PROFILE.links.resume} target="_blank" rel="noreferrer" className="flex items-center space-x-2 text-xs font-bold tracking-widest bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-md transition-all">
              <FileText size={16} />
              <span>RESUME</span>
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-textSecondary hover:text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-surface/95 backdrop-blur-xl border-b border-white/10 py-6 px-6 flex flex-col space-y-6">
          {NAV_LINKS.map(link => (
            <NavLink 
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({isActive}) => clsx(
                'text-lg tracking-widest font-semibold',
                isActive ? 'text-primary' : 'text-textSecondary'
              )}
            >
              {link.name}
            </NavLink>
          ))}
          <div className="pt-6 border-t border-white/10 flex items-center justify-between">
            <a href={PROFILE.links.github} target="_blank" rel="noreferrer" className="text-textSecondary hover:text-white">
              <Github size={24} />
            </a>
            <a href={PROFILE.links.resume} target="_blank" rel="noreferrer" className="flex items-center space-x-2 text-sm font-bold tracking-widest bg-primary text-white px-6 py-3 rounded-md">
              <FileText size={16} />
              <span>RESUME</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
