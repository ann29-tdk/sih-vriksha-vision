(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{107:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),o=n(54),l=n.n(o),r=n(20),s=n.n(r),i=n(59),u=n(35),j=n(22),b=n(15),d=(n(66),n(17)),h=n(121),p=n(36),O=n.n(p),f=n(58),x=n(25),m=n.n(x),g=n(5);m.a.workerClass=n(104).default;var v=function(){var e=Object(c.useState)([]),t=Object(b.a)(e,2),n=t[0],a=t[1],o=Object(c.useState)(null),l=Object(b.a)(o,2),r=l[0],p=l[1],x=Object(c.useState)(null),m=Object(b.a)(x,2),v=m[0],k=m[1],y=Object(c.useState)(null),C=Object(b.a)(y,2),S=C[0],w=C[1],z=Object(c.useState)(null),N=Object(b.a)(z,2),T=N[0],J=N[1],L=Object(c.useState)(0),M=Object(b.a)(L,2),A=M[0],B=M[1],D=Object(c.useState)({latitude:28.5988067,longitude:77.0339177,zoom:16}),E=Object(b.a)(D,2),F=E[0],I=E[1],Y=function(){var e=Object(u.a)(s.a.mark((function e(t){var c,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),c={title:S,desc:T,treecount:A,lat:v.lat,long:v.long},e.prev=2,e.next=5,O.a.post("https://vrikshavisionmap.onrender.com/api/pins",c);case 5:o=e.sent,a([].concat(Object(i.a)(n),[o.data])),k(null),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){(function(){var e=Object(u.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("hello"),e.next=4,O.a.get("https://vrikshavisionmap.onrender.com/api/pins");case 4:t=e.sent,console.log(t),a(t.data),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(g.jsx)("div",{style:{height:"100vh",width:"100%"},children:Object(g.jsxs)(d.c,Object(j.a)(Object(j.a)({},F),{},{mapboxApiAccessToken:"pk.eyJ1IjoiYW5uMjkiLCJhIjoiY2xid2JpbWY1MDRuZjNybzVsYjdpamZyMyJ9.kinG4Suc9BSMaefvLSEGMA",width:"100%",height:"100%",transitionDuration:"200",mapStyle:"mapbox://styles/safak/cknndpyfq268f17p53nmpwira",onViewportChange:function(e){return I(e)},onDblClick:function(e){var t=Object(b.a)(e.lngLat,2),n=t[0],c=t[1];k({lat:c,long:n})},children:[n.map((function(e){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(d.a,{latitude:e.lat,longitude:e.long,offsetLeft:-3.5*F.zoom,offsetTop:-7*F.zoom,children:Object(g.jsx)(h.a,{style:{fontSize:7*F.zoom,color:"tomato",cursor:"pointer"},onClick:function(){return t=e._id,n=e.lat,c=e.long,p(t),void I(Object(j.a)(Object(j.a)({},F),{},{latitude:n,longitude:c}));var t,n,c}})}),e._id===r&&Object(g.jsx)(d.b,{latitude:e.lat,longitude:e.long,closeButton:!0,closeOnClick:!1,onClose:function(){return p(null)},anchor:"left",children:Object(g.jsxs)("div",{className:"card",children:[Object(g.jsx)("label",{children:"Place"}),Object(g.jsx)("h4",{className:"place",children:e.title}),Object(g.jsx)("label",{children:"Review"}),Object(g.jsx)("p",{className:"desc",children:e.desc}),Object(g.jsx)("label",{children:"Treecount"}),Object(g.jsx)("div",{className:"place",children:e.treecount}),Object(g.jsx)("label",{children:Object(g.jsx)("a",{className:"link",href:"https://vriksha-vision-map-dashboard.netlify.app/",target:"/blank",children:"Information"})}),Object(g.jsxs)("span",{className:"username",children:["Created by ",Object(g.jsx)("b",{children:"Vrikshavision"})]}),Object(g.jsx)("span",{className:"date",children:Object(f.a)(e.createdAt)})]})},e._id)]})})),v&&Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(d.a,{latitude:v.lat,longitude:v.long,offsetLeft:-3.5*F.zoom,offsetTop:-7*F.zoom,children:Object(g.jsx)(h.a,{style:{fontSize:7*F.zoom,color:"tomato",cursor:"pointer"}})}),Object(g.jsx)(d.b,{latitude:v.lat,longitude:v.long,closeButton:!0,closeOnClick:!1,onClose:function(){return k(null)},anchor:"left",children:Object(g.jsx)("div",{children:Object(g.jsxs)("form",{onSubmit:Y,children:[Object(g.jsx)("label",{children:"Title"}),Object(g.jsx)("input",{placeholder:"Enter a title",autoFocus:!0,onChange:function(e){return w(e.target.value)}}),Object(g.jsx)("label",{children:"Description"}),Object(g.jsx)("textarea",{placeholder:"Say us something about this place.",onChange:function(e){return J(e.target.value)}}),Object(g.jsx)("label",{children:"Tree Count"}),Object(g.jsx)("input",{type:"number",placeholder:"Enter Tree Count",autoFocus:!0,onChange:function(e){return B(e.target.value)}}),Object(g.jsx)("button",{type:"submit",className:"submitButton",children:"Add Pin"})]})})})]}),Object(g.jsx)("button",{className:"button logout",onClick:function(){window.location.replace("https://vriksha-vision.netlify.app")},children:"Log out"})]}))})};l.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(v,{})}),document.getElementById("root"))},66:function(e,t,n){}},[[107,1,2]]]);
//# sourceMappingURL=main.c82186dc.chunk.js.map