import{d as h,u as B,o as f,c as v,a as e,b as o,e as k,r as w,n as C,w as S,v as F,i as y,f as M,g as _,h as L,j as z,F as U,k as A,T as R,t as E,_ as j,s as T,l as P,m as O,p as X,q,x as G}from"./index-e27cdd29.js";import{u as H,a as D,r as J,b as K,c as Q,d as W}from"./app-57a37acc.js";const Y=["title","bg"],Z=["transform"],I=h({__name:"index",props:{modelValue:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(d,{emit:i}){const{t}=B({messages:{"zh-CN":{switch:{on:"开",off:"关"}},"en-US":{switch:{on:"ON",off:"OFF"}}}});return(s,n)=>(f(),v("button",{type:"button",title:o(t)(s.modelValue?"switch.on":"switch.off"),onClick:n[0]||(n[0]=u=>i("update:modelValue",!s.modelValue)),border:"2 solid gray-1 dark:slate-6",flex:"~ justify-center items-center",bg:s.modelValue&&"!gray-5 !dark:slate-2",class:"h-6 w-12 rounded-3 bg-gray-2 transition-background-color dark:bg-slate-8 transition-background-color"},[e("span",{transform:s.modelValue&&"translate-x-3",class:"inline-block h-4 w-4 rounded-2 bg-gray-4 transition-transform -translate-x-3"},null,8,Z)],8,Y))}});function x(d,i=0,t=100){return i>t&&([i,t]=[t,i]),Math.min(Math.max(d,i),t)}const ee=["title"],te=h({__name:"index",props:{modelValue:{default:0},min:{default:0},max:{default:100}},emits:["update:modelValue"],setup(d,{emit:i}){const t=d,s=k(()=>t.max-t.min),n=k({get:()=>x((t.modelValue-t.min)/s.value*100),set:r=>i("update:modelValue",s.value*(r/100)+t.min)}),u=w(),c=k(()=>{var b;const{left:r,width:g}=((b=u.value)==null?void 0:b.getBoundingClientRect())??{left:0,width:100};return{left:r,width:g}});function m(r){const{left:g,width:b}=c.value,$=(r.clientX-g)/b*100;n.value=~~x($)}function a(r){const{left:g,width:b}=c.value,$=(r.clientX-g)/b*100;n.value=~~x($)}function l(){window.addEventListener("mousemove",a),window.addEventListener("mouseup",p)}function p(){window.removeEventListener("mousemove",a),window.removeEventListener("mouseup",p)}return(r,g)=>(f(),v("div",{ref_key:"slider",ref:u,onClick:m,onMousedown:l,class:"rounded bg-gray-2 dark:bg-slate-8 h-1"},[e("div",{style:C(`width: ${o(n)}%`),class:"h-1 rounded w-1/4 bg-gray dark:bg-slate"},null,4),e("button",{type:"button",title:o(n)+"%",style:C(`left: calc(${o(n)}% - 0.5rem)`),border:"solid 4 gray-1 dark:slate-6",class:"bg-gray dark:bg-slate relative rounded-xl pa-2 -top-4.5"},null,12,ee)],544))}}),se={class:"flex rounded-md bg-gray-2 dark:bg-slate-6",border:"solid gray-2 dark:slate-6"},oe=e("i",{"i-ci-remove-minus":""},null,-1),le=[oe],ne=e("i",{"i-ci-add-plus":""},null,-1),ae=[ne],re=h({__name:"index",props:{modelValue:{},min:{default:0},max:{default:100}},emits:["update:modelValue"],setup(d,{emit:i}){const t=d,s=k({get:()=>t.modelValue,set:c=>i("update:modelValue",x(~~c,t.min,t.max))});function n(){s.value+=1}function u(){s.value-=1}return(c,m)=>(f(),v("div",se,[e("button",{title:"减",type:"button",onClick:u,bg:"gray-2 dark:slate-6 hover:gray dark:hover:slate active:gray/70 dark:active:slate/70",class:"rounded-l-md border-none dark:text-slate-1"},le),S(e("input",{"onUpdate:modelValue":m[0]||(m[0]=a=>y(s)?s.value=a:null),placeholder:"请输入数字",bg:"gray-2 dark:slate-6 focus:gray-1 dark:focus:slate-8",class:"block w-full border-none text-center text-4 dark:text-slate-1 focus:outline-none"},null,512),[[F,o(s),void 0,{lazy:!0}]]),e("button",{title:"加",type:"button",onClick:n,bg:"gray-2 dark:slate-6 hover:gray dark:hover:slate active:gray/70 dark:active:slate/70",class:"rounded-r-md border-none dark:text-slate-1"},ae)]))}}),de=["placeholder"],ie=["onClick"],ue={class:"text-base font-400"},ce=h({__name:"index",props:{data:{},placeholder:{},modelValue:{}},emits:["update:modelValue"],setup(d,{emit:i}){const t=d,s=H(t,"modelValue",i),n=w(!1),u=D(n),c=w(null),m=J(s,500),a=k(()=>t.data.filter(p=>p.includes(m.value)).slice(0,5));return(l,p)=>(f(),v(U,null,[e("div",{ref_key:"autoComplete",ref:c,flex:"~ items-center",class:"rounded pa-1",bg:"gray-2 focus-within:gray-1  dark:slate-6 focus-within:dark:slate-8"},[M(l.$slots,"prefix",{},void 0,!0),S(e("input",{class:"w-full rounded-md border-none pa-1 text-base focus:outline-none",bg:"transparent","onUpdate:modelValue":p[0]||(p[0]=r=>y(s)?s.value=r:null),placeholder:l.placeholder,onBlur:p[1]||(p[1]=r=>o(u)()),onFocus:p[2]||(p[2]=r=>o(u)())},null,40,de),[[F,o(s)]]),M(l.$slots,"suffix",{},void 0,!0)],512),_(R,{name:"options"},{default:L(()=>{var r;return[S(e("ul",{style:C(`width: ${(r=o(c))==null?void 0:r.getBoundingClientRect().width}px`),class:"absolute pa-0 mt-1 bg-gray-2 dark:bg-slate-6 rounded-md overflow-hidden shadow-md"},[(f(!0),v(U,null,A(o(a),g=>(f(),v("li",{tabindex:"0",onClick:()=>s.value=g,class:"list-none pa-2 hover:bg-gray-3/50 dark:hover:bg-slate-7/50 cursor-pointer",key:g},[e("span",ue,E(g),1)],8,ie))),128))],4),[[z,o(n)]])]}),_:1})],64))}});const pe=j(ce,[["__scopeId","data-v-f6e3f379"]]),me={bg:"gray-3 dark:slate-7",class:"w-xs select-none rounded-md pa-4",shadow:"lg gray-3 dark:slate-6"},ge={flex:"~ justify-between items-center"},_e=e("span",{class:"font-bold"},"设置",-1),fe=e("i",{class:"i-uil-times",text:"xl"},null,-1),ve=[fe],be={"my-4":"",flex:"~ justify-between items-center"},ye=e("span",null,"拖拽固定",-1),he={"my-4":"",flex:"~ justify-between items-center"},ke=e("span",null,"包含开发依赖",-1),xe={class:"mt-4",flex:"~ justify-between items-center"},we=e("span",null,"最大深度",-1),Ve=e("p",null,"斥力大小",-1),$e=e("p",null,"注册表API",-1),Ce=e("i",{class:"i-logos-npm-icon mx-2 text-base"},null,-1),Se=h({__name:"GlobalSetting",emits:["close"],setup(d,{emit:i}){const t=K(),{depth:s,fixedNailModel:n,includeDev:u,repulsion:c}=T(t);return(m,a)=>(f(),v("div",me,[e("header",ge,[_e,e("button",{type:"button",title:"关闭",class:"ma-0 rounded-md border-none pa-1",bg:"transparent hover:gray-2 hover:dark:slate-8",onClick:a[0]||(a[0]=l=>i("close"))},ve)]),e("div",null,[e("div",be,[ye,_(I,{modelValue:o(n),"onUpdate:modelValue":a[1]||(a[1]=l=>y(n)?n.value=l:null)},null,8,["modelValue"])]),e("div",he,[ke,_(I,{modelValue:o(u),"onUpdate:modelValue":a[2]||(a[2]=l=>y(u)?u.value=l:null)},null,8,["modelValue"])]),e("div",xe,[we,_(re,{modelValue:o(s),"onUpdate:modelValue":a[3]||(a[3]=l=>y(s)?s.value=l:null),max:1/0,class:"max-w-24"},null,8,["modelValue"])]),Ve,_(te,{max:1e4,min:100,modelValue:o(c),"onUpdate:modelValue":a[4]||(a[4]=l=>y(c)?c.value=l:null),class:"mr-4"},null,8,["modelValue"]),$e,_(pe,{modelValue:o(t).currentRegistry,"onUpdate:modelValue":a[5]||(a[5]=l=>o(t).currentRegistry=l),data:o(t).npmRegistryURLs},{prefix:L(()=>[Ce]),_:1},8,["modelValue","data"])])]))}});function Ue(){const{locale:d}=B();function i(s){d.value=s,localStorage.setItem("language",s)}function t(){i(d.value==="en-US"?"zh-CN":"en-US")}return{locale:d,toggleLocale:t}}const V=d=>(q("data-v-4f5dbd46"),d=d(),G(),d),De={flex:"~ justify-between items-center",class:"fixed box-border w-full px-4 py-2"},Le=V(()=>e("span",{class:"select-none text-xl font-bold"},"Dependency Analyzer",-1)),Me=V(()=>e("i",{class:"i-uil-english-to-chinese",text:"2xl gray-6 dark:slate-1"},null,-1)),Ie=[Me],Be=V(()=>e("i",{class:"i-uil-moonset dark:i-uil-sunset",text:"2xl gray-6 dark:slate-1"},null,-1)),Fe=[Be],Re=V(()=>e("i",{class:"i-uil-setting",text:"2xl gray-6 dark:slate-1"},null,-1)),je=[Re],Ne={key:0,class:"absolute right-4 top-16"},ze=h({__name:"index",setup(d){const i=Q(),t=D(i),{isFullscreen:s,toggle:n}=W(),{toggleLocale:u}=Ue(),c=w(!1),m=D(c);return(a,l)=>{const p=P("router-view");return f(),v(U,null,[e("header",De,[Le,e("div",null,[e("button",{title:"全屏",type:"button",class:"mr-2 cursor-pointer rounded-full pa-1",bg:"gray-1 hover:gray-2 active:gray-3 dark:slate-6 hover:dark:slate-7 active:dark:slate-8",border:"solid 1 gray-3 dark:slate-5",onClick:l[0]||(l[0]=(...r)=>o(n)&&o(n)(...r))},[e("i",{class:O(o(s)?"i-uil-compress":"i-uil-focus"),text:"2xl gray-6 dark:slate-1"},null,2)]),e("button",{title:"语言",type:"button",class:"mr-2 cursor-pointer rounded-full pa-1",bg:"gray-1 hover:gray-2 active:gray-3 dark:slate-6 hover:dark:slate-7 active:dark:slate-8",border:"solid 1 gray-3 dark:slate-5",onClick:l[1]||(l[1]=(...r)=>o(u)&&o(u)(...r))},Ie),e("button",{title:"颜色模式",type:"button",class:"mr-2 cursor-pointer rounded-full pa-1",bg:"gray-1 hover:gray-2 active:gray-3 dark:slate-6 hover:dark:slate-7 active:dark:slate-8",border:"solid 1 gray-3 dark:slate-5",onClick:l[2]||(l[2]=()=>o(t)())},Fe),e("button",{title:"设置",type:"button",class:"cursor-pointer rounded-full pa-1",bg:"gray-1 hover:gray-2 active:gray-3 dark:slate-6 hover:dark:slate-7 active:dark:slate-8",border:"solid 1 gray-3 dark:slate-5",onClick:l[3]||(l[3]=()=>o(m)())},je)])]),_(R,{name:"setting"},{default:L(()=>[o(c)?(f(),v("aside",Ne,[_(Se,{onClose:o(m)},null,8,["onClose"])])):X("",!0)]),_:1}),e("main",null,[_(p)])],64)}}});const Te=j(ze,[["__scopeId","data-v-4f5dbd46"]]);export{Te as default};
