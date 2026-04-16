import React from 'react';
const AISection: React.FC = () => (
  <section id="ai" style={{padding:'100px 0'}}>
    <div style={{maxWidth:1100,margin:'0 auto',padding:'0 2rem'}}>
      <div style={{background:'linear-gradient(140deg,#0D1018 0%,#131720 100%)',border:'1px solid rgba(255,255,255,0.063)',borderRadius:18,padding:'72px',overflow:'hidden',position:'relative' as const}}>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))',gap:'4rem',alignItems:'center',position:'relative' as const,zIndex:1}}>
          <div>
            <p style={{fontFamily:'Syne,sans-serif',fontSize:11,fontWeight:700,letterSpacing:'0.16em',textTransform:'uppercase' as const,color:'#F07A20',marginBottom:'1rem'}}>AI-First Services</p>
            <h2 style={{fontFamily:'Bebas Neue,cursive',fontSize:'clamp(38px,5.5vw,68px)',lineHeight:0.93,color:'#EDE9DF',marginBottom:'1.5rem'}}>FUTURE-PROOF <span style={{color:'#F07A20'}}>YOUR BUSINESS</span></h2>
            <p style={{fontSize:16,color:'#7C8494',lineHeight:1.72,marginBottom:'1.25rem'}}>AI is already changing how customers find, choose, and interact with local businesses. Most small businesses are behind — and do not even know it.</p>
            <p style={{fontSize:16,color:'#7C8494',lineHeight:1.72}}>We put these tools to work for you — a chatbot capturing leads at 2am, ads that self-optimize, review systems on autopilot. No learning curve. No tech team required.</p>
            <div style={{display:'flex',flexWrap:'wrap' as const,gap:9,marginTop:'2rem'}}>
              {['AI Chatbot','Smart Booking','Review AI','Lead Scoring','Auto Follow-Up','Ad Optimization','Content Engine'].map(p=>(
                <span key={p} style={{background:'#181C26',border:'1px solid rgba(255,255,255,0.13)',fontFamily:'Syne,sans-serif',fontSize:13,fontWeight:600,color:'#EDE9DF',padding:'7px 15px',borderRadius:20}}>{p}</span>
              ))}
            </div>
          </div>
          <div style={{background:'#0F1218',border:'1px solid rgba(255,255,255,0.13)',borderRadius:18,padding:'1.75rem'}}>
            <div style={{display:'flex',alignItems:'center',gap:8,marginBottom:'1.5rem',paddingBottom:'1rem',borderBottom:'1px solid rgba(255,255,255,0.063)',fontFamily:'Syne,sans-serif',fontWeight:600,fontSize:13,color:'#7C8494'}}>
              <span style={{width:7,height:7,borderRadius:'50%',background:'#4ADE80',flexShrink:0,boxShadow:'0 0 6px rgba(74,222,128,0.5)'}}/>Business Intelligence — Live
            </div>
            {([['Website Score','94 / 100 ↑','#4ADE80'],['Chatbot Leads (30 days)','47 new inquiries','#F07A20'],['Google Reviews','4.9 ★  (112 reviews)','#4ADE80'],['Bookings via website','23 this month','#F07A20'],['Google Ads return','4.2x ROAS ↑','#4ADE80'],['Automated follow-ups','138 sent this week','#EDE9DF']] as [string,string,string][]).map(([l,v,c])=>(
              <div key={l} style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'10px 0',borderBottom:'1px solid rgba(255,255,255,0.063)'}}>
                <span style={{color:'#7C8494',fontSize:13}}>{l}</span>
                <span style={{fontFamily:'Syne,sans-serif',fontWeight:600,fontSize:13,color:c}}>{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);
export default AISection;