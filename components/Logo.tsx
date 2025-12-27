
import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      {/* Background glow for depth */}
      <defs>
        <radialGradient id="logoGlow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.15" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </radialGradient>
      </defs>
      
      <circle cx="50" cy="50" r="45" fill="url(#logoGlow)" className="text-amber-500" />

      {/* Circuit Eagle Head Design */}
      <g className="text-zinc-900">
        {/* Top Head Curve / Brow */}
        <path d="M30 35 L70 35 L85 55" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="30" cy="35" r="2" fill="currentColor" />
        
        {/* Eye Section */}
        <path d="M55 45 L65 45 L72 50" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M58 48 L64 48" stroke="currentColor" strokeWidth="1.5" />
        
        {/* Beak Structure */}
        <path d="M75 45 L90 55 L82 72" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="85" cy="55" r="1.5" fill="white" />

        {/* Parallel Circuit Neck Lines (The 'Feathers') */}
        <path d="M25 45 L55 45 L55 80" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="25" cy="45" r="1.8" fill="currentColor" />
        <circle cx="55" cy="80" r="1.8" fill="currentColor" className="text-amber-600" />

        <path d="M20 55 L50 55 L50 85" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="20" cy="55" r="1.8" fill="currentColor" />
        <circle cx="50" cy="85" r="1.8" fill="currentColor" className="text-amber-600" />

        <path d="M15 65 L45 65 L45 90" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="15" cy="65" r="1.8" fill="currentColor" />
        <circle cx="45" cy="90" r="1.8" fill="currentColor" className="text-amber-600" />

        <path d="M35 40 L60 40 L60 70" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="35" cy="40" r="1.8" fill="currentColor" />
        <circle cx="60" cy="70" r="1.8" fill="currentColor" className="text-amber-600" />
        
        {/* Beak Lower Connect */}
        <path d="M68 60 L78 60" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="68" cy="60" r="1.5" fill="currentColor" />
      </g>
    </svg>
  );
};

export default Logo;
