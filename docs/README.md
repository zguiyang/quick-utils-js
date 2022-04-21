# Introduction

This tool provides us with a quick and common tool method functions in the front-end project business. Most of the code of the tool library comes from the network and the community, and uses part of
[outils](https://github.com/proYang/outils) sound code, All projects are developed using`Typescript`,
The current tool library contains`Array`,`Blob`,`Cookie`,`Date`,`Device`,`Dom`,`Number`,`Object`,`Random`,`Regex`,`String`
related operation methods and some tool methods. At present, some tool functions in the tool library are not very many, and will be gradually increased later.

In addition, the library differs from [lodash](https://lodash.com/) in that the tool functions in this tool are tool methods that are isolated from the project business (business direction tool functions) rather than pure tool methods.
We also welcome suggestions to optimize, or directly raise`PR`, any questions, can be asked in the issue

# reference

**Developed on the shoulders of giants**

1. [lodash](https://lodash.com/)
2. [outils](https://github.com/proYang/outils)
3. community

# Compatibility

## Browser

Internet Explorer is not supported.
The latest 2 versions of modern browsers such as`Edge`,`Firefox`,`Chrome`,`Safari`.
Other versions of these browsers have not been rigorously tested due to development resource constraints. But `quick-utils-js` is expected to work well on less old versions of these browsers(for example, within 2 years). Feel free to [issue](https://github.com/zguiyang/quick-utils-js/issues) if you find any problems

## Typescript

Need to release > 3.9.10

# Quick start

## Install

`npm i quick-utils-js ` or `yarn add quick-utils-js`

## Usage

```js
import { generateUUID } from "quick-utils-js";

console.log ( generateUUID () );

```

# API

## Array

### Array to unique

Removes duplicate object elements from an array and returns a new array

```ts
/**
 * @param { Array<T> } arr unique arr data
 * @return {  Array<T> }
 * **/

import { uniqueArrayObj } from "quick-utils-js";

const arr = [ { name: 'yang', id: '1222333' }, { name: 'yang2', id: '1222333' }, { name: 'yang', id: '1222333' }, { name: 'yang', id: '1234567' } ];

const result = uniqueArrayObj<{ name: string, id: string }> ( arr );

console.log( JSON.stringify ( result ) ); // [{"name":"yang","id":"1222333"},{"name":"yang2","id":"1222333"},{"name":"yang","id":"1234567"}]
```

### The array is iterated recursively

Iterate over the tree array and generate a new tree array based on your needs

```ts
/**
 * @param { array<T> } data The array to iterate over
 * @param { ( item:T ) => R } callback The callback function for each iteration
 * @param { string } childKey The name of the recursive array key
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

### Flat array

Flatten an array of multilevel trees into a one-level array. This method returns a new array
```ts
/**
 *
 * @param { any<T> } data The array needs to be flattened
 * @param { string } childKey Recursive child key
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

### Slice array

slice array element , `[ 1, 2, 3, 4, 5, 6 ]  => [ [ 1, 2, 3 ], [ 4, 5, 6 ] ]`
```ts
/**
 * @param { Array<T> } arr need slice array
 * @param { number } step slice length
 * @return { Array<T> }
 */

import { sliceArray } from "quick-utils-js";

const arr = [1,2,3,4,5,6,7 ];

const result = sliceArray<number> ( arr, 3 );

console.log ( result ); // [ [1, 2, 3], [ 4, 5, 6 ], [ 7 ] ]

```
## Object

### Object Each

The object is deeply traversed to obtain each key and value
```ts
/**
 * @param { RecordObj }  obj each obj
 * @param { ObjectEachCallback } fn each callback
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
### Object Diff

Object comparison (does not compare the attributes of the prototype chain), returns the attributes of the difference part, supports multiple levels

```ts

/**
* @param { Object } original object data
* @param { Object } target target object data
* @returns new diff object
 * **/
import { objectDiff } from "quick-utils-js";

const original = { user: { name: 'yang', 'phone': '18190678380', 'intro': { a: 'intro1', b: 'intro2' } }, address: '7878' };

const target = { user: { name: 'yang', 'phone': '18190678381', 'intro': { a: 'intro10', b: 'intro2' } }, address: '7878', test: 'test1' };

const diffObj = objectDiff ( original, target );

console.log ( JSON.stringify ( diffObj ) ); // {"user":{"phone":"18190678381","intro":{"a":"intro10"}},"test":"test1"}

```
### Init Object

reset object key value

```ts
/**
 * @param { Object } obj
 * @return { Object }
 * */

import { resetObjectValue } from "quick-utils-js";

const obj =  { name: 'yang', phone: '18190678381', address: 'lll', id: 123, list: [ 1, 2 , 3 ] };

resetObjectValue ( obj );

console.log ( JSON.stringify ( obj ) ); // {"name":null,"phone":null,"address":null,"id":null,"list":[]}

```

## String

### KebabCase

Hump naming is converted to bar/underline naming, ``getElementById => get-element-by-id/get_element_by_id``

```ts
/**
 * @param { string } str key 
 * @param { string } separator
 * **/
import { getCustomKebabCase } from "quick-utils-js";

const str = 'getElementById';

const result1 = getCustomKebabCase ( str );

const result2 = getCustomKebabCase ( str, '_' );

console.log ( result1 ); // get-element-by-id

console.log ( result2 ); // get_element_by_id
```
### CamelCase

Bar/underline naming is converted to camel naming, ``get-element-by-id/get_element_by_id => getElementById``

```ts
/**
 * @param { string } str key 
 * @param { string } separator
 * **/
import { getCustomCamelCase } from "quick-utils-js";

const str = 'get-element-by-id';

const str2 = 'get_element_by_id';

const result1 = getCustomCamelCase ( str );

const result2 = getCustomCamelCase ( str2, '_' );

console.log ( result1 ); // getElementById

console.log ( result2 ); // getElementById
```

## Number

### Thousands
Number to thousands, The decimal is automatically truncated when it exceeds eight places.

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
### Thousands to normal number

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
### Numerical calculation
Large number calculation: addition, subtraction, multiplication, division, support large numbers

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


import  { setCookie, getCookie, removeCookie } from 'quick-utils-js'

setCookie ('yang-test', 'test_cookie', 1); // success

const cookieVal = getCookie ( 'yang-test' );

console.log ( cookieVal ); // test_cookie

removeCookie ( 'yang-test' ); // success


console.log('删除后：', getCookie ( 'yang-test' ) ); // ''

```
## Blob

### Blob to Base64

```ts
/**
 * @desc blob to base64
 * @param { Blob } blob blob
 * @return { Promise<blobToBase64Result> }
 * **/

import  { blobToBase64 } from 'quick-utils-js'

const blobToBase64test = async () => {

    const result = await blobToBase64( new File([new Blob()], "xxx.png") );

    console.log( result );

}

```
### Base64 to Blob

```ts

/**
 * base64 to blob
 * @param { Base64ToBlobConfig } config params
 * **/

import  { base64ToBlob } from 'quick-utils-js'

const result = await base64ToBlob({ base64Str: base64, fileName: '1', contentType: 'jpg' });

console.log( result );

```

### Download File

```ts
/**
 * @desc download blob file
 * @param { string } fileName
 * @param { blob } blob file
 **/


import  {  downloadFile } from 'quick-utils-js'

downloadFile ('test.json', new Blob([JSON.stringify( { hello: "world"}, null, 2)], {type : 'application/json'}) );


```
## Date

###  format unix timestamp

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
###  get remain time

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

### get time Left

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
## Random

###  random number

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

### random word

```ts
/**
 * @desc generate arbitrarily length str
 * @param { boolean } randomFlag arbitrarily length
 * @param { number } min
 * @param { number } max
 * @return { string }
 */


import  { randomWord } from 'quick-utils-js';

console.log ( 'randomWord', randomWord( true , 5, 10 )); // oQPfS92



```

### random hex color

```ts
import  { randomColor } from 'quick-utils-js';

console.log ('random color', randomColor() ); // #ddb8f1

```
### Random UUID
```ts
import  { generateUUID } from 'quick-utils-js';

console.log ('uuid', generateUUID() ); // 'd1d023b0-5559-4f95-9ead-2446afca559f'

```
## Regex

### domain url

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

### phone number ( strict )

```ts
import  { isPhoneStrict } from 'quick-utils-js';

console.log( isPhoneStrict('13800138000') ); // true

```
### phone number ( not strict )

```ts
import  { isPhone } from 'quick-utils-js';

console.log( isPhone ( '12345678900' ) ); // true

```
### id card number

```ts
import  { isIdCard } from 'quick-utils-js';

log( isIdCard('420102199010101111') ); // true

```
### email

```ts
import  { isEmail } from 'quick-utils-js';

console.log(isEmail('2770723534@qq.com')); // true
```

### password

```ts
// The value contains 8 to 20 characters, including digits, uppercase and lowercase letters, and special characters
import  { isPassword } from 'quick-utils-js';

console.log( isPassword('!@1234Aa') ); // true

```
### field name

```ts
// The value contains a maximum of 30 characters including digits, uppercase and lowercase letters, and special characters -_+
import  { isFieldName } from 'quick-utils-js';

console.log( isFieldName('name') ); // true
```
### letter or number

```ts
import { isNumberOrLetter } from 'quick-utils-js';

console.log( isNumberOrLetter('123') ); // true

```
### number format

```ts
// Digit accuracy check, whether the integer or decimal is greater than 0, up to eight decimal 19.8n accuracy
import { isNumberOrFloat } from 'quick-utils-js';

console.log( isNumberOrFloat('12356789.12345678') ); // true

```
### hex color

```ts
import { isHexColor } from 'quick-utils-js';
console.log( isHexColor('#ddb8f1') ); // true

```
### 十六进制颜色

```ts
import { isHexColor } from 'quick-utils-js';
console.log( isHexColor('#ddb8f1') ); // true

```
## Device Info

### get browser info

```ts
import { getExplore } from "quick-utils-js";

console.log( getExplore () ); // Chrome: 100.0.4896.88

```
### get system os info

```ts
import { getOS } from "quick-utils-js";

console.log ( getOS() ); // MacOSX

```
## DOM

### get scroll top value
```ts
import {  getScrollTop  } from "quick-utils-js";

console.log( getScrollTop () ); // scroll top 2419

```

### set scroll top value
```ts
import {  setScrollTop, scrollTo } from "quick-utils-js";

/**
 *
 * @param { number } value top value
 */

setScrollTop ( 200 );

/**
 *
 * @desc  Within ${duration} time (ms), the scroll bar scrolls smoothly to the position specified by ${to}
 * @param { number } to 目标距离
 * @param { number } durationVal
 */

scrollTo ( 300, 200);

```
### scroll to top
```ts
import {  scrollToTop } from "quick-utils-js";
/**
 * @param { element } element element
 * **/


scrollToTop ();

```
### scroll to bottom
```ts
import {  scrollToBottom } from "quick-utils-js";
/**
 * @param { element } element element
 * **/

scrollToBottom ();

```
### get element position info
Gets an element's distance from the document, similar to offset() in jQ.
```ts
/**
 * @param { HTMLElement| null } ele element node
 * @returns { DomOffsetPos }
 */

import {  getElOffsetPos } from "quick-utils-js";

console.log( getElOffsetPos ('#app') ); // elPos: { left: 8, top: 2105, parent: body }

```
## Utils
### Amount transferred to uppercase
```ts
/**
 *
 * @param  { Number } money
 * @return {String}
 */

import {  digitUppercase } from "quick-utils-js";

console.log( digitUppercase ( 100.98 ) ); // 壹佰元玖角捌分


```
### get file extension name
```ts
/**
 * xxx.txt => txt
 * @param { string } filename
 * @return { string | undefined }
 * **/

import {  getFileExtension } from "quick-utils-js";

console.log( getFileExtension ('test.jpg') ); // jpg


```

## Helper
### number verification
```ts
import {  isNumber } from "quick-utils-js";

console.log( isNumber ( '777') ) // false 
console.log( isNumber ( 7 ) ) // true
```
### string verification
```ts
import {  isString } from "quick-utils-js";

console.log( isString ( '777') ) // true 
console.log( isString ( 7 ) ) // false
```
### boolean verification
```ts
import {  isBoolean } from "quick-utils-js";

console.log( isBoolean ( !'' ) ) // true 
console.log( isBoolean ( 3 > 5 ) ) // true
```
### array verification
```ts
import { isArray } from "quick-utils-js";

console.log( isArray ( [] ) ) // true 
console.log( isArray ( {} ) ) // false
```
###  object verification
```ts
import {  isObject } from "quick-utils-js";

console.log( isObject ( [] ) ) // false 
console.log( isObject ( {} ) ) // true
```
### empty array verification
```ts
import {  isEmptyArray } from "quick-utils-js";

console.log( isEmptyArray ( [] ) ) // true 
console.log( isEmptyArray ( [ 1 ] ) ) // false
```
### empty object verification
```ts
import { isEmptyObject } from "quick-utils-js";

console.log('isEmptyObject', isEmptyObject ( {} ) ) // true 
console.log('isEmptyObject', isEmptyObject ( { a: 1 } ) ) // false
```

# Change log

## 1.0.3

refactor

1. ``blob/index``,``blobToBase64``params annotation update
2. ``regex/index``, function name update, ``isUrl => isDomainUrl``、``isColor => isHexColor``