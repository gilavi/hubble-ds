import{j as i}from"./jsx-runtime-BjG_zV1W.js";import{r as n}from"./index-CK_08F47.js";import{u as N,d as o}from"./theme-DstihSO3.js";import{A as b}from"./A11yText-uqOM_MyV.js";import{h as O}from"./haptics-Y9X1Ki18.js";import{b as V}from"./accessibility-Df36XjAw.js";import"./client-CICyZnRS.js";import"./design-tokens-CbirmslE.js";function c(e){const{options:s,label:S,presentation:p="chips",style:B,testID:M}=e,{theme:d}=N(),t=n.useMemo(()=>P(d),[d]),a=e.mode==="multi",H=a?e.values:e.value!=null?[e.value]:[],m=l=>H.includes(l),C=l=>{if(!l.disabled)if(O.light(),a){const r=e.values.includes(l.value)?e.values.filter(u=>u!==l.value):[...e.values,l.value];e.onValuesChange(r)}else e.onChange(l.value)},f=a?"checkbox":"radio";return i.jsxs(o.View,{style:[t.group,B],testID:M,children:[S?i.jsx(b,{style:t.groupLabel,children:S}):null,p!=="chips"?i.jsx(o.View,{style:p==="list"?t.listContainer:t.rowList,children:s.map(l=>{const r=m(l.value),u=l.icon,y=p==="list";return i.jsxs(o.Pressable,{style:[y?t.listRow:t.row,r&&(y?t.listRowActive:t.rowActive),l.disabled&&t.disabled],onPress:()=>C(l),disabled:l.disabled,...V(l.label??l.value,void 0,f),children:[l.leading??(u?i.jsx(u,{size:20,color:r?d.colors.ink:d.colors.inkSoft,strokeWidth:1.8}):null),i.jsxs(o.View,{style:t.rowTextWrap,children:[i.jsx(b,{style:[t.rowText,r&&t.rowTextActive],children:l.label??l.value}),l.subtitle?i.jsx(b,{style:t.rowSubtitle,children:l.subtitle}):null]}),i.jsx(o.View,{style:[a?t.checkbox:t.radio,r&&(a?t.checkboxActive:t.radioActive)],children:r&&(a?i.jsx(o.View,{style:t.checkboxInner}):i.jsx(o.View,{style:t.radioDot}))})]},l.value)})}):i.jsx(o.View,{style:t.chipsRow,children:s.map(l=>{const r=m(l.value);return i.jsx(o.Pressable,{style:[t.chip,r&&t.chipActive,l.disabled&&t.disabled],onPress:()=>C(l),disabled:l.disabled,...V(l.label??l.value,void 0,f),children:i.jsxs(b,{style:[t.chipText,r&&t.chipTextActive],children:[a&&r?"✓ ":"",l.label??l.value]})},l.value)})})]})}function P(e){return o.StyleSheet.create({group:{gap:8},groupLabel:{fontSize:12,fontWeight:"600",color:e.colors.inkSoft},disabled:{opacity:.4},rowList:{gap:8},row:{flexDirection:"row",alignItems:"center",justifyContent:"space-between",gap:10,paddingHorizontal:14,paddingVertical:14,borderRadius:12,borderWidth:1.5,borderColor:e.colors.hairline,backgroundColor:e.colors.card},rowActive:{borderColor:e.colors.ink,backgroundColor:e.colors.subtleSurface},listContainer:{},listRow:{flexDirection:"row",alignItems:"center",justifyContent:"space-between",gap:14,paddingHorizontal:20,paddingVertical:14,borderBottomWidth:o.StyleSheet.hairlineWidth,borderBottomColor:e.colors.hairline},listRowActive:{backgroundColor:e.colors.subtleSurface},rowTextWrap:{flex:1,gap:2},rowText:{fontSize:15,color:e.colors.ink,fontWeight:"500"},rowTextActive:{color:e.colors.ink,fontWeight:"700"},rowSubtitle:{fontSize:12,color:e.colors.inkFaint},radio:{width:22,height:22,borderRadius:11,borderWidth:2,borderColor:e.colors.hairline,alignItems:"center",justifyContent:"center"},radioActive:{borderColor:e.colors.ink},radioDot:{width:10,height:10,borderRadius:5,backgroundColor:e.colors.ink},checkbox:{width:22,height:22,borderRadius:6,borderWidth:2,borderColor:e.colors.hairline,alignItems:"center",justifyContent:"center"},checkboxActive:{borderColor:e.colors.ink,backgroundColor:e.colors.ink},checkboxInner:{width:9,height:9,borderRadius:2,backgroundColor:e.colors.white},chipsRow:{flexDirection:"row",gap:8,flexWrap:"wrap"},chip:{paddingHorizontal:16,paddingVertical:11,borderRadius:12,borderWidth:1.5,borderColor:e.colors.hairline,backgroundColor:e.colors.card},chipActive:{borderColor:e.colors.ink,backgroundColor:e.colors.subtleSurface},chipText:{fontSize:14,color:e.colors.inkSoft},chipTextActive:{color:e.colors.ink,fontWeight:"700"}})}c.__docgenInfo={description:"",methods:[],displayName:"Selector"};const Z={title:"Components/Selector"},_=[{value:"good",label:"ვარგისია"},{value:"deficient",label:"ხარვეზი"},{value:"unusable",label:"გამოუსადეგარია"}],h={name:"Single · chips",render:()=>{const[e,s]=n.useState("good");return i.jsx(o.View,{style:{width:380},children:i.jsx(c,{label:"Condition",options:_,value:e,onChange:s})})}},g={name:"Single · rows",render:()=>{const[e,s]=n.useState(null);return i.jsx(o.View,{style:{width:380},children:i.jsx(c,{label:"Equipment type",presentation:"rows",value:e,onChange:s,options:[{value:"crane",label:"Tower crane",subtitle:"Fixed / climbing"},{value:"excavator",label:"Excavator"},{value:"forklift",label:"Forklift"}]})})}},v={name:"Multi · chips",render:()=>{const[e,s]=n.useState(["steel"]);return i.jsx(o.View,{style:{width:380},children:i.jsx(c,{mode:"multi",label:"Sling material",options:[{value:"steel",label:"Steel wire"},{value:"chain",label:"Chain"},{value:"synthetic",label:"Synthetic web"},{value:"rope",label:"Fibre rope"}],values:e,onValuesChange:s})})}},x=({c:e})=>i.jsx(o.View,{style:{width:36,height:36,borderRadius:18,backgroundColor:e}}),w={name:"List · with leading + subtitle",render:()=>{const[e,s]=n.useState("p2");return i.jsx(o.View,{style:{width:420},children:i.jsx(c,{presentation:"list",value:e,onChange:s,options:[{value:"p1",label:"Hubble Construction",subtitle:"Tbilisi, Georgia",leading:i.jsx(x,{c:"#E6FF4D"})},{value:"p2",label:"Site B — Tower crane",subtitle:"Batumi",leading:i.jsx(x,{c:"#FE7A43"})},{value:"p3",label:"Warehouse 4",subtitle:"Kutaisi",leading:i.jsx(x,{c:"#3B82F6"})}]})})}};var k,j,T;h.parameters={...h.parameters,docs:{...(k=h.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Single · chips',
  render: () => {
    const [v, setV] = useState<string | null>('good');
    return <View style={{
      width: 380
    }}>
        <Selector label="Condition" options={CONDITION} value={v} onChange={setV} />
      </View>;
  }
}`,...(T=(j=h.parameters)==null?void 0:j.docs)==null?void 0:T.source}}};var A,W,R;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(R=(W=g.parameters)==null?void 0:W.docs)==null?void 0:R.source}}};var F,D,I;v.parameters={...v.parameters,docs:{...(F=v.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(I=(D=v.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var E,L,z;w.parameters={...w.parameters,docs:{...(E=w.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(z=(L=w.parameters)==null?void 0:L.docs)==null?void 0:z.source}}};const $=["SingleChips","SingleRows","MultiChips","ListWithLeading"];export{w as ListWithLeading,v as MultiChips,h as SingleChips,g as SingleRows,$ as __namedExportsOrder,Z as default};
