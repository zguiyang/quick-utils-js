---
layout: doc
---
# 常用正则校验

## 邮箱校验

- 描述

`generalEmailReg` 邮箱校验方法， 支持中文名称邮箱校验

- Type

```ts
 type generalEmailReg = ( email: string, isHaveChinese?: boolean ) => boolean
```

- 参数说明

1. `email` 需要校验邮箱地址
2. `isHaveChinese` 是否含有有中文名称, 默认`false`

- 示例

```js
import { generalEmailReg } from 'quick-utils-js';

 generalEmailReg ( 'zhangsan-123@yang.com' ) // true

 generalEmailReg ( 'zhangsan_123@yang.com' ) // true

 generalEmailReg ( 'zhangsang_455hgfjgj@163.com' ) // true

 generalEmailReg ( 'zhangsang_455hgfjgj@qq.com' ) // true

 generalEmailReg ( 'zhangsan张三@qq.com', true ) // true
```

## 宽松手机号格式校验

- 描述

手机号,中国(宽松), 只要是`13,14,15,16,17,18,19`开头即可

- Type

```ts
  type  loosePhoneReg = ( mobile: string, scope?:`${number}-${number}` ) => boolean
```

- 参数说明

1. `mobile`需要校验的手机号
2. `scope` `'min-max'` 可指定手机号第二位的数字范围 默认为 `0-9`

- 示例

```js
import { loosePhoneReg } from 'quick-utils-js';

loosePhoneReg ( '11111111111', '2-9' ) // false

loosePhoneReg ( '13313567890' ) // true
```

## 严格手机号校验

- 描述

手机号,中国(严谨) 根据工信部2019年最新公布的手机号段，支持已`+86`、`+086`开头的手机号

- Type

```ts
  type  loosePhoneReg = ( mobile: string, isArea?: boolean ) => boolean
```

- 参数说明

1. `mobile`需要校验的手机号
2. `isArea`是否支持区号验证，默认为`false`

- 示例

```js
import { strictPhoneReg } from 'quick-utils-js';

strictPhoneReg ( '18190678381' ) // true

strictPhoneReg ( '+08613898786754', true ) // true

strictPhoneReg ( '+8615898786754', true ) // true
```

## 电话号码校验（中国）

- 描述

国内固定电话号码校验，如： `028-4405222`、`0816-87888822`

- Type

```ts
  type  chinaTelPhoneReg = ( tel: string, isExtension?: boolean ) => boolean
```

- 参数说明

1. `tel`需要校验的电话号码
2. `isExtension`是否加上分机号校验，默认为`false`, 设置为`true`仅代表支持分机号校验，不代表分机号必填

- 示例

```js
import { chinaTelPhoneReg } from 'quick-utils-js';

chinaTelPhoneReg ( '028-98678766' ) // true

chinaTelPhoneReg ( '4000-98678766' ) // true

chinaTelPhoneReg ( '028-9987-898800', true ) // true

chinaTelPhoneReg ( '0816-78989779-5687', true ) // true
```

## 电话号码校验（国际）

- 描述

国际固定电话号码校验，如：`XXX-XXXXXXX`、`XXXX-XXXXXXXX`、`XXX-XXXXXXX`、`XXX-XXXXXXXX`、`XXXXXXX`、`XXXXXXXX`

- Type

```ts
  type  telPhoneReg = ( tel: string ) => boolean
```

- 参数说明

1. `tel`需要校验的电话号码

- 示例

```js
import { telPhoneReg } from 'quick-utils-js';

telPhoneReg ( '+442912345678' ) // true

telPhoneReg ( '+14255550100' ) // true

telPhoneReg ( '+14255550100' ) // true

telPhoneReg ( '0019898777' ) // true

telPhoneReg ( '+186-22212148' ) // true
```

## 域名正则校验

- 描述

一级或二级域名校验，`www.baidu.com`、 `test.baidu.com`, 不能以http[s]开头

- Type

```ts
  type  domainUrlReg = ( str: string ) => boolean
```

- 参数说明

1. `str`需要校验的域名地址



- 示例

