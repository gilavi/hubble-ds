import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{r as c}from"./index-CK_08F47.js";import{u as w,a as t}from"./theme-CqVP_H4R.js";import{c as b}from"./createLucideIcon-BqTg3DDj.js";import"./client-CICyZnRS.js";import"./design-tokens-CbirmslE.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=b("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=b("Map",[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",key:"169xi5"}],["path",{d:"M15 5.764v15",key:"1pn4in"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]]);function T({latitude:e,longitude:a,style:o}){const{theme:n}=w(),l=c.useMemo(()=>I(n),[n]);return r.jsxs(t.View,{style:[o,l.placeholder],children:[r.jsx(k,{size:20,color:n.colors.inkFaint,strokeWidth:2}),r.jsxs(t.Text,{style:l.coords,children:[e.toFixed(5),", ",a.toFixed(5)]})]})}function I(e){return t.StyleSheet.create({placeholder:{alignItems:"center",justifyContent:"center",backgroundColor:e.colors.subtleSurface,gap:4},coords:{fontSize:12,color:e.colors.ink,fontWeight:"600"}})}T.__docgenInfo={description:"",methods:[],displayName:"MapPreview",props:{latitude:{required:!0,tsType:{name:"number"},description:""},longitude:{required:!0,tsType:{name:"number"},description:""},pinColor:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"any"},description:""}}};function j({value:e,onChange:a,address:o,onAddressChange:n,height:l=220}){const{theme:i}=w(),s=c.useMemo(()=>S(i),[i]);return r.jsxs(t.View,{style:s.wrap,children:[r.jsxs(t.View,{style:s.searchRow,children:[r.jsx(k,{size:16,color:i.colors.inkFaint,strokeWidth:1.5}),r.jsx(t.TextInput,{value:o,onChangeText:n,placeholder:"მისამართი",placeholderTextColor:i.colors.inkFaint,style:s.searchInput})]}),r.jsx(t.View,{style:[s.mapWrap,{height:l}],children:r.jsxs(t.View,{style:s.placeholder,children:[r.jsx(v,{size:28,color:i.colors.inkFaint,strokeWidth:1.5}),r.jsx(t.Text,{style:s.placeholderText,children:"რუკა ხელმიუწვდომელია ვებში - გამოიყენეთ მისამართის ველი"}),e?r.jsxs(t.Text,{style:s.coords,children:[e.latitude.toFixed(5),", ",e.longitude.toFixed(5)]}):null]})})]})}function S(e){return t.StyleSheet.create({wrap:{gap:8},searchRow:{flexDirection:"row",alignItems:"center",gap:8,backgroundColor:e.colors.card,borderWidth:1,borderColor:e.colors.hairline,borderRadius:12,paddingHorizontal:12,paddingVertical:10},searchInput:{flex:1,fontSize:14,color:e.colors.ink,padding:0},searchErr:{color:e.colors.danger,fontSize:12,paddingHorizontal:4},mapWrap:{borderRadius:14,overflow:"hidden",borderWidth:1,borderColor:e.colors.hairline,backgroundColor:e.colors.subtleSurface},placeholder:{flex:1,alignItems:"center",justifyContent:"center",gap:6,padding:16},placeholderText:{fontSize:12,color:e.colors.inkFaint,textAlign:"center"},coords:{fontSize:12,color:e.colors.ink,fontWeight:"600"}})}j.__docgenInfo={description:"",methods:[],displayName:"MapPicker",props:{value:{required:!0,tsType:{name:"union",raw:"LatLng | null",elements:[{name:"signature",type:"object",raw:`{
  latitude: number;
  longitude: number;
}`,signature:{properties:[{key:"latitude",value:{name:"number",required:!0}},{key:"longitude",value:{name:"number",required:!0}}]}},{name:"null"}]},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(loc: LatLng | null) => void",signature:{arguments:[{type:{name:"union",raw:"LatLng | null",elements:[{name:"signature",type:"object",raw:`{
  latitude: number;
  longitude: number;
}`,signature:{properties:[{key:"latitude",value:{name:"number",required:!0}},{key:"longitude",value:{name:"number",required:!0}}]}},{name:"null"}]},name:"loc"}],return:{name:"void"}}},description:""},address:{required:!0,tsType:{name:"string"},description:""},onAddressChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(s: string) => void",signature:{arguments:[{type:{name:"string"},name:"s"}],return:{name:"void"}}},description:""},height:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"220",computed:!1}}}};const P={title:"Components/Maps (web fallback)"},p={latitude:41.7151,longitude:44.8271},d={render:()=>r.jsx(t.View,{style:{width:360},children:r.jsx(T,{latitude:p.latitude,longitude:p.longitude,style:{height:160,borderRadius:12}})})},u={render:()=>{const[e,a]=c.useState(p),[o,n]=c.useState("Tbilisi, Georgia");return r.jsx(t.View,{style:{width:360},children:r.jsx(j,{value:e,onChange:a,address:o,onAddressChange:n})})}};var m,g,h;d.parameters={...d.parameters,docs:{...(m=d.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <View style={{
    width: 360
  }}>
      <MapPreview latitude={TBILISI.latitude} longitude={TBILISI.longitude} style={{
      height: 160,
      borderRadius: 12
    }} />
    </View>
}`,...(h=(g=d.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var y,x,f;u.parameters={...u.parameters,docs:{...(y=u.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<LatLng | null>(TBILISI);
    const [address, setAddress] = useState('Tbilisi, Georgia');
    return <View style={{
      width: 360
    }}>
        <MapPicker value={value} onChange={setValue} address={address} onAddressChange={setAddress} />
      </View>;
  }
}`,...(f=(x=u.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};const A=["Preview","Picker"];export{u as Picker,d as Preview,A as __namedExportsOrder,P as default};
