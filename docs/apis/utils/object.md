---
layout: doc
---
# 对象操作

## 遍历对象

- 描述

`objectEach`, 深度遍历对象, 可以获取到每一个key和value

- Type

```ts
 type objectEach = ( obj: Record<string, any>, fn: ( key: string, val: any ) => any ) => void
```

- 参数说明

1. `obj` 遍历的对象
2. `fn` 每一次遍历的回调

- 示例
```ts

 import { objectEach } from "quick-utils-js";

const obj = { parent: { name: "yang", phone: '18190678380', address: 'xxxxx', intro: { y: '9', log: 'kk', target: { usr: 'kkkk' } } }, child: { test: '00' }, id: 'vh' };

const result:any = {};

objectEach ( obj, ( key, value ) => {

    result[ key ] = value;
    
} );

console.log( result ); // {"name":"yang","phone":"18190678380","address":"xxxxx","y":"9","log":"kk","usr":"kkkk","test":"00","id":"vh"}


```

## 对象比较

- 描述

`objectDiff`, 对象比较(不比较原型链的属性), 返回差异部分的属性，支持多级

- Type

```ts
 type objectDiff<T=any> = ( original: Record<string, any>, target: Record<string, any> ) => T
```

- 参数说明

1. `original` 原始对象
2. `target` 目标对象

- Return

返回差异数据

- 示例
```ts
import { objectDiff } from "quick-utils-js";

const original = { user: { name: 'yang', 'phone': '18190678380', 'intro': { a: 'intro1', b: 'intro2' } }, address: '7878' };

const target = { user: { name: 'yang', 'phone': '18190678381', 'intro': { a: 'intro10', b: 'intro2' } }, address: '7878', test: 'test1' };

const diffObj = objectDiff ( original, target );

console.log ( diffObj ); // {"user":{"phone":"18190678381","intro":{"a":"intro10"}},"test":"test1"}

```

## 初始化对象

- 描述

`resetObjectValue`, 将一个对象中的所有属性值置空,所有值重置为`null` 此方法会影响原对象

- Type

```ts
 type resetObjectValue<T=any> = ( obj, options?: {
    ignore?: any[],
    resetKeyValues?: Record<string, any>,
} ) => T
```

- 参数说明

1. `obj` 需要初始化的对象
2. `options` 初始化的一些设置
3. `options.ignore` 你可以忽略一些key，不进行重置操作 
4. `options.resetKeyValues` 你可以指定某个keu的初始值，并且你指定的`key`，可以无视数据层级。 **注意：如果你设置的key，存在于`ignore`中，将不会生效**

- 示例

```ts

import { resetObjectValue } from "quick-utils-js";

//  {"name":null,"phone":null,"address":null,"id":null,"list":[]}
resetObjectValue ( { name: 'yang', phone: '18190678381', address: 'lll', id: 123, list: [ 1, 2 , 3 ] } );

// {a: null, b: null, c: 3}
console.log ( resetObjectValue ( { a: 1, b: 2, c: 3 }, { ignore: [ 'c' ] } )  );

// {a: null, b: '55555~~~~', c: 3}
console.log ( resetObjectValue ( { a: 1, b: 2, c: 3 }, { ignore: [ 'c' ], resetKeyValues: { 'b': '55555~~~~' } } )  );

// {a:null,b:{d:{f:"55555~~~~"}},c:3}
console.log ( resetObjectValue ( { a: 1, b: { d: { f: '123' } }, c: 3 }, { ignore: [ 'c' ], resetKeyValues: { 'f': '55555~~~~' } } )  );



```