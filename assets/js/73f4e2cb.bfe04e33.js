"use strict";(self.webpackChunktunnel_manuals=self.webpackChunktunnel_manuals||[]).push([[728],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=o,m=p["".concat(l,".").concat(d)]||p[d]||h[d]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2154:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={id:"gaster-overview",title:"Overview of the Tunnel"},i="Wind Tunnel Layout",s={unversionedId:"gaster-overview",id:"gaster-overview",title:"Overview of the Tunnel",description:"Shown below is the control and instrumentation for the Gaster tunnel. Visible is the three-axis hot-wire traverse, the data acquisition hardware, and the additional instrumentation and measurement hardware such as filters and oscilloscopes.",source:"@site/docs-gaster/wind-tunnel.md",sourceDirName:".",slug:"/gaster-overview",permalink:"/docs-gaster/gaster-overview",draft:!1,tags:[],version:"current",frontMatter:{id:"gaster-overview",title:"Overview of the Tunnel"},sidebar:"tutorialSidebar",previous:{title:"Introduction to the Gaster Tunnnel",permalink:"/docs-gaster/intro"}},l={},c=[],u={toc:c};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"wind-tunnel-layout"},"Wind Tunnel Layout"),(0,o.kt)("p",null,"Shown below is the control and instrumentation for the Gaster tunnel. Visible is the three-axis hot-wire traverse, the data acquisition hardware, and the additional instrumentation and measurement hardware such as filters and oscilloscopes."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://picsum.photos/600/400",alt:"Tunnel Layout"})),(0,o.kt)("p",null,"The traverse controller houses the necessary hardware to drive the traverse, with control being carried out through an ",(0,o.kt)("em",{parentName:"p"},"NI UMI 7774")," motor controller, connected to the PC through an ",(0,o.kt)("em",{parentName:"p"},"NI PXI-7350")," card housed in an ",(0,o.kt)("em",{parentName:"p"},"NI PXI 1033")," chassis."),(0,o.kt)("p",null,"The ",(0,o.kt)("em",{parentName:"p"},"NI PXI 1033")," chassis also houses the card required for data acquisition. The hardware and connection layout can be seen in the figure below. Control of the wind tunnel fan is communicated through a serial USB interface to the wind tunnel controller."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://picsum.photos/800/300",alt:"Hardware and Connection Layout"})),(0,o.kt)("h1",{id:"connections"},"Connections"),(0,o.kt)("p",null,"For the control system to operate all functions correctly, it is important to ensure that any and all hardware is connected through the correct channels. These channels are highlighted below."),(0,o.kt)("mermaid",{value:"    flowchart LR\n        subgraph wt[Wind Tunnel]\n        A[USB/RS 232] --\x3e B[RS 232 to 422]\n        B --\x3e C[RS 323 Port] --\x3e D[WT Controller] --\x3e E[WT Motor]\n        end\n\n        PC[fa:fa-computer PC] --\x3e|USB| A\n\n        subgraph 1033[NI PXI-1033]\n        PXI-7350\n        PXI-6143\n        PXI-6723\n        PXI-6624\n        end\n\n        1033 <--\x3e PC\n\n        subgraph Data Acquisition\n        BNC-2111 <--\x3e PXI-6624\n        BNC-2115 <--\x3e PXI-6723\n        BNC-2120 <--\x3e PXI-6143\n        end\n\n        subgraph Traverse Control\n        tc[NI UMI-7774]\n        tb[Traverse Box]\n        tm[Traverse XYZ Motors]\n        end\n\n        PXI-7350 --\x3e tc\n        tc --\x3e tb\n        tb --\x3e tm\n\n        PC --\x3e|Power| B"}))}p.isMDXComponent=!0}}]);