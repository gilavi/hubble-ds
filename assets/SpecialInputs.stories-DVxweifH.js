import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as w}from"./index-CK_08F47.js";import{d as n}from"./theme-DstihSO3.js";import{S as o,P as K,Q as h}from"./PlateInput-BpY3cr2M.js";import"./client-CICyZnRS.js";import"./design-tokens-CbirmslE.js";import"./A11yText-BzVlj9tL.js";import"./accessibility-D-vf3RPB.js";import"./haptics-Y9X1Ki18.js";import"./PressBounce-CgjHGSl8.js";import"./index-CvnRCj2y.js";import"./usePressBounce-CVQEImX9.js";const N={title:"Forms/Special Inputs"},t={name:"Plate Input",render:()=>{const[s,i]=w.useState("");return e.jsx(n.View,{style:{width:320},children:e.jsx(K,{label:"License plate",value:s,onChangeText:i})})}},r={name:"Quantity Selector",render:()=>{const[s,i]=w.useState(2);return e.jsx(n.View,{style:{width:360},children:e.jsx(h,{value:s,onChange:i,accessibilityLabelPrefix:"Harness count"})})}},a={name:"Serial Keypad",render:()=>e.jsxs(n.View,{style:{gap:24,width:360},children:[e.jsx(o,{slotKind:"letter",onKey:()=>{}}),e.jsx(o,{slotKind:"digit",onKey:()=>{}})]})};var l,p,c;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: 'Plate Input',
  render: () => {
    const [v, setV] = useState('');
    return <View style={{
      width: 320
    }}>
        <PlateInput label="License plate" value={v} onChangeText={setV} />
      </View>;
  }
}`,...(c=(p=t.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var d,m,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'Quantity Selector',
  render: () => {
    const [n, setN] = useState(2);
    return <View style={{
      width: 360
    }}>
        <QuantitySelector value={n} onChange={setN} accessibilityLabelPrefix="Harness count" />
      </View>;
  }
}`,...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var y,S,x;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Serial Keypad',
  render: () => <View style={{
    gap: 24,
    width: 360
  }}>
      <SerialKeypad slotKind="letter" onKey={() => {}} />
      <SerialKeypad slotKind="digit" onKey={() => {}} />
    </View>
}`,...(x=(S=a.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};const H=["Plate","Quantity","Keypad"];export{a as Keypad,t as Plate,r as Quantity,H as __namedExportsOrder,N as default};
