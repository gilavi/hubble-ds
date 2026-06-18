import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{p as y,n as C,s as E,h as N,r as U,a as F,b as g,t as M}from"./design-tokens-CbirmslE.js";const G={title:"Tokens/Overview"},r={fontFamily:"Inter, Helvetica, Arial, sans-serif",color:"var(--sb-ink, #888)"},x={fontSize:12,opacity:.7,marginTop:6},a={fontSize:18,fontWeight:700,margin:"28px 0 12px"};function _({name:s,value:n}){return e.jsxs("div",{style:{width:96},children:[e.jsx("div",{style:{height:56,borderRadius:10,background:n,border:"1px solid rgba(128,128,128,0.25)"}}),e.jsx("div",{style:x,children:s}),e.jsx("div",{style:{...x,marginTop:0,opacity:.5},children:n})]})}function l({title:s,scale:n}){return e.jsxs(e.Fragment,{children:[e.jsx("h2",{style:a,children:s}),e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:12},children:Object.entries(n).map(([t,i])=>e.jsx(_,{name:t,value:i},t))})]})}const d={render:()=>e.jsxs("div",{style:r,children:[e.jsx(l,{title:"Brand (primary)",scale:y}),e.jsx(l,{title:"Neutral",scale:C}),e.jsx(l,{title:"Semantic",scale:E}),e.jsx(l,{title:"Highlight",scale:{highlight:N}})]})},c={render:()=>e.jsxs("div",{style:r,children:[e.jsx("h2",{style:a,children:"Type scale"}),Object.entries(M).map(([s,n])=>e.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:16,marginBottom:8},children:[e.jsx("span",{style:{width:48,fontSize:12,opacity:.6},children:s}),e.jsxs("span",{style:{fontSize:n.size,lineHeight:`${n.lineHeight}px`,letterSpacing:n.letterSpacing},children:["Hubble — ",n.size,"px"]})]},s))]})},o={render:()=>e.jsxs("div",{style:r,children:[e.jsxs("h2",{style:a,children:["Spacing — base unit ",g,"px"]}),[1,2,3,4,5,6,8,10,12].map(s=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,marginBottom:6},children:[e.jsxs("span",{style:{width:64,fontSize:12,opacity:.6},children:["space(",s,")"]}),e.jsx("div",{style:{height:16,width:s*g,background:y[500],borderRadius:4}}),e.jsxs("span",{style:{fontSize:12,opacity:.5},children:[s*g,"px"]})]},s))]})},p={render:()=>e.jsxs("div",{style:r,children:[e.jsx("h2",{style:a,children:"Radii"}),e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:16},children:Object.entries(U).map(([s,n])=>e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("div",{style:{width:72,height:72,borderRadius:Math.min(Number(n),36),background:y[100],border:`2px solid ${y[500]}`}}),e.jsxs("div",{style:x,children:[s," (",n,")"]})]},s))})]})},h={render:()=>{const s=n=>{if(n.color==="transparent"||n.opacity===0)return"none";const t=n.color.replace("#",""),i=t.length===3?t.split("").map(m=>m+m).join(""):t,B=parseInt(i.slice(0,2),16),W=parseInt(i.slice(2,4),16),A=parseInt(i.slice(4,6),16);return`${n.x}px ${n.y}px ${n.blur}px rgba(${B},${W},${A},${n.opacity})`};return e.jsxs("div",{style:r,children:[e.jsx("h2",{style:a,children:"Elevation / shadows"}),e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:28,padding:20},children:Object.entries(F).map(([n,t])=>e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("div",{style:{width:96,height:64,borderRadius:12,background:"#fff",boxShadow:s(t)}}),e.jsx("div",{style:x,children:n})]},n))})]})}};var v,u,b;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div style={card}>
      <Scale title="Brand (primary)" scale={primary as unknown as Record<string, string>} />
      <Scale title="Neutral" scale={neutral as unknown as Record<string, string>} />
      <Scale title="Semantic" scale={semantic as unknown as Record<string, string>} />
      <Scale title="Highlight" scale={{
      highlight
    }} />
    </div>
}`,...(b=(u=d.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var f,j,S;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div style={card}>
      <h2 style={h2}>Type scale</h2>
      {Object.entries(typeScale).map(([k, v]) => <div key={k} style={{
      display: 'flex',
      alignItems: 'baseline',
      gap: 16,
      marginBottom: 8
    }}>
          <span style={{
        width: 48,
        fontSize: 12,
        opacity: 0.6
      }}>{k}</span>
          <span style={{
        fontSize: v.size,
        lineHeight: \`\${v.lineHeight}px\`,
        letterSpacing: v.letterSpacing
      }}>
            Hubble — {v.size}px
          </span>
        </div>)}
    </div>
}`,...(S=(j=c.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var w,k,$;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div style={card}>
      <h2 style={h2}>Spacing — base unit {spaceUnit}px</h2>
      {[1, 2, 3, 4, 5, 6, 8, 10, 12].map(n => <div key={n} style={{
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginBottom: 6
    }}>
          <span style={{
        width: 64,
        fontSize: 12,
        opacity: 0.6
      }}>space({n})</span>
          <div style={{
        height: 16,
        width: n * spaceUnit,
        background: primary[500],
        borderRadius: 4
      }} />
          <span style={{
        fontSize: 12,
        opacity: 0.5
      }}>{n * spaceUnit}px</span>
        </div>)}
    </div>
}`,...($=(k=o.parameters)==null?void 0:k.docs)==null?void 0:$.source}}};var R,z,I;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div style={card}>
      <h2 style={h2}>Radii</h2>
      <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: 16
    }}>
        {Object.entries(radii).map(([k, v]) => <div key={k} style={{
        textAlign: 'center'
      }}>
            <div style={{
          width: 72,
          height: 72,
          borderRadius: Math.min(Number(v), 36),
          background: primary[100],
          border: \`2px solid \${primary[500]}\`
        }} />
            <div style={label}>
              {k} ({v})
            </div>
          </div>)}
      </div>
    </div>
}`,...(I=(z=p.parameters)==null?void 0:z.docs)==null?void 0:I.source}}};var H,O,T;h.parameters={...h.parameters,docs:{...(H=h.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => {
    const toCss = (s: (typeof shadowSpec)[keyof typeof shadowSpec]) => {
      if (s.color === 'transparent' || s.opacity === 0) return 'none';
      const hex = s.color.replace('#', '');
      const f = hex.length === 3 ? hex.split('').map(c => c + c).join('') : hex;
      const r = parseInt(f.slice(0, 2), 16);
      const g = parseInt(f.slice(2, 4), 16);
      const b = parseInt(f.slice(4, 6), 16);
      return \`\${s.x}px \${s.y}px \${s.blur}px rgba(\${r},\${g},\${b},\${s.opacity})\`;
    };
    return <div style={card}>
        <h2 style={h2}>Elevation / shadows</h2>
        <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 28,
        padding: 20
      }}>
          {Object.entries(shadowSpec).map(([k, v]) => <div key={k} style={{
          textAlign: 'center'
        }}>
              <div style={{
            width: 96,
            height: 64,
            borderRadius: 12,
            background: '#fff',
            boxShadow: toCss(v)
          }} />
              <div style={label}>{k}</div>
            </div>)}
        </div>
      </div>;
  }
}`,...(T=(O=h.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};const J=["Colors","Typography","Spacing","Radii","Shadows"];export{d as Colors,p as Radii,h as Shadows,o as Spacing,c as Typography,J as __namedExportsOrder,G as default};
