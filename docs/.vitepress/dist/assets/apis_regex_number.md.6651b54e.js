import{_ as s,c as a,o as n,a as l}from"./app.01f20e4e.js";const i=JSON.parse('{"title":"\u6570\u5B57\u6B63\u5219","description":"","frontmatter":{"layout":"doc"},"headers":[{"level":2,"title":"\u5927\u6570\u6B63\u5219\u6821\u9A8C\uFF08\u5E94\u5BF9\u7279\u6B8A\u573A\u666F\uFF09","slug":"\u5927\u6570\u6B63\u5219\u6821\u9A8C\uFF08\u5E94\u5BF9\u7279\u6B8A\u573A\u666F\uFF09","link":"#\u5927\u6570\u6B63\u5219\u6821\u9A8C\uFF08\u5E94\u5BF9\u7279\u6B8A\u573A\u666F\uFF09","children":[]},{"level":2,"title":"\u6574\u6570\u6B63\u5219\u6821\u9A8C","slug":"\u6574\u6570\u6B63\u5219\u6821\u9A8C","link":"#\u6574\u6570\u6B63\u5219\u6821\u9A8C","children":[]},{"level":2,"title":"\u5C0F\u6570\u6B63\u5219\u6821\u9A8C\uFF08\u5BBD\u677E\uFF09","slug":"\u5C0F\u6570\u6B63\u5219\u6821\u9A8C\uFF08\u5BBD\u677E\uFF09","link":"#\u5C0F\u6570\u6B63\u5219\u6821\u9A8C\uFF08\u5BBD\u677E\uFF09","children":[]},{"level":2,"title":"\u5C0F\u6570\u6B63\u5219\u6821\u9A8C\uFF08\u4E25\u683C\uFF09","slug":"\u5C0F\u6570\u6B63\u5219\u6821\u9A8C\uFF08\u4E25\u683C\uFF09","link":"#\u5C0F\u6570\u6B63\u5219\u6821\u9A8C\uFF08\u4E25\u683C\uFF09","children":[]}],"relativePath":"apis/regex/number.md","lastUpdated":1662946415000}'),p={name:"apis/regex/number.md"},o=l(`<h1 id="\u6570\u5B57\u6B63\u5219" tabindex="-1">\u6570\u5B57\u6B63\u5219 <a class="header-anchor" href="#\u6570\u5B57\u6B63\u5219" aria-hidden="true">#</a></h1><h2 id="\u5927\u6570\u6B63\u5219\u6821\u9A8C\uFF08\u5E94\u5BF9\u7279\u6B8A\u573A\u666F\uFF09" tabindex="-1">\u5927\u6570\u6B63\u5219\u6821\u9A8C\uFF08\u5E94\u5BF9\u7279\u6B8A\u573A\u666F\uFF09 <a class="header-anchor" href="#\u5927\u6570\u6B63\u5219\u6821\u9A8C\uFF08\u5E94\u5BF9\u7279\u6B8A\u573A\u666F\uFF09" aria-hidden="true">#</a></h2><ul><li>\u63CF\u8FF0</li></ul><p>\u9488\u5BF9\u5927\u6570\u8F93\u5165\u65F6\u7684\u6B63\u5219\u6821\u9A8C\uFF0C\u6574\u6570\u5927\u4E8E<code>0</code>\uFF0C\u5C0F\u6570\u70B9\u6700\u9AD8\u53EF\u8FBE<code>8</code>\u4F4D, <code>19.8n</code>\u7CBE\u5EA6</p><ul><li>Type</li></ul><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">largeNumberReg</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">str</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span></span>
<span class="line"></span></code></pre></div><ul><li>\u53C2\u6570\u8BF4\u660E</li></ul><ol><li><code>str</code>\u9700\u8981\u6821\u9A8C\u7684\u5B57\u7B26\u4E32</li></ol><ul><li>\u793A\u4F8B</li></ul><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">largeNumberReg</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">quick-utils-js</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">largeNumberReg</span><span style="color:#A6ACCD;"> ( </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">11.11</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> ) </span><span style="color:#676E95;">// true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">largeNumberReg</span><span style="color:#A6ACCD;"> ( </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">111.88888888</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> ) </span><span style="color:#676E95;">// true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">largeNumberReg</span><span style="color:#A6ACCD;"> ( </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">1999999999999999999.88888888</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> ) </span><span style="color:#676E95;">// true</span></span>
<span class="line"></span></code></pre></div><h2 id="\u6574\u6570\u6B63\u5219\u6821\u9A8C" tabindex="-1">\u6574\u6570\u6B63\u5219\u6821\u9A8C <a class="header-anchor" href="#\u6574\u6570\u6B63\u5219\u6821\u9A8C" aria-hidden="true">#</a></h2><ul><li>\u63CF\u8FF0</li></ul><p>\u6821\u9A8C\u662F\u5426\u4E3A\u6574\u6570\uFF0C\u652F\u6301\u8D1F\u6570</p><ul><li>Type</li></ul><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">integerReg</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">str</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">minus</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span></span>
<span class="line"></span></code></pre></div><ul><li>\u53C2\u6570\u8BF4\u660E</li></ul><ol><li><code>str</code>\u9700\u8981\u6821\u9A8C\u7684\u5B57\u7B26\u4E32</li><li><code>minus</code> \u517C\u5BB9\u6821\u9A8C\u8D1F\u6570\uFF0C \u9ED8\u8BA4 <code>false</code></li></ol><ul><li>\u793A\u4F8B</li></ul><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">integerReg</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">quick-utils-js</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">integerReg</span><span style="color:#A6ACCD;"> ( </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">01</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> ) </span><span style="color:#676E95;">// false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">integerReg</span><span style="color:#A6ACCD;"> ( </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> ) </span><span style="color:#676E95;">// true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">integerReg</span><span style="color:#A6ACCD;"> ( </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">10.00</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> ) </span><span style="color:#676E95;">// false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">integerReg</span><span style="color:#A6ACCD;"> ( </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">101</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> ) </span><span style="color:#676E95;">// true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">integerReg</span><span style="color:#A6ACCD;"> ( </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">-102</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#A6ACCD;"> ) </span><span style="color:#676E95;">// true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">integerReg</span><span style="color:#A6ACCD;"> ( </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">102</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#A6ACCD;"> ) </span><span style="color:#676E95;">// true</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h2 id="\u5C0F\u6570\u6B63\u5219\u6821\u9A8C\uFF08\u5BBD\u677E\uFF09" tabindex="-1">\u5C0F\u6570\u6B63\u5219\u6821\u9A8C\uFF08\u5BBD\u677E\uFF09 <a class="header-anchor" href="#\u5C0F\u6570\u6B63\u5219\u6821\u9A8C\uFF08\u5BBD\u677E\uFF09" aria-hidden="true">#</a></h2><ul><li>\u63CF\u8FF0</li></ul><p>\u6821\u9A8C\u5C0F\u6570\u683C\u5F0F\uFF0C\u652F\u6301\u8D1F\u6570\uFF0C\u53EA\u8981\u662F <a href="http://xxx.xxx" target="_blank" rel="noreferrer">xxx.xxx</a>\u3001-xxx.xxx \u683C\u5F0F\u5747\u53EF\u901A\u8FC7</p><ul><li>Type</li></ul><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">looseDecimalsReg</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">str</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">decimalsMax</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span></span>
<span class="line"></span></code></pre></div><ul><li>\u53C2\u6570\u8BF4\u660E</li></ul><ol><li><code>str</code>\u9700\u8981\u6821\u9A8C\u7684\u5B57\u7B26\u4E32</li><li><code>decimalsMax</code> \u6700\u5927\u5C0F\u6570\u4F4D\uFF0C\u9ED8\u8BA4 <code>2</code></li></ol><ul><li>\u793A\u4F8B</li></ul><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">looseDecimalsReg</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">quick-utils-js</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">looseDecimalsReg</span><span style="color:#A6ACCD;"> ( </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">1.00</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> ) </span><span style="color:#676E95;">// true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">looseDecimalsReg</span><span style="color:#A6ACCD;"> ( </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">01.00</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> ) </span><span style="color:#676E95;">// false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">looseDecimalsReg</span><span style="color:#A6ACCD;"> ( </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">101.211</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;"> ) </span><span style="color:#676E95;">// true</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h2 id="\u5C0F\u6570\u6B63\u5219\u6821\u9A8C\uFF08\u4E25\u683C\uFF09" tabindex="-1">\u5C0F\u6570\u6B63\u5219\u6821\u9A8C\uFF08\u4E25\u683C\uFF09 <a class="header-anchor" href="#\u5C0F\u6570\u6B63\u5219\u6821\u9A8C\uFF08\u4E25\u683C\uFF09" aria-hidden="true">#</a></h2><ul><li><p>\u63CF\u8FF0</p><p>\u6821\u9A8C\u5C0F\u6570\u683C\u5F0F\uFF0C\u652F\u6301\u8D1F\u6570\uFF0C<code>01.xxx</code> <code>00.xxx</code> \u4E0D\u53EF\u901A\u8FC7</p></li><li><p>Type</p></li></ul><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">strictDecimalsReg</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">str</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">options</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">decimalsMax</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">minus</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span></span>
<span class="line"></span></code></pre></div><ul><li>\u53C2\u6570\u8BF4\u660E</li></ul><ol><li><code>str</code>\u9700\u8981\u6821\u9A8C\u7684\u5B57\u7B26\u4E32</li><li><code>options.decimalsMax</code> \u6700\u5927\u5C0F\u6570\u4F4D\uFF0C\u9ED8\u8BA4 <code>2</code> 3<code>options.minus</code> \u662F\u5426\u517C\u5BB9\u8D1F\u6570\u6821\u9A8C, \u9ED8\u8BA4<code>false</code></li></ol><ul><li>\u793A\u4F8B</li></ul><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">strictDecimalsReg</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">quick-utils-js</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">strictDecimalsReg</span><span style="color:#A6ACCD;"> ( </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">01.00</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> ) </span><span style="color:#676E95;">// false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">strictDecimalsReg</span><span style="color:#A6ACCD;"> ( </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">00.00</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> ) </span><span style="color:#676E95;">// false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">strictDecimalsReg</span><span style="color:#A6ACCD;"> ( </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">100.00</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> ) </span><span style="color:#676E95;">// true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">strictDecimalsReg</span><span style="color:#A6ACCD;"> ( </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">0.001</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">decimalsMax</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> ) </span><span style="color:#676E95;">// true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">strictDecimalsReg</span><span style="color:#A6ACCD;"> ( </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">-0.001</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">decimalsMax</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">minus</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> ) </span><span style="color:#676E95;">// true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">strictDecimalsReg</span><span style="color:#A6ACCD;"> ( </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">10.001</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">decimalsMax</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">minus</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> ) </span><span style="color:#676E95;">// true</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div>`,35),e=[o];function c(t,r,D,y,F,C){return n(),a("div",null,e)}const d=s(p,[["render",c]]);export{i as __pageData,d as default};
