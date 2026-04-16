import React from 'react';
const Offer: React.FC = () => (
  <section style={{padding:'100px 0'}}>
    <div style={{maxWidth:1100,margin:'0 auto',padding:'0 2rem'}}>
      <div style={{background:'#0F1218',border:'1px solid rgba(255,255,255,0.063)',borderRadius:18,padding:'64px',display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',gap:'4rem',alignItems:'center'}}>
        <div>
          <p style={{fontFamily:'Syne,sans-serif',fontSize:11,fontWeight:700,letterSpacing:'0.16em',textTransform:'uppercase' as const,color:'#F07A20',marginBottom:'1rem'}}>The Core Offer</p>
          <div style={{display:'flex',alignItems:'baseline',gap:6,marginBottom:'1.5rem'}}>
            <span style={{fontFamily:'Bebas Neue,cursive',fontSize:36,color:'#F07A20'}}>$</span>
            <span style={{fontFamily:'Bebas Neue,cursive',fontSize:130,lineHeight:0.82,color:'#EDE9DF'}}>99</span>
            <span style={{fontSize:15,color:'#7C8494',alignSelf:'flex-end',marginBottom:10}}>one-time</span>
          </div>
          <p style={{fontSize:16,color:'#7C8494',lineHeight:1.72,marginBottom:'2rem'}}>A fully designed, mobile-optimized website — already built for your business. Pay once. Own it forever. No monthly fees unless you want them.</p>
          <a href="#cta" style={{background:'#F07A20',color:'#fff',fontFamily:'Syne,sans-serif',fontWeight:700,fontSize:15,padding:'14px 32px',borderRadius:8,textDecoration:'none',display:'inline-block'}}>Claim Your Site Now →</a>
        </div>
        <ul style={{listStyle:'none',padding:0,margin:0,display:'flex',flexDirection:'column' as const,gap:13}}>
          {['Custom design built specifically for your business','Fully mobile-responsive and fast-loading','Contact form, Google Maps, and business hours','Social media links and review badges integrated','On-page SEO — title tags, meta descriptions, schema','Installed on your existing host, or we set one up','One revision round included after delivery','AI-powered add-ons available at any time'].map(item=>(
            <li key={item} style={{display:'flex',alignItems:'flex-start',gap:12,fontSize:15,color:'#EDE9DF'}}>
              <span style={{flexShrink:0,width:20,height:20,marginTop:2,borderRadius:'50%',background:'#F07A20',display:'inline-flex',alignItems:'center',justifyContent:'center'}}>
                <svg width="11" height="11" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round"/></svg>
              </span>{item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);
export default Offer;