(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[616],{8231:function(e,n,r){"use strict";r.d(n,{Z:function(){return te}});var t=r(5893),a=r(2809),o=r(809),s=r.n(o),i=r(266),c=r(2209),l=r(7294),u=r(1163),d=r(5596),p=r(2684),f=r(8222),h=r(6246),g=r(9163),m=r(9380),x=r(1765),j=r(1664),v=r(8625),b=r(551),Z=r(8981),w=r(9669),y=r.n(w),O=r(3);function k(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function P(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?k(Object(r),!0).forEach((function(n){(0,a.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function C(){var e=(0,c.Z)(["\n  background-color: rgb(228, 35, 76);\n  border-color: rgb(228, 35, 76);\n  font-weight: 500;\n"]);return C=function(){return e},e}function S(){var e=(0,c.Z)(["\n  margin-top: 0.8rem;\n"]);return S=function(){return e},e}function E(){var e=(0,c.Z)(["\n  padding: 1rem;\n"]);return E=function(){return e},e}var _=(0,g.ZP)(v.Z)(E()),F=g.ZP.div(S()),D=(0,g.ZP)(f.Z)(C()),z=function(){var e=(0,Z.Z)(""),n=(0,x.Z)(e,2),r=n[0],a=n[1],o=(0,Z.Z)(""),c=(0,x.Z)(o,2),u=c[0],d=c[1],p=(0,l.useState)(""),h=p[0],g=(p[1],(0,l.useState)(!1)),v=g[0],w=(g[1],(0,m.a)()),k=(w.me,w.login),C=(w.logout,(0,l.useCallback)((0,i.Z)(s().mark((function e(){var n,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y().post("".concat(O.Z.users,"/login"),{email:r,password:u},{withCredentials:!0});case 3:return n=e.sent,console.log(n.data),e.next=7,y().get("".concat(O.Z.users),{withCredentials:!0,headers:{Authorization:"Bearer "+n.data.data.token}});case 7:t=e.sent,k(P(P({},t.data.data),{},{token:n.data.data.token})),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),e.t0.response?(console.log(e.t0.response),alert(e.t0.response.data.message)):alert(e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[0,11]])}))),[r,u]));return(0,t.jsxs)(_,{onFinish:C,children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{htmlFor:"email",children:"Cat Email"}),(0,t.jsx)("br",{}),(0,t.jsx)(b.Z,{name:"email",value:r,onChange:a,required:!0})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{htmlFor:"password",children:"Cat Password"}),(0,t.jsx)("br",{}),(0,t.jsx)(b.Z,{name:"password",type:"password",value:u,onChange:d,required:!0})]}),(0,t.jsxs)(F,{children:[(0,t.jsx)(D,{type:"primary",htmlType:"submit",loading:v,children:"Login"}),(0,t.jsx)(j.default,{href:"/signup",children:(0,t.jsx)("a",{children:(0,t.jsx)(f.Z,{children:"Sign up"})})})]}),(0,t.jsx)("div",{children:(0,t.jsx)("span",{children:h})})]})};function N(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function T(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?N(Object(r),!0).forEach((function(n){(0,a.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):N(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function I(){var e=(0,c.Z)(["\n  margin-top: 10px;\n"]);return I=function(){return e},e}function q(){var e=(0,c.Z)(["\n  background-color: rgb(228, 35, 76);\n  border-color: rgb(228, 35, 76);\n  color: rgb(0, 22, 40);\n  font-weight: 500;\n  @media only screen and (max-width: 390px) {\n    position: relative;\n    left: auto;\n    bottom: auto;\n    margin-top: 150px;\n  }\n  position: absolute;\n  left: 30%;\n  bottom: 30px;\n"]);return q=function(){return e},e}function A(){var e=(0,c.Z)(["\n  text-align: center;\n  @media only screen and (max-width: 768px) {\n    font-size: 0.7rem;\n  }\n  @media only screen and (max-width: 390px) {\n    display: none;\n  }\n"]);return A=function(){return e},e}function B(){var e=(0,c.Z)(["\n  color: white;\n  font-size: 1.3rem;\n  font-weight: 700;\n"]);return B=function(){return e},e}function L(){var e=(0,c.Z)(["\n  width: inherit;\n"]);return L=function(){return e},e}function U(){var e=(0,c.Z)(["\n  text-align: center;\n"]);return U=function(){return e},e}function X(){var e=(0,c.Z)(["\n  padding: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: white;\n  font-size: 2.5rem;\n  @media only screen and (max-width: 768px) {\n    font-size: 2rem;\n  }\n  @media only screen and (max-width: 390px) {\n    font-size: 1.2rem;\n  }\n"]);return X=function(){return e},e}function H(){var e=(0,c.Z)(["\n  min-height: 100vh;\n"]);return H=function(){return e},e}var M=d.Z.Header,R=d.Z.Content,W=d.Z.Footer,Y=d.Z.Sider,G=p.Z.Meta,J=(0,g.ZP)(d.Z)(H()),K=(0,g.ZP)(M)(X()),Q=(0,g.ZP)(Y)(U()),V=(0,g.ZP)(p.Z)(L()),$=g.ZP.div(B()),ee=(0,g.ZP)(W)(A()),ne=(0,g.ZP)(f.Z)(q()),re=g.ZP.div(I()),te=function(e){var n=e.children,r=e.isSignup,a=void 0!==r&&r,o=(0,l.useState)(!0),c=o[0],p=o[1],g=(0,l.useState)(!1),x=g[0],j=g[1],v=(0,m.a)(),b=v.me,Z=v.login,w=v.logout,k=(0,l.useState)(!0),P=k[0],C=k[1],S=(0,l.useState)(!1),E=S[0],_=S[1],F=(0,l.useRef)(),D=(0,l.useCallback)((0,i.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:w();case 1:case"end":return e.stop()}}),e)}))),[]);(0,l.useEffect)((function(){b&&a&&u.default.replace("/")}),[]),(0,l.useEffect)((function(){C(!0)}),[E]);var N=(0,l.useCallback)((function(e,n){p(e)}),[c]),I=(0,l.useCallback)((function(e){j(e)}),[x]),q=(0,l.useCallback)(function(){var e=(0,i.Z)(s().mark((function e(n){var r,t,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.target.files,t=new FormData,Array.from(r).forEach((function(e){t.append("image",e)})),console.log(t.getAll("image")),e.prev=4,C(!1),e.next=8,y().post("".concat(O.Z.users,"/upload"),t,{withCredentials:!0,headers:{Authorization:"Bearer "+b.token}});case 8:a=e.sent,console.log(a),Z(T(T({},a.data.data),{},{token:b.token})),_((function(e){return!e})),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(4),e.t0.response?(console.log(e.t0.response),alert(e.t0.response.data.message)):alert(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[4,14]])})));return function(n){return e.apply(this,arguments)}}(),[b,P,E]),A=(0,l.useCallback)((function(){void 0!==F.current&&F.current.click()}),[F.current]);return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(J,{children:[b&&(0,t.jsxs)(Q,{breakpoint:"lg",collapsedWidth:"0",onBreakpoint:I,onCollapse:N,children:[(0,t.jsx)(V,{hoverable:!0,cover:(0,t.jsx)(h.Z,{alt:"user",src:b.imgUrl}),children:(0,t.jsx)(G,{title:b.email,description:b.name})}),(0,t.jsxs)(re,{children:[(0,t.jsx)("input",{type:"file",name:"image",multiple:!0,hidden:!0,ref:F,onChange:q}),!P&&(0,t.jsx)($,{children:"\uc774\ubbf8\uc9c0 \ubcc0\uacbd\uc911..."}),(0,t.jsx)(f.Z,{onClick:A,children:"Image Update"})]}),(0,t.jsx)(ne,{type:"primary",size:"large",onClick:D,children:"Logout"})]}),(0,t.jsxs)(d.Z,{children:[(0,t.jsxs)(K,{style:{display:c||!b?"flex":!c&&x?"none":"flex"},children:[(0,t.jsx)("img",{width:43,height:"auto",src:"/nestjs.svg"}),(0,t.jsx)("span",{style:{marginLeft:10},children:"User Information"})]}),(0,t.jsx)(R,{style:{margin:"45px 16px 0"},children:b||a?(0,t.jsx)(t.Fragment,{children:n}):(0,t.jsx)(z,{})}),(0,t.jsx)(ee,{children:"C.I.C \xa92021 Created by Yoon Sang Seok"})]})]})})}},8981:function(e,n,r){"use strict";var t=r(7294);n.Z=function(e){var n=(0,t.useState)(e),r=n[0],a=n[1];return[r,(0,t.useCallback)((function(e){var n=e.target.value;a(n)}),[]),a]}},7663:function(e,n,r){"use strict";r.r(n);var t=r(5893),a=r(809),o=r.n(a),s=r(266),i=r(1765),c=r(2209),l=r(7294),u=r(9008),d=r(9163),p=r(8222),f=r(8625),h=r(551),g=r(8231),m=r(8981),x=r(9669),j=r.n(x),v=r(1163),b=r(3);function Z(){var e=(0,c.Z)(["\n  background-color: rgb(228, 35, 76);\n  border-color: rgb(228, 35, 76);\n  font-weight: 500;\n"]);return Z=function(){return e},e}var w=(0,d.ZP)(p.Z)(Z());n.default=function(){var e=(0,m.Z)(""),n=(0,i.Z)(e,2),r=n[0],a=n[1],c=(0,m.Z)(""),d=(0,i.Z)(c,2),p=d[0],x=d[1],Z=(0,m.Z)(""),y=(0,i.Z)(Z,2),O=y[0],k=y[1],P=(0,l.useState)(!1),C=P[0],S=(P[1],(0,l.useCallback)((0,s.Z)(o().mark((function e(){var n,t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={email:r,name:p,password:O},console.log(n),e.prev=2,e.next=5,j().post(b.Z.users,n,{withCredentials:!0});case 5:t=e.sent,console.log(t.data),v.default.replace("/"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),e.t0.response?(console.log(e.t0.response),alert(e.t0.response.data.message)):alert(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[2,10]])}))),[r,O]));return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(u.default,{children:(0,t.jsx)("title",{children:"C.I.C"})}),(0,t.jsx)(g.Z,{isSignup:!0,children:(0,t.jsxs)(f.Z,{onFinish:S,children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{htmlFor:"email",children:"Email"}),(0,t.jsx)("br",{}),(0,t.jsx)(h.Z,{name:"email",type:"email",value:r,required:!0,onChange:a})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{htmlFor:"name",children:"Name"}),(0,t.jsx)("br",{}),(0,t.jsx)(h.Z,{name:"name",value:p,required:!0,onChange:x})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{htmlFor:"password",children:"Password"}),(0,t.jsx)("br",{}),(0,t.jsx)(h.Z,{name:"password",type:"password",value:O,required:!0,onChange:k})]}),(0,t.jsx)("div",{style:{marginTop:10},children:(0,t.jsx)(w,{type:"primary",htmlType:"submit",loading:C,children:"Sign up"})})]})})]})}},3:function(e,n,r){"use strict";var t=r(4155).env.NEXT_PUBLIC_API_HOST||"http://localhost:8000";n.Z={users:"".concat(t,"/users")}},6415:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/signup",function(){return r(7663)}])}},function(e){e.O(0,[472,774,888,179],(function(){return n=6415,e(e.s=n);var n}));var n=e.O();_N_E=n}]);