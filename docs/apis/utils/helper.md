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

## 判断是否Null

- 示例
```ts
import { isNull } from "quick-utils-js";

isNull( null ) // true
```

## 判断是否Date

- 示例
```ts
import { isDate } from "quick-utils-js";

isDate(  '1998-01-02'  ) // false
isDate( new Date () ) // true
isDate( new Date('1998-01-02') ) // true
```


## 判断是否是Promise

- 描述

判断是否是`Promise`

- 示例
```ts
import { isPromise } from "quick-utils-js";

const a = () => { console.log('test...') };

function b () {

    return Promise.resolve({});
}

const c = new Promise ( resolve => {} );

isPromise ( a ) // false

isPromise( b () ) // true

isPromise( c ) // true

// ...
```

## 判断是否是Async函数

- 描述

判断是否是`async`函数`async function`

- 示例
```ts
import { isAsyncFunction } from "quick-utils-js";

console.log( isAsyncFunction ( () => {} ) ) // false

console.log( isAsyncFunction ( () => { return new Promise(resolve => resolve({}) )} ) ) // false

console.log( isAsyncFunction ( async () => { return Promise.resolve( { } ) } ) ) // true
// ...
```

## 判断是否是普通函数

- 描述

判断是否是普通函数

- 示例
```ts
import { isPlainFunction } from "quick-utils-js";

console.log( isPlainFunction ( () => {} ) ) // true

console.log( isPlainFunction ( () => { return new Promise(resolve => resolve({}) )} ) ) // true

console.log( isPlainFunction ( async () => { return Promise.resolve( { } ) } ) ) // false
// ...
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
