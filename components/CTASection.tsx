import React,{useState} from 'react';
const CTASection: React.FC = () => {
  const [val,setVal]=useState('');
  return (
    <div id="cta" style={{background:'#F07A20',padding:'90px 2rem',textAlign:'center' as const}}>
      <h2 style={{fontFamily:'Bebas Neue,cursive',fontSize:'clamp(44px,8vw,98px)',color:'#fff',lineHeight:0.88,marginBottom:'1.5rem'}}>YOUR NEW SITE<br/>IS ONE CLICK AWAY.</h2>
      <p style={{fontSize:18,color:'rgba(255,255,255,0.78)',fontWeight:300,marginBottom:'2.5rem',maxWidth:520,marginLeft:'auto',marginRight:'auto'}}>Enter your business name or website URL — we will check if we have already built your upgrade.</p>
      <div style={{display:'flex',maxWidth:500,margin:'0 auto',borderRadius:8,overflow:'hidden',border:'2px solid rgba(255,255,255,0.25)'}}>
        <input type="text" value={val} onChange={e=>setVal(e.target.value)} placeholder="Business name or website URL..." style={{flex:1,padding:'16px 20px',border:'none',fontSize:15,background:'rgba(255,255,255,0.12)',color:'#fff',outline:'none'}}/>
        <button onClick={()=>val&&alert('Got it — we will reach out within 24 hours with your site preview!')} style={{padding:'16px 24px',border:'none',background:'rgba(0,0,0,0.75)',color:'#fff',fontFamily:'Syne,sans-serif',fontWeight:700,fontSize:14,cursor:'pointer',whiteSpace:'nowrap' as const}}>Find My Site →</button>
      </div>
    </div>
  );
};
export default CTASection;