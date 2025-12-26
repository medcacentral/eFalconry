
import React from 'react';

const services = [
  {
    title: "Apex PPC Sight",
    description: "Deep-layer advertising strategy using machine precision to identify high-intent 'prey' keywords. We strike when the intent is highest.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <circle cx="12" cy="12" r="3" strokeWidth={2.5} />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "The Nest: Operations",
    description: "Total account security and management. We guard your brand's integrity, inventory, and health like a falcon guarding its brood.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    )
  },
  {
    title: "Visual Plumage",
    description: "Listing optimization that commands authority. We create A+ content and Brand Stores that signal high-tier dominance to consumers.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: "High-Altitude Intel",
    description: "Proprietary dashboards that give you 10,000ft clarity. Real-time profit tracking and market share analytics for total visibility.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  }
];

const Services: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="mb-24 text-center">
        <span className="text-amber-600 font-black tracking-[0.3em] text-[10px] uppercase mb-4 block">Predatory Capabilities</span>
        <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-zinc-900">How We Hunt.</h2>
        <p className="text-zinc-500 text-xl max-w-2xl mx-auto font-medium">Boutique strategies for those who demand the highest tier of marketplace performance.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        {services.map((s, idx) => (
          <div key={idx} className="light-card p-12 rounded-[3rem] transition-all duration-700 group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 -mr-8 -mt-8 rounded-full blur-2xl group-hover:bg-amber-500/20 transition-all duration-700"></div>
            <div className="w-14 h-14 bg-zinc-900 text-white rounded-2xl flex items-center justify-center mb-10 group-hover:bg-amber-500 transition-all duration-500 shadow-xl">
              {s.icon}
            </div>
            <h3 className="text-2xl font-bold mb-5 tracking-tight text-zinc-900">{s.title}</h3>
            <p className="text-zinc-500 text-sm leading-relaxed font-medium">{s.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
