(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[0],{30:function(e,t,c){},40:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){},47:function(e,t,c){},48:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(19),s=c.n(r),i=c(3),l=c(10),o=c(2),j=(c(30),c(0)),u=function(){return Object(j.jsxs)("header",{className:"app__header",children:[Object(j.jsx)("h1",{className:"app__title",children:Object(j.jsxs)(l.b,{to:"/marvel_react_progect",children:[Object(j.jsx)("span",{children:"Marvel"})," information portal"]})}),Object(j.jsx)("nav",{className:"app__menu",children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)(l.c,{exact:!0,to:"/marvel_react_progect",activeStyle:{color:"#9F0013"},children:"Characters"})}),"/",Object(j.jsx)("li",{children:Object(j.jsx)(l.c,{exact:!0,to:"/comics",activeStyle:{color:"#9F0013"},children:"Comics"})})]})})]})},b=(c(40),c.p+"static/media/Avengers.4065c8f9.png"),m=c.p+"static/media/Avengers_logo.9eaf2193.png",d=function(){return Object(j.jsxs)("div",{className:"app__banner",children:[Object(j.jsx)("img",{src:b,alt:"Avengers"}),Object(j.jsxs)("div",{className:"app__banner-text",children:["New comics every week!",Object(j.jsx)("br",{}),"Stay tuned!"]}),Object(j.jsx)("img",{src:m,alt:"Avengers logo"})]})},h=c(8),O=c.n(h),f=c(11),x=function(){var e=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(null),s=Object(i.a)(r,2),l=s[0],o=s[1];return{loading:c,request:Object(n.useCallback)(function(){var e=Object(f.a)(O.a.mark((function e(t){var c,n,r,s,i,l=arguments;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=l.length>1&&void 0!==l[1]?l[1]:"GET",n=l.length>2&&void 0!==l[2]?l[2]:null,r=l.length>3&&void 0!==l[3]?l[3]:{"Content-Type":"application/json"},a(!0),e.prev=4,e.next=7,fetch(t,{method:c,body:n,headers:r});case 7:if((s=e.sent).ok){e.next=10;break}throw new Error("Could not fetch ".concat(t,", status: ").concat(s.status));case 10:return e.next=12,s.json();case 12:return i=e.sent,a(!1),e.abrupt("return",i);case 17:throw e.prev=17,e.t0=e.catch(4),a(!1),o(e.t0.message),e.t0;case 22:case"end":return e.stop()}}),e,null,[[4,17]])})));return function(t){return e.apply(this,arguments)}}(),[]),error:l,clearError:Object(n.useCallback)((function(){return o(null)}),[])}}(),t=e.loading,c=e.request,a=e.error,r=e.clearError,s="https://gateway.marvel.com:443/v1/public/",l="67917fa6e0f3d0853c5b2e5c84f10d51",o=210,j=function(){var e=Object(f.a)(O.a.mark((function e(){var t,n,a=arguments;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:o,e.next=3,c("".concat(s,"characters?limit=9&offset=").concat(t,"&apikey=").concat(l));case 3:return n=e.sent,e.abrupt("return",n.data.results.map(m));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=Object(f.a)(O.a.mark((function e(){var t,n=arguments;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.length>0&&void 0!==n[0]?n[0]:o,e.next=3,c("".concat(s,"comics?limit=8&offset=").concat(o,"&apikey=").concat(l));case 3:return t=e.sent,e.abrupt("return",t.data.results.map(d));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(f.a)(O.a.mark((function e(t){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("".concat(s,"characters/").concat(t,"?apikey=").concat(l));case 2:return n=e.sent,e.abrupt("return",m(n.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(e){return{id:e.id,name:e.name,descpription:e.description?"".concat(e.description.slice(0,200),"..."):"There is no description for this character",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls.url,wiki:e.urls[1].url,comics:e.comics.items}},d=function(e){return{thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,title:e.title,prise:e.prices[0].price}};return{loading:t,error:a,getAllCharacters:j,getCharacter:b,clearError:r,getAllComics:u}},p=function(){return Object(j.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",style:{margin:"0 auto",background:"none",display:"block"},width:"200px",height:"200px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",children:[Object(j.jsx)("g",{transform:"translate(80,50)",children:Object(j.jsx)("g",{transform:"rotate(0)",children:Object(j.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"1",children:[Object(j.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.875s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(j.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.875s"})]})})}),Object(j.jsx)("g",{transform:"translate(71.21320343559643,71.21320343559643)",children:Object(j.jsx)("g",{transform:"rotate(45)",children:Object(j.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.875",children:[Object(j.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.75s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(j.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.75s"})]})})}),Object(j.jsx)("g",{transform:"translate(50,80)",children:Object(j.jsx)("g",{transform:"rotate(90)",children:Object(j.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.75",children:[Object(j.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.625s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(j.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.625s"})]})})}),Object(j.jsx)("g",{transform:"translate(28.786796564403577,71.21320343559643)",children:Object(j.jsx)("g",{transform:"rotate(135)",children:Object(j.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.625",children:[Object(j.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.5s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(j.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.5s"})]})})}),Object(j.jsx)("g",{transform:"translate(20,50.00000000000001)",children:Object(j.jsx)("g",{transform:"rotate(180)",children:Object(j.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.5",children:[Object(j.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.375s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(j.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.375s"})]})})}),Object(j.jsx)("g",{transform:"translate(28.78679656440357,28.786796564403577)",children:Object(j.jsx)("g",{transform:"rotate(225)",children:Object(j.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.375",children:[Object(j.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.25s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(j.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.25s"})]})})}),Object(j.jsx)("g",{transform:"translate(49.99999999999999,20)",children:Object(j.jsx)("g",{transform:"rotate(270)",children:Object(j.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.25",children:[Object(j.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.125s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(j.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.125s"})]})})}),Object(j.jsx)("g",{transform:"translate(71.21320343559643,28.78679656440357)",children:Object(j.jsx)("g",{transform:"rotate(315)",children:Object(j.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.125",children:[Object(j.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"0s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(j.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"0s"})]})})})]})},v=c.p+"static/media/error.42292aa1.gif",_=function(){return Object(j.jsx)("img",{style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},src:v,alt:"error"})},g=(c(42),c.p+"static/media/mjolnir.61f31e18.png"),y=function(e){var t=e.char,c=t.name,n=t.descpription,a=t.thumbnail,r=t.homepage,s=t.wiki,i={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===a&&(i={objectFit:"contain"}),Object(j.jsxs)("div",{className:"randomchar__block",children:[Object(j.jsx)("img",{src:a,alt:"Random character",className:"randomchar__img",style:i}),Object(j.jsxs)("div",{className:"randomchar__info",children:[Object(j.jsx)("p",{className:"randomchar__name",children:c}),Object(j.jsx)("p",{className:"randomchar__descr",children:n}),Object(j.jsxs)("div",{className:"randomchar__btns",children:[Object(j.jsx)("a",{href:r,className:"button button__main",children:Object(j.jsx)("div",{className:"inner",children:"homepage"})}),Object(j.jsx)("a",{href:s,className:"button button__secondary",children:Object(j.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]})},N=function(){var e=Object(n.useState)(null),t=Object(i.a)(e,2),c=t[0],a=t[1],r=x(),s=r.loading,l=r.error,o=r.getCharacter,u=r.clearError;Object(n.useEffect)((function(){m()}),[]);var b=function(e){a(e)},m=function(){u();var e=Math.floor(400*Math.random())+1011e3;o(e).then(b)},d=l?Object(j.jsx)(_,{}):null,h=s?Object(j.jsx)(p,{}):null,O=s||l||!c?null:Object(j.jsx)(y,{char:c});return Object(j.jsxs)("div",{className:"randomchar",children:[d,h,O,Object(j.jsxs)("div",{className:"randomchar__static",children:[Object(j.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",Object(j.jsx)("br",{}),"Do you want to get to know him better?"]}),Object(j.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),Object(j.jsx)("button",{onClick:m,className:"button button__main",children:Object(j.jsx)("div",{className:"inner",children:"try it"})}),Object(j.jsx)("img",{src:g,alt:"mjolnir",className:"randomchar__decoration"})]})]})},k=c(12),C=(c(43),function(e){var t=Object(n.useState)([]),c=Object(i.a)(t,2),a=c[0],r=c[1],s=Object(n.useState)(!1),l=Object(i.a)(s,2),o=l[0],u=l[1],b=Object(n.useState)(210),m=Object(i.a)(b,2),d=m[0],h=m[1],O=Object(n.useState)(!1),f=Object(i.a)(O,2),v=f[0],g=f[1],y=x(),N=y.loading,C=y.error,w=y.getAllCharacters;function T(e,t){u(!t),w(e).then(S)}function S(e){var t=!1;e.length<9&&(t=!0),r((function(t){return[].concat(Object(k.a)(t),Object(k.a)(e))})),u((function(e){return!1})),h((function(e){return e+9})),g((function(e){return t}))}Object(n.useEffect)((function(){T(d,!0)}),[]);var E=Object(n.useRef)([]);function F(e){E.current.forEach((function(e){return e.classList.remove("char__item_selected")})),E.current[e].classList.add("char__item_selected"),E.current[e].focus()}var A=function(t){var c=t.map((function(t,c){var n={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===t.thumbnail&&(n={objectFit:"unset"}),Object(j.jsxs)("li",{className:"char__item",tabIndex:0,ref:function(e){return E.current[c]=e},onClick:function(){e.onCharSelected(t.id),F(c)},onKeyPress:function(n){" "!==n.key&&"Enter"!==n.key||(e.onCharSelected(t.id),F(c))},children:[Object(j.jsx)("img",{src:t.thumbnail,alt:t.name,style:n}),Object(j.jsx)("div",{className:"char__name",children:t.name})]},t.id)}));return Object(j.jsx)("ul",{className:"char__grid",children:c})}(a),M=C?Object(j.jsx)(_,{}):null,I=N&&!o?Object(j.jsx)(p,{}):null;return Object(j.jsxs)("div",{className:"char__list",children:[M,I,A,Object(j.jsx)("button",{className:"button button__main button__long",disabled:o,style:{display:v?"none":"block"},onClick:function(){return T(d)},children:Object(j.jsx)("div",{className:"inner",children:"load more"})})]})}),w=(c(44),function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),Object(j.jsxs)("div",{className:"skeleton",children:[Object(j.jsxs)("div",{className:"pulse skeleton__header",children:[Object(j.jsx)("div",{className:"pulse skeleton__circle"}),Object(j.jsx)("div",{className:"pulse skeleton__mini"})]}),Object(j.jsx)("div",{className:"pulse skeleton__block"}),Object(j.jsx)("div",{className:"pulse skeleton__block"}),Object(j.jsx)("div",{className:"pulse skeleton__block"})]})]})}),T=(c(45),function(e){var t=e.char,c=t.name,n=t.descpription,a=t.thumbnail,r=t.homepage,s=t.wiki,i=t.comics,l={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===a&&(l={objectFit:"contain"}),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"char__basics",children:[Object(j.jsx)("img",{src:a,alt:c,style:l}),Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"char__info-name",children:c}),Object(j.jsxs)("div",{className:"char__btns",children:[Object(j.jsx)("a",{href:r,className:"button button__main",children:Object(j.jsx)("div",{className:"inner",children:"homepage"})}),Object(j.jsx)("a",{href:s,className:"button button__secondary",children:Object(j.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),Object(j.jsx)("div",{className:"char__descr",children:n}),Object(j.jsx)("div",{className:"char__comics",children:"Comics:"}),Object(j.jsxs)("ul",{className:"char__comics-list",children:[i.length>0?null:"There is no comics with this character",i.map((function(e,t){if(!(t>9))return Object(j.jsx)("li",{className:"char__comics-item",children:e.name},t)}))]})]})}),S=function(e){var t=Object(n.useState)(null),c=Object(i.a)(t,2),a=c[0],r=c[1],s=x(),l=s.loading,o=s.error,u=s.getCharacter,b=s.clearError;Object(n.useEffect)((function(){m()}),[e.charId]);var m=function(){b();var t=e.charId;t&&u(t).then(d)},d=function(e){r(e)},h=a||l||o?null:Object(j.jsx)(w,{}),O=o?Object(j.jsx)(_,{}):null,f=l?Object(j.jsx)(p,{}):null,v=l||o||!a?null:Object(j.jsx)(T,{char:a});return Object(j.jsxs)("div",{className:"char__info",children:[h,O,f,v]})},E=c(22),F=c(23),A=c(25),M=c(24),I=function(e){Object(A.a)(c,e);var t=Object(M.a)(c);function c(e){var n;return Object(E.a)(this,c),(n=t.call(this,e)).state={error:!1},n}return Object(F.a)(c,[{key:"componentDidCatch",value:function(e,t){console.log(e,t),this.setState({error:!0})}},{key:"render",value:function(){return this.state.error?Object(j.jsx)(_,{}):this.props.children}}]),c}(n.Component),R=c.p+"static/media/vision.067d4ae1.png",q=(c(46),function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(!1),s=Object(i.a)(r,2),l=s[0],o=s[1],u=Object(n.useState)(210),b=Object(i.a)(u,2),m=b[0],d=b[1],h=Object(n.useState)(!1),O=Object(i.a)(h,2),f=(O[0],O[1]),v=x(),g=v.loading,y=v.error,N=v.getAllComics;function C(e,t){o(!t),N(e).then(w)}function w(e){var t=!1;e.length<8&&(t=!0),a((function(t){return[].concat(Object(k.a)(t),Object(k.a)(e))})),o((function(e){return!1})),d((function(e){return e+8})),f((function(e){return t}))}Object(n.useEffect)((function(){C(m,!0)}),[]);var T=function(e){var t=e.map((function(e,t){var c={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===e.thumbnail&&(c={objectFit:"unset"}),Object(j.jsx)("li",{className:"comics__item",children:Object(j.jsxs)("a",{href:"#",children:[Object(j.jsx)("img",{src:e.thumbnail,alt:"ultimate war",style:c,className:"comics__item-img"}),Object(j.jsx)("div",{className:"comics__item-name",children:e.title}),Object(j.jsx)("div",{className:"comics__item-price",children:"".concat(e.prise,"$")||!1})]})},t)}));return Object(j.jsx)("ul",{className:"comics__grid",children:t})}(c),S=y?Object(j.jsx)(_,{}):null,E=g&&!l?Object(j.jsx)(p,{}):null;return Object(j.jsxs)("div",{className:"comics__list",children:[S,E,T,Object(j.jsx)("button",{className:"button button__main button__long",children:Object(j.jsx)("div",{className:"inner",onClick:function(){return C(m,!1)},children:"load more"})})]})}),B=function(e){var t=Object(n.useState)(null),c=Object(i.a)(t,2),a=c[0],r=c[1];return Object(j.jsx)(l.a,{children:Object(j.jsxs)("div",{className:"app",children:[Object(j.jsx)(u,{}),Object(j.jsx)("main",{children:Object(j.jsxs)(o.c,{children:[Object(j.jsxs)(o.a,{exact:!0,path:"/marvel_react_progect",children:[Object(j.jsx)(I,{children:Object(j.jsx)(N,{})}),Object(j.jsxs)("div",{className:"char__content",children:[Object(j.jsx)(I,{children:Object(j.jsx)(C,{onCharSelected:function(e){r(e)}})}),Object(j.jsx)(I,{children:Object(j.jsx)(S,{charId:a})})]}),Object(j.jsx)("img",{className:"bg-decoration",src:R,alt:"vision"})]}),Object(j.jsxs)(o.a,{exact:!0,path:"/comics",children:[Object(j.jsx)(I,{children:Object(j.jsx)(d,{})}),Object(j.jsx)(I,{children:Object(j.jsx)(q,{})})]})]})})]})})};c(47);s.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(B,{})}),document.getElementById("root")),console.clear()}},[[48,1,2]]]);
//# sourceMappingURL=main.4a0d02e5.chunk.js.map