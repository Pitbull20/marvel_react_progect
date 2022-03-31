(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[0],{20:function(e,t,c){},23:function(e,t,c){},24:function(e,t,c){},25:function(e,t,c){},26:function(e,t,c){},27:function(e,t,c){},28:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),r=c(12),s=c.n(r),i=c(2),l=(c(20),c(0)),o=function(){return Object(l.jsxs)("header",{className:"app__header",children:[Object(l.jsx)("h1",{className:"app__title",children:Object(l.jsxs)("a",{href:"#",children:[Object(l.jsx)("span",{children:"Marvel"})," information portal"]})}),Object(l.jsx)("nav",{className:"app__menu",children:Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"#",children:"Characters"})}),"/",Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"#",children:"Comics"})})]})})]})},j=c(3),u=c.n(j),b=c(8),m=c(7),d=c(5),h=c(10),O=Object(h.a)("apiBase"),f=Object(h.a)("apiKey"),x=function e(){var t=this;Object(m.a)(this,e),Object.defineProperty(this,O,{writable:!0,value:"https://gateway.marvel.com:443/v1/public/"}),Object.defineProperty(this,f,{writable:!0,value:"67917fa6e0f3d0853c5b2e5c84f10d51"}),this._baseOffset=210,this.getResourse=function(){var e=Object(b.a)(u.a.mark((function e(t){var c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:if((c=e.sent).ok){e.next=5;break}throw new Error("Could not fetch ".concat(t,", status: ").concat(c.status));case 5:return e.next=7,c.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getAllCharacters=Object(b.a)(u.a.mark((function e(){var c,a,n=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=n.length>0&&void 0!==n[0]?n[0]:t._baseOffset,e.next=3,t.getResourse("".concat(Object(d.a)(t,O)[O],"characters?limit=9&offset=").concat(c,"&apikey=").concat(Object(d.a)(t,f)[f]));case 3:return a=e.sent,e.abrupt("return",a.data.results.map(t._transformCharacter));case 5:case"end":return e.stop()}}),e)}))),this.getCharacter=function(){var e=Object(b.a)(u.a.mark((function e(c){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResourse("".concat(Object(d.a)(t,O)[O],"characters/").concat(c,"?apikey=").concat(Object(d.a)(t,f)[f]));case 2:return a=e.sent,e.abrupt("return",t._transformCharacter(a.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this._transformCharacter=function(e){return{id:e.id,name:e.name,descpription:e.description?"".concat(e.description.slice(0,200),"..."):"There is no description for this character",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls.url,wiki:e.urls[1].url,comics:e.comics.items}}},p=function(){return Object(l.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",style:{margin:"0 auto",background:"none",display:"block"},width:"200px",height:"200px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",children:[Object(l.jsx)("g",{transform:"translate(80,50)",children:Object(l.jsx)("g",{transform:"rotate(0)",children:Object(l.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"1",children:[Object(l.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.875s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(l.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.875s"})]})})}),Object(l.jsx)("g",{transform:"translate(71.21320343559643,71.21320343559643)",children:Object(l.jsx)("g",{transform:"rotate(45)",children:Object(l.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.875",children:[Object(l.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.75s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(l.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.75s"})]})})}),Object(l.jsx)("g",{transform:"translate(50,80)",children:Object(l.jsx)("g",{transform:"rotate(90)",children:Object(l.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.75",children:[Object(l.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.625s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(l.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.625s"})]})})}),Object(l.jsx)("g",{transform:"translate(28.786796564403577,71.21320343559643)",children:Object(l.jsx)("g",{transform:"rotate(135)",children:Object(l.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.625",children:[Object(l.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.5s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(l.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.5s"})]})})}),Object(l.jsx)("g",{transform:"translate(20,50.00000000000001)",children:Object(l.jsx)("g",{transform:"rotate(180)",children:Object(l.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.5",children:[Object(l.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.375s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(l.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.375s"})]})})}),Object(l.jsx)("g",{transform:"translate(28.78679656440357,28.786796564403577)",children:Object(l.jsx)("g",{transform:"rotate(225)",children:Object(l.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.375",children:[Object(l.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.25s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(l.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.25s"})]})})}),Object(l.jsx)("g",{transform:"translate(49.99999999999999,20)",children:Object(l.jsx)("g",{transform:"rotate(270)",children:Object(l.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.25",children:[Object(l.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.125s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(l.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.125s"})]})})}),Object(l.jsx)("g",{transform:"translate(71.21320343559643,28.78679656440357)",children:Object(l.jsx)("g",{transform:"rotate(315)",children:Object(l.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.125",children:[Object(l.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"0s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(l.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"0s"})]})})})]})},v=c.p+"static/media/error.42292aa1.gif",_=function(){return Object(l.jsx)("img",{style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},src:v,alt:"error"})},g=(c(23),c.p+"static/media/mjolnir.61f31e18.png"),y=function(e){var t=e.char,c=t.name,a=t.description,n=t.thumbnail,r=t.homepage,s=t.wiki,i={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===n&&(i={objectFit:"contain"}),Object(l.jsxs)("div",{className:"randomchar__block",children:[Object(l.jsx)("img",{src:n,alt:"Random character",className:"randomchar__img",style:i}),Object(l.jsxs)("div",{className:"randomchar__info",children:[Object(l.jsx)("p",{className:"randomchar__name",children:c}),Object(l.jsx)("p",{className:"randomchar__descr",children:a}),Object(l.jsxs)("div",{className:"randomchar__btns",children:[Object(l.jsx)("a",{href:r,className:"button button__main",children:Object(l.jsx)("div",{className:"inner",children:"homepage"})}),Object(l.jsx)("a",{href:s,className:"button button__secondary",children:Object(l.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]})},N=function(){var e=Object(a.useState)(null),t=Object(i.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)(!0),s=Object(i.a)(r,2),o=s[0],j=s[1],u=Object(a.useState)(!1),b=Object(i.a)(u,2),m=b[0],d=b[1],h=new x;Object(a.useEffect)((function(){v()}),[]);var O=function(e){j(!1),n(e)},f=function(){d(!0),j(!1)},v=function(){var e=Math.floor(400*Math.random())+1011e3;j(!0),h.getCharacter(e).then(O).catch(f)},N=m?Object(l.jsx)(_,{}):null,k=o?Object(l.jsx)(p,{}):null,C=o||m||!c?null:Object(l.jsx)(y,{char:c});return Object(l.jsxs)("div",{className:"randomchar",children:[N,k,C,Object(l.jsxs)("div",{className:"randomchar__static",children:[Object(l.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",Object(l.jsx)("br",{}),"Do you want to get to know him better?"]}),Object(l.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),Object(l.jsx)("button",{onClick:v,className:"button button__main",children:Object(l.jsx)("div",{className:"inner",children:"try it"})}),Object(l.jsx)("img",{src:g,alt:"mjolnir",className:"randomchar__decoration"})]})]})},k=c(11),C=(c(24),function(e){var t=Object(a.useState)([]),c=Object(i.a)(t,2),n=c[0],r=c[1],s=Object(a.useState)(!0),o=Object(i.a)(s,2),j=o[0],u=o[1],b=Object(a.useState)(!1),m=Object(i.a)(b,2),d=m[0],h=m[1],O=Object(a.useState)(!1),f=Object(i.a)(O,2),v=f[0],g=f[1],y=Object(a.useState)(210),N=Object(i.a)(y,2),C=N[0],w=N[1],T=Object(a.useState)(!1),S=Object(i.a)(T,2),F=S[0],E=S[1],R=new x;function M(e){g(!0),R.getAllCharacters(e).then(I).catch(P)}function I(e){var t=!1;e.length<9&&(t=!0),r((function(t){return[].concat(Object(k.a)(t),Object(k.a)(e))})),u((function(e){return!1})),g((function(e){return!1})),w((function(e){return e+9})),E((function(e){return t}))}function P(){h((function(e){return!0})),u((function(e){return!1}))}Object(a.useEffect)((function(){M()}),[]);var A=Object(a.useRef)([]);function B(e){A.current.forEach((function(e){return e.classList.remove("char__item_selected")})),A.current[e].classList.add("char__item_selected"),A.current[e].focus()}var D=function(t){var c=t.map((function(t,c){var a={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===t.thumbnail&&(a={objectFit:"unset"}),Object(l.jsxs)("li",{className:"char__item",tabIndex:0,ref:function(e){return A.current[c]=e},onClick:function(){e.onCharSelected(t.id),B(c)},onKeyPress:function(a){" "!==a.key&&"Enter"!==a.key||(e.onCharSelected(t.id),B(c))},children:[Object(l.jsx)("img",{src:t.thumbnail,alt:t.name,style:a}),Object(l.jsx)("div",{className:"char__name",children:t.name})]},t.id)}));return Object(l.jsx)("ul",{className:"char__grid",children:c})}(n),J=d?Object(l.jsx)(_,{}):null,K=j?Object(l.jsx)(p,{}):null,L=j||d?null:D;return Object(l.jsxs)("div",{className:"char__list",children:[J,K,L,Object(l.jsx)("button",{className:"button button__main button__long",disabled:v,style:{display:F?"none":"block"},onClick:function(){return M(C)},children:Object(l.jsx)("div",{className:"inner",children:"load more"})})]})}),w=(c(25),function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),Object(l.jsxs)("div",{className:"skeleton",children:[Object(l.jsxs)("div",{className:"pulse skeleton__header",children:[Object(l.jsx)("div",{className:"pulse skeleton__circle"}),Object(l.jsx)("div",{className:"pulse skeleton__mini"})]}),Object(l.jsx)("div",{className:"pulse skeleton__block"}),Object(l.jsx)("div",{className:"pulse skeleton__block"}),Object(l.jsx)("div",{className:"pulse skeleton__block"})]})]})}),T=(c(26),function(e){var t=e.char,c=t.name,a=t.description,n=t.thumbnail,r=t.homepage,s=t.wiki,i=t.comics,o={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===n&&(o={objectFit:"contain"}),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"char__basics",children:[Object(l.jsx)("img",{src:n,alt:c,style:o}),Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"char__info-name",children:c}),Object(l.jsxs)("div",{className:"char__btns",children:[Object(l.jsx)("a",{href:r,className:"button button__main",children:Object(l.jsx)("div",{className:"inner",children:"homepage"})}),Object(l.jsx)("a",{href:s,className:"button button__secondary",children:Object(l.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),Object(l.jsx)("div",{className:"char__descr",children:a}),Object(l.jsx)("div",{className:"char__comics",children:"Comics:"}),Object(l.jsxs)("ul",{className:"char__comics-list",children:[i.length>0?null:"There is no comics with this character",i.map((function(e,t){if(!(t>9))return Object(l.jsx)("li",{className:"char__comics-item",children:e.name},t)}))]})]})}),S=function(e){var t=Object(a.useState)(null),c=Object(i.a)(t,2),n=c[0],r=c[1],s=Object(a.useState)(!1),o=Object(i.a)(s,2),j=o[0],u=o[1],b=Object(a.useState)(!1),m=Object(i.a)(b,2),d=m[0],h=m[1],O=new x;Object(a.useEffect)((function(){f()}),[e.charId]);var f=function(){var t=e.charId;t&&(g(),O.getCharacter(t).then(v).catch(y))},v=function(e){u(!1),r(e)},g=function(){u(!0)},y=function(){h(!0),u(!1)},N=n||j||d?null:Object(l.jsx)(w,{}),k=d?Object(l.jsx)(_,{}):null,C=j?Object(l.jsx)(p,{}):null,S=j||d||!n?null:Object(l.jsx)(T,{char:n});return Object(l.jsxs)("div",{className:"char__info",children:[N,k,C,S]})},F=c(13),E=c(15),R=c(14),M=function(e){Object(E.a)(c,e);var t=Object(R.a)(c);function c(e){var a;return Object(m.a)(this,c),(a=t.call(this,e)).state={error:!1},a}return Object(F.a)(c,[{key:"componentDidCatch",value:function(e,t){console.log(e,t),this.setState({error:!0})}},{key:"render",value:function(){return this.state.error?Object(l.jsx)(_,{}):this.props.children}}]),c}(a.Component),I=c.p+"static/media/vision.067d4ae1.png",P=function(e){var t=Object(a.useState)(null),c=Object(i.a)(t,2),n=c[0],r=c[1];return Object(l.jsxs)("div",{className:"app",children:[Object(l.jsx)(o,{}),Object(l.jsxs)("main",{children:[Object(l.jsx)(N,{}),Object(l.jsxs)("div",{className:"char__content",children:[Object(l.jsx)(C,{onCharSelected:function(e){r(e)}}),Object(l.jsx)(M,{children:Object(l.jsx)(S,{charId:n})})]}),Object(l.jsx)("img",{className:"bg-decoration",src:I,alt:"vision"})]})]})};c(27);s.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(P,{})}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.6ac62b46.chunk.js.map