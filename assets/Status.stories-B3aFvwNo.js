import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{u as f,d as s}from"./theme-DstihSO3.js";import{r as g}from"./index-CK_08F47.js";import{A as x}from"./A11yText-BzVlj9tL.js";import{I as S,S as w}from"./InspectionListAvatar-n77LrQ24.js";import"./client-CICyZnRS.js";import"./design-tokens-CbirmslE.js";import"./accessibility-D-vf3RPB.js";const h={inspection:"შემოწმება",incident:"ინციდენტი",briefing:"ინსტრუქტაჟი",report:"რეპორტი"},r=g.memo(function({recordType:m,label:y}){const{theme:u}=f(),T=y??h[m];return e.jsx(x,{style:[v.label,{color:u.colors.inkSoft}],children:T})}),v=s.StyleSheet.create({label:{fontSize:11,fontWeight:"600",letterSpacing:.3,marginBottom:2}});r.__docgenInfo={description:"",methods:[],displayName:"RecordTypePill",props:{recordType:{required:!0,tsType:{name:"union",raw:"'inspection' | 'incident' | 'briefing' | 'report'",elements:[{name:"literal",value:"'inspection'"},{name:"literal",value:"'incident'"},{name:"literal",value:"'briefing'"},{name:"literal",value:"'report'"}]},description:""},label:{required:!1,tsType:{name:"string"},description:"Override displayed label; omit to use the canonical Georgian label."}}};const _={title:"Components/Status"},t={name:"Record Type Pill",render:()=>e.jsxs(s.View,{style:{flexDirection:"row",flexWrap:"wrap",gap:10},children:[e.jsx(r,{recordType:"inspection"}),e.jsx(r,{recordType:"incident"}),e.jsx(r,{recordType:"briefing"}),e.jsx(r,{recordType:"report"})]})},j=["completed","due_soon","due_today","overdue","upcoming","draft"],o={name:"Status Badge (corner dot)",render:()=>e.jsx(s.View,{style:{flexDirection:"row",flexWrap:"wrap",gap:20},children:j.map(i=>e.jsxs(s.View,{style:{position:"relative"},children:[e.jsx(S,{category:"harness",size:44}),e.jsx(w,{status:i})]},i))})};var a,n,c;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: 'Record Type Pill',
  render: () => <View style={{
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10
  }}>
      <RecordTypePill recordType="inspection" />
      <RecordTypePill recordType="incident" />
      <RecordTypePill recordType="briefing" />
      <RecordTypePill recordType="report" />
    </View>
}`,...(c=(n=t.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var p,l,d;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Status Badge (corner dot)',
  render: () => <View style={{
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 20
  }}>
      {STATUSES.map(s =>
    // StatusBadge is a corner dot — shown over an avatar, as in list rows.
    <View key={s} style={{
      position: 'relative'
    }}>
          <InspectionListAvatar category="harness" size={44} />
          <StatusBadge status={s} />
        </View>)}
    </View>
}`,...(d=(l=o.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const L=["RecordTypes","StatusDots"];export{t as RecordTypes,o as StatusDots,L as __namedExportsOrder,_ as default};
