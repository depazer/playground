import{i as le,r as P,G as A,H as Le,I as ke,b as Re,J as We,K as ie,L as ze,M as se,N as $e,O as Te,e as C,B as H,C as oe,P as je,l as Be}from"./index-f77e5177.js";function q(e){return Le()?(ke(e),!0):!1}function ne(){const e=new Set,t=o=>{e.delete(o)};return{on:o=>{e.add(o);const a=()=>t(o);return q(a),{off:a}},off:t,trigger:o=>Promise.all(Array.from(e).map(a=>a(o)))}}function F(e){return typeof e=="function"?e():Re(e)}const ue=typeof window<"u",He=e=>typeof e<"u",X=()=>{};function De(e,t){function n(...r){return new Promise((o,a)=>{Promise.resolve(e(()=>t.apply(this,r),{fn:t,thisArg:this,args:r})).then(o).catch(a)})}return n}const Ne=e=>e();function Je(e,t={}){let n,r,o=X;const a=s=>{clearTimeout(s),o(),o=X};return s=>{const c=F(e),d=F(t.maxWait);return n&&a(n),c<=0||d!==void 0&&d<=0?(r&&(a(r),r=null),Promise.resolve(s())):new Promise((m,u)=>{o=t.rejectOnCancel?u:m,d&&!r&&(r=setTimeout(()=>{n&&a(n),r=null,m(s())},d)),n=setTimeout(()=>{r&&a(r),r=null,m(s())},c)})}}function qe(e=Ne){const t=P(!0);function n(){t.value=!1}function r(){t.value=!0}const o=(...a)=>{t.value&&e(...a)};return{isActive:ie(t),pause:n,resume:r,eventFilter:o}}function de(e,t=!1,n="Timeout"){return new Promise((r,o)=>{setTimeout(t?()=>o(n):r,e)})}function Ue(e,...t){return t.some(n=>n in e)}function Y(...e){if(e.length!==1)return We(...e);const t=e[0];return typeof t=="function"?ie(ze(()=>({get:t,set:X}))):P(t)}function Ge(e,t=200,n={}){return De(Je(t,n),e)}function Ke(e,t=200,n={}){const r=P(e.value),o=Ge(()=>{r.value=e.value},t,n);return A(e,()=>o()),r}function Ce(e,t=!0){se()?$e(e):t?e():Te(e)}function ae(e,t=!1){function n(u,{flush:h="sync",deep:f=!1,timeout:v,throwOnTimeout:y}={}){let _=null;const E=[new Promise(w=>{_=A(e,g=>{u(g)!==t&&(_==null||_(),w(g))},{flush:h,deep:f,immediate:!0})})];return v!=null&&E.push(de(v,y).then(()=>F(e)).finally(()=>_==null?void 0:_())),Promise.race(E)}function r(u,h){if(!le(u))return n(g=>g===u,h);const{flush:f="sync",deep:v=!1,timeout:y,throwOnTimeout:_}=h??{};let i=null;const w=[new Promise(g=>{i=A([e,u],([b,D])=>{t!==(b===D)&&(i==null||i(),g(b))},{flush:f,deep:v,immediate:!0})})];return y!=null&&w.push(de(y,_).then(()=>F(e)).finally(()=>(i==null||i(),F(e)))),Promise.race(w)}function o(u){return n(h=>!!h,u)}function a(u){return r(null,u)}function l(u){return r(void 0,u)}function s(u){return n(Number.isNaN,u)}function c(u,h){return n(f=>{const v=Array.from(f);return v.includes(u)||v.includes(F(u))},h)}function d(u){return m(1,u)}function m(u=1,h){let f=-1;return n(()=>(f+=1,f>=u),h)}return Array.isArray(F(e))?{toMatch:n,toContains:c,changed:d,changedTimes:m,get not(){return ae(e,!t)}}:{toMatch:n,toBe:r,toBeTruthy:o,toBeNull:a,toBeNaN:s,toBeUndefined:l,changed:d,changedTimes:m,get not(){return ae(e,!t)}}}function Qe(e){return ae(e)}function Ye(e,t,n={}){const{immediate:r=!0}=n,o=P(!1);let a=null;function l(){a&&(clearTimeout(a),a=null)}function s(){o.value=!1,l()}function c(...d){l(),o.value=!0,a=setTimeout(()=>{o.value=!1,a=null,e(...d)},F(t))}return r&&(o.value=!0,ue&&c()),q(s),{isPending:ie(o),start:c,stop:s}}function Xe(e=!1,t={}){const{truthyValue:n=!0,falsyValue:r=!1}=t,o=le(e),a=P(e);function l(s){if(arguments.length)return a.value=s,a.value;{const c=F(n);return a.value=a.value===c?F(r):c,a.value}}return o?l:[a,l]}var pe=Object.getOwnPropertySymbols,Ze=Object.prototype.hasOwnProperty,et=Object.prototype.propertyIsEnumerable,tt=(e,t)=>{var n={};for(var r in e)Ze.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&pe)for(var r of pe(e))t.indexOf(r)<0&&et.call(e,r)&&(n[r]=e[r]);return n};function nt(e,t,n={}){const r=n,{eventFilter:o=Ne}=r,a=tt(r,["eventFilter"]);return A(e,De(o,t),a)}var rt=Object.defineProperty,ot=Object.defineProperties,at=Object.getOwnPropertyDescriptors,Z=Object.getOwnPropertySymbols,Me=Object.prototype.hasOwnProperty,Ae=Object.prototype.propertyIsEnumerable,ve=(e,t,n)=>t in e?rt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,lt=(e,t)=>{for(var n in t||(t={}))Me.call(t,n)&&ve(e,n,t[n]);if(Z)for(var n of Z(t))Ae.call(t,n)&&ve(e,n,t[n]);return e},it=(e,t)=>ot(e,at(t)),st=(e,t)=>{var n={};for(var r in e)Me.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&Z)for(var r of Z(e))t.indexOf(r)<0&&Ae.call(e,r)&&(n[r]=e[r]);return n};function ut(e,t,n={}){const r=n,{eventFilter:o}=r,a=st(r,["eventFilter"]),{eventFilter:l,pause:s,resume:c,isActive:d}=qe(o);return{stop:nt(e,t,it(lt({},a),{eventFilter:l})),pause:s,resume:c,isActive:d}}function ee(e){var t;const n=F(e);return(t=n==null?void 0:n.$el)!=null?t:n}const k=ue?window:void 0,ct=ue?window.document:void 0;function J(...e){let t,n,r,o;if(typeof e[0]=="string"||Array.isArray(e[0])?([n,r,o]=e,t=k):[t,n,r,o]=e,!t)return X;Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r]);const a=[],l=()=>{a.forEach(m=>m()),a.length=0},s=(m,u,h,f)=>(m.addEventListener(u,h,f),()=>m.removeEventListener(u,h,f)),c=A(()=>[ee(t),F(o)],([m,u])=>{l(),m&&a.push(...n.flatMap(h=>r.map(f=>s(m,h,f,u))))},{immediate:!0,flush:"post"}),d=()=>{c(),l()};return q(d),d}function ft(){const e=P(!1);return se()&&$e(()=>{e.value=!0}),e}function xe(e){const t=ft();return C(()=>(t.value,!!e()))}function Ie(e,t={}){const{window:n=k}=t,r=xe(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function");let o;const a=P(!1),l=d=>{a.value=d.matches},s=()=>{o&&("removeEventListener"in o?o.removeEventListener("change",l):o.removeListener(l))},c=oe(()=>{r.value&&(s(),o=n.matchMedia(F(e)),"addEventListener"in o?o.addEventListener("change",l):o.addListener(l),a.value=o.matches)});return q(()=>{c(),s(),o=void 0}),a}function dt(e){return JSON.parse(JSON.stringify(e))}const K=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Q="__vueuse_ssr_handlers__",pt=vt();function vt(){return Q in K||(K[Q]=K[Q]||{}),K[Q]}function Ve(e,t){return pt[e]||t}function mt(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}var ht=Object.defineProperty,me=Object.getOwnPropertySymbols,yt=Object.prototype.hasOwnProperty,gt=Object.prototype.propertyIsEnumerable,he=(e,t,n)=>t in e?ht(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ye=(e,t)=>{for(var n in t||(t={}))yt.call(t,n)&&he(e,n,t[n]);if(me)for(var n of me(t))gt.call(t,n)&&he(e,n,t[n]);return e};const wt={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},ge="vueuse-storage";function _t(e,t,n,r={}){var o;const{flush:a="pre",deep:l=!0,listenToStorageChanges:s=!0,writeDefaults:c=!0,mergeDefaults:d=!1,shallow:m,window:u=k,eventFilter:h,onError:f=p=>{console.error(p)}}=r,v=(m?H:P)(t);if(!n)try{n=Ve("getDefaultStorage",()=>{var p;return(p=k)==null?void 0:p.localStorage})()}catch(p){f(p)}if(!n)return v;const y=F(t),_=mt(y),i=(o=r.serializer)!=null?o:wt[_],{pause:E,resume:w}=ut(v,()=>g(v.value),{flush:a,deep:l,eventFilter:h});return u&&s&&(J(u,"storage",N),J(u,ge,D)),N(),v;function g(p){try{if(p==null)n.removeItem(e);else{const O=i.write(p),S=n.getItem(e);S!==O&&(n.setItem(e,O),u&&u.dispatchEvent(new CustomEvent(ge,{detail:{key:e,oldValue:S,newValue:O,storageArea:n}})))}}catch(O){f(O)}}function b(p){const O=p?p.newValue:n.getItem(e);if(O==null)return c&&y!==null&&n.setItem(e,i.write(y)),y;if(!p&&d){const S=i.read(O);return typeof d=="function"?d(S,y):_==="object"&&!Array.isArray(S)?ye(ye({},y),S):S}else return typeof O!="string"?O:i.read(O)}function D(p){N(p.detail)}function N(p){if(!(p&&p.storageArea!==n)){if(p&&p.key==null){v.value=y;return}if(!(p&&p.key!==e)){E();try{v.value=b(p)}catch(O){f(O)}finally{p?Te(w):w()}}}}}function Ot(e){return Ie("(prefers-color-scheme: dark)",e)}var bt=Object.defineProperty,we=Object.getOwnPropertySymbols,Pt=Object.prototype.hasOwnProperty,St=Object.prototype.propertyIsEnumerable,_e=(e,t,n)=>t in e?bt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ft=(e,t)=>{for(var n in t||(t={}))Pt.call(t,n)&&_e(e,n,t[n]);if(we)for(var n of we(t))St.call(t,n)&&_e(e,n,t[n]);return e};function Et(e={}){const{selector:t="html",attribute:n="class",initialValue:r="auto",window:o=k,storage:a,storageKey:l="vueuse-color-scheme",listenToStorageChanges:s=!0,storageRef:c,emitAuto:d,disableTransition:m=!0}=e,u=Ft({auto:"",light:"light",dark:"dark"},e.modes||{}),h=Ot({window:o}),f=C(()=>h.value?"dark":"light"),v=c||(l==null?Y(r):_t(l,r,a,{window:o,listenToStorageChanges:s})),y=C(()=>v.value==="auto"?f.value:v.value),_=Ve("updateHTMLAttrs",(g,b,D)=>{const N=typeof g=="string"?o==null?void 0:o.document.querySelector(g):ee(g);if(!N)return;let p;if(m){p=o.document.createElement("style");const O="*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";p.appendChild(document.createTextNode(O)),o.document.head.appendChild(p)}if(b==="class"){const O=D.split(/\s/g);Object.values(u).flatMap(S=>(S||"").split(/\s/g)).filter(Boolean).forEach(S=>{O.includes(S)?N.classList.add(S):N.classList.remove(S)})}else N.setAttribute(b,D);m&&(o.getComputedStyle(p).opacity,document.head.removeChild(p))});function i(g){var b;_(t,n,(b=u[g])!=null?b:g)}function E(g){e.onChanged?e.onChanged(g,i):i(g)}A(y,E,{flush:"post",immediate:!0}),Ce(()=>E(y.value));const w=C({get(){return d?v.value:y.value},set(g){v.value=g}});try{return Object.assign(w,{store:v,system:f,state:y})}catch{return w}}var $t=Object.defineProperty,Tt=Object.defineProperties,jt=Object.getOwnPropertyDescriptors,Oe=Object.getOwnPropertySymbols,Dt=Object.prototype.hasOwnProperty,Nt=Object.prototype.propertyIsEnumerable,be=(e,t,n)=>t in e?$t(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ct=(e,t)=>{for(var n in t||(t={}))Dt.call(t,n)&&be(e,n,t[n]);if(Oe)for(var n of Oe(t))Nt.call(t,n)&&be(e,n,t[n]);return e},Mt=(e,t)=>Tt(e,jt(t));function zt(e={}){const{valueDark:t="dark",valueLight:n=""}=e,r=Et(Mt(Ct({},e),{onChanged:(a,l)=>{var s;e.onChanged?(s=e.onChanged)==null||s.call(e,a==="dark",l,a):l(a)},modes:{dark:t,light:n}}));return C({get(){return r.value==="dark"},set(a){const l=a?"dark":"light";r.system.value===l?r.value="auto":r.value=l}})}var At=Object.defineProperty,xt=Object.defineProperties,It=Object.getOwnPropertyDescriptors,Pe=Object.getOwnPropertySymbols,Vt=Object.prototype.hasOwnProperty,Lt=Object.prototype.propertyIsEnumerable,Se=(e,t,n)=>t in e?At(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,j=(e,t)=>{for(var n in t||(t={}))Vt.call(t,n)&&Se(e,n,t[n]);if(Pe)for(var n of Pe(t))Lt.call(t,n)&&Se(e,n,t[n]);return e},B=(e,t)=>xt(e,It(t));const kt={json:"application/json",text:"text/plain"};function Fe(e){return e&&Ue(e,"immediate","refetch","initialData","timeout","beforeFetch","afterFetch","onFetchError","fetch")}function re(e){return typeof Headers<"u"&&e instanceof Headers?Object.fromEntries([...e.entries()]):e}function Rt(e,...t){var n;const r=typeof AbortController=="function";let o={},a={immediate:!0,refetch:!1,timeout:0};const l={method:"GET",type:"text",payload:void 0};t.length>0&&(Fe(t[0])?a=j(j({},a),t[0]):o=t[0]),t.length>1&&Fe(t[1])&&(a=j(j({},a),t[1]));const{fetch:s=(n=k)==null?void 0:n.fetch,initialData:c,timeout:d}=a,m=ne(),u=ne(),h=ne(),f=P(!1),v=P(!1),y=P(!1),_=P(null),i=H(null),E=H(null),w=H(c||null),g=C(()=>r&&v.value);let b,D;const N=()=>{r&&(b==null||b.abort(),b=new AbortController,b.signal.onabort=()=>y.value=!0,o=B(j({},o),{signal:b.signal}))},p=$=>{v.value=$,f.value=!$};d&&(D=Ye(N,d,{immediate:!1}));const O=async($=!1)=>{var x;N(),p(!0),E.value=null,_.value=null,y.value=!1;const M={method:l.method,headers:{}};if(l.payload){const G=re(M.headers),L=F(l.payload);!l.payloadType&&L&&Object.getPrototypeOf(L)===Object.prototype&&!(L instanceof FormData)&&(l.payloadType="json"),l.payloadType&&(G["Content-Type"]=(x=kt[l.payloadType])!=null?x:l.payloadType),M.body=l.payloadType==="json"?JSON.stringify(L):L}let R=!1;const V={url:F(e),options:j(j({},M),o),cancel:()=>{R=!0}};if(a.beforeFetch&&Object.assign(V,await a.beforeFetch(V)),R||!s)return p(!1),Promise.resolve(null);let z=null;return D&&D.start(),new Promise((G,L)=>{var ce;s(V.url,B(j(j({},M),V.options),{headers:j(j({},re(M.headers)),re((ce=V.options)==null?void 0:ce.headers))})).then(async T=>{if(i.value=T,_.value=T.status,z=await T[l.type](),!T.ok)throw w.value=c||null,new Error(T.statusText);return a.afterFetch&&({data:z}=await a.afterFetch({data:z,response:T})),w.value=z,m.trigger(T),G(T)}).catch(async T=>{let fe=T.message||T.name;return a.onFetchError&&({error:fe}=await a.onFetchError({data:z,error:T,response:i.value})),E.value=fe,u.trigger(T),$?L(T):G(null)}).finally(()=>{p(!1),D&&D.stop(),h.trigger(null)})})},S=Y(a.refetch);A([S,Y(e)],([$])=>$&&O(),{deep:!0});const U={isFinished:f,statusCode:_,response:i,error:E,data:w,isFetching:v,canAbort:g,aborted:y,abort:N,execute:O,onFetchResponse:m.on,onFetchError:u.on,onFetchFinally:h.on,get:I("GET"),put:I("PUT"),post:I("POST"),delete:I("DELETE"),patch:I("PATCH"),head:I("HEAD"),options:I("OPTIONS"),json:W("json"),text:W("text"),blob:W("blob"),arrayBuffer:W("arrayBuffer"),formData:W("formData")};function I($){return(x,M)=>{if(!v.value)return l.method=$,l.payload=x,l.payloadType=M,le(l.payload)&&A([S,Y(l.payload)],([R])=>R&&O(),{deep:!0}),B(j({},U),{then(R,V){return te().then(R,V)}})}}function te(){return new Promise(($,x)=>{Qe(f).toBe(!0).then(()=>$(U)).catch(M=>x(M))})}function W($){return()=>{if(!v.value)return l.type=$,B(j({},U),{then(x,M){return te().then(x,M)}})}}return a.immediate&&Promise.resolve().then(()=>O()),B(j({},U),{then($,x){return te().then($,x)}})}const Ee=["fullscreenchange","webkitfullscreenchange","webkitendfullscreen","mozfullscreenchange","MSFullscreenChange"];function Bt(e,t={}){const{document:n=ct,autoExit:r=!1}=t,o=C(()=>{var i;return(i=ee(e))!=null?i:n==null?void 0:n.querySelector("html")}),a=P(!1),l=C(()=>["requestFullscreen","webkitRequestFullscreen","webkitEnterFullscreen","webkitEnterFullScreen","webkitRequestFullScreen","mozRequestFullScreen","msRequestFullscreen"].find(i=>n&&i in n||o.value&&i in o.value)),s=C(()=>["exitFullscreen","webkitExitFullscreen","webkitExitFullScreen","webkitCancelFullScreen","mozCancelFullScreen","msExitFullscreen"].find(i=>n&&i in n||o.value&&i in o.value)),c=C(()=>["fullScreen","webkitIsFullScreen","webkitDisplayingFullscreen","mozFullScreen","msFullscreenElement"].find(i=>n&&i in n||o.value&&i in o.value)),d=["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"].find(i=>n&&i in n),m=xe(()=>o.value&&n&&l.value!==void 0&&s.value!==void 0&&c.value!==void 0),u=()=>d?(n==null?void 0:n[d])===o.value:!1,h=()=>{if(c.value){if(n&&n[c.value]!=null)return n[c.value];{const i=o.value;if((i==null?void 0:i[c.value])!=null)return!!i[c.value]}}return!1};async function f(){if(!(!m.value||!a.value)){if(s.value)if((n==null?void 0:n[s.value])!=null)await n[s.value]();else{const i=o.value;(i==null?void 0:i[s.value])!=null&&await i[s.value]()}a.value=!1}}async function v(){if(!m.value||a.value)return;h()&&await f();const i=o.value;l.value&&(i==null?void 0:i[l.value])!=null&&(await i[l.value](),a.value=!0)}async function y(){await(a.value?f():v())}const _=()=>{const i=h();(!i||i&&u())&&(a.value=i)};return J(n,Ee,_,!1),J(()=>ee(o),Ee,_,!1),r&&q(f),{isSupported:m,isFullscreen:a,enter:v,exit:f,toggle:y}}function Ht(e,t,n,r={}){var o,a,l;const{clone:s=!1,passive:c=!1,eventName:d,deep:m=!1,defaultValue:u,shouldEmit:h}=r,f=se(),v=n||(f==null?void 0:f.emit)||((o=f==null?void 0:f.$emit)==null?void 0:o.bind(f))||((l=(a=f==null?void 0:f.proxy)==null?void 0:a.$emit)==null?void 0:l.bind(f==null?void 0:f.proxy));let y=d;t||(t="modelValue"),y=y||`update:${t.toString()}`;const _=w=>s?typeof s=="function"?s(w):dt(w):w,i=()=>He(e[t])?_(e[t]):u,E=w=>{h?h(w)&&v(y,w):v(y,w)};if(c){const w=i(),g=P(w);return A(()=>e[t],b=>g.value=_(b)),A(g,b=>{(b!==e[t]||m)&&E(b)},{deep:m}),g}else return C({get(){return i()},set(w){E(w)}})}function Jt(e={}){const{window:t=k,initialWidth:n=Number.POSITIVE_INFINITY,initialHeight:r=Number.POSITIVE_INFINITY,listenOrientation:o=!0,includeScrollbar:a=!0}=e,l=P(n),s=P(r),c=()=>{t&&(a?(l.value=t.innerWidth,s.value=t.innerHeight):(l.value=t.document.documentElement.clientWidth,s.value=t.document.documentElement.clientHeight))};if(c(),Ce(c),J("resize",c,{passive:!0}),o){const d=Ie("(orientation: portrait)");A(d,()=>c())}return{width:l,height:s}}const qt=je("module",()=>{const e=Be({depth:2,includeDev:!1,isLocal:!0,rootModule:""}),t=(c,d)=>`/api/graph?depth=${c}&includeDeps=${d}`,n=P(t(e.depth,e.includeDev)),{data:r,abort:o}=Rt(Ke(n,300),{refetch:!0}).get().json();oe(()=>{o(),n.value=t(e.depth,e.includeDev)});const a=C(()=>(r==null?void 0:r.value)??[]),l=H({nodes:[],links:[]}),s=new Worker(new URL("/assets/depsDigraphWorker-97679e17.js",self.location));return s.onmessage=c=>{l.value=c.data.data},oe(()=>{s.postMessage({nodes:a.value,rootModule:e.rootModule})}),{graphData:l,moduleConfig:e,nodesData:a}}),Ut=je("app",()=>{const e=["https://registry.npmmirror.com/","https://registry.npmjs.cf/"],t=P(e[0]),n=P(!1),r=Xe(n),o=P(5e3);return{currentRegistry:t,fixedNailModel:n,npmRegistryURLs:e,repulsion:o,toggleFixedNailModel:r}});export{Xe as a,qt as b,Ge as c,Ut as d,Rt as e,zt as f,Bt as g,Jt as h,Ke as r,Ht as u};
