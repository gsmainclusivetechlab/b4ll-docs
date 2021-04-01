(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{122:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),u=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,f=p["".concat(o,".").concat(d)]||p[d]||b[d]||a;return n?i.a.createElement(f,c(c({ref:t},l),{},{components:n})):i.a.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},125:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return o}));var r=n(16),i=n(127);function a(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(r.default)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:a=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(i.b)(n))return n;if(r)return t+n;const o=n.startsWith(t)?n:t+n.replace(/^\//,"");return a?e+o:o}(t,e,n,r)}}function o(e,t={}){const{withBaseUrl:n}=a();return n(e,t)}},127:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return i}))},74:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),i=(n(0),n(122)),a=n(125);const o={id:"app",title:"Communication Channels",sidebar_label:"Communication Channels",slug:"/app"},c={unversionedId:"architecture/app",id:"architecture/app",isDocsHomePage:!1,title:"Communication Channels",description:"Communication channels act as a point of interaction between the user and the",source:"@site/docs/architecture/app.md",slug:"/app",permalink:"/b4ll-docs/docs/app",version:"current",sidebar_label:"Communication Channels",sidebar:"someSidebar",previous:{title:"B4LL Architecture",permalink:"/b4ll-docs/docs/architecture/overview"},next:{title:"Engine",permalink:"/b4ll-docs/docs/architecture/engine"}},s=[{value:"Call Centre",id:"call-centre",children:[]},{value:"Mobile Application",id:"mobile-application",children:[]}],l={toc:s};function u({components:e,...t}){return Object(i.b)("wrapper",Object(r.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Communication channels act as a point of interaction between the user and the\nproject and can use different types of user interfaces. Currently, two\ncommunication channels are being used in the project: a call center and a mobile\napplication."),Object(i.b)("h3",{id:"call-centre"},"Call Centre"),Object(i.b)("p",null,"The call center is executed independently of the mobile application and uses\nTwilio as a communication provider. The connections between the engine and\nTwilio are made through Twilio Markup Language (TwiML)."),Object(i.b)("div",{style:{textAlign:"center"}},Object(i.b)("img",{alt:"Docusaurus with Keytar",src:Object(a.a)("img/CallCentreTwilio.svg")})),Object(i.b)("h3",{id:"mobile-application"},"Mobile Application"),Object(i.b)("p",null,"The mobile application is still under development and will allow a better user\nexperience when testing the different use cases and biometric suppliers."),Object(i.b)("p",null,"The application provides operators with a showcase environment to experience the\nuse cases for different types of biometrics. This way we can concentrate\ndifferent approaches using one communication channel. It allows to provide a\ngood user experience when the operators need to decide about what is the best\ntype os biometric and the best solution available in the market. This is\npossible since the B4ll can connect to diffeerent suppliers, allowing a\ncomparison between solutions and algorithms availables."),Object(i.b)("p",null,"The following figure shows a generic use case about how the application will\nwork. Users access the app and select the parameters for the demo, such as:\nbiometric type, biometric supplier and use case. The application connects with\nour engine, or if necessary with another communication channel, allowing request\nand response calls through an API gateway."),Object(i.b)("div",{style:{textAlign:"center"}},Object(i.b)("img",{alt:"Docusaurus with Keytar",src:Object(a.a)("img/appUseCase.svg")})),Object(i.b)("p",null,"Our main objective is to demonstrate the potential of biometrics in emerging\nmarkets in order to provide financial inclusion. Because of this, the target\noperating systems in this first moment are Android, Android Go and iOS. Also,\nwhenever possible, the feature phones are being considered."))}u.isMDXComponent=!0}}]);