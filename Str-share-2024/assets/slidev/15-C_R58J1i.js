import{o as s,c as n,k as a,q as c,s as u,A as o,e as l,a6 as e}from"../modules/vue-BEAs01RR.js";import{I as d}from"./default-BCOmFF8E.js";import{_ as r,ao as t}from"../index-ChFb6XYZ.js";import{p,u as _,f as i}from"./context-Cd2A4NL3.js";import"../modules/shiki-Cgzxv8mj.js";const m=l("h2",null,"例题1.病毒检测",-1),h=l("p",null,"科学家们在 Samuel 星球上的探险仍在继续。非常幸运的，在 Samuel 星球的南极附近，探险机器人发现了一个巨大的冰湖！机器人在这个冰湖中搜集到了许多 RNA 片段运回了实验基地。",-1),A=l("p",null,"科学家们经过几个昼夜的研究，发现这些 RNA 片段中有许多是未知的病毒！",-1),f=l("p",null,[e("每个 RNA 片段都是由 "),l("code",null,"A"),e("、"),l("code",null,"C"),e("、"),l("code",null,"T"),e("、"),l("code",null,"G"),e(" 组成的序列。科学家们也总结出了 Samuel 星球上的“病毒模版片段”。一个模版片段是由 "),l("code",null,"A"),e("、"),l("code",null,"C"),e("、"),l("code",null,"T"),e("、"),l("code",null,"G"),e(" 的序列加上通配符 "),l("code",null,"*"),e(" 和 "),l("code",null,"?"),e(" 来表示。其中 "),l("code",null,"*"),e(" 的意思是可以匹配上 "),l("span",{class:"katex"},[l("span",{class:"katex-mathml"},[l("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[l("semantics",null,[l("mrow",null,[l("mn",null,"0")]),l("annotation",{encoding:"application/x-tex"},"0")])])]),l("span",{class:"katex-html","aria-hidden":"true"},[l("span",{class:"base"},[l("span",{class:"strut",style:{height:"0.6444em"}}),l("span",{class:"mord"},"0")])])]),e(" 个或任意多个字符，而 "),l("code",null,"?"),e(" 的意思是匹配上任意一个字母。")],-1),N=l("p",null,"如果一个 RNA 片段能够和“病毒模版片段”相匹配，那么这个 RNA 片段就是未知的病毒。",-1),x=l("p",null,[e("例如，假设 “病毒模版片段”为 "),l("code",null,"A*G?C"),e("。RNA 片段："),l("code",null,"AGTC"),e("，"),l("code",null,"AGTGTC"),e(" 都是未知的病毒，而 RNA 片段 "),l("code",null,"AGTGC"),e(" 则不是病毒。")],-1),R=l("p",null,"由于，机器人搜集的这些 RNA 片段中除去病毒的其他部分都具有非常高的研究价值。所以科学家们希望能够分辨出其中哪些 RNA 片段不是病毒，并将不是病毒的 RNA 片段运回宇宙空间站继续进行研究。",-1),C=l("p",null,"科学家将这项任务交给了小联。现在请你为小联编写程序统计哪些 RNA 片段不是病毒。",-1),G={__name:"15",setup(T){return p(t),_(),(k,w)=>(s(),n(d,c(u(o(i)(o(t),14))),{default:a(()=>[m,h,A,f,N,x,R,C]),_:1},16))}},P=r(G,[["__file","/@slidev/slides/15.md"]]);export{P as default};