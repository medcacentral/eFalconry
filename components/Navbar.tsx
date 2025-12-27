
import React from 'react';
import Logo from './Logo';

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 flex justify-center">
      <div className="w-full max-w-5xl flex items-center justify-between glass-nav px-8 py-4 rounded-3xl shadow-xl shadow-black/5">
        <div className="flex items-center gap-3 cursor-pointer group" onClick={() => scrollTo('home')}>
          <Logo className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
          <span className="text-xl font-bold tracking-tight text-zinc-900">e-Falconry</span>
        </div>

        <div className="hidden md:flex items-center gap-10">
          <NavLink label="Expertise" active={activeSection === 'services'} onClick={() => scrollTo('services')} />
          <NavLink label="Precision Audit" active={activeSection === 'audit'} onClick={() => scrollTo('audit')} />
          <NavLink label="Philosophy" active={activeSection === 'about'} onClick={() => scrollTo('about')} />
        </div>

        <button 
          onClick={() => scrollTo('audit')}
          className="bg-zinc-900 hover:bg-zinc-800 text-white px-6 py-2.5 rounded-2xl font-semibold text-sm transition-all hover:shadow-lg hover:-translate-y-0.5"
        >
          Partner With Us
        </button>
      </div>
    </nav>
  );
};

const NavLink: React.FC<{ label: string; active: boolean; onClick: () => void }> = ({ label, active, onClick }) => (
  <button 
    onClick={onClick}
    className={`text-sm font-semibold transition-all ${active ? 'text-amber-600' : 'text-zinc-500 hover:text-zinc-900'}`}
  >
    {label}
  </button>
);

export default Navbar;
