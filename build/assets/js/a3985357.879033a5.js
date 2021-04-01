(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{102:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return p}));var n=r(3),i=r(7),o=(r(0),r(122)),a=r(125),c={id:"suppliers",title:"Biometric Suppliers",sidebar_label:"Biometric Suppliers",slug:"/suppliers"},s={unversionedId:"architecture/suppliers",id:"architecture/suppliers",isDocsHomePage:!1,title:"Biometric Suppliers",description:"Biometrics suppliers are one of the most important components of our",source:"@site/docs/architecture/suppliers.md",slug:"/suppliers",permalink:"/b4ll-docs/docs/suppliers",version:"current",sidebar_label:"Biometric Suppliers",sidebar:"someSidebar",previous:{title:"Engine",permalink:"/b4ll-docs/docs/architecture/engine"},next:{title:"Introduction",permalink:"/b4ll-docs/docs/voice/intro"}},u=[],l={toc:u};function p(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Biometrics suppliers are one of the most important components of our\narchitecture. Through the suppliers we will have available the biometric\nalgorithms and solutions that are provided for the users' simulations. In this\nsense, the B4LL project acts as an API gateway. This allows that when desired,\nusers can experience the same solution through different proposals available."),Object(o.b)("p",null,"Our architecture is created in a simple way, allowing the rapid integration of\nnew biometrics suppliers whenever desirable. To do this, simply create a new\nLambida Functions, and its respectives handlers, with the information about the\nsupplier's API or SDK. This function will allows our engine to have access to\nthe services provided."),Object(o.b)("div",{style:{textAlign:"center"}},Object(o.b)("img",{alt:"B4ll architetcure",src:Object(a.a)("img/Suppliers.svg")})))}p.isMDXComponent=!0},122:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b}));var n=r(0),i=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=i.a.createContext({}),l=function(e){var t=i.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),d=n,b=p["".concat(a,".").concat(d)]||p[d]||f[d]||o;return r?i.a.createElement(b,c(c({ref:t},u),{},{components:r})):i.a.createElement(b,c({ref:t},u))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var u=2;u<o;u++)a[u]=r[u];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},125:function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return a}));var n=r(16),i=r(127);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(n.default)();return{withBaseUrl:(r,n)=>function(e,t,r,{forcePrependBaseUrl:n=!1,absolute:o=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if(Object(i.b)(r))return r;if(n)return t+r;const a=r.startsWith(t)?r:t+r.replace(/^\//,"");return o?e+a:a}(t,e,r,n)}}function a(e,t={}){const{withBaseUrl:r}=o();return r(e,t)}},127:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return i}))}}]);