import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as x}from"./index-CK_08F47.js";import{d as c}from"./theme-DstihSO3.js";import{E as b}from"./eye-CkAjympK.js";import{F as p}from"./FloatingLabelInput-BjcIfEAr.js";import"./client-CICyZnRS.js";import"./design-tokens-CbirmslE.js";import"./createLucideIcon-BqTg3DDj.js";const T={title:"Components/Text Field",component:p};function r(a){const[u,h]=x.useState(a.initial??"");return e.jsx(c.View,{style:{width:340},children:e.jsx(p,{...a,value:u,onChangeText:h})})}const t={render:()=>e.jsx(r,{label:"Project name"})},o={render:()=>e.jsxs(c.View,{style:{gap:20,width:340},children:[e.jsx(r,{label:"Empty"}),e.jsx(r,{label:"With value",initial:"Tower crane — site B"}),e.jsx(r,{label:"Required",required:!0,helper:"We'll show this on the report"}),e.jsx(r,{label:"Error",initial:"bad@",error:"Invalid email address"}),e.jsx(r,{label:"Password",secureTextEntry:!0,rightIcon:b})]})};var l,s,i;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <Controlled label="Project name" />
}`,...(i=(s=t.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var n,d,m;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => <View style={{
    gap: 20,
    width: 340
  }}>
      <Controlled label="Empty" />
      <Controlled label="With value" initial="Tower crane — site B" />
      <Controlled label="Required" required helper="We'll show this on the report" />
      <Controlled label="Error" initial="bad@" error="Invalid email address" />
      <Controlled label="Password" secureTextEntry rightIcon={Eye} />
    </View>
}`,...(m=(d=o.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const I=["Default","States"];export{t as Default,o as States,I as __namedExportsOrder,T as default};
