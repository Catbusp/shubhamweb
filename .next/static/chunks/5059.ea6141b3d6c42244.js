"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5059],{5059:function(e,o,l){l.r(o),l.d(o,{default:function(){return Projects}});var t=l(5893),s=JSON.parse('{"Oc":"Featured Projects","TN":"Take a Look at Some <br>of Our Work","LI":{"P":"All Projects","p":"/projects"},"jX":8}'),a=l(1664),c=l.n(a),n=l(3391),i=l.n(n),r=l(7294),d=l(2806),Projects=e=>{let{projects:o}=e,l=d.Xd.cn.b,a=(0,r.useRef)(),[n,m]=(0,r.useState)("*");(0,r.useEffect)(()=>{setTimeout(()=>{a.current=new(i())(".onovo-portfolio-items",{itemSelector:".onovo-portfolio-col",percentPosition:!0,masonry:{columnWidth:".onovo-portfolio-col"},animationOptions:{duration:750,easing:"linear",queue:!1}})},1e3),document.querySelectorAll(".onovo-filter-nav-active").forEach(e=>{e.style.width=e.parentNode.querySelector(".item--active").parentNode.offsetWidth+6+"px"})},[]),(0,r.useEffect)(()=>{a.current&&("*"===n?a.current.arrange({filter:"*"}):a.current.arrange({filter:".".concat(n)}))},[n]);let handleFilterKeyChange=e=>()=>{m(e);let o=document.querySelectorAll(".js-onovo-filter li");o.forEach(o=>{let l=o.querySelector("button").getAttribute("data-filter");l==e?o.querySelector("button").classList.add("item--active"):o.querySelector("button").classList.remove("item--active")});let l=document.querySelector(".onovo-filter.filter--default .item--active"),t=document.querySelector(".onovo-filter.filter--default .onovo-filter-nav-active");if(void 0!=t){let e=l.parentNode.offsetLeft,o=l.parentNode.offsetWidth;t.style.width=o+6+"px",t.style.left=e-3+"px"}};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("section",{className:"onovo-section gap-top-140 gap-bottom-140",children:(0,t.jsxs)("div",{className:"container-fluid",children:[(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-xs-12 col-sm-12 col-md-9 col-lg-9",children:(0,t.jsxs)("div",{className:"onovo-heading gap-bottom-40",children:[(0,t.jsx)("div",{className:"onovo-subtitle-1",children:(0,t.jsx)("span",{dangerouslySetInnerHTML:{__html:s.Oc}})}),(0,t.jsx)("h2",{className:"onovo-title-2",children:(0,t.jsx)("span",{dangerouslySetInnerHTML:{__html:s.TN}})})]})}),(0,t.jsx)("div",{className:"col-xs-12 col-sm-12 col-md-3 col-lg-3 align-right hide-on-mobile",children:(0,t.jsxs)(c(),{className:"onovo-btn onovo-hover-btn",href:s.LI.p,children:[(0,t.jsx)("i",{className:"arrow",children:(0,t.jsx)("span",{})}),(0,t.jsx)("span",{children:s.LI.P})]})})]}),(0,t.jsx)("div",{className:"onovo-portfolio portfolio--side",children:(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-3",children:(0,t.jsx)("div",{className:"onovo-filter-container",children:(0,t.jsx)("div",{className:"onovo-filter js-onovo-filter",children:(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:(0,t.jsx)("button",{onClick:handleFilterKeyChange("*"),className:"onovo-filter-item item--active",type:"button","data-filter":"*",children:(0,t.jsx)("span",{className:"onovo-lnk","data-splitting":!0,"data-onovo-scroll":!0,children:"All Projects"})})}),l.map((e,o)=>(0,t.jsx)("li",{children:(0,t.jsx)("button",{onClick:handleFilterKeyChange(e.slug),className:"onovo-filter-item",type:"button","data-filter":e.slug,children:(0,t.jsx)("span",{className:"onovo-lnk","data-splitting":!0,"data-onovo-scroll":!0,children:e.label})})},"categories-item-".concat(o)))]})})})}),(0,t.jsxs)("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-12",children:[(0,t.jsx)("div",{className:"row onovo-portfolio-items",children:o.slice(0,s.jX).map((e,o)=>(0,t.jsx)("div",{className:"col-xs-12 col-sm-12 col-md-6 col-lg-4 onovo-portfolio-col ".concat(e.category_slug),children:(0,t.jsxs)("div",{className:"onovo-portfolio-item",children:[(0,t.jsx)("div",{className:"image","data-onovo-overlay":!0,"data-onovo-scroll":!0,children:(0,t.jsx)("a",{href:"/projects/".concat(e.id),className:"onovo-hover-3",children:(0,t.jsx)("img",{src:e.image,alt:e.title})})}),(0,t.jsxs)("div",{className:"desc",children:[(0,t.jsx)("h5",{className:"title",children:(0,t.jsx)("a",{className:"onovo-lnk",href:"/projects/".concat(e.id),children:(0,t.jsx)("span",{"data-splitting":!0,"data-onovo-scroll":!0,children:e.title})})}),(0,t.jsx)("div",{className:"text",children:(0,t.jsx)("div",{"data-splitting":!0,"data-onovo-scroll":!0,children:(0,t.jsx)("span",{children:e.category})})})]})]})},"projects-item-".concat(o)))}),(0,t.jsx)("div",{className:"align-center hide-on-desktop",children:(0,t.jsxs)(c(),{className:"onovo-btn onovo-hover-btn",href:s.LI.p,children:[(0,t.jsx)("i",{className:"arrow",children:(0,t.jsx)("span",{})}),(0,t.jsx)("span",{children:s.LI.P})]})})]})]})})]})})})}}}]);