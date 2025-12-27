
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative pt-44 pb-32 px-6 md:px-12 flex flex-col items-center text-center max-w-7xl mx-auto min-h-[90vh] justify-center overflow-hidden">
      {/* Background Digital Falcon Motif */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.04] pointer-events-none select-none">
        <svg viewBox="0 0 200 200" className="w-full h-full text-amber-600">
          <path 
            d="M20,60 L100,20 L180,60 L100,180 Z M100,20 V180 M60,40 L140,40 M40,80 L160,80 M100,40 L100,60" 
            stroke="currentColor" 
            strokeWidth="0.5" 
            fill="none" 
          />
          <path d="M50 100 Q100 50 150 100" stroke="currentColor" strokeWidth="0.2" fill="none" />
        </svg>
      </div>

      {/* Floating Falcon Icon */}
      <div className="mb-8 soft-float">
        <svg 
          viewBox="0 0 100 100" 
          className="w-16 h-16 text-amber-500 drop-shadow-[0_10px_20px_rgba(245,158,11,0.2)]"
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M50 20 L20 40 L35 45 L15 65 L40 60 L50 85 L60 60 L85 65 L65 45 L80 40 Z" 
            stroke="currentColor" 
            strokeWidth="2.5" 
            strokeLinejoin="round"
            className="fill-amber-500/10"
          />
          <circle cx="50" cy="45" r="3" fill="currentColor" />
          <path d="M45 45 L55 45" stroke="white" strokeWidth="1" />
        </svg>
      </div>
      
      <h1 className="text-6xl md:text-9xl font-bold text-zinc-900 mb-8 leading-[0.95] max-w-5xl tracking-tighter">
        Dominate The <br/>
        <span className="text-transparent bg-clip-text bg-gradient-to-br from-amber-500 via-orange-600 to-zinc-900">Amazon Canopy.</span>
      </h1>

      <p className="text-xl md:text-2xl text-zinc-500 max-w-3xl mb-14 leading-relaxed font-medium">
        Precision-led Advertising and Full Account Management for high-volume sellers. From the shadow of the Seattle Spheres, we strike with surgical PPC and absolute Buy Box dominance.
      </p>

      <div className="flex flex-col sm:flex-row gap-6 relative z-10">
        <button 
          onClick={() => document.getElementById('audit')?.scrollIntoView({ behavior: 'smooth' })}
          className="px-12 py-6 bg-zinc-900 hover:bg-amber-600 text-white rounded-2xl font-bold text-xl transition-all shadow-2xl shadow-zinc-900/30 hover:-translate-y-1"
        >
          Initiate Digital Dive
        </button>
        <button 
          onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          className="px-12 py-6 bg-white border border-zinc-200 hover:border-zinc-300 text-zinc-900 rounded-2xl font-bold text-xl transition-all hover:bg-zinc-50 shadow-sm"
        >
          View The Flight Path
        </button>
      </div>

      <div className="mt-32 grid grid-cols-2 lg:grid-cols-4 gap-16 w-full max-w-5xl border-t border-zinc-100 pt-16">
        <Metric label="Buy Box Retention" value="99.2%" />
        <Metric label="Average ROAS Lift" value="+142%" />
        <Metric label="Account Health" value="A+" />
        <Metric label="Headquarters" value="Seattle" />
      </div>
    </div>
  );
};

const Metric: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="flex flex-col items-center">
    <div className="text-4xl font-bold text-zinc-900 tracking-tighter">{value}</div>
    <div className="text-[10px] text-zinc-400 font-black uppercase tracking-[0.2em] mt-3">{label}</div>
  </div>
);

export default Hero;
