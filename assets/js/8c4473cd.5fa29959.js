"use strict";(self.webpackChunkautism_docs=self.webpackChunkautism_docs||[]).push([[8457],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2401:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:1},i="\u0e1d\u0e31\u0e48\u0e07\u0e1c\u0e39\u0e49\u0e43\u0e0a\u0e49\u0e07\u0e32\u0e19\u0e17\u0e31\u0e48\u0e27\u0e44\u0e1b",l={unversionedId:"client/introClient",id:"client/introClient",title:"\u0e1d\u0e31\u0e48\u0e07\u0e1c\u0e39\u0e49\u0e43\u0e0a\u0e49\u0e07\u0e32\u0e19\u0e17\u0e31\u0e48\u0e27\u0e44\u0e1b",description:"\u0e41\u0e2d\u0e1e\u0e25\u0e34\u0e40\u0e04\u0e0a\u0e31\u0e19\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e04\u0e31\u0e14\u0e01\u0e23\u0e2d\u0e07\u0e1a\u0e38\u0e15\u0e23\u0e17\u0e35\u0e48\u0e21\u0e35\u0e04\u0e27\u0e32\u0e21\u0e40\u0e2a\u0e35\u0e48\u0e22\u0e07\u0e40\u0e1b\u0e47\u0e19\u0e2d\u0e2d\u0e17\u0e34\u0e0b\u0e36\u0e21",source:"@site/docs/client/introClient.md",sourceDirName:"client",slug:"/client/introClient",permalink:"/autism-docs/docs/client/introClient",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/client/introClient.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Translate your site",permalink:"/autism-docs/docs/tutorial-extras/translate-your-site"}},s={},c=[{value:"\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e01\u0e31\u0e1a\u0e41\u0e2d\u0e1e\u0e25\u0e34\u0e40\u0e04\u0e0a\u0e31\u0e19\u0e2d\u0e2d\u0e17\u0e34\u0e0b\u0e36\u0e21",id:"\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e01\u0e31\u0e1a\u0e41\u0e2d\u0e1e\u0e25\u0e34\u0e40\u0e04\u0e0a\u0e31\u0e19\u0e2d\u0e2d\u0e17\u0e34\u0e0b\u0e36\u0e21",level:2},{value:"What you&#39;ll need",id:"what-youll-need",level:3},{value:"Generate a new site",id:"generate-a-new-site",level:2},{value:"Start your site",id:"start-your-site",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...o}=e;return(0,a.kt)(p,(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u0e1d\u0e31\u0e48\u0e07\u0e1c\u0e39\u0e49\u0e43\u0e0a\u0e49\u0e07\u0e32\u0e19\u0e17\u0e31\u0e48\u0e27\u0e44\u0e1b"},"\u0e1d\u0e31\u0e48\u0e07\u0e1c\u0e39\u0e49\u0e43\u0e0a\u0e49\u0e07\u0e32\u0e19\u0e17\u0e31\u0e48\u0e27\u0e44\u0e1b"),(0,a.kt)("p",null,"\u0e41\u0e2d\u0e1e\u0e25\u0e34\u0e40\u0e04\u0e0a\u0e31\u0e19\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e04\u0e31\u0e14\u0e01\u0e23\u0e2d\u0e07\u0e1a\u0e38\u0e15\u0e23\u0e17\u0e35\u0e48\u0e21\u0e35\u0e04\u0e27\u0e32\u0e21\u0e40\u0e2a\u0e35\u0e48\u0e22\u0e07\u0e40\u0e1b\u0e47\u0e19\u0e2d\u0e2d\u0e17\u0e34\u0e0b\u0e36\u0e21"),(0,a.kt)("h2",{id:"\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e01\u0e31\u0e1a\u0e41\u0e2d\u0e1e\u0e25\u0e34\u0e40\u0e04\u0e0a\u0e31\u0e19\u0e2d\u0e2d\u0e17\u0e34\u0e0b\u0e36\u0e21"},"\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e01\u0e31\u0e1a\u0e41\u0e2d\u0e1e\u0e25\u0e34\u0e40\u0e04\u0e0a\u0e31\u0e19\u0e2d\u0e2d\u0e17\u0e34\u0e0b\u0e36\u0e21"),(0,a.kt)("p",null,"Nowadays, several children are diagnosed with Autism. This project will develop two applications which are a mobile application and a web application. The mobile application will help parents interview their child with a risk of being autistic or not. This application will allow parents to promptly investigate their child's chances of being autistic to prepare for treatment. This application contains a 20-question questionnaire for parents and children to complete, and there will be feedback about the opportunity and statistical results gathered from many children and the parent. Also send the information of the result from each child to experts to analyze and send advice back to the parent."),(0,a.kt)("p",null,"\u0e17\u0e14\u0e2a\u0e2d\u0e1a\u0e23\u0e39\u0e1b\u0e20\u0e32\u0e1e"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u0e2d\u0e31\u0e19\u0e19\u0e35\u0e49\u0e04\u0e37\u0e2d\u0e2d\u0e30\u0e44\u0e23",src:n(9349).Z,width:"846",height:"745"})),(0,a.kt)("h3",{id:"what-youll-need"},"What you'll need"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},"Node.js")," version 16.14 or above:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"When installing Node.js, you are recommended to check all checkboxes related to dependencies.")))),(0,a.kt)("h2",{id:"generate-a-new-site"},"Generate a new site"),(0,a.kt)("p",null,"Generate a new Docusaurus site using the ",(0,a.kt)("strong",{parentName:"p"},"classic template"),"."),(0,a.kt)("p",null,"The classic template will automatically be added to your project after you run the command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm init docusaurus@latest my-website classic\n")),(0,a.kt)("p",null,"You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code editor."),(0,a.kt)("p",null,"The command also installs all necessary dependencies you need to run Docusaurus."),(0,a.kt)("h2",{id:"start-your-site"},"Start your site"),(0,a.kt)("p",null,"Run the development server:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd my-website\nnpm run start\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"cd")," command changes the directory you're working with. In order to work with your newly created Docusaurus site, you'll need to navigate the terminal there."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run start")," command builds your website locally and serves it through a development server, ready for you to view at http://localhost:3000/."),(0,a.kt)("p",null,"Open ",(0,a.kt)("inlineCode",{parentName:"p"},"docs/intro.md")," (this page) and edit some lines: the site ",(0,a.kt)("strong",{parentName:"p"},"reloads automatically")," and displays your changes."))}d.isMDXComponent=!0},9349:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/testimg-20bedb82e15bbf2ee3457fded9de5787.png"}}]);