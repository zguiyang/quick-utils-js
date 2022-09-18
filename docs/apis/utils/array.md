---
layout: doc
---
# 数组操作方法

## 数组对象去重

- 描述

`uniqueArrayObj` 针对数组中的重复对象元素去重，并返回新数

- Type

```ts
 type uniqueArrayObj<T=any> = ( arr: Array<T>, key?:string ) => Array<T>
```

- 参数说明

1. `arr` 需要去重的数组
2. `key` 根据某个`key`去重

- 示例

```ts
import { uniqueArrayObj } from "quick-utils-js";

const arr = [ { name: 'yang', id: '1222333' }, { name: 'yang2', id: '1222333' }, { name: 'yang', id: '1222333' }, { name: 'yang', id: '1234567' } ];

const result = uniqueArrayObj<{ name: string, id: string }> ( arr );

console.log( result ); // [{"name":"yang","id":"1222333"},{"name":"yang2","id":"1222333"},{"name":"yang","id":"1234567"}]
```

## 数组递归遍历

- 描述

`arrayRecursionMap` 对于tree结构的数组进行遍历，并根据你的需要生成新的tree数组返回

- Type

```ts
 type arrayRecursionMap<T=any,R=any> = ( arr: Array<T>, callback: ( item:T ) => R, childKey?: string  ) => Array<R>
```

- 参数说明

1. `arr` 遍历的数组
2. `callback` 每次遍历的回调函数, `item`是当前项
3. `childKey` 递归子数组的key名，不传则默认`children`

- 示例
```ts

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
        ]
    },
    {
        id: '3',
        name: '顶级节点三',
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


console.log( result ); 
// [{"label":"顶级节点一","value":"1","pid":null,"children":[{"label":"顶级节点1-1","value":"1-1","pid":"1","children":[]},{"label":"顶级节点二","value":"2","pid":null,"children":[{"label":"顶级节点2-1","value":"2-1","pid":"2","children":[]}]},{"label":"顶级节点三","value":"3","pid":null,"children":[]}]

```

## 数组递归过滤

- 描述

`arrayDeepFilter` 对于tree结构的数组进行过滤操作，与`Array.filter`一样的效果，不过它支持`tree`结构过滤

- Type

```ts
 type arrayDeepFilter = <T=any>( arr: T[], callback: ( item ) => boolean, childrenKey = 'children' ) => Array<T>
```

- 参数说明

1. `arr` 遍历的数组
2. `callback` 每次遍历的回调函数, `item`是当前项
3. `childKey` 递归子数组的key名，不传则默认`children`

- 示例
```ts

import { arrayDeepFilter } from "quick-utils-js";

const arr = [
    {
        pid: null,
        id: '1',
        name: '节点1',
        children: [
            {
                pid: '1',
                id: '1-1',
                name: '节点1-1',
            },
            {
                pid: '1',
                id: '1-2',
                name: '节点1-2',
                children: [
                    {
                        pid: '1-2',
                        id: '1-2-1',
                        name: '节点1-2-1'
                    }
                ],
            }
        ],
    },
    {
        pid: null,
        id: '2',
        name: '节点2'
    },
    {
        pid: null,
        id: '3',
        name: '节点3',
        children: [
            {
                pid: '3',
                id: '3-1',
                name: '节点3-1',
            }
        ],
    }
];

const  result2 = arrayDeepFilter( arr, ( item ) => item.id === '2' );

// result
 [   {
pid: null,
    id: '2',
    name: '节点2'
}]


```


## 扁平化数组

- 描述

`flatTreeArray` 扁平化数组：就是将一个多级tree结构的数组拍平成一个一级数组, 此方法会返回一个新数组

- Type

```ts
 type flatTreeArray<T=any> = (  arr: T[], childKey = 'children' ) => Array<T>
```

- 参数说明

1. `arr` 遍历的数组
2. `childKey` 递归子数组的key名, 不传则默认`children`

- 示例
```ts
import { flatTreeArray } from "quick-utils-js";
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

console.log( result );

// [{"id":"1","name":"顶级节点一","parentId":null},{"id":"1-1","name":"顶级节点1-1","parentId":"1"},{"id":"1-2","name":"顶级节点1-2","parentId":"1"},{"id":"1-3","name":"顶级节点1-3","parentId":"1"},{"id":"2","name":"顶级节点二","parentId":null},{"id":"2-1","name":"顶级节点2-1","parentId":"2"},{"id":"2-2","name":"顶级节点2-2","parentId":"2"},{"id":"3","name":"顶级节点三","parentId":null},{"id":"3-1","name":"顶级节点3-1","parentId":"3"},{"id":"4","name":"顶级节点四","parentId":null}]

```

## 数组切割

- 描述

`sliceArray` 数组元素切割, `[ 1, 2, 3, 4, 5, 6 ]  => [ [ 1, 2, 3 ], [ 4, 5, 6 ] ]`

- Type

```ts
 type sliceArray<T=any> = ( arr: T[], step: number ) => Array<T[]>
```

- 参数说明

1. `arr` 进行切割的数组
2. `step` 切割的步长

- 示例
```ts

import { sliceArray } from "quick-utils-js";

const arr = [1,2,3,4,5,6,7 ];

const result = sliceArray<number> ( arr, 3 );

console.log ( result ); // [ [1, 2, 3], [ 4, 5, 6 ], [ 7 ] ]

```