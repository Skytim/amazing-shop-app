(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{33:function(e,c,t){},62:function(e,c,t){"use strict";t.r(c);var n=t(1),i=t.n(n),r=t(25),a=t.n(r),s=(t(33),t(8)),d=t(2),j=t(14),o=t.n(j),l=t(26),b=t(11),u=t(0),m=function(e){return Object(u.jsxs)("div",{className:"rating",children:[[1,2,3,4,5].map((function(c){return Object(u.jsx)("span",{children:Object(u.jsx)("i",{className:e.rating>=c?"fa fa-star":e.rating>=c-.5?"fa fa-star-half-o":"fa fa-star-o"})},c)})),Object(u.jsxs)("span",{children:[e.numReviews," Reviews"]})]})};var h=function(e){var c,t=null!==(c=e.product)&&void 0!==c?c:{};return Object(u.jsxs)("div",{className:"card",children:[Object(u.jsx)(s.b,{to:"/product/"+t._id,children:Object(u.jsx)("img",{className:"medium",src:"/amazing-shop-app"+t.image,alt:t.name})}),Object(u.jsxs)("div",{className:"card-body",children:[Object(u.jsx)(s.b,{to:"/product/"+t._id,children:Object(u.jsx)("h2",{children:t.name})}),Object(u.jsx)(m,{rating:t.rating,numReviews:t.numReviews})]}),Object(u.jsxs)("div",{className:"price",children:["$ ",t.price]})]},t._id)};function p(){return Object(u.jsxs)("div",{className:"fa-3x",children:[Object(u.jsx)("i",{className:"fa fa-spinner fa-spin fa-3x fa-fw"}),Object(u.jsx)("span",{className:"sr-only",children:"Loading..."})]})}function O(e){return Object(u.jsx)("div",{className:"alert alert-".concat(e.variant||"info"),children:e.children})}var x=t(28),v=t.n(x).a.create({baseURL:"https://arcane-badlands-11766.herokuapp.com/"});function g(){var e=Object(n.useState)([]),c=Object(b.a)(e,2),t=c[0],i=c[1],r=Object(n.useState)(!1),a=Object(b.a)(r,2),s=a[0],d=a[1],j=Object(n.useState)(!1),m=Object(b.a)(j,2),x=m[0],g=m[1];return Object(n.useEffect)((function(){(function(){var e=Object(l.a)(o.a.mark((function e(){var c,t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,d(!0),e.next=4,v.get("/api/products");case 4:c=e.sent,t=c.data,d(!1),i(t),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),g(e.t0.message),d(!1);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(u.jsx)("div",{children:s?Object(u.jsx)(p,{}):x?Object(u.jsx)(O,{variant:"danger",children:x}):Object(u.jsx)("div",{className:"row center",children:null===t||void 0===t?void 0:t.map((function(e){return Object(u.jsx)(h,{product:e},e._id)}))})})}var f={products:[{_id:"1",name:"Top G1",category:"Gio",image:"/images/product-1.png",price:300,brand:"City",rating:4.5,numReviews:8,description:"blue robot",countInStock:10},{_id:"2",name:"Top GP G2",category:"Gundam",image:"/images/product-2.jpeg",price:280,brand:"City",rating:3,numReviews:3,description:"robot with orrnage",countInStock:5},{_id:"3",name:"Guit G3",category:"Unioql",image:"/images/product-3.jpeg",price:500,brand:"Bandi",rating:2.5,numReviews:7,description:"bGG suit",countInStock:4},{_id:"4",name:"Top G4",category:"Gundam",image:"/images/product-4.jpg",price:1230,brand:"Ghio",rating:3,numReviews:4,description:"blue robot",countInStock:0},{_id:"5",name:"TYGI",category:"Cioo",image:"/images/product-5.jpg",price:3e3,brand:"Bandi",rating:4.5,numReviews:3,description:"blue robot",countInStock:4},{_id:"6",name:"FAFA G",category:"Cioo",image:"/images/product-6.jpg",price:30,brand:"Jueq",rating:5,numReviews:3,description:"Hello FG",countInStock:4}]};function N(e){var c=e.match,t=f.products.find((function(e){return e._id===c.params.id}));return t?Object(u.jsxs)("div",{children:[Object(u.jsx)(s.b,{to:"/",children:"Back to Result"}),Object(u.jsxs)("div",{className:"row top",children:[Object(u.jsx)("div",{className:"col-2",children:Object(u.jsx)("img",{className:"large",src:"/amazing-shop-app"+(null===t||void 0===t?void 0:t.image),alt:""})}),Object(u.jsx)("div",{className:"col-1",children:Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:Object(u.jsx)("h1",{children:null===t||void 0===t?void 0:t.name})}),Object(u.jsx)("li",{children:Object(u.jsx)(m,{rating:t.rating,numReviews:t.numReviews})}),Object(u.jsxs)("li",{children:["Price : ",t.price]}),Object(u.jsxs)("li",{children:["Description",Object(u.jsx)("p",{children:t.description})]})]})}),Object(u.jsx)("div",{className:"col-1",children:Object(u.jsx)("div",{className:"card card-body",children:Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{children:"Price"}),Object(u.jsxs)("div",{className:"price",children:["$",t.price]})]})}),Object(u.jsx)("li",{children:Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{children:"Status"}),Object(u.jsx)("div",{children:t.countInStock>0?Object(u.jsx)("span",{className:"success",children:"In Stock"}):Object(u.jsx)("span",{className:"Error",children:"Unavailable"})})]})}),Object(u.jsx)("li",{children:Object(u.jsx)("button",{className:"primary",children:"Add To Cart"})})]})})})]})]}):Object(u.jsx)("div",{children:"Product Not Found"})}var w=function(){return Object(u.jsx)(s.a,{children:Object(u.jsxs)("div",{className:"grid-container",children:[Object(u.jsxs)("header",{className:"row",children:[Object(u.jsx)("div",{children:Object(u.jsx)("a",{className:"brand",href:"/",children:"Amazing Shop"})}),Object(u.jsxs)("div",{children:[Object(u.jsx)("a",{href:"cart.html",children:"Cart"}),Object(u.jsx)("a",{href:"signin.html",children:"Sign In"})]})]}),Object(u.jsx)("main",{children:Object(u.jsxs)(d.c,{children:[Object(u.jsx)(d.a,{path:"/product/:id",component:N}),Object(u.jsx)(d.a,{path:"/",component:g})]})}),Object(u.jsx)("footer",{className:"row center",children:"All right reserved"})]})})},S=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,63)).then((function(c){var t=c.getCLS,n=c.getFID,i=c.getFCP,r=c.getLCP,a=c.getTTFB;t(e),n(e),i(e),r(e),a(e)}))};a.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(w,{})}),document.getElementById("root")),S()}},[[62,1,2]]]);
//# sourceMappingURL=main.89aacdbf.chunk.js.map