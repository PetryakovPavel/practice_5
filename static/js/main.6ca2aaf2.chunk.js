(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,a,t){e.exports=t(22)},15:function(e,a,t){},22:function(e,a,t){"use strict";t.r(a);var l=t(2),n=t.n(l),r=t(9),c=(t(15),e=>{let{label:a,value:t,onChange:l}=e;return n.a.createElement("div",null,n.a.createElement("label",null,a),n.a.createElement("input",{className:"input",value:t,onChange:e=>l(e.target.value)}))});const u=[{label:"Afrikaans",value:"af"},{label:"Arabic",value:"ar"},{label:"French",value:"fr"},{label:"Hindi",value:"hi"},{label:"Japanese",value:"ja"},{label:"Portuguese",value:"pt"},{label:"English",value:"en"},{label:"Simplified Chinese",value:"zh-CN"},{label:"Spanish",value:"es"},{label:"Swahili",value:"sw"},{label:"Thai",value:"th"}];var s=e=>{let{language:a,onLanguageChange:t}=e;void 0===a&&(a="en");const r=u.find(e=>e.value===a);if(!r)throw new Error(`Unknown language code '${a}'`);const[c,s]=Object(l.useState)(!1);return n.a.createElement("div",null,n.a.createElement("label",{className:"label"},"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u044f\u0437\u044b\u043a"),n.a.createElement("div",{className:`dropdown ${c&&"is-active"}`},n.a.createElement("div",{className:"dropdown-trigger"},n.a.createElement("button",{className:"button",onClick:()=>s(!c)},n.a.createElement("span",null,r.label),n.a.createElement("span",{className:"icon is-small"},n.a.createElement("i",{className:"fas fa-angle-down"})))),n.a.createElement("div",{className:"dropdown-menu"},n.a.createElement("div",{className:"dropdown-content"},u.map(e=>{let{label:a,value:l}=e;return n.a.createElement("a",{key:Math.random(),href:"#",onClick:()=>(e=>{s(!1),t(e)})(l),className:"dropdown-item"},a)})))))},o=t(24);var i=e=>{let{language:a,text:t}=e;const[r,c]=Object(l.useState)("");return Object(l.useEffect)(()=>{if(!t)return;const e=o.a.CancelToken.source();return(async(e,a,t)=>{try{const{data:n}=await o.a.post("https://translation.googleapis.com/language/translate/v2?key=AIzaSyCf0Xy0OnhxlduyEt3K8zP-sOuu-l_u6uA",{q:e,target:a},{cancelToken:t.token});return n.data.translations[0].translatedText}catch(l){return""}})(t,a,e).then(c),()=>{try{e.cancel()}catch(a){}}},[t,a]),n.a.createElement("div",null,n.a.createElement("label",{className:"label"},"Output"),n.a.createElement("h1",{className:"title"},r))};function m(){const[e,a]=Object(l.useState)("en"),[t,r]=Object(l.useState)("\u0420\u0435\u0430\u043a\u0446\u0438\u044f");return n.a.createElement("div",null,n.a.createElement(c,{label:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0440\u0443\u0441\u0441\u043a\u0438\u0435 \u0441\u043b\u043e\u0432\u0430",onChange:r,value:t}),n.a.createElement(s,{language:e,onLanguageChange:a}),n.a.createElement("hr",null),n.a.createElement(i,{text:t,language:e}))}Object(r.render)(n.a.createElement(m,null),document.querySelector("#root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.6ca2aaf2.chunk.js.map