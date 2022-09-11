---
layout: doc
---
# DOM操作

## 获取滚动距离

- 描述

获取浏览器滚动条的`scrollTop`

- Type

```ts

 type getScrollTop = () => number

```

- 参数说明

无

- 示例
```ts
import {  getScrollTop  } from "quick-utils-js";

console.log( getScrollTop () ); // scroll top 2419

```


## 设置滚动条位置

- 描述

设置滚动条距顶部的距离

- Type

```ts

 type setScrollTop =  ( value:number ) => void

```

- 参数说明

1. `value` 滚动条的目标位置

- 示例
```ts
import {  setScrollTop } from "quick-utils-js";

setScrollTop ( 200 );

```

## 设置滚动条位置（过渡时间）

- 描述

设置滚动条距顶部的距离，可设置过渡时间

- Type

```ts

 type scrollTo = ( to: number, durationVal?: number ) => void;

```

- 参数说明

1. `to` 滚动条的目标位置
2. `durationVal` 过渡时长(s)，默认 `60`

- 示例
```ts
import {  scrollTo } from "quick-utils-js";

setScrollTop ( 500, 200 );

```

### 滚动到顶部

- 描述

滚动条回到顶部

- Type

```ts

 type setScrollTop = ( value?:number ) => void

```

- 参数说明

1. `value` 过渡时长（s）， 默认`100`

- 示例

```ts
import {  setScrollTop } from "quick-utils-js";

setScrollTop ();

```
## 滚动到底部

- 描述

滚动条回到底部

- Type

```ts

 type scrollToBottom = ( element?: Element ) => void;

```

- 参数说明

1. `element` 触发的父容器, 默认 `document.body`

- 示例

```ts
import {  scrollToBottom } from "quick-utils-js";

scrollToBottom ();

```