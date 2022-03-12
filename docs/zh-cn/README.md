# 介绍

该工具为我们提供了前端项目业务中快速常用的工具方法函数，工具库的代码大部分来自网络和社区，并使用了部分
[outils](https://github.com/proYang/outils) 源码，项目中全部使用`typescript`开发。目前工具库中提供了`array`、`blob`、`cookie`、`date`、
`device`、`dom`、`number`、`object`、`random`、`regex`、`string`相关的操作方法和部分工具方法。目前工具库中部分工具函数还不是很多，后续会慢慢增加，
此外,这个工具库和 [lodash](https://lodash.com/) 的区别是：此工具中的工具函数都是从项目业务中抽离出来的工具方法（业务方向工具函数），并不是纯工具方法。也欢迎大家提出建议优化，或直接提`pr`,有任何问题，可在[issue](https://github.com/zguiyang/quick-utils-js/issues) 中提问。

# 兼容性

 ## 浏览器

不支持 IE 浏览器。

`Edge`、`Firefox`、`Chrome`、`Safari` 等现代浏览器的最新的 2 个版本确保会被支持。
对于这些浏览器的其他版本中，由于开发资源的限制并没有做过严格的测试。但是预期`quick-utils-js`应该在这些浏览器不算太老的版本上能正常的运行
（比如 2 年之内的版本）。如果你发现了任何问题欢迎来提 [issue](https://github.com/zguiyang/quick-utils-js/issues) 

## typescript

需要版本 > 3.9.10

# 快速开始

## 安装

`npm i quick-utils-js ` or `yarn add quick-utils-js`

## 使用

```js
import { generateUUID } from "quick-utils-js";

console.log ( generateUUID () );

```