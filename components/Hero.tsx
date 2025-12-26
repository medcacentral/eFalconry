
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative pt-44 pb-32 px-6 md:px-12 flex flex-col items-center text-center max-w-7xl mx-auto min-h-[90vh] justify-center overflow-hidden">
      {/* Background Digital Falcon Motif */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.03] pointer-events-none select-none">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <path 
            d="M20,60 L100,20 L180,60 L100,180 Z M100,20 V180 M60,40 L140,40 M40,80 L160,80 M100,40 L100,60" 
            stroke="currentColor" 
            strokeWidth="0.5" 
            fill="none" 
          />
        </svg>
      </div>

      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-100 text-[10px] font-black text-amber-700 mb-10 tracking-[0.3em] uppercase">
        <span className="flex h-1.5 w-1.5 rounded-full bg-amber-500 animate-ping"></span>
        Digital Apex Strategy
      </div>
      
      <h1 className="text-6xl md:text-9xl font-bold text-zinc-900 mb-8 leading-[0.95] max-w-5xl tracking-tighter">
        The Precision <br/>
        <span className="text-transparent bg-clip-text bg-gradient-to-br from-amber-500 via-orange-500 to-amber-700">of the Hunt.</span>
      </h1>

      <p className="text-xl md:text-2xl text-zinc-500 max-w-3xl mb-14 leading-relaxed font-medium">
        High-altitude Amazon Advertising for brands that refuse to settle for scraps. We don't cast nets; we strike with digital talons.
      </p>

      <div className="flex flex-col sm:flex-row gap-6 relative z-10">
        <button 
          onClick={() => document.getElementById('audit')?.scrollIntoView({ behavior: 'smooth' })}
          className="px-12 py-6 bg-zinc-900 hover:bg-zinc-800 text-white rounded-2xl font-bold text-xl transition-all shadow-2xl shadow-zinc-900/30 hover:-translate-y-1"
        >
          Begin The Audit
        </button>
        <button 
          onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          className="px-12 py-6 bg-white border border-zinc-200 hover:border-zinc-300 text-zinc-900 rounded-2xl font-bold text-xl transition-all hover:bg-zinc-50 shadow-sm"
        >
          Our Flight Path
        </button>
      </div>

      <div className="mt-32 grid grid-cols-2 lg:grid-cols-4 gap-16 w-full max-w-5xl border-t border-zinc-100 pt-16">
        <Metric label="Marketplace Velocity" value="3.5x" />
        <Metric label="Predatory ROAS" value="8.4:1" />
        <Metric label="Account Survival" value="100%" />
        <Metric label="Client Focus" value="Boutique" />
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
