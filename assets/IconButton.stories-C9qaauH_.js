import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{u as j,d as o}from"./theme-DstihSO3.js";import{c as h}from"./createLucideIcon-BqTg3DDj.js";import{P as T}from"./pencil-DR1HUDHO.js";import{P as m}from"./plus-CgaAjEeX.js";import{X as f}from"./x-CmSFqHNt.js";import{r as z}from"./index-CK_08F47.js";import{h as q}from"./haptics-Y9X1Ki18.js";import{b as B}from"./accessibility-Df36XjAw.js";import"./client-CICyZnRS.js";import"./design-tokens-CbirmslE.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=h("EllipsisVertical",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=h("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]),A={sm:{box:28,icon:16},md:{box:36,icon:20},lg:{box:44,icon:22}};function r({icon:s,onPress:x,a11yLabel:P,a11yHint:w,variant:c="plain",size:V="md",disabled:d,hitSlop:k=8,style:I}){const{theme:a}=j(),t=z.useMemo(()=>M(a),[a]),n=A[V],L=c==="danger"?a.colors.semantic.danger:c==="overlay"?a.colors.white:a.colors.inkSoft;return e.jsx(o.Pressable,{onPress:()=>{d||(q.light(),x())},disabled:d,hitSlop:k,style:({pressed:S})=>[t.base,{width:n.box,height:n.box,borderRadius:n.box/2},t[c],S&&t.pressed,d&&t.disabled,I],...B(P,w,"button"),children:e.jsx(s,{size:n.icon,color:L,strokeWidth:1.8})})}function M(s){return o.StyleSheet.create({base:{alignItems:"center",justifyContent:"center"},plain:{backgroundColor:"transparent"},ghost:{backgroundColor:s.colors.surfaceSecondary},danger:{backgroundColor:s.colors.semantic.dangerSoft},overlay:{backgroundColor:"rgba(0,0,0,0.55)"},pressed:{opacity:.6},disabled:{opacity:.4}})}r.__docgenInfo={description:"",methods:[],displayName:"IconButton",props:{icon:{required:!0,tsType:{name:"LucideIcon"},description:""},onPress:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},a11yLabel:{required:!0,tsType:{name:"string"},description:"Accessible label (required — there is no visible text)."},a11yHint:{required:!1,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'plain' | 'ghost' | 'danger' | 'overlay'",elements:[{name:"literal",value:"'plain'"},{name:"literal",value:"'ghost'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'overlay'"}]},description:"plain = transparent ink · ghost = subtle surface · danger = soft red · overlay = dark scrim over images.",defaultValue:{value:"'plain'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:""},hitSlop:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"8",computed:!1}},style:{required:!1,tsType:{name:"StyleProp",elements:[{name:"ViewStyle"}],raw:"StyleProp<ViewStyle>"},description:""}}};const J={title:"Components/Icon Button",component:r,argTypes:{variant:{control:"select",options:["plain","ghost","danger","overlay"]},size:{control:"select",options:["sm","md","lg"]}},args:{icon:f,a11yLabel:"Close",variant:"ghost",size:"md"}},i={render:()=>e.jsxs(o.View,{style:{flexDirection:"row",gap:16,alignItems:"center"},children:[e.jsx(r,{icon:T,onPress:()=>{},a11yLabel:"Edit",variant:"plain"}),e.jsx(r,{icon:C,onPress:()=>{},a11yLabel:"More",variant:"ghost"}),e.jsx(r,{icon:E,onPress:()=>{},a11yLabel:"Delete",variant:"danger"}),e.jsx(o.View,{style:{padding:12,backgroundColor:"#444",borderRadius:12},children:e.jsx(r,{icon:f,onPress:()=>{},a11yLabel:"Remove",variant:"overlay"})})]})},l={render:()=>e.jsxs(o.View,{style:{flexDirection:"row",gap:16,alignItems:"center"},children:[e.jsx(r,{icon:m,onPress:()=>{},a11yLabel:"Add",variant:"ghost",size:"sm"}),e.jsx(r,{icon:m,onPress:()=>{},a11yLabel:"Add",variant:"ghost",size:"md"}),e.jsx(r,{icon:m,onPress:()=>{},a11yLabel:"Add",variant:"ghost",size:"lg"})]})};var u,p,y;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <View style={{
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center'
  }}>
      <IconButton icon={Pencil} onPress={() => {}} a11yLabel="Edit" variant="plain" />
      <IconButton icon={MoreVertical} onPress={() => {}} a11yLabel="More" variant="ghost" />
      <IconButton icon={Trash2} onPress={() => {}} a11yLabel="Delete" variant="danger" />
      <View style={{
      padding: 12,
      backgroundColor: '#444',
      borderRadius: 12
    }}>
        <IconButton icon={X} onPress={() => {}} a11yLabel="Remove" variant="overlay" />
      </View>
    </View>
}`,...(y=(p=i.parameters)==null?void 0:p.docs)==null?void 0:y.source}}};var g,b,v;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <View style={{
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center'
  }}>
      <IconButton icon={Plus} onPress={() => {}} a11yLabel="Add" variant="ghost" size="sm" />
      <IconButton icon={Plus} onPress={() => {}} a11yLabel="Add" variant="ghost" size="md" />
      <IconButton icon={Plus} onPress={() => {}} a11yLabel="Add" variant="ghost" size="lg" />
    </View>
}`,...(v=(b=l.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};const K=["Variants","Sizes"];export{l as Sizes,i as Variants,K as __namedExportsOrder,J as default};
