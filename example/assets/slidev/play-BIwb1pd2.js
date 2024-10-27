const __vite__fileDeps=["assets/slidev/DrawingControls-DBO_4t6F.js","assets/modules/unplugin-icons-kY-JN3ar.js","assets/modules/vue-D1VB23sT.js","assets/modules/shiki-DW0p5VfM.js","assets/modules/shiki-BSchMNmt.css","assets/slidev/DrawingPreview-BYGW0CL6.js","assets/index-ChpsCojO.js","assets/monaco/bundled-types-BM7NHMtp.js","assets/modules/file-saver-DY7lxZlc.js","assets/monaco/bundled-types-Tai4iJjP.css","assets/index-rybYkf1L.css","assets/DrawingPreview-CkvW5CHP.css","assets/slidev/ContextMenu-BZULyc3z.js","assets/slidev/IconButton-fYS54uWq.js","assets/slidev/title-renderer-JJimN-yP.js","assets/slidev/context-CdRJgWv0.js","assets/ContextMenu-rRH1zmTE.css","assets/DrawingControls-C5T1oZL5.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{a as w,g as B,h as H,_ as O}from"../monaco/bundled-types-BM7NHMtp.js";import{d as g,a7 as $,o,c as r,H as e,b as _,e as n,f as R,i as M,g as i,ag as T,y as z,k,af as h,a6 as E,Q as x,l as p,F as I,x as N,v as U,t as A,h as L}from"../modules/vue-D1VB23sT.js";import{_ as y,h as C,l as S,m as D,a as Q,n as W,o as P,w as F,q as G,r as j}from"../index-ChpsCojO.js";import{Q as q,G as K,C as X,r as Y,u as J,S as Z,N as ee,o as se}from"./ContextMenu-BZULyc3z.js";import{c as oe,a as te}from"./DrawingPreview-BYGW0CL6.js";import"../modules/file-saver-DY7lxZlc.js";import"../modules/shiki-DW0p5VfM.js";import"../modules/unplugin-icons-kY-JN3ar.js";import"./IconButton-fYS54uWq.js";import"./title-renderer-JJimN-yP.js";import"./context-CdRJgWv0.js";const le="/slides/example/assets/logo-BYkHSa_O.png",ae={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},ne=g({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["update:modelValue"],setup(c,{emit:l}){const a=c,s=$(a,"modelValue",l);function t(){s.value=!1}return(f,u)=>(o(),r(T,null,[e(s)?(o(),_("div",ae,[n("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:u[0]||(u[0]=v=>t())}),n("div",{class:M(["m-auto rounded-md bg-main shadow",a.class]),"dark:border":"~ main"},[R(f.$slots,"default")],2)])):i("v-if",!0)],1024))}}),ie=y(ne,[["__file","/home/runner/work/slides/slides/node_modules/@slidev/client/internals/Modal.vue"]]),re={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},de=["innerHTML"],ue=n("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[n("div",{class:"flex gap-1 children:my-auto"},[n("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),n("img",{class:"w-5 h-5",src:le,alt:"Slidev logo"}),n("div",{style:{color:"#2082A6"}},[n("b",null,"Sli"),E("dev ")])])],-1),ce=g({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["update:modelValue"],setup(c,{emit:l}){const s=$(c,"modelValue",l),t=z(()=>typeof w.info=="string");return(f,u)=>(o(),r(ie,{modelValue:e(s),"onUpdate:modelValue":u[0]||(u[0]=v=>h(s)?s.value=v:null),class:"px-6 py-4"},{default:k(()=>[n("div",re,[t.value?(o(),_("div",{key:0,class:"mb-4",innerHTML:e(w).info},null,8,de)):i("v-if",!0),ue])]),_:1},8,["modelValue"]))}}),me=y(ce,[["__file","/home/runner/work/slides/slides/node_modules/@slidev/client/internals/InfoDialog.vue"]]),pe=g({__name:"Controls",setup(c){const l=x(),a=x();return(d,s)=>(o(),_(I,null,[p(q,{modelValue:e(C),"onUpdate:modelValue":s[0]||(s[0]=t=>h(C)?C.value=t:null)},null,8,["modelValue"]),p(K),l.value?(o(),r(e(l),{key:0})):i("v-if",!0),a.value?(o(),r(e(a),{key:1,modelValue:e(S),"onUpdate:modelValue":s[1]||(s[1]=t=>h(S)?S.value=t:null)},null,8,["modelValue"])):i("v-if",!0),e(w).info?(o(),r(me,{key:2,modelValue:e(D),"onUpdate:modelValue":s[2]||(s[2]=t=>h(D)?D.value=t:null)},null,8,["modelValue"])):i("v-if",!0),p(X)],64))}}),fe=y(pe,[["__file","/home/runner/work/slides/slides/node_modules/@slidev/client/internals/Controls.vue"]]),ve=g({__name:"PrintStyle",setup(c){function l(a,{slots:d}){if(d.default)return U("style",d.default())}return(a,d)=>(o(),r(l,null,{default:k(()=>[E(" @page { size: "+N(e(B))+"px "+N(e(H))+"px; margin: 0px; } ",1)]),_:1}))}}),_e=y(ve,[["__file","/home/runner/work/slides/slides/node_modules/@slidev/client/internals/PrintStyle.vue"]]),ge=g({__name:"play",setup(c){Y();const{next:l,prev:a,isEmbedded:d,isPrintMode:s}=Q(),{isDrawing:t}=oe(),f=A();function u(m){var b;P.value||m.button===0&&((b=m.target)==null?void 0:b.id)==="slide-container"&&(m.pageX/window.innerWidth>.6?l():a())}J(f);const v=z(()=>W.value||P.value);x();const V=x();return O(()=>import("./DrawingControls-DBO_4t6F.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17])).then(m=>V.value=m.default),(m,b)=>(o(),_(I,null,[e(s)?(o(),r(_e,{key:0})):i("v-if",!0),n("div",{id:"page-root",ref_key:"root",ref:f,class:M(["grid",e(j)?"grid-rows-[1fr_max-content]":"grid-cols-[1fr_max-content]"])},[p(te,{class:"w-full h-full",style:L({background:"var(--slidev-slide-container-background, black)"}),width:e(s)?e(F).width.value:void 0,scale:e(G),"is-main":!0,onPointerdown:u,onContextmenu:e(se)},{default:k(()=>[p(Z,{"render-context":"slide"})]),controls:k(()=>[e(s)?i("v-if",!0):(o(),_("div",{key:0,class:M(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[v.value?"!opacity-100 right-0":"opacity-0 p-2",e(t)?"pointer-events-none":""]])},[p(ee,{class:"m-auto",persist:v.value},null,8,["persist"])],2)),!e(w).drawings.presenterOnly&&!e(d)&&V.value?(o(),r(e(V),{key:1,class:"ml-0"})):i("v-if",!0)]),_:1},8,["style","width","scale","onContextmenu"]),i("v-if",!0)],2),e(s)?i("v-if",!0):(o(),r(fe,{key:1}))],64))}}),Ne=y(ge,[["__file","/home/runner/work/slides/slides/node_modules/@slidev/client/pages/play.vue"]]);export{Ne as default};