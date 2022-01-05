# quick-utils-js
[English](./README.en.md) | [Chinese](./README.md)

#### 介绍
JavaScript常用的工具函数

#### 软件架构
es6 + typescript


#### 安装教程

`npm i quick-utils-js --save ` or `yarn add quick-utils-js`

#### 使用说明
```
1. import { objectDiff } from 'quick-utils-js'
2. import * as utils from 'quick-utils-js'
3.  const utils = require('quick-utils-js')
```

### 提供方法

#### 1. 对象遍历（支持多层嵌套的对象）
```
import { objectEach } from 'quick-utils-js';

const result = {
  name: 'yang',
  age: 18,
  info: {
    money: '123',
  },
}
utils.objectEach(result, (key, value) => {
  console.log(key, value);
});
```

#### 2. 对象深拷贝
```
import { objectClone } from 'quick-utils-js';

const result = {
  name: 'yang',
  age: 18,
  info: {
    money: '123',
    wallet: {
      "money": 222,
    },
  },
}

const clone = objectClone(result);

clone.name = '123';

console.log(result.name, clone.name);
// yang 123
```

#### 3. 将对象转为 queryString
```
import { objectToQueryString } from 'quick-utils-js';

const result = {
  name: 'yang',
  age: 18,
 }

const queryString = objectToQueryString(result);

console.log(queryString);
// name=yang&age=18
```

#### 4. 将对象转为 key + value形式的字符串
```
import { objectToString } from 'quick-utils-js';


let result = {
  name: 'yang',
  age: 18,
}

let str =  objectToString(result);

console.log(str);
//  name:yang;age:18;

// 可以自定义连接的符号
let str =  objectToString(result, '**');
name:yang**age:18**

// 通过回调函数进行自定义
 objectToString(result, '', (key, value) => {
 console.log(key, value);
 // name yang  age 18
});
```

####  5. 比较两个对象值的差异,将不同的key抽出来生成一个新的对象
```
// 注：如果有相同的key，已后一个参数为准
import { objectDiff } from 'quick-utils-js';

let result1 = {
  name: 'yang',
  age: 18,
}

let result2 = {
  name: 'yang2',
  age: 18,
}

const result = objectDiff(result1, result2);

console.log(result); // {name: "yang2"}

let result1 = {
  name: 'yang',
}

let result2 = {
  name: 'yang2',
  age: 18
}

const result = objectDiff(result1, result2);

console.log(result); // {name: "yang2", age: 18}
```

####  6. 获取url参数
```
import { getURLParameters } from 'quick-utils-js';

let url = 'http://www.baidu.com?name=yang&test=123';

let query = getURLParameters(url);

console.log(query);
// {name: "yang", test: "123"}
```

目前工具库中的方法还不多，后续会持续添加