```js
import { domainUrlReg } from 'quick-utils-js';

domainUrlReg ( 'www.baidu.com' ) // true

domainUrlReg ( 'a.com.cn' ) // true

```

## 网路地址校验

- 描述

http or https 开头的网路链接

- Type

```ts
  type  netWorkUrlReg = ( str:string, agreement?: 'https' | 'http' ) => boolean
```

- 参数说明

1. `str`需要校验的链接
2. `agreement` 网络协议，默认两种都支持


- 示例

```js
import { netWorkUrlReg } from 'quick-utils-js';

domainUrlReg ( 'http://www.baidu.com' ) // true

domainUrlReg ( 'https://www.baidu.com' ) // true

domainUrlReg ( 'https://www.baidu.com', 'http' ) // false

```

## 身份证号码校验(宽松)

- 描述

校验身份证号码，15或18位即可，支持最后一个字符为`x`

- Type

```ts
  type  looseIdCardReg = ( str:string ) => boolean
```

- 参数说明

1. `str`需要校验的身份证号码

- 示例

```js
import { looseIdCardReg } from 'quick-utils-js';

looseIdCardReg ( '123456789012345' ) // true

looseIdCardReg ( '51072519970228741X' ) // true

looseIdCardReg ( '51072519970228741x' ) // true

```

## 身份证号码校验(严格)

- 描述

校验身份证号码，15或18位都支持，不过是严格校验的版本

- Type

```ts
  type  strictIdCardReg = ( str:string ) => boolean
```

- 参数说明

1. `str`需要校验的身份证号码

- 示例

```js
import { strictIdCardReg } from 'quick-utils-js';

strictIdCardReg ( '123456789012345' ) // false

strictIdCardReg ( '110225196403026127' ) // true

strictIdCardReg ( '51072519970224741X' ) // true

```

 ## 弱密码格式正则校验

- 描述

密码规则:密码长度为m ~ n个字符，只能包含数字、大写字母、小写字母和下划线组成(有其一即可)

- Type

```ts
  type  loosePasswordReg = ( str:string, len?: [ number, number ] ) => boolean
```

- 参数说明

1. `str`需要校验的密码
2. `len` `[ min, max ]` 密码长度范围, 默认 `6-15`

- 示例

```js
import { loosePasswordReg } from 'quick-utils-js';

loosePasswordReg ( '123456' ) // true

loosePasswordReg ( '7ggHJJH_FHF_' ) // true

loosePasswordReg ( '12aaAB', [ 6, 6 ] ) // true

```

## 简单密码格式正则校验

- 描述

密码规则:密码规则:密码长度为m ~ n个字符，必须包含数字和字母（大小写均可），允许除空格外的特殊符号(可选)

- Type

```ts
  type  simplePasswordReg = ( str:string, len?: [ number, number ] ) => boolean
```

- 参数说明

1. `str`需要校验的密码
2. `len` `[ min, max ]` 密码长度范围, 默认 `6-15`

- 示例

```js
import { simplePasswordReg } from 'quick-utils-js';

loosePasswordReg ( '123456' ) // false

loosePasswordReg ( '12345!@' ) // false

simplePasswordReg ( '123xzfhgf' ) // true

loosePasswordReg ( '7ggHJJH_FHF_' ) // true

loosePasswordReg ( '7ggHJJH_FHF@~####' ) // true

```

## 强密码格式正则校验

- 描述

密码规则:密码规则:密码长度为8 ~ 20个字符，由数字、大写字母、小写字母和特殊字符组成, 默认`8-20`位字符

> 特殊符号： !@#$&*( 、) _、-+=、[、]:;?,.

- Type

```ts
  type  strictPasswordReg = ( str:string, len?: [ number, number ] ) => boolean
```

- 参数说明

1. `str`需要校验的密码
2. `len` `[ min, max ]` 密码长度范围, 默认 `8-20`

- 示例

```js
import { strictPasswordReg } from 'quick-utils-js';

strictPasswordReg ( '190808098456' ) // false

strictPasswordReg ( '123jhjhx' ) // false

strictPasswordReg ( '123vhvhx!@' ) // true

strictPasswordReg ( '123x!Z@12' ) // true

```

