
import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      {/* Sleek Minimalist Falcon Profile */}
      <path 
        d="M20 45C20 45 35 30 55 25C75 20 85 30 85 30L65 40L80 50L45 75L50 55L35 60L20 45Z" 
        fill="currentColor" 
        className="text-amber-500" 
        fillOpacity="0.1" 
      />
      <path 
        d="M20 45C20 45 35 30 55 25C75 20 85 30 85 30M85 30L65 40M65 40L80 50M80 50L45 75M45 75L50 55M50 55L35 60M35 60L20 45" 
        stroke="currentColor" 
        strokeWidth="4" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        className="text-zinc-900"
      />
      {/* Eye of the Falcon */}
      <circle cx="58" cy="35" r="2" fill="currentColor" className="text-zinc-900" />
      {/* Beak Accent */}
      <path 
        d="M85 30L78 35" 
        stroke="currentColor" 
        strokeWidth="4" 
        strokeLinecap="round" 
        className="text-zinc-900"
      />
    </svg>
  );
};

export default Logo;
