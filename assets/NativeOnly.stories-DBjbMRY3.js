import{j as e}from"./jsx-runtime-BjG_zV1W.js";const d={title:"Components/Native only"},s=[{name:"SignatureCanvas",path:"components/SignatureCanvas.tsx",why:"Wraps react-native-signature-canvas (a WebView-backed signature pad). Native only; the tokenized web signing page (web/) has its own canvas."},{name:"ProjectAvatar",path:"components/ProjectAvatar.tsx",why:"Uses expo-image for the project photo. Renders initials + image on device; not wired for the web bundle here."}],t={render:()=>e.jsxs("div",{style:{fontFamily:"Inter, Helvetica, Arial, sans-serif",maxWidth:560},children:[e.jsx("p",{style:{opacity:.7,fontSize:14,marginBottom:16},children:"These components depend on native modules and are not rendered in the web showcase. They remain part of the mobile design system."}),s.map(n=>e.jsxs("div",{style:{border:"1px solid rgba(128,128,128,0.3)",borderRadius:12,padding:16,marginBottom:12},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[e.jsx("strong",{style:{fontSize:15},children:n.name}),e.jsx("span",{style:{fontSize:11,fontWeight:700,color:"#FE7A43",border:"1px solid #FE7A43",borderRadius:999,padding:"1px 8px"},children:"NATIVE ONLY"})]}),e.jsx("code",{style:{fontSize:12,opacity:.6},children:n.path}),e.jsx("p",{style:{fontSize:13,opacity:.85,marginTop:8,marginBottom:0},children:n.why})]},n.name))]})};var a,o,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => <div style={{
    fontFamily: 'Inter, Helvetica, Arial, sans-serif',
    maxWidth: 560
  }}>
      <p style={{
      opacity: 0.7,
      fontSize: 14,
      marginBottom: 16
    }}>
        These components depend on native modules and are not rendered in the web showcase. They
        remain part of the mobile design system.
      </p>
      {NATIVE.map(c => <div key={c.name} style={{
      border: '1px solid rgba(128,128,128,0.3)',
      borderRadius: 12,
      padding: 16,
      marginBottom: 12
    }}>
          <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }}>
            <strong style={{
          fontSize: 15
        }}>{c.name}</strong>
            <span style={{
          fontSize: 11,
          fontWeight: 700,
          color: '#FE7A43',
          border: '1px solid #FE7A43',
          borderRadius: 999,
          padding: '1px 8px'
        }}>
              NATIVE ONLY
            </span>
          </div>
          <code style={{
        fontSize: 12,
        opacity: 0.6
      }}>{c.path}</code>
          <p style={{
        fontSize: 13,
        opacity: 0.85,
        marginTop: 8,
        marginBottom: 0
      }}>{c.why}</p>
        </div>)}
    </div>
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const p=["Overview"];export{t as Overview,p as __namedExportsOrder,d as default};
