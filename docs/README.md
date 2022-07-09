# 介绍

该工具为我们提供了前端项目业务中快速常用的工具方法函数，工具库的代码大部分来自网络和社区，并使用了部分
[outils](https://github.com/proYang/outils) 源码，项目中全部使用`typescript`开发。目前工具库中提供了`array`、`blob`、`cookie`、`date`、
`device`、`dom`、`number`、`object`、`random`、`regex`、`string`相关的操作方法和部分工具方法。目前工具库中部分工具函数还不是很多，后续会慢慢增加，
此外,这个工具库和 [lodash](https://lodash.com/) 的区别是：此工具中的工具函数都是从项目业务中抽离出来的工具方法（业务方向工具函数），并不是纯工具方法。也欢迎大家提出建议优化，或直接提`pr`,有任何问题，可在[issue](https://github.com/zguiyang/quick-utils-js/issues) 中提问。

# 引用

**站在巨人的肩膀上开发而成**

1. [lodash](https://lodash.com/)
2. [outils](https://github.com/proYang/outils)
3. [dayjs](https://day.js.org/)
4. [bignumber.js](https://mikemcl.github.io/bignumber.js/)
5. 社区


# 兼容性

 ## 浏览器

不支持 IE 浏览器。

`Edge`、`Firefox`、`Chrome`、`Safari` 等现代浏览器的最新的 2 个版本确保会被支持。
对于这些浏览器的其他版本中，由于开发资源的限制并没有做过严格的测试。但是预期`quick-utils-js`应该在这些浏览器不算太老的版本上能正常的运行
（比如 2 年之内的版本）。如果你发现了任何问题欢迎来提 [issue](https://github.com/zguiyang/quick-utils-js/issues) 

## typescript

需要版本 > 3.9.10

# 快速开始

## 安装

`npm i quick-utils-js ` or `yarn add quick-utils-js`

## 使用

```js
import { generateUUID } from "quick-utils-js";

console.log ( generateUUID () );

```
# API

## 数组

### 数组去重

针对数组中的重复对象元素去重，并返回新数组

```ts
/**
 * @param { Array<T> } arr  需要去重的数组
 * @return {  Array<T> }
 * **/

import { uniqueArrayObj } from "quick-utils-js";

const arr = [ { name: 'yang', id: '1222333' }, { name: 'yang2', id: '1222333' }, { name: 'yang', id: '1222333' }, { name: 'yang', id: '1234567' } ];

const result = uniqueArrayObj<{ name: string, id: string }> ( arr );

console.log( JSON.stringify ( result ) ); // [{"name":"yang","id":"1222333"},{"name":"yang2","id":"1222333"},{"name":"yang","id":"1234567"}]
```

### 数组递归遍历

对于tree结构的数组进行遍历，并根据你的需要生成新的tree数组返回

```ts
/**
 * @param { array<T> } data 遍历的数组
 * @param { ( item:T ) => R } callback 每次遍历的回调函数
 * @param { string } childKey 递归的数组key名
 * @return { array } R[]
 * */

import { arrayRecursionMap } from "quick-utils-js";

const arr = [
    {
        id: '1',
        name: '顶级节点一',
        parentId: null,
        children: [
            {
                id: '1-1',
                name: '顶级节点1-1',
                parentId: '1',
            },
            {
                id: '1-2',
                name: '顶级节点1-2',
                parentId: '1',
            },
            {
                id: '1-3',
                name: '顶级节点1-3',
                parentId: '1',
            }
        ]
    },
    {
        id: '2',
        name: '顶级节点二',
        parentId: null,
        children: [
            {
                id: '2-1',
                name: '顶级节点2-1',
                parentId: '2',
            },
            {
                id: '2-2',
                name: '顶级节点2-2',
                parentId: '2',
            },
        ]
    },
    {
        id: '3',
        name: '顶级节点三',
        parentId: null,
        children: [
            {
                id: '3-1',
                name: '顶级节点3-1',
                parentId: '3',
            },
        ]
    },
    {
        id: '4',
        name: '顶级节点四',
        parentId: null,
        children: []
    }
];

const result = arrayRecursionMap<{ id: string, name: string, parentId: string | null, children: any[] }, { label: string, children: any[], value: string, pid: string | null }>
( arr, ( item ) => {

    return {
        label: item.name,
        value: item.id,
        pid: item.parentId,
        children: item.children || [],
    }

});


console.log( JSON.stringify ( result ) ); // [{"label":"顶级节点一","value":"1","pid":null,"children":[{"label":"顶级节点1-1","value":"1-1","pid":"1","children":[]},{"label":"顶级节点1-2","value":"1-2","pid":"1","children":[]},{"label":"顶级节点1-3","value":"1-3","pid":"1","children":[]}]},{"label":"顶级节点二","value":"2","pid":null,"children":[{"label":"顶级节点2-1","value":"2-1","pid":"2","children":[]},{"label":"顶级节点2-2","value":"2-2","pid":"2","children":[]}]},{"label":"顶级节点三","value":"3","pid":null,"children":[{"label":"顶级节点3-1","value":"3-1","pid":"3","children":[]}]},{"label":"顶级节点四","value":"4","pid":null,"children":[]}]

```

### 扁平化数组

扁平化数组：就是将一个多级tree结构的数组拍平成一个一级数组, 此方法会返回一个新数组
```ts
/**
 *
 * @param { any<T> } data 需要扁平化的数组
 * @param { string } childKey 递归子级key
 * @return { array }
 * **/
import { arrayRecursionMap } from "quick-utils-js";
const arr = [
    {
        id: '1',
        name: '顶级节点一',
        parentId: null,
        children: [
            {
                id: '1-1',
                name: '顶级节点1-1',
                parentId: '1',
            },
            {
                id: '1-2',
                name: '顶级节点1-2',
                parentId: '1',
            },
            {
                id: '1-3',
                name: '顶级节点1-3',
                parentId: '1',
            }
        ]
    },
    {
        id: '2',
        name: '顶级节点二',
        parentId: null,
        children: [
            {
                id: '2-1',
                name: '顶级节点2-1',
                parentId: '2',
            },
            {
                id: '2-2',
                name: '顶级节点2-2',
                parentId: '2',
            },
        ]
    },
    {
        id: '3',
        name: '顶级节点三',
        parentId: null,
        children: [
            {
                id: '3-1',
                name: '顶级节点3-1',
                parentId: '3',
            },
        ]
    },
    {
        id: '4',
        name: '顶级节点四',
        parentId: null,
        children: []
    }
];

const result = flatTreeArray<{ id: string, name: string, parentId: string | null, children: any[] }> ( arr );

console.log(JSON.stringify ( result ) );

// [{"id":"1","name":"顶级节点一","parentId":null},{"id":"1-1","name":"顶级节点1-1","parentId":"1"},{"id":"1-2","name":"顶级节点1-2","parentId":"1"},{"id":"1-3","name":"顶级节点1-3","parentId":"1"},{"id":"2","name":"顶级节点二","parentId":null},{"id":"2-1","name":"顶级节点2-1","parentId":"2"},{"id":"2-2","name":"顶级节点2-2","parentId":"2"},{"id":"3","name":"顶级节点三","parentId":null},{"id":"3-1","name":"顶级节点3-1","parentId":"3"},{"id":"4","name":"顶级节点四","parentId":null}]

```

### 数组切割

数组元素切割, `[ 1, 2, 3, 4, 5, 6 ]  => [ [ 1, 2, 3 ], [ 4, 5, 6 ] ]`
```ts
/**
 * @param { Array<T> } arr 进行切割的数组
 * @param { number } step 切割的步长
 * @return { Array<T> }
 */

import { sliceArray } from "quick-utils-js";

const arr = [1,2,3,4,5,6,7 ];

const result = sliceArray<number> ( arr, 3 );

console.log ( result ); // [ [1, 2, 3], [ 4, 5, 6 ], [ 7 ] ]

```
## 对象

### 遍历对象

深度遍历对象, 可以获取到每一个key和value
```ts
/**
 * 深度遍历对象, 获取对象中的每一个key和value
 * @param { RecordObj }  obj 遍历的对象
 * @param { ObjectEachCallback } fn 每一次遍历的回调
 * @returns void
 * **/

 import { objectEach } from "quick-utils-js";

const obj = { parent: { name: "yang", phone: '18190678380', address: 'xxxxx', intro: { y: '9', log: 'kk', target: { usr: 'kkkk' } } }, child: { test: '00' }, id: 'vh' };

const result:RecordObj = {};

objectEach ( obj, ( key, value ) => {

    result[ key ] = value;
    
} );

console.log( JSON.stringify( result ) ); // {"name":"yang","phone":"18190678380","address":"xxxxx","y":"9","log":"kk","usr":"kkkk","test":"00","id":"vh"}


```
### 对象比较

对象比较(不比较原型链的属性), 返回差异部分的属性，支持多级

```ts

/**
* 对象比较(不比较原型链的属性)
* @param original 原始对象
* @param target 目标对象
* @returns new diff object
 * **/
import { objectDiff } from "quick-utils-js";

const original = { user: { name: 'yang', 'phone': '18190678380', 'intro': { a: 'intro1', b: 'intro2' } }, address: '7878' };

const target = { user: { name: 'yang', 'phone': '18190678381', 'intro': { a: 'intro10', b: 'intro2' } }, address: '7878', test: 'test1' };

const diffObj = objectDiff ( original, target );

console.log ( JSON.stringify ( diffObj ) ); // {"user":{"phone":"18190678381","intro":{"a":"intro10"}},"test":"test1"}

```
### 初始化对象

将一个对象中的所有属性值置空, 此方法会影响原对象

```ts
/**
 * @desc 初始化对象属性值
 * @param { Object } obj 需要初始化对象的值
 * @return { Object } 返回数据清空的对象
 * */

import { resetObjectValue } from "quick-utils-js";

const obj =  { name: 'yang', phone: '18190678381', address: 'lll', id: 123, list: [ 1, 2 , 3 ] };

resetObjectValue ( obj );

console.log ( JSON.stringify ( obj ) ); // {"name":null,"phone":null,"address":null,"id":null,"list":[]}

```

## 字符串

### 驼峰命名转换

驼峰命名转换为横杆/下划线命名， ``getElementById => get-element-by-id/get_element_by_id``

```ts
/**
 * @param { string } str 需要转换的字符串 
 * @param { string } separator connector
 * **/
import { getCustomKebabCase } from "quick-utils-js";

const str = 'getElementById';

const result1 = getCustomKebabCase ( str );

const result2 = getCustomKebabCase ( str, '_' );

console.log ( result1 ); // get-element-by-id

console.log ( result2 ); // get_element_by_id
```
### 横杆/下划线命名转换

横杆/下划线命名转换为驼峰命名， ``get-element-by-id/get_element_by_id => getElementById``

```ts
/**
 * @param { string } str 需要转换的字符串 
 * @param { string } separator connector
 * **/
import { getCustomCamelCase } from "quick-utils-js";

const str = 'get-element-by-id';

const str2 = 'get_element_by_id';

const result1 = getCustomCamelCase ( str );

const result2 = getCustomCamelCase ( str2, '_' );

console.log ( result1 ); // getElementById

console.log ( result2 ); // getElementById
```
## 数字

### 千分位

数字千分位格式化，支持大数计算

```ts
/**
 @param { number | string } num
 @param { string } unit
 @param { Object } options othrer config
 @param { number } options.integerLength integer max length
 @param { number } options.decimalsLength decimal max length
 @return { string | null }
 * */

 import { numberToThousands } from "quick-utils-js";

const num = 123456789;

const num2 = 123456789.1234;

const result = numberToThousands ( num );

const result2 = numberToThousands ( num2 );

console.log ( result ); // 123,456,789

console.log ( result2 ); // 123,456,789.1234
 
```
### 千分位还原数字字符串

``999,999,999 => 999999999``

```ts
/**
 * @param { string } str format number
 * @param { string } groupSeparator separator
 * @return { string }
 * **/
import { thousandsToString } from "quick-utils-js";

const num = '123,456,789';

const num2 = '123,456,789.1234';

const result = thousandsToString ( num );

const result2 = thousandsToString ( num2 );

console.log ( result ); // '123456789'

console.log ( result2 ); // '123456789.1234'

```
### 数字计算

数字计算: 加减乘除, 支持大数计算

```ts
/**
 * @param { string | number } a number 1
 * @param { string | number } b number 2
 * @param { BigNumberCalcType }  Calculate the type
 * reference https://mikemcl.github.io/bignumber.js/#config
 * **/
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
## Cookie

```ts

/**
 *
 * @desc  set cookie
 * @param {String} cookie name
 * @param {String} value
 * @param {Number} days
 */

/**
 *
 * @desc get cookie
 * @param  {String} cookie name
 * @returns {String}
 */

/**
 *
 * @desc remove cookie
 * @param  {String} cookie name
 */

import  { setCookie, getcookie, removeCookie } from 'quick-utils-js'

setCookie ('yang-test', 'test_cookie', 1); // success

const cookieVal = getCookie ( 'yang-test' );

console.log ( cookieVal ); // test_cookie

removeCookie ( 'yang-test' ); // success


console.log('删除后：', getCookie ( 'yang-test' ) ); // ''

```

## Blob

### Blob 转 Base64

```ts
/**
 * @desc blob 转 base64
 * @param { Blob } blob
 * @return { Promise<blobToBase64Result> }
 * **/

import  { blobToBase64 } from 'quick-utils-js'

const blobToBase64test = async () => {

    const result = await blobToBase64( new File([new Blob()], "xxx.png") );

    console.log( result );

}

```
### Base64 转 Blob

```ts

/**
 * base64 转 blob
 * @param { Base64ToBlobConfig } config 配置参数
 * **/

import  { base64ToBlob } from 'quick-utils-js'

const result = await base64ToBlob({ base64Str: base64, fileName: '1', contentType: 'jpg' });

console.log( result );

```

### 下载文件

```ts
/**
 * @desc 下载文件
 * @param { string } fileName
 * @param { blob } blob file
 **/


import  {  downloadFile } from 'quick-utils-js'

downloadFile ('test.json', new Blob([JSON.stringify( { hello: "world"}, null, 2)], {type : 'application/json'}) );


```

## 日期时间

###  时间戳格式化

```ts
/**
 * @desc date format
 * @param { string|number } timestamp
 * @param { string } formatStr  format string   default => yyyy-MM-dd hh:mm:ss
 * @returns { null | string }
 * **/

import  {  dateFormat } from 'quick-utils-js'

console.log ( 'date format:', dateFormat('1666666777878') ); // 2022-10-25 10:59:37

```
###  获取现在距未来的时间差

```ts
/**
 *
 * @desc get { now - endTime } time
 * @param  {Date} endTime
 * @return {FormatRemainTimeResult}
 */

import  {  getRemainTime } from 'quick-utils-js';

console.log( getRemainTime ( new  Date().getTime() + 10000 ) ); // { days: 0, hours: 0, minutes: 0, seconds: 10 }

```

###  获取结束时间和开始时间的时间差

```ts
/**
 * @desc ${ startTime - endTime } time, if startTime > endTime, return 0
 * @param { Date | String | unix } startTime
 * @param { Date | String } endTime
 * @returns { FormatTimeValue | null } { d, h, m, s }
 */

import  {  getTimeLeft } from 'quick-utils-js';

console.log( getTimeLeft ( new  Date().getTime(), new Date().getTime() + 20000 ) ); // {d: 0, h: 0, m: 0, s: 20}

```
## 随机生成

###  随机数

```ts
/**
 *
 * @desc generate [min, max ] number
 * @param  {Number} min number
 * @param  {Number} max number
 * @return {Number} random number
 */

import  { randomNum } from 'quick-utils-js';

console.log('randomNum:', randomNum( 10, 12) );
```

### 随机字符串

```ts
/**
 * @desc 产生任意长度随机字母数字组合
 * @param { boolean } randomFlag arbitrarily length
 * @param { number } min
 * @param { number } max
 * @return { string }
 */


import  { randomWord } from 'quick-utils-js';

console.log ( 'randomWord', randomWord( true , 5, 10 )); // oQPfS92



```

### 随机十六进制颜色

```ts
import  { randomColor } from 'quick-utils-js';

console.log ('random color', randomColor() ); // #ddb8f1

```
### 随机UUID
```ts
import  { generateUUID } from 'quick-utils-js';

console.log ('uuid', generateUUID() ); // 'd1d023b0-5559-4f95-9ead-2446afca559f'

```

## 正则校验

### 域名地址

```ts
import  { isDomainUrl } from 'quick-utils-js';

console.log( isDomainUrl('http://www.baidu.com') ); // true

```

### http[s] url

```ts
import  { isNetWorkUrl } from 'quick-utils-js';

console.log( isNetWorkUrl('http://www.baidu.com') ); // true

console.log( isNetWorkUrl('https://www.baidu.com') ); // true

```
### http url

```ts
import  { isHttpUrl } from 'quick-utils-js';

console.log( isHttpUrl('http://www.baidu.com') ); // true

```
### https url

```ts
import  { isHttpsUrl } from 'quick-utils-js';

console.log( httpsUrl('https://www.baidu.com') ); // true

```

### 电话号码 ( 强校验 )

```ts
import  { isPhoneStrict } from 'quick-utils-js';

console.log( isPhoneStrict('13800138000') ); // true

```
### 电话号码 ( 弱校验 )

```ts
import  { isPhone } from 'quick-utils-js';

console.log( isPhone ( '12345678900' ) ); // true

```
### 身份证号码

```ts
import  { isIdCard } from 'quick-utils-js';

log( isIdCard('420102199010101111') ); // true

```
### 邮箱

```ts
import  { isEmail } from 'quick-utils-js';

console.log(isEmail('2770723534@qq.com')); // true
```

### 密码

```ts
// The value contains 8 to 20 characters, including digits, uppercase and lowercase letters, and special characters
import  { isPassword } from 'quick-utils-js';

console.log( isPassword('!@1234Aa') ); // true

```
###  名称

```ts
// The value contains a maximum of 30 characters including digits, uppercase and lowercase letters, and special characters -_+
import  { isFieldName } from 'quick-utils-js';

console.log( isFieldName('name') ); // true
```
### 字母或数字

```ts
import { isNumberOrLetter } from 'quick-utils-js';

console.log( isNumberOrLetter('123') ); // true

```
### 数字金额

```ts
// Digit accuracy check, whether the integer or decimal is greater than 0, up to eight decimal 19.8n accuracy
import { isNumberOrFloat } from 'quick-utils-js';

console.log( isNumberOrFloat('12356789.12345678') ); // true

```
### 十六进制颜色

```ts
import { isHexColor } from 'quick-utils-js';
console.log( isHexColor('#ddb8f1') ); // true

```
## 设备信息

### 获取浏览器信息

```ts
import { getExplore } from "quick-utils-js";

console.log( getExplore () ); // Chrome: 100.0.4896.88

```
### 获取系统信息

```ts
import { getOS } from "quick-utils-js";

console.log ( getOS() ); // MacOSX

```
## DOM

### 滚动距离
```ts
import {  getScrollTop  } from "quick-utils-js";

console.log( getScrollTop () ); // scroll top 2419

```

### 设置滚动条
```ts
import {  setScrollTop, scrollTo } from "quick-utils-js";

/**
 *
 * @desc 设置滚动条距顶部的距离
 * @param { number } value top value
 */

setScrollTop ( 200 );

/**
 *
 * @desc  在${duration}时间(ms)内，滚动条平滑滚动到${to}指定位置
 * @param { number } to 目标距离
 * @param { number } durationVal
 */

scrollTo ( 300, 200);

```
### 滚动到顶部
```ts
import {  scrollToTop } from "quick-utils-js";
/**
 * @param { element } element element
 * **/


scrollToTop ();

```
### 滚动到底部
```ts
import {  scrollToBottom } from "quick-utils-js";
/**
 * @param { element } element element
 * **/

scrollToBottom ();

```
### 获取元素位置

获取一个元素的距离文档(document)的位置，类似jQ中的offset()
```ts
/**
 *
 * @param { HTMLElement| null } ele 元素节点
 * @returns { DomOffsetPos }
 */

import {  getElOffsetPos } from "quick-utils-js";

console.log( getElOffsetPos ('#app') ); // elPos: { left: 8, top: 2105, parent: body }

```
## 工具方法
### 金额转大写
```ts
/**
 *
 * @param  { Number } money
 * @return {String}
 */

import {  digitUppercase } from "quick-utils-js";

console.log( digitUppercase ( 100.98 ) ); // 壹佰元玖角捌分


```
### 获取文件后缀名
```ts
/**
 * xxx.txt => txt
 * @param { string } filename
 * @return { string | undefined }
 * **/

import {  getFileExtension } from "quick-utils-js";

console.log( getFileExtension ('test.jpg') ); // jpg


```

## 辅助方法
### 判断数字
```ts
import {  isNumber } from "quick-utils-js";

console.log( isNumber ( '777') ) // false 
console.log( isNumber ( 7 ) ) // true
```
### 判断字符串
```ts
import {  isString } from "quick-utils-js";

console.log( isString ( '777') ) // true 
console.log( isString ( 7 ) ) // false
```
### 判断布尔值
```ts
import {  isBoolean } from "quick-utils-js";

console.log( isBoolean ( !'' ) ) // true 
console.log( isBoolean ( 3 > 5 ) ) // true
```
### 判断数组
```ts
import { isArray } from "quick-utils-js";

console.log( isArray ( [] ) ) // true 
console.log( isArray ( {} ) ) // false
```
### 判断对象
```ts
import {  isObject } from "quick-utils-js";

console.log( isObject ( [] ) ) // false 
console.log( isObject ( {} ) ) // true
```
### 判断是否空数组
```ts
import {  isEmptyArray } from "quick-utils-js";

console.log( isEmptyArray ( [] ) ) // true 
console.log( isEmptyArray ( [ 1 ] ) ) // false
```
### 判断是否空对象
```ts
import { isEmptyObject } from "quick-utils-js";

console.log('isEmptyObject', isEmptyObject ( {} ) ) // true 
console.log('isEmptyObject', isEmptyObject ( { a: 1 } ) ) // false
```