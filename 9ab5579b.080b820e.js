(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{153:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(9),l=(n(0),n(166)),c={title:"Getting Started",sidebar_label:"Getting Started"},i={id:"guides/01-the-basics/01-getting-started",title:"Getting Started",description:"Requirements",source:"@site/docs/guides/01-the-basics/01-getting-started.md",permalink:"/types-helpers/docs/guides/01-the-basics/01-getting-started",sidebar_label:"Getting Started",sidebar:"guides"},o=[{value:"Requirements",id:"requirements",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Complementary Packages",id:"complementary-packages",children:[]},{value:"Create a Eveble App",id:"create-a-eveble-app",children:[]}],b={rightToc:o};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"requirements"},"Requirements"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"https://nodejs.org/"}),"Node.js")," MUST be v14.0 or later")),Object(l.b)("h2",{id:"installation"},"Installation"),Object(l.b)("p",null,"To use @eveble/types-helpers with your Eveble app:"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"npm install @eveble/types-helpers\n")),Object(l.b)("p",null,"or"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"yarn add @eveble/types-helpers\n")),Object(l.b)("p",null,"You'll also need to ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"https://eveble.github.com/docs/01-the-basics/02-installation"}),"install Eveble"),"."),Object(l.b)("h2",{id:"complementary-packages"},"Complementary Packages"),Object(l.b)("p",null,"Most likely, you'll also need ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/eveble/testing"}),"the Eveble testing framework"),":"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"npm install @eveble/eveble\nnpm install --save-dev @eveble/testing\n")),Object(l.b)("h2",{id:"create-a-eveble-app"},"Create a Eveble App"),Object(l.b)("p",null,"The recommended way to start new apps with Eveble is by using the ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/eveble/eveble-boilerplate"}),"official Eveble boilerplate"),":"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"# Clone the repository\n$ git clone https://github.com/eveble/eveble-boilerplate.git <YOUR_PROJECT_NAME>\n# Go into the repository\n$ cd <YOUR_PROJECT_NAME>\n# Run setup\n$ npm run setup\n")))}p.isMDXComponent=!0},166:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),s=p(n),d=r,m=s["".concat(c,".").concat(d)]||s[d]||u[d]||l;return n?a.a.createElement(m,i(i({ref:t},b),{},{components:n})):a.a.createElement(m,i({ref:t},b))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,c=new Array(l);c[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var b=2;b<l;b++)c[b]=n[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);