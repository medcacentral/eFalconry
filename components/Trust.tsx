import React from 'react';
const Trust: React.FC = () => (
  <section style={{background:'#0F1218',borderTop:'1px solid rgba(255,255,255,0.063)',borderBottom:'1px solid rgba(255,255,255,0.063)',padding:'100px 0'}}>
    <div style={{maxWidth:1100,margin:'0 auto',padding:'0 2rem'}}>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',gap:1,background:'rgba(255,255,255,0.063)',border:'1px solid rgba(255,255,255,0.063)',borderRadius:18,overflow:'hidden',marginBottom:'5rem'}}>
        {([['0.05s','The time a visitor takes to form a first impression — and decide if you are worth trusting.'],['75%','Of consumers judge a business credibility directly from its website design. Not what you offer — how you look.'],['3x','More leads for businesses with professional, modern websites compared to outdated ones.']] as [string,string][]).map(([n,t])=>(
          <div key={n} style={{background:'#0F1218',padding:'3rem 2.5rem'}}>
            <div style={{fontFamily:'Bebas Neue,cursive',fontSize:76,lineHeight:0.9,color:'#F07A20',marginBottom:'1rem'}}>{n}</div>
            <div style={{fontSize:14,color:'#7C8494',lineHeight:1.6,maxWidth:210}}>{t}</div>
          </div>
        ))}
      </div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))',gap:'4rem',alignItems:'center'}}>
        <div>
          <p style={{fontFamily:'Syne,sans-serif',fontSize:11,fontWeight:700,letterSpacing:'0.16em',textTransform:'uppercase' as const,color:'#F07A20',marginBottom:'1rem'}}>Why Your Website Matters</p>
          <h2 style={{fontFamily:'Bebas Neue,cursive',fontSize:'clamp(36px,5vw,66px)',lineHeight:0.93,color:'#EDE9DF',marginBottom:'1.5rem'}}>YOUR WEBSITE IS YOUR <span style={{color:'#F07A20'}}>BEST SALESPERSON.</span></h2>
          <p style={{fontSize:16,color:'#7C8494',lineHeight:1.72,marginBottom:'1.25rem'}}>Before a customer ever walks through your door, calls your number, or places an order — they check your website. In seconds, they decide if you look professional, trustworthy, and worth their money.</p>
          <p style={{fontSize:16,color:'#7C8494',lineHeight:1.72,marginBottom:'1.25rem'}}>A modern website signals competence. It answers questions, builds confidence, and converts visitors into paying customers. An outdated site drives them straight to a competitor.</p>
          <p style={{fontSize:16,color:'#7C8494',lineHeight:1.72}}>The average local business site we audit scores <strong style={{color:'#EDE9DF'}}>29 out of 100</strong> — broken layouts, outdated info, zero trust signals. We fix that, fast.</p>
        </div>
        <div style={{background:'#181C26',border:'1px solid rgba(255,255,255,0.13)',borderRadius:18,padding:'2.5rem'}}>
          {([{label:'Average local business site',score:'29 / 100',pct:'29%',color:'#E03030',note:'Outdated design, no mobile optimization, no trust signals, no SEO'},{label:'After e-Falconry rebuild',score:'94 / 100',pct:'94%',color:'#F07A20',note:'Modern design, fast load, mobile-ready, SEO, trust signals active'}]).map(row=>(
            <div key={row.label} style={{marginBottom:'2rem'}}>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'baseline',marginBottom:'0.75rem'}}>
                <span style={{fontFamily:'Syne,sans-serif',fontSize:13,fontWeight:600,color:'#7C8494'}}>{row.label}</span>
                <span style={{fontFamily:'Bebas Neue,cursive',fontSize:22,color:row.color}}>{row.score}</span>
              </div>
              <div style={{height:6,background:'rgba(255,255,255,0.063)',borderRadius:3,overflow:'hidden'}}>
                <div style={{height:'100%',width:row.pct,background:row.color,borderRadius:3}}/>
              </div>
              <div style={{fontSize:11,color:'#40455A',marginTop:'0.6rem',fontFamily:'Syne,sans-serif'}}>{row.note}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
export default Trust;