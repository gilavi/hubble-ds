import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as w}from"./index-CK_08F47.js";import{d as h}from"./theme-DstihSO3.js";import{A as S,C as b}from"./CustomDropdown-CexdCBb4.js";import{u as x}from"./BottomSheet-Dj0pW8DE.js";import{B as D}from"./Button-B0l_2bfI.js";import"./client-CICyZnRS.js";import"./design-tokens-CbirmslE.js";import"./A11yText-BS0WF2iH.js";import"./accessibility-xurZvXxT.js";import"./haptics-Y9X1Ki18.js";import"./createLucideIcon-BqTg3DDj.js";import"./index-CvnRCj2y.js";const F={title:"Components/Overlays"},t={name:"Action Sheet",render:()=>e.jsx(h.View,{style:{width:360},children:e.jsx(S,{title:"Inspection",items:[{label:"Edit",onPress:()=>{}},{label:"Duplicate",onPress:()=>{}},{label:"Delete",variant:"destructive",onPress:()=>{}}],onClose:()=>{}})})},o={name:"Custom Dropdown",render:()=>{const[s,v]=w.useState(null);return e.jsx(h.View,{style:{width:360},children:e.jsx(b,{label:"Inspection type",placeholder:"Select a type…",value:s,onChange:v,options:[{label:"Tower crane",value:"crane"},{label:"Excavator",value:"excavator"},{label:"Fall protection harness",value:"harness"}]})})}},r={name:"Bottom Sheet",render:()=>{const s=x();return e.jsx(D,{title:"Open bottom sheet",onPress:()=>s({title:"Choose an action",options:["Edit","Duplicate","Delete"],destructiveButtonIndex:2})})}};var a,n,l;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: 'Action Sheet',
  render: () => <View style={{
    width: 360
  }}>
      <ActionSheet title="Inspection" items={[{
      label: 'Edit',
      onPress: () => {}
    }, {
      label: 'Duplicate',
      onPress: () => {}
    }, {
      label: 'Delete',
      variant: 'destructive',
      onPress: () => {}
    }]} onClose={() => {}} />
    </View>
}`,...(l=(n=t.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var i,c,p;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: 'Custom Dropdown',
  render: () => {
    const [val, setVal] = useState<string | number | null>(null);
    return <View style={{
      width: 360
    }}>
        <CustomDropdown label="Inspection type" placeholder="Select a type…" value={val} onChange={setVal} options={[{
        label: 'Tower crane',
        value: 'crane'
      }, {
        label: 'Excavator',
        value: 'excavator'
      }, {
        label: 'Fall protection harness',
        value: 'harness'
      }]} />
      </View>;
  }
}`,...(p=(c=o.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,u,d;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Bottom Sheet',
  render: () => {
    const show = useBottomSheet();
    return <Button title="Open bottom sheet" onPress={() => show({
      title: 'Choose an action',
      options: ['Edit', 'Duplicate', 'Delete'],
      destructiveButtonIndex: 2
    })} />;
  }
}`,...(d=(u=r.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const _=["ActionSheetStory","Dropdown","BottomSheetTrigger"];export{t as ActionSheetStory,r as BottomSheetTrigger,o as Dropdown,_ as __namedExportsOrder,F as default};
