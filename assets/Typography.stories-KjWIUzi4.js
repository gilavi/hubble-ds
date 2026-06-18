import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{d as u}from"./theme-DstihSO3.js";import{A as a}from"./A11yText-BS0WF2iH.js";import"./index-CK_08F47.js";import"./client-CICyZnRS.js";import"./design-tokens-CbirmslE.js";import"./accessibility-xurZvXxT.js";const A={title:"Components/Text (A11yText)",component:a,argTypes:{size:{control:"select",options:["xs","sm","base","lg","xl","2xl"]},weight:{control:"select",options:["normal","medium","semibold","bold"]}},args:{size:"base",weight:"normal",children:"The quick brown fox"}},s={},r={render:()=>t.jsx(u.View,{style:{gap:8},children:["xs","sm","base","lg","xl","2xl"].map(e=>t.jsxs(a,{size:e,weight:"semibold",children:[e," — Hubble safety"]},e))})},o={render:()=>t.jsx(u.View,{style:{gap:8},children:["normal","medium","semibold","bold"].map(e=>t.jsx(a,{size:"lg",weight:e,children:e},e))})};var i,m,l;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(l=(m=s.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var c,p,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <View style={{
    gap: 8
  }}>
      {(['xs', 'sm', 'base', 'lg', 'xl', '2xl'] as const).map(s => <A11yText key={s} size={s} weight="semibold">
          {s} — Hubble safety
        </A11yText>)}
    </View>
}`,...(d=(p=r.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var n,x,g;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => <View style={{
    gap: 8
  }}>
      {(['normal', 'medium', 'semibold', 'bold'] as const).map(w => <A11yText key={w} size="lg" weight={w}>
          {w}
        </A11yText>)}
    </View>
}`,...(g=(x=o.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};const j=["Default","Sizes","Weights"];export{s as Default,r as Sizes,o as Weights,j as __namedExportsOrder,A as default};
