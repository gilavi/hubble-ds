import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as G}from"./index-CK_08F47.js";import{u as X,d as r,w as Z}from"./theme-DstihSO3.js";import{c as s}from"./createLucideIcon-BqTg3DDj.js";import{P as J}from"./plus-CgaAjEeX.js";import{X as Y}from"./x-CmSFqHNt.js";import{B as v,C as c,F as b,a as $,L as ee,E as re,S as x}from"./ErrorText-D7vJOJ6I.js";import{F as te}from"./FloatingLabelInput-BixPWq5R.js";import{T as ne,S as ae}from"./triangle-alert-rsgQu0SW.js";import{A as ie}from"./A11yText-BS0WF2iH.js";import{a as oe}from"./accessibility-xurZvXxT.js";import{p as j,s as a}from"./design-tokens-CbirmslE.js";import"./client-CICyZnRS.js";import"./Button-B0l_2bfI.js";import"./index-CvnRCj2y.js";import"./haptics-Y9X1Ki18.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W=s("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const se=s("CloudUpload",[["path",{d:"M12 13v8",key:"1l5pq0"}],["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"m8 17 4-4 4 4",key:"1quai1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const le=s("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ce=s("Megaphone",[["path",{d:"m3 11 18-5v12L3 14v-3z",key:"n962bs"}],["path",{d:"M11.6 16.8a3 3 0 1 1-5.8-1.6",key:"1yl0tm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const de=s("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]),pe={inspection:{icon:ae,filled:!1},incident:{icon:ne,filled:!1},briefing:{icon:ce,filled:!1},report:{icon:le,filled:!1},participant:{icon:de,filled:!1},file:{icon:se,filled:!1}};function o({label:t,colorKey:n,onPress:_,fixedWidth:f}){const{theme:i}=X(),l=G.useMemo(()=>me(i,f),[i,f]),{icon:O,filled:w}=pe[n];return e.jsxs(r.Pressable,{onPress:_,style:({pressed:U})=>[l.container,U&&l.pressed],...oe(t,void 0,"button"),children:[e.jsx(r.View,{style:l.iconCircle,children:e.jsx(O,{size:24,color:i.colors.accent,fill:w?i.colors.accent:"none",strokeWidth:w?0:1.5})}),e.jsx(ie,{size:"xs",weight:"bold",color:i.colors.inkSoft,style:l.label,numberOfLines:1,children:t})]})}function me(t,n){return r.StyleSheet.create({container:{...n?{width:n}:{flex:1},alignItems:"center",gap:t.space(2),paddingHorizontal:4},pressed:{opacity:.7},iconCircle:{width:56,height:56,borderRadius:t.radius.full,backgroundColor:Z("#FF6D2E",.12),alignItems:"center",justifyContent:"center"},label:{textAlign:"center",fontWeight:"800"}})}o.__docgenInfo={description:"",methods:[],displayName:"QuickActionButton",props:{label:{required:!0,tsType:{name:"string"},description:""},colorKey:{required:!0,tsType:{name:"union",raw:"'inspection' | 'incident' | 'briefing' | 'report' | 'participant' | 'file'",elements:[{name:"literal",value:"'inspection'"},{name:"literal",value:"'incident'"},{name:"literal",value:"'briefing'"},{name:"literal",value:"'report'"},{name:"literal",value:"'participant'"},{name:"literal",value:"'file'"}]},description:""},onPress:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},fixedWidth:{required:!1,tsType:{name:"number"},description:""}}};const Ve={title:"Components/Misc"},d={name:"Form Field",render:()=>{const[t,n]=G.useState("");return e.jsx(r.View,{style:{width:340},children:e.jsx($,{label:"Crane operator",required:!0,helper:"Full legal name",children:e.jsx(te,{label:"Name",value:t,onChangeText:n})})})}},p={name:"Button Group",render:()=>e.jsxs(r.View,{style:{gap:24,width:340},children:[e.jsx(v,{buttons:[{label:"Save",variant:"primary",onPress:()=>{}},{label:"Cancel",variant:"ghost",onPress:()=>{}}]}),e.jsx(v,{layout:"horizontal",buttons:[{label:"Back",variant:"secondary",onPress:()=>{}},{label:"Next",variant:"primary",onPress:()=>{}}]})]})},m={name:"FAB",render:()=>e.jsxs(r.View,{style:{flexDirection:"row",gap:24},children:[e.jsx(b,{onPress:()=>{},icon:J,a11yLabel:"Add"}),e.jsx(b,{onPress:()=>{},icon:Y,iconRotation:0,a11yLabel:"Close"}),e.jsx(b,{onPress:()=>{},icon:W,a11yLabel:"Next"})]})},u={name:"Chip",render:()=>e.jsxs(r.View,{style:{flexDirection:"row",flexWrap:"wrap",gap:8},children:[e.jsx(c,{tint:j[700],bg:j[50],children:"Inspection"}),e.jsx(c,{tint:a.success,bg:a.successSoft,children:"Passed"}),e.jsx(c,{tint:a.warning,bg:a.warningSoft,children:"Pending"}),e.jsx(c,{tint:a.danger,bg:a.dangerSoft,children:"Failed"})]})},h={name:"Section Header",render:()=>e.jsxs(r.View,{style:{gap:20,width:360},children:[e.jsx(x,{title:"Recent inspections"}),e.jsx(x,{title:"Projects",variant:"highlight",action:{label:"See all",icon:W,onPress:()=>{}}}),e.jsx(x,{title:"Archived",variant:"muted"})]})},y={name:"Quick Action Button",render:()=>e.jsxs(r.View,{style:{flexDirection:"row",flexWrap:"wrap",gap:12},children:[e.jsx(o,{label:"Inspection",colorKey:"inspection",onPress:()=>{}}),e.jsx(o,{label:"Incident",colorKey:"incident",onPress:()=>{}}),e.jsx(o,{label:"Briefing",colorKey:"briefing",onPress:()=>{}}),e.jsx(o,{label:"Report",colorKey:"report",onPress:()=>{}})]})},g={name:"Label & Error Text",render:()=>e.jsxs(r.View,{style:{gap:8,width:320},children:[e.jsx(ee,{children:"Email address"}),e.jsx(re,{children:"This field is required"})]})};var P,S,C;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(C=(S=d.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var F,k,B;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(B=(k=p.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var V,A,L;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'FAB',
  render: () => <View style={{
    flexDirection: 'row',
    gap: 24
  }}>
      <FabButton onPress={() => {}} icon={Plus} a11yLabel="Add" />
      <FabButton onPress={() => {}} icon={X} iconRotation={0} a11yLabel="Close" />
      <FabButton onPress={() => {}} icon={ChevronRight} a11yLabel="Next" />
    </View>
}`,...(L=(A=m.parameters)==null?void 0:A.docs)==null?void 0:L.source}}};var T,q,E;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(E=(q=u.parameters)==null?void 0:q.docs)==null?void 0:E.source}}};var H,I,M;h.parameters={...h.parameters,docs:{...(H=h.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(M=(I=h.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};var R,Q,K;y.parameters={...y.parameters,docs:{...(R=y.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(K=(Q=y.parameters)==null?void 0:Q.docs)==null?void 0:K.source}}};var z,N,D;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Label & Error Text',
  render: () => <View style={{
    gap: 8,
    width: 320
  }}>
      <Label>Email address</Label>
      <ErrorText>This field is required</ErrorText>
    </View>
}`,...(D=(N=g.parameters)==null?void 0:N.docs)==null?void 0:D.source}}};const Ae=["FormFieldStory","ButtonGroupStory","Fab","Chips","SectionHeaders","QuickActions","LabelsAndErrors"];export{p as ButtonGroupStory,u as Chips,m as Fab,d as FormFieldStory,g as LabelsAndErrors,y as QuickActions,h as SectionHeaders,Ae as __namedExportsOrder,Ve as default};
