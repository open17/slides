import{d as l,y as n,o as c,b as d,e as i,f as m,i as u,h as p}from"../modules/vue-BEAs01RR.js";import{u as f}from"./context-Cd2A4NL3.js";import{_ as g}from"../index-ChFb6XYZ.js";function a(e){return e.startsWith("/")?"/slides/Str-share-2024/"+e.slice(1):e}function h(e,o=!1){const s=e&&["#","rgb","hsl"].some(r=>e.indexOf(r)===0),t={background:s?e:void 0,color:e&&!s?"white":void 0,backgroundImage:s?void 0:e?o?`linear-gradient(#0005, #0008), url(${a(e)})`:`url("${a(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return t.background||delete t.background,t}const v={class:"grid grid-cols-2 w-full h-full"},_=l({__name:"image-right",props:{image:{type:String},class:{type:String}},setup(e){f();const o=e,s=n(()=>h(o.image));return(t,r)=>(c(),d("div",v,[i("div",{class:u(["slidev-layout default image-right",o.class])},[m(t.$slots,"default")],2),i("div",{class:"my-14 mr-14",style:p(s.value)},null,4)]))}}),b=g(_,[["__file","/home/runner/work/slides/slides/node_modules/@slidev/theme-apple-basic/layouts/image-right.vue"]]);export{b as I};