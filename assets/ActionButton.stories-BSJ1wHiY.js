import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{u as w,d as n,w as v}from"./theme-DstihSO3.js";import{r as j}from"./index-CK_08F47.js";import{c}from"./createLucideIcon-BqTg3DDj.js";import{T as P,S as A}from"./triangle-alert-rsgQu0SW.js";import{A as M}from"./A11yText-uqOM_MyV.js";import{b as K}from"./accessibility-Df36XjAw.js";import"./client-CICyZnRS.js";import"./design-tokens-CbirmslE.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=c("CloudUpload",[["path",{d:"M12 13v8",key:"1l5pq0"}],["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"m8 17 4-4 4 4",key:"1quai1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=c("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=c("Megaphone",[["path",{d:"m3 11 18-5v12L3 14v-3z",key:"n962bs"}],["path",{d:"M11.6 16.8a3 3 0 1 1-5.8-1.6",key:"1yl0tm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=c("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]),W={inspection:{icon:A,filled:!1},incident:{icon:P,filled:!1},briefing:{icon:S,filled:!1},report:{icon:C,filled:!1},participant:{icon:q,filled:!1},file:{icon:T,filled:!1}};function i({label:t,colorKey:o,onPress:g,fixedWidth:d}){const{theme:r}=w(),s=j.useMemo(()=>B(r,d),[r,d]),{icon:b,filled:p}=W[o];return e.jsxs(n.Pressable,{onPress:g,style:({pressed:k})=>[s.container,k&&s.pressed],...K(t,void 0,"button"),children:[e.jsx(n.View,{style:s.iconCircle,children:e.jsx(b,{size:24,color:r.colors.accent,fill:p?r.colors.accent:"none",strokeWidth:p?0:1.5})}),e.jsx(M,{size:"xs",weight:"bold",color:r.colors.inkSoft,style:s.label,numberOfLines:1,children:t})]})}function B(t,o){return n.StyleSheet.create({container:{...o?{width:o}:{flex:1},alignItems:"center",gap:t.space(2),paddingHorizontal:4},pressed:{opacity:.7},iconCircle:{width:56,height:56,borderRadius:t.radius.full,backgroundColor:v("#FF6D2E",.12),alignItems:"center",justifyContent:"center"},label:{textAlign:"center",fontWeight:"800"}})}i.__docgenInfo={description:"",methods:[],displayName:"QuickActionButton",props:{label:{required:!0,tsType:{name:"string"},description:""},colorKey:{required:!0,tsType:{name:"union",raw:"'inspection' | 'incident' | 'briefing' | 'report' | 'participant' | 'file'",elements:[{name:"literal",value:"'inspection'"},{name:"literal",value:"'incident'"},{name:"literal",value:"'briefing'"},{name:"literal",value:"'report'"},{name:"literal",value:"'participant'"},{name:"literal",value:"'file'"}]},description:""},onPress:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},fixedWidth:{required:!1,tsType:{name:"number"},description:""}}};const R={title:"Components/Action Button",component:i,argTypes:{colorKey:{control:"select",options:["inspection","incident","briefing","report","participant","file"]}},args:{label:"შემოწმება",colorKey:"inspection"}},l={render:t=>e.jsx(n.View,{style:{width:96},children:e.jsx(i,{...t,onPress:()=>{}})})},a={render:()=>e.jsxs(n.View,{style:{flexDirection:"row",gap:8},children:[e.jsx(i,{label:"შემოწმება",colorKey:"inspection",onPress:()=>{},fixedWidth:84}),e.jsx(i,{label:"ინციდენტი",colorKey:"incident",onPress:()=>{},fixedWidth:84}),e.jsx(i,{label:"ინსტრუქტაჟი",colorKey:"briefing",onPress:()=>{},fixedWidth:84}),e.jsx(i,{label:"რეპორტი",colorKey:"report",onPress:()=>{},fixedWidth:84})]})};var u,y,m;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <View style={{
    width: 96
  }}>
      <QuickActionButton {...args} onPress={() => {}} />
    </View>
}`,...(m=(y=l.parameters)==null?void 0:y.docs)==null?void 0:m.source}}};var f,h,x;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <View style={{
    flexDirection: 'row',
    gap: 8
  }}>
      <QuickActionButton label="შემოწმება" colorKey="inspection" onPress={() => {}} fixedWidth={84} />
      <QuickActionButton label="ინციდენტი" colorKey="incident" onPress={() => {}} fixedWidth={84} />
      <QuickActionButton label="ინსტრუქტაჟი" colorKey="briefing" onPress={() => {}} fixedWidth={84} />
      <QuickActionButton label="რეპორტი" colorKey="report" onPress={() => {}} fixedWidth={84} />
    </View>
}`,...(x=(h=a.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const U=["Single","Row"];export{a as Row,l as Single,U as __namedExportsOrder,R as default};
