---
layout: doc
---

# 日期时间操作

##  时间戳格式化

- 描述

格式化时间戳

- Type

```ts

 type dateFormat = ( timestamp:string|number, formatStr?: string ) => null | string

```

- 参数说明

1. `timestamp` 时间戳
2. `formatStr` 自定义格式化格式， 默认`yyyy-MM-dd hh:mm:ss`

- 示例

```ts

import  {  dateFormat } from 'quick-utils-js'

console.log ( 'date format:', dateFormat('1666666777878') ); // 2022-10-25 10:59:37

```

##  获取现在距未来的时间差

- 描述

获取现在距离未来某个时间点的时间差

- Type

```ts

export interface FormatTimeValue {
    d: number,
    h: number,
    m: number,
    s: number;
}

export interface FormatRemainTimeResult extends FormatTimeValue {
    formatStr: string;
}

 type getRemainTime = (  endTime: string | Date ) => FormatRemainTimeResult

```

- 参数说明

1. `endTime` 未来时间点

- 示例

```ts

import  {  getRemainTime } from 'quick-utils-js';

console.log( getRemainTime ( new  Date().getTime() + 10000 ) ); // { days: 0, hours: 0, minutes: 0, seconds: 10 }

```

##  获取开始时间和结束时间的时间差

- 描述

获取开始时间与结束时间的时间差

- Type

```ts

export interface FormatTimeValue {
    d: number,
    h: number,
    m: number,
    s: number;
}

type getTimeLeft = ( startTime, endTime )=> FormatTimeValue | null

```

- 参数说明

1. `startTime` 开始时间
2. `endTime` 结束时间

- 示例

```ts

import  {  getTimeLeft } from 'quick-utils-js';

console.log( getTimeLeft ( new  Date().getTime(), new Date().getTime() + 20000 ) ); // {d: 0, h: 0, m: 0, s: 20}

```

##  获取时间信息

- 描述

根据时间戳（秒）获取时间信息

- Type

```ts

export interface FormatTimeValue {
    d: number,
    h: number,
    m: number,
    s: number;
}

type getTimeValue = ( timeValue: number ) => FormatTimeValue

```

- 参数说明

1. `timeValue` 时间戳

- 示例

```ts

import  {  getTimeValue  } from 'quick-utils-js';

console.log( getTimeValue ( new Date().getTime() + 20000 ) ); // {d: 0, h: 0, m: 0, s: 20}

```