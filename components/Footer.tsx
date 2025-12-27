
import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-white pt-32 pb-16 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <Logo className="w-8 h-8" />
              <span className="text-2xl font-bold tracking-tighter text-zinc-900">e-Falconry</span>
            </div>
            <p className="text-zinc-500 font-medium max-w-sm mb-10 leading-relaxed">
              Surgical precision in Amazon Advertising. Headquartered in Seattle, we scale professional brands through native-level platform intelligence and elite management.
            </p>
            <div className="flex gap-4">
              <SocialIcon icon="LI" />
              <SocialIcon icon="X" />
              <SocialIcon icon="IG" />
            </div>
          </div>

          <div>
            <h4 className="text-zinc-900 font-bold mb-8 uppercase text-[10px] tracking-widest">The Toolkit</h4>
            <ul className="space-y-4 text-zinc-500 font-medium text-sm">
              <li><a href="#" className="hover:text-amber-600 transition-colors">Amazon PPC Optimization</a></li>
              <li><a href="#" className="hover:text-amber-600 transition-colors">Full Account Dominance</a></li>
              <li><a href="#" className="hover:text-amber-600 transition-colors">Listing Design & SEO</a></li>
              <li><a href="#" className="hover:text-amber-600 transition-colors">IP & Brand Protection</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-zinc-900 font-bold mb-8 uppercase text-[10px] tracking-widest">Connect</h4>
            <ul className="space-y-4 text-zinc-500 font-medium text-sm">
              <li className="flex items-center gap-3">
                <span className="text-amber-500">✉</span>
                <a href="mailto:hello@efalconry.com" className="hover:text-zinc-900">hello@efalconry.com</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-amber-500">📍</span>
                <span>Seattle, WA (HQ)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-8 text-xs font-bold uppercase tracking-widest text-zinc-400">
          <div className="text-center md:text-left">
            <p>© 2024 e-Falconry Studio. Seattle Native. Built for Scale.</p>
            <p className="mt-1 text-[9px] opacity-70">e-Falconry is owned and operated by Docley LLC</p>
          </div>
          <div className="flex gap-10">
            <a href="#" className="hover:text-zinc-900 transition-colors">Privacy</a>
            <a href="#" className="hover:text-zinc-900 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon: React.FC<{ icon: string }> = ({ icon }) => (
  <div className="w-12 h-12 rounded-2xl border border-zinc-100 flex items-center justify-center text-zinc-400 hover:border-amber-600 hover:text-amber-600 cursor-pointer transition-all bg-zinc-50">
    <span className="text-xs font-bold">{icon}</span>
  </div>
);

export default Footer;
