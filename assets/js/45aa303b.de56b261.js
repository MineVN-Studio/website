"use strict";(self.webpackChunkminevnstudio_wiki=self.webpackChunkminevnstudio_wiki||[]).push([[914],{3905:(n,e,t)=>{t.d(e,{Zo:()=>u,kt:()=>h});var r=t(7294);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function c(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var l=r.createContext({}),s=function(n){var e=r.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},u=function(n){var e=s(n.components);return r.createElement(l.Provider,{value:e},n.children)},p="mdxType",m={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(n,e){var t=n.components,o=n.mdxType,a=n.originalType,l=n.parentName,u=c(n,["components","mdxType","originalType","parentName"]),p=s(t),f=o,h=p["".concat(l,".").concat(f)]||p[f]||m[f]||a;return t?r.createElement(h,i(i({ref:e},u),{},{components:t})):r.createElement(h,i({ref:e},u))}));function h(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var a=t.length,i=new Array(a);i[0]=f;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=n,c[p]="string"==typeof n?n:o,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},9495:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=t(7462),o=(t(7294),t(3905));const a={id:"enchant-lore",title:"enchant-lore.yml",description:"EnchantSlots lore config",sidebar_position:2},i=void 0,c={unversionedId:"enchantslots/Configurations/enchant-lore.yml/enchant-lore",id:"enchantslots/Configurations/enchant-lore.yml/enchant-lore",title:"enchant-lore.yml",description:"EnchantSlots lore config",source:"@site/docs/enchantslots/Configurations/enchant-lore.yml/enchant-lore.yml.md",sourceDirName:"enchantslots/Configurations/enchant-lore.yml",slug:"/enchantslots/Configurations/enchant-lore.yml/",permalink:"/enchantslots/Configurations/enchant-lore.yml/",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"enchant-lore",title:"enchant-lore.yml",description:"EnchantSlots lore config",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"config.yml",permalink:"/enchantslots/Configurations/config"},next:{title:"Category",permalink:"/enchantslots/Configurations/enchant-lore.yml/category"}},l={},s=[],u={toc:s},p="wrapper";function m(n){let{components:e,...t}=n;return(0,o.kt)(p,(0,r.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"tiers:\n  default: 4\n  COMMON: 4\n  UNCOMMON: 5\n  RARE: 6\n  EPIC: 6\n  LEGENDARY: 6\nuse-categories: true\ncategories:\n- SWORD\n- TOOL\n- DAGGER\n- SPEAR\n- HAMMER\n- BOW\n- CROSSBOW\n- ARMOR\n- GREATSWORD\n- LONGSWORD\n- KATANA\n- AXE\n- GREATAXE\n- HALBERD\n- GREATHAMMER\nlore-builder:\n  slots: '&7Enchant Slots ({used}/{max}):'\n  line: ' {status} '\n  status:\n    empty: ' &7Empty'\n    used: <color:187e57>{enchant} {level}\nenchants-level:\n  '1': I\n  '2': II\n  '3': III\n  '4': IV\n  '5': V\n  '6': VI\n  '7': VII\n  '8': VIII\n  '9': IX\n  '10': X\n# Here you can change the name of the enchantment\n# get vanilla enchant id at: https://minecraft.fandom.com/wiki/Enchanting#Summary_of_enchantments\nenchants-name:\n  protection: Protection\n  mending: Mending\n  looting: Looting\ngem-enchants:\n  # Here you can add the gem ID\n  # the number is the level of the gem\n  # if the gem doesn't have level, just add the first entry to the list\n  example:\n  - '1'\n  - '2'\n  - '3'\n  - '4'\n  - '5'\n  - '6'\n  - '7'\n  - '8'\n  - '9'\n  - '10'\n")))}m.isMDXComponent=!0}}]);