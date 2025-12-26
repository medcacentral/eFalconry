
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import AuditTool from './components/AuditTool';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'audit', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen selection:bg-amber-500 selection:text-white bg-[#fcfcfd]">
      <Navbar activeSection={activeSection} />
      
      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="services" className="py-40 bg-white">
          <Services />
        </section>

        <section id="audit" className="py-40 bg-zinc-50">
          <AuditTool />
        </section>

        <section id="about" className="py-40 px-6 md:px-12 max-w-7xl mx-auto grid lg:grid-cols-2 gap-32 items-center">
          <div className="relative z-10">
            <span className="text-amber-600 font-black tracking-[0.4em] text-[10px] uppercase mb-8 block">The Ethos</span>
            <h2 className="text-5xl md:text-7xl font-bold mb-10 tracking-tighter text-zinc-900 leading-[0.95]">Precision <br/><span className="italic font-light">is not an option.</span></h2>
            <div className="space-y-8">
              <p className="text-zinc-600 text-xl leading-relaxed font-medium">
                In the digital wild, most agencies are scavengers. They chase volume, ignore profit, and cast wide, clumsy nets.
              </p>
              <p className="text-zinc-600 text-xl leading-relaxed font-medium">
                e-Falconry is built on the <span className="text-zinc-900 font-bold">Precision of the Hunt.</span> We work with a select few apex brands, applying a singular focus to every campaign strike. We value lethal efficiency over bloated spend.
              </p>
            </div>
            
            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-14 h-14 rounded-full border-4 border-white bg-zinc-100 overflow-hidden shadow-lg">
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Partner" />
                  </div>
                ))}
              </div>
              <p className="text-xs font-black uppercase tracking-widest text-zinc-400">Trusted by Apex Brands</p>
            </div>
          </div>
          
          <div className="relative group perspective-1000">
            <div className="absolute -inset-10 bg-gradient-to-tr from-amber-500/10 to-transparent rounded-[5rem] blur-3xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative rounded-[4rem] overflow-hidden aspect-[1/1] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border border-white">
               <img 
                 src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=1200&auto=format&fit=crop" 
                 alt="Digital Predator" 
                 className="w-full h-full object-cover grayscale brightness-110 transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/20 to-transparent"></div>
               <div className="absolute bottom-10 left-10 p-10 bg-white/90 backdrop-blur-xl rounded-[2.5rem] border border-white/50 shadow-2xl max-w-xs">
                 <p className="text-zinc-900 font-black text-3xl tracking-tighter mb-2">10k Feet</p>
                 <p className="text-zinc-500 font-bold text-sm leading-tight">Total visibility into category shifts before they happen.</p>
               </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