## 昵称正则校验

- 描述

校验用户昵称等，昵称规则: 只要是字母、数字或中文即可

- Type

```ts
  type  fieldNameReg = ( str:string ) => boolean
```

- 参数说明

1. `str`需要校验的昵称

- 示例

```js
import { fieldNameReg } from 'quick-utils-js';

fieldNameReg ( '123' ) // true

fieldNameReg ( '张三' ) // true

fieldNameReg ( '张三123' ) // true

fieldNameReg ( '张三abc' ) // true

fieldNameReg ( '张三李四a' ) // true

fieldNameReg ( 'abc123' ) // true

```

## 十六进制颜色校验

- 描述

十六进制颜色正则校验, `#000`, `#666`, `#fff`, `#FFF`

- Type

```ts
  type  hexColorReg = ( str:string ) => boolean
```

- 参数说明

1. `str`需要校验的颜色值

- 示例

```js
import { hexColorReg } from 'quick-utils-js';

hexColorReg ( '#fff' ) // true

hexColorReg ( '#fffff' ) // true

hexColorReg ( '#123fff' ) // true

hexColorReg ( '#FFFbb1' ) // true

```

## 数字金额正则校验

- 描述

校验金额格式的正则，支持负数、小数、整数

- Type

```ts
  type  moneyReg = ( str: string, options?: { minus?: boolean, decimalsMax?: number } ) => boolean
```

- 参数说明

1. `str`需要校验的金额字符串
2. `options.minus` 是否是负数, 默认`false`
3. `options.decimalsMax` 最大小数位, 默认`8`位小数

- 示例

```js
import { moneyReg } from 'quick-utils-js';

moneyReg ( '0' ) // true

moneyReg ( '0.00' ) // true

moneyReg ( '11.01' ) // true

moneyReg ( '-0.111', { minus: true } ) // true

moneyReg ( '100.00', { decimalsMax: 2 } ) // true

```

## 千分位数字正则校验

- 描述

千分位正则校验, 支持小数 `10,000.00`、 `100,000,000`、 `199999`

- Type

```ts
  type  thousandsMoneyReg = ( str: string ) => boolean
```

- 参数说明

1. `str`需要校验的字符串

- 示例

```js
import { thousandsMoneyReg } from 'quick-utils-js';

thousandsMoneyReg ( '10,000.00' ) // true

thousandsMoneyReg ( '100,000,000' ) // true

thousandsMoneyReg ( '199999' ) // true
```

## IP地址正则校验

- 描述

ip地址格式校验

- Type

```ts
  type  ipReg = ( str: string ) => boolean
```

- 参数说明

1. `str`需要校验的ip地址

- 示例

```js
import { ipReg } from 'quick-utils-js';

ipReg ( '127.0.0.1' ) // true

ipReg ( '192.168.10.1' ) // true

ipReg ( '255.22.255.255' ) // true
```

## 日期格式正则校验

- 描述

校验日期格式字符串，如`2022-08-01`、`2022/08/01`

- Type

```ts
  type  dateReg = ( str: string ) => boolean
```

- 参数说明

1. `str`需要校验的日期字符串

- 示例

```js
import { dateReg } from 'quick-utils-js';

dateReg ( '2019-01-01' ) // true

dateReg ( '2019-1-1' ) // true

dateReg ( '2019/1/1' ) // true

dateReg ( '2019/01/01' ) // true
```

## 日期时间格式正则校验

- 描述

校验日期时间格式字符串，如`2022-08-01 10:00:00`、`2022/08/01 10:00:00`

- Type

```ts
  type  dateTimeReg = ( str: string ) => boolean
```

- 参数说明

1. `str`需要校验的日期时间字符串

- 示例

```js
import { dateTimeReg } from 'quick-utils-js';

dateTimeReg ( '2019-01-01 10:00:00' ) // true

dateTimeReg ( '2019-1-1 1:0:0' ) // true

dateTimeReg ( '2019/1/1 10:00:00' ) // true

dateTimeReg ( '2019/01/01 1:0:0' ) // true
```