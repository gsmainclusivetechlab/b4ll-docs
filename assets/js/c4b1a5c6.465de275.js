(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{107:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return d}));var n=a(3),r=a(7),l=(a(0),a(122)),c=a(183),o={title:"Call Centre Enrolment",sidebar_label:"Enrolment"},s={unversionedId:"voice/callcentre",id:"voice/callcentre",isDocsHomePage:!1,title:"Call Centre Enrolment",description:"To demonstrate test the Call Centre showcase register in our database the number",source:"@site/docs/voice/callcentre.md",slug:"/voice/callcentre",permalink:"/b4ll-docs/docs/voice/callcentre",version:"current",sidebar_label:"Enrolment",sidebar:"someSidebar",previous:{title:"Alerts",permalink:"/b4ll-docs/docs/voice/alerts"},next:{title:"B4LL Application",permalink:"/b4ll-docs/docs/app/info"}},i=[],u={toc:i};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"To demonstrate test the Call Centre showcase register in our database the number\nyou will use to reach the call centre. Please read carefully the terms and\nconditions before testing this asset."),Object(l.b)(c.a,{mdxType:"RegisterButton"})," ",Object(l.b)("br",null))}d.isMDXComponent=!0},183:function(e,t,a){"use strict";(function(e){a.d(t,"a",(function(){return u}));var n=a(3),r=a(61),l=a.n(r),c=a(0),o=a.n(c),s=a(155),i=a.n(s);function u(){const[t,a]=o.a.useState(!1),r=(e=>{const[t,a]=o.a.useState(e);return{value:t,onChange:o.a.useCallback((e=>a(`+${e.target.value.replace(/[^\d]/gi,"")}`)),[a]),onFocus:o.a.useCallback((e=>a(`+${e.target.value.replace(/[^\d]/gi,"")}`)),[t,a])}})("+44..."),{trigger:c,state:s}=(t=>{const[a,n]=o.a.useState({state:"INIT"});return{state:a,trigger:o.a.useCallback((async()=>{n({state:"PENDING"});try{await i.a.get(`${e.env.API_HOST}/en-GB/register?Caller=${encodeURIComponent(t)}`).then((function(e){"OK"==e.data.status?n({state:"SUCCESS"}):n({state:"ERROR"})}))}catch(a){n({state:"ERROR",error:a.response.data.error||"An unexpected error occurred"})}}),[t,n])}})(r.value);switch(s.state){case"PENDING":return o.a.createElement("div",null,"Please wait...");case"SUCCESS":return o.a.createElement("div",null,"Your number has been successfully approved! You may now call and use the call centre.");case"ERROR":return o.a.createElement("div",null,"There was a problem adding your number. It may already be approved or the format is incorrect. Please verify your number is correct and try again.")}let u=s.error||null;return o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement("input",Object(n.a)({className:l.a.input,type:"text",placeholder:"+44"},r)),o.a.createElement("button",{disabled:!t,className:l.a.button,onClick:c},"Register"),o.a.createElement("br",null),u?o.a.createElement("div",{className:"admonition admonition-danger alert alert--danger"},o.a.createElement("div",{className:"admonition-content"},o.a.createElement("p",null,u))):null),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("div",{className:"TermsButton"},o.a.createElement("div",{className:"container"},o.a.createElement("div",null,o.a.createElement("input",{type:"checkbox",id:"agree",onChange:()=>{a(!t)}}),o.a.createElement("label",{htmlFor:"agree"}," I have read and agreed to the ",o.a.createElement("a",{href:"https://gsmainclusivetechlab.github.io/bilt-voice/voice/terms"},"terms and conditions."))))))}}).call(this,a(140))}}]);