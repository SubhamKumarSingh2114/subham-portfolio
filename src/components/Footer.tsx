import { PROFILE } from '../data/profile';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-textSecondary text-sm">
          © {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
        </p>
        <div className="flex space-x-6 text-sm">
          <a href={PROFILE.links.github} target="_blank" rel="noreferrer" className="text-textSecondary hover:text-white transition-colors">GitHub</a>
          <a href={PROFILE.links.linkedin} target="_blank" rel="noreferrer" className="text-textSecondary hover:text-white transition-colors">LinkedIn</a>
          <a href={PROFILE.links.email} className="text-textSecondary hover:text-white transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
}
