---
layout: doc
---
# 字符串操作

## 驼峰命名转换普通字符串命名

- 描述

驼峰命名转换为横杆/下划线命名， ``getElementById => get-element-by-id/get_element_by_id``

- Type

```ts
  type getCustomKebabCase = ( str: string, separator?:string ) => string
```

- 参数说明

1. `str`需要转换的字符串
2. `separator` 自定义分隔符，默认`-`

- 示例

```js
import { getCustomKebabCase } from "quick-utils-js";

const str = 'getElementById';

const result1 = getCustomKebabCase ( str );

const result2 = getCustomKebabCase ( str, '_' );

console.log ( result1 ); // get-element-by-id

console.log ( result2 ); // get_element_by_id
```

## 普通字符串命名转驼峰命名

- 描述

横杆/下划线命名转换为驼峰命名， ``get-element-by-id/get_element_by_id => getElementById``

- Type

```ts
  type getCustomCamelCase = ( str: string, separator?:string ) => string
```

- 参数说明

1. `str`需要转换的字符串
2. `separator` 自定义分隔符，默认`-`

- 示例

```ts

import { getCustomCamelCase } from "quick-utils-js";

const str = 'get-element-by-id';

const str2 = 'get_element_by_id';

const result1 = getCustomCamelCase ( str );

const result2 = getCustomCamelCase ( str2, '_' );

console.log ( result1 ); // getElementById

console.log ( result2 ); // getElementById
```

## 去除字符串中的空格

- 描述

去除字符串中的空格，支持只去除首尾的空格

- Type

```ts
  type replaceWhiteSpace = ( str: string, trim?: boolean ) => string
```

- 参数说明

1. `str`需要操作的字符串
   2. `trim` 是否只去除首尾空格，默认`false`

- 示例

```ts

import { replaceWhiteSpace } from "quick-utils-js";

replaceWhiteSpace ('1 2 3 ') // '123'
replaceWhiteSpace (' 1 2 3 ', true) // '1 2 3'

```
