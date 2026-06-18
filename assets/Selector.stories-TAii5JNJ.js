import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{r as v}from"./index-CK_08F47.js";import{u as E,d as i}from"./theme-DstihSO3.js";import{A as d}from"./A11yText-uqOM_MyV.js";import{h as F}from"./haptics-Y9X1Ki18.js";import{b as f}from"./accessibility-Df36XjAw.js";import"./client-CICyZnRS.js";import"./design-tokens-CbirmslE.js";function g(e){const{options:t,label:w,presentation:R="chips",style:W,testID:z}=e,{theme:n}=E(),o=v.useMemo(()=>M(n),[n]),a=e.mode==="multi",D=a?e.values:e.value!=null?[e.value]:[],x=l=>D.includes(l),p=l=>{if(!l.disabled)if(F.light(),a){const s=e.values.includes(l.value)?e.values.filter(c=>c!==l.value):[...e.values,l.value];e.onValuesChange(s)}else e.onChange(l.value)},S=a?"checkbox":"radio";return r.jsxs(i.View,{style:[o.group,W],testID:z,children:[w?r.jsx(d,{style:o.groupLabel,children:w}):null,R==="rows"?r.jsx(i.View,{style:o.rowList,children:t.map(l=>{const s=x(l.value),c=l.icon;return r.jsxs(i.Pressable,{style:[o.row,s&&o.rowActive,l.disabled&&o.disabled],onPress:()=>p(l),disabled:l.disabled,...f(l.label??l.value,void 0,S),children:[c?r.jsx(c,{size:20,color:s?n.colors.ink:n.colors.inkSoft,strokeWidth:1.8}):null,r.jsxs(i.View,{style:o.rowTextWrap,children:[r.jsx(d,{style:[o.rowText,s&&o.rowTextActive],children:l.label??l.value}),l.subtitle?r.jsx(d,{style:o.rowSubtitle,children:l.subtitle}):null]}),r.jsx(i.View,{style:[a?o.checkbox:o.radio,s&&(a?o.checkboxActive:o.radioActive)],children:s&&(a?r.jsx(i.View,{style:o.checkboxInner}):r.jsx(i.View,{style:o.radioDot}))})]},l.value)})}):r.jsx(i.View,{style:o.chipsRow,children:t.map(l=>{const s=x(l.value);return r.jsx(i.Pressable,{style:[o.chip,s&&o.chipActive,l.disabled&&o.disabled],onPress:()=>p(l),disabled:l.disabled,...f(l.label??l.value,void 0,S),children:r.jsxs(d,{style:[o.chipText,s&&o.chipTextActive],children:[a&&s?"✓ ":"",l.label??l.value]})},l.value)})})]})}function M(e){return i.StyleSheet.create({group:{gap:8},groupLabel:{fontSize:12,fontWeight:"600",color:e.colors.inkSoft},disabled:{opacity:.4},rowList:{gap:8},row:{flexDirection:"row",alignItems:"center",justifyContent:"space-between",gap:10,paddingHorizontal:14,paddingVertical:14,borderRadius:12,borderWidth:1.5,borderColor:e.colors.hairline,backgroundColor:e.colors.card},rowActive:{borderColor:e.colors.ink,backgroundColor:e.colors.subtleSurface},rowTextWrap:{flex:1,gap:2},rowText:{fontSize:15,color:e.colors.ink,fontWeight:"500"},rowTextActive:{color:e.colors.ink,fontWeight:"700"},rowSubtitle:{fontSize:12,color:e.colors.inkFaint},radio:{width:22,height:22,borderRadius:11,borderWidth:2,borderColor:e.colors.hairline,alignItems:"center",justifyContent:"center"},radioActive:{borderColor:e.colors.ink},radioDot:{width:10,height:10,borderRadius:5,backgroundColor:e.colors.ink},checkbox:{width:22,height:22,borderRadius:6,borderWidth:2,borderColor:e.colors.hairline,alignItems:"center",justifyContent:"center"},checkboxActive:{borderColor:e.colors.ink,backgroundColor:e.colors.ink},checkboxInner:{width:9,height:9,borderRadius:2,backgroundColor:e.colors.white},chipsRow:{flexDirection:"row",gap:8,flexWrap:"wrap"},chip:{paddingHorizontal:16,paddingVertical:11,borderRadius:12,borderWidth:1.5,borderColor:e.colors.hairline,backgroundColor:e.colors.card},chipActive:{borderColor:e.colors.ink,backgroundColor:e.colors.subtleSurface},chipText:{fontSize:14,color:e.colors.inkSoft},chipTextActive:{color:e.colors.ink,fontWeight:"700"}})}g.__docgenInfo={description:"",methods:[],displayName:"Selector"};const J={title:"Components/Selector"},N=[{value:"good",label:"ვარგისია"},{value:"deficient",label:"ხარვეზი"},{value:"unusable",label:"გამოუსადეგარია"}],u={name:"Single · chips",render:()=>{const[e,t]=v.useState("good");return r.jsx(i.View,{style:{width:380},children:r.jsx(g,{label:"Condition",options:N,value:e,onChange:t})})}},b={name:"Single · rows",render:()=>{const[e,t]=v.useState(null);return r.jsx(i.View,{style:{width:380},children:r.jsx(g,{label:"Equipment type",presentation:"rows",value:e,onChange:t,options:[{value:"crane",label:"Tower crane",subtitle:"Fixed / climbing"},{value:"excavator",label:"Excavator"},{value:"forklift",label:"Forklift"}]})})}},h={name:"Multi · chips",render:()=>{const[e,t]=v.useState(["steel"]);return r.jsx(i.View,{style:{width:380},children:r.jsx(g,{mode:"multi",label:"Sling material",options:[{value:"steel",label:"Steel wire"},{value:"chain",label:"Chain"},{value:"synthetic",label:"Synthetic web"},{value:"rope",label:"Fibre rope"}],values:e,onValuesChange:t})})}};var m,y,C;u.parameters={...u.parameters,docs:{...(m=u.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Single · chips',
  render: () => {
    const [v, setV] = useState<string | null>('good');
    return <View style={{
      width: 380
    }}>
        <Selector label="Condition" options={CONDITION} value={v} onChange={setV} />
      </View>;
  }
}`,...(C=(y=u.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var k,V,j;b.parameters={...b.parameters,docs:{...(k=b.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(j=(V=b.parameters)==null?void 0:V.docs)==null?void 0:j.source}}};var T,A,I;h.parameters={...h.parameters,docs:{...(T=h.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(I=(A=h.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};const K=["SingleChips","SingleRows","MultiChips"];export{h as MultiChips,u as SingleChips,b as SingleRows,K as __namedExportsOrder,J as default};
