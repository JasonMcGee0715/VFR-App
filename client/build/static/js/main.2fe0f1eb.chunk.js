(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{80:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){},91:function(e,t,n){},92:function(e,t,n){},93:function(e,t,n){},94:function(e,t,n){"use strict";n.r(t);var a=n(2),s=n(0),c=n.n(s),r=n(11),i=n.n(r),l=(n(80),n(81),n(82),n(21)),o=n(41),u=n.n(o),j=function(){return!!u.a.parse(document.cookie).loggedIn};var b=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"header",children:[Object(a.jsx)("h1",{className:"title",children:"Weeble."}),Object(a.jsx)("nav",{children:Object(a.jsxs)("ul",{className:"list",children:[Object(a.jsx)("li",{children:Object(a.jsx)(l.b,{to:"/",children:"Getting Started"})}),Object(a.jsx)("li",{children:Object(a.jsx)(l.b,{to:"/search",children:"Search"})}),j()&&Object(a.jsx)("li",{children:Object(a.jsx)(l.b,{to:"/newbusiness",children:"Add Business"})}),j()?Object(a.jsx)("li",{onClick:function(){document.cookie="loggedIn=",window.location.replace("/login")},children:"Logout"}):Object(a.jsx)("li",{children:Object(a.jsx)(l.b,{to:"/login",children:"Login"})})]})})]})})},d=(n(44),n(65),n(9)),p=n(18),h=n.n(p),m=n(26),O=n(8),f=(n(88),n(131)),g=n(148),x=n(138);var v=function(){var e=Object(s.useState)([]),t=Object(O.a)(e,2),n=(t[0],t[1]);Object(s.useEffect)((function(){c().then((function(e){return n(e)})).catch((function(e){return console.log(e)}))}),[]);var c=function(){var e=Object(m.a)(h.a.mark((function e(){var t,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/users");case 2:return t=e.sent,e.next=5,t.json();case 5:if(n=e.sent,200===t.status){e.next=8;break}throw Error(n.message);case 8:return e.abrupt("return",n);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.jsx)("div",{className:"body",children:Object(a.jsx)(f.a,{maxWidth:"sm",children:Object(a.jsxs)("form",{className:"login-form",onSubmit:function(e){e.preventDefault(),document.cookie="loggedIn = true; max-age = 60*1000",window.location.replace("/")},children:[Object(a.jsx)(g.a,{required:!0,name:"userName",placeholder:"Username",type:"text"}),Object(a.jsx)(g.a,{required:!0,name:"password",placeholder:"Password",type:"password",style:{marginTop:15}}),Object(a.jsxs)("div",{className:"buttons",children:[Object(a.jsx)(x.a,{type:"submit",className:"login-button",variant:"contained",style:{background:"#E84855",color:"#fbf7ef"},children:"Login"}),Object(a.jsx)(x.a,{type:"submit",className:"login-button",variant:"contained",style:{background:"#E84855",color:"#fbf7ef"},children:Object(a.jsx)(l.b,{to:"/signUp",children:"Signup"})})]})]})})})};n(89);var y=function(){return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("div",{className:"imgContainer"}),Object(a.jsxs)("div",{className:"intro",children:[Object(a.jsx)("span",{children:"Every Veteran or First Responder has gone through the interaction of trying to find out if an establishment offers discounts to you. Sometimes these efforts can be a real pain if the person on the other side of the counter has to start searching for answers."}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsxs)("span",{children:["Intoducing"," ",Object(a.jsx)("span",{style:{color:"#49a4d1",fontWeight:"bold"},children:"Weeble!"})," ","An app created to help bridge the gap between Veterans and First Responders and their potential discounts."]}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("span",{children:"It's as easy as 1, 2, 3:"}),Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:"Login or Signup to the app with basic information."}),Object(a.jsx)("br",{}),Object(a.jsx)("li",{children:"Search for known discounts from places near you by name, city, and zip."}),Object(a.jsx)("br",{}),Object(a.jsx)("li",{children:"If you happen to run across a place that has discounts, but does not show up...Add it!"})]}),Object(a.jsxs)("div",{className:"intro-buttons",children:[Object(a.jsx)(x.a,{type:"submit",className:"intro-button",variant:"contained",style:{background:"#E84855",color:"#fbf7ef"},children:Object(a.jsx)(l.b,{to:"/login",children:"Login"})}),Object(a.jsx)(x.a,{type:"submit",className:"intro-button",variant:"contained",style:{background:"#E84855",color:"#fbf7ef"},children:Object(a.jsx)(l.b,{to:"/signUp",children:"Sign up"})})]})]})]})};n(90);var N=function(){var e=Object(s.useState)(null),t=Object(O.a)(e,2),n=t[0],c=t[1],r=Object(s.useState)(null),i=Object(O.a)(r,2),l=i[0],o=i[1],u=Object(s.useState)(null),j=Object(O.a)(u,2),b=j[0],d=j[1],p=Object(s.useState)(null),v=Object(O.a)(p,2),y=v[0],N=v[1],w=Object(s.useState)(null),C=Object(O.a)(w,2),S=C[0],R=C[1],I=Object(s.useState)(null),T=Object(O.a)(I,2),k=T[0],B=T[1],A=Object(s.useState)(null),U=Object(O.a)(A,2),q=U[0],L=U[1],P=Object(s.useState)(null),D=Object(O.a)(P,2),z=D[0],E=D[1],F=Object(s.useState)(null),M=Object(O.a)(F,2),W=M[0],Z=M[1],J=Object(s.useState)(null),K=Object(O.a)(J,2),Q=K[0],V=K[1],G=function(e){"firstName"===e.target.name&&c(e.target.value),"lastName"===e.target.name&&o(e.target.value),"city"===e.target.name&&d(e.target.value),"state"===e.target.name&&N(e.target.value),"county"===e.target.name&&R(e.target.value),"zip"===e.target.name&&B(e.target.value),"phone"===e.target.name&&L(e.target.value),"email"===e.target.name&&E(e.target.value),"userName"===e.target.name&&Z(e.target.value),"password"===e.target.name&&V(e.target.value)},H=Object(s.useRef)(null),X=Object(s.useRef)(null),Y=Object(s.useRef)(null),$=Object(s.useRef)(null),_=Object(s.useRef)(null),ee=Object(s.useRef)(null),te=Object(s.useRef)(null),ne=Object(s.useRef)(null),ae=Object(s.useRef)(null),se=Object(s.useRef)(null);return Object(a.jsx)("div",{children:Object(a.jsx)(f.a,{maxWidth:"xs",className:"signUpContainer",children:Object(a.jsxs)("form",{className:"signUpForm",onSubmit:function(e){e.preventDefault(),Object(m.a)(h.a.mark((function e(){var t,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/users",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({firstName:n,lastName:l,city:b,state:y,county:S,zip:k,phone:q,email:z,userName:W,password:Q})});case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,console.log("Response",a);case 7:case"end":return e.stop()}}),e)})))()},children:[Object(a.jsx)(g.a,{className:"signUpInput",required:!0,onChange:G,inputRef:H,name:"firstName",placeholder:"First Name",type:"text"}),Object(a.jsx)(g.a,{className:"signUpInput",required:!0,onChange:G,inputRef:X,name:"lastName",placeholder:"Last Name",type:"text",style:{marginTop:15}}),Object(a.jsx)(g.a,{className:"signUpInput",required:!0,onChange:G,inputRef:Y,name:"city",placeholder:"City",type:"text",style:{marginTop:15}}),Object(a.jsx)(g.a,{className:"signUpInput",required:!0,onChange:G,inputRef:$,name:"state",placeholder:"State",type:"text",style:{marginTop:15}}),Object(a.jsx)(g.a,{className:"signUpInput",required:!0,onChange:G,inputRef:_,name:"county",placeholder:"County",type:"text",style:{marginTop:15}}),Object(a.jsx)(g.a,{className:"signUpInput",required:!0,onChange:G,inputRef:ee,name:"zip",placeholder:"Zip",type:"text",style:{marginTop:15}}),Object(a.jsx)(g.a,{className:"signUpInput",required:!0,onChange:G,inputRef:te,name:"phone",placeholder:"Phone",type:"text",style:{marginTop:15}}),Object(a.jsx)(g.a,{className:"signUpInput",required:!0,onChange:G,inputRef:ne,name:"email",placeholder:"Email",type:"text",style:{marginTop:15}}),Object(a.jsx)(g.a,{className:"signUpInput",required:!0,onChange:G,inputRef:ae,name:"userName",placeholder:"User Name",type:"text",style:{marginTop:15}}),Object(a.jsx)(g.a,{className:"signUpInput",required:!0,onChange:G,inputRef:se,name:"password",placeholder:"Password",type:"password",style:{marginTop:15}}),Object(a.jsx)("div",{className:"newUserButton",children:Object(a.jsx)(x.a,{type:"submit",className:"createUser-button",variant:"contained",style:{background:"#E84855",color:"whitesmoke"},onClick:function(){setTimeout((function(){H.current.value="",X.current.value="",Y.current.value="",$.current.value="",_.current.value="",ee.current.value="",te.current.value="",ne.current.value="",ae.current.value="",se.current.value=""}),100)},children:"Create New User"})})]})})})},w=(n(91),n(139));var C=function(){var e=Object(s.useState)(""),t=Object(O.a)(e,2),n=t[0],c=t[1],r=Object(s.useState)(""),i=Object(O.a)(r,2),l=i[0],o=i[1],u=Object(s.useState)(""),j=Object(O.a)(u,2),b=j[0],d=j[1],p=Object(s.useState)(""),v=Object(O.a)(p,2),y=v[0],N=v[1],C=Object(s.useState)(""),S=Object(O.a)(C,2),R=S[0],I=S[1],T=Object(s.useState)(""),k=Object(O.a)(T,2),B=k[0],A=k[1],U=Object(s.useState)(""),q=Object(O.a)(U,2),L=q[0],P=q[1],D=function(e){"name"===e.target.name&&c(e.target.value),"address"===e.target.name&&o(e.target.value),"city"===e.target.name&&d(e.target.value),"state"===e.target.name&&N(e.target.value),"zip"===e.target.name&&I(e.target.value),"chain"===e.target.name&&A(e.target.value),"militaryDiscount"===e.target.name&&P(e.target.value)},z=Object(s.useRef)(null),E=Object(s.useRef)(null),F=Object(s.useRef)(null),M=Object(s.useRef)(null),W=Object(s.useRef)(null),Z=Object(s.useRef)(null),J=Object(s.useRef)(null);return Object(a.jsx)("div",{children:Object(a.jsx)(f.a,{maxWidth:"xs",className:"newBusinessContainer",children:Object(a.jsxs)("form",{className:"newBusinessForm",onSubmit:function(e){e.preventDefault(),Object(m.a)(h.a.mark((function e(){var t,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/businesses",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({name:n,address:l,city:b,state:y,zip:R,chain:B,militaryDiscount:L})});case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,console.log("Response",a);case 7:case"end":return e.stop()}}),e)})))()},children:[Object(a.jsx)(w.a,{style:{marginTop:15,fontFamily:"IBM Plex Mono"},children:"Provide some basic info for our records..."}),Object(a.jsx)(g.a,{className:"newBusinessInput",required:!0,onChange:D,inputRef:z,name:"name",placeholder:"Business Name",type:"text",style:{marginTop:20}}),Object(a.jsx)(g.a,{className:"newBusinessInput",required:!0,onChange:D,inputRef:E,name:"address",placeholder:"Address",type:"text",style:{marginTop:15}}),Object(a.jsx)(g.a,{className:"newBusinessInput",required:!0,onChange:D,inputRef:F,name:"city",placeholder:"City",type:"text",style:{marginTop:15}}),Object(a.jsx)(g.a,{className:"newBusinessInput",required:!0,onChange:D,inputRef:M,name:"state",placeholder:"State",type:"text",style:{marginTop:15}}),Object(a.jsx)(g.a,{className:"newBusinessInput",required:!0,onChange:D,inputRef:W,name:"zip",placeholder:"Zip",type:"text",style:{marginTop:15}}),Object(a.jsx)(g.a,{className:"newBusinessInput",required:!0,onChange:D,inputRef:Z,name:"chain",placeholder:"Is this business a chain?",type:"text",style:{marginTop:15}}),Object(a.jsx)(w.a,{style:{marginTop:20,fontFamily:"IBM Plex Mono"},children:"And now, for the important part..."}),Object(a.jsx)(g.a,{className:"newBusinessInput",required:!0,onChange:D,inputRef:J,name:"militaryDiscount",placeholder:"What's their Discount?",type:"text",style:{marginTop:20}}),Object(a.jsx)("div",{className:"newBusinessButton",children:Object(a.jsx)(x.a,{type:"submit",className:"createBusiness-button",variant:"contained",style:{background:"#E84855",color:"#fbf7ef",fontFamily:"IBM Plex Mono"},onClick:function(){setTimeout((function(){z.current.value="",E.current.value="",F.current.value="",M.current.value="",W.current.value="",Z.current.value="",J.current.value=""}),100)},children:"Add Business"})})]})})})},S=(n(92),n(52));var R=function(e){var t=e.lat,n=e.lng,s={lat:Number(t),lng:Number(n)};return Object(a.jsx)("div",{children:Object(a.jsx)(S.b,{googleMapsApiKey:"AIzaSyC8r2IDLhUdDgjAinNaflgkyQTxZO2Ne - k",children:Object(a.jsx)(S.a,{mapContainerStyle:{height:"51.5vh",width:"90%"},zoom:15,center:s,children:Object(a.jsx)(S.c,{position:{lat:Number(t),lng:Number(n)}})})})})},I=(n(93),n(137)),T=n(141),k=n(145),B=n(144),A=n(140),U=n(142),q=n(147),L=n(143),P=n(58),D=n.n(P);var z=function(){var e=Object(s.useState)([]),t=Object(O.a)(e,2),n=t[0],r=t[1],i=Object(s.useState)(""),l=Object(O.a)(i,2),o=l[0],u=(l[1],Object(s.useState)("")),j=Object(O.a)(u,2),b=j[0],d=(j[1],Object(s.useState)("")),p=Object(O.a)(d,2),f=p[0],v=(p[1],Object(s.useState)([])),y=Object(O.a)(v,2),N=y[0],w=y[1],C=Object(s.useState)(),S=Object(O.a)(C,2),P=S[0],z=S[1],E=Object(s.useState)(""),F=Object(O.a)(E,2),M=F[0],W=F[1],Z=Object(s.useState)(null),J=Object(O.a)(Z,2),K=J[0],Q=J[1],V=Object(s.useState)(null),G=Object(O.a)(V,2),H=G[0],X=G[1];Object(s.useEffect)((function(){Y().then((function(e){return r(e)})).catch((function(e){return console.log(e)}))}),[]);var Y=function(){var e=Object(m.a)(h.a.mark((function e(){var t,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/businesses");case 2:return t=e.sent,e.next=5,t.json();case 5:if(n=e.sent,200===t.status){e.next=8;break}throw Error(n.message);case 8:return e.abrupt("return",n);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),$=function(e){if("name"===e.target.name){var t=e.target.value,a=n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));w(a)}if("zip"===e.target.name){var s=e.target.value,c=n.filter((function(e){return e.zip.toLowerCase().includes(s.toLowerCase())}));w(c)}if("city"===e.target.name){var r=e.target.value,i=n.filter((function(e){return e.city.toLowerCase().includes(r.toLowerCase())}));w(i)}},_=Object(s.useRef)(null),ee=Object(s.useRef)(null),te=Object(s.useRef)(null),ne=c.a.useState(0),ae=Object(O.a)(ne,2),se=ae[0],ce=ae[1],re=c.a.useState(10),ie=Object(O.a)(re,2),le=ie[0],oe=ie[1];return D.a.setApiKey("AIzaSyC8r2IDLhUdDgjAinNaflgkyQTxZO2Ne - k"),D.a.fromAddress(M).then((function(e){var t=e.results[0].geometry.location,n=t.lat,a=t.lng;console.log(n,a),Q(n),X(a)}),(function(e){console.error(e)})),Object(a.jsx)("div",{children:Object(a.jsxs)("div",{className:"mainContainer",children:[Object(a.jsx)("span",{style:{textAlign:"center",fontSize:"26px",color:"#141313"},children:"Search for Businesses"}),Object(a.jsxs)("div",{className:"searchContainer",children:[Object(a.jsx)("form",{className:"inputAndButton",onSubmit:function(e){e.preventDefault();var t=n.filter((function(e){return e.name.toLowerCase().includes(o.toLowerCase())}));w(t)},children:Object(a.jsx)(g.a,{className:"BusinessInput",variant:"outlined",onChange:$,inputRef:_,name:"name",placeholder:"Business Name",type:"text",style:{marginTop:20}})}),Object(a.jsx)("form",{className:"inputAndButton",onSubmit:function(e){e.preventDefault();var t=n.filter((function(e){return e.zip===b}));w(t)},children:Object(a.jsx)(g.a,{className:"ZipInput",variant:"outlined",onChange:$,inputRef:ee,name:"zip",placeholder:"Zip Code",type:"text",style:{marginTop:20}})}),Object(a.jsx)("form",{className:"inputAndButton",onSubmit:function(e){e.preventDefault();var t=n.filter((function(e){return e.city===f}));w(t)},children:Object(a.jsx)(g.a,{className:"CityInput",variant:"outlined",onChange:$,inputRef:te,name:"city",placeholder:"City",type:"text",style:{marginTop:20}})}),Object(a.jsx)("div",{children:Object(a.jsx)(x.a,{className:"resetButton",variant:"contained",style:{background:"#E84855",color:"#fbf7ef",marginTop:"15px",width:"65%",left:"16%"},onClick:function(){setTimeout((function(){_.current.value="",ee.current.value="",te.current.value=""}),100)},children:"Reset"})})]}),Object(a.jsxs)("div",{className:"showBusinessAndMap",children:[Object(a.jsxs)("div",{className:"showBusiness",children:[Object(a.jsx)(I.a,{children:Object(a.jsx)(A.a,{style:{height:470},children:Object(a.jsxs)(T.a,{stickyHeader:!0,"aria-label":"sticky table",children:[Object(a.jsx)(U.a,{children:Object(a.jsxs)(L.a,{children:[Object(a.jsx)(B.a,{align:"left",children:"Name"}),Object(a.jsx)(B.a,{align:"left",children:"Address"}),Object(a.jsx)(B.a,{align:"left",children:"City"}),Object(a.jsx)(B.a,{align:"left",children:"State"}),Object(a.jsx)(B.a,{align:"left",children:"Zip"}),Object(a.jsx)(B.a,{align:"left",children:"Chain"}),Object(a.jsx)(B.a,{align:"left",children:"Military Discount"})]})}),Object(a.jsx)(k.a,{children:N.slice(se*le,se*le+le).map((function(e,t){return Object(a.jsxs)(L.a,{hover:!0,role:"checkbox",tabIndex:-1,onClick:function(e){return function(e){console.log(e);var t=N[Number(e)];z(t),console.log(P);var n=t.address;W(n),console.log(M)}(t)},children:[Object(a.jsx)(B.a,{align:"left",children:e.name}),Object(a.jsx)(B.a,{align:"left",children:e.address}),Object(a.jsx)(B.a,{align:"left",children:e.city}),Object(a.jsx)(B.a,{align:"left",children:e.state}),Object(a.jsx)(B.a,{align:"left",children:e.zip}),Object(a.jsx)(B.a,{align:"left",children:e.chain}),Object(a.jsx)(B.a,{align:"left",children:e.militaryDiscount})]},t)}))})]})})}),Object(a.jsx)(q.a,{rowsPerPageOptions:[10,25,100],component:"div",count:N.length,rowsPerPage:le,page:se,onChangePage:function(e,t){ce(t)},onChangeRowsPerPage:function(e){oe(+e.target.value),ce(0)}})]}),Object(a.jsx)("div",{className:"showMap",children:Object(a.jsx)(R,{lat:K,lng:H})})]})]})})},E=function(){return Object(a.jsxs)(d.d,{children:[Object(a.jsx)(d.b,{exact:!0,path:"/",component:y}),Object(a.jsx)(d.b,{path:"/login",component:v}),Object(a.jsx)(d.b,{path:"/signUp",component:N}),Object(a.jsx)(d.b,{path:"/newbusiness",component:C}),Object(a.jsx)(d.b,{path:"/search",component:z})]})};var F=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)(l.a,{children:[Object(a.jsx)(b,{}),Object(a.jsx)(E,{})]})})},M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,150)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),s(e),c(e),r(e)}))};i.a.render(Object(a.jsx)(F,{}),document.getElementById("root")),M()}},[[94,1,2]]]);
//# sourceMappingURL=main.2fe0f1eb.chunk.js.map