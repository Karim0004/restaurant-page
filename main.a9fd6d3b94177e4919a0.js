(()=>{var e={172:(e,t,n)=>{e.exports=n.p+"assets/about.9932ccc86ccc4341beb556a034b05e8f.webp"},154:(e,t,n)=>{e.exports=n.p+"assets/burger.faade8decd81823bd7abfd3e70ccec43.webp"},501:(e,t,n)=>{e.exports=n.p+"assets/home.c16874868ede231e4b857608fc1e2dcf.webp"},74:(e,t,n)=>{e.exports=n.p+"assets/kebab.631ef6a5a009ecdac5f081b19522fd3d.webp"},522:(e,t,n)=>{e.exports=n.p+"assets/menu.a3729d27f8ad2cf374634a52b086233a.webp"},202:(e,t,n)=>{e.exports=n.p+"assets/salad.e078d3b89b328b031ec53e61d65a0a6e.webp"},655:(e,t,n)=>{e.exports=n.p+"assets/spaghetti.b009c7649fc2ba759df258c6acd1cc7a.webp"}},t={};function n(r){var c=t[r];if(void 0!==c)return c.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{"use strict";var e=n(501),t=n.n(e);function r(e){const n=document.createElement("p");n.innerHTML="Welcome to the <br> restaurant's website!",e.innerHTML="",e.style.backgroundImage=`url(${t()})`,e.appendChild(n)}var c=n(172),a=n.n(c);var o=n(522),s=n.n(o),p=n(655),d=n.n(p),i=n(154),u=n.n(i),l=n(74),b=n.n(l),m=n(202),f=n.n(m);!function(){const e=document.getElementById("content"),t=document.createElement("nav"),n=document.createElement("div"),c=document.createElement("button");c.innerText="Home";const o=document.createElement("button");o.innerText="Menu";const p=document.createElement("button");p.innerText="About",c.onclick=()=>{r(n)},o.onclick=()=>{!function(e){const t=document.createElement("div"),n=[{name:"Spaghetti",src:d()},{name:"Burger",src:u()},{name:"Kebab",src:b()},{name:"Salad",src:f()}];for(let e of n){const n=document.createElement("div");n.style.backgroundImage=`url(${e.src})`;const r=document.createElement("p");r.innerText=e.name,n.appendChild(r),t.appendChild(n)}e.innerHTML="",e.style.backgroundImage=`url(${s()})`,e.appendChild(t)}(n)},p.onclick=()=>{!function(e){const t=document.createElement("p");t.innerText="This is not a REAL restaurant webpage, it was created as part of The Odin Project",e.innerHTML="",e.style.backgroundImage=`url(${a()})`,e.appendChild(t)}(n)},t.append(c,o,p),e.append(t,n),r(n)}()})()})();