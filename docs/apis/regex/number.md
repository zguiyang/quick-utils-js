---
layout: doc
---
# 数字正则

## 大数正则校验（应对特殊场景）

- 描述

针对大数输入时的正则校验，整数大于`0`，小数点最高可达`8`位, `19.8n`精度

- Type

```ts
  type  largeNumberReg = ( str: string ) => boolean
```

- 参数说明

1. `str`需要校验的字符串

- 示例

```js
import { largeNumberReg } from 'quick-utils-js';

largeNumberReg ( '11.11' ) // true

largeNumberReg ( '111.88888888' ) // true

largeNumberReg ( '1999999999999999999.88888888' ) // true
```

## 整数正则校验

- 描述

校验是否为整数，支持负数

- Type

```ts
  type  integerReg = ( str: string, minus?: boolean ) => boolean
```

- 参数说明

1. `str`需要校验的字符串
2. `minus` 兼容校验负数， 默认 `false`

- 示例

```js
import { integerReg } from 'quick-utils-js';

integerReg ( '01' ) // false

integerReg ( '1' ) // true

integerReg ( '10.00' ) // false

integerReg ( '101' ) // true

integerReg ( '-102', true ) // true

integerReg ( '102', true ) // true

```

## 小数正则校验（宽松）

- 描述

校验小数格式，支持负数，只要是 xxx.xxx、-xxx.xxx 格式均可通过

- Type

```ts
  type  looseDecimalsReg = ( str: string, decimalsMax?: number ) => boolean
```

- 参数说明

1. `str`需要校验的字符串
2. `decimalsMax` 最大小数位，默认 `2`

- 示例

```js
import { looseDecimalsReg } from 'quick-utils-js';

looseDecimalsReg ( '1.00' ) // true

looseDecimalsReg ( '01.00' ) // false

looseDecimalsReg ( '101.211', 3 ) // true

```

## 小数正则校验（严格）

- 描述

  校验小数格式，支持负数，`01.xxx` `00.xxx` 不可通过

- Type

```ts
  type  strictDecimalsReg = ( str: string, options?: { decimalsMax?: number, minus?: boolean } ) => boolean
```

- 参数说明

1. `str`需要校验的字符串
2. `options.decimalsMax` 最大小数位，默认 `2`
3`options.minus` 是否兼容负数校验, 默认`false`

- 示例

```js
import { strictDecimalsReg } from 'quick-utils-js';

strictDecimalsReg ( '01.00' ) // false

strictDecimalsReg ( '00.00' ) // false

strictDecimalsReg ( '100.00' ) // true

strictDecimalsReg ( '0.001', { decimalsMax: 3 } ) // true

strictDecimalsReg ( '-0.001', { decimalsMax: 3, minus: true } ) // true

strictDecimalsReg ( '10.001', { decimalsMax: 3, minus: true } ) // true

```