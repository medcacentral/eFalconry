import React from 'react';
const niches=['Restaurants','Contractors','Healthcare','Retail','Auto Services','Legal','Beauty & Wellness','Fitness','Real Estate','Pet Services','Landscaping','Food & Catering'];
const Industries: React.FC = () => (
  <section id="industries" style={{padding:'100px 0'}}>
    <div style={{maxWidth:1100,margin:'0 auto',padding:'0 2rem'}}>
      <p style={{fontFamily:'Syne,sans-serif',fontSize:11,fontWeight:700,letterSpacing:'0.16em',textTransform:'uppercase' as const,color:'#F07A20',marginBottom:'1rem'}}>Industries We Serve</p>
      <h2 style={{fontFamily:'Bebas Neue,cursive',fontSize:'clamp(40px,6vw,78px)',lineHeight:0.93,color:'#EDE9DF',marginBottom:'1.5rem'}}>WE WORK WITH <span style={{color:'#F07A20'}}>ALL NICHES</span></h2>
      <p style={{fontSize:17,color:'#7C8494',fontWeight:300,lineHeight:1.72,maxWidth:560,marginBottom:'3.5rem'}}>From restaurants to law firms — if your business has customers, we can build something better and help you grow in the digital age.</p>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(160px,1fr))',gap:1,background:'rgba(255,255,255,0.063)',border:'1px solid rgba(255,255,255,0.063)',borderRadius:18,overflow:'hidden'}}>
        {niches.map(n=>(
          <div key={n} style={{background:'#0F1218',padding:'1.5rem',display:'flex',alignItems:'center',gap:'0.9rem'}}>
            <div style={{width:2,height:28,background:'rgba(255,255,255,0.15)',borderRadius:1,flexShrink:0}}/>
            <span style={{fontFamily:'Syne,sans-serif',fontWeight:600,fontSize:14,color:'#EDE9DF'}}>{n}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);
export default Industries;