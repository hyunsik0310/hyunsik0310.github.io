(this.webpackJsonpshop=this.webpackJsonpshop||[]).push([[0],{69:function(e,t,c){},70:function(e,t,c){},71:function(e,t,c){},98:function(e,t,c){"use strict";c.r(t);var n,s,i=c(0),a=c.n(i),r=c(19),j=c.n(r),o=(c(69),c(44)),l=c(16),b=c(106),d=c(103),h=c(107),O=c(105),u=c(104),x=c(63),p=(c(70),[{id:0,title:"White and Black",content:"Born in France",price:12e4,src:"https://codingapple1.github.io/shop/shoes1.jpg"},{id:1,title:"Red Knit",content:"Born in Seoul",price:11e4,src:"https://codingapple1.github.io/shop/shoes2.jpg"},{id:2,title:"Grey Yordan",content:"Born in the States",price:13e4,src:"https://codingapple1.github.io/shop/shoes3.jpg"}]),f=c(41),g=c(7),m=c(42),v=(c(71),c(2));m.a.div(n||(n=Object(f.a)(["\n  padding-top: 20px;\n"]))),m.a.h4(s||(s=Object(f.a)(["\n  font-size: 25px;\n  color: ",";\n"])),(function(e){return e.cl}));var N=function(e){var t=Object(i.useState)(!0),c=Object(l.a)(t,2),n=c[0],s=c[1],a=Object(i.useState)(""),r=Object(l.a)(a,2),j=r[0],o=r[1];Object(i.useEffect)((function(){var e=setTimeout((function(){s(!1)}),2e3);return function(){clearTimeout(e)}}),[n]);var b=Object(g.g)().id,d=e.shoes.find((function(e){return e.id==b})),h=Object(g.f)();return Object(v.jsxs)("div",{className:"container",children:[Object(v.jsx)("box",{children:Object(v.jsx)("namebox",{className:"red"})}),Object(v.jsx)("input",{onChange:function(e){o(e.target.value)}}),Object(v.jsx)("p",{children:j}),!0===n?Object(v.jsx)(O,{}):null,Object(v.jsxs)("div",{className:"row",children:[Object(v.jsx)("div",{className:"col-md-6",children:Object(v.jsx)("img",{src:"https://codingapple1.github.io/shop/shoes"+(d.id+1)+".jpg",width:"100%"})}),Object(v.jsxs)("div",{className:"col-md-6 mt-4",children:[Object(v.jsx)("h4",{className:"pt-5",children:d.title}),Object(v.jsxs)("p",{children:["\uc0c1\ud488\uba85 : ",d.content]}),Object(v.jsxs)("p",{children:["\uac00\uaca9 : ",d.price," \uc6d0"]}),Object(v.jsx)(u,{"\uc7ac\uace0":e.\uc7ac\uace0}),Object(v.jsx)("button",{className:"btn btn-danger",onClick:function(){e.\uc7ac\uace0\ubcc0\uacbd([9,10,11])},children:"\uc8fc\ubb38\ud558\uae30"}),"\xa0",Object(v.jsx)("button",{className:"btn btn-danger",onClick:function(){h.goBack()},children:"\ub4a4\ub85c\uac00\uae30"})]})]})]});function O(){return Object(v.jsx)("div",{className:"my-alert2",children:Object(v.jsx)("p",{children:"\uc7ac\uace0\uac00 \uc5bc\ub9c8 \ub0a8\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4."})})}function u(e){var t=Object(i.useContext)(I);return Object(v.jsxs)("div",{children:[Object(v.jsxs)("p",{children:["\uc7ac\uace0\ub7c9 : ",e.\uc7ac\uace0[0]]}),Object(v.jsxs)("p",{children:["useContext \uc7ac\uace0 : ",t]})]})}},k=c(59),C=c.n(k),S=c(60),y=c.n(S);var w=function(e){var t=e.type,c=e.color,n=e.message;return Object(v.jsx)("div",{class:"contentWrap",children:Object(v.jsxs)("div",{style:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},children:[Object(v.jsx)("h2",{children:n})," ",Object(v.jsx)("h2",{children:"\ucc3d\uc744 \ub2eb\uc9c0 \ub9d0\uc544\uc8fc\uc138\uc694."}),Object(v.jsx)(y.a,{type:t,color:c,height:"80%",width:"80%"})]})})},B=c(17),I=Object(i.createContext)();function L(e){var t=Object(i.useState)(!1),c=Object(l.a)(t,2),n=(c[0],c[1]),s=Object(g.f)(),a=Object(i.useCallback)((function(e){return function(){s.push(e)}}),[]);return Object(v.jsxs)("div",{className:"col-md-4",onClick:a("/detail/"+e.index),onMouseEnter:function(){return n(!0)},onMouseLeave:function(){return n(!1)},children:[Object(v.jsx)("img",{src:"https://codingapple1.github.io/shop/shoes"+(e.index+1)+".jpg",width:"100%"}),Object(v.jsx)("h4",{children:e.shoes.title}),Object(v.jsxs)("p",{children:[e.shoes.content," & ",e.shoes.price]}),Object(v.jsx)(T,{})]})}function T(){var e=Object(i.useContext)(I);return Object(v.jsxs)("p",{children:["\uc7ac\uace0 : ",e[0]]})}var F=function(){var e=Object(i.useState)(p),t=Object(l.a)(e,2),c=t[0],n=t[1],s=Object(i.useState)(2),a=Object(l.a)(s,2),r=a[0],j=a[1],f=Object(i.useState)([10,11,12]),m=Object(l.a)(f,2),k=m[0],S=m[1],y=Object(i.useState)(null),T=Object(l.a)(y,2),F=T[0];return T[1],Object(v.jsxs)("div",{className:"App",children:[Object(v.jsx)(b.a,{bg:"light",expand:"lg",children:Object(v.jsxs)(d.a,{children:[Object(v.jsx)(b.a.Brand,{children:Object(v.jsx)(B.b,{to:"/",children:"sikushop"})}),Object(v.jsx)(b.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(v.jsx)(b.a.Collapse,{id:"basic-navbar-nav",children:Object(v.jsxs)(h.a,{className:"me-auto",children:[Object(v.jsx)(h.a.Link,{as:B.b,to:"/",children:"Home"}),Object(v.jsx)(h.a.Link,{as:B.b,to:"/detail",children:"Detail"}),Object(v.jsxs)(O.a,{title:"Dropdown",id:"basic-nav-dropdown",children:[Object(v.jsx)(O.a.Item,{href:"#action/3.1",children:"Action"}),Object(v.jsx)(O.a.Item,{href:"#action/3.2",children:"Another action"}),Object(v.jsx)(O.a.Item,{href:"#action/3.3",children:"Something"}),Object(v.jsx)(O.a.Divider,{}),Object(v.jsx)(O.a.Item,{href:"#action/3.4",children:"Separated link"})]})]})})]})}),Object(v.jsxs)(g.c,{children:[Object(v.jsxs)(g.a,{exact:!0,path:"/",children:[Object(v.jsxs)(u.a,{className:"background",children:[Object(v.jsx)("h1",{children:"20% Season Off"}),Object(v.jsx)("p",{children:"This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information."}),Object(v.jsx)("p",{children:Object(v.jsx)(x.a,{variant:"primary",children:"Learn more"})})]}),Object(v.jsxs)("div",{className:"container",children:[Object(v.jsx)(I.Provider,{value:k,children:Object(v.jsx)("div",{className:"row",children:c.map((function(e,t){return Object(v.jsx)(L,{shoes:e,index:t},t)}))})}),Object(v.jsx)("button",{className:"btn btn-primary",onClick:function(){if(console.log(r),C.a.get("https://codingapple1.github.io/shop/data"+r+".json").then((function(e){n([].concat(Object(o.a)(c),Object(o.a)(e.data))),j(r+1),console.log(c)})).catch((function(){console.log("\uc2e4\ud328")})),F)return Object(v.jsx)(w,{type:"spin",color:"RGB \uac12",message:"aa"})},children:"\ub354\ubcf4\uae30"})]})]}),Object(v.jsx)(g.a,{exact:!0,path:"/detail/:id",children:Object(v.jsx)(I.Provider,{value:k,children:Object(v.jsx)(N,{shoes:c,"\uc7ac\uace0":k,"\uc7ac\uace0\ubcc0\uacbd":S})})}),Object(v.jsx)(g.a,{path:"/:id",children:Object(v.jsx)("div",{children:"\uc544\ubb34\uac70\ub098 \uc801\uc5c8\uc744\ub54c"})})]})]})},D=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,108)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,a=t.getTTFB;c(e),n(e),s(e),i(e),a(e)}))};j.a.render(Object(v.jsx)(a.a.StrictMode,{children:Object(v.jsx)(B.a,{children:Object(v.jsx)(F,{})})}),document.getElementById("root")),D()}},[[98,1,2]]]);
//# sourceMappingURL=main.8ce1d679.chunk.js.map