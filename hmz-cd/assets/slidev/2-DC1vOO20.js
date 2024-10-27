import{d as y,r as P,A as d,o as a,c as m,k,f as g,b as c,y as f,F as A,ad as I,i as S,l as v,g as C,h as b,e as _,q as w,s as D}from"../modules/vue-BQ1Xka4C.js";import{a as z,_ as p,a7 as L,a8 as N}from"../index-CWWXbveB.js";import{T as B}from"./title-renderer-RA6eN9hv.js";import{u as T,p as M,f as R}from"./context-CPm1l3QR.js";import"../modules/shiki-CfdN-VUO.js";const F=["href","innerHTML"],H=["href"],O=y({__name:"Link",props:{to:{type:[Number,String],required:!0},title:{type:String,required:!1}},setup(s){const{isPrintMode:n}=z();return(t,r)=>{const l=P("RouterLink");return!d(n)&&t.title?(a(),m(l,{key:0,to:String(t.to),onClick:r[0]||(r[0]=u=>u.target.blur()),innerHTML:t.title},null,8,["to","innerHTML"])):!d(n)&&!t.title?(a(),m(l,{key:1,to:String(t.to),onClick:r[1]||(r[1]=u=>u.target.blur())},{default:k(()=>[g(t.$slots,"default")]),_:3},8,["to"])):d(n)&&t.title?(a(),c("a",{key:2,href:`#${t.to}`,innerHTML:t.title},null,8,F)):(a(),c("a",{key:3,href:`#${t.to}`},[g(t.$slots,"default")],8,H))}}}),V=p(O,[["__file","/home/runner/work/slides/slides/node_modules/@slidev/client/builtin/Link.vue"]]),E=["start"],j=y({__name:"TocList",props:{level:{type:Number,required:!0,default:1},start:{type:Number,required:!1},listStyle:{type:[String,Array],required:!1},list:{type:Array,required:!0},listClass:{type:[String,Array],required:!1}},setup(s){const n=s,t=f(()=>[...L(n.listClass||[]),"slidev-toc-list",`slidev-toc-list-level-${n.level}`]),r=f(()=>[...L(n.listStyle||[])]);return(l,u)=>{const h=V,i=P("TocList",!0);return l.list&&l.list.length>0?(a(),c("ol",{key:0,class:S(t.value),start:l.level===1?l.start:void 0,style:b(r.value.length>=l.level?`list-style:${r.value[l.level-1]}`:void 0)},[(a(!0),c(A,null,I(l.list,e=>(a(),c("li",{key:e.path,class:S(["slidev-toc-item",[{"slidev-toc-item-active":e.active},{"slidev-toc-item-parent-active":e.activeParent}]])},[v(h,{to:e.path},{default:k(()=>[v(d(B),{no:e.no},null,8,["no"])]),_:2},1032,["to"]),e.children.length>0?(a(),m(i,{key:0,level:l.level+1,"list-style":l.listStyle,list:e.children,"list-class":l.listClass},null,8,["level","list-style","list","list-class"])):C("v-if",!0)],2))),128))],14,E)):C("v-if",!0)}}}),U=p(j,[["__file","/home/runner/work/slides/slides/node_modules/@slidev/client/builtin/TocList.vue"]]),W=y({__name:"Toc",props:{columns:{type:[String,Number],required:!1,default:1},listClass:{type:[String,Array],required:!1,default:""},start:{type:[String,Number],required:!1,default:1},listStyle:{type:[String,Array],required:!1,default:""},maxDepth:{type:[String,Number],required:!1,default:Number.POSITIVE_INFINITY},minDepth:{type:[String,Number],required:!1,default:1},mode:{type:String,required:!1,default:"all"}},setup(s){const n=s,{$slidev:t}=T();function r(i,e=1){if(e>Number(n.maxDepth))return[];if(e<Number(n.minDepth)){const o=i.find($=>$.active||$.activeParent);return o?r(o.children,e+1):[]}return i.map(o=>({...o,children:r(o.children,e+1)}))}function l(i){return i.filter(e=>e.active||e.activeParent||e.hasActiveParent).map(e=>({...e,children:l(e.children)}))}function u(i){const e=i.some(o=>o.active||o.activeParent||o.hasActiveParent);return i.filter(()=>e).map(o=>({...o,children:u(o.children)}))}const h=f(()=>{const i=t==null?void 0:t.nav.tocTree;if(!i)return[];let e=r(i);return n.mode==="onlyCurrentTree"?e=l(e):n.mode==="onlySiblings"&&(e=u(e)),e});return(i,e)=>{const o=U;return a(),c("div",{class:"slidev-toc",style:b(`column-count:${i.columns}`)},[v(o,{level:1,start:i.start,"list-style":i.listStyle,list:h.value,"list-class":i.listClass},null,8,["start","list-style","list","list-class"])],4)}}}),Y=p(W,[["__file","/home/runner/work/slides/slides/node_modules/@slidev/client/builtin/Toc.vue"]]);function q(s){return s.startsWith("/")?"/slides/hmz-cd/"+s.slice(1):s}function G(s,n=!1){const t=s&&["#","rgb","hsl"].some(l=>s.indexOf(l)===0),r={background:t?s:void 0,color:s&&!t?"white":void 0,backgroundImage:t?void 0:s?n?`linear-gradient(#0005, #0008), url(${q(s)})`:`url("${q(s)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return r.background||delete r.background,r}const J={class:"grid grid-cols-2 w-full h-full"},K=y({__name:"image-right",props:{image:{type:String},class:{type:String}},setup(s){T();const n=s,t=f(()=>G(n.image));return(r,l)=>(a(),c("div",J,[_("div",{class:S(["slidev-layout default image-right",n.class])},[g(r.$slots,"default")],2),_("div",{class:"my-14 mr-14",style:b(t.value)},null,4)]))}}),Q=p(K,[["__file","/home/runner/work/slides/slides/node_modules/@slidev/theme-apple-basic/layouts/image-right.vue"]]),X=_("h2",null,"目录",-1),Z=_("br",null,null,-1),x={__name:"2",setup(s){return M(N),T(),(n,t)=>{const r=Y;return a(),m(Q,w(D(d(R)(d(N),1))),{default:k(()=>[X,Z,v(r,{minDepth:"1",maxDepth:"1"})]),_:1},16)}}},ne=p(x,[["__file","/@slidev/slides/2.md"]]);export{ne as default};