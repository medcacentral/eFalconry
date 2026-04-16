import React from 'react';
const FalconMark=()=><svg width="22" height="26" viewBox="0 0 22 26" fill="none"><polygon points="11,0 15,9 12.5,26 9.5,26 7,9" fill="#F07A20"/><polygon points="7,9 0,14 11,23" fill="#EDE9DF" opacity="0.88"/><polygon points="15,9 22,14 11,23" fill="#EDE9DF" opacity="0.88"/></svg>;
const Footer: React.FC = () => (
  <footer style={{borderTop:'1px solid rgba(255,255,255,0.063)'}}>
    <div style={{maxWidth:1100,margin:'0 auto',padding:'2.5rem 2rem',display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap' as const,gap:'1rem'}}>
      <div style={{display:'flex',alignItems:'center',gap:9}}>
        <FalconMark/>
        <span style={{fontFamily:'Syne,sans-serif',fontWeight:800,fontSize:16,letterSpacing:'-0.03em'}}>
          <span style={{color:'#F07A20'}}>e-</span><span style={{color:'#EDE9DF'}}>Falconry</span>
        </span>
      </div>
      <ul style={{display:'flex',gap:'2rem',listStyle:'none',padding:0,margin:0,flexWrap:'wrap' as const}}>
        {[['How It Works','#how-it-works'],['Services','#services'],['AI Upgrades','#ai'],['Industries','#industries'],['Contact','mailto:hello@efalconry.com']].map(([l,h])=>(
          <li key={l}><a href={h} style={{fontSize:13,color:'#40455A',textDecoration:'none'}}>{l}</a></li>
        ))}
      </ul>
      <div style={{fontSize:12,color:'#40455A'}}>© 2025 e-Falconry — Seattle, WA</div>
    </div>
  </footer>
);
export default Footer;