(this["webpackJsonpreact-quiz-app"]=this["webpackJsonpreact-quiz-app"]||[]).push([[0],{78:function(e,t,c){},79:function(e,t,c){},86:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),s=c(27),i=c.n(s),r=(c(78),c(79),c(13)),l=c(128),o=c(126),u={marginBottom:"25px"},h={marginBottom:"25px"},b=c(15),j=c(114),d=c(127),p=c(122),v=c(123),x=c(2),m=function(e){var t=e.choices.map((function(e){return{value:e.value,checked:!1}})),c=Object(n.useState)(t),a=Object(r.a)(c,2),s=a[0],i=a[1];return Object(x.jsxs)("div",{style:e.style,children:[Object(x.jsx)(j.a,{children:"\u7b54\u3048"}),Object(x.jsx)(d.a,{"aria-label":"choices",name:"choices",onChange:function(t){var c=Object(b.a)(s).map((function(e){return e.value===t.target.value?{value:e.value,checked:t.target.checked}:e}));i(c),e.setInputAnswer(c.filter((function(e){return e.checked})).map((function(e){return e.value})))},children:e.choices.map((function(e){return Object(x.jsx)(p.a,{value:e.value,control:Object(x.jsx)(v.a,{}),label:e.label},e.value)}))})]})},y=c(125),O=c(121),f=function(e){return Object(x.jsxs)("div",{style:e.style,children:[Object(x.jsx)(j.a,{children:"\u7b54\u3048"}),Object(x.jsx)(y.a,{"aria-label":"choices",name:"choices",onChange:function(t){return e.setInputAnswer(t.target.value)},children:e.choices.map((function(e){return Object(x.jsx)(p.a,{value:e.value,control:Object(x.jsx)(O.a,{}),label:e.label},e.value)}))})]})},w=c(119),g=function(e){return Object(x.jsx)("div",{children:Object(x.jsx)(w.a,{variant:"standard",style:e.style,label:"\u7b54\u3048",type:e.type,onChange:function(t){return e.setInputAnswer(t.target.value)}})})},k=function(e){var t,c=Object(n.useState)(),a=Object(r.a)(c,2),s=a[0],i=a[1],b=function(e){t=Object(x.jsx)("p",{className:"error",children:e}),v=!0},j=function(){alert("\u56de\u7b54\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\uff01")},d=function(){alert("\u6b63\u89e3\u3067\u3059\uff01\u3000\u7d20\u6674\u3089\u3057\u3044\uff01\uff01")},p=function(){alert("\u6b8b\u5ff5\uff01\u3000\u4e0d\u6b63\u89e3\u3067\u3059\u3002")},v=!1;switch(e.type){case"number":t=Object(x.jsx)(g,{style:u,type:"number",setInputAnswer:i});break;case"text":t=Object(x.jsx)(g,{style:u,setInputAnswer:i});break;case"radio":Array.isArray(e.choices)?0===e.choices.length?b("\u9078\u629e\u80a2\u30921\u3064\u4ee5\u4e0a\u6307\u5b9a\u3057\u3066\u304f\u3060\u3055\u3044\u3002"):t=Object(x.jsx)(f,{style:u,choices:e.choices,setInputAnswer:i}):b("\u9078\u629e\u80a2\u3092\u914d\u5217\u3067\u6307\u5b9a\u3057\u3066\u304f\u3060\u3055\u3044\u3002");break;case"checkbox":Array.isArray(e.choices)?0===e.choices.length?b("\u9078\u629e\u80a2\u30921\u3064\u4ee5\u4e0a\u6307\u5b9a\u3057\u3066\u304f\u3060\u3055\u3044\u3002"):Array.isArray(e.answer)?0===e.answer.length?b("\u6b63\u7b54\u30921\u3064\u4ee5\u4e0a\u6307\u5b9a\u3057\u3066\u304f\u3060\u3055\u3044\u3002"):t=Object(x.jsx)(m,{style:u,choices:e.choices,setInputAnswer:i}):b("\u6b63\u7b54\u3092\u914d\u5217\u3067\u6307\u5b9a\u3057\u3066\u304f\u3060\u3055\u3044\u3002"):b("\u9078\u629e\u80a2\u3092\u914d\u5217\u3067\u6307\u5b9a\u3057\u3066\u304f\u3060\u3055\u3044\u3002");break;default:b("\u56de\u7b54\u65b9\u6cd5\u3092\u6307\u5b9a\u3057\u3066\u304f\u3060\u3055\u3044\u3002")}return Object(x.jsxs)(l.a,{className:"QuizBoard",elevation:3,children:[Object(x.jsxs)("h2",{children:["\u7b2c",e.id,"\u554f"]}),Object(x.jsx)("p",{children:e.statement}),t,Object(x.jsx)(o.a,{variant:"contained",style:h,disabled:v,onClick:function(){switch(e.type){case"number":case"text":case"radio":null==s||""===s?j():s===e.answer?d():p();break;case"checkbox":null==s||0===s.length?j():s.length===e.answer.length&&s.every((function(t){return e.answer.includes(t)}))?d():p()}},children:"\u7b54\u3048\u5408\u308f\u305b\u3092\u3059\u308b"})]})},A=[{id:1,statement:"10000000\u306e100000\u500d\u306f1(\u3000\u3000)\u3067\u3042\u308b\u3002\u62ec\u5f27\u306b\u3042\u3066\u306f\u307e\u308b\u6f22\u5b571\u5b57\u3092\u7b54\u3048\u3088\u3002",type:"text",answer:"\u5146"},{id:2,statement:"4\u30686\u306e\u6700\u5c0f\u516c\u500d\u6570\u306f\u3044\u304f\u3064\u304b\u3002",type:"number",answer:"12"},{id:3,statement:"\u6b21\u306e\u3046\u3061\u3001\u6b63\u3057\u3044\u4e3b\u5f35\u306f\u3069\u308c\u304b\u3002",type:"radio",choices:[{value:"choice1",label:"\u5076\u6570\u3068\u5076\u6570\u306e\u548c\u306f\u5947\u6570\u3067\u3042\u308b\u3002"},{value:"choice2",label:"\u5076\u6570\u3068\u5947\u6570\u306e\u548c\u306f\u5076\u6570\u3067\u3042\u308b\u3002"},{value:"choice3",label:"\u5947\u6570\u3068\u5076\u6570\u306e\u548c\u306f\u5947\u6570\u3067\u3042\u308b\u3002"},{value:"choice4",label:"\u5947\u6570\u3068\u5947\u6570\u306e\u548c\u306f\u5947\u6570\u3067\u3042\u308b\u3002"}],answer:"choice3"},{id:4,statement:"\u6b21\u306e\u3046\u3061\u3001\u7d20\u6570\u3067\u3042\u308b\u3082\u306e\u3092\u3059\u3079\u3066\u9078\u3079\u3002",type:"checkbox",choices:[{value:"choice1",label:"1"},{value:"choice2",label:"2"},{value:"choice3",label:"3"},{value:"choice4",label:"4"}],answer:["choice2","choice3"]},{id:5,statement:"\u56de\u7b54\u65b9\u6cd5\u304c\u672a\u6307\u5b9a\u3001\u3082\u3057\u304f\u306f\u5b9a\u7fa9\u3055\u308c\u3066\u3044\u306a\u3044\u56de\u7b54\u65b9\u6cd5\u306e\u5834\u5408"},{id:6,statement:"\u56de\u7b54\u65b9\u6cd5\u3092\u30e9\u30b8\u30aa\u30dc\u30bf\u30f3\u307e\u305f\u306f\u30c1\u30a7\u30c3\u30af\u30dc\u30c3\u30af\u30b9\u3068\u3057\u3001\u9078\u629e\u80a2\u3092\u914d\u5217\u3067\u4e0e\u3048\u3066\u3044\u306a\u3044\u5834\u5408",type:"radio",choices:"something",answer:"something"},{id:7,statement:"\u56de\u7b54\u65b9\u6cd5\u3092\u30e9\u30b8\u30aa\u30dc\u30bf\u30f3\u307e\u305f\u306f\u30c1\u30a7\u30c3\u30af\u30dc\u30c3\u30af\u30b9\u3068\u3057\u3001\u9078\u629e\u80a2\u306e\u914d\u5217\u304c\u7a7a\u306e\u5834\u5408",type:"checkbox",choices:[],answer:"nothing"},{id:8,statement:"\u56de\u7b54\u65b9\u6cd5\u3092\u30c1\u30a7\u30c3\u30af\u30dc\u30c3\u30af\u30b9\u3068\u3057\u3001\u6b63\u7b54\u3092\u914d\u5217\u3067\u4e0e\u3048\u3066\u3044\u306a\u3044\u5834\u5408",type:"checkbox",choices:[{value:"choice1",label:"1"},{value:"choice2",label:"2"},{value:"choice3",label:"3"},{value:"choice4",label:"4"}],answer:"choice3"},{id:9,statement:"\u56de\u7b54\u65b9\u6cd5\u3092\u30c1\u30a7\u30c3\u30af\u30dc\u30c3\u30af\u30b9\u3068\u3057\u3001\u6b63\u7b54\u306e\u914d\u5217\u304c\u7a7a\u306e\u5834\u5408",type:"checkbox",choices:["\u8d77","\u627f","\u8ee2","\u7d50"],answer:[]}];var I=function(){return Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)("h1",{children:"React\u3067\u7c21\u5358\u306a\u30af\u30a4\u30ba\u753b\u9762\u4f5c\u6210"}),A.map((function(e){return Object(x.jsx)(k,{id:e.id,statement:e.statement,type:e.type,choices:e.choices,answer:e.answer},e.id)}))]})},C=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,129)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),s(e),i(e)}))};i.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(I,{})}),document.getElementById("root")),C()}},[[86,1,2]]]);
//# sourceMappingURL=main.282136c0.chunk.js.map