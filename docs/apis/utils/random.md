---
layout: doc
---
# 随机生成

## 随机数

- 描述

生成随机数，可以指定范围

- Type

```ts

 type randomNum = ( min: number, max: number ) => number

```

- 参数说明

1. `min` 最小数
2. `msx` 最大数

- 示例

```ts

import  { randomNum } from 'quick-utils-js';

randomNum ( 10, 15 ) ; // 13

```

## 随机字符串

- 描述

随机生成字符串

- Type

```ts

 type randomWord = ( randomFlag: boolean, min: number, max:number ) => string

```

- 参数说明

1. `randomFlag` 是否生成指定长度范围的字符串
2. `min` 生成的最小长度
3. `max` 生成的最大长度

- 示例

```ts

import  { randomWord } from 'quick-utils-js';

randomWord () ; // 1vhvhjhj

```

## 随机ID

- 描述

生成随机 16-32位的 id

- Type

```ts

 type generateID = ( ) => string

```

- 参数说明

无

- 示例

```ts

import  { generateID } from 'quick-utils-js';

generateID () ; // XXXX

```


## 随机UUID

- 描述

随机生成16位的`uuid`

- Type

```ts

 type generateUUID = ( ) => string

```

- 参数说明

无

- 示例

```ts
import  { generateUUID } from 'quick-utils-js';

console.log ('uuid', generateUUID() ); // 'd1d023b0-5559-4f95-9ead-2446afca559f'

```

## 随机十六进制颜色

- 描述

随机生成十六进制颜色值

- Type

```ts

 type randomColor = ( ) => string

```

- 参数说明

无

- 示例

```ts
import  { randomColor } from 'quick-utils-js';

console.log ('random color', randomColor() ); // #ddb8f1

```