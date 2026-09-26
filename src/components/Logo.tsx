import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <Link to="/" className="group flex items-center gap-3" aria-label="Subham Kumar Singh — Home">
      {/* Geometric monogram mark */}
      <svg
        width="38"
        height="38"
        viewBox="0 0 38 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0 transition-transform duration-300 group-hover:scale-105"
        aria-hidden="true"
      >
        {/* Outer hexagon border */}
        <path
          d="M19 2L34.5885 11V29L19 38L3.41154 29V11L19 2Z"
          stroke="#6d28d9"
          strokeWidth="1.5"
          fill="none"
          opacity="0.7"
        />
        {/* Inner hexagon fill */}
        <path
          d="M19 7L30.2583 13.5V26.5L19 33L7.74167 26.5V13.5L19 7Z"
          fill="#6d28d9"
          opacity="0.12"
        />
        {/* "S" letterform — two horizontal bars + diagonal */}
        {/* Top bar */}
        <rect x="11.5" y="11.5" width="10" height="2" rx="1" fill="#8b5cf6" />
        {/* Middle bar */}
        <rect x="11.5" y="18" width="10" height="2" rx="1" fill="#8b5cf6" />
        {/* Bottom bar */}
        <rect x="11.5" y="24.5" width="10" height="2" rx="1" fill="#8b5cf6" />
        {/* Top-right vertical stroke */}
        <rect x="19.5" y="11.5" width="2" height="8.5" rx="1" fill="#6d28d9" />
        {/* Bottom-left vertical stroke */}
        <rect x="11.5" y="18" width="2" height="8.5" rx="1" fill="#6d28d9" />
        {/* Accent dot */}
        <circle cx="27" cy="11" r="2" fill="#8b5cf6" opacity="0.9" />
      </svg>

      {/* Wordmark */}
      <div className="flex flex-col leading-none">
        <span className="text-white font-bold text-sm tracking-[0.18em] uppercase">
          Subham
        </span>
        <span className="text-[#6d28d9] font-mono text-[10px] tracking-[0.25em] uppercase mt-0.5">
          Kumar Singh
        </span>
      </div>
    </Link>
  );
}
