import React from 'react';
const FalconMark = () => (
  <svg width="22" height="26" viewBox="0 0 22 26" fill="none" aria-hidden="true">
    <polygon points="11,0 15,9 12.5,26 9.5,26 7,9" fill="#F07A20"/>
    <polygon points="7,9 0,14 11,23" fill="#EDE9DF" opacity="0.88"/>
    <polygon points="15,9 22,14 11,23" fill="#EDE9DF" opacity="0.88"/>
  </svg>
);
interface NavbarProps { scrolled: boolean; }
const Navbar: React.FC<NavbarProps> = ({ scrolled }) => (
  <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, height: 66, padding: '0 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: scrolled ? 'rgba(7,9,12,0.92)' : 'transparent', backdropFilter: scrolled ? 'blur(16px)' : 'none', borderBottom: scrolled ? '1px solid rgba(255,255,255,0.063)' : '1px solid transparent', transition: 'background 0.35s, border-color 0.35s' }}>
    <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
      <FalconMark />
      <span style={{ fontFamily: 'Syne,sans-serif', fontWeight: 800, fontSize: 17, letterSpacing: '-0.03em' }}>
        <span style={{ color: '#F07A20' }}>e-</span><span style={{ color: '#EDE9DF' }}>Falconry</span>
      </span>
    </a>
    <ul style={{ display: 'flex', gap: '2.25rem', listStyle: 'none', margin: 0, padding: 0 }}>
      {[['How It Works','#how-it-works'],['Services','#services'],['AI Upgrades','#ai'],['Industries','#industries']].map(([l,h]) => (
        <li key={h}><a href={h} style={{ fontFamily: 'Syne,sans-serif', fontSize: 13, color: '#7C8494', textDecoration: 'none' }}>{l}</a></li>
      ))}
    </ul>
    <a href="#cta" style={{ background: '#F07A20', color: '#fff', fontFamily: 'Syne,sans-serif', fontWeight: 700, fontSize: 13, padding: '10px 22px', borderRadius: 7, textDecoration: 'none' }}>Claim Your Site →</a>
  </nav>
);
export default Navbar;