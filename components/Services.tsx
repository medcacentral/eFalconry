import React from 'react';
const tiers=[{name:'Launch',price:'99',cadence:'one-time',featured:false,items:['New website — designed & built','Mobile-responsive layout','Contact form & map integration','On-page SEO basics','Hosting setup assistance','1 revision included']},{name:'Maintain',price:'49',cadence:'per month',featured:false,items:['Everything in Launch','Hosting & uptime monitoring','Monthly content updates','Security patches & backups','Google Business setup','Priority email support']},{name:'Growth',price:'199',cadence:'per month',featured:true,items:['Everything in Maintain','Local SEO & citation building','Automated review management','Google Analytics reporting','Monthly keyword rankings','Dedicated account manager']},{name:'AI Pro',price:'399',cadence:'per month',featured:false,items:['Everything in Growth','AI chatbot — 24/7 lead capture','AI lead generation & outreach','Google Ads management','AI content engine','Weekly performance calls']}];
const addons=[{name:'AI Chatbot Integration',price:'$299'},{name:'Online Booking System',price:'$199'},{name:'Google Business Optimization',price:'$99'},{name:'Logo & Brand Kit',price:'$149'},{name:'Google Ads Setup & Launch',price:'$199'},{name:'Hosting & Domain Migration',price:'$79'}];
const Chk=()=><svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1 4l2 2 4-4" stroke="#F07A20" strokeWidth="1.4" strokeLinecap="round"/></svg>;
const Services: React.FC = () => (
  <section id="services" style={{padding:'100px 0'}}>
    <div style={{maxWidth:1100,margin:'0 auto',padding:'0 2rem'}}>
      <p style={{fontFamily:'Syne,sans-serif',fontSize:11,fontWeight:700,letterSpacing:'0.16em',textTransform:'uppercase' as const,color:'#F07A20',marginBottom:'1rem'}}>Services & Subscriptions</p>
      <h2 style={{fontFamily:'Bebas Neue,cursive',fontSize:'clamp(40px,6vw,78px)',lineHeight:0.93,color:'#EDE9DF',marginBottom:'1.5rem'}}>BUILD YOUR <span style={{color:'#F07A20'}}>DIGITAL STACK</span></h2>
      <p style={{fontSize:15,color:'#7C8494',lineHeight:1.7,marginBottom:'3.5rem',borderLeft:'2px solid #F07A20',paddingLeft:'1.25rem',maxWidth:640}}>Start with your $99 website. Then choose a monthly plan to keep growing. Every plan is powered by AI working for your business around the clock. No lock-ins. Cancel any time.</p>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',gap:'1rem',marginBottom:'4rem'}}>
        {tiers.map(t=>(
          <div key={t.name} style={{background:'#0F1218',border:t.featured?'1px solid rgba(240,122,32,0.45)':'1px solid rgba(255,255,255,0.063)',borderRadius:18,padding:'2rem 1.75rem',position:'relative' as const}}>
            {t.featured&&<span style={{position:'absolute' as const,top:-1,left:'50%',transform:'translateX(-50%)',background:'#F07A20',color:'#fff',fontFamily:'Syne,sans-serif',fontSize:10,fontWeight:700,letterSpacing:'0.08em',textTransform:'uppercase' as const,padding:'4px 14px',borderRadius:'0 0 8px 8px',whiteSpace:'nowrap' as const}}>Most Popular</span>}
            <div style={{fontFamily:'Syne,sans-serif',fontWeight:700,fontSize:12,letterSpacing:'0.12em',textTransform:'uppercase' as const,color:'#7C8494',marginBottom:'1.5rem'}}>{t.name}</div>
            <div style={{display:'flex',alignItems:'baseline',gap:3,marginBottom:'0.4rem'}}><span style={{fontFamily:'Bebas Neue,cursive',fontSize:22,color:'#7C8494'}}>$</span><span style={{fontFamily:'Bebas Neue,cursive',fontSize:56,lineHeight:1,color:'#EDE9DF'}}>{t.price}</span></div>
            <div style={{fontSize:12,color:'#40455A',fontFamily:'Syne,sans-serif',marginBottom:'1.75rem'}}>{t.cadence}</div>
            <div style={{height:1,background:'rgba(255,255,255,0.063)',marginBottom:'1.75rem'}}/>
            <ul style={{listStyle:'none',padding:0,margin:0,display:'flex',flexDirection:'column' as const,gap:10}}>
              {t.items.map(i=>(
                <li key={i} style={{display:'flex',alignItems:'flex-start',gap:9,fontSize:13,color:'#7C8494',lineHeight:1.5}}>
                  <span style={{flexShrink:0,width:16,height:16,marginTop:1,borderRadius:'50%',background:'rgba(240,122,32,0.15)',display:'inline-flex',alignItems:'center',justifyContent:'center'}}><Chk/></span>{i}
                </li>
              ))}
            </ul>
            <a href="#cta" style={{display:'block',textAlign:'center' as const,marginTop:'2rem',padding:11,borderRadius:7,border:t.featured?'none':'1px solid rgba(255,255,255,0.13)',background:t.featured?'#F07A20':'transparent',fontFamily:'Syne,sans-serif',fontWeight:700,fontSize:13,color:'#EDE9DF',textDecoration:'none'}}>Get Started →</a>
          </div>
        ))}
      </div>
      <p style={{fontFamily:'Syne,sans-serif',fontWeight:700,fontSize:13,color:'#7C8494',textTransform:'uppercase' as const,letterSpacing:'0.1em',marginBottom:'1.25rem'}}>One-Time Add-Ons</p>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(240px,1fr))',gap:'1rem'}}>
        {addons.map(a=>(
          <div key={a.name} style={{background:'#0F1218',border:'1px solid rgba(255,255,255,0.063)',borderRadius:10,padding:'1.25rem 1.5rem',display:'flex',alignItems:'center',justifyContent:'space-between',gap:'1rem'}}>
            <span style={{fontFamily:'Syne,sans-serif',fontWeight:600,fontSize:14,color:'#EDE9DF'}}>{a.name}</span>
            <span style={{fontFamily:'Syne,sans-serif',fontWeight:700,fontSize:14,color:'#F07A20',whiteSpace:'nowrap' as const}}>{a.price}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);
export default Services;