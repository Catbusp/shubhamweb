"use strict";(()=>{var e={};e.id=7054,e.ids=[7054,2888,660],e.modules={8342:(e,t,s)=>{s.a(e,async(e,r)=>{try{s.r(t),s.d(t,{config:()=>m,default:()=>p,getServerSideProps:()=>x,getStaticPaths:()=>v,getStaticProps:()=>u,reportWebVitals:()=>h,routeModule:()=>b,unstable_getServerProps:()=>_,unstable_getServerSideProps:()=>S,unstable_getStaticParams:()=>P,unstable_getStaticPaths:()=>j,unstable_getStaticProps:()=>g});var a=s(7093),i=s(5244),o=s(1323),l=s(4024),c=s(8397),n=s(4058),d=e([c,n]);[c,n]=d.then?(await d)():d;let p=(0,o.l)(n,"default"),u=(0,o.l)(n,"getStaticProps"),v=(0,o.l)(n,"getStaticPaths"),x=(0,o.l)(n,"getServerSideProps"),m=(0,o.l)(n,"config"),h=(0,o.l)(n,"reportWebVitals"),g=(0,o.l)(n,"unstable_getStaticProps"),j=(0,o.l)(n,"unstable_getStaticPaths"),P=(0,o.l)(n,"unstable_getStaticParams"),_=(0,o.l)(n,"unstable_getServerProps"),S=(0,o.l)(n,"unstable_getServerSideProps"),b=new a.PagesRouteModule({definition:{kind:i.x.PAGES,page:"/services",pathname:"/services",bundlePath:"",filename:""},components:{App:c.default,Document:l.default},userland:n});r()}catch(e){r(e)}})},1868:(e,t,s)=>{s.d(t,{Z:()=>Video});var r=s(997),a=s(6689);let i=JSON.parse('{"PS":"Play Video - Play Video - Play Video -","lX":"Gu6z6kIukgg","Md":"/images/posts1.jpg"}');var o=s(838);let Video=()=>{(0,a.useEffect)(()=>{(0,o.V0)()},[]);let clickedVideoButton=e=>{e.preventDefault(),e.target.parentNode.classList.add("active");let t=e.target.parentNode.querySelector(".js-video-iframe"),s=t.dataset.src;t.setAttribute("src",s)};return r.jsx(r.Fragment,{children:r.jsx("section",{className:"onovo-section",children:r.jsx("div",{className:"container",children:(0,r.jsxs)("div",{className:"onovo-video","data-onovo-overlay":!0,"data-onovo-scroll":!0,children:[r.jsx("div",{className:"image",onClick:e=>clickedVideoButton(e),style:{backgroundImage:"url("+i.Md+")"}}),r.jsx("iframe",{className:"js-video-iframe","data-src":"https://www.youtube.com/embed/"+i.lX+"?showinfo=0&rel=0&autoplay=1"}),(0,r.jsxs)("div",{className:"play onovo-circle-text",onClick:e=>clickedVideoButton(e),children:[r.jsx("div",{className:"arrow"}),r.jsx("div",{className:"label onovo-text-black onovo-circle-text-label",children:i.PS})]})]})})})})}},4058:(e,t,s)=>{s.a(e,async(e,r)=>{try{s.r(t),s.d(t,{default:()=>__WEBPACK_DEFAULT_EXPORT__,getStaticProps:()=>getStaticProps});var a=s(997);s(6689);var i=s(853),o=s(9781),l=s(1664),c=s.n(l),n=s(4684),d=s(7668),p=s(6714),u=s(1868),v=s(6643),x=s(3408),m=e([n]);n=(m.then?(await m)():m)[0];let __WEBPACK_DEFAULT_EXPORT__=e=>(0,a.jsxs)(o.Z,{children:[a.jsx(i.Z,{pageTitle:"Our Services",pageDesc:"Our values and vaulted us to the top of our industry."}),a.jsx(d.Z,{introHidden:!0,noPaddingBottom:!0}),a.jsx(p.Z,{}),a.jsx(u.Z,{}),a.jsx("section",{className:"onovo-section gap-top-140 gap-bottom-140",children:(0,a.jsxs)("div",{className:"container",children:[(0,a.jsxs)("div",{className:"onovo-heading gap-bottom-40",children:[a.jsx("div",{className:"onovo-subtitle-1",children:a.jsx("span",{children:"What we do"})}),a.jsx("h2",{className:"onovo-title-2",children:a.jsx("span",{children:"We’re a full-service agency"})})]}),a.jsx("div",{className:"onovo-services-list",children:e.services.map((e,t)=>a.jsx("div",{className:"onovo-service-item-list",children:(0,a.jsxs)("div",{className:"onovo-service-item-list-inner",children:[a.jsx("div",{className:"image onovo-hover-1",children:a.jsx(c(),{href:`/services/${e.id}`,children:a.jsx("img",{src:e.icon,alt:e.title})})}),a.jsx("div",{className:"num",children:(0,a.jsxs)("span",{children:[" 0",t+1,". "]})}),a.jsx("h5",{className:"title",children:a.jsx(c(),{href:`/services/${e.id}`,children:a.jsx("span",{children:e.title})})}),a.jsx("div",{className:"onovo-text",children:a.jsx("div",{children:a.jsx("p",{children:e.short})})})]})},`services-item-${t}`))})]})}),a.jsx(v.Z,{}),a.jsx(x.Z,{paddingTop:!0})]});async function getStaticProps(){let e=(0,n.M9)();return{props:{services:e}}}r()}catch(e){r(e)}})},8076:e=>{e.exports=require("gray-matter")},2785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},968:e=>{e.exports=require("next/head")},6689:e=>{e.exports=require("react")},609:e=>{e.exports=require("react-countup")},6405:e=>{e.exports=require("react-dom")},997:e=>{e.exports=require("react/jsx-runtime")},7748:e=>{e.exports=require("scroll-out")},9116:e=>{e.exports=require("splitting")},3025:e=>{e.exports=import("remark")},7740:e=>{e.exports=import("remark-html")},9179:e=>{e.exports=import("swiper/element/bundle")},7147:e=>{e.exports=require("fs")},1017:e=>{e.exports=require("path")},2781:e=>{e.exports=require("stream")},9796:e=>{e.exports=require("zlib")}};var t=require("../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),s=t.X(0,[6859,5656,7142,1163,8397,4024,9781,853,3408,4684,6643,7668,6714],()=>__webpack_exec__(8342));module.exports=s})();