(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{120:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),u=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},h=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),h=r,m=p["".concat(o,".").concat(h)]||p[h]||b[h]||a;return n?i.a.createElement(m,c(c({ref:t},l),{},{components:n})):i.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},123:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return o}));var r=n(16),i=n(125);function a(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var a=void 0===r?{}:r,o=a.forcePrependBaseUrl,c=void 0!==o&&o,s=a.absolute,l=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(i.b)(n))return n;if(c)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+u:u}(a,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},125:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return i}))},72:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),i=n(7),a=(n(0),n(120)),o=n(123),c={id:"overview",title:"B4LL Architecture",sidebar_label:"Overview"},s={unversionedId:"architecture/overview",id:"architecture/overview",isDocsHomePage:!1,title:"B4LL Architecture",description:"This section describes the architecture proposed for the B4LL project. The",source:"@site/docs/architecture/overview.md",slug:"/architecture/overview",permalink:"/architecture/overview",version:"current",sidebar_label:"Overview",sidebar:"someSidebar",previous:{title:"Documentation Guide",permalink:"/docguide"},next:{title:"Communication Channels",permalink:"/app"}},l=[{value:"Architectural Parts",id:"architectural-parts",children:[]},{value:"Connexions",id:"connexions",children:[]},{value:"Detailed View",id:"detailed-view",children:[]},{value:"Technological Considerations",id:"technological-considerations",children:[]}],u={toc:l};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This section describes the architecture proposed for the B4LL project. The\nproject was thought to be modular, allowing to offer, when necessary, new use\ncases, types of biometrics and biometrics suppliers."),Object(a.b)("p",null,"The architecture is divided in three main parts: the communication channels\n(mostly represented by the application), the engine, and the biometrics\nsuppliers. Each part is briefly described below. More details can be found in\nthe following sections",Object(a.b)("sup",null,Object(a.b)("a",{parentName:"p",href:"#landingpage"},"1")),":"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"Communication Channels:")," The communication channels are responsible for\nthe communication interface between the user and the b4ll system. The main\ncommunication channel is the mobile application, however, these channels can\nuse external communication providers to supply new forms of interaction. The\nuse of Twilio to create a call center is an example of a communication\nchannel provider."),Object(a.b)("p",{parentName:"li"}," ",Object(a.b)("strong",{parentName:"p"},"Mobile Application:")," The main communication channel currently used in the\nproject. The mobile application will provide access to all types of\nbiometrics.")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"Engine:")," This part orchestrates the connection between the other parts of\nthe architecture handling the data received from the communication channels\nand providing it to the engine.")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"Biometric Suppliers:")," Biometric solutions available on the market. The\nconnection with the suppliers takes place through an SDK or API and allows\naccess to biometric recognition solutions."))),Object(a.b)("h3",{id:"architectural-parts"},"Architectural Parts"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Figure:")," Main components of the architecture."),Object(a.b)("div",{style:{textAlign:"center"}},Object(a.b)("img",{alt:"B4ll architetcure",src:Object(o.a)("img/ArchitectureParts.svg")})),Object(a.b)("h3",{id:"connexions"},"Connexions"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"The elements of the communication channel are responsible for requests and\nresponses to the engine of the system."),Object(a.b)("li",{parentName:"ul"},"The engine orchestrates the flow of messages and directs the requests to the\nselected biometric supplier."),Object(a.b)("li",{parentName:"ul"},"The connection between the engine and the supplier is made using AWS lambda\nfunctions and the API or SDK provided by the supplier.")),Object(a.b)("p",null,"When using B4LL, the user activates one of the communication providers that will\nintermediate data capture through the user interface. In this case, the channel\ncan be the mobile application, or another one that is necessary. The\narchitecture is prepared to accept extra communication providers and integrates\nthem with the engine. The call center is an example of this situation. In this\ncase a component to connects the call center to the engine was created."),Object(a.b)("p",null,"The business logic of the communication channel integrates the communication\nbetween the communication provider and the engine, allowing data capture,\nprocessing and when necessary storage. Then the biometric data is passed to the\nengine."),Object(a.b)("p",null,"The engine logic handle the data received from the communication channels and\nprovide it to the Biometric Suppliers in an acceptable format. The\nrequest/response connextion between engine and biometric supplier is done using\nthe supplier's API (or SDK) and the engine handler functions."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Figure:")," Architecture components and its relations."),Object(a.b)("div",{style:{textAlign:"center"}},Object(a.b)("img",{alt:"B4ll architetcure",src:Object(o.a)("img/ArchitectureConnexions.svg")})),Object(a.b)("div",{className:"admonition admonition-info alert alert--info"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Data Storage")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"It is important to mention here that the biometric data is only stored on the\nbiometric suppliers side."))),Object(a.b)("h3",{id:"detailed-view"},"Detailed View"),Object(a.b)("p",null,"The diagram below sketches out a microservice-based serverless architecture.\nEmbracing a microservice architecture will make it more straightforward to add\nnew biometrics types or providers in future through the creation of new\nconnections for the new components."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Figure:")," Detailed architectural diagram."),Object(a.b)("div",{style:{textAlign:"center"}},Object(a.b)("img",{alt:"B4ll architetcure",src:Object(o.a)("img/B4llArchitecture.svg")})),Object(a.b)("p",null,"Other services can also be used to enhance the user experience \u2013 for example\nDynamoDB may be used to store user data and preferences within the communication\nchannel business logic \u2013 or for other technical reasons, such as using an S3\nbucket in the biometrics engine to store image data prior to biometric\nverification."),Object(a.b)("h3",{id:"technological-considerations"},"Technological Considerations"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"The architecture is based on a scalable serveless model using an AWS\nenvironment")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"The orchestration and deployment of the components is fully automatable by\nusing AWS CloudFormation and AWS SAM.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"The main language used for the project is TypeScript")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"The API's follow the API Specification 3.0"),Object(a.b)("hr",{parentName:"li"}))),Object(a.b)("h5",{id:"footnotes"},"Footnotes"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{name:"landingpage"},"1 "),": B4LL project page contains relevant information for a better understanding of the use of biometrics and how the B4ll project can support mobile operators in the implementation of biometric technologies.")))}p.isMDXComponent=!0}}]);