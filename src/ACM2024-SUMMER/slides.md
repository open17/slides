---
theme: apple-basic
title: 集训-前缀和与差分题解
layout: intro
transition: slide-left
---

<div class="absolute top-10">
  <span class="font-700">
    ACM 6.18
  </span>
</div>

<div class="absolute bottom-50">
  <h1>前缀和与差分</h1>
  <br>
  <p>暑假集训16-18节题解</p>
</div>


---
layout: section
---

# Section16 前缀和

---

## 4001-有趣的预算

> 虽然是第一题,但却是16节最难的题目,不会没关系,主要考的其实是滑窗(大家应该还没学)

维护前缀和,然后滑窗,时间复杂度$O(n)$,其实这里的前缀和不是必要的,可以换为等差数列求和

```cpp
void hhhh()
{
    int m=read();
    int a[m+1];
    memset(a,0,sizeof(a));
    For(i,0,m){
        a[i+1]=a[i]+i+1;
    }
    int l=0,r=1;
    while(l<m&&r<m){
        while (a[r]-a[l]<m&&r<m)
        {
            r++;
        }
        if(a[r]-a[l]==m){
            print(l+1,r);
        }
        l++;
    }
}
```

---

## 4002-游客流量统计

一维前缀和板子题

```cpp
void hhhh()
{
    int n = read();
    int a[n + 1];
    a[0] = 0;
    For(i, 1, n + 1)
    {
        a[i] = read();
        a[i] += a[i - 1];
    }
    int m = read();
    For(i, 0, m)
    {
        int l = read(), r = read();
        print(a[r] - a[l - 1]);
    }
}
```

---
transition: slide-up
---

## 4003-商业中心

二维前缀和,然后暴力枚举矩形即可

```cpp
const int N = 150;
int a[N][N];

int get(int x1, int y1, int x2, int y2)
{
    return a[x2][y2] - a[x1 - 1][y2] - a[x2][y1 - 1] + a[x1 - 1][y1 - 1];
};

int n = read();
memset(a, 0, sizeof(a));

For(i, 1, n + 1)
{
    For(j, 1, n + 1)
    {
        a[i][j] = read();
        a[i][j] += a[i - 1][j] + a[i][j - 1] - a[i - 1][j - 1];
    }
}
```
---

## 4003-商业中心

接上面

```cpp
int ans = -1;
For(i, 1, n + 1)
{
    For(j, 1, n + 1)
    {
        For(k, 0, n + 1)
        {
            if (i + k > n)break;
            For(m, 0, n + 1)
            {
                if (j + m > n)break;
                int s = get(i, j, i + k, j + m);
                ans = max(ans, s);
            }
        }
    }
}
print(ans);
```
---

## 4004-求和

按题意模拟,求和部分用前缀和优化

```cpp
void hhhh()
{
    int n = read();
    int a[n+1];
    int b[n + 1];
    b[0] = 0;
    For(i, 0, n)
    {
        a[i+1] = read();
        b[i + 1] = a[i+1] + b[i];
    }
    int s=0;
    For(i,1,n){
        s+=a[i]*(b[n]-b[i]);
    }
    print(s);
}
```

---
layout: section
---

# Section17 差分

---


## 4005-积分系统

差分板子题

```cpp
int n = read(), p = read();
int a[n + 5];
int lst = 0;
For(i, 0, n)
{
    int tmp = read();
    a[i] = tmp - lst;
    lst = tmp;
}
For(i, 0, p)
{
    int x = read(), y = read(), z = read();
    a[x - 1] += z;
    a[y] -= z;
}
int ans = a[0];
For(i, 1, n)
{
    a[i] += a[i - 1];
    ans = min(ans, a[i]);
}
print(ans);
```
---
transition: slide-up
---

## 4006-遮阳伞

二维差分,公式可以用容斥推一下

```cpp
const int N = 1005;
const int MOD = 1e9 + 7;
int T = 1;

int a[N][N];

void update(int x1,int y1,int x2,int y2,int v){
    x2++;
    y2++;
    a[x1][y1]+=v;
    a[x2][y1]-=v;
    a[x1][y2]-=v;
    a[x2][y2]+=v;
    
}
```

---

```cpp
void hhhh()
{
    int n=read(),m=read();
    For(i,0,m){
        int x1=read(),y1=read(),x2=read(),y2=read();
        update(x1,y1,x2,y2,1);
    }
    For(i, 1, n + 1)
    {
        For(j, 1, n + 1)
        {
            a[i][j] += a[i - 1][j] + a[i][j - 1] - a[i - 1][j - 1];
            cout<<a[i][j]<<' ';
        }
        cout<<endl;
    }

}
```

---

## 4007-滨海公路

OJ上的题面和输入输出不是一道题

数据看上去也很有问题,所以略

![展示](https://cdn.jsdelivr.net/gh/open17/Pic/img/202406180239341.png)

---
transition: slide-up
---

## 4008-火烧赤壁

题意可能有点模糊(至少我看了半天), 其实是区间合并问题,然后算一下合并完的区间长度的和

大致思路:对于一个区间都+1,然后最后为非0的就是一段段区间,因为值域范围大要先离散化(有点超纲),还有注意是左闭右开,下标别搞错了

当然区间合并其实可以直接排序分类讨论(不用差分的做法)

```cpp
int n = read();
vector<int> s;
pii arr[n];
For(i, 0, n)
{
    int a = read(), b = read();
    s.push_back(a);
    s.push_back(b);
    arr[i] = {a, b};
}
sort(s.begin(), s.end());
s.erase(unique(s.begin(), s.end()), s.end());
auto get = [&s](int v) -> int
{
    return lower_bound(s.begin(), s.end(), v) - s.begin();
};
```
---

```cpp
int m = s.size();
int brr[m + 5];
memset(brr, 0, sizeof(brr));
For(i, 0, n)
{
    brr[get(arr[i].first)]++;
    brr[get(arr[i].second)]--;
}
int ans = 0, st = -1;
For(i, 1, m)
{
    brr[i] += brr[i - 1];
}
For(i, 0, m)
{
    if (brr[i] != 0 && st == -1)
    {
        st = i;
    }
    if (brr[i] == 0 && st != -1)
    {
        ans += s[i] - s[st];
        st = -1;
    }
}
print(ans);
```

---

## 4009-平衡划分

前缀和预处理后,设$b$为前缀和数组,注意到$a_i$的取值范围为$[1,10^9]$,若数组满足题目条件则割点必然唯一,且第一个割点满足约束$3*b_i=b_n$,

那么直接枚举两个割点位置,并利用约束减枝搜索,实际复杂度为$O(n)$

```cpp
int n = read();
int a[n + 1];
a[0] = 0;
int flag = 0;
For(i, 1, n + 1) a[i] = a[i - 1] + read();
For(i, 1, n + 1)
{
    if (3 * a[i] != a[n])continue;
    int p = a[i];
    For(j, i + 1, n + 1)
    {
        if (a[j] - p == a[n] - a[j])
        {
            flag = 1;
            break;
        }
    }
}
```

---

## 4009-平衡划分

如果我们更改一下题目,使$a_i$的取值范围可以为负数

这个时候前面的做法会退化到$O(n^2)$,不能AC这道题

思考在这个情况下如何AC呢? 

或许你学完后几天的知识再回头看这道题就能想到了

---
layout: section
---

# Section18 综合练习

---

## 4012-炖大鹅


维护一个前缀和数组表示前$i$个数组需要多少桌,然后查询的时候O(1)查询


```cpp
void hhhh()
{
    int n=read(),q=read();
    int a[n];
    memset(a,0,sizeof(a));
    a[0]=1;
    int lst=read();
    For(i,1,n){
        int tmp=read();
        if(tmp==lst)a[i]=a[i-1];
        else{
            lst=tmp;
            a[i]=a[i-1]+1;
        }
    }
    For(i,0,q){
        int l=read(),r=read();
        print(a[r-1]-a[l-1]+1);
    }
}
```

--- 


## 4012-炖大鹅

如果把题目换成询问[l,r]之间有多少个不同的数呢?

或许也是学完后几天的知识再回头看这道题就能想到了XD


---


## 4010-高峰时期

二分答案+前缀和,小超纲

## 4011-城市轻轨

题面描述略模糊,样例没解释

## 4013-领地选择

和前面讲过的[4003-商业中心](https://mna.wang/problem/4003)没区别

二维前缀和处理后,把前面的枚举矩形长宽改成枚举正方形边长即可

## 4014-A % B Problem

不知道为什么在OJ上消失了,不过好像是洛谷的原题,感兴趣的可以看[这里](https://www.luogu.com.cn/problem/P1865)

打表/欧拉筛,然后再求个前缀和预处理查询

---

## 更多练习

如果你学有余力的话,你可以尝试做做下面这些题

- [K倍区间](https://www.luogu.com.cn/problem/P8649)
- [IncDec Sequence](https://www.luogu.com.cn/problem/P4552)
- [Tallest Cow S](https://www.luogu.com.cn/problem/P2879)
- [幸运数字](https://www.luogu.com.cn/problem/P6627)