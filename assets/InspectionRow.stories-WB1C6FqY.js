import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{u as V,d as r}from"./theme-DstihSO3.js";import{E as p}from"./ellipsis-vertical-3kROU-WQ.js";import{C as u}from"./chevron-right-D63VA7E2.js";import{r as P}from"./index-CK_08F47.js";import{A as l}from"./A11yText-BzVlj9tL.js";import{I as S}from"./InspectionListAvatar-CBTK_1x0.js";import{R as H}from"./RecordTypePill-DwR443tw.js";import"./client-CICyZnRS.js";import"./design-tokens-CbirmslE.js";import"./createLucideIcon-BqTg3DDj.js";import"./accessibility-D-vf3RPB.js";function s({category:i,status:b,title:v,subtitle:d,trailing:o,actions:x,showBorder:j,avatarSize:k=48,inset:z=20,onPress:R,a11y:T}){const{theme:c}=V(),t=P.useMemo(()=>I(c),[c]);return e.jsxs(r.View,{style:[t.row,{paddingHorizontal:z},j&&t.rowBorder],children:[e.jsxs(r.Pressable,{onPress:R,style:t.pressArea,...T,children:[e.jsx(S,{category:i,size:k,status:b,style:t.avatar}),e.jsxs(r.View,{style:t.body,children:[e.jsx(H,{recordType:"inspection"}),e.jsx(l,{style:t.title,numberOfLines:1,children:v}),d?e.jsx(l,{style:t.subtitle,numberOfLines:1,children:d}):null]}),o!=null?typeof o=="string"?e.jsx(l,{style:t.trailing,children:o}):o:null]}),x]})}function I(i){return r.StyleSheet.create({row:{flexDirection:"row",alignItems:"center",paddingVertical:14,backgroundColor:"transparent"},rowBorder:{borderBottomWidth:.5,borderBottomColor:i.colors.hairline},pressArea:{flex:1,flexDirection:"row",alignItems:"center"},avatar:{marginRight:14},body:{flex:1},title:{fontSize:15,fontWeight:"500",color:i.colors.ink,lineHeight:20,marginBottom:3},subtitle:{fontSize:12,color:i.colors.inkFaint,fontWeight:"400"},trailing:{fontSize:12,color:i.colors.inkSoft,marginLeft:8,marginRight:4}})}s.__docgenInfo={description:`Canonical inspection list row, matching the home-screen "recent activity"
list: gray category avatar, record-type pill, title + subtitle, and an
optional trailing slot (time text or chevron). Shared by the home screen
and the project-detail inspections section so the two never diverge.

Pure presentational component — no data fetching. The caller owns
navigation (\`onPress\`), swipe wrappers, and any \`actions\` (kebab menu).`,methods:[],displayName:"InspectionRow",props:{category:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"Inspection category/source — drives the avatar illustration."},status:{required:!1,tsType:{name:"union",raw:"InspectionStatus | null",elements:[{name:"union",raw:`| 'completed'
| 'draft'
| 'overdue'
| 'due_today'
| 'due_soon'
| 'upcoming'`,elements:[{name:"literal",value:"'completed'"},{name:"literal",value:"'draft'"},{name:"literal",value:"'overdue'"},{name:"literal",value:"'due_today'"},{name:"literal",value:"'due_soon'"},{name:"literal",value:"'upcoming'"}]},{name:"null"}]},description:"Draft vs completed — drives the avatar status ring."},title:{required:!0,tsType:{name:"string"},description:""},subtitle:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},trailing:{required:!1,tsType:{name:"ReactNode"},description:`Trailing content rendered inside the pressable, after the text block.
A string renders as the muted time label; any node renders as-is
(e.g. a chevron).`},actions:{required:!1,tsType:{name:"ReactNode"},description:`Actions rendered OUTSIDE the pressable (e.g. a kebab menu whose popover
is absolutely positioned). Kept out of the press target so taps on the
menu don't also navigate.`},showBorder:{required:!1,tsType:{name:"boolean"},description:"Render a hairline bottom divider (omit on the last row of a group)."},avatarSize:{required:!1,tsType:{name:"number"},description:"Avatar diameter — defaults to the home-screen size (48).",defaultValue:{value:"48",computed:!1}},inset:{required:!1,tsType:{name:"number"},description:`Horizontal padding inside the row. Defaults to 20 (home, full-bleed).
Pass 0 when the row sits inside an already-padded card so the card's
gutter is the only inset and dividers span the card's inner width.`,defaultValue:{value:"20",computed:!1}},onPress:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},a11y:{required:!1,tsType:{name:"ReturnType",elements:[{name:"a11y"}],raw:"ReturnType<typeof a11y>"},description:""}}};const F={title:"Patterns/Inspection Row"},n={name:"Home — time + kebab",render:()=>e.jsxs(r.View,{style:{width:380},children:[e.jsx(s,{category:"harness",status:"completed",title:"სამშენებლო აღჭურვილობის შემოწმება",subtitle:"Hubble Construction",trailing:"2 სთ წინ",showBorder:!0,actions:e.jsx(r.View,{style:{paddingHorizontal:8},children:e.jsx(p,{size:18,color:"#9aa0a6",strokeWidth:1.5})}),onPress:()=>{}}),e.jsx(s,{category:"excavator",status:"draft",title:"ექსკავატორის შემოწმება",subtitle:"Tbilisi Metro",trailing:"გუშინ",actions:e.jsx(r.View,{style:{paddingHorizontal:8},children:e.jsx(p,{size:18,color:"#9aa0a6",strokeWidth:1.5})}),onPress:()=>{}})]})},a={name:"Project card — inset 0 + chevron",render:()=>e.jsxs(r.View,{style:{width:380,backgroundColor:"#f4f5f7",borderRadius:16,paddingVertical:14,paddingHorizontal:12},children:[e.jsx(s,{category:"forklift_inspection",status:"completed",title:"ჩანგლიანი ავტომტვირთველის შემოწმება",subtitle:"12 ივნ, 14:30",trailing:e.jsx(u,{size:18,color:"#c4c8cc",strokeWidth:1.5}),inset:0,showBorder:!0,onPress:()=>{}}),e.jsx(s,{category:"cargo_platform",status:"draft",title:"სატვირთო პლატფორმის შემოწმება",subtitle:"10 ივნ, 09:05",trailing:e.jsx(u,{size:18,color:"#c4c8cc",strokeWidth:1.5}),inset:0,onPress:()=>{}})]})};var m,g,h;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Home — time + kebab',
  render: () => <View style={{
    width: 380
  }}>
      <InspectionRow category="harness" status="completed" title="სამშენებლო აღჭურვილობის შემოწმება" subtitle="Hubble Construction" trailing="2 სთ წინ" showBorder actions={<View style={{
      paddingHorizontal: 8
    }}>
            <EllipsisVertical size={18} color="#9aa0a6" strokeWidth={1.5} />
          </View>} onPress={() => {}} />
      <InspectionRow category="excavator" status="draft" title="ექსკავატორის შემოწმება" subtitle="Tbilisi Metro" trailing="გუშინ" actions={<View style={{
      paddingHorizontal: 8
    }}>
            <EllipsisVertical size={18} color="#9aa0a6" strokeWidth={1.5} />
          </View>} onPress={() => {}} />
    </View>
}`,...(h=(g=n.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var y,f,w;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Project card — inset 0 + chevron',
  render: () => <View style={{
    width: 380,
    backgroundColor: '#f4f5f7',
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 12
  }}>
      <InspectionRow category="forklift_inspection" status="completed" title="ჩანგლიანი ავტომტვირთველის შემოწმება" subtitle="12 ივნ, 14:30" trailing={<ChevronRight size={18} color="#c4c8cc" strokeWidth={1.5} />} inset={0} showBorder onPress={() => {}} />
      <InspectionRow category="cargo_platform" status="draft" title="სატვირთო პლატფორმის შემოწმება" subtitle="10 ივნ, 09:05" trailing={<ChevronRight size={18} color="#c4c8cc" strokeWidth={1.5} />} inset={0} onPress={() => {}} />
    </View>
}`,...(w=(f=a.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};const K=["HomeStyle","CardStyle"];export{a as CardStyle,n as HomeStyle,K as __namedExportsOrder,F as default};
