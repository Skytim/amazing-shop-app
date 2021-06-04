(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{37:function(e,c,t){},67:function(e,c,t){"use strict";t.r(c);var n=t(0),r=t.n(n),s=t(14),i=t.n(s),a=(t(37),t(10)),d=t(3),j=t(1),l=function(e){return Object(j.jsxs)("div",{className:"rating",children:[[1,2,3,4,5].map((function(c){return Object(j.jsx)("span",{children:Object(j.jsx)("i",{className:e.rating>=c?"fa fa-star":e.rating>=c-.5?"fa fa-star-half-o":"fa fa-star-o"})},c)})),Object(j.jsxs)("span",{children:[e.numReviews," Reviews"]})]})};var o=function(e){var c,t=null!==(c=e.product)&&void 0!==c?c:{};return Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)(a.b,{to:"/product/"+t._id,children:Object(j.jsx)("img",{className:"medium",src:"/amazing-shop-app"+t.image,alt:t.name})}),Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsx)(a.b,{to:"/product/"+t._id,children:Object(j.jsx)("h2",{children:t.name})}),Object(j.jsx)(l,{rating:t.rating,numReviews:t.numReviews})]}),Object(j.jsxs)("div",{className:"price",children:["$ ",t.price]})]},t._id)};function b(){return Object(j.jsxs)("div",{className:"fa-3x",children:[Object(j.jsx)("i",{className:"fa fa-spinner fa-spin fa-3x fa-fw"}),Object(j.jsx)("span",{className:"sr-only",children:"Loading..."})]})}function u(e){return Object(j.jsx)("div",{className:"alert alert-".concat(e.variant||"info"),children:e.children})}var O=t(9),h=t(19),x=t.n(h),p=t(29),v=t(30),m=t.n(v).a.create({baseURL:"https://arcane-badlands-11766.herokuapp.com/"}),f="PRODUCT_LIST_REQUEST",g="PRODUCT_LIST_SUCCESS",N="PRODUCT_LIST_FAIL",w=function(){return function(){var e=Object(p.a)(x.a.mark((function e(c){var t,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c({type:f}),e.prev=1,e.next=4,m.get("/api/products");case 4:t=e.sent,n=t.data,c({type:g,payload:n}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),c({type:N,payload:e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(c){return e.apply(this,arguments)}}()};function S(){var e=Object(O.b)(),c=Object(O.c)((function(e){return e.proudctList})),t=c.loading,r=c.error,s=c.products;return Object(n.useEffect)((function(){e(w())}),[e]),Object(j.jsx)("div",{children:t?Object(j.jsx)(b,{}):r?Object(j.jsx)(u,{variant:"danger",children:r}):Object(j.jsx)("div",{className:"row center",children:null===s||void 0===s?void 0:s.map((function(e){return Object(j.jsx)(o,{product:e},e._id)}))})})}var _=t(32);function y(e){var c=e.match,t=Object(O.b)(),r=Object(O.c)((function(e){return e.proudctList})).products,s=Object(n.useState)(),i=Object(_.a)(s,2),d=i[0],o=i[1];return Object(n.useEffect)((function(){t(w())}),[t]),Object(n.useEffect)((function(){var e=null===r||void 0===r?void 0:r.find((function(e){return e._id===c.params.id}));o(e)}),[r,c.params.id]),d?Object(j.jsxs)("div",{children:[Object(j.jsx)(a.b,{to:"/",children:"Back to Result"}),Object(j.jsxs)("div",{className:"row top",children:[Object(j.jsx)("div",{className:"col-2",children:Object(j.jsx)("img",{className:"large",src:"/amazing-shop-app"+(null===d||void 0===d?void 0:d.image),alt:""})}),Object(j.jsx)("div",{className:"col-1",children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)("h1",{children:null===d||void 0===d?void 0:d.name})}),Object(j.jsx)("li",{children:Object(j.jsx)(l,{rating:d.rating,numReviews:d.numReviews})}),Object(j.jsxs)("li",{children:["Price : ",d.price]}),Object(j.jsxs)("li",{children:["Description",Object(j.jsx)("p",{children:d.description})]})]})}),Object(j.jsx)("div",{className:"col-1",children:Object(j.jsx)("div",{className:"card card-body",children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{children:"Price"}),Object(j.jsxs)("div",{className:"price",children:["$",d.price]})]})}),Object(j.jsx)("li",{children:Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{children:"Status"}),Object(j.jsx)("div",{children:d.countInStock>0?Object(j.jsx)("span",{className:"success",children:"In Stock"}):Object(j.jsx)("span",{className:"Error",children:"Unavailable"})})]})}),Object(j.jsx)("li",{children:Object(j.jsx)("button",{className:"primary",children:"Add To Cart"})})]})})})]})]}):Object(j.jsx)("div",{children:"Product Not Found"})}var E=function(){return Object(j.jsx)(a.a,{children:Object(j.jsxs)("div",{className:"grid-container",children:[Object(j.jsxs)("header",{className:"row",children:[Object(j.jsx)("div",{children:Object(j.jsx)("a",{className:"brand",href:"/",children:"Amazing Shop"})}),Object(j.jsxs)("div",{children:[Object(j.jsx)("a",{href:"cart.html",children:"Cart"}),Object(j.jsx)("a",{href:"signin.html",children:"Sign In"})]})]}),Object(j.jsx)("main",{children:Object(j.jsxs)(d.c,{children:[Object(j.jsx)(d.a,{path:"/product/:id",component:y}),Object(j.jsx)(d.a,{path:"/",component:S})]})}),Object(j.jsx)("footer",{className:"row center",children:"All right reserved"})]})})},R=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,68)).then((function(c){var t=c.getCLS,n=c.getFID,r=c.getFCP,s=c.getLCP,i=c.getTTFB;t(e),n(e),r(e),s(e),i(e)}))},L=t(13),T=t(31),C=Object(L.b)({proudctList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{products:[],loading:!0},c=arguments.length>1?arguments[1]:void 0;switch(c.type){case f:return{loading:!0};case g:return{loading:!1,products:c.payload};case N:return{loading:!1,error:c.payload};default:return e}}}),I=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||L.c,P=Object(L.d)(C,{},I(Object(L.a)(T.a)));i.a.render(Object(j.jsx)(O.a,{store:P,children:Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(E,{})})}),document.getElementById("root")),R()}},[[67,1,2]]]);
//# sourceMappingURL=main.bb4e3f72.chunk.js.map