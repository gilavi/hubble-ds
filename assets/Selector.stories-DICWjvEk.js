import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as s}from"./index-CK_08F47.js";import{d as l}from"./theme-DstihSO3.js";import{S as r}from"./Selector-fq4LujhW.js";import"./client-CICyZnRS.js";import"./design-tokens-CbirmslE.js";import"./A11yText-BzVlj9tL.js";import"./accessibility-D-vf3RPB.js";import"./haptics-Y9X1Ki18.js";import"./index-CvnRCj2y.js";import"./circle-check-tssXoyK1.js";import"./createLucideIcon-BqTg3DDj.js";import"./usePressBounce-CVQEImX9.js";import"./useSelectionPop-CiNHUs5s.js";const K={title:"Components/Selector"},D=[{value:"good",label:"ვარგისია"},{value:"deficient",label:"ხარვეზი"},{value:"unusable",label:"გამოუსადეგარია"}],i={name:"Single · chips",render:()=>{const[t,a]=s.useState("good");return e.jsx(l.View,{style:{width:380},children:e.jsx(r,{label:"Condition",options:D,value:t,onChange:a})})}},o={name:"Single · rows",render:()=>{const[t,a]=s.useState(null);return e.jsx(l.View,{style:{width:380},children:e.jsx(r,{label:"Equipment type",presentation:"rows",value:t,onChange:a,options:[{value:"crane",label:"Tower crane",subtitle:"Fixed / climbing"},{value:"excavator",label:"Excavator"},{value:"forklift",label:"Forklift"}]})})}},n={name:"Multi · chips",render:()=>{const[t,a]=s.useState(["steel"]);return e.jsx(l.View,{style:{width:380},children:e.jsx(r,{mode:"multi",label:"Sling material",options:[{value:"steel",label:"Steel wire"},{value:"chain",label:"Chain"},{value:"synthetic",label:"Synthetic web"},{value:"rope",label:"Fibre rope"}],values:t,onValuesChange:a})})}},p=({c:t})=>e.jsx(l.View,{style:{width:36,height:36,borderRadius:18,backgroundColor:t}}),u=({c:t})=>e.jsx(l.View,{style:{width:10,height:10,borderRadius:5,backgroundColor:t}}),c={name:"Type cards (dot + check)",render:()=>{const[t,a]=s.useState("severe");return e.jsx(l.View,{style:{width:420},children:e.jsx(r,{presentation:"rows",indicator:"check",value:t,onChange:a,options:[{value:"minor",label:"მსუბუქი დაშავება",leading:e.jsx(u,{c:"#F59E0B"})},{value:"severe",label:"მძიმე უბედური შემთხვევა",leading:e.jsx(u,{c:"#FE7A43"})},{value:"fatal",label:"ფატალური შემთხვევა",leading:e.jsx(u,{c:"#EF4444"})},{value:"nearmiss",label:"კინაღამ შემთხვევა",leading:e.jsx(u,{c:"#3B82F6"})}]})})}},d={name:"List · with leading + subtitle",render:()=>{const[t,a]=s.useState("p2");return e.jsx(l.View,{style:{width:420},children:e.jsx(r,{presentation:"list",value:t,onChange:a,options:[{value:"p1",label:"Hubble Construction",subtitle:"Tbilisi, Georgia",leading:e.jsx(p,{c:"#E6FF4D"})},{value:"p2",label:"Site B — Tower crane",subtitle:"Batumi",leading:e.jsx(p,{c:"#FE7A43"})},{value:"p3",label:"Warehouse 4",subtitle:"Kutaisi",leading:e.jsx(p,{c:"#3B82F6"})}]})})}};var m,b,v;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Single · chips',
  render: () => {
    const [v, setV] = useState<string | null>('good');
    return <View style={{
      width: 380
    }}>
        <Selector label="Condition" options={CONDITION} value={v} onChange={setV} />
      </View>;
  }
}`,...(v=(b=i.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var g,h,w;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(w=(h=o.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};var S,V,x;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(x=(V=n.parameters)==null?void 0:V.docs)==null?void 0:x.source}}};var C,y,F;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(F=(y=c.parameters)==null?void 0:y.docs)==null?void 0:F.source}}};var j,E,f;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(f=(E=d.parameters)==null?void 0:E.docs)==null?void 0:f.source}}};const _=["SingleChips","SingleRows","MultiChips","TypeCards","ListWithLeading"];export{d as ListWithLeading,n as MultiChips,i as SingleChips,o as SingleRows,c as TypeCards,_ as __namedExportsOrder,K as default};
