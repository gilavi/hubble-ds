import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{r as x}from"./index-CK_08F47.js";import{d as s,u as se}from"./theme-DstihSO3.js";import{A as D}from"./A11yText-BOyqg4a6.js";import{h as ne}from"./haptics-Y9X1Ki18.js";import{m as b,A as q}from"./index-CvnRCj2y.js";import{C as ce}from"./circle-check-tssXoyK1.js";import{u as re}from"./usePressBounce-Bbweh8wr.js";import{u as ue}from"./useSelectionPop-CJUS-tB7.js";import{u as oe,b as te}from"./accessibility-CE7tV9pt.js";import"./client-CICyZnRS.js";import"./design-tokens-CbirmslE.js";import"./createLucideIcon-BqTg3DDj.js";const ie=q.createAnimatedComponent(s.Pressable),de={code:"function SelectorOptionTsx1(){const{scale,bg,border}=this.__closure;return{transform:[{scale:scale.value}],backgroundColor:bg.value,borderColor:border.value};}"};function le({opt:e,active:o,error:n,isMulti:p,onPress:d,styles:g,theme:a,a11yRole:l}){const{scale:i,bounce:c}=re(.94),{reduceMotion:u}=oe(),S=b.useSharedValue(o?a.colors.subtleSurface:a.colors.card),m=b.useSharedValue(n?a.colors.semantic.danger:o?a.colors.ink:a.colors.hairline);x.useEffect(()=>{const h=o?a.colors.subtleSurface:a.colors.card,t=n?a.colors.semantic.danger:o?a.colors.ink:a.colors.hairline;u?(S.value=h,m.value=t):(S.value=b.withTiming(h,{duration:a.motion.fast}),m.value=b.withTiming(t,{duration:a.motion.fast}))},[o,n,u,a,S,m]);const f=b.useAnimatedStyle(function({_worklet_8429586347938_init_data:t,scale:v,bg:y,border:C}){const w=()=>({transform:[{scale:v.value}],backgroundColor:y.value,borderColor:C.value});return w.__closure={scale:v,bg:y,border:C},w.__workletHash=8429586347938,w.__initData=t,w}({_worklet_8429586347938_init_data:de,scale:i,bg:S,border:m}));return r.jsx(ie,{onPress:()=>{c(),d()},disabled:e.disabled,style:[g.chip,e.disabled&&g.disabled,f],...te(e.label??e.value,void 0,l),children:r.jsxs(D,{style:[g.chipText,o&&g.chipTextActive],children:[p&&o?"✓ ":"",e.label??e.value]})})}const be={code:"function SelectorOptionTsx2(){const{scale,bg,isList,border}=this.__closure;const base={transform:[{scale:scale.value}],backgroundColor:bg.value};return isList?base:{...base,borderColor:border.value};}"};function ae({opt:e,active:o,error:n,isMulti:p,isList:d,indicator:g,onPress:a,styles:l,theme:i,a11yRole:c}){const u=e.icon,{scale:S,bounce:m}=re(.97),{popStyle:f}=ue(o),{reduceMotion:h}=oe(),t=b.useSharedValue(o?i.colors.subtleSurface:d?"transparent":i.colors.card),v=b.useSharedValue(n?i.colors.semantic.danger:o?i.colors.ink:i.colors.hairline);x.useEffect(()=>{const C=o?i.colors.subtleSurface:d?"transparent":i.colors.card,w=n?i.colors.semantic.danger:o?i.colors.ink:i.colors.hairline;h?(t.value=C,v.value=w):(t.value=b.withTiming(C,{duration:i.motion.fast}),v.value=b.withTiming(w,{duration:i.motion.fast}))},[o,n,d,h,i,t,v]);const y=b.useAnimatedStyle(function({_worklet_6727887404598_init_data:w,scale:W,bg:O,isList:I,border:B}){const k=function(){const P={transform:[{scale:W.value}],backgroundColor:O.value};return I?P:{...P,borderColor:B.value}};return k.__closure={scale:W,bg:O,isList:I,border:B},k.__workletHash=6727887404598,k.__initData=w,k}({_worklet_6727887404598_init_data:be,scale:S,bg:t,isList:d,border:v}));return r.jsxs(ie,{onPress:()=>{m(),a()},disabled:e.disabled,style:[d?l.listRow:l.row,d&&n&&l.listRowError,e.disabled&&l.disabled,y],...te(e.label??e.value,void 0,c),children:[e.leading??(u?r.jsx(u,{size:20,color:o?i.colors.ink:i.colors.inkSoft,strokeWidth:1.8}):null),r.jsxs(s.View,{style:l.rowTextWrap,children:[r.jsx(D,{style:[l.rowText,o&&l.rowTextActive],children:e.label??e.value}),e.subtitle?r.jsx(D,{style:l.rowSubtitle,children:e.subtitle}):null]}),g==="check"?o?r.jsx(q.View,{style:f,children:r.jsx(ce,{size:22,color:i.colors.ink,strokeWidth:1.5})}):null:r.jsx(s.View,{style:[p?l.checkbox:l.radio,o&&(p?l.checkboxActive:l.radioActive)],children:r.jsx(q.View,{style:[p?l.checkboxInner:l.radioDot,f]})})]})}le.__docgenInfo={description:"",methods:[],displayName:"SelectorOptionChip",props:{opt:{required:!0,tsType:{name:"SelectorOption"},description:""},active:{required:!0,tsType:{name:"boolean"},description:""},error:{required:!1,tsType:{name:"boolean"},description:""},isMulti:{required:!0,tsType:{name:"boolean"},description:""},onPress:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},styles:{required:!0,tsType:{name:"ReturnType",elements:[{name:"getStyles"}],raw:"ReturnType<typeof getStyles>"},description:""},theme:{required:!0,tsType:{name:"lightTheme"},description:""},a11yRole:{required:!0,tsType:{name:"union",raw:"'radio' | 'checkbox'",elements:[{name:"literal",value:"'radio'"},{name:"literal",value:"'checkbox'"}]},description:""}}};ae.__docgenInfo={description:"",methods:[],displayName:"SelectorOptionRow",props:{opt:{required:!0,tsType:{name:"SelectorOption"},description:""},active:{required:!0,tsType:{name:"boolean"},description:""},error:{required:!1,tsType:{name:"boolean"},description:""},isMulti:{required:!0,tsType:{name:"boolean"},description:""},onPress:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},styles:{required:!0,tsType:{name:"ReturnType",elements:[{name:"getStyles"}],raw:"ReturnType<typeof getStyles>"},description:""},theme:{required:!0,tsType:{name:"lightTheme"},description:""},a11yRole:{required:!0,tsType:{name:"union",raw:"'radio' | 'checkbox'",elements:[{name:"literal",value:"'radio'"},{name:"literal",value:"'checkbox'"}]},description:""},isList:{required:!0,tsType:{name:"boolean"},description:""},indicator:{required:!0,tsType:{name:"union",raw:"'radio' | 'check'",elements:[{name:"literal",value:"'radio'"},{name:"literal",value:"'check'"}]},description:""}}};function T(e){const{options:o,label:n,presentation:p="chips",indicator:d="radio",error:g,style:a,testID:l}=e,{theme:i}=se(),c=x.useMemo(()=>pe(i),[i]),u=e.mode==="multi",S=u?e.values:e.value!=null?[e.value]:[],m=t=>S.includes(t),f=t=>{if(!t.disabled)if(ne.light(),u){const v=e.values.includes(t.value)?e.values.filter(y=>y!==t.value):[...e.values,t.value];e.onValuesChange(v)}else e.onChange(t.value)},h=u?"checkbox":"radio";return r.jsxs(s.View,{style:[c.group,a],testID:l,children:[n?r.jsx(D,{style:c.groupLabel,children:n}):null,p!=="chips"?r.jsx(s.View,{style:p==="list"?c.listContainer:c.rowList,children:o.map(t=>r.jsx(ae,{opt:t,active:m(t.value),error:g,isMulti:u,isList:p==="list",indicator:d,onPress:()=>f(t),styles:c,theme:i,a11yRole:h},t.value))}):r.jsx(s.View,{style:c.chipsRow,children:o.map(t=>r.jsx(le,{opt:t,active:m(t.value),error:g,isMulti:u,onPress:()=>f(t),styles:c,theme:i,a11yRole:h},t.value))})]})}function pe(e){return s.StyleSheet.create({group:{gap:8},groupLabel:{fontSize:12,fontWeight:"600",color:e.colors.inkSoft},disabled:{opacity:.4},rowList:{gap:8},row:{flexDirection:"row",alignItems:"center",justifyContent:"space-between",gap:10,paddingHorizontal:14,paddingVertical:14,borderRadius:12,borderWidth:1.5,borderColor:e.colors.hairline,backgroundColor:e.colors.card},listContainer:{},listRow:{flexDirection:"row",alignItems:"center",justifyContent:"space-between",gap:14,paddingHorizontal:20,paddingVertical:14,borderBottomWidth:s.StyleSheet.hairlineWidth,borderBottomColor:e.colors.hairline},listRowError:{borderBottomColor:e.colors.semantic.danger},rowTextWrap:{flex:1,gap:2},rowText:{fontSize:15,color:e.colors.ink,fontWeight:"500"},rowTextActive:{color:e.colors.ink,fontWeight:"700"},rowSubtitle:{fontSize:12,color:e.colors.inkFaint},radio:{width:22,height:22,borderRadius:11,borderWidth:2,borderColor:e.colors.hairline,alignItems:"center",justifyContent:"center"},radioActive:{borderColor:e.colors.ink},radioDot:{width:10,height:10,borderRadius:5,backgroundColor:e.colors.ink},checkbox:{width:22,height:22,borderRadius:6,borderWidth:2,borderColor:e.colors.hairline,alignItems:"center",justifyContent:"center"},checkboxActive:{borderColor:e.colors.ink,backgroundColor:e.colors.ink},checkboxInner:{width:9,height:9,borderRadius:2,backgroundColor:e.colors.white},chipsRow:{flexDirection:"row",gap:8,flexWrap:"wrap"},chip:{paddingHorizontal:16,paddingVertical:11,borderRadius:12,borderWidth:1.5,borderColor:e.colors.hairline,backgroundColor:e.colors.card},chipText:{fontSize:14,color:e.colors.inkSoft},chipTextActive:{color:e.colors.ink,fontWeight:"700"}})}T.__docgenInfo={description:"",methods:[],displayName:"Selector"};const _e={title:"Components/Selector"},ge=[{value:"good",label:"ვარგისია"},{value:"deficient",label:"ხარვეზი"},{value:"unusable",label:"გამოუსადეგარია"}],V={name:"Single · chips",render:()=>{const[e,o]=x.useState("good");return r.jsx(s.View,{style:{width:380},children:r.jsx(T,{label:"Condition",options:ge,value:e,onChange:o})})}},j={name:"Single · rows",render:()=>{const[e,o]=x.useState(null);return r.jsx(s.View,{style:{width:380},children:r.jsx(T,{label:"Equipment type",presentation:"rows",value:e,onChange:o,options:[{value:"crane",label:"Tower crane",subtitle:"Fixed / climbing"},{value:"excavator",label:"Excavator"},{value:"forklift",label:"Forklift"}]})})}},_={name:"Multi · chips",render:()=>{const[e,o]=x.useState(["steel"]);return r.jsx(s.View,{style:{width:380},children:r.jsx(T,{mode:"multi",label:"Sling material",options:[{value:"steel",label:"Steel wire"},{value:"chain",label:"Chain"},{value:"synthetic",label:"Synthetic web"},{value:"rope",label:"Fibre rope"}],values:e,onValuesChange:o})})}},E=({c:e})=>r.jsx(s.View,{style:{width:36,height:36,borderRadius:18,backgroundColor:e}}),R=({c:e})=>r.jsx(s.View,{style:{width:10,height:10,borderRadius:5,backgroundColor:e}}),F={name:"Type cards (dot + check)",render:()=>{const[e,o]=x.useState("severe");return r.jsx(s.View,{style:{width:420},children:r.jsx(T,{presentation:"rows",indicator:"check",value:e,onChange:o,options:[{value:"minor",label:"მსუბუქი დაშავება",leading:r.jsx(R,{c:"#F59E0B"})},{value:"severe",label:"მძიმე უბედური შემთხვევა",leading:r.jsx(R,{c:"#FE7A43"})},{value:"fatal",label:"ფატალური შემთხვევა",leading:r.jsx(R,{c:"#EF4444"})},{value:"nearmiss",label:"კინაღამ შემთხვევა",leading:r.jsx(R,{c:"#3B82F6"})}]})})}},A={name:"List · with leading + subtitle",render:()=>{const[e,o]=x.useState("p2");return r.jsx(s.View,{style:{width:420},children:r.jsx(T,{presentation:"list",value:e,onChange:o,options:[{value:"p1",label:"Hubble Construction",subtitle:"Tbilisi, Georgia",leading:r.jsx(E,{c:"#E6FF4D"})},{value:"p2",label:"Site B — Tower crane",subtitle:"Batumi",leading:r.jsx(E,{c:"#FE7A43"})},{value:"p3",label:"Warehouse 4",subtitle:"Kutaisi",leading:r.jsx(E,{c:"#3B82F6"})}]})})}};var L,z,M;V.parameters={...V.parameters,docs:{...(L=V.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'Single · chips',
  render: () => {
    const [v, setV] = useState<string | null>('good');
    return <View style={{
      width: 380
    }}>
        <Selector label="Condition" options={CONDITION} value={v} onChange={setV} />
      </View>;
  }
}`,...(M=(z=V.parameters)==null?void 0:z.docs)==null?void 0:M.source}}};var H,N,G;j.parameters={...j.parameters,docs:{...(H=j.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'Single · rows',
  render: () => {
    const [v, setV] = useState<string | null>(null);
    return <View style={{
      width: 380
    }}>
        <Selector label="Equipment type" presentation="rows" value={v} onChange={setV} options={[{
        value: 'crane',
        label: 'Tower crane',
        subtitle: 'Fixed / climbing'
      }, {
        value: 'excavator',
        label: 'Excavator'
      }, {
        value: 'forklift',
        label: 'Forklift'
      }]} />
      </View>;
  }
}`,...(G=(N=j.parameters)==null?void 0:N.docs)==null?void 0:G.source}}};var K,$,J;_.parameters={..._.parameters,docs:{...(K=_.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: 'Multi · chips',
  render: () => {
    const [vals, setVals] = useState<string[]>(['steel']);
    return <View style={{
      width: 380
    }}>
        <Selector mode="multi" label="Sling material" options={[{
        value: 'steel',
        label: 'Steel wire'
      }, {
        value: 'chain',
        label: 'Chain'
      }, {
        value: 'synthetic',
        label: 'Synthetic web'
      }, {
        value: 'rope',
        label: 'Fibre rope'
      }]} values={vals} onValuesChange={setVals} />
      </View>;
  }
}`,...(J=($=_.parameters)==null?void 0:$.docs)==null?void 0:J.source}}};var Q,U,X;F.parameters={...F.parameters,docs:{...(Q=F.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: 'Type cards (dot + check)',
  render: () => {
    const [v, setV] = useState<string | null>('severe');
    return <View style={{
      width: 420
    }}>
        <Selector presentation="rows" indicator="check" value={v} onChange={setV} options={[{
        value: 'minor',
        label: 'მსუბუქი დაშავება',
        leading: <SmallDot c="#F59E0B" />
      }, {
        value: 'severe',
        label: 'მძიმე უბედური შემთხვევა',
        leading: <SmallDot c="#FE7A43" />
      }, {
        value: 'fatal',
        label: 'ფატალური შემთხვევა',
        leading: <SmallDot c="#EF4444" />
      }, {
        value: 'nearmiss',
        label: 'კინაღამ შემთხვევა',
        leading: <SmallDot c="#3B82F6" />
      }]} />
      </View>;
  }
}`,...(X=(U=F.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,Z,ee;A.parameters={...A.parameters,docs:{...(Y=A.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: 'List · with leading + subtitle',
  render: () => {
    const [v, setV] = useState<string | null>('p2');
    return <View style={{
      width: 420
    }}>
        <Selector presentation="list" value={v} onChange={setV} options={[{
        value: 'p1',
        label: 'Hubble Construction',
        subtitle: 'Tbilisi, Georgia',
        leading: <Dot c="#E6FF4D" />
      }, {
        value: 'p2',
        label: 'Site B — Tower crane',
        subtitle: 'Batumi',
        leading: <Dot c="#FE7A43" />
      }, {
        value: 'p3',
        label: 'Warehouse 4',
        subtitle: 'Kutaisi',
        leading: <Dot c="#3B82F6" />
      }]} />
      </View>;
  }
}`,...(ee=(Z=A.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};const Re=["SingleChips","SingleRows","MultiChips","TypeCards","ListWithLeading"];export{A as ListWithLeading,_ as MultiChips,V as SingleChips,j as SingleRows,F as TypeCards,Re as __namedExportsOrder,_e as default};
