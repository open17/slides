---
theme: apple-basic
title: 字符串(一)
layout: intro
transition: slide-left
---

<div class="absolute top-10">
  <span class="font-700">
    2025.6.23
  </span>
</div>

<div class="absolute bottom-60">
  <p class="text-6xl">字符串(一)</p>
  <br>
  <!-- <p class="text-4xl">字符串哈希,字典树与最小表示法</p> -->
</div>

<div class="w-60 absolute bottom-0 left-0 scale-50">
  <div class="relative w-40 h-40">
    <img
      v-motion
      :initial="{ x: 800, y: -100, scale: 1.5, rotate: -50 }"
      :enter="final"
      class="absolute inset-0"
      src="https://sli.dev/logo-square.png"
      alt=""
    />
    <img
      v-motion
      :initial="{ y: 500, x: -100, scale: 2 }"
      :enter="final"
      class="absolute inset-0"
      src="https://sli.dev/logo-circle.png"
      alt=""
    />
    <img
      v-motion
      :initial="{ x: 600, y: 400, scale: 2, rotate: 100 }"
      :enter="final"
      class="absolute inset-0"
      src="https://sli.dev/logo-triangle.png"
      alt=""
    />
  </div>
</div>

<script setup lang="ts">
const final = {
  x: 0,
  y: 0,
  rotate: 0,
  scale: 1,
  transition: {
    type: 'spring',
    damping: 10,
    stiffness: 20,
    mass: 2
  }
}
</script>

---
layout: image-right
image: https://cdn.jsdelivr.net/gh/open17/Pic/img/202406192019546.png
---

## 目录

<br>

<Toc minDepth="1" maxDepth="2"></Toc>

---


## 前言

字符串的知识点其实比较多,部分可能讲述起来理解难度也比较大

所以这里先由我来分享一下其中比较基础的部分(大家多多少少都学过的),给大家热热身

难的部分就留给蔡神和钧神等下分享了

