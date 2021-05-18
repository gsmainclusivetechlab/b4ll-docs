(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{122:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var i=n(0),o=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),m=i,b=p["".concat(a,".").concat(m)]||p[m]||d[m]||r;return n?o.a.createElement(b,s(s({ref:t},l),{},{components:n})):o.a.createElement(b,s({ref:t},l))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<r;l++)a[l]=n[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},86:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var i=n(3),o=n(7),r=(n(0),n(122)),a={id:"about",title:"The B4LL Project",sidebar_label:"B4LL Project",slug:"/"},s={unversionedId:"about",id:"about",isDocsHomePage:!1,title:"The B4LL Project",description:"Background",source:"@site/docs/about.mdx",slug:"/",permalink:"/b4ll-docs/docs/",version:"current",sidebar_label:"B4LL Project",sidebar:"someSidebar",next:{title:"Documentation Guide",permalink:"/b4ll-docs/docs/docguide"}},c=[{value:"Background",id:"background",children:[]},{value:"Biometrics 4 All",id:"biometrics-4-all",children:[]}],l={toc:c};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"background"},"Background"),Object(r.b)("p",null,"Accessing digitally enabled services often requires customers to identify\nthemselves, both for initial registration and regular use of the services.\nInitial registration and certain critical actions typically involve the use of a\nform of foundational identification, such as a national ID. Following\nregistration, in order to use the service on a day-to-day basis, users can (and\nshould) be prompted to authenticate their actions by using a previously set\npassword, most frequently a Personal Identification Number (PIN). Although these\nmodels that include the use of national IDs and PINs for authentication are\nwidely used and are working satisfactorily, the typical identification and\nauthentication methodologies described above can cause challenges to certain\npopulations, namely:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"More than one billion people in the world lack any form of legal identification, almost half of these living in Sub-Saharan Africa , preventing them from accessing life-enhancing services. The GSMA\u2019s Digital Identity programme focuses on this aspect and you could get more information ",Object(r.b)("a",{parentName:"p",href:"https://www.gsma.com/mobilefordevelopment/digital-identity/"},"here"),". ")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Authentication and the use of basic commands can be a hurdle for people with\ndisabilities;")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Illiterate people, who cannot read or enter the required information on\nmobile phone screens, could face difficulties to use the services, most of\ntimes requiring assistance and reducing the security.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"PIN numbers are easy to forget, making many people keep notes, making it\neasier to hack or steal information;")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Remote onboarding processes can be more costly or even impossible, depending\non the user's phone type, such as some featured phones."))),Object(r.b)("p",null,"The use of biometrics systems can help to reduce some of the challenges mentioned above and also provide other advantages for service providers. These systems can recognize users through their voice, fingerprints, faces, retinas, and so on. Biometric information is always with the user, making it ubiquitous and unique for different systems, measurable, convenient and does not allow sharing, making the enrolment process fast and with credible results. Each type of biometrics has peculiar characteristics that determine its best applicability and the potential to improve access to digital services. For this reason, it is important to take into account parameters such as level of security, acceptability, usability, accuracy, implementation costs, return on investment, required hardware, and others."),Object(r.b)("p",null,"In relation to emerging markets, implementation costs and the previous existence\nof hardware for the use of biometrics are essential. Therefore, during the\nexecution of the trade-off analysis among the several relevant requirements,\nthese characteristics require greater weight in relation to the others. However,\nthe use of biometric systems does not create discrimination between age, sex,\nrace, to name a few. This places service providers at the centre of this\nchanging landscape."),Object(r.b)("h2",{id:"biometrics-4-all"},"Biometrics 4 All"),Object(r.b)("p",null,"Biometrics for All (B4LL) is a showcase project which enables mobile operators in emerging markets to test the use of biometric data for customer verification, which can be used to enhance on-boarding processes as well as ongoing usage of services by customers."),Object(r.b)("p",null,"Conventional identification / authentication / authorisation mechanisms are a\nbarrier for service optimisation across developing countries. Moreover,\nilliteracy is a significant barrier for adoption of mobile financial (as well as\nother digital) services in emerging markets. This is further accentuated in\ncontexts where the use of marginal languages and dialects is prevalent.\nBiometrics can smoothen the experience in these situations. However, the use of\nbiometrics is still sparse in emerging markets and can be perceived as being\nexpensive, cumbersome and lacking security by service providers. This project\nwill aim to address this gap by proposing a way in which simple biometric data\ncan be used inexpensively and securely by service providers to enable customer\nidentification and service use."),Object(r.b)("p",null,"The project consists of an application to demonstrate the potential of biometrics in emerging markets. Our audience users consist of mobile operators. The users can choose the type of biometrics and the use case they would like to experience. For each selection, the users are able to set their desired biometric supplier, being possible to test and experience different solutions. The application  cummunicates directly to our engine, which orchestrates the system, its use cases and the communication with different biometric suppliers. This way, the user can interact with the application and experience the chosen features and use cases. "),Object(r.b)("p",null,"A call centre is also part of our showcase. The intention is to demonstrate that in addition to use in applications, such services can also be very attractive for call centers, allowing services to be available to users of featured phones."),Object(r.b)("p",null,"The project will not be limited to a specific geography and could be accessed by any mobile operator globally. For its initial rollout, the project has been discussed with leading mobile operators. B4LL has be aimed at customers in a low / middle economic category in developing countries who typically do not have access to formal identification measures or high technology mobiles. "),Object(r.b)("p",null,"If you are a mobile operator and would like to know more about the project or see new use cases in the project tailored to your needs, please contact our team. It will be a pleasure guiding you to pilot the use of biometrics in your market."))}u.isMDXComponent=!0}}]);