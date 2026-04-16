import React from 'react';
const steps=[{n:'01',title:'We Find You',desc:'Our AI scans Google Maps and local directories, then audits your existing website — scoring design, speed, mobile readiness, and trust signals.',tag:'AI-Powered Scan'},{n:'02',title:'We Build First',desc:'Before we ever contact you, we have already designed your replacement. You see the finished website — not a concept, not a mockup. The real thing.',tag:'Done Before You Ask'},{n:'03',title:'You Decide',desc:'We send you the link by email and text. $99 to claim it. Love it or walk away — no pressure, no sales call, no invoice until you say yes.',tag:'Zero Commitment'},{n:'04',title:'We Launch',desc:'We handle install, domain connection, and go-live on your existing host — or set up hosting for you. Zero effort on your end.',tag:'Full White-Glove'}];
const HowItWorks: React.FC = () => (
  <section id="how-it-works" style={{padding:'100px 0'}}>
    <div style={{maxWidth:1100,margin:'0 auto',padding:'0 2rem'}}>
      <p style={{fontFamily:'Syne,sans-serif',fontSize:11,fontWeight:700,letterSpacing:'0.16em',textTransform:'uppercase' as const,color:'#F07A20',marginBottom:'1rem'}}>The Process</p>
      <h2 style={{fontFamily:'Bebas Neue,cursive',fontSize:'clamp(40px,6vw,78px)',lineHeight:0.93,color:'#EDE9DF',marginBottom:'1.5rem'}}>HOW IT <span style={{color:'#F07A20'}}>WORKS</span></h2>
      <p style={{fontSize:17,color:'#7C8494',fontWeight:300,lineHeight:1.72,maxWidth:560,marginBottom:'3.5rem'}}>We have removed every ounce of friction. Most business owners make a decision in under 5 minutes — because there is nothing to think about except yes or not now.</p>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',gap:1,background:'rgba(255,255,255,0.063)',border:'1px solid rgba(255,255,255,0.063)',borderRadius:18,overflow:'hidden'}}>
        {steps.map(s=>(
          <div key={s.n} style={{background:'#0F1218',padding:'2.5rem 2rem'}}>
            <div style={{fontFamily:'Bebas Neue,cursive',fontSize:76,color:'#40455A',lineHeight:1,marginBottom:'1.5rem'}}>{s.n}</div>
            <div style={{fontFamily:'Syne,sans-serif',fontWeight:700,fontSize:17,color:'#EDE9DF',marginBottom:'0.7rem'}}>{s.title}</div>
            <div style={{fontSize:14,color:'#7C8494',lineHeight:1.65}}>{s.desc}</div>
            <span style={{display:'inline-block',marginTop:'1.25rem',background:'rgba(240,122,32,0.11)',color:'#F07A20',fontFamily:'Syne,sans-serif',fontSize:11,fontWeight:700,letterSpacing:'0.07em',textTransform:'uppercase' as const,padding:'4px 12px',borderRadius:20,border:'1px solid rgba(240,122,32,0.2)'}}>{s.tag}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);
export default HowItWorks;