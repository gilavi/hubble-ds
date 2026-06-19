import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{d as o}from"./theme-DstihSO3.js";import{I as c,a as i}from"./InspectionListAvatar-n77LrQ24.js";import{Q as n}from"./QuestionAvatar-DzaBAmAr.js";import"./index-CK_08F47.js";import"./client-CICyZnRS.js";import"./design-tokens-CbirmslE.js";import"./index-Bn95GxAM.js";const D={title:"Data Display/Avatars"},g=["harness","excavator","bobcat","cargo_platform","forklift_inspection"],a={name:"Inspection Type",render:()=>e.jsxs(o.View,{style:{flexDirection:"row",flexWrap:"wrap",gap:16},children:[g.map(r=>e.jsx(i,{category:r,size:48},r)),e.jsx(i,{category:"harness",size:48,circle:!0}),e.jsx(i,{category:"excavator",size:48,status:"completed"})]})},t={name:"List avatars",render:()=>e.jsxs(o.View,{style:{flexDirection:"row",flexWrap:"wrap",gap:16},children:[g.map(r=>e.jsx(c,{category:r,size:44},r)),e.jsx(c,{category:"harness",size:44,status:"overdue"})]})},s={name:"Question illustration",render:()=>e.jsxs(o.View,{style:{flexDirection:"row",gap:24,alignItems:"center"},children:[e.jsx(n,{illustrationKey:"certificate",size:112}),e.jsx(n,{illustrationKey:"levelSurface",size:112})]})};var p,l,m;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Inspection Type',
  render: () => <View style={{
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16
  }}>
      {CATS.map(c => <InspectionTypeAvatar key={c} category={c} size={48} />)}
      <InspectionTypeAvatar category="harness" size={48} circle />
      <InspectionTypeAvatar category="excavator" size={48} status="completed" />
    </View>
}`,...(m=(l=a.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var u,y,d;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'List avatars',
  render: () => <View style={{
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16
  }}>
      {CATS.map(c => <InspectionListAvatar key={c} category={c} size={44} />)}
      <InspectionListAvatar category="harness" size={44} status="overdue" />
    </View>
}`,...(d=(y=t.parameters)==null?void 0:y.docs)==null?void 0:d.source}}};var x,v,f;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Question illustration',
  render: () => <View style={{
    flexDirection: 'row',
    gap: 24,
    alignItems: 'center'
  }}>
      <QuestionAvatar illustrationKey="certificate" size={112} />
      <QuestionAvatar illustrationKey="levelSurface" size={112} />
    </View>
}`,...(f=(v=s.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};const S=["TypeAvatars","ListAvatars","Illustration"];export{s as Illustration,t as ListAvatars,a as TypeAvatars,S as __namedExportsOrder,D as default};
