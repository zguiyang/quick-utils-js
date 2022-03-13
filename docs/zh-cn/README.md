# 介绍

该工具为我们提供了前端项目业务中快速常用的工具方法函数，工具库的代码大部分来自网络和社区，并使用了部分
[outils](https://github.com/proYang/outils) 源码，项目中全部使用`typescript`开发。目前工具库中提供了`array`、`blob`、`cookie`、`date`、
`device`、`dom`、`number`、`object`、`random`、`regex`、`string`相关的操作方法和部分工具方法。目前工具库中部分工具函数还不是很多，后续会慢慢增加，
此外,这个工具库和 [lodash](https://lodash.com/) 的区别是：此工具中的工具函数都是从项目业务中抽离出来的工具方法（业务方向工具函数），并不是纯工具方法。也欢迎大家提出建议优化，或直接提`pr`,有任何问题，可在[issue](https://github.com/zguiyang/quick-utils-js/issues) 中提问。

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

## Array

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
## Object

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
