---
layout: doc
---
# 常用方法

## cookie操作

- 描述

`getCookie` 获取cookie

`setCookie` 设置cookie

`removeCookie` 删除cookie

- Type

```ts
 type getCookie = ( name:string ) => string

 type setCookie = ( name:string, value:string, days: number ) => void

type removeCookie = ( name:string ) => void
```

- `getCookie` 参数说明

   1. `name` 需要获取的key名

<br/>

- `setCookie` 参数说明

   1. `name` 保存的key名
   2. `value` 对应的值
   3. `days` 保存的时间

<br/>

- `removeCookie` 参数说明

   1. `name` 需要删除的cookie名



- 示例

```js
import  { setCookie, getcookie, removeCookie } from 'quick-utils-js'

setCookie ('yang-test', 'test_cookie', 1); // success

const cookieVal = getCookie ( 'yang-test' );

console.log ( cookieVal ); // test_cookie

removeCookie ( 'yang-test' ); // success


console.log('删除后：', getCookie ( 'yang-test' ) ); // ''
```

## Blob 转 Base64

- 描述

`blob`对象 转 `base64`

- Type

```ts
export interface BlobToBase64Result {
    msg: string;
    base64Url: string | ArrayBuffer | null | undefined;
}

 type blobToBase64 = ( blob:Blob ) => Promise<BlobToBase64Result>
```

- 参数说明

1. `blob` 需要转换的`blob`

- 示例

```ts

import  { blobToBase64 } from 'quick-utils-js'

const blobToBase64test = async () => {

    const result = await blobToBase64( new File([new Blob()], "xxx.png") );

    console.log( result );

}

```

## Base64 转 Blob

- 描述

`Base64`对象 转 `Blob`

- Type

```ts

export interface Base64ToBlobConfig {
    base64Str: string; // 需要转换的base64
    contentType: string; // 内容类型 jpg / png / pdf ...
    fileName:string; // 文件名称
    sliceSize?: number; // 切割数据大小， 默认 512
}

export interface Base64ToBlobResult {
    preview: string;
    name: string;
}

 type base64ToBlob = ( config:Base64ToBlobConfig ) => Promise<Base64ToBlobResult>
```

- 参数说明

1. `config` 转换配置

- 示例

```ts

import  { base64ToBlob } from 'quick-utils-js'

const result = await base64ToBlob({ base64Str: base64, fileName: '1', contentType: 'jpg' });

console.log( result );

```

## 下载文件

- 描述

下载文件

- Type

```ts

 type downloadFile = ( fileName: string, blob:Blob ) => void

```

- 参数说明

1. `fileName` 设置文件名称
2. `blob` 下载的文件对象

- 示例

```ts

import  {  downloadFile } from 'quick-utils-js'

downloadFile ('test.json', new Blob([JSON.stringify( { hello: "world"}, null, 2)], {type : 'application/json'}) );


```

## 获取浏览器信息

- 描述

获取浏览版本信息

- Type

```ts

 type getExplore = () => string

```

- 参数说明

无

- 示例

```ts
import { getExplore } from "quick-utils-js";

console.log( getExplore () ); // Chrome: 100.0.4896.88

```


## 获取系统信息

- 描述

获取系统版本信息

- Type

```ts

 type getOS = () => string | undefined

```

- 参数说明

无

- 示例

```ts
import { getOS } from "quick-utils-js";

console.log ( getOS() ); // MacOSX

```

## 金额转大写

- 描述

将金额转化为大写

- Type

```ts

 type digitUppercase = ( money: number )=> string

```

- 参数说明

1. `money` 需要转换的金额

- 示例

```ts

import {  digitUppercase } from "quick-utils-js";

console.log( digitUppercase ( 100.98 ) ); // 壹佰元玖角捌分


```
## 获取文件后缀名

- 描述

根据文件名称获取文件后缀名， `xxx.txt => txt`

- Type

```ts

 type getFileExtension = ( filename:string, depth?: boolean ) => string | undefined

```

- 参数说明

1. `filename` 文件名
2. `depth` 获取文件名的深度，如果为`true`, `file.tar.gz` => `tar.gz`, 反之`gz`, 默认 `false`

- 示例

```ts

import {  getFileExtension } from "quick-utils-js";

console.log( getFileExtension ('test.jpg') ); // jpg
console.log( getFileExtension ('test.tar.gz', true) ); // tar.gz


```

## 文件大小单位转换

- 描述

将文件的大小单位转化为常见的大小单位：`'KB' | 'MB' | 'GB' | 'TB'`, 保留两位小数

- Type

```ts

 type getFileSize = ( bytes : number, unitType?: 'KB' | 'MB' | 'GB' | 'TB', unit?: boolean ) => string | number

```

- 参数说明

1. `bytes` 文件字节大小
2. `unitType` 转换的尺寸类型, 不传将会自动适配单位进行转换，并返回值中，包括了单位，
3. `unit` 返回的值是否带有尺寸单位，`unitType`不传时，不会生效， 为`true`才会有单位值返回 

- 示例

```ts

import {  getFileSize } from "quick-utils-js";

console.log( getFileSize ( 1024, 'KB' ) );


```