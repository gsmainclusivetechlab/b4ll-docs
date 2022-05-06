(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{124:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=b(n),m=a,d=u["".concat(c,".").concat(m)]||u[m]||p[m]||i;return n?r.a.createElement(d,o(o({ref:t},s),{},{components:n})):r.a.createElement(d,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var s=2;s<i;s++)c[s]=n[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},126:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return c}));var a=n(16),r=n(128);function i(){var e=Object(a.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var i=void 0===a?{}:a,c=i.forcePrependBaseUrl,o=void 0!==c&&c,l=i.absolute,s=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(o)return t+n;var b=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+b:b}(i,n,e,t)}}}function c(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},128:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}))},84:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),i=(n(0),n(124)),c=n(126),o={title:"B4LL Application - Use Cases",sidebar_label:"Use Cases"},l={unversionedId:"app/usecases",id:"app/usecases",isDocsHomePage:!1,title:"B4LL Application - Use Cases",description:"Simulating payment transactions",source:"@site/docs/app/usecases.md",slug:"/app/usecases",permalink:"/app/usecases",version:"current",sidebar_label:"Use Cases",sidebar:"someSidebar",previous:{title:"B4LL Application - Setup & Registration",permalink:"/app/setup"},next:{title:"B4LL Application - Settings",permalink:"/app/settings"}},s=[{value:"Simulating payment transactions",id:"simulating-payment-transactions",children:[{value:"Account balance",id:"account-balance",children:[]},{value:"Make a transfer",id:"make-a-transfer",children:[]},{value:"Pay bill",id:"pay-bill",children:[]}]}],b={toc:s};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"simulating-payment-transactions"},"Simulating payment transactions"),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Note: On registration, users will be automatically credited with $100. Any transactions will reduce the balance. When the balance reaches $0, the system will be auto-reloaded to $100."))),Object(i.b)("h3",{id:"account-balance"},"Account balance"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"You can check your account\u2019s balance by using the ",Object(i.b)("strong",{parentName:"li"},"Account Balance")," option on the home page."),Object(i.b)("li",{parentName:"ol"},"Once selected, you will be requested to ",Object(i.b)("strong",{parentName:"li"},"authenticate your identity")," using any enrolled biometric option."),Object(i.b)("li",{parentName:"ol"},"Once successfully authenticated, your ",Object(i.b)("strong",{parentName:"li"},"account balance")," will be displayed on the screen")),Object(i.b)("div",{style:{textAlign:"center"}},Object(i.b)("img",{alt:"Balance Screen1",src:Object(c.a)("img/app-manual/balance1.png")})),Object(i.b)("h3",{id:"make-a-transfer"},"Make a transfer"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"You can make a transfer to a predefined account number (i.e 112233) from your account. "),Object(i.b)("li",{parentName:"ol"},"Click the ",Object(i.b)("strong",{parentName:"li"},"Make a transfer")," option on the home page."),Object(i.b)("li",{parentName:"ol"},"Enter the ",Object(i.b)("strong",{parentName:"li"},"account number")," and the ",Object(i.b)("strong",{parentName:"li"},"amount")," you wish to transfer. Click on ",Object(i.b)("strong",{parentName:"li"},"Continue")," to proceed."),Object(i.b)("li",{parentName:"ol"},"If the account number is ",Object(i.b)("strong",{parentName:"li"},"valid")," (i.e. 112233) you will be requested to ",Object(i.b)("strong",{parentName:"li"},"authenticate your identity")," using any enrolled biometric option.")),Object(i.b)("div",{style:{textAlign:"center"}},Object(i.b)("img",{alt:"Transfer Screen1",src:Object(c.a)("img/app-manual/transfer1.png")})),Object(i.b)("ol",{start:5},Object(i.b)("li",{parentName:"ol"},"On successful authentication, if the amount to be transferred is available in your account, the transaction would be successful and a success message will be displayed on the screen. ")),Object(i.b)("div",{style:{textAlign:"center"}},Object(i.b)("img",{alt:"Transfer Screen2",src:Object(c.a)("img/app-manual/transfer2.png")}),Object(i.b)("img",{alt:"Transfer Screen3",src:Object(c.a)("img/app-manual/transfer3.png")})),Object(i.b)("ol",{start:6},Object(i.b)("li",{parentName:"ol"},"If the amount transferred is more than the amount in your account, the transaction would fail and an error toast message would be displayed \u201cSorry, you do not have the required funds in your account to make this transaction\u201d.")),Object(i.b)("div",{style:{textAlign:"center"}},Object(i.b)("img",{alt:"Transfer Screen2",src:Object(c.a)("img/app-manual/transfer4.png")})),Object(i.b)("h3",{id:"pay-bill"},"Pay bill"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"You can make a payment against a predefined bill number (i.e 12345 or 54321) from your account."),Object(i.b)("li",{parentName:"ol"},"Click the ",Object(i.b)("strong",{parentName:"li"},"Pay bill")," option on the home page."),Object(i.b)("li",{parentName:"ol"},"Enter the ",Object(i.b)("strong",{parentName:"li"},"bill number")," and click ",Object(i.b)("strong",{parentName:"li"},"Continue")," to proceed."),Object(i.b)("li",{parentName:"ol"},"If the ",Object(i.b)("strong",{parentName:"li"},"bill number")," is valid you will be requested to ",Object(i.b)("strong",{parentName:"li"},"authenticate your identity")," using any enrolled biometric option."),Object(i.b)("li",{parentName:"ol"},"On successful authentication, if the amount to be paid against the bill is ",Object(i.b)("strong",{parentName:"li"},"available in your account"),", the transaction will be successful."),Object(i.b)("li",{parentName:"ol"},"If the amount to be paid against the bill is ",Object(i.b)("strong",{parentName:"li"},"more than the amount available in your account"),", the transaction would fail and an ",Object(i.b)("strong",{parentName:"li"},"error message")," would be displayed;\u201cSorry, you do not have the required funds in your account to make this transaction\u201d.")),Object(i.b)("div",{style:{textAlign:"center"}},Object(i.b)("img",{alt:"Bill Screen1",src:Object(c.a)("img/app-manual/bill1.png")}),Object(i.b)("img",{alt:"Bill Screen2",src:Object(c.a)("img/app-manual/bill2.png")})))}u.isMDXComponent=!0}}]);