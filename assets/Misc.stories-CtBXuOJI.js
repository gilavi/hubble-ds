import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as j,R as M}from"./index-CK_08F47.js";import{u,d as s}from"./theme-DstihSO3.js";import{c as re}from"./createLucideIcon-BqTg3DDj.js";import{P as X}from"./plus-CgaAjEeX.js";import{X as te}from"./x-CmSFqHNt.js";import{A as d}from"./A11yText-uqOM_MyV.js";import{F as ne}from"./FloatingLabelInput-BjcIfEAr.js";import{B as T}from"./Button-BLjwVeJY.js";import{A as se}from"./index-CvnRCj2y.js";import{h as ie}from"./haptics-Y9X1Ki18.js";import{b as ae}from"./accessibility-Df36XjAw.js";import{u as oe}from"./usePressBounce-BuetNpAK.js";import{p as V,s as c}from"./design-tokens-CbirmslE.js";import"./client-CICyZnRS.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=re("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);function le(r){if(!j.isValidElement(r))return!1;const t=r.type;return(t==null?void 0:t.displayName)==="Input"||(t==null?void 0:t.name)==="InputRefed"||(t==null?void 0:t.name)==="Input"}function J({label:r,required:t=!1,error:o,helper:a,children:l}){const{theme:n}=u(),i=j.useMemo(()=>ce(n),[n]);return le(l)?e.jsx(s.View,{style:i.container,children:M.cloneElement(l,{label:r,required:t,error:o,helper:a})}):e.jsxs(s.View,{style:i.container,children:[e.jsxs(s.View,{style:i.labelContainer,children:[e.jsx(d,{size:"sm",weight:"semibold",color:n.colors.ink,children:r}),t&&e.jsx(d,{size:"sm",weight:"semibold",color:n.colors.danger,style:i.requiredIndicator,children:"*"})]}),l,o?e.jsx(d,{size:"xs",weight:"normal",color:n.colors.danger,style:i.errorText,children:o}):a?e.jsx(d,{size:"xs",weight:"normal",color:n.colors.inkSoft,style:i.helperText,children:a}):null]})}function ce(r){return s.StyleSheet.create({container:{gap:r.space(2)},labelContainer:{flexDirection:"row",alignItems:"center"},requiredIndicator:{marginLeft:2},errorText:{marginTop:r.space(1)},helperText:{marginTop:r.space(1)}})}J.__docgenInfo={description:"",methods:[],displayName:"FormField",props:{label:{required:!0,tsType:{name:"string"},description:""},required:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},error:{required:!1,tsType:{name:"string"},description:""},helper:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};function P({buttons:r,layout:t="vertical",spacing:o}){const{theme:a}=u(),l=o??a.space(3);return t==="horizontal"?e.jsx(s.View,{style:[m.container,m.horizontal,{gap:l}],children:r.map((n,i)=>e.jsx(s.View,{style:{flex:1},children:e.jsx(T,{title:n.label,variant:n.variant||"secondary",size:n.size||"md",onPress:n.onPress,loading:n.loading,disabled:n.disabled})},i))}):e.jsx(s.View,{style:[m.container,m.vertical,{gap:l}],children:r.map((n,i)=>e.jsx(T,{title:n.label,variant:n.variant||(i===r.length-1?"primary":"secondary"),size:n.size||"lg",onPress:n.onPress,loading:n.loading,disabled:n.disabled},i))})}const m=s.StyleSheet.create({container:{alignItems:"stretch"},horizontal:{flexDirection:"row"},vertical:{flexDirection:"column"}});P.__docgenInfo={description:"",methods:[],displayName:"ButtonGroup",props:{buttons:{required:!0,tsType:{name:"Array",elements:[{name:"ButtonGroupItem"}],raw:"ButtonGroupItem[]"},description:""},layout:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"",defaultValue:{value:"'vertical'",computed:!1}},spacing:{required:!1,tsType:{name:"number"},description:""}}};const w=M.forwardRef(function({onPress:t,icon:o=X,iconRotation:a=0,a11yLabel:l,a11yHint:n,style:i},U){const{theme:S}=u(),{pressStyle:Y,bounce:Z}=oe(),ee=()=>{Z(),ie.light(),t()};return e.jsx(s.Pressable,{ref:U,onPress:ee,style:[{position:"absolute",right:20,bottom:24,zIndex:50},i],...ae(l,n,"button"),children:e.jsx(se.View,{style:[{width:60,height:60,borderRadius:30,backgroundColor:S.colors.accent,alignItems:"center",justifyContent:"center",shadowColor:S.colors.accent,shadowOffset:{width:0,height:6},shadowOpacity:.45,shadowRadius:12,elevation:10},Y],children:e.jsx(o,{size:28,color:S.colors.white,strokeWidth:1.5,style:a!==0?{transform:[{rotate:`${a}deg`}]}:void 0})})})});w.__docgenInfo={description:"Shared floating action button. 60x60 circle, accent background with glow\nshadow. Pass `iconRotation` (degrees) to animate the icon (e.g. 45 for a\nx close state). Shares the canonical press bounce with every button.",methods:[],displayName:"FabButton",props:{onPress:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},icon:{required:!1,tsType:{name:"LucideIcon"},description:"",defaultValue:{value:"Plus",computed:!0}},iconRotation:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},a11yLabel:{required:!0,tsType:{name:"string"},description:""},a11yHint:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"StyleProp",elements:[{name:"ViewStyle"}],raw:"StyleProp<ViewStyle>"},description:""},viewRef:{required:!1,tsType:{name:"ReactRefObject",raw:"React.RefObject<View>",elements:[{name:"View"}]},description:""}}};function p({children:r,tint:t,bg:o}){return e.jsx(s.View,{style:{paddingHorizontal:8,paddingVertical:3,borderRadius:999,backgroundColor:o,alignSelf:"flex-start"},children:e.jsx(s.Text,{style:{fontSize:12,fontWeight:"600",color:t},children:r})})}p.__docgenInfo={description:"",methods:[],displayName:"Chip",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},tint:{required:!0,tsType:{name:"string"},description:""},bg:{required:!0,tsType:{name:"string"},description:""}}};function v({title:r,action:t,variant:o="default"}){const{theme:a}=u(),l=j.useMemo(()=>de(a),[a]),n={default:a.colors.ink,highlight:a.colors.accent,muted:a.colors.inkSoft}[o];return e.jsxs(s.View,{style:l.container,children:[e.jsx(d,{size:"lg",weight:"semibold",color:n,style:{flex:1},children:r}),t&&e.jsxs(s.Pressable,{onPress:t.onPress,hitSlop:{top:6,bottom:6,left:0,right:0},style:({pressed:i})=>[l.actionButton,i&&l.actionButtonPressed],accessibilityRole:"button",accessibilityLabel:t.label,children:[t.icon&&(()=>{const i=t.icon;return e.jsx(i,{size:18,color:a.colors.accent,strokeWidth:1.5,style:{marginRight:4}})})(),e.jsx(d,{size:"sm",weight:"semibold",color:a.colors.accent,children:t.label})]})]})}function de(r){return s.StyleSheet.create({container:{flexDirection:"row",alignItems:"center",justifyContent:"space-between",paddingVertical:r.space(3)},actionButton:{flexDirection:"row",alignItems:"center",paddingVertical:r.space(2),paddingHorizontal:r.space(3),borderRadius:r.radius.md},actionButtonPressed:{backgroundColor:r.colors.accentSoft}})}v.__docgenInfo={description:"",methods:[],displayName:"SectionHeader",props:{title:{required:!0,tsType:{name:"string"},description:""},action:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  label: string;
  icon?: LucideIcon;
  onPress: () => void;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"icon",value:{name:"LucideIcon",required:!1}},{key:"onPress",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}}]}},description:""},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'highlight' | 'muted'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'highlight'"},{name:"literal",value:"'muted'"}]},description:"",defaultValue:{value:"'default'",computed:!1}}}};function K({children:r,style:t}){const{theme:o}=u();return e.jsx(s.Text,{style:[{fontSize:11,fontWeight:"600",color:o.colors.inkSoft,letterSpacing:.5},t],children:r})}K.__docgenInfo={description:"",methods:[],displayName:"Label",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},style:{required:!1,tsType:{name:"any"},description:""}}};function Q({children:r}){const{theme:t}=u();return r?e.jsx(s.Text,{style:{fontSize:13,color:t.colors.semantic.danger},children:r}):null}Q.__docgenInfo={description:"",methods:[],displayName:"ErrorText",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const Ve={title:"Components/Misc"},h={name:"Form Field",render:()=>{const[r,t]=j.useState("");return e.jsx(s.View,{style:{width:340},children:e.jsx(J,{label:"Crane operator",required:!0,helper:"Full legal name",children:e.jsx(ne,{label:"Name",value:r,onChangeText:t})})})}},g={name:"Button Group",render:()=>e.jsxs(s.View,{style:{gap:24,width:340},children:[e.jsx(P,{buttons:[{label:"Save",variant:"primary",onPress:()=>{}},{label:"Cancel",variant:"ghost",onPress:()=>{}}]}),e.jsx(P,{layout:"horizontal",buttons:[{label:"Back",variant:"secondary",onPress:()=>{}},{label:"Next",variant:"primary",onPress:()=>{}}]})]})},y={name:"FAB",render:()=>e.jsxs(s.View,{style:{flexDirection:"row",gap:24},children:[e.jsx(w,{onPress:()=>{},icon:X,a11yLabel:"Add"}),e.jsx(w,{onPress:()=>{},icon:te,iconRotation:0,a11yLabel:"Close"}),e.jsx(w,{onPress:()=>{},icon:$,a11yLabel:"Next"})]})},f={name:"Chip",render:()=>e.jsxs(s.View,{style:{flexDirection:"row",flexWrap:"wrap",gap:8},children:[e.jsx(p,{tint:V[700],bg:V[50],children:"Inspection"}),e.jsx(p,{tint:c.success,bg:c.successSoft,children:"Passed"}),e.jsx(p,{tint:c.warning,bg:c.warningSoft,children:"Pending"}),e.jsx(p,{tint:c.danger,bg:c.dangerSoft,children:"Failed"})]})},x={name:"Section Header",render:()=>e.jsxs(s.View,{style:{gap:20,width:360},children:[e.jsx(v,{title:"Recent inspections"}),e.jsx(v,{title:"Projects",variant:"highlight",action:{label:"See all",icon:$,onPress:()=>{}}}),e.jsx(v,{title:"Archived",variant:"muted"})]})},b={name:"Label & Error Text",render:()=>e.jsxs(s.View,{style:{gap:8,width:320},children:[e.jsx(K,{children:"Email address"}),e.jsx(Q,{children:"This field is required"})]})};var C,q,F;h.parameters={...h.parameters,docs:{...(C=h.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(F=(q=h.parameters)==null?void 0:q.docs)==null?void 0:F.source}}};var I,R,B;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(B=(R=g.parameters)==null?void 0:R.docs)==null?void 0:B.source}}};var z,L,N;y.parameters={...y.parameters,docs:{...(z=y.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'FAB',
  render: () => <View style={{
    flexDirection: 'row',
    gap: 24
  }}>
      <FabButton onPress={() => {}} icon={Plus} a11yLabel="Add" />
      <FabButton onPress={() => {}} icon={X} iconRotation={0} a11yLabel="Close" />
      <FabButton onPress={() => {}} icon={ChevronRight} a11yLabel="Next" />
    </View>
}`,...(N=(L=y.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var k,E,_;f.parameters={...f.parameters,docs:{...(k=f.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(_=(E=f.parameters)==null?void 0:E.docs)==null?void 0:_.source}}};var A,H,G;x.parameters={...x.parameters,docs:{...(A=x.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(G=(H=x.parameters)==null?void 0:H.docs)==null?void 0:G.source}}};var D,W,O;b.parameters={...b.parameters,docs:{...(D=b.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Label & Error Text',
  render: () => <View style={{
    gap: 8,
    width: 320
  }}>
      <Label>Email address</Label>
      <ErrorText>This field is required</ErrorText>
    </View>
}`,...(O=(W=b.parameters)==null?void 0:W.docs)==null?void 0:O.source}}};const Ce=["FormFieldStory","ButtonGroupStory","Fab","Chips","SectionHeaders","LabelsAndErrors"];export{g as ButtonGroupStory,f as Chips,y as Fab,h as FormFieldStory,b as LabelsAndErrors,x as SectionHeaders,Ce as __namedExportsOrder,Ve as default};
