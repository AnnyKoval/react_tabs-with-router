(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{17:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var a=c(9),n=c.n(a),s=c(4),i=c(2),j=c(0),b=c.n(j),r=c(6),l=c.n(r),o=c(1),d=b.a.memo((function(e){var t=e.to,c=e.children;return Object(o.jsx)(s.c,{to:t,className:function(e){var t=e.isActive;return l()("navbar-item",{"is-active":t})},children:c})})),m=b.a.memo((function(){return Object(o.jsx)("nav",{className:"navbar is-light is-fixed-top is-mobile has-shadow","data-cy":"Nav",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"navbar-brand",children:[Object(o.jsx)(d,{to:"/",children:"Home"}),Object(o.jsx)(d,{to:"/tabs",children:"Tabs"})]})})})})),x=(c(15),c(16),c(17),b.a.memo((function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(m,{}),Object(o.jsx)("div",{className:"section",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsx)(i.b,{})})})]})}))),h=b.a.memo((function(){return Object(o.jsx)("h1",{className:"title",children:"Home page"})})),O=b.a.memo((function(){return Object(o.jsx)("h1",{className:"title",children:"Page not found"})})),u=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],v=b.a.memo((function(e){var t=e.tab,c=Object(i.i)().tabId;return Object(o.jsx)("li",{className:l()({"is-active":c===t.id}),"data-cy":"Tab",children:Object(o.jsx)(s.b,{to:"../".concat(t.id),"data-cy":"TabLink",children:t.title})})})),f=b.a.memo((function(){var e=Object(i.i)().tabId,t=Object(j.useMemo)((function(){return u.find((function(t){return t.id===e}))}),[u,e]);return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h1",{className:"title",children:"Tabs page"}),Object(o.jsxs)("div",{"data-cy":"TabsComponent",children:[Object(o.jsx)("div",{className:"tabs is-boxed",children:Object(o.jsx)("ul",{children:u.map((function(e){return Object(o.jsx)(v,{tab:e},e.id)}))})}),Object(o.jsx)("div",{className:"block","data-cy":"TabContent",children:t?t.content:"Please select a tab"})]})]})}));n.a.render(Object(o.jsx)(s.a,{children:Object(o.jsx)(i.e,{children:Object(o.jsxs)(i.c,{path:"/",element:Object(o.jsx)(x,{}),children:[Object(o.jsxs)(i.c,{path:"tabs",children:[Object(o.jsx)(i.c,{index:!0,element:Object(o.jsx)(f,{})}),Object(o.jsx)(i.c,{path:":tabId",element:Object(o.jsx)(f,{})})]}),Object(o.jsx)(i.c,{index:!0,element:Object(o.jsx)(h,{})}),Object(o.jsx)(i.c,{path:"/home",element:Object(o.jsx)(i.a,{to:"/",replace:!0})}),Object(o.jsx)(i.c,{path:"*",element:Object(o.jsx)(O,{})})]})})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.600c96c6.chunk.js.map