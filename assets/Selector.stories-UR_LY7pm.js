import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as s}from"./index-CK_08F47.js";import{d as r}from"./theme-DstihSO3.js";import{S as l}from"./Selector-Dse7ti__.js";import"./client-CICyZnRS.js";import"./design-tokens-CbirmslE.js";import"./A11yText-BzVlj9tL.js";import"./accessibility-D-vf3RPB.js";import"./haptics-XHj2_-jG.js";import"./index-CvnRCj2y.js";import"./circle-check-tssXoyK1.js";import"./createLucideIcon-BqTg3DDj.js";import"./usePressBounce-CVQEImX9.js";import"./useSelectionPop-CiNHUs5s.js";const Q={title:"Selection/Selector",argTypes:{presentation:{control:"inline-radio",options:["chips","rows","list"]},indicator:{control:"inline-radio",options:["radio","check"]},error:{control:"boolean"}},args:{presentation:"chips",indicator:"radio",error:!1}},O=[{value:"good",label:"ვარგისია"},{value:"deficient",label:"ხარვეზი"},{value:"unusable",label:"გამოუსადეგარია"}],i={render:t=>{const[a,I]=s.useState("good");return e.jsx(r.View,{style:{width:420},children:e.jsx(l,{label:"Condition",presentation:t.presentation,indicator:t.indicator,error:t.error,options:O,value:a,onChange:I})})}},o={name:"Single · chips",render:()=>{const[t,a]=s.useState("good");return e.jsx(r.View,{style:{width:380},children:e.jsx(l,{label:"Condition",options:O,value:t,onChange:a})})}},n={name:"Single · rows",render:()=>{const[t,a]=s.useState(null);return e.jsx(r.View,{style:{width:380},children:e.jsx(l,{label:"Equipment type",presentation:"rows",value:t,onChange:a,options:[{value:"crane",label:"Tower crane",subtitle:"Fixed / climbing"},{value:"excavator",label:"Excavator"},{value:"forklift",label:"Forklift"}]})})}},c={name:"Multi · chips",render:()=>{const[t,a]=s.useState(["steel"]);return e.jsx(r.View,{style:{width:380},children:e.jsx(l,{mode:"multi",label:"Sling material",options:[{value:"steel",label:"Steel wire"},{value:"chain",label:"Chain"},{value:"synthetic",label:"Synthetic web"},{value:"rope",label:"Fibre rope"}],values:t,onValuesChange:a})})}},m=({c:t})=>e.jsx(r.View,{style:{width:36,height:36,borderRadius:18,backgroundColor:t}}),u=({c:t})=>e.jsx(r.View,{style:{width:10,height:10,borderRadius:5,backgroundColor:t}}),d={name:"Type cards (dot + check)",render:()=>{const[t,a]=s.useState("severe");return e.jsx(r.View,{style:{width:420},children:e.jsx(l,{presentation:"rows",indicator:"check",value:t,onChange:a,options:[{value:"minor",label:"მსუბუქი დაშავება",leading:e.jsx(u,{c:"#F59E0B"})},{value:"severe",label:"მძიმე უბედური შემთხვევა",leading:e.jsx(u,{c:"#FE7A43"})},{value:"fatal",label:"ფატალური შემთხვევა",leading:e.jsx(u,{c:"#EF4444"})},{value:"nearmiss",label:"კინაღამ შემთხვევა",leading:e.jsx(u,{c:"#3B82F6"})}]})})}},p={name:"List · with leading + subtitle",render:()=>{const[t,a]=s.useState("p2");return e.jsx(r.View,{style:{width:420},children:e.jsx(l,{presentation:"list",value:t,onChange:a,options:[{value:"p1",label:"Hubble Construction",subtitle:"Tbilisi, Georgia",leading:e.jsx(m,{c:"#E6FF4D"})},{value:"p2",label:"Site B — Tower crane",subtitle:"Batumi",leading:e.jsx(m,{c:"#FE7A43"})},{value:"p3",label:"Warehouse 4",subtitle:"Kutaisi",leading:e.jsx(m,{c:"#3B82F6"})}]})})}};var g,v,b;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => {
    const [v, setV] = useState<string | null>('good');
    return <View style={{
      width: 420
    }}>
        <Selector label="Condition" presentation={args.presentation as 'chips' | 'rows' | 'list'} indicator={args.indicator as 'radio' | 'check'} error={args.error as boolean} options={CONDITION} value={v} onChange={setV} />
      </View>;
  }
}`,...(b=(v=i.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var h,w,S;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Single · chips',
  render: () => {
    const [v, setV] = useState<string | null>('good');
    return <View style={{
      width: 380
    }}>
        <Selector label="Condition" options={CONDITION} value={v} onChange={setV} />
      </View>;
  }
}`,...(S=(w=o.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var V,x,C;n.parameters={...n.parameters,docs:{...(V=n.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(C=(x=n.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var y,j,F;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(F=(j=c.parameters)==null?void 0:j.docs)==null?void 0:F.source}}};var E,f,D;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(D=(f=d.parameters)==null?void 0:f.docs)==null?void 0:D.source}}};var T,k,B;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(B=(k=p.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};const U=["Playground","SingleChips","SingleRows","MultiChips","TypeCards","ListWithLeading"];export{p as ListWithLeading,c as MultiChips,i as Playground,o as SingleChips,n as SingleRows,d as TypeCards,U as __namedExportsOrder,Q as default};
