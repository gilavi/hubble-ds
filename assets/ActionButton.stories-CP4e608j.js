import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{u as g,d as a,w as k}from"./theme-DstihSO3.js";import{r as x}from"./index-CK_08F47.js";import{c as s}from"./createLucideIcon-BqTg3DDj.js";import{T as b,S as v}from"./triangle-alert-rsgQu0SW.js";import{A as w}from"./A11yText-BOyqg4a6.js";import{b as M}from"./accessibility-CE7tV9pt.js";import"./client-CICyZnRS.js";import"./design-tokens-CbirmslE.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=s("CloudUpload",[["path",{d:"M12 13v8",key:"1l5pq0"}],["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"m8 17 4-4 4 4",key:"1quai1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=s("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=s("Megaphone",[["path",{d:"m3 11 18-5v12L3 14v-3z",key:"n962bs"}],["path",{d:"M11.6 16.8a3 3 0 1 1-5.8-1.6",key:"1yl0tm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=s("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]),q={inspection:{icon:v,filled:!1},incident:{icon:b,filled:!1},briefing:{icon:A,filled:!1},report:{icon:T,filled:!1},participant:{icon:C,filled:!1},file:{icon:j,filled:!1}};function l({label:e,colorKey:n,onPress:y,fixedWidth:c}){const{theme:i}=g(),r=x.useMemo(()=>P(i,c),[i,c]),{icon:f,filled:p}=q[n];return t.jsxs(a.Pressable,{onPress:y,style:({pressed:h})=>[r.container,h&&r.pressed],...M(e,void 0,"button"),children:[t.jsx(a.View,{style:r.iconCircle,children:t.jsx(f,{size:24,color:i.colors.accent,fill:p?i.colors.accent:"none",strokeWidth:p?0:1.5})}),t.jsx(w,{size:"xs",weight:"bold",color:i.colors.inkSoft,style:r.label,numberOfLines:1,children:e})]})}function P(e,n){return a.StyleSheet.create({container:{...n?{width:n}:{flex:1},alignItems:"center",gap:e.space(2),paddingHorizontal:4},pressed:{opacity:.7},iconCircle:{width:56,height:56,borderRadius:e.radius.full,backgroundColor:k("#FF6D2E",.12),alignItems:"center",justifyContent:"center"},label:{textAlign:"center",fontWeight:"800"}})}l.__docgenInfo={description:"",methods:[],displayName:"QuickActionButton",props:{label:{required:!0,tsType:{name:"string"},description:""},colorKey:{required:!0,tsType:{name:"union",raw:"'inspection' | 'incident' | 'briefing' | 'report' | 'participant' | 'file'",elements:[{name:"literal",value:"'inspection'"},{name:"literal",value:"'incident'"},{name:"literal",value:"'briefing'"},{name:"literal",value:"'report'"},{name:"literal",value:"'participant'"},{name:"literal",value:"'file'"}]},description:""},onPress:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},fixedWidth:{required:!1,tsType:{name:"number"},description:""}}};const O={title:"Components/Action Button",component:l,argTypes:{colorKey:{control:"select",options:["inspection","incident","briefing","report","participant","file"]}},args:{label:"შემოწმება",colorKey:"inspection"}},o={render:e=>t.jsx(a.View,{style:{width:96},children:t.jsx(l,{...e,onPress:()=>{}})})};var d,u,m;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <View style={{
    width: 96
  }}>
      <QuickActionButton {...args} onPress={() => {}} />
    </View>
}`,...(m=(u=o.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};const U=["Default"];export{o as Default,U as __namedExportsOrder,O as default};
