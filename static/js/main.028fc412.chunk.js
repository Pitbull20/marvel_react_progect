(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[0],{30:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){},47:function(e,t,c){},48:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(19),s=c.n(r),i=c(10),l=c(2),o=(c(30),c(0)),j=function(){return Object(o.jsxs)("header",{className:"app__header",children:[Object(o.jsx)("h1",{className:"app__title",children:Object(o.jsxs)(i.b,{to:"/marvel_react_progect",children:[Object(o.jsx)("span",{children:"Marvel"})," information portal"]})}),Object(o.jsx)("nav",{className:"app__menu",children:Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsx)(i.c,{exact:!0,to:"/marvel_react_progect",activeStyle:{color:"#9F0013"},children:"Characters"})}),"/",Object(o.jsx)("li",{children:Object(o.jsx)(i.c,{exact:!0,to:"/comics",activeStyle:{color:"#9F0013"},children:"Comics"})})]})})]})},u=c(3),b=c(8),m=c.n(b),d=c(11),h=function(){var e=function(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(null),s=Object(u.a)(r,2),i=s[0],l=s[1];return{loading:c,request:Object(n.useCallback)(function(){var e=Object(d.a)(m.a.mark((function e(t){var c,n,r,s,i,o=arguments;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=o.length>1&&void 0!==o[1]?o[1]:"GET",n=o.length>2&&void 0!==o[2]?o[2]:null,r=o.length>3&&void 0!==o[3]?o[3]:{"Content-Type":"application/json"},a(!0),e.prev=4,e.next=7,fetch(t,{method:c,body:n,headers:r});case 7:if((s=e.sent).ok){e.next=10;break}throw new Error("Could not fetch ".concat(t,", status: ").concat(s.status));case 10:return e.next=12,s.json();case 12:return i=e.sent,a(!1),e.abrupt("return",i);case 17:throw e.prev=17,e.t0=e.catch(4),a(!1),l(e.t0.message),e.t0;case 22:case"end":return e.stop()}}),e,null,[[4,17]])})));return function(t){return e.apply(this,arguments)}}(),[]),error:i,clearError:Object(n.useCallback)((function(){return l(null)}),[])}}(),t=e.loading,c=e.request,a=e.error,r=e.clearError,s="https://gateway.marvel.com:443/v1/public/",i="67917fa6e0f3d0853c5b2e5c84f10d51",l=210,o=function(){var e=Object(d.a)(m.a.mark((function e(){var t,n,a=arguments;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:l,e.next=3,c("".concat(s,"characters?limit=9&offset=").concat(t,"&apikey=").concat(i));case 3:return n=e.sent,e.abrupt("return",n.data.results.map(h));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=function(){var e=Object(d.a)(m.a.mark((function e(){var t,n=arguments;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.length>0&&void 0!==n[0]?n[0]:l,e.next=3,c("".concat(s,"comics?limit=8&offset=").concat(l,"&apikey=").concat(i));case 3:return t=e.sent,e.abrupt("return",t.data.results.map(O));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(d.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("".concat(s,"characters/").concat(t,"?apikey=").concat(i));case 2:return n=e.sent,e.abrupt("return",h(n.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(e){return{id:e.id,name:e.name,descpription:e.description?"".concat(e.description.slice(0,200),"..."):"There is no description for this character",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls.url,wiki:e.urls[1].url,comics:e.comics.items}},O=function(e){return{thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,title:e.title,prise:e.prices[0].price}};return{loading:t,error:a,getAllCharacters:o,getCharacter:b,clearError:r,getAllComics:j}},O=function(){return Object(o.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",style:{margin:"0 auto",background:"none",display:"block"},width:"200px",height:"200px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",children:[Object(o.jsx)("g",{transform:"translate(80,50)",children:Object(o.jsx)("g",{transform:"rotate(0)",children:Object(o.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"1",children:[Object(o.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.875s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(o.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.875s"})]})})}),Object(o.jsx)("g",{transform:"translate(71.21320343559643,71.21320343559643)",children:Object(o.jsx)("g",{transform:"rotate(45)",children:Object(o.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.875",children:[Object(o.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.75s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(o.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.75s"})]})})}),Object(o.jsx)("g",{transform:"translate(50,80)",children:Object(o.jsx)("g",{transform:"rotate(90)",children:Object(o.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.75",children:[Object(o.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.625s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(o.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.625s"})]})})}),Object(o.jsx)("g",{transform:"translate(28.786796564403577,71.21320343559643)",children:Object(o.jsx)("g",{transform:"rotate(135)",children:Object(o.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.625",children:[Object(o.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.5s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(o.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.5s"})]})})}),Object(o.jsx)("g",{transform:"translate(20,50.00000000000001)",children:Object(o.jsx)("g",{transform:"rotate(180)",children:Object(o.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.5",children:[Object(o.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.375s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(o.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.375s"})]})})}),Object(o.jsx)("g",{transform:"translate(28.78679656440357,28.786796564403577)",children:Object(o.jsx)("g",{transform:"rotate(225)",children:Object(o.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.375",children:[Object(o.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.25s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(o.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.25s"})]})})}),Object(o.jsx)("g",{transform:"translate(49.99999999999999,20)",children:Object(o.jsx)("g",{transform:"rotate(270)",children:Object(o.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.25",children:[Object(o.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.125s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(o.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.125s"})]})})}),Object(o.jsx)("g",{transform:"translate(71.21320343559643,28.78679656440357)",children:Object(o.jsx)("g",{transform:"rotate(315)",children:Object(o.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.125",children:[Object(o.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"0s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(o.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"0s"})]})})})]})},f=c.p+"static/media/error.42292aa1.gif",x=function(){return Object(o.jsx)("img",{style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},src:f,alt:"error"})},p=(c(41),c.p+"static/media/mjolnir.61f31e18.png"),v=function(e){var t=e.char,c=t.name,n=t.descpription,a=t.thumbnail,r=t.homepage,s=t.wiki,i={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===a&&(i={objectFit:"contain"}),Object(o.jsxs)("div",{className:"randomchar__block",children:[Object(o.jsx)("img",{src:a,alt:"Random character",className:"randomchar__img",style:i}),Object(o.jsxs)("div",{className:"randomchar__info",children:[Object(o.jsx)("p",{className:"randomchar__name",children:c}),Object(o.jsx)("p",{className:"randomchar__descr",children:n}),Object(o.jsxs)("div",{className:"randomchar__btns",children:[Object(o.jsx)("a",{href:r,className:"button button__main",children:Object(o.jsx)("div",{className:"inner",children:"homepage"})}),Object(o.jsx)("a",{href:s,className:"button button__secondary",children:Object(o.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]})},_=function(){var e=Object(n.useState)(null),t=Object(u.a)(e,2),c=t[0],a=t[1],r=h(),s=r.loading,i=r.error,l=r.getCharacter,j=r.clearError;Object(n.useEffect)((function(){m()}),[]);var b=function(e){a(e)},m=function(){j();var e=Math.floor(400*Math.random())+1011e3;l(e).then(b)},d=i?Object(o.jsx)(x,{}):null,f=s?Object(o.jsx)(O,{}):null,_=s||i||!c?null:Object(o.jsx)(v,{char:c});return Object(o.jsxs)("div",{className:"randomchar",children:[d,f,_,Object(o.jsxs)("div",{className:"randomchar__static",children:[Object(o.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",Object(o.jsx)("br",{}),"Do you want to get to know him better?"]}),Object(o.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),Object(o.jsx)("button",{onClick:m,className:"button button__main",children:Object(o.jsx)("div",{className:"inner",children:"try it"})}),Object(o.jsx)("img",{src:p,alt:"mjolnir",className:"randomchar__decoration"})]})]})},g=c(12),y=(c(42),function(e){var t=Object(n.useState)([]),c=Object(u.a)(t,2),a=c[0],r=c[1],s=Object(n.useState)(!1),i=Object(u.a)(s,2),l=i[0],j=i[1],b=Object(n.useState)(210),m=Object(u.a)(b,2),d=m[0],f=m[1],p=Object(n.useState)(!1),v=Object(u.a)(p,2),_=v[0],y=v[1],N=h(),k=N.loading,C=N.error,w=N.getAllCharacters;function T(e,t){j(!t),w(e).then(S)}function S(e){var t=!1;e.length<9&&(t=!0),r((function(t){return[].concat(Object(g.a)(t),Object(g.a)(e))})),j((function(e){return!1})),f((function(e){return e+9})),y((function(e){return t}))}Object(n.useEffect)((function(){T(d,!0)}),[]);var F=Object(n.useRef)([]);function E(e){F.current.forEach((function(e){return e.classList.remove("char__item_selected")})),F.current[e].classList.add("char__item_selected"),F.current[e].focus()}var A=function(t){var c=t.map((function(t,c){var n={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===t.thumbnail&&(n={objectFit:"unset"}),Object(o.jsxs)("li",{className:"char__item",tabIndex:0,ref:function(e){return F.current[c]=e},onClick:function(){e.onCharSelected(t.id),E(c)},onKeyPress:function(n){" "!==n.key&&"Enter"!==n.key||(e.onCharSelected(t.id),E(c))},children:[Object(o.jsx)("img",{src:t.thumbnail,alt:t.name,style:n}),Object(o.jsx)("div",{className:"char__name",children:t.name})]},t.id)}));return Object(o.jsx)("ul",{className:"char__grid",children:c})}(a),M=C?Object(o.jsx)(x,{}):null,I=k&&!l?Object(o.jsx)(O,{}):null;return Object(o.jsxs)("div",{className:"char__list",children:[M,I,A,Object(o.jsx)("button",{className:"button button__main button__long",disabled:l,style:{display:_?"none":"block"},onClick:function(){return T(d)},children:Object(o.jsx)("div",{className:"inner",children:"load more"})})]})}),N=(c(43),function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),Object(o.jsxs)("div",{className:"skeleton",children:[Object(o.jsxs)("div",{className:"pulse skeleton__header",children:[Object(o.jsx)("div",{className:"pulse skeleton__circle"}),Object(o.jsx)("div",{className:"pulse skeleton__mini"})]}),Object(o.jsx)("div",{className:"pulse skeleton__block"}),Object(o.jsx)("div",{className:"pulse skeleton__block"}),Object(o.jsx)("div",{className:"pulse skeleton__block"})]})]})}),k=(c(44),function(e){var t=e.char,c=t.name,n=t.descpription,a=t.thumbnail,r=t.homepage,s=t.wiki,i=t.comics,l={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===a&&(l={objectFit:"contain"}),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"char__basics",children:[Object(o.jsx)("img",{src:a,alt:c,style:l}),Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"char__info-name",children:c}),Object(o.jsxs)("div",{className:"char__btns",children:[Object(o.jsx)("a",{href:r,className:"button button__main",children:Object(o.jsx)("div",{className:"inner",children:"homepage"})}),Object(o.jsx)("a",{href:s,className:"button button__secondary",children:Object(o.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),Object(o.jsx)("div",{className:"char__descr",children:n}),Object(o.jsx)("div",{className:"char__comics",children:"Comics:"}),Object(o.jsxs)("ul",{className:"char__comics-list",children:[i.length>0?null:"There is no comics with this character",i.map((function(e,t){if(!(t>9))return Object(o.jsx)("li",{className:"char__comics-item",children:e.name},t)}))]})]})}),C=function(e){var t=Object(n.useState)(null),c=Object(u.a)(t,2),a=c[0],r=c[1],s=h(),i=s.loading,l=s.error,j=s.getCharacter,b=s.clearError;Object(n.useEffect)((function(){m()}),[e.charId]);var m=function(){b();var t=e.charId;t&&j(t).then(d)},d=function(e){r(e)},f=a||i||l?null:Object(o.jsx)(N,{}),p=l?Object(o.jsx)(x,{}):null,v=i?Object(o.jsx)(O,{}):null,_=i||l||!a?null:Object(o.jsx)(k,{char:a});return Object(o.jsxs)("div",{className:"char__info",children:[f,p,v,_]})},w=c(22),T=c(23),S=c(25),F=c(24),E=function(e){Object(S.a)(c,e);var t=Object(F.a)(c);function c(e){var n;return Object(w.a)(this,c),(n=t.call(this,e)).state={error:!1},n}return Object(T.a)(c,[{key:"componentDidCatch",value:function(e,t){console.log(e,t),this.setState({error:!0})}},{key:"render",value:function(){return this.state.error?Object(o.jsx)(x,{}):this.props.children}}]),c}(n.Component),A=c.p+"static/media/vision.067d4ae1.png",M=function(){var e=Object(n.useState)(null),t=Object(u.a)(e,2),c=t[0],a=t[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(E,{children:Object(o.jsx)(_,{})}),Object(o.jsxs)("div",{className:"char__content",children:[Object(o.jsx)(E,{children:Object(o.jsx)(y,{onCharSelected:function(e){a(e)}})}),Object(o.jsx)(E,{children:Object(o.jsx)(C,{charId:c})})]}),Object(o.jsx)("img",{className:"bg-decoration",src:A,alt:"vision"})]})},I=(c(45),c.p+"static/media/Avengers.4065c8f9.png"),R=c.p+"static/media/Avengers_logo.9eaf2193.png",q=function(){return Object(o.jsxs)("div",{className:"app__banner",children:[Object(o.jsx)("img",{src:I,alt:"Avengers"}),Object(o.jsxs)("div",{className:"app__banner-text",children:["New comics every week!",Object(o.jsx)("br",{}),"Stay tuned!"]}),Object(o.jsx)("img",{src:R,alt:"Avengers logo"})]})},B=(c(46),function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(!1),s=Object(u.a)(r,2),i=s[0],l=s[1],j=Object(n.useState)(210),b=Object(u.a)(j,2),m=b[0],d=b[1],f=Object(n.useState)(!1),p=Object(u.a)(f,2),v=(p[0],p[1]),_=h(),y=_.loading,N=_.error,k=_.getAllComics;function C(e,t){l(!t),k(e).then(w)}function w(e){var t=!1;e.length<8&&(t=!0),a((function(t){return[].concat(Object(g.a)(t),Object(g.a)(e))})),l((function(e){return!1})),d((function(e){return e+8})),v((function(e){return t}))}Object(n.useEffect)((function(){C(m,!0)}),[]);var T=function(e){var t=e.map((function(e,t){var c={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===e.thumbnail&&(c={objectFit:"unset"}),Object(o.jsx)("li",{className:"comics__item",children:Object(o.jsxs)("a",{href:"#",children:[Object(o.jsx)("img",{src:e.thumbnail,alt:"ultimate war",style:c,className:"comics__item-img"}),Object(o.jsx)("div",{className:"comics__item-name",children:e.title}),Object(o.jsx)("div",{className:"comics__item-price",children:"".concat(e.prise,"$")||!1})]})},t)}));return Object(o.jsx)("ul",{className:"comics__grid",children:t})}(c),S=N?Object(o.jsx)(x,{}):null,F=y&&!i?Object(o.jsx)(O,{}):null;return Object(o.jsxs)("div",{className:"comics__list",children:[S,F,T,Object(o.jsx)("button",{className:"button button__main button__long",children:Object(o.jsx)("div",{className:"inner",onClick:function(){return C(m,!1)},children:"load more"})})]})}),D=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(E,{children:Object(o.jsx)(q,{})}),Object(o.jsx)(E,{children:Object(o.jsx)(B,{})})]})},J=function(e){return Object(o.jsx)(i.a,{children:Object(o.jsxs)("div",{className:"app",children:[Object(o.jsx)(j,{}),Object(o.jsx)("main",{children:Object(o.jsxs)(l.c,{children:[Object(o.jsx)(l.a,{exact:!0,path:"/marvel_react_progect",children:Object(o.jsx)(M,{})}),Object(o.jsx)(l.a,{exact:!0,path:"/comics",children:Object(o.jsx)(D,{})})]})})]})})};c(47);s.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(J,{})}),document.getElementById("root")),console.clear()}},[[48,1,2]]]);
//# sourceMappingURL=main.028fc412.chunk.js.map