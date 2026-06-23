import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{d as s}from"./theme-DstihSO3.js";import{R as r}from"./RecordTypePill-DwR443tw.js";import{I as m,S as y}from"./InspectionListAvatar-CBTK_1x0.js";import"./index-CK_08F47.js";import"./client-CICyZnRS.js";import"./design-tokens-CbirmslE.js";import"./A11yText-BzVlj9tL.js";import"./accessibility-D-vf3RPB.js";const D={title:"Data Display/Status"},t={name:"Record Type Pill",render:()=>e.jsxs(s.View,{style:{flexDirection:"row",flexWrap:"wrap",gap:10},children:[e.jsx(r,{recordType:"inspection"}),e.jsx(r,{recordType:"incident"}),e.jsx(r,{recordType:"briefing"}),e.jsx(r,{recordType:"report"})]})},u=["completed","due_soon","due_today","overdue","upcoming","draft"],o={name:"Status Badge (corner dot)",render:()=>e.jsx(s.View,{style:{flexDirection:"row",flexWrap:"wrap",gap:20},children:u.map(a=>e.jsxs(s.View,{style:{position:"relative"},children:[e.jsx(m,{category:"harness",size:44}),e.jsx(y,{status:a})]},a))})};var i,p,c;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(p=t.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var d,n,l;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(l=(n=o.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};const v=["RecordTypes","StatusDots"];export{t as RecordTypes,o as StatusDots,v as __namedExportsOrder,D as default};
