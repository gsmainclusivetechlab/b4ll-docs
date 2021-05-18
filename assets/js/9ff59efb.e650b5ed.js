(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{120:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),u=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,m=p["".concat(a,".").concat(d)]||p[d]||b[d]||o;return n?i.a.createElement(m,c(c({ref:t},l),{},{components:n})):i.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},123:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return a}));var r=n(16),i=n(125);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(r.default)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:o=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(i.b)(n))return n;if(r)return t+n;const a=n.startsWith(t)?n:t+n.replace(/^\//,"");return o?e+a:a}(t,e,n,r)}}function a(e,t={}){const{withBaseUrl:n}=o();return n(e,t)}},125:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return i}))},97:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),i=n(7),o=(n(0),n(120)),a=n(123),c={title:"Introduction",sidebar_label:"Introduction"},s={unversionedId:"voice/intro",id:"voice/intro",isDocsHomePage:!1,title:"Introduction",description:"Voice is one of the biometric types approachd in the B4LL project to demonstrate",source:"@site/docs/voice/intro.md",slug:"/voice/intro",permalink:"/b4ll-docs/voice/intro",version:"current",sidebar_label:"Introduction",sidebar:"someSidebar",previous:{title:"Biometric Suppliers",permalink:"/b4ll-docs/suppliers"},next:{title:"Call Centre Flow",permalink:"/b4ll-docs/voice/flow"}},l=[],u={toc:l};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Voice is one of the biometric types approachd in the B4LL project to demonstrate\nthe strengths of using voice and speech recognition, and therefore, the\nidentification and authentication of mobile users to access mobile services."),Object(o.b)("p",null,"The voice solution consists of an IVR Server System that allows the user to talk\nto a voicebot through a menu of different possibilities. The services available\nare a simulation of real services and have the purpose of demonstrate the use of\nvoice registration and authentication."),Object(o.b)("p",null,"Based on the B4LL project architecture, the voice solution has three main\nelements (call center, Engine and Biometric Supplier) and works like the figure\nshown below. the user calls the call center to access the menu and the available\nuse cases. The call center communicates with the engine that acts as an\norchestrator between the call center and the biometric supplier, managing the\ncommunication between them. The biometric supplier in turn provides the solution\nfor voice recording and voice recognition."),Object(o.b)("img",{alt:"Voice Biometrics Architecture",src:Object(a.a)("img/VoiceArchitecture.svg")}),Object(o.b)("p",null,"The registration will take place through the voice recording for a specific\npassphrase, the voice patterns detection and speech styles detection. Thus the\nbiometric solution creates a digital signature for the user. Once the record is\ncreated, it is possible to perform authentication using the registered\npassphrase by comparing the current user's voice with the stored signature."),Object(o.b)("p",null,"The solution is an open source asset that allows mobile operators to test the\nuse of voice for authenticating customers\u2019 identity in different use cases.\nSpecifically, the asset will allow operators and FSPs to:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Register their voice,")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Navigate menus and execute commands using their voice,")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Receive phone calls to validate actions/activities, and")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Identify themselves using their voice to be granted permission to execute\nsecure actions."))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Figure:")," The figure below shows a more detailed view comparing the voice\nasset with our architecture."),Object(o.b)("img",{alt:"Voice Biometrics Detailed Architecture",src:Object(a.a)("img/VoiceDetailedArch.png")}),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"It is important to point out that the proposed demo asset will only be available\nto mobile operators to see the possibilities of biometrics with demo data i.e.\nno real customer data will be used in this project."))))}p.isMDXComponent=!0}}]);