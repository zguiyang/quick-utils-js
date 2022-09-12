---
layout: doc
---
# 辅助工具方法

## 判断数字

- 示例
```ts
import {  isNumber } from "quick-utils-js";

console.log( isNumber ( '777') ) // false 

console.log( isNumber ( 7 ) ) // true
```

## 判断字符串

- 示例
```ts
import {  isString } from "quick-utils-js";

console.log( isString ( '777') ) // true 

console.log( isString ( 7 ) ) // false
```

## 判断布尔值

- 示例
```ts
import {  isBoolean } from "quick-utils-js";

console.log( isBoolean ( !'' ) ) // true 

console.log( isBoolean ( 3 > 5 ) ) // true
```

## 判断数组

- 示例
```ts
import { isArray } from "quick-utils-js";

console.log( isArray ( [] ) ) // true 

console.log( isArray ( {} ) ) // false
```

## 判断对象

- 示例
```ts
import {  isObject } from "quick-utils-js";

console.log( isObject ( [] ) ) // false 

console.log( isObject ( {} ) ) // true
```

## 判断是否空数组

- 示例
```ts
import {  isEmptyArray } from "quick-utils-js";

console.log( isEmptyArray ( [] ) ) // true 

console.log( isEmptyArray ( [ 1 ] ) ) // false
```
## 判断是否空对象

- 示例
```ts
import { isEmptyObject } from "quick-utils-js";

console.log('isEmptyObject', isEmptyObject ( {} ) ) // true 

console.log('isEmptyObject', isEmptyObject ( { a: 1 } ) ) // false
```

## 获取任意数据类型

- 描述

获取任意数据类型

- 示例
```ts
import { getValueType } from "quick-utils-js";

console.log( getValueType ( {} ) ) // 'object'

console.log( getValueType ( false ) ) // 'boolean'

console.log( getValueType ( null ) ) // 'null'
// ...
```
