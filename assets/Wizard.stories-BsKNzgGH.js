import{j as s}from"./jsx-runtime-BjG_zV1W.js";import{r as w}from"./index-CK_08F47.js";import{d as y}from"./theme-DstihSO3.js";import{C as b}from"./circle-check-tssXoyK1.js";import{c as A}from"./createLucideIcon-BqTg3DDj.js";import{A as j,m as a}from"./index-CvnRCj2y.js";import{h as c}from"./haptics-XHj2_-jG.js";import{u as k}from"./accessibility-D-vf3RPB.js";import{S as o}from"./StatusChip-Bqn1DvAm.js";import"./client-CICyZnRS.js";import"./design-tokens-CbirmslE.js";import"./A11yText-BzVlj9tL.js";import"./usePressBounce-CVQEImX9.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=A("CircleX",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);function C({value:e,onChange:t,compact:g,error:x}){const{reduceMotion:v}=k(),i=g?"chip":"pill",l=!!x&&e===null;return s.jsxs(j.View,{layout:v?void 0:a.LinearTransition.duration(240).easing(a.Easing.out(a.Easing.cubic)),style:{flexDirection:"row",gap:12},children:[s.jsx(o,{layout:i,selected:e===!0,error:l,label:"კი",icon:b,fillSelectedIcon:!0,onPress:()=>{c.answerYes(),t(!0)},a11yLabel:"პასუხი: კი. უსაფრთხოა.",a11yHint:"შეეხეთ თუ პასუხი დადებითია"}),s.jsx(o,{layout:i,selected:e===!1,error:l,label:"არა",icon:S,fillSelectedIcon:!0,onPress:()=>{c.answerNo(),t(!1)},a11yLabel:"პასუხი: არა. არ არის უსაფრთხო.",a11yHint:"შეეხეთ თუ პასუხი უარყოფითია"})]})}C.__docgenInfo={description:`Binary yes/no answer for the inspection wizard. Monochrome via StatusChip -
the ✓/✗ icons carry the meaning, not color. Haptics fire here; the chip owns
the press animation. The row morphs between stacked pills and a compact row
via a layout transition when \`compact\` flips.`,methods:[],displayName:"AnswerButtons",props:{value:{required:!0,tsType:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}]},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(v: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"v"}],return:{name:"void"}}},description:""},compact:{required:!1,tsType:{name:"boolean"},description:`Compact = icon beside label (chip), used while the keyboard is open so the
footer shrinks and the note input stays visible. Default = stacked pills.`},error:{required:!1,tsType:{name:"boolean"},description:"Reveal a danger outline (+ shake) when no answer is chosen — set on a failed submit."}}};const F={title:"Selection/Answer Chips"},n={name:"Answer Buttons",render:()=>{const[e,t]=w.useState(null);return s.jsx(y.View,{style:{width:360},children:s.jsx(C,{value:e,onChange:t})})}},r={name:"Status Chip",render:()=>{const[e,t]=w.useState(null);return s.jsxs(y.View,{style:{flexDirection:"row",gap:12},children:[s.jsx(o,{selected:e==="pass",label:"Pass",icon:b,onPress:()=>t("pass"),fillSelectedIcon:!0}),s.jsx(o,{selected:e==="fail",label:"Fail",icon:S,onPress:()=>t("fail")})]})}};var p,u,m;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Answer Buttons',
  render: () => {
    const [v, setV] = useState<boolean | null>(null);
    return <View style={{
      width: 360
    }}>
        <AnswerButtons value={v} onChange={setV} />
      </View>;
  }
}`,...(m=(u=n.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var d,h,f;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'Status Chip',
  render: () => {
    const [sel, setSel] = useState<'pass' | 'fail' | null>(null);
    return <View style={{
      flexDirection: 'row',
      gap: 12
    }}>
        <StatusChip selected={sel === 'pass'} label="Pass" icon={CircleCheck} onPress={() => setSel('pass')} fillSelectedIcon />
        <StatusChip selected={sel === 'fail'} label="Fail" icon={CircleX} onPress={() => setSel('fail')} />
      </View>;
  }
}`,...(f=(h=r.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};const M=["Answers","Chips"];export{n as Answers,r as Chips,M as __namedExportsOrder,F as default};
