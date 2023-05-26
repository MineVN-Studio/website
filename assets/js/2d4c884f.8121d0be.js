"use strict";(self.webpackChunkminevnstudio_wiki=self.webpackChunkminevnstudio_wiki||[]).push([[461],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),m=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=m(n),p=o,d=c["".concat(s,".").concat(p)]||c[p]||f[p]||i;return n?r.createElement(d,a(a({ref:t},u),{},{components:n})):r.createElement(d,a({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,a[1]=l;for(var m=2;m<i;m++)a[m]=n[m];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1762:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var r=n(7462),o=(n(7294),n(3905));const i={id:"config",title:"config.yml",description:"A list of all config options for DeluxeForms",sidebar_position:1},a=void 0,l={unversionedId:"deluxeforms/Configurations/config",id:"deluxeforms/Configurations/config",title:"config.yml",description:"A list of all config options for DeluxeForms",source:"@site/docs/deluxeforms/Configurations/config.md",sourceDirName:"deluxeforms/Configurations",slug:"/deluxeforms/Configurations/config",permalink:"/deluxeforms/Configurations/config",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"config",title:"config.yml",description:"A list of all config options for DeluxeForms",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Command and Permissions",permalink:"/deluxeforms/command_and_permissions"},next:{title:"Form Type",permalink:"/deluxeforms/Configurations/Form/form-type"}},s={},m=[{value:"Register Form",id:"register-form",level:2}],u={toc:m},c="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This section contains the license key, which you can get in from our Discord after purchased the plugin and verified. The plugin requires the license key to activate. So when you download it, you have to put it here."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'license_key: "XXXXX-XXXXX-XXXXX-XXXXX-XXXXX"\n')),(0,o.kt)("p",null,"Toggle to send your server information to bStats"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"bStats: true\n")),(0,o.kt)("h2",{id:"register-form"},"Register Form"),(0,o.kt)("p",null,"This section contains the form that you want to register. The form will be registered when the plugin is loaded. The form will be registered with the name you put in the config. The name will be used to open the form."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"gui_menus: \n <FormName>:  \n   file: <FileName>.yml\n MineVN:\n   file: minevn.yml\n TML:\n   file: /tml/tml_form.yml\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"FormName")," is the name of the form you will give the form, not necessarily the same as the file name. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"FileName")," is the name of form in folder ",(0,o.kt)("inlineCode",{parentName:"li"},"gui_menus")))))}f.isMDXComponent=!0}}]);