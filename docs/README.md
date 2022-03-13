# Introduction

This tool provides us with a quick and common tool method functions in the front-end project business. Most of the code of the tool library comes from the network and the community, and uses part of
[outils](https://github.com/proYang/outils) sound code, All projects are developed using`Typescript`,
The current tool library contains`Array`,`Blob`,`Cookie`,`Date`,`Device`,`Dom`,`Number`,`Object`,`Random`,`Regex`,`String`
related operation methods and some tool methods. At present, some tool functions in the tool library are not very many, and will be gradually increased later.

In addition, the library differs from [lodash](https://lodash.com/) in that the tool functions in this tool are tool methods that are isolated from the project business (business direction tool functions) rather than pure tool methods.
We also welcome suggestions to optimize, or directly raise`PR`, any questions, can be asked in the issue

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