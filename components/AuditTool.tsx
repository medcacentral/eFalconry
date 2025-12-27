
import React, { useState, useRef } from 'react';
import { generateAuditResponse } from '../services/geminiService';
import { AuditRequest, AuditResponse } from '../types';

const AuditTool: React.FC = () => {
  const [formData, setFormData] = useState<AuditRequest>({
    brandName: '',
    monthlyRevenue: '',
    currentAcos: '',
    topPainPoint: ''
  });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AuditResponse | null>(null);
  const [error, setError] = useState('');
  const resultRef = useRef<HTMLDivElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setResult(null);

    try {
      const audit = await generateAuditResponse(formData);
      setResult(audit);
      // Give the DOM a moment to render the result then scroll
      setTimeout(() => {
        resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    } catch (err: any) {
      setError(err.message || 'The digital scan was interrupted. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="max-w-5xl mx-auto px-6">
      <div className="text-center mb-20">
        <h2 className="text-5xl md:text-6xl font-bold mb-4 tracking-tighter text-zinc-900 leading-tight">Request A <br/><span className="text-amber-600">Digital Dive.</span></h2>
        <p className="text-zinc-500 text-lg font-medium">Allow our proprietary systems to scan your brand's flight path.</p>
      </div>

      <div className="bg-white p-12 md:p-20 rounded-[4rem] shadow-2xl shadow-zinc-200 border border-zinc-100 relative overflow-hidden">
        {loading && (
          <div className="absolute inset-0 bg-white/95 backdrop-blur-md z-20 flex flex-col items-center justify-center">
            <div className="w-20 h-20 border-[6px] border-amber-500 border-t-transparent rounded-full animate-spin mb-8 shadow-2xl"></div>
            <p className="text-zinc-900 font-black text-xl tracking-tight uppercase italic">Ascending to 10,000 feet...</p>
            <p className="text-zinc-400 text-sm mt-2">Scanning your marketplace footprint for inefficiencies.</p>
          </div>
        )}

        {!result ? (
          <form onSubmit={handleSubmit} className="space-y-12 relative z-10">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 ml-2">Brand Designation</label>
                <input 
                  required
                  type="text" 
                  value={formData.brandName}
                  onChange={e => setFormData({...formData, brandName: e.target.value})}
                  className="w-full bg-zinc-50 border-b-2 border-zinc-100 rounded-none px-2 py-4 focus:border-amber-500 outline-none transition-all font-bold text-lg placeholder:text-zinc-300"
                  placeholder="Zenith Athletics"
                />
              </div>
              <div className="space-y-4">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 ml-2">Monthly Velocity</label>
                <input 
                  required
                  type="text" 
                  value={formData.monthlyRevenue}
                  onChange={e => setFormData({...formData, monthlyRevenue: e.target.value})}
                  className="w-full bg-zinc-50 border-b-2 border-zinc-100 rounded-none px-2 py-4 focus:border-amber-500 outline-none transition-all font-bold text-lg placeholder:text-zinc-300"
                  placeholder="$100k - $500k"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 ml-2">Current ACOS (Efficiency)</label>
                <input 
                  required
                  type="text" 
                  value={formData.currentAcos}
                  onChange={e => setFormData({...formData, currentAcos: e.target.value})}
                  className="w-full bg-zinc-50 border-b-2 border-zinc-100 rounded-none px-2 py-4 focus:border-amber-500 outline-none transition-all font-bold text-lg placeholder:text-zinc-300"
                  placeholder="e.g. 24%"
                />
              </div>
              <div className="space-y-4">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 ml-2">Target Challenge</label>
                <select 
                  required
                  value={formData.topPainPoint}
                  onChange={e => setFormData({...formData, topPainPoint: e.target.value})}
                  className="w-full bg-zinc-50 border-b-2 border-zinc-100 rounded-none px-2 py-4 focus:border-amber-500 outline-none transition-all font-bold text-lg appearance-none cursor-pointer"
                >
                  <option value="">Choose Challenge</option>
                  <option value="Efficiency">Inefficient Ad Spend</option>
                  <option value="Volume">Stagnant Category Growth</option>
                  <option value="Competition">Competitor Aggression</option>
                  <option value="Time">Operational Management</option>
                </select>
              </div>
            </div>

            <button 
              type="submit"
              className="w-full py-6 bg-zinc-900 hover:bg-zinc-800 text-white rounded-3xl font-black text-xl tracking-tight transition-all shadow-2xl shadow-zinc-900/40 hover:-translate-y-1"
            >
              Initiate Digital Dive
            </button>
            {error && <p className="text-red-500 text-center text-sm font-bold uppercase tracking-widest">{error}</p>}
          </form>
        ) : (
          <div ref={resultRef} className="animate-in fade-in zoom-in-95 duration-700 relative z-10">
            <div className="flex items-center justify-between mb-16 border-b border-zinc-100 pb-8">
              <div>
                <span className="text-amber-600 font-black tracking-widest text-[10px] uppercase">Audit Report</span>
                <h3 className="text-4xl font-black text-zinc-900 tracking-tighter mt-1">{formData.brandName}</h3>
              </div>
              <button 
                onClick={() => setResult(null)}
                className="bg-zinc-100 hover:bg-zinc-200 text-zinc-600 px-6 py-2 rounded-xl font-bold text-xs uppercase tracking-widest transition-colors"
              >
                New Scan
              </button>
            </div>

            <div className="space-y-16">
              <section>
                <div className="flex items-center gap-4 mb-6">
                   <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-white">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                   </div>
                   <h4 className="text-lg font-black uppercase tracking-widest text-zinc-900">The Scan</h4>
                </div>
                <p className="text-zinc-500 leading-relaxed font-medium text-lg italic pl-6 border-l-4 border-amber-500">{result.analysis}</p>
              </section>

              <section>
                <div className="flex items-center gap-4 mb-8">
                   <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center text-white">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                   </div>
                   <h4 className="text-lg font-black uppercase tracking-widest text-zinc-900">The Dive: Immediate Strikes</h4>
                </div>
                <div className="grid md:grid-cols-1 gap-6">
                  {result.quickWins.map((win, i) => (
                    <div key={i} className="bg-zinc-50 p-8 rounded-[2rem] border border-zinc-100 flex items-center gap-6 group hover:bg-white hover:shadow-xl transition-all duration-500">
                      <div className="text-amber-500 font-black text-3xl group-hover:scale-125 transition-transform">0{i + 1}</div>
                      <p className="text-zinc-700 text-lg font-bold tracking-tight">{win}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="bg-zinc-900 p-12 rounded-[3rem] text-white">
                <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-amber-500 mb-6">Apex Vision</h4>
                <p className="text-zinc-300 leading-relaxed font-medium text-xl">{result.strategicVision}</p>
                <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-8 border-t border-zinc-800 pt-8">
                  <p className="text-zinc-500 text-sm font-bold uppercase tracking-widest">Ready to dominate your category?</p>
                  <button 
                    onClick={scrollToContact}
                    className="px-12 py-5 bg-amber-500 text-zinc-950 font-black rounded-2xl hover:bg-white transition-all shadow-2xl shadow-amber-500/10"
                  >
                    Partner With The Studio
                  </button>
                </div>
              </section>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuditTool;
