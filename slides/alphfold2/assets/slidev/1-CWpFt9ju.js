import{p as v,B as g}from"../modules/unplugin-icons-CnbedUqE.js";import{d as x,y as b,o as p,b as k,e as t,f as y,h as $,c as w,k as C,A as r,a6 as B,l as c,q as P,s as S}from"../modules/vue-BxaKmS3U.js";import{u,p as A,f as z}from"./context-CxHehx3A.js";import{_,a6 as l}from"../index-B5wOFWXg.js";import"../modules/shiki-CX1VuG5-.js";function d(e){return e.startsWith("/")?"/slides/alphfold2/"+e.slice(1):e}function F(e,o=!1){const s=e&&["#","rgb","hsl"].some(a=>e.indexOf(a)===0),n={background:s?e:void 0,color:e&&!s?"white":void 0,backgroundImage:s?void 0:e?o?`linear-gradient(#0005, #0008), url(${d(e)})`:`url("${d(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return n.background||delete n.background,n}const H={class:"my-auto w-full"},N=x({__name:"cover",props:{background:{default:"https://source.unsplash.com/collection/94734566/1920x1080"}},setup(e){u();const o=e,s=b(()=>F(o.background,!0));return(n,a)=>(p(),k("div",{class:"slidev-layout cover text-center",style:$(s.value)},[t("div",H,[y(n.$slots,"default")])],4))}}),V=_(N,[["__file","/home/runner/work/slides/slides/node_modules/@slidev/theme-seriph/layouts/cover.vue"]]),j=t("h1",null,"AlphaFold2 Encoder Part",-1),E=t("p",null,"Highly accurate protein structure prediction with AlphaFold",-1),G={class:"pt-12"},I={class:"abs-br m-6 flex gap-2"},O={href:"https://github.com/slidevjs/slidev",target:"_blank",alt:"GitHub",title:"Open in GitHub",class:"text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white"},R={__name:"1",setup(e){A(l);const{$slidev:o,$nav:s,$clicksContext:n,$clicks:a,$page:T,$renderContext:q,$frontmatter:L}=u();return(U,i)=>{const m=v,h=g;return p(),w(V,P(S(r(z)(r(l),0))),{default:C(()=>[j,E,t("div",G,[t("span",{onClick:i[0]||(i[0]=(...f)=>r(o).nav.next&&r(o).nav.next(...f)),class:"px-2 py-1 rounded cursor-pointer",hover:"bg-white bg-opacity-10"},[B(" Press Space for next page "),c(m,{class:"inline"})])]),t("div",I,[t("a",O,[c(h)])])]),_:1},16)}}},Q=_(R,[["__file","/@slidev/slides/1.md"]]);export{Q as default};
