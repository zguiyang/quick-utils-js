---
layout: doc
---
# 数字操作

## 千分位格式化

- 描述

数字千分位格式化，支持大数及小数

- Type

```ts
  type  numberToThousands = ( num: number | string, unit?: string, options?: { integerLength: number, decimalsLength: number } ) => string | null
```

- 参数说明

1. `num` 需要格式化的数字
2. `unit` 数字单位
3. `options` 其他配置，`options.integerLength` 整数最大位数，`options.decimalsLength` 小数最大位数

- 示例

```js
import { numberToThousands } from "quick-utils-js";

const num = 123456789;

const num2 = 123456789.1234;

const result = numberToThousands ( num );

const result2 = numberToThousands ( num2 );

console.log ( result ); // 123,456,789

console.log ( result2 ); // 123,456,789.1234
```

## 千分位还原

- 描述

``999,999,999 => 999999999``

- Type

```ts
  type thousandsToString = ( str: string, groupSeparator?: string ) => string
```

- 参数说明

1. `str` 需要还原的字符串
2. `groupSeparator` 千分位的分隔符

- 示例

```ts

import { thousandsToString } from "quick-utils-js";

const num = '123,456,789';

const num2 = '123,456,789.1234';

const result = thousandsToString ( num );

const result2 = thousandsToString ( num2 );

console.log ( result ); // '123456789'

console.log ( result2 ); // '123456789.1234'

```

## 数字计算

- 描述

数字计算: 加减乘除, 支持大数计算，并且不会有精度问题

- Type

```ts
type BigNumberCalcType = 'plus' | 'minus' | 'times' | 'div' | 'idev' | 'mod' | 'pow';
// reference https://mikemcl.github.io/bignumber.js/#config

  type numberCalculate = ( a: string | number, b: string | number, calcType: BigNumberCalcType ) => string
```

- 参数说明

1. `a` 需要操作的数字a
2. `b` 需要操作的数字b
3. `calcType`  计算的类型

**注意： 数字最多不能超过32位**

- 示例

```ts
import { numberCalculate } from "quick-utils-js";

const a = numberCalculate ( 0.1, 0.2, 'plus');

const b = numberCalculate ( 100000000, 19999999999, 'plus' );

const c = numberCalculate ( 100000000, 19999999999, 'minus' );

const d = numberCalculate ( 100000000, 19999999999, 'times' );

console.log ( a ); // 0.3
console.log ( b ); // 20099999999
console.log ( c ); // -19899999999
console.log ( d ); // 1999999999900000000

```