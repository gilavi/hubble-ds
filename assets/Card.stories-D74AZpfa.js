import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{d as m}from"./theme-DstihSO3.js";import{C as i}from"./Card-BYqV-41B.js";import{A as a}from"./A11yText-BzVlj9tL.js";import"./index-CK_08F47.js";import"./client-CICyZnRS.js";import"./design-tokens-CbirmslE.js";import"./index-CvnRCj2y.js";import"./haptics-XHj2_-jG.js";import"./accessibility-D-vf3RPB.js";const v={title:"Data Display/Card",component:i,argTypes:{variant:{control:"select",options:["default","elevated","outlined","ghost"]},padding:{control:"select",options:["none","sm","md","lg","xl"]}},args:{variant:"default",padding:"lg"}},s={render:t=>e.jsx(m.View,{style:{width:320},children:e.jsxs(i,{...t,children:[e.jsx(a,{size:"lg",weight:"bold",children:"Inspection complete"}),e.jsx(a,{size:"sm",style:{marginTop:6},children:"3 checklists passed · 0 defects"})]})})},r={render:()=>e.jsx(m.View,{style:{gap:16,width:320},children:["default","elevated","outlined","ghost"].map(t=>e.jsx(i,{variant:t,padding:"lg",children:e.jsx(a,{size:"base",weight:"semibold",children:t})},t))})};var o,d,n;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => <View style={{
    width: 320
  }}>
      <Card {...args}>
        <A11yText size="lg" weight="bold">Inspection complete</A11yText>
        <A11yText size="sm" style={{
        marginTop: 6
      }}>3 checklists passed · 0 defects</A11yText>
      </Card>
    </View>
}`,...(n=(d=s.parameters)==null?void 0:d.docs)==null?void 0:n.source}}};var l,p,c;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <View style={{
    gap: 16,
    width: 320
  }}>
      {(['default', 'elevated', 'outlined', 'ghost'] as const).map(v => <Card key={v} variant={v} padding="lg">
          <A11yText size="base" weight="semibold">{v}</A11yText>
        </Card>)}
    </View>
}`,...(c=(p=r.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const V=["Default","AllVariants"];export{r as AllVariants,s as Default,V as __namedExportsOrder,v as default};
