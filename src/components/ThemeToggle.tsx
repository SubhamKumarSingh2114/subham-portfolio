import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import clsx from 'clsx';

interface ThemeToggleProps {
  className?: string;
}

export default function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className={clsx(
        'relative p-2 rounded-lg border transition-all duration-300 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary/40',
        'bg-surface/60 border-white/10 text-textSecondary hover:text-textPrimary hover:border-white/20 hover:bg-surface',
        className
      )}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        <Sun
          size={18}
          className={clsx(
            'absolute transition-all duration-300 transform',
            isDark
              ? 'opacity-0 rotate-90 scale-0'
              : 'opacity-100 rotate-0 scale-100 text-amber-500'
          )}
        />
        <Moon
          size={18}
          className={clsx(
            'absolute transition-all duration-300 transform',
            isDark
              ? 'opacity-100 rotate-0 scale-100 text-purple-300'
              : 'opacity-0 -rotate-90 scale-0'
          )}
        />
      </div>
    </button>
  );
}
