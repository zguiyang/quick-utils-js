---
layout: doc
---
# 字符串正则

## 中文字符校验

- 描述

中文字符校验, 只能有中文，默认最少1个中文字符

- Type

```ts
  type  chineseReg = ( str: string, maxLen?: number ) => boolean
```

- 参数说明

1. `str`需要校验的字符串
2. `maxLen` 允许字符的最大位数，默认 `10`

- 示例

```js
import { chineseReg } from 'quick-utils-js';

chineseReg ( '中文' ) // true

chineseReg ( '中文三', 3 ) // true
```

## 数字字符校验

- 描述

只能输入数字字符

- Type

```ts
  type  numberReg = ( str: string, maxLen?: number ) => boolean
```

- 参数说明

1. `str`需要校验的字符串
2. `maxLen` 允许字符的最大位数，默认 `10`

- 示例

```js
import { numberReg } from 'quick-utils-js';

umberReg ( '123' ) // true

numberReg ( '12345', 5 ) // true

```


## 字母字符校验

- 描述

字母字符, 只要是字母即可，默认最少`1`个，可能用到英文名字校验

- Type

```ts
  type  letterReg = ( str: string, maxLen?: number ) => boolean
```

- 参数说明

1. `str`需要校验的字符串
2. `maxLen` 允许字符的最大位数，默认 `10`

- 示例

```js
import { letterReg } from 'quick-utils-js';

letterReg ( 'zhangsan' ) // true

letterReg ( 'ADSDS' ) // true

letterReg ( 'ADSDSabs' ) // true
```

## 大写字母校验

- 描述

大写字母字符，只要是大写字母即可(只能有大写字母)，最少有`1`

- Type

```ts
  type  upperLetterReg = ( str: string, maxLen?: number ) => boolean
```

- 参数说明

1. `str`需要校验的字符串
2. `maxLen` 允许字符的最大位数，默认 `10`

- 示例

```js
import { upperLetterReg } from 'quick-utils-js';

letterReg ( 'zhangsan' ) // false

letterReg ( 'ADSDSabs' ) // false

letterReg ( 'ADSDS' ) // true

```

## 小写字母校验

- 描述

小写字母字符，只要是小写字母即可(只能有小写字母)

- Type

```ts
  type  lowerLetterReg = ( str: string, maxLen?: number ) => boolean
```

- 参数说明

1. `str`需要校验的字符串
2. `maxLen` 允许字符的最大位数，默认 `10`

- 示例

```js
import { lowerLetterReg } from 'quick-utils-js';

lowerLetterReg ( 'zhangsan' ) // true

lowerLetterReg ( 'ADSDSabs' ) // false

lowerLetterReg ( 'ADSDS' ) // false

```

## 字母+数字字符校验

- 描述

字母+数字字符, 只要是字母和数字即可(只能有大小写字母和数字)

- Type

```ts
  type  letterNumberReg = ( str: string, maxLen?: number ) => boolean
```

- 参数说明

1. `str`需要校验的字符串
2. `maxLen` 允许字符的最大位数，默认 `10`

- 示例

```js
import { letterNumberReg } from 'quick-utils-js';

letterNumberReg ( 'zhangsan' ) // true

letterNumberReg ( '123' ) // true

letterNumberReg ( 'ADSDSabs' ) // ture

letterNumberReg ( 'ADSDSabs123' ) // true

```

## 中文、字母、数字字符校验

- 描述

中文、英文、数字字符, 只要是中文、英文、数字即可

- Type

```ts
  type  letterZhNumberReg = ( str: string, maxLen?: number ) => boolean
```

- 参数说明

1. `str`需要校验的字符串
2. `maxLen` 允许字符的最大位数，默认 `10`

- 示例

```js
import { letterZhNumberReg } from 'quick-utils-js';

letterZhNumberReg ( '中文' ) // true

letterZhNumberReg ( 'ABC' ) // true

letterZhNumberReg ( 'ADSDSabs' ) // ture

letterZhNumberReg ( 'abc' ) // ture

letterZhNumberReg ( '中文ABCaz123' ) // true

```

## 所有格式字符校验

- 描述

所有格式字符，包含空白字符 默认最少1个

- Type

```ts
  type  allStrReg = ( str: string, maxLen?: number ) => boolean
```

- 参数说明

1. `str`需要校验的字符串
2. `maxLen` 允许字符的最大位数，默认 `10`

- 示例

```js
import { allStrReg } from 'quick-utils-js';

allStrReg ( ' ' ) // true

allStrReg ( '@a3a3' ) // true

allStrReg ( '+_' ) // ture

```

## 特殊字符校验

- 描述

特殊字符，包含空白字符 默认最少1个

- Type

```ts
  type  specialStrReg = ( str: string, scope?: string ) => boolean
```

- 参数说明

1. `str`需要校验的字符串
2. `scope` 可指定特殊字符，默认 `!@#$%^&*()_+-=[]{}|;':",./<>?`, 如果是正则表达式符合，就需要添加转义符号，如`\(\)`

- 示例

```js
import { specialStrReg } from 'quick-utils-js';

specialStrReg ( '!@#$%^&*()_+-=[]{}|;:",./<>?' ) // true

specialStrReg ( '!@>', '!@>' ) // true

```

## Base64字符串校验

- 描述

校验是否是`base64`字符串

- Type

```ts
  type  base64Reg = ( str: string )=> boolean
```

- 参数说明

1. `str`需要校验的字符串

- 示例

```js
import { base64Reg } from 'quick-utils-js';

base64Reg ( 'dG9vbHR0LmNvbeWcqOe6v+W3peWFtw==' ) // true

```


## 自定义字符范围校验

- 描述

自定义字符范围校验，可以指定自定义字符范围及长度

- Type

```ts
  type  customStrReg = (  str: string, scope: string, lens?: [ number, number ] ) => boolean
```

- 参数说明

1. `str`需要校验的字符串
2. `scope` 可指定字符范围，如：`0-9A-Za-z`等
3. `lens`限定字符的长度

- 示例

```js
import { customStrReg } from 'quick-utils-js';

customStrReg ( '123', '0-9'  ) // true

customStrReg ( 'abc', 'a-z' ) // true

customStrReg ( 'abcABC', 'a-zA-Z', [1, 9] ) // true

```