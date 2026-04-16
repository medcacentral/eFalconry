import React, { useEffect, useRef } from 'react';
const TICKER = ['Web Design','AI Chatbots','Online Booking','Google Ads','Local SEO','Review Management','Lead Generation','Brand Kits','Website Hosting','AI Automation'];
const Hero: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => { if (ref.current) ref.current.innerHTML += ref.current.innerHTML; }, []);
  const f = (d: number): React.CSSProperties => ({ opacity: 0, animation: `fadeUp 0.7s ${d}s forwards` });
  return (
    <>
      <style>{`@keyframes fadeUp{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}@keyframes ticker{from{transform:translateX(0)}to{transform:translateX(-50%)}}.tk{animation:ticker 40s linear infinite}`}</style>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '130px 2rem 90px', maxWidth: 1100, margin: '0 auto' }}>
        <p style={{ ...f(0.1), fontFamily: 'Syne,sans-serif', fontSize: 12, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#F07A20', marginBottom: '1.75rem', display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ width: 30, height: 2, background: '#F07A20', display: 'block', flexShrink: 0 }}/>Web Design &amp; Digital Services — Local Business
        </p>
        <h1 style={{ ...f(0.22), fontFamily: 'Bebas Neue,cursive', fontSize: 'clamp(66px,11vw,146px)', lineHeight: 0.9, color: '#EDE9DF', marginBottom: '2rem' }}>
          WE ALREADY<br/>BUILT YOUR<br/><span style={{ color: '#F07A20' }}>NEW WEBSITE.</span>
        </h1>
        <p style={{ ...f(0.38), fontSize: 'clamp(16px,2vw,19px)', fontWeight: 300, color: '#7C8494', maxWidth: 560, lineHeight: 1.72, marginBottom: '2.75rem' }}>
          We scanned your business, audited your current site, and designed a modern replacement — before ever contacting you. For $99, it's yours. No contracts. No waiting. No risk.
        </p>
        <div style={{ ...f(0.52), display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '4rem' }}>
          <a href="#cta" style={{ background: '#F07A20', color: '#fff', fontFamily: 'Syne,sans-serif', fontWeight: 700, fontSize: 15, padding: '14px 32px', borderRadius: 8, textDecoration: 'none' }}>Claim Your Site for $99</a>
          <a href="#how-it-works" style={{ color: '#EDE9DF', fontFamily: 'Syne,sans-serif', fontWeight: 700, fontSize: 15, padding: '13px 32px', borderRadius: 8, border: '1px solid rgba(255,255,255,0.13)', textDecoration: 'none' }}>See How It Works ↓</a>
        </div>
        <div style={{ ...f(0.64), display: 'flex', gap: '3rem', flexWrap: 'wrap', paddingTop: '2.5rem', borderTop: '1px solid rgba(255,255,255,0.063)' }}>
          {[['$99','Entry price — one-time'],['48hr','Average delivery'],['$0','Hidden fees. Zero.'],['AI+','Powered upgrades available']].map(([n,l]) => (
            <div key={l}><div style={{ fontFamily: 'Bebas Neue,cursive', fontSize: 50, lineHeight: 1, color: '#EDE9DF' }}>{n}</div><div style={{ fontSize: 12, color: '#7C8494', marginTop: 5, fontFamily: 'Syne,sans-serif' }}>{l}</div></div>
          ))}
        </div>
      </div>
      <div style={{ overflow: 'hidden', background: '#0F1218', borderTop: '1px solid rgba(255,255,255,0.063)', borderBottom: '1px solid rgba(255,255,255,0.063)', padding: '14px 0' }}>
        <div className="tk" ref={ref} style={{ display: 'flex', gap: '3rem', whiteSpace: 'nowrap' }}>
          {TICKER.map((item,i) => <span key={i} style={{ fontFamily: 'Syne,sans-serif', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#40455A', flexShrink: 0 }}>{item}<span style={{ color: '#F07A20', marginLeft: '1.5rem' }}> ✦</span></span>)}
        </div>
      </div>
    </>
  );
};
export default Hero;