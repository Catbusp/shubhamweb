"use strict";exports.id=8028,exports.ids=[8028],exports.modules={4136:(e,s,a)=>{a.d(s,{Z:()=>Awards});var i=a(997);let l=JSON.parse('{"O":"Awards","e":[{"image":"/images/award1.png","alt":"award","label":"7 SOTD <br/> 17 HONORABLE MENTION <br/> 3 MOBILE EXCELLENCE","value":"31"},{"image":"/images/award2.png","alt":"award","label":"11 SOTD <br/> 5 SPECIAL KUDOS","value":"16"},{"image":"/images/award3.png","alt":"award","label":"AWARD 2019 <br/> 1 GLOBAL COMPETITION","value":"20"}]}'),Awards=()=>i.jsx(i.Fragment,{children:i.jsx("section",{className:"onovo-section gap-bottom-140",children:(0,i.jsxs)("div",{className:"container",children:[i.jsx("div",{className:"onovo-heading",children:i.jsx("h5",{className:"onovo-subtitle-1",children:i.jsx("span",{dangerouslySetInnerHTML:{__html:l.O}})})}),i.jsx("div",{className:"row gap-row",children:l.e.map((e,s)=>(0,i.jsxs)("div",{className:"col-xs-12 col-sm-12 col-md-4 col-lg-4",children:[i.jsx("p",{children:i.jsx("img",{src:e.image,alt:e.alt})}),i.jsx("h5",{className:"onovo-title-1",children:e.value}),i.jsx("span",{dangerouslySetInnerHTML:{__html:e.label}})]},`awards-item-${s}`))})]})})})},691:(e,s,a)=>{a.d(s,{Z:()=>Services4});var i=a(997);a(6689);let l=JSON.parse('{"Oc":"What we do","TN":"We’re a full-service agency","jX":5}'),Services4=({services:e})=>i.jsx(i.Fragment,{children:i.jsx("section",{className:"onovo-section gap-bottom-140",children:(0,i.jsxs)("div",{className:"container",children:[(0,i.jsxs)("div",{className:"onovo-heading gap-bottom-40",children:[i.jsx("div",{className:"onovo-subtitle-1",children:i.jsx("span",{children:l.Oc})}),i.jsx("h2",{className:"onovo-title-2",children:i.jsx("span",{children:l.TN})})]}),i.jsx("div",{className:"onovo-services-list",children:e.slice(0,l.jX).map((e,s)=>i.jsx("div",{className:"onovo-service-item-list",children:(0,i.jsxs)("div",{className:"onovo-service-item-list-inner",children:[i.jsx("div",{className:"image onovo-hover-1",children:i.jsx("a",{href:`/services/${e.id}`,children:i.jsx("img",{src:e.icon,alt:e.title})})}),i.jsx("div",{className:"num",children:(0,i.jsxs)("span",{children:[" 0",s+1,". "]})}),i.jsx("h5",{className:"title",children:i.jsx("a",{href:`/services/${e.id}`,children:i.jsx("span",{children:e.title})})}),i.jsx("div",{className:"onovo-text",children:i.jsx("div",{children:i.jsx("p",{children:e.short})})})]})},`services4-item-${s}`))})]})})})}};