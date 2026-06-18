import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as p,R as re}from"./index-CK_08F47.js";import{u as d,d as i,w as pe}from"./theme-DstihSO3.js";import{c as f}from"./createLucideIcon-BqTg3DDj.js";import{P as ne}from"./plus-CgaAjEeX.js";import{X as me}from"./x-CmSFqHNt.js";import{A as c}from"./A11yText-uqOM_MyV.js";import{F as he}from"./FloatingLabelInput-BixPWq5R.js";import{B as _}from"./Button-B0l_2bfI.js";import{m as h,A as ye}from"./index-CvnRCj2y.js";import{b as ie}from"./accessibility-Df36XjAw.js";import{T as ge,S as fe}from"./triangle-alert-rsgQu0SW.js";import{p as z,s as u}from"./design-tokens-CbirmslE.js";import"./client-CICyZnRS.js";import"./haptics-Y9X1Ki18.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const se=f("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xe=f("CloudUpload",[["path",{d:"M12 13v8",key:"1l5pq0"}],["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"m8 17 4-4 4 4",key:"1quai1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const be=f("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const we=f("Megaphone",[["path",{d:"m3 11 18-5v12L3 14v-3z",key:"n962bs"}],["path",{d:"M11.6 16.8a3 3 0 1 1-5.8-1.6",key:"1yl0tm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ve=f("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);function je(t){if(!p.isValidElement(t))return!1;const r=t.type;return(r==null?void 0:r.displayName)==="Input"||(r==null?void 0:r.name)==="InputRefed"||(r==null?void 0:r.name)==="Input"}function oe({label:t,required:r=!1,error:l,helper:s,children:a}){const{theme:n}=d(),o=p.useMemo(()=>Se(n),[n]);return je(a)?e.jsx(i.View,{style:o.container,children:re.cloneElement(a,{label:t,required:r,error:l,helper:s})}):e.jsxs(i.View,{style:o.container,children:[e.jsxs(i.View,{style:o.labelContainer,children:[e.jsx(c,{size:"sm",weight:"semibold",color:n.colors.ink,children:t}),r&&e.jsx(c,{size:"sm",weight:"semibold",color:n.colors.danger,style:o.requiredIndicator,children:"*"})]}),a,l?e.jsx(c,{size:"xs",weight:"normal",color:n.colors.danger,style:o.errorText,children:l}):s?e.jsx(c,{size:"xs",weight:"normal",color:n.colors.inkSoft,style:o.helperText,children:s}):null]})}function Se(t){return i.StyleSheet.create({container:{gap:t.space(2)},labelContainer:{flexDirection:"row",alignItems:"center"},requiredIndicator:{marginLeft:2},errorText:{marginTop:t.space(1)},helperText:{marginTop:t.space(1)}})}oe.__docgenInfo={description:"",methods:[],displayName:"FormField",props:{label:{required:!0,tsType:{name:"string"},description:""},required:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},error:{required:!1,tsType:{name:"string"},description:""},helper:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};function F({buttons:t,layout:r="vertical",spacing:l}){const{theme:s}=d(),a=l??s.space(3);return r==="horizontal"?e.jsx(i.View,{style:[w.container,w.horizontal,{gap:a}],children:t.map((n,o)=>e.jsx(i.View,{style:{flex:1},children:e.jsx(_,{title:n.label,variant:n.variant||"secondary",size:n.size||"md",onPress:n.onPress,loading:n.loading,disabled:n.disabled})},o))}):e.jsx(i.View,{style:[w.container,w.vertical,{gap:a}],children:t.map((n,o)=>e.jsx(_,{title:n.label,variant:n.variant||(o===t.length-1?"primary":"secondary"),size:n.size||"lg",onPress:n.onPress,loading:n.loading,disabled:n.disabled},o))})}const w=i.StyleSheet.create({container:{alignItems:"stretch"},horizontal:{flexDirection:"row"},vertical:{flexDirection:"column"}});F.__docgenInfo={description:"",methods:[],displayName:"ButtonGroup",props:{buttons:{required:!0,tsType:{name:"Array",elements:[{name:"ButtonGroupItem"}],raw:"ButtonGroupItem[]"},description:""},layout:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"",defaultValue:{value:"'vertical'",computed:!1}},spacing:{required:!1,tsType:{name:"number"},description:""}}};const Te={code:"function FabButtonTsx1(){const{scale}=this.__closure;return{transform:[{scale:scale.value}]};}"},C=re.forwardRef(function({onPress:r,icon:l=ne,iconRotation:s=0,a11yLabel:a,a11yHint:n,style:o},x){const{theme:m}=d(),I=h.useSharedValue(1),ce=h.useAnimatedStyle(function({_worklet_9271312155365_init_data:ue,scale:B}){const b=()=>({transform:[{scale:B.value}]});return b.__closure={scale:B},b.__workletHash=9271312155365,b.__initData=ue,b}({_worklet_9271312155365_init_data:Te,scale:I})),de=p.useCallback(()=>{I.value=h.withSequence(h.withTiming(.92,{duration:80}),h.withSpring(1,{stiffness:300,damping:10}))},[]);return e.jsx(i.Pressable,{ref:x,onPress:r,onPressIn:de,style:[{position:"absolute",right:20,bottom:24,zIndex:50},o],...ie(a,n,"button"),children:e.jsx(ye.View,{style:[{width:60,height:60,borderRadius:30,backgroundColor:m.colors.accent,alignItems:"center",justifyContent:"center",shadowColor:m.colors.accent,shadowOffset:{width:0,height:6},shadowOpacity:.45,shadowRadius:12,elevation:10},ce],children:e.jsx(l,{size:28,color:m.colors.white,strokeWidth:1.5,style:s!==0?{transform:[{rotate:`${s}deg`}]}:void 0})})})});C.__docgenInfo={description:"",methods:[],displayName:"FabButton",props:{onPress:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},icon:{required:!1,tsType:{name:"LucideIcon"},description:"",defaultValue:{value:"Plus",computed:!0}},iconRotation:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},a11yLabel:{required:!0,tsType:{name:"string"},description:""},a11yHint:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"StyleProp",elements:[{name:"ViewStyle"}],raw:"StyleProp<ViewStyle>"},description:""},viewRef:{required:!1,tsType:{name:"ReactRefObject",raw:"React.RefObject<View>",elements:[{name:"View"}]},description:""}}};function y({children:t,tint:r,bg:l}){return e.jsx(i.View,{style:{paddingHorizontal:8,paddingVertical:3,borderRadius:999,backgroundColor:l,alignSelf:"flex-start"},children:e.jsx(i.Text,{style:{fontSize:12,fontWeight:"600",color:r},children:t})})}y.__docgenInfo={description:"",methods:[],displayName:"Chip",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},tint:{required:!0,tsType:{name:"string"},description:""},bg:{required:!0,tsType:{name:"string"},description:""}}};function q({title:t,action:r,variant:l="default"}){const{theme:s}=d(),a=p.useMemo(()=>Pe(s),[s]),n={default:s.colors.ink,highlight:s.colors.accent,muted:s.colors.inkSoft}[l];return e.jsxs(i.View,{style:a.container,children:[e.jsx(c,{size:"lg",weight:"semibold",color:n,style:{flex:1},children:t}),r&&e.jsxs(i.Pressable,{onPress:r.onPress,hitSlop:{top:6,bottom:6,left:0,right:0},style:({pressed:o})=>[a.actionButton,o&&a.actionButtonPressed],accessibilityRole:"button",accessibilityLabel:r.label,children:[r.icon&&(()=>{const o=r.icon;return e.jsx(o,{size:18,color:s.colors.accent,strokeWidth:1.5,style:{marginRight:4}})})(),e.jsx(c,{size:"sm",weight:"semibold",color:s.colors.accent,children:r.label})]})]})}function Pe(t){return i.StyleSheet.create({container:{flexDirection:"row",alignItems:"center",justifyContent:"space-between",paddingVertical:t.space(3)},actionButton:{flexDirection:"row",alignItems:"center",paddingVertical:t.space(2),paddingHorizontal:t.space(3),borderRadius:t.radius.md},actionButtonPressed:{backgroundColor:t.colors.accentSoft}})}q.__docgenInfo={description:"",methods:[],displayName:"SectionHeader",props:{title:{required:!0,tsType:{name:"string"},description:""},action:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  label: string;
  icon?: LucideIcon;
  onPress: () => void;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"icon",value:{name:"LucideIcon",required:!1}},{key:"onPress",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}}]}},description:""},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'highlight' | 'muted'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'highlight'"},{name:"literal",value:"'muted'"}]},description:"",defaultValue:{value:"'default'",computed:!1}}}};const ke={inspection:{icon:fe,filled:!1},incident:{icon:ge,filled:!1},briefing:{icon:we,filled:!1},report:{icon:be,filled:!1},participant:{icon:ve,filled:!1},file:{icon:xe,filled:!1}};function g({label:t,colorKey:r,onPress:l,fixedWidth:s}){const{theme:a}=d(),n=p.useMemo(()=>Ve(a,s),[a,s]),{icon:o,filled:x}=ke[r];return e.jsxs(i.Pressable,{onPress:l,style:({pressed:m})=>[n.container,m&&n.pressed],...ie(t,void 0,"button"),children:[e.jsx(i.View,{style:n.iconCircle,children:e.jsx(o,{size:24,color:a.colors.accent,fill:x?a.colors.accent:"none",strokeWidth:x?0:1.5})}),e.jsx(c,{size:"xs",weight:"bold",color:a.colors.inkSoft,style:n.label,numberOfLines:1,children:t})]})}function Ve(t,r){return i.StyleSheet.create({container:{...r?{width:r}:{flex:1},alignItems:"center",gap:t.space(2),paddingHorizontal:4},pressed:{opacity:.7},iconCircle:{width:56,height:56,borderRadius:t.radius.full,backgroundColor:pe("#FF6D2E",.12),alignItems:"center",justifyContent:"center"},label:{textAlign:"center",fontWeight:"800"}})}g.__docgenInfo={description:"",methods:[],displayName:"QuickActionButton",props:{label:{required:!0,tsType:{name:"string"},description:""},colorKey:{required:!0,tsType:{name:"union",raw:"'inspection' | 'incident' | 'briefing' | 'report' | 'participant' | 'file'",elements:[{name:"literal",value:"'inspection'"},{name:"literal",value:"'incident'"},{name:"literal",value:"'briefing'"},{name:"literal",value:"'report'"},{name:"literal",value:"'participant'"},{name:"literal",value:"'file'"}]},description:""},onPress:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},fixedWidth:{required:!1,tsType:{name:"number"},description:""}}};function ae({children:t,style:r}){const{theme:l}=d();return e.jsx(i.Text,{style:[{fontSize:11,fontWeight:"600",color:l.colors.inkSoft,letterSpacing:.5},r],children:t})}ae.__docgenInfo={description:"",methods:[],displayName:"Label",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},style:{required:!1,tsType:{name:"any"},description:""}}};function le({children:t}){const{theme:r}=d();return t?e.jsx(i.Text,{style:{fontSize:13,color:r.colors.semantic.danger},children:t}):null}le.__docgenInfo={description:"",methods:[],displayName:"ErrorText",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const Qe={title:"Components/Misc"},v={name:"Form Field",render:()=>{const[t,r]=p.useState("");return e.jsx(i.View,{style:{width:340},children:e.jsx(oe,{label:"Crane operator",required:!0,helper:"Full legal name",children:e.jsx(he,{label:"Name",value:t,onChangeText:r})})})}},j={name:"Button Group",render:()=>e.jsxs(i.View,{style:{gap:24,width:340},children:[e.jsx(F,{buttons:[{label:"Save",variant:"primary",onPress:()=>{}},{label:"Cancel",variant:"ghost",onPress:()=>{}}]}),e.jsx(F,{layout:"horizontal",buttons:[{label:"Back",variant:"secondary",onPress:()=>{}},{label:"Next",variant:"primary",onPress:()=>{}}]})]})},S={name:"FAB",render:()=>e.jsxs(i.View,{style:{flexDirection:"row",gap:24},children:[e.jsx(C,{onPress:()=>{},icon:ne,a11yLabel:"Add"}),e.jsx(C,{onPress:()=>{},icon:me,iconRotation:0,a11yLabel:"Close"}),e.jsx(C,{onPress:()=>{},icon:se,a11yLabel:"Next"})]})},T={name:"Chip",render:()=>e.jsxs(i.View,{style:{flexDirection:"row",flexWrap:"wrap",gap:8},children:[e.jsx(y,{tint:z[700],bg:z[50],children:"Inspection"}),e.jsx(y,{tint:u.success,bg:u.successSoft,children:"Passed"}),e.jsx(y,{tint:u.warning,bg:u.warningSoft,children:"Pending"}),e.jsx(y,{tint:u.danger,bg:u.dangerSoft,children:"Failed"})]})},P={name:"Section Header",render:()=>e.jsxs(i.View,{style:{gap:20,width:360},children:[e.jsx(q,{title:"Recent inspections"}),e.jsx(q,{title:"Projects",variant:"highlight",action:{label:"See all",icon:se,onPress:()=>{}}}),e.jsx(q,{title:"Archived",variant:"muted"})]})},k={name:"Quick Action Button",render:()=>e.jsxs(i.View,{style:{flexDirection:"row",flexWrap:"wrap",gap:12},children:[e.jsx(g,{label:"Inspection",colorKey:"inspection",onPress:()=>{}}),e.jsx(g,{label:"Incident",colorKey:"incident",onPress:()=>{}}),e.jsx(g,{label:"Briefing",colorKey:"briefing",onPress:()=>{}}),e.jsx(g,{label:"Report",colorKey:"report",onPress:()=>{}})]})},V={name:"Label & Error Text",render:()=>e.jsxs(i.View,{style:{gap:8,width:320},children:[e.jsx(ae,{children:"Email address"}),e.jsx(le,{children:"This field is required"})]})};var R,A,L;v.parameters={...v.parameters,docs:{...(R=v.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(L=(A=v.parameters)==null?void 0:A.docs)==null?void 0:L.source}}};var N,H,E;j.parameters={...j.parameters,docs:{...(N=j.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(E=(H=j.parameters)==null?void 0:H.docs)==null?void 0:E.source}}};var M,D,G;S.parameters={...S.parameters,docs:{...(M=S.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'FAB',
  render: () => <View style={{
    flexDirection: 'row',
    gap: 24
  }}>
      <FabButton onPress={() => {}} icon={Plus} a11yLabel="Add" />
      <FabButton onPress={() => {}} icon={X} iconRotation={0} a11yLabel="Close" />
      <FabButton onPress={() => {}} icon={ChevronRight} a11yLabel="Next" />
    </View>
}`,...(G=(D=S.parameters)==null?void 0:D.docs)==null?void 0:G.source}}};var Q,K,W;T.parameters={...T.parameters,docs:{...(Q=T.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(W=(K=T.parameters)==null?void 0:K.docs)==null?void 0:W.source}}};var O,U,$;P.parameters={...P.parameters,docs:{...(O=P.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...($=(U=P.parameters)==null?void 0:U.docs)==null?void 0:$.source}}};var X,Z,J;k.parameters={...k.parameters,docs:{...(X=k.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(J=(Z=k.parameters)==null?void 0:Z.docs)==null?void 0:J.source}}};var Y,ee,te;V.parameters={...V.parameters,docs:{...(Y=V.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: 'Label & Error Text',
  render: () => <View style={{
    gap: 8,
    width: 320
  }}>
      <Label>Email address</Label>
      <ErrorText>This field is required</ErrorText>
    </View>
}`,...(te=(ee=V.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};const Ke=["FormFieldStory","ButtonGroupStory","Fab","Chips","SectionHeaders","QuickActions","LabelsAndErrors"];export{j as ButtonGroupStory,T as Chips,S as Fab,v as FormFieldStory,V as LabelsAndErrors,k as QuickActions,P as SectionHeaders,Ke as __namedExportsOrder,Qe as default};
