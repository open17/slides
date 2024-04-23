---
# try also 'default' to start simple
theme: seriph
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://cover.sli.dev
# some information about your slides, markdown enabled
title: AlphaFold2 Encoder
# apply any unocss classes to the current slide
# class: text-center
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# https://sli.dev/guide/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations#slide-transitions
transition: slide-left
# enable MDC Syntax: https://sli.dev/guide/syntax#mdc-syntax
mdc: true
---

# AlphaFold2 Encoder Part

Highly accurate protein structure prediction with AlphaFold

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>

<div class="abs-br m-6 flex gap-2">
  <a href="https://github.com/slidevjs/slidev" target="_blank" alt="GitHub" title="Open in GitHub"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>  


---

## 回顾总体  

![](https://cdn.jsdelivr.net/gh/open17/Pic/img/202404231333916.png)


---

## 编码器

![alt text](https://cdn.jsdelivr.net/gh/open17/Pic/img/202404231332082.png)

- 多头自注意力机制(行,列)
- MLP
- 残差连接

---

### 行多头注意力机制

MSA row-wise gated self-attention with pair bias. Dimensions: s: sequences, r:
residues, c: channels, h: heads.

![](https://cdn.jsdelivr.net/gh/open17/Pic/img/202404231333311.png)

---

### 行多头注意力机制

![](https://cdn.jsdelivr.net/gh/open17/Pic/img/202404231337467.png)

---


### 列多头注意力机制  

![](https://cdn.jsdelivr.net/gh/open17/Pic/img/202404231338538.png)

基本与行一样

两个模块分开建模而不是一起,复杂度较低

---


### MLP

在transformer,自注意机制主要是混合不同元素之间的信息

而mlp才是真正信息的提炼    

![](https://cdn.jsdelivr.net/gh/open17/Pic/img/202404231338148.png)

对每个元素通过全连接层投影到原来4倍的大小,再通过Relu激活层投影回原始大小  

全连接层的权重对每个元素共享

---


### Out product mean

两个矩阵转为一个向量

![](https://cdn.jsdelivr.net/gh/open17/Pic/img/202404231338708.png)

- 全连接层投影到c维
- 做外积转为scc的张量
- 取均值转为(c,c), 拉直投影为$c_m$  

---  


### Pair信息的自注意力

![](https://cdn.jsdelivr.net/gh/open17/Pic/img/202404231340884.png)
![](https://cdn.jsdelivr.net/gh/open17/Pic/img/202404231340411.png)


---

### 对信息的自注意力

![](https://cdn.jsdelivr.net/gh/open17/Pic/img/202404231339042.png)