import{n as y}from"../modules/unplugin-icons-kY-JN3ar.js";import{d as g,y as i,o as u,b as c,e as s,l as S,H as w,F as f,x as m,g as I,ad as z,aa as V,ab as $,h as x,i as d,p as B,a as D}from"../modules/vue-D1VB23sT.js";import{c as F,r as M}from"../monaco/bundled-types-BM7NHMtp.js";import{C as N,_ as L}from"../index-ChpsCojO.js";const k=a=>(B("data-v-46eb6e62"),a=a(),D(),a),T=["title"],j={class:"flex gap-0.5 items-center min-w-16 font-mono mr1"},q=k(()=>s("div",{"flex-auto":""},null,-1)),A={"text-primary":""},E=k(()=>s("span",{op25:""},"/",-1)),H={op50:""},K=["min","max"],R=g({__name:"ClicksSlider",props:{clicksContext:{type:null,required:!0}},setup(a){const n=a,o=i(()=>n.clicksContext.total),p=i(()=>F(0,n.clicksContext.clicksStart,o.value)),r=i(()=>o.value-p.value+1),t=i({get(){return n.clicksContext.current>o.value?-1:n.clicksContext.current},set(v){n.clicksContext.current=v}}),b=i(()=>M(p.value,o.value+1));function C(){(t.value<0||t.value>o.value)&&(t.value=0)}return(v,l)=>{const h=y;return u(),c("div",{class:d(["flex gap-1 items-center select-none",r.value?"":"op50"]),title:`Clicks in this slide: ${r.value}`},[s("div",j,[S(h,{"text-sm":"",op50:""}),q,t.value>=0&&t.value!==w(N)?(u(),c(f,{key:0},[s("span",A,m(t.value),1),E],64)):I("v-if",!0),s("span",H,m(o.value),1)]),s("div",{relative:"","flex-auto":"",h5:"","font-mono":"",flex:"~",onDblclick:l[2]||(l[2]=e=>t.value=v.clicksContext.total)},[(u(!0),c(f,null,z(b.value,e=>(u(),c("div",{key:e,border:"y main","of-hidden":"",relative:"",class:d([e===0?"rounded-l border-l":"",e===o.value?"rounded-r border-r":""]),style:x({width:r.value>0?`${1/r.value*100}%`:"100%"})},[s("div",{absolute:"","inset-0":"",class:d(e<=t.value?"bg-primary op15":"")},null,2),s("div",{class:d([+e==+t.value?"text-primary font-bold op100 border-primary":"op30 border-main",e===0?"rounded-l":"",e===o.value?"rounded-r":"border-r-2"]),"w-full":"","h-full":"","text-xs":"",flex:"","items-center":"","justify-center":"","z-1":""},m(e),3)],6))),128)),V(s("input",{"onUpdate:modelValue":l[0]||(l[0]=e=>t.value=e),class:"range",absolute:"","inset-0":"",type:"range",min:p.value,max:o.value,step:1,"z-10":"",op0:"",style:x({"--thumb-width":`${1/(r.value+1)*100}%`}),onMousedown:C,onFocus:l[1]||(l[1]=e=>{var _;return(_=e.currentTarget)==null?void 0:_.blur()})},null,44,K),[[$,t.value]])],32)],10,T)}}}),O=L(R,[["__scopeId","data-v-46eb6e62"],["__file","/home/runner/work/slides/slides/node_modules/@slidev/client/internals/ClicksSlider.vue"]]);export{O as C};
