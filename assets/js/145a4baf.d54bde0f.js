"use strict";(self.webpackChunkminevnstudio_wiki=self.webpackChunkminevnstudio_wiki||[]).push([[693],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var m=o.createContext({}),u=function(e){var t=o.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return o.createElement(m.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,m=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),s=u(r),f=n,d=s["".concat(m,".").concat(f)]||s[f]||c[f]||i;return r?o.createElement(d,l(l({ref:t},p),{},{components:r})):o.createElement(d,l({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=f;var a={};for(var m in t)hasOwnProperty.call(t,m)&&(a[m]=t[m]);a.originalType=e,a[s]="string"==typeof e?e:n,l[1]=a;for(var u=2;u<i;u++)l[u]=r[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5747:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var o=r(7462),n=(r(7294),r(3905));const i={id:"form-type",title:"Form Type",description:"A list of all Form types for DeluxeForms",sidebar_position:1},l=void 0,a={unversionedId:"deluxeforms/Configurations/Form/form-type",id:"deluxeforms/Configurations/Form/form-type",title:"Form Type",description:"A list of all Form types for DeluxeForms",source:"@site/docs/deluxeforms/Configurations/Form/form-type.md",sourceDirName:"deluxeforms/Configurations/Form",slug:"/deluxeforms/Configurations/Form/form-type",permalink:"/deluxeforms/Configurations/Form/form-type",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"form-type",title:"Form Type",description:"A list of all Form types for DeluxeForms",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"config.yml",permalink:"/deluxeforms/Configurations/config"},next:{title:"Form Component",permalink:"/deluxeforms/Configurations/Form/form-component"}},m={},u=[{value:"Simple Form",id:"simple-form",level:2},{value:"Modal Form",id:"modal-form",level:2},{value:"Custom Form",id:"custom-form",level:2}],p={toc:u},s="wrapper";function c(e){let{components:t,...r}=e;return(0,n.kt)(s,(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"simple-form"},"Simple Form"),(0,n.kt)("p",null,"Simple Form includes only the button and the image of the button. For each form, you can add as many buttons as you like."),(0,n.kt)("p",null,"Configurable:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Form name."),(0,n.kt)("li",{parentName:"ul"},"Description line (possibly delineated)."),(0,n.kt)("li",{parentName:"ul"},"Button with a picture or not.")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://i.imgur.com/3rj2OQ2.png",alt:"Simple Form"})),(0,n.kt)("h2",{id:"modal-form"},"Modal Form"),(0,n.kt)("p",null,"The modal Form includes only 2 buttons and a large content frame."),(0,n.kt)("p",null,"Configurable:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Form name"),(0,n.kt)("li",{parentName:"ul"},"Large content pane (can scroll if the content is long)"),(0,n.kt)("li",{parentName:"ul"},"2 buttons without the picture")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://i.imgur.com/kMpMgOh.png",alt:"Modal Form"})),(0,n.kt)("h2",{id:"custom-form"},"Custom Form"),(0,n.kt)("p",null,"Custom Form is a very interesting form you will have many options:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Dropdown"),(0,n.kt)("li",{parentName:"ul"},"Input"),(0,n.kt)("li",{parentName:"ul"},"Toggle"),(0,n.kt)("li",{parentName:"ul"},"Slider"),(0,n.kt)("li",{parentName:"ul"},"Step slider")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://i.imgur.com/zHgxELm.png",alt:"Custom Form"})),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"You cannot have buttons on ",(0,n.kt)("strong",{parentName:"li"},"Custom Form")," or Slider on ",(0,n.kt)("strong",{parentName:"li"},"Simple Form")," this is a limitation of Minecraft."),(0,n.kt)("li",{parentName:"ul"},"All of the above forms can be renamed and arranged as you like, except for the ",(0,n.kt)("strong",{parentName:"li"},"submit button")),(0,n.kt)("li",{parentName:"ul"},"You can have multiple components of a certain type.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"For example, a custom form can have 4 Dropdowns or 3 Sliders."))))))}c.isMDXComponent=!0}}]);