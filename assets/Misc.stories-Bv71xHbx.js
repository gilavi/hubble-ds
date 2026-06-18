import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as g,R as J}from"./index-CK_08F47.js";import{u as d,d as i,w as le}from"./theme-DstihSO3.js";import{c as y}from"./createLucideIcon-BqTg3DDj.js";import{P as Y}from"./plus-CgaAjEeX.js";import{X as ce}from"./x-CmSFqHNt.js";import{A as c}from"./A11yText-uqOM_MyV.js";import{F as de}from"./FloatingLabelInput-BixPWq5R.js";import{B as q}from"./Button-BLjwVeJY.js";import{A as ue}from"./index-CvnRCj2y.js";import{h as pe}from"./haptics-Y9X1Ki18.js";import{b as ee}from"./accessibility-Df36XjAw.js";import{u as me}from"./usePressBounce-BuetNpAK.js";import{T as he,S as ge}from"./triangle-alert-rsgQu0SW.js";import{p as I,s as u}from"./design-tokens-CbirmslE.js";import"./client-CICyZnRS.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const te=y("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ye=y("CloudUpload",[["path",{d:"M12 13v8",key:"1l5pq0"}],["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"m8 17 4-4 4 4",key:"1quai1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fe=y("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const be=y("Megaphone",[["path",{d:"m3 11 18-5v12L3 14v-3z",key:"n962bs"}],["path",{d:"M11.6 16.8a3 3 0 1 1-5.8-1.6",key:"1yl0tm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xe=y("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);function we(t){if(!g.isValidElement(t))return!1;const r=t.type;return(r==null?void 0:r.displayName)==="Input"||(r==null?void 0:r.name)==="InputRefed"||(r==null?void 0:r.name)==="Input"}function re({label:t,required:r=!1,error:l,helper:o,children:a}){const{theme:n}=d(),s=g.useMemo(()=>ve(n),[n]);return we(a)?e.jsx(i.View,{style:s.container,children:J.cloneElement(a,{label:t,required:r,error:l,helper:o})}):e.jsxs(i.View,{style:s.container,children:[e.jsxs(i.View,{style:s.labelContainer,children:[e.jsx(c,{size:"sm",weight:"semibold",color:n.colors.ink,children:t}),r&&e.jsx(c,{size:"sm",weight:"semibold",color:n.colors.danger,style:s.requiredIndicator,children:"*"})]}),a,l?e.jsx(c,{size:"xs",weight:"normal",color:n.colors.danger,style:s.errorText,children:l}):o?e.jsx(c,{size:"xs",weight:"normal",color:n.colors.inkSoft,style:s.helperText,children:o}):null]})}function ve(t){return i.StyleSheet.create({container:{gap:t.space(2)},labelContainer:{flexDirection:"row",alignItems:"center"},requiredIndicator:{marginLeft:2},errorText:{marginTop:t.space(1)},helperText:{marginTop:t.space(1)}})}re.__docgenInfo={description:"",methods:[],displayName:"FormField",props:{label:{required:!0,tsType:{name:"string"},description:""},required:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},error:{required:!1,tsType:{name:"string"},description:""},helper:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};function C({buttons:t,layout:r="vertical",spacing:l}){const{theme:o}=d(),a=l??o.space(3);return r==="horizontal"?e.jsx(i.View,{style:[b.container,b.horizontal,{gap:a}],children:t.map((n,s)=>e.jsx(i.View,{style:{flex:1},children:e.jsx(q,{title:n.label,variant:n.variant||"secondary",size:n.size||"md",onPress:n.onPress,loading:n.loading,disabled:n.disabled})},s))}):e.jsx(i.View,{style:[b.container,b.vertical,{gap:a}],children:t.map((n,s)=>e.jsx(q,{title:n.label,variant:n.variant||(s===t.length-1?"primary":"secondary"),size:n.size||"lg",onPress:n.onPress,loading:n.loading,disabled:n.disabled},s))})}const b=i.StyleSheet.create({container:{alignItems:"stretch"},horizontal:{flexDirection:"row"},vertical:{flexDirection:"column"}});C.__docgenInfo={description:"",methods:[],displayName:"ButtonGroup",props:{buttons:{required:!0,tsType:{name:"Array",elements:[{name:"ButtonGroupItem"}],raw:"ButtonGroupItem[]"},description:""},layout:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"",defaultValue:{value:"'vertical'",computed:!1}},spacing:{required:!1,tsType:{name:"number"},description:""}}};const V=J.forwardRef(function({onPress:r,icon:l=Y,iconRotation:o=0,a11yLabel:a,a11yHint:n,style:s},f){const{theme:p}=d(),{pressStyle:oe,bounce:se}=me(),ae=()=>{se(),pe.light(),r()};return e.jsx(i.Pressable,{ref:f,onPress:ae,style:[{position:"absolute",right:20,bottom:24,zIndex:50},s],...ee(a,n,"button"),children:e.jsx(ue.View,{style:[{width:60,height:60,borderRadius:30,backgroundColor:p.colors.accent,alignItems:"center",justifyContent:"center",shadowColor:p.colors.accent,shadowOffset:{width:0,height:6},shadowOpacity:.45,shadowRadius:12,elevation:10},oe],children:e.jsx(l,{size:28,color:p.colors.white,strokeWidth:1.5,style:o!==0?{transform:[{rotate:`${o}deg`}]}:void 0})})})});V.__docgenInfo={description:"Shared floating action button. 60x60 circle, accent background with glow\nshadow. Pass `iconRotation` (degrees) to animate the icon (e.g. 45 for a\nx close state). Shares the canonical press bounce with every button.",methods:[],displayName:"FabButton",props:{onPress:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},icon:{required:!1,tsType:{name:"LucideIcon"},description:"",defaultValue:{value:"Plus",computed:!0}},iconRotation:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},a11yLabel:{required:!0,tsType:{name:"string"},description:""},a11yHint:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"StyleProp",elements:[{name:"ViewStyle"}],raw:"StyleProp<ViewStyle>"},description:""},viewRef:{required:!1,tsType:{name:"ReactRefObject",raw:"React.RefObject<View>",elements:[{name:"View"}]},description:""}}};function m({children:t,tint:r,bg:l}){return e.jsx(i.View,{style:{paddingHorizontal:8,paddingVertical:3,borderRadius:999,backgroundColor:l,alignSelf:"flex-start"},children:e.jsx(i.Text,{style:{fontSize:12,fontWeight:"600",color:r},children:t})})}m.__docgenInfo={description:"",methods:[],displayName:"Chip",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},tint:{required:!0,tsType:{name:"string"},description:""},bg:{required:!0,tsType:{name:"string"},description:""}}};function k({title:t,action:r,variant:l="default"}){const{theme:o}=d(),a=g.useMemo(()=>je(o),[o]),n={default:o.colors.ink,highlight:o.colors.accent,muted:o.colors.inkSoft}[l];return e.jsxs(i.View,{style:a.container,children:[e.jsx(c,{size:"lg",weight:"semibold",color:n,style:{flex:1},children:t}),r&&e.jsxs(i.Pressable,{onPress:r.onPress,hitSlop:{top:6,bottom:6,left:0,right:0},style:({pressed:s})=>[a.actionButton,s&&a.actionButtonPressed],accessibilityRole:"button",accessibilityLabel:r.label,children:[r.icon&&(()=>{const s=r.icon;return e.jsx(s,{size:18,color:o.colors.accent,strokeWidth:1.5,style:{marginRight:4}})})(),e.jsx(c,{size:"sm",weight:"semibold",color:o.colors.accent,children:r.label})]})]})}function je(t){return i.StyleSheet.create({container:{flexDirection:"row",alignItems:"center",justifyContent:"space-between",paddingVertical:t.space(3)},actionButton:{flexDirection:"row",alignItems:"center",paddingVertical:t.space(2),paddingHorizontal:t.space(3),borderRadius:t.radius.md},actionButtonPressed:{backgroundColor:t.colors.accentSoft}})}k.__docgenInfo={description:"",methods:[],displayName:"SectionHeader",props:{title:{required:!0,tsType:{name:"string"},description:""},action:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  label: string;
  icon?: LucideIcon;
  onPress: () => void;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"icon",value:{name:"LucideIcon",required:!1}},{key:"onPress",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}}]}},description:""},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'highlight' | 'muted'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'highlight'"},{name:"literal",value:"'muted'"}]},description:"",defaultValue:{value:"'default'",computed:!1}}}};const Se={inspection:{icon:ge,filled:!1},incident:{icon:he,filled:!1},briefing:{icon:be,filled:!1},report:{icon:fe,filled:!1},participant:{icon:xe,filled:!1},file:{icon:ye,filled:!1}};function h({label:t,colorKey:r,onPress:l,fixedWidth:o}){const{theme:a}=d(),n=g.useMemo(()=>Pe(a,o),[a,o]),{icon:s,filled:f}=Se[r];return e.jsxs(i.Pressable,{onPress:l,style:({pressed:p})=>[n.container,p&&n.pressed],...ee(t,void 0,"button"),children:[e.jsx(i.View,{style:n.iconCircle,children:e.jsx(s,{size:24,color:a.colors.accent,fill:f?a.colors.accent:"none",strokeWidth:f?0:1.5})}),e.jsx(c,{size:"xs",weight:"bold",color:a.colors.inkSoft,style:n.label,numberOfLines:1,children:t})]})}function Pe(t,r){return i.StyleSheet.create({container:{...r?{width:r}:{flex:1},alignItems:"center",gap:t.space(2),paddingHorizontal:4},pressed:{opacity:.7},iconCircle:{width:56,height:56,borderRadius:t.radius.full,backgroundColor:le("#FF6D2E",.12),alignItems:"center",justifyContent:"center"},label:{textAlign:"center",fontWeight:"800"}})}h.__docgenInfo={description:"",methods:[],displayName:"QuickActionButton",props:{label:{required:!0,tsType:{name:"string"},description:""},colorKey:{required:!0,tsType:{name:"union",raw:"'inspection' | 'incident' | 'briefing' | 'report' | 'participant' | 'file'",elements:[{name:"literal",value:"'inspection'"},{name:"literal",value:"'incident'"},{name:"literal",value:"'briefing'"},{name:"literal",value:"'report'"},{name:"literal",value:"'participant'"},{name:"literal",value:"'file'"}]},description:""},onPress:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},fixedWidth:{required:!1,tsType:{name:"number"},description:""}}};function ne({children:t,style:r}){const{theme:l}=d();return e.jsx(i.Text,{style:[{fontSize:11,fontWeight:"600",color:l.colors.inkSoft,letterSpacing:.5},r],children:t})}ne.__docgenInfo={description:"",methods:[],displayName:"Label",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},style:{required:!1,tsType:{name:"any"},description:""}}};function ie({children:t}){const{theme:r}=d();return t?e.jsx(i.Text,{style:{fontSize:13,color:r.colors.semantic.danger},children:t}):null}ie.__docgenInfo={description:"",methods:[],displayName:"ErrorText",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const Me={title:"Components/Misc"},x={name:"Form Field",render:()=>{const[t,r]=g.useState("");return e.jsx(i.View,{style:{width:340},children:e.jsx(re,{label:"Crane operator",required:!0,helper:"Full legal name",children:e.jsx(de,{label:"Name",value:t,onChangeText:r})})})}},w={name:"Button Group",render:()=>e.jsxs(i.View,{style:{gap:24,width:340},children:[e.jsx(C,{buttons:[{label:"Save",variant:"primary",onPress:()=>{}},{label:"Cancel",variant:"ghost",onPress:()=>{}}]}),e.jsx(C,{layout:"horizontal",buttons:[{label:"Back",variant:"secondary",onPress:()=>{}},{label:"Next",variant:"primary",onPress:()=>{}}]})]})},v={name:"FAB",render:()=>e.jsxs(i.View,{style:{flexDirection:"row",gap:24},children:[e.jsx(V,{onPress:()=>{},icon:Y,a11yLabel:"Add"}),e.jsx(V,{onPress:()=>{},icon:ce,iconRotation:0,a11yLabel:"Close"}),e.jsx(V,{onPress:()=>{},icon:te,a11yLabel:"Next"})]})},j={name:"Chip",render:()=>e.jsxs(i.View,{style:{flexDirection:"row",flexWrap:"wrap",gap:8},children:[e.jsx(m,{tint:I[700],bg:I[50],children:"Inspection"}),e.jsx(m,{tint:u.success,bg:u.successSoft,children:"Passed"}),e.jsx(m,{tint:u.warning,bg:u.warningSoft,children:"Pending"}),e.jsx(m,{tint:u.danger,bg:u.dangerSoft,children:"Failed"})]})},S={name:"Section Header",render:()=>e.jsxs(i.View,{style:{gap:20,width:360},children:[e.jsx(k,{title:"Recent inspections"}),e.jsx(k,{title:"Projects",variant:"highlight",action:{label:"See all",icon:te,onPress:()=>{}}}),e.jsx(k,{title:"Archived",variant:"muted"})]})},P={name:"Quick Action Button",render:()=>e.jsxs(i.View,{style:{flexDirection:"row",flexWrap:"wrap",gap:12},children:[e.jsx(h,{label:"Inspection",colorKey:"inspection",onPress:()=>{}}),e.jsx(h,{label:"Incident",colorKey:"incident",onPress:()=>{}}),e.jsx(h,{label:"Briefing",colorKey:"briefing",onPress:()=>{}}),e.jsx(h,{label:"Report",colorKey:"report",onPress:()=>{}})]})},T={name:"Label & Error Text",render:()=>e.jsxs(i.View,{style:{gap:8,width:320},children:[e.jsx(ne,{children:"Email address"}),e.jsx(ie,{children:"This field is required"})]})};var B,F,R;x.parameters={...x.parameters,docs:{...(B=x.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Form Field',
  render: () => {
    const [v, setV] = useState('');
    return <View style={{
      width: 340
    }}>
        <FormField label="Crane operator" required helper="Full legal name">
          <FloatingLabelInput label="Name" value={v} onChangeText={setV} />
        </FormField>
      </View>;
  }
}`,...(R=(F=x.parameters)==null?void 0:F.docs)==null?void 0:R.source}}};var z,A,L;w.parameters={...w.parameters,docs:{...(z=w.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Button Group',
  render: () => <View style={{
    gap: 24,
    width: 340
  }}>
      <ButtonGroup buttons={[{
      label: 'Save',
      variant: 'primary',
      onPress: () => {}
    }, {
      label: 'Cancel',
      variant: 'ghost',
      onPress: () => {}
    }]} />
      <ButtonGroup layout="horizontal" buttons={[{
      label: 'Back',
      variant: 'secondary',
      onPress: () => {}
    }, {
      label: 'Next',
      variant: 'primary',
      onPress: () => {}
    }]} />
    </View>
}`,...(L=(A=w.parameters)==null?void 0:A.docs)==null?void 0:L.source}}};var N,_,H;v.parameters={...v.parameters,docs:{...(N=v.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'FAB',
  render: () => <View style={{
    flexDirection: 'row',
    gap: 24
  }}>
      <FabButton onPress={() => {}} icon={Plus} a11yLabel="Add" />
      <FabButton onPress={() => {}} icon={X} iconRotation={0} a11yLabel="Close" />
      <FabButton onPress={() => {}} icon={ChevronRight} a11yLabel="Next" />
    </View>
}`,...(H=(_=v.parameters)==null?void 0:_.docs)==null?void 0:H.source}}};var E,M,D;j.parameters={...j.parameters,docs:{...(E=j.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Chip',
  render: () => <View style={{
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8
  }}>
      <Chip tint={primary[700]} bg={primary[50]}>Inspection</Chip>
      <Chip tint={semantic.success} bg={semantic.successSoft}>Passed</Chip>
      <Chip tint={semantic.warning} bg={semantic.warningSoft}>Pending</Chip>
      <Chip tint={semantic.danger} bg={semantic.dangerSoft}>Failed</Chip>
    </View>
}`,...(D=(M=j.parameters)==null?void 0:M.docs)==null?void 0:D.source}}};var G,Q,K;S.parameters={...S.parameters,docs:{...(G=S.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'Section Header',
  render: () => <View style={{
    gap: 20,
    width: 360
  }}>
      <SectionHeader title="Recent inspections" />
      <SectionHeader title="Projects" variant="highlight" action={{
      label: 'See all',
      icon: ChevronRight,
      onPress: () => {}
    }} />
      <SectionHeader title="Archived" variant="muted" />
    </View>
}`,...(K=(Q=S.parameters)==null?void 0:Q.docs)==null?void 0:K.source}}};var W,O,U;P.parameters={...P.parameters,docs:{...(W=P.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: 'Quick Action Button',
  render: () => <View style={{
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12
  }}>
      <QuickActionButton label="Inspection" colorKey="inspection" onPress={() => {}} />
      <QuickActionButton label="Incident" colorKey="incident" onPress={() => {}} />
      <QuickActionButton label="Briefing" colorKey="briefing" onPress={() => {}} />
      <QuickActionButton label="Report" colorKey="report" onPress={() => {}} />
    </View>
}`,...(U=(O=P.parameters)==null?void 0:O.docs)==null?void 0:U.source}}};var X,$,Z;T.parameters={...T.parameters,docs:{...(X=T.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: 'Label & Error Text',
  render: () => <View style={{
    gap: 8,
    width: 320
  }}>
      <Label>Email address</Label>
      <ErrorText>This field is required</ErrorText>
    </View>
}`,...(Z=($=T.parameters)==null?void 0:$.docs)==null?void 0:Z.source}}};const De=["FormFieldStory","ButtonGroupStory","Fab","Chips","SectionHeaders","QuickActions","LabelsAndErrors"];export{w as ButtonGroupStory,j as Chips,v as Fab,x as FormFieldStory,T as LabelsAndErrors,P as QuickActions,S as SectionHeaders,De as __namedExportsOrder,Me as default};