本次分享的全部题目同一放在[vjudge-635601](https://vjudge.net/contest/635601),密码123321 


---
layout: section
---

# 字符串哈希

---

## 概念

定义如下字符串Hash函数：

$$f(s) = \sum_{i=1}^{n} s[i] \times b^{n-i}  \pmod M$$

Hash 函数可以将任意长度的字符串映射为正整数,并且冲突概率极低

同时我们可以通过 $O(n)$ 预处理所有前缀的哈希值, 然后 $O(1)$ 的查询任意子串的哈希值

---

## 例题1.兔子与兔子

很久很久以前，森林里住着一群兔子。

有一天，兔子们想要研究自己的 DNA 序列。

我们首先选取一个好长好长的 DNA 序列（小兔子是外星生物，DNA 序列可能包含 $26$ 个小写英文字母）。

然后我们每次选择两个区间，询问如果用两个区间里的 DNA 序列分别生产出来两只兔子，这两个兔子是否一模一样。

注意两个兔子一模一样只可能是他们的 DNA 序列一模一样。

---

**输入格式**

第一行输入一个 DNA 字符串 $S$。

第二行一个数字 $m$，表示 $m$ 次询问。

接下来 $m$ 行，每行四个数字 $l_1, r_1, l_2, r_2$，分别表示此次询问的两个区间，注意字符串的位置从 $1$ 开始编号。

**输出格式**

对于每次询问，输出一行表示结果。

如果两只兔子完全相同输出 `Yes`，否则输出 `No`（注意大小写）。

**提示**

数据保证，$1 \le |S|,m \le 1000000$。其中，$|S|$ 为字符串 $S$ 的长度。

---


板子题,直接字符串哈希即可,参考代码如下:

```cpp  
int query(int l,int r,int MOD){
    return (h[r] - h[l-1] * p[r-l+1] % MOD + MOD) % MOD;
}
void hhhh()
{
    string s;
    cin >> s;
    srand(time(0));
    const int MOD = 998244353 + rand() % 10008;
    const int BASE = 33 + rand() % 234;
    p[0] = 1;
    h[0] = 0;
    For(i, 1, s.size() + 1) { 
        p[i] = (p[i - 1] * BASE) % MOD; 
        h[i]=(h[i-1]*BASE+s[i-1]-'a')%MOD;
    }
    int m=read();
    For(i,0,m){
        int a=read(),b=read(),c=read(),d=read();
        if(query(a,b,MOD)==query(c,d,MOD))print("Yes");
        else print("No");
    }
}
```

---

## 例题2. 连接词

给定n个不含重复且仅由小写字母组成的字符串，请你找出并返回中的所有连接词字符串。

连接词定义为：一个字符串完全由给定的n个字符串中的两个或以上的字符串（可以为同一个字符串）组成

**输入格式**  

第一行输入一个正整数$n$, 表示字符串的个数。

第二行输出$n$个字符串, 用空格隔开

**输出格式**

输出全部的连接词字符串,用空格隔开,无需考虑输出顺序


**数据范围**

- 字符串总长不超过$10^3$
- 字符串均由小写字母组成,且字符串保证唯一

---


**样例输入 #1**

```py
8
cat cats catsdogcats dog dogcatsdog hippopotamuses rat ratcatdogcat
```

**样例输出 #1**

```py
catsdogcats dogcatsdog ratcatdogcat
```

**样例解释 #1**

- "catsdogcats" 由 "cats", "dog" 和 "cats" 组成; 
- "dogcatsdog" 由 "dog", "cats" 和 "dog" 组成; 
- "ratcatdogcat" 由 "rat", "cat", "dog" 和 "cat" 组成。

---

我们需要对每个字符串检查是否为连接词

这个过程可以用dp枚举子串转移, $f_{i,j}=f_{i-1,j}$, 若当前字符串s的子串$[s_i,s_j]$等于其他的字符串, $f_{i,j}|=f_{i-1,i-1}$

这个时候我们的计算瓶颈为如何快速的检测当前字符串s的子串$[s_i,s_j]$是否等于其他的字符串

显然我们可以先对每个字符串进行哈希,然后放到集合中,这样每次求当前字符串s的子串的哈希值是O(1)的,求子串是否存在也是O(1)的

这样字符串哈希优化的DP转移时间复杂度为$O(n^2)$

---

此外字符串哈希与二分等算法相结合可以应用的非常广泛,比如:

- $O(mlogn)$求字符串匹配
- $O(nlogn)$求最长回文子序列
- $O(nlog^2n)$求后缀数组等

不过一般情况下都有更好(时间复杂度上)的字符串算法替代


---
layout: section
---

# 字典树

---
layout: image-right
image: https://pic1.zhimg.com/80/v2-09eb3d3980f61e573d47daf4fa329d14_1440w.webp
---
## 概念

字典树,又名前缀树,主要用于实现字符串的快速检索

> 图源自pecco的算法笔记

例如，water，wish，win，tie，tired这几个单词可以用右图方式存储

字典树会将同样前缀的字符串使用同样的节点

---

## 例题1.病毒检测


科学家们在 Samuel 星球上的探险仍在继续。非常幸运的，在 Samuel 星球的南极附近，探险机器人发现了一个巨大的冰湖！机器人在这个冰湖中搜集到了许多 RNA 片段运回了实验基地。

科学家们经过几个昼夜的研究，发现这些 RNA 片段中有许多是未知的病毒！

每个 RNA 片段都是由 `A`、`C`、`T`、`G` 组成的序列。科学家们也总结出了 Samuel 星球上的“病毒模版片段”。一个模版片段是由 `A`、`C`、`T`、`G` 的序列加上通配符 `*` 和 `?` 来表示。其中 `*` 的意思是可以匹配上 $0$ 个或任意多个字符，而 `?` 的意思是匹配上任意一个字母。

如果一个 RNA 片段能够和“病毒模版片段”相匹配，那么这个 RNA 片段就是未知的病毒。

例如，假设 “病毒模版片段”为 `A*G?C`。RNA 片段：`AGTC`，`AGTGTC` 都是未知的病毒，而 RNA 片段 `AGTGC` 则不是病毒。

由于，机器人搜集的这些 RNA 片段中除去病毒的其他部分都具有非常高的研究价值。所以科学家们希望能够分辨出其中哪些 RNA 片段不是病毒，并将不是病毒的 RNA 片段运回宇宙空间站继续进行研究。

科学家将这项任务交给了小联。现在请你为小联编写程序统计哪些 RNA 片段不是病毒。

---


共 $N+2$ 行输入。

第一行有一个字符串，由 `A`、`C`、`T`、`G`、`*`、`?` 组成，表示“病毒模版片段”。“病毒模版片段”的长度不超过 $1000$。

第二行有一个整数 $N$，表示机器人搜集到的 RNA 片段的数目。

随后的 $N$ 行，每一行有一个字符串，由 `A`、`C`、`T`、`G` 组成，表示一个 RNA 片段。

只有一行输出，为整数 $M$，即不是病毒的 RNA 片段的数目。

输入中的 RNA 片段 `AGTGC` 不是病毒。

对于所有数据，$0 < N < 500$。

特别的：

- 每个 RNA 片段的长度不超过 $500$；
- “病毒模版片段”和 RNA 片段的长度都至少为 $1$。

---

建字典树,DFS暴搜即可

---

## 例题2. 最长异或路径

给定一棵 $n$ 个点的带权树，结点下标从 $1$ 开始到 $n$。寻找树中找两个结点，求最长的异或路径。

异或路径指的是指两个结点之间唯一路径上的所有边权的异或。

**输入格式**

第一行一个整数 $n$，表示点数。

接下来 $n-1$ 行，给出 $u,v,w$ ，分别表示树上的 $u$ 点和 $v$ 点有连边，边的权值是 $w$。

**输出格式**

一行，一个整数表示答案。

**数据范围**

$1\le n \le 100000;0 < u,v \le n;0 \le w < 2^{31}$。

---

01Tire,贪心的走