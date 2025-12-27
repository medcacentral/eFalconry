
import React from 'react';

const services = [
  {
    title: "Surgical PPC Strikes",
    description: "Deep-layer keyword harvesting and predictive bidding. We identify 'prey' traffic with high intent and strike when conversion is guaranteed.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    )
  },
  {
    title: "Account Guarding",
    description: "Full FBA operational management. We protect your listing integrity, resolve IP complaints, and ensure your 'nest' remains undisturbed by hijackers.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: "Predatory Creative",
    description: "Visual indexing that commands authority. Premium A+ Content and Brand Store architectures designed to convert the most skeptical shoppers.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: "10k Foot Analytics",
    description: "Direct-from-Seattle market intelligence. We track category velocity and competitor movement before it affects your bottom line.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  }
];

const Services: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="mb-24 text-center">
        <span className="text-amber-600 font-black tracking-[0.3em] text-[10px] uppercase mb-4 block">Marketplace Capabilities</span>
        <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-zinc-900">The Falcon's Edge.</h2>
        <p className="text-zinc-500 text-xl max-w-2xl mx-auto font-medium">Specialized Amazon tools and strategies for sellers who demand apex performance.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        {services.map((s, idx) => (
          <div key={idx} className="light-card p-12 rounded-[3rem] transition-all duration-700 group relative overflow-hidden bg-white">
            <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 -mr-8 -mt-8 rounded-full blur-2xl group-hover:bg-amber-500/10 transition-all duration-700"></div>
            <div className="w-14 h-14 bg-zinc-900 text-white rounded-2xl flex items-center justify-center mb-10 group-hover:bg-amber-600 group-hover:scale-110 transition-all duration-500 shadow-xl">
              {s.icon}
            </div>
            <h3 className="text-2xl font-bold mb-5 tracking-tight text-zinc-900 group-hover:text-amber-600 transition-colors">{s.title}</h3>
            <p className="text-zinc-500 text-sm leading-relaxed font-medium">{s.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
