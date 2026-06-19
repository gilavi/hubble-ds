import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{r as d}from"./index-CK_08F47.js";import{d as p}from"./theme-DstihSO3.js";import{V as m}from"./VerdictSelector-BWPC0hzL.js";import"./client-CICyZnRS.js";import"./design-tokens-CbirmslE.js";import"./triangle-alert-0y16B6u2.js";import"./createLucideIcon-BqTg3DDj.js";import"./eye-CkAjympK.js";import"./shield-check-Dqvwixah.js";import"./A11yText-BzVlj9tL.js";import"./accessibility-D-vf3RPB.js";import"./haptics-Y9X1Ki18.js";import"./PressBounce-CgjHGSl8.js";import"./index-CvnRCj2y.js";import"./usePressBounce-CVQEImX9.js";const T={title:"Selection/Verdict"},e={name:"Pass / Conditional / Fail",render:()=>{const[a,o]=d.useState(null);return t.jsx(p.View,{style:{width:380},children:t.jsx(m,{value:a,onChange:o,options:[{value:"pass",label:"Pass"},{value:"conditional",label:"Conditional"},{value:"fail",label:"Fail"}]})})}},n={name:"Explicit tones",render:()=>{const[a,o]=d.useState("good");return t.jsx(p.View,{style:{width:380},children:t.jsx(m,{value:a,onChange:o,options:[{value:"good",label:"ვარგისია",tone:"success"},{value:"watch",label:"ხარვეზი",tone:"caution"},{value:"bad",label:"გამოუსადეგარია",tone:"danger"}]})})}};var s,r,l;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: 'Pass / Conditional / Fail',
  render: () => {
    const [v, setV] = useState<string | null>(null);
    return <View style={{
      width: 380
    }}>
        <VerdictSelector value={v} onChange={setV} options={[{
        value: 'pass',
        label: 'Pass'
      }, {
        value: 'conditional',
        label: 'Conditional'
      }, {
        value: 'fail',
        label: 'Fail'
      }]} />
      </View>;
  }
}`,...(l=(r=e.parameters)==null?void 0:r.docs)==null?void 0:l.source}}};var i,c,u;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: 'Explicit tones',
  render: () => {
    const [v, setV] = useState<string | null>('good');
    return <View style={{
      width: 380
    }}>
        <VerdictSelector value={v} onChange={setV} options={[{
        value: 'good',
        label: 'ვარგისია',
        tone: 'success'
      }, {
        value: 'watch',
        label: 'ხარვეზი',
        tone: 'caution'
      }, {
        value: 'bad',
        label: 'გამოუსადეგარია',
        tone: 'danger'
      }]} />
      </View>;
  }
}`,...(u=(c=n.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const _=["Default","Tones"];export{e as Default,n as Tones,_ as __namedExportsOrder,T as default};
