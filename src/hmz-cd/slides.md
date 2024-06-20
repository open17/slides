---
theme: apple-basic
title: 差分约束
layout: intro
transition: slide-left
---
<div class="absolute top-10">
  <span class="font-700">
    2025.6.20 By 皇明朕
  </span>
</div>

<div class="absolute bottom-60">
  <p class="text-7xl">差分约束</p>
  <br>
</div>

<div class="w-60 absolute bottom-0 left-0 scale-50" v-click>
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

<Toc minDepth="1" maxDepth="1"></Toc>

---

# 差分约束

> 什么是差分约束？ 差分约束可以用来做什么

差分约束(Differencr Constrain)是对一组不等式求解的问题。给定包含 n 个变量的，m 个不等式构成的不等式组：

$x_1 - x_2 \leq w_1$<br>
$x_2 - x_3 \leq w_2$<br>
$......$<br>
$x_{n-1} - x_n \leq w_n$<br>

差分约束可以用来<b>寻找满足该不等式组的可行解</b>

---

乍一看好像这个差分约束好像很难和我们要讲的图论联系在一起，但只要稍作变形我们就能看出端倪，我们把上面不等式组的一个变量移到右边，使其变成形如 $x_j \leq x_i + w$的形式

$x_1 \leq x_2 + w_1$<br>
$x_2 \leq x_3 + w_2$<br>
$......$<br>
$x_{n-1} \leq x_n + w_n$<br>


回想我们在最短路算法中的松弛操作：
- 如果 $d[j] > d[i] + w_{ij}$，则更新 $ d[j] = d[i] + w_{ij} $
- 如果 $d[j] > d[i] + w_{ij}$，则无需更新

那么现在就可以将不等式组与图联系起来了，我们对每一个不等式都进行一个连边的操作，$ x_i \leq x_j + w$在图中即为节点 $j$ 到节点 $i$ 有一条权重为 $w$ 的边。<br>

对于一个不等式组来说，有 $n$ 个变量，则对应图中有 $n$ 个节点，$m$ 个不等式，则对应图中有 $m$ 条边，不等式中的常数即为边的权值。

---

![Example](https://cdn.jsdelivr.net/gh/open17/Pic/img/202406201402493.png)

---

现在我们已经建好图了，为了找到一组解集，我们需要在该图上跑一遍最短路算法，不妨假设 $1$ 号点为源点，最短路如图所示：

![1号点为源点](https://cdn.jsdelivr.net/gh/open17/Pic/img/202406201402912.png)

可以看到每个点到源点的最短距离，$d[1], d[2]... d[5]$，即为该不等式组的一组解集。

---

以$3$号点为源点的最短路如下：

![3号点为源点](https://cdn.jsdelivr.net/gh/open17/Pic/img/202406201401494.png)

注意，我们并不能选则任意一个节点作为源点，从图中可以发现以 $5$ 号节点为源点构建的最短路是不存在的，因此不能用其来寻找解集。

---


为了方便起见，我们通常创造一个虚拟源点 $0$ 号节点，将其与其他 $n$ 个节点建立一条权值为 $0$ 的边用来构建图
![0号点为源点](https://cdn.jsdelivr.net/gh/open17/Pic/img/202406201403565.png)

---

结论：求 $x_i$ 的最大值，转化为求最短路问题；求 $x_i$ 的最小值，转化为求最长路问题

---

# 【模板】差分约束

<br>

## 题目描述

给出一组包含 $m$ 个不等式，有 $n$ 个未知数的形如：

$$ \begin{cases} x_{c_1}-x_{c'_1}\leq y_1 \\x_{c_2}-x_{c'_2} \leq y_2 \\ \cdots\\ x_{c_m} - x_{c'_m}\leq y_m\end{cases}$$

的不等式组，求任意一组满足这个不等式组的解。

## 输入格式

第一行为两个正整数 $n,m$，代表未知数的数量和不等式的数量。

接下来 $m$ 行，每行包含三个整数 $c,c',y$，代表一个不等式 $x_c-x_{c'}\leq y$。

---

## 输出格式

一行，$n$ 个数，表示 $x_1 , x_2 \cdots x_n$ 的一组可行解，如果有多组解，请输出任意一组，无解请输出 `NO`。

## 样例 #1

### 样例输入 #1

```
3 3
1 2 3
2 3 -2
1 3 1
```

### 样例输出 #1

```
5 3 5
```

---

# [SCOI2011] 糖果

<br>

## 题目描述

幼儿园里有 $N$ 个小朋友，$\text{lxhgww}$ 老师现在想要给这些小朋友们分配糖果，要求每个小朋友都要分到糖果。但是小朋友们也有嫉妒心，总是会提出一些要求，比如小明不希望小红分到的糖果比他的多，于是在分配糖果的时候，$\text{lxhgww}$ 需要满足小朋友们的 $K$ 个要求。幼儿园的糖果总是有限的，$\text{lxhgww}$ 想知道他至少需要准备多少个糖果，才能使得每个小朋友都能够分到糖果，并且满足小朋友们所有的要求。

---

## 输入格式

输入的第一行是两个整数 $N$，$K$。接下来 $K$ 行，表示这些点需要满足的关系，每行 $3$ 个数字，$X$，$A$，$B$。

+ 如果 $X=1$， 表示第 $A$ 个小朋友分到的糖果必须和第 $B$ 个小朋友分到的糖果一样多；
+ 如果 $X=2$， 表示第 $A$ 个小朋友分到的糖果必须少于第 $B$ 个小朋友分到的糖果；
+ 如果 $X=3$， 表示第 $A$ 个小朋友分到的糖果必须不少于第 $B$ 个小朋友分到的糖果；
+ 如果 $X=4$， 表示第 $A$ 个小朋友分到的糖果必须多于第 $B$ 个小朋友分到的糖果；
+ 如果 $X=5$， 表示第 $A$ 个小朋友分到的糖果必须不多于第 $B$ 个小朋友分到的糖果；

## 输出格式

输出一行，表示 $\text{lxhgww}$ 老师至少需要准备的糖果数，如果不能满足小朋友们的所有要求，就输出 $-1$。

---

## 样例 #1

### 样例输入 #1

```
5 7
1 1 2
2 3 2
4 4 1
3 4 5
5 4 5
2 3 5
4 5 1
```

### 样例输出 #1

```
11
```

## 提示

对于 $30\%$ 的数据，保证 $N\leq100$

对于 $100\%$ 的数据，保证 $N\leq100000$

对于所有的数据，保证 $K\leq100000, 1\leq X\leq5, 1\leq A, B\leq N$

$\text{upd 2022.7.6}$：新添加 $21$ 组 [Hack 数据](https://www.luogu.com.cn/discuss/454051)。