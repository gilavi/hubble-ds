import{j as l}from"./jsx-runtime-BjG_zV1W.js";import{r as n}from"./index-CK_08F47.js";import{u as J,d as i}from"./theme-DstihSO3.js";import{C as Q}from"./circle-check-tssXoyK1.js";import{A as b}from"./A11yText-uqOM_MyV.js";import{h as U}from"./haptics-Y9X1Ki18.js";import{b as T}from"./accessibility-Df36XjAw.js";import"./client-CICyZnRS.js";import"./design-tokens-CbirmslE.js";import"./createLucideIcon-BqTg3DDj.js";function c(e){const{options:t,label:y,presentation:m="chips",indicator:_="radio",error:f,style:q,testID:G}=e,{theme:d}=J(),o=n.useMemo(()=>X(d),[d]),a=e.mode==="multi",K=a?e.values:e.value!=null?[e.value]:[],V=r=>K.includes(r),k=r=>{if(!r.disabled)if(U.light(),a){const s=e.values.includes(r.value)?e.values.filter(u=>u!==r.value):[...e.values,r.value];e.onValuesChange(s)}else e.onChange(r.value)},j=a?"checkbox":"radio";return l.jsxs(i.View,{style:[o.group,q],testID:G,children:[y?l.jsx(b,{style:o.groupLabel,children:y}):null,m!=="chips"?l.jsx(i.View,{style:m==="list"?o.listContainer:o.rowList,children:t.map(r=>{const s=V(r.value),u=r.icon,S=m==="list";return l.jsxs(i.Pressable,{style:[S?o.listRow:o.row,s&&(S?o.listRowActive:o.rowActive),f&&(S?o.listRowError:o.rowError),r.disabled&&o.disabled],onPress:()=>k(r),disabled:r.disabled,...T(r.label??r.value,void 0,j),children:[r.leading??(u?l.jsx(u,{size:20,color:s?d.colors.ink:d.colors.inkSoft,strokeWidth:1.8}):null),l.jsxs(i.View,{style:o.rowTextWrap,children:[l.jsx(b,{style:[o.rowText,s&&o.rowTextActive],children:r.label??r.value}),r.subtitle?l.jsx(b,{style:o.rowSubtitle,children:r.subtitle}):null]}),_==="check"?s?l.jsx(Q,{size:22,color:d.colors.ink,strokeWidth:1.5}):null:l.jsx(i.View,{style:[a?o.checkbox:o.radio,s&&(a?o.checkboxActive:o.radioActive)],children:s&&(a?l.jsx(i.View,{style:o.checkboxInner}):l.jsx(i.View,{style:o.radioDot}))})]},r.value)})}):l.jsx(i.View,{style:o.chipsRow,children:t.map(r=>{const s=V(r.value);return l.jsx(i.Pressable,{style:[o.chip,s&&o.chipActive,f&&o.chipError,r.disabled&&o.disabled],onPress:()=>k(r),disabled:r.disabled,...T(r.label??r.value,void 0,j),children:l.jsxs(b,{style:[o.chipText,s&&o.chipTextActive],children:[a&&s?"✓ ":"",r.label??r.value]})},r.value)})})]})}function X(e){return i.StyleSheet.create({group:{gap:8},groupLabel:{fontSize:12,fontWeight:"600",color:e.colors.inkSoft},disabled:{opacity:.4},rowList:{gap:8},row:{flexDirection:"row",alignItems:"center",justifyContent:"space-between",gap:10,paddingHorizontal:14,paddingVertical:14,borderRadius:12,borderWidth:1.5,borderColor:e.colors.hairline,backgroundColor:e.colors.card},rowActive:{borderColor:e.colors.ink,backgroundColor:e.colors.subtleSurface},rowError:{borderColor:e.colors.semantic.danger},listContainer:{},listRow:{flexDirection:"row",alignItems:"center",justifyContent:"space-between",gap:14,paddingHorizontal:20,paddingVertical:14,borderBottomWidth:i.StyleSheet.hairlineWidth,borderBottomColor:e.colors.hairline},listRowActive:{backgroundColor:e.colors.subtleSurface},listRowError:{borderBottomColor:e.colors.semantic.danger},rowTextWrap:{flex:1,gap:2},rowText:{fontSize:15,color:e.colors.ink,fontWeight:"500"},rowTextActive:{color:e.colors.ink,fontWeight:"700"},rowSubtitle:{fontSize:12,color:e.colors.inkFaint},radio:{width:22,height:22,borderRadius:11,borderWidth:2,borderColor:e.colors.hairline,alignItems:"center",justifyContent:"center"},radioActive:{borderColor:e.colors.ink},radioDot:{width:10,height:10,borderRadius:5,backgroundColor:e.colors.ink},checkbox:{width:22,height:22,borderRadius:6,borderWidth:2,borderColor:e.colors.hairline,alignItems:"center",justifyContent:"center"},checkboxActive:{borderColor:e.colors.ink,backgroundColor:e.colors.ink},checkboxInner:{width:9,height:9,borderRadius:2,backgroundColor:e.colors.white},chipsRow:{flexDirection:"row",gap:8,flexWrap:"wrap"},chip:{paddingHorizontal:16,paddingVertical:11,borderRadius:12,borderWidth:1.5,borderColor:e.colors.hairline,backgroundColor:e.colors.card},chipActive:{borderColor:e.colors.ink,backgroundColor:e.colors.subtleSurface},chipError:{borderColor:e.colors.semantic.danger},chipText:{fontSize:14,color:e.colors.inkSoft},chipTextActive:{color:e.colors.ink,fontWeight:"700"}})}c.__docgenInfo={description:"",methods:[],displayName:"Selector"};const ne={title:"Components/Selector"},Y=[{value:"good",label:"ვარგისია"},{value:"deficient",label:"ხარვეზი"},{value:"unusable",label:"გამოუსადეგარია"}],h={name:"Single · chips",render:()=>{const[e,t]=n.useState("good");return l.jsx(i.View,{style:{width:380},children:l.jsx(c,{label:"Condition",options:Y,value:e,onChange:t})})}},g={name:"Single · rows",render:()=>{const[e,t]=n.useState(null);return l.jsx(i.View,{style:{width:380},children:l.jsx(c,{label:"Equipment type",presentation:"rows",value:e,onChange:t,options:[{value:"crane",label:"Tower crane",subtitle:"Fixed / climbing"},{value:"excavator",label:"Excavator"},{value:"forklift",label:"Forklift"}]})})}},v={name:"Multi · chips",render:()=>{const[e,t]=n.useState(["steel"]);return l.jsx(i.View,{style:{width:380},children:l.jsx(c,{mode:"multi",label:"Sling material",options:[{value:"steel",label:"Steel wire"},{value:"chain",label:"Chain"},{value:"synthetic",label:"Synthetic web"},{value:"rope",label:"Fibre rope"}],values:e,onValuesChange:t})})}},C=({c:e})=>l.jsx(i.View,{style:{width:36,height:36,borderRadius:18,backgroundColor:e}}),w=({c:e})=>l.jsx(i.View,{style:{width:10,height:10,borderRadius:5,backgroundColor:e}}),p={name:"Type cards (dot + check)",render:()=>{const[e,t]=n.useState("severe");return l.jsx(i.View,{style:{width:420},children:l.jsx(c,{presentation:"rows",indicator:"check",value:e,onChange:t,options:[{value:"minor",label:"მსუბუქი დაშავება",leading:l.jsx(w,{c:"#F59E0B"})},{value:"severe",label:"მძიმე უბედური შემთხვევა",leading:l.jsx(w,{c:"#FE7A43"})},{value:"fatal",label:"ფატალური შემთხვევა",leading:l.jsx(w,{c:"#EF4444"})},{value:"nearmiss",label:"კინაღამ შემთხვევა",leading:l.jsx(w,{c:"#3B82F6"})}]})})}},x={name:"List · with leading + subtitle",render:()=>{const[e,t]=n.useState("p2");return l.jsx(i.View,{style:{width:420},children:l.jsx(c,{presentation:"list",value:e,onChange:t,options:[{value:"p1",label:"Hubble Construction",subtitle:"Tbilisi, Georgia",leading:l.jsx(C,{c:"#E6FF4D"})},{value:"p2",label:"Site B — Tower crane",subtitle:"Batumi",leading:l.jsx(C,{c:"#FE7A43"})},{value:"p3",label:"Warehouse 4",subtitle:"Kutaisi",leading:l.jsx(C,{c:"#3B82F6"})}]})})}};var E,F,A;h.parameters={...h.parameters,docs:{...(E=h.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Single · chips',
  render: () => {
    const [v, setV] = useState<string | null>('good');
    return <View style={{
      width: 380
    }}>
        <Selector label="Condition" options={CONDITION} value={v} onChange={setV} />
      </View>;
  }
}`,...(A=(F=h.parameters)==null?void 0:F.docs)==null?void 0:A.source}}};var R,D,W;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(W=(D=g.parameters)==null?void 0:D.docs)==null?void 0:W.source}}};var B,I,L;v.parameters={...v.parameters,docs:{...(B=v.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(L=(I=v.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var z,M,H;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(H=(M=p.parameters)==null?void 0:M.docs)==null?void 0:H.source}}};var N,O,P;x.parameters={...x.parameters,docs:{...(N=x.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(P=(O=x.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};const ce=["SingleChips","SingleRows","MultiChips","TypeCards","ListWithLeading"];export{x as ListWithLeading,v as MultiChips,h as SingleChips,g as SingleRows,p as TypeCards,ce as __namedExportsOrder,ne as default};
