"use strict";(self.webpackChunkpremier_league_api=self.webpackChunkpremier_league_api||[]).push([[6211],{96211:(U,O,_)=>{_.r(O),_.d(O,{LoginEE:()=>I});var E=_(74081),P=_(84366),a=_(93415),n=_(10701),o=_(32370),l=_(94050),i=_(61020),r=_(40464),d=_(19003),D=_(42816),L=_(47796),M=_(15816),h=_(97442),s=_(13576),C=_(87830),B=_(47184),t=_(364),g=_(27279),x=_(59461),j=_(71563),f=_(49204),c=_(47853),y=_(74919),S=_(29206),$=_(98934),N=_(43433),u=_(75719),Z=_(8175),F=_(6078),Q=_(51943),Y=_(55783),e=_(92249),z=_(41942),G=_(22919),H=_(53915),J=_(75041),V=_(30200),X=_(91379),p=_(33299),k=_(33409),w=_(63645),b=_(7988),q=_(7055),__=_(26757),E_=_(58311),s_=_(29510),t_=_(16946),a_=_(10124),n_=_(69530),O_=_(86961),P_=_(51527),d_=_(19764),D_=_(42982),M_=_(26126);const R=(0,d.default)(P.i)`
  flex: 1;
`,I=v=>{const{formatMessage:T}=(0,i.Z)(),{get:W}=(0,l.kY)(),{isLoading:m,data:A=[]}=(0,r.useQuery)(["ee","providers"],async()=>{const{data:K}=await W("/admin/providers");return K},{enabled:window.strapi.features.isEnabled(window.strapi.features.SSO)});return!window.strapi.features.isEnabled(window.strapi.features.SSO)||!m&&A.length===0?(0,E.jsx)(D.L,{...v}):(0,E.jsx)(D.L,{...v,children:(0,E.jsx)(a.x,{paddingTop:7,children:(0,E.jsxs)(n.k,{direction:"column",alignItems:"stretch",gap:7,children:[(0,E.jsxs)(n.k,{children:[(0,E.jsx)(R,{}),(0,E.jsx)(a.x,{paddingLeft:3,paddingRight:3,children:(0,E.jsx)(o.Z,{variant:"sigma",textColor:"neutral600",children:T({id:"Auth.login.sso.divider"})})}),(0,E.jsx)(R,{})]}),(0,E.jsx)(L.S,{providers:A,displayAllProviders:!1})]})})})}},47796:(U,O,_)=>{_.d(O,{S:()=>D});var E=_(74081),P=_(23298),a=_(74577),n=_(2981),o=_(10701),l=_(32370),i=_(61020),r=_(47533),d=_(19003);const D=({providers:s,displayAllProviders:C})=>{const{formatMessage:B}=(0,i.Z)();return C?(0,E.jsx)(P.r,{gap:4,children:s.map(t=>(0,E.jsx)(a.P,{col:4,children:(0,E.jsx)(M,{provider:t})},t.uid))}):s.length>2&&!C?(0,E.jsxs)(P.r,{gap:4,children:[s.slice(0,2).map(t=>(0,E.jsx)(a.P,{col:4,children:(0,E.jsx)(M,{provider:t})},t.uid)),(0,E.jsx)(a.P,{col:4,children:(0,E.jsx)(n.u,{label:B({id:"global.see-more"}),children:(0,E.jsx)(h,{as:r.rU,to:"/auth/providers",children:(0,E.jsx)("span",{"aria-hidden":!0,children:"\u2022\u2022\u2022"})})})})]}):(0,E.jsx)(L,{justifyContent:"center",children:s.map(t=>(0,E.jsx)(M,{provider:t},t.uid))})},L=(0,d.default)(o.k)`
  & a:not(:first-child):not(:last-child) {
    margin: 0 ${({theme:s})=>s.spaces[2]};
  }
  & a:first-child {
    margin-right: ${({theme:s})=>s.spaces[2]};
  }
  & a:last-child {
    margin-left: ${({theme:s})=>s.spaces[2]};
  }
`,M=({provider:s})=>(0,E.jsx)(n.u,{label:s.displayName,children:(0,E.jsx)(h,{href:`${window.strapi.backendURL}/admin/connect/${s.uid}`,children:s.icon?(0,E.jsx)("img",{src:s.icon,"aria-hidden":!0,alt:"",height:"32px"}):(0,E.jsx)(l.Z,{children:s.displayName})})}),h=d.default.a`
  width: ${136/16}rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${48/16}rem;
  border: 1px solid ${({theme:s})=>s.colors.neutral150};
  border-radius: ${({theme:s})=>s.borderRadius};
  text-decoration: inherit;
  &:link {
    text-decoration: none;
  }
  color: ${({theme:s})=>s.colors.neutral600};
`}}]);
