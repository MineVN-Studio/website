"use strict";(self.webpackChunkminevnstudio_wiki=self.webpackChunkminevnstudio_wiki||[]).push([[828],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5160:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const i={id:"installation",title:"Installation",description:"EnchantSlots installation",sidebar_position:2},a=void 0,l={unversionedId:"enchantslots/installation",id:"enchantslots/installation",title:"Installation",description:"EnchantSlots installation",source:"@site/docs/enchantslots/installation.md",sourceDirName:"enchantslots",slug:"/enchantslots/installation",permalink:"/enchantslots/installation",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"installation",title:"Installation",description:"EnchantSlots installation",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Command and Permissions",permalink:"/enchantslots/command_and_permissions"},next:{title:"config.yml",permalink:"/enchantslots/Configurations/config"}},s={},c=[{value:"STEP 1: MMOItems config",id:"step-1-mmoitems-config",level:2},{value:"STEP 2: Reload MMOItems",id:"step-2-reload-mmoitems",level:2},{value:"STEP 3: MMOItems enable",id:"step-3-mmoitems-enable",level:2}],p={toc:c},m="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Since the plugin is MMOItems dependence, it requires the plugin to run. So here is the guide after you have these 2 plugins installed"),(0,o.kt)("h2",{id:"step-1-mmoitems-config"},"STEP 1: MMOItems config"),(0,o.kt)("p",null,"After active the plugin by replacing the license key in config.yml, you will have to do some config in MMOItems."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"plugins/mmoitems/language/lore-format.yml\n")),(0,o.kt)("p",null,"After you opened lore-format.yml, add this line into the config"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  - '#enchant-slots#'\n")),(0,o.kt)("h2",{id:"step-2-reload-mmoitems"},"STEP 2: Reload MMOItems"),(0,o.kt)("p",null,"Having done all 2 previous step, you need to reload Mmoitems by /mmoitems reload"),(0,o.kt)("h2",{id:"step-3-mmoitems-enable"},"STEP 3: MMOItems enable"),(0,o.kt)("p",null,"Do /mi browse, and scroll to final pages, there will be an option called Enable EnchantSlots, turn it to TRUE "),(0,o.kt)("p",null,"If the item does not display the lore, please check if the rarity and catagories is configured or not."),(0,o.kt)("p",null,"Example: ",(0,o.kt)("a",{parentName:"p",href:"https://imgur.com/a/ivuEhn1"},"https://imgur.com/a/ivuEhn1")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"WARNING: DO NOT USE PLUGMAN TO RELOAD THE PLUGIN. RESTART THE SERVER INSTEAD")))}u.isMDXComponent=!0}}]);