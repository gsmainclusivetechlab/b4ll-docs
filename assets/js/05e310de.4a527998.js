(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{124:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),l=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(n),b=r,d=p["".concat(c,".").concat(b)]||p[b]||f[b]||o;return n?i.a.createElement(d,a(a({ref:t},s),{},{components:n})):i.a.createElement(d,a({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=b;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var s=2;s<o;s++)c[s]=n[s];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},126:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return c}));var r=n(16),i=n(128);function o(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,c=o.forcePrependBaseUrl,a=void 0!==c&&c,u=o.absolute,s=void 0!==u&&u;if(!n)return n;if(n.startsWith("#"))return n;if(Object(i.b)(n))return n;if(a)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+l:l}(o,n,e,t)}}}function c(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},128:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return i}))},71:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),i=n(7),o=(n(0),n(124)),c=n(126),a={id:"engine",title:"Engine",sidebar_label:"Engine"},u={unversionedId:"architecture/engine",id:"architecture/engine",isDocsHomePage:!1,title:"Engine",description:"In the platform architecture. the Engine acts as a centralizer of the existing",source:"@site/docs/architecture/engine.md",slug:"/architecture/engine",permalink:"/architecture/engine",version:"current",sidebar_label:"Engine",sidebar:"someSidebar",previous:{title:"Communication Channels",permalink:"/app"},next:{title:"Biometric Suppliers",permalink:"/suppliers"}},s=[],l={toc:s};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In the platform architecture. the Engine acts as a centralizer of the existing\nflows. Users send requests to the Engine through the application or accessing\ndirectly a communication provider. In turn, the Engine communicates with\nBiometric Suppliers to make the services available to users."),Object(o.b)("p",null,"Within the biometrics engine, the lambda functions will route the biometrics\ncredentials to an appropriate biometrics\u2019 supplier. If a voice recording is\nreceived, for example, the engine will select a biometric supplier which is\ncapable of performing voice authentication. The biometric supplier selection may\nbe guided by the user\u2019s selection within the mobile app."),Object(o.b)("div",{style:{textAlign:"center"}},Object(o.b)("img",{alt:"B4ll architetcure",src:Object(c.a)("img/engine.svg")})))}p.isMDXComponent=!0}}]);