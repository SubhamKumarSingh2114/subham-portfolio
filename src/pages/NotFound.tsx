import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center">
      <h1 className="text-9xl font-bold text-white/10 mb-4">404</h1>
      <h2 className="text-2xl font-bold text-white tracking-widest mb-8">SYSTEM_NOT_FOUND</h2>
      <Link to="/" className="text-primary hover:text-white transition-colors border border-primary/50 hover:border-white px-6 py-2 rounded">
        RETURN TO ROOT
      </Link>
    </div>
  );
}
