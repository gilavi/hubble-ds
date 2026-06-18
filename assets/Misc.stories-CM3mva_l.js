import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as m,R as M}from"./index-CK_08F47.js";import{u as j,a}from"./theme-CBxjf-rO.js";import{c as X}from"./createLucideIcon-BqTg3DDj.js";import{P as $}from"./plus-CgaAjEeX.js";import{A as d}from"./A11yText-DxsfkOw3.js";import{F as ee}from"./FloatingLabelInput-Cu5H3Gg2.js";import{B as T}from"./Button--Go2Kvhb.js";import{m as u,A as te}from"./index-C5wHSLu-.js";import{a as re}from"./accessibility-Don06awW.js";import{p as q,s as c}from"./design-tokens-CbirmslE.js";import"./client-CICyZnRS.js";import"./haptics-Y9X1Ki18.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J=X("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ne=X("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function ae(r){if(!m.isValidElement(r))return!1;const t=r.type;return(t==null?void 0:t.displayName)==="Input"||(t==null?void 0:t.name)==="InputRefed"||(t==null?void 0:t.name)==="Input"}function K({label:r,required:t=!1,error:l,helper:i,children:o}){const{theme:n}=j(),s=m.useMemo(()=>se(n),[n]);return ae(o)?e.jsx(a.View,{style:s.container,children:M.cloneElement(o,{label:r,required:t,error:l,helper:i})}):e.jsxs(a.View,{style:s.container,children:[e.jsxs(a.View,{style:s.labelContainer,children:[e.jsx(d,{size:"sm",weight:"semibold",color:n.colors.ink,children:r}),t&&e.jsx(d,{size:"sm",weight:"semibold",color:n.colors.danger,style:s.requiredIndicator,children:"*"})]}),o,l?e.jsx(d,{size:"xs",weight:"normal",color:n.colors.danger,style:s.errorText,children:l}):i?e.jsx(d,{size:"xs",weight:"normal",color:n.colors.inkSoft,style:s.helperText,children:i}):null]})}function se(r){return a.StyleSheet.create({container:{gap:r.space(2)},labelContainer:{flexDirection:"row",alignItems:"center"},requiredIndicator:{marginLeft:2},errorText:{marginTop:r.space(1)},helperText:{marginTop:r.space(1)}})}K.__docgenInfo={description:"",methods:[],displayName:"FormField",props:{label:{required:!0,tsType:{name:"string"},description:""},required:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},error:{required:!1,tsType:{name:"string"},description:""},helper:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};function V({buttons:r,layout:t="vertical",spacing:l}){const{theme:i}=j(),o=l??i.space(3);return t==="horizontal"?e.jsx(a.View,{style:[g.container,g.horizontal,{gap:o}],children:r.map((n,s)=>e.jsx(a.View,{style:{flex:1},children:e.jsx(T,{title:n.label,variant:n.variant||"secondary",size:n.size||"md",onPress:n.onPress,loading:n.loading,disabled:n.disabled})},s))}):e.jsx(a.View,{style:[g.container,g.vertical,{gap:o}],children:r.map((n,s)=>e.jsx(T,{title:n.label,variant:n.variant||(s===r.length-1?"primary":"secondary"),size:n.size||"lg",onPress:n.onPress,loading:n.loading,disabled:n.disabled},s))})}const g=a.StyleSheet.create({container:{alignItems:"stretch"},horizontal:{flexDirection:"row"},vertical:{flexDirection:"column"}});V.__docgenInfo={description:"",methods:[],displayName:"ButtonGroup",props:{buttons:{required:!0,tsType:{name:"Array",elements:[{name:"ButtonGroupItem"}],raw:"ButtonGroupItem[]"},description:""},layout:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"",defaultValue:{value:"'vertical'",computed:!1}},spacing:{required:!1,tsType:{name:"number"},description:""}}};const ie={code:"function FabButtonTsx1(){const{scale}=this.__closure;return{transform:[{scale:scale.value}]};}"},v=M.forwardRef(function({onPress:t,icon:l=$,iconRotation:i=0,a11yLabel:o,a11yHint:n,style:s},Q){const{theme:P}=j(),C=u.useSharedValue(1),U=u.useAnimatedStyle(function({_worklet_9271312155365_init_data:Z,scale:F}){const h=()=>({transform:[{scale:F.value}]});return h.__closure={scale:F},h.__workletHash=9271312155365,h.__initData=Z,h}({_worklet_9271312155365_init_data:ie,scale:C})),Y=m.useCallback(()=>{C.value=u.withSequence(u.withTiming(.92,{duration:80}),u.withSpring(1,{stiffness:300,damping:10}))},[]);return e.jsx(a.Pressable,{ref:Q,onPress:t,onPressIn:Y,style:[{position:"absolute",right:20,bottom:24,zIndex:50},s],...re(o,n,"button"),children:e.jsx(te.View,{style:[{width:60,height:60,borderRadius:30,backgroundColor:P.colors.accent,alignItems:"center",justifyContent:"center",shadowColor:P.colors.accent,shadowOffset:{width:0,height:6},shadowOpacity:.45,shadowRadius:12,elevation:10},U],children:e.jsx(l,{size:28,color:P.colors.white,strokeWidth:1.5,style:i!==0?{transform:[{rotate:`${i}deg`}]}:void 0})})})});v.__docgenInfo={description:"",methods:[],displayName:"FabButton",props:{onPress:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},icon:{required:!1,tsType:{name:"LucideIcon"},description:"",defaultValue:{value:"Plus",computed:!0}},iconRotation:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},a11yLabel:{required:!0,tsType:{name:"string"},description:""},a11yHint:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"StyleProp",elements:[{name:"ViewStyle"}],raw:"StyleProp<ViewStyle>"},description:""},viewRef:{required:!1,tsType:{name:"ReactRefObject",raw:"React.RefObject<View>",elements:[{name:"View"}]},description:""}}};function p({children:r,tint:t,bg:l}){return e.jsx(a.View,{style:{paddingHorizontal:8,paddingVertical:3,borderRadius:999,backgroundColor:l,alignSelf:"flex-start"},children:e.jsx(a.Text,{style:{fontSize:12,fontWeight:"600",color:t},children:r})})}p.__docgenInfo={description:"",methods:[],displayName:"Chip",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},tint:{required:!0,tsType:{name:"string"},description:""},bg:{required:!0,tsType:{name:"string"},description:""}}};function S({title:r,action:t,variant:l="default"}){const{theme:i}=j(),o=m.useMemo(()=>oe(i),[i]),n={default:i.colors.ink,highlight:i.colors.accent,muted:i.colors.inkSoft}[l];return e.jsxs(a.View,{style:o.container,children:[e.jsx(d,{size:"lg",weight:"semibold",color:n,style:{flex:1},children:r}),t&&e.jsxs(a.Pressable,{onPress:t.onPress,hitSlop:{top:6,bottom:6,left:0,right:0},style:({pressed:s})=>[o.actionButton,s&&o.actionButtonPressed],accessibilityRole:"button",accessibilityLabel:t.label,children:[t.icon&&(()=>{const s=t.icon;return e.jsx(s,{size:18,color:i.colors.accent,strokeWidth:1.5,style:{marginRight:4}})})(),e.jsx(d,{size:"sm",weight:"semibold",color:i.colors.accent,children:t.label})]})]})}function oe(r){return a.StyleSheet.create({container:{flexDirection:"row",alignItems:"center",justifyContent:"space-between",paddingVertical:r.space(3)},actionButton:{flexDirection:"row",alignItems:"center",paddingVertical:r.space(2),paddingHorizontal:r.space(3),borderRadius:r.radius.md},actionButtonPressed:{backgroundColor:r.colors.accentSoft}})}S.__docgenInfo={description:"",methods:[],displayName:"SectionHeader",props:{title:{required:!0,tsType:{name:"string"},description:""},action:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  label: string;
  icon?: LucideIcon;
  onPress: () => void;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"icon",value:{name:"LucideIcon",required:!1}},{key:"onPress",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}}]}},description:""},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'highlight' | 'muted'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'highlight'"},{name:"literal",value:"'muted'"}]},description:"",defaultValue:{value:"'default'",computed:!1}}}};const Se={title:"Components/Misc"},y={name:"Form Field",render:()=>{const[r,t]=m.useState("");return e.jsx(a.View,{style:{width:340},children:e.jsx(K,{label:"Crane operator",required:!0,helper:"Full legal name",children:e.jsx(ee,{label:"Name",value:r,onChangeText:t})})})}},f={name:"Button Group",render:()=>e.jsxs(a.View,{style:{gap:24,width:340},children:[e.jsx(V,{buttons:[{label:"Save",variant:"primary",onPress:()=>{}},{label:"Cancel",variant:"ghost",onPress:()=>{}}]}),e.jsx(V,{layout:"horizontal",buttons:[{label:"Back",variant:"secondary",onPress:()=>{}},{label:"Next",variant:"primary",onPress:()=>{}}]})]})},w={name:"FAB",render:()=>e.jsxs(a.View,{style:{flexDirection:"row",gap:24},children:[e.jsx(v,{onPress:()=>{},icon:$,a11yLabel:"Add"}),e.jsx(v,{onPress:()=>{},icon:ne,iconRotation:0,a11yLabel:"Close"}),e.jsx(v,{onPress:()=>{},icon:J,a11yLabel:"Next"})]})},b={name:"Chip",render:()=>e.jsxs(a.View,{style:{flexDirection:"row",flexWrap:"wrap",gap:8},children:[e.jsx(p,{tint:q[700],bg:q[50],children:"Inspection"}),e.jsx(p,{tint:c.success,bg:c.successSoft,children:"Passed"}),e.jsx(p,{tint:c.warning,bg:c.warningSoft,children:"Pending"}),e.jsx(p,{tint:c.danger,bg:c.dangerSoft,children:"Failed"})]})},x={name:"Section Header",render:()=>e.jsxs(a.View,{style:{gap:20,width:360},children:[e.jsx(S,{title:"Recent inspections"}),e.jsx(S,{title:"Projects",variant:"highlight",action:{label:"See all",icon:J,onPress:()=>{}}}),e.jsx(S,{title:"Archived",variant:"muted"})]})};var I,B,_;y.parameters={...y.parameters,docs:{...(I=y.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(_=(B=y.parameters)==null?void 0:B.docs)==null?void 0:_.source}}};var R,z,k;f.parameters={...f.parameters,docs:{...(R=f.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(k=(z=f.parameters)==null?void 0:z.docs)==null?void 0:k.source}}};var L,N,H;w.parameters={...w.parameters,docs:{...(L=w.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'FAB',
  render: () => <View style={{
    flexDirection: 'row',
    gap: 24
  }}>
      <FabButton onPress={() => {}} icon={Plus} a11yLabel="Add" />
      <FabButton onPress={() => {}} icon={X} iconRotation={0} a11yLabel="Close" />
      <FabButton onPress={() => {}} icon={ChevronRight} a11yLabel="Next" />
    </View>
}`,...(H=(N=w.parameters)==null?void 0:N.docs)==null?void 0:H.source}}};var A,D,G;b.parameters={...b.parameters,docs:{...(A=b.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(G=(D=b.parameters)==null?void 0:D.docs)==null?void 0:G.source}}};var E,O,W;x.parameters={...x.parameters,docs:{...(E=x.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(W=(O=x.parameters)==null?void 0:O.docs)==null?void 0:W.source}}};const je=["FormFieldStory","ButtonGroupStory","Fab","Chips","SectionHeaders"];export{f as ButtonGroupStory,b as Chips,w as Fab,y as FormFieldStory,x as SectionHeaders,je as __namedExportsOrder,Se as default};
