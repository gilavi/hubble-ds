import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as x}from"./index-CK_08F47.js";import{a as m}from"./theme-CqVP_H4R.js";import{c as b}from"./createLucideIcon-BqTg3DDj.js";import{F as p}from"./FloatingLabelInput-BVJN5axH.js";import"./client-CICyZnRS.js";import"./design-tokens-CbirmslE.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=b("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),I={title:"Components/Text Field",component:p};function r(o){const[u,h]=x.useState(o.initial??"");return e.jsx(m.View,{style:{width:340},children:e.jsx(p,{...o,value:u,onChangeText:h})})}const t={render:()=>e.jsx(r,{label:"Project name"})},a={render:()=>e.jsxs(m.View,{style:{gap:20,width:340},children:[e.jsx(r,{label:"Empty"}),e.jsx(r,{label:"With value",initial:"Tower crane — site B"}),e.jsx(r,{label:"Required",required:!0,helper:"We'll show this on the report"}),e.jsx(r,{label:"Error",initial:"bad@",error:"Invalid email address"}),e.jsx(r,{label:"Password",secureTextEntry:!0,rightIcon:j})]})};var l,s,i;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <Controlled label="Project name" />
}`,...(i=(s=t.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var n,d,c;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(c=(d=a.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const T=["Default","States"];export{t as Default,a as States,T as __namedExportsOrder,I as default};
