import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r}from"./index-CK_08F47.js";import{u as K,d as n}from"./theme-DstihSO3.js";import{m as Q}from"./index-KG4MBYt8.js";import{A as ae}from"./A11yText-BzVlj9tL.js";import{A as H}from"./ActionSheetItem-LqYKOQGV.js";import{C as le}from"./check-DjeYMMp8.js";import{c as ce}from"./createLucideIcon-BqTg3DDj.js";import{u as U,B as de}from"./BottomSheet-RJhTCGHk.js";import{h as R}from"./haptics-Y9X1Ki18.js";import{P as ue}from"./PressBounce-CgjHGSl8.js";import{B as me}from"./Button-DzPX3KzF.js";import"./client-CICyZnRS.js";import"./design-tokens-CbirmslE.js";import"./accessibility-D-vf3RPB.js";import"./index-CvnRCj2y.js";import"./usePressBounce-CVQEImX9.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pe=ce("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);function X({title:a,items:s,closeLabel:k="გაუქმება",onClose:m}){const f=Q.useSafeAreaInsets(),{theme:h}=K(),l=r.useMemo(()=>fe(h),[h]),c=r.useCallback(p=>{p.onPress(),m()},[m]);return e.jsxs(n.View,{style:[l.content,{paddingBottom:Math.max(f.bottom,16)}],children:[e.jsx(ae,{size:"sm",weight:"bold",color:h.colors.inkFaint,style:l.title,children:a}),e.jsx(n.View,{style:l.itemsContainer,children:s.map((p,g)=>e.jsx(H,{label:p.label,icon:p.icon,variant:p.variant,onPress:()=>c(p),isLast:g===s.length-1},g))}),e.jsx(n.View,{style:l.cancelBtn,children:e.jsx(H,{label:k,onPress:m,isLast:!0})})]})}function fe(a){return n.StyleSheet.create({content:{backgroundColor:a.colors.surface,paddingHorizontal:0,paddingTop:0},title:{fontSize:13,textTransform:"uppercase",letterSpacing:.5,textAlign:"center",paddingVertical:8,paddingHorizontal:16},itemsContainer:{marginBottom:8},cancelBtn:{marginHorizontal:16,borderRadius:14,borderWidth:1.5,borderColor:a.colors.border,overflow:"hidden"}})}X.__docgenInfo={description:"",methods:[],displayName:"ActionSheet",props:{title:{required:!0,tsType:{name:"string"},description:""},items:{required:!0,tsType:{name:"Array",elements:[{name:"ActionSheetItemConfig"}],raw:"ActionSheetItemConfig[]"},description:""},closeLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'გაუქმება'",computed:!1}},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const Y=r.memo(function({label:s,placeholder:k="აირჩიეთ...",options:m,value:f,onChange:h,error:l,disabled:c=!1,required:B=!1,testID:p,open:g,onOpenChange:x}){const{theme:D}=K(),t=D.colors,d=D.typography,I=Q.useSafeAreaInsets(),F=U(),S=g!==void 0,[Z,ee]=r.useState(!1),V=S?g??!1:Z,P=r.useRef({options:m,value:f,label:s,onChange:h});P.current={options:m,value:f,label:s,onChange:h};const y=r.useRef(null),w=r.useCallback(u=>{S?x==null||x(u):ee(u)},[S,x]),v=r.useMemo(()=>m.find(u=>u.value===f)??null,[m,f]);r.useEffect(()=>{var z;if(!V){(z=y.current)==null||z.dismiss(),y.current=null;return}if(y.current)return;const u=F({content:({dismiss:A})=>{const{options:q,value:ne,label:L,onChange:oe}=P.current;return e.jsxs(n.View,{style:{paddingBottom:Math.max(I.bottom,12)},children:[L!=null&&e.jsx(n.Text,{style:[o.sheetTitle,{fontFamily:d.fontFamily.bodySemiBold,color:t.inkSoft}],children:L}),e.jsx(de,{style:{maxHeight:480},children:q.map((i,re)=>{const b=i.value===ne,se=re===q.length-1;return e.jsxs(n.View,{children:[e.jsxs(n.Pressable,{onPress:()=>{R.light(),oe(i.value),A()},style:({pressed:ie})=>[o.optionRow,ie&&{backgroundColor:t.surfaceSecondary},b&&{backgroundColor:t.accentSoft}],accessibilityRole:"menuitem",accessibilityState:{selected:b},children:[i.icon!=null&&e.jsx(n.View,{style:o.optionIcon,children:i.icon}),e.jsxs(n.View,{style:o.optionTextCol,children:[e.jsx(n.Text,{numberOfLines:2,style:[o.optionLabel,{fontFamily:b?d.fontFamily.bodySemiBold:d.fontFamily.body,color:b?t.accent:t.ink}],children:i.label}),i.subtitle!=null&&e.jsx(n.Text,{numberOfLines:1,style:[o.optionSubtitle,{fontFamily:d.fontFamily.body,color:t.inkSoft}],children:i.subtitle})]}),b&&e.jsx(le,{size:18,color:t.accent,strokeWidth:1.5,style:o.checkmark})]}),!se&&e.jsx(n.View,{style:[o.separator,{backgroundColor:t.border}]})]},String(i.value))})}),e.jsx(n.Pressable,{onPress:()=>{R.light(),A()},style:({pressed:i})=>[o.cancelBtn,{borderColor:t.border,backgroundColor:t.surface,opacity:i?.7:1}],accessibilityRole:"button",accessibilityLabel:"გაუქმება",children:e.jsx(n.Text,{style:[o.cancelText,{fontFamily:d.fontFamily.bodySemiBold,color:t.inkFaint}],children:"გაუქმება"})})]})}},()=>{y.current=null,w(!1)});y.current=u},[V,F,w,t,d,I.bottom]),r.useEffect(()=>()=>{var u;return(u=y.current)==null?void 0:u.dismiss()},[]);const te=r.useCallback(()=>{c||w(!0)},[c,w]);return S?null:e.jsxs(n.View,{testID:p,style:o.fieldWrapper,children:[s!=null&&e.jsxs(n.Text,{style:[o.fieldLabel,{fontFamily:d.fontFamily.bodyMedium,color:l?t.danger:t.inkSoft}],children:[s,B?" *":""]}),e.jsxs(ue,{onPress:te,disabled:c,scaleTo:.98,hapticOnPress:"light",accessibilityRole:"combobox",accessibilityLabel:s,accessibilityState:{disabled:c,expanded:V},style:[o.trigger,{borderColor:l?t.danger:c?t.border:t.borderStrong,backgroundColor:c?t.surfaceSecondary:t.surface}],children:[e.jsx(n.Text,{numberOfLines:1,style:[o.triggerText,{fontFamily:d.fontFamily.body,color:v?t.ink:t.inkFaint}],children:(v==null?void 0:v.label)??k}),e.jsx(pe,{size:16,color:c?t.inkFaint:t.inkSoft,strokeWidth:1.5})]}),l!=null&&e.jsx(n.Text,{style:[o.errorText,{fontFamily:d.fontFamily.body,color:t.danger}],children:l})]})}),o=n.StyleSheet.create({fieldWrapper:{gap:4},fieldLabel:{fontSize:12,letterSpacing:.2},trigger:{flexDirection:"row",alignItems:"center",justifyContent:"space-between",minHeight:52,borderWidth:1.5,borderRadius:10,paddingHorizontal:14,paddingVertical:12,gap:8},triggerText:{flex:1,fontSize:15,lineHeight:22},errorText:{fontSize:11},sheetTitle:{fontSize:13,textAlign:"center",paddingVertical:8,paddingHorizontal:16,letterSpacing:.5,textTransform:"uppercase"},optionRow:{flexDirection:"row",alignItems:"center",minHeight:56,paddingHorizontal:16,paddingVertical:12},optionIcon:{marginRight:14},optionTextCol:{flex:1,gap:2},optionLabel:{fontSize:15,lineHeight:22},optionSubtitle:{fontSize:11},checkmark:{marginLeft:8},separator:{height:n.StyleSheet.hairlineWidth,marginHorizontal:16},cancelBtn:{marginHorizontal:16,marginTop:10,height:52,borderRadius:14,borderWidth:1.5,alignItems:"center",justifyContent:"center"},cancelText:{fontSize:16}});Y.__docgenInfo={description:"",methods:[],displayName:"CustomDropdown",props:{label:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'აირჩიეთ...'",computed:!1}},options:{required:!0,tsType:{name:"Array",elements:[{name:"DropdownOption"}],raw:"DropdownOption[]"},description:""},value:{required:!0,tsType:{name:"union",raw:"string | number | null",elements:[{name:"string"},{name:"number"},{name:"null"}]},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string | number) => void",signature:{arguments:[{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"value"}],return:{name:"void"}}},description:""},error:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},required:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},testID:{required:!1,tsType:{name:"string"},description:""},open:{required:!1,tsType:{name:"boolean"},description:`Controlled/imperative mode.
When provided the component renders only the sheet (no trigger button).
The caller is responsible for toggling visibility via onOpenChange.`},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""}}};const Pe={title:"Components/Overlays"},T={name:"Action Sheet",render:()=>e.jsx(n.View,{style:{width:360},children:e.jsx(X,{title:"Inspection",items:[{label:"Edit",onPress:()=>{}},{label:"Duplicate",onPress:()=>{}},{label:"Delete",variant:"destructive",onPress:()=>{}}],onClose:()=>{}})})},C={name:"Custom Dropdown",render:()=>{const[a,s]=r.useState(null);return e.jsx(n.View,{style:{width:360},children:e.jsx(Y,{label:"Inspection type",placeholder:"Select a type…",value:a,onChange:s,options:[{label:"Tower crane",value:"crane"},{label:"Excavator",value:"excavator"},{label:"Fall protection harness",value:"harness"}]})})}},j={name:"Bottom Sheet",render:()=>{const a=U();return e.jsx(me,{title:"Open bottom sheet",onPress:()=>a({title:"Choose an action",options:["Edit","Duplicate","Delete"],destructiveButtonIndex:2})})}};var E,O,W;T.parameters={...T.parameters,docs:{...(E=T.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(W=(O=T.parameters)==null?void 0:O.docs)==null?void 0:W.source}}};var _,M,N;C.parameters={...C.parameters,docs:{...(_=C.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(N=(M=C.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};var $,G,J;j.parameters={...j.parameters,docs:{...($=j.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: 'Bottom Sheet',
  render: () => {
    const show = useBottomSheet();
    return <Button title="Open bottom sheet" onPress={() => show({
      title: 'Choose an action',
      options: ['Edit', 'Duplicate', 'Delete'],
      destructiveButtonIndex: 2
    })} />;
  }
}`,...(J=(G=j.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};const ze=["ActionSheetStory","Dropdown","BottomSheetTrigger"];export{T as ActionSheetStory,j as BottomSheetTrigger,C as Dropdown,ze as __namedExportsOrder,Pe as default};
