# quick-utils-js

[English](./README.en.md) | [Chinese](./README.md)

#### Introduction
JavaScript commonly used tool functions

#### Software Architecture
es6 + typescript


#### installation

`npm i quick-utils-js --save ` or `yarn add quick-utils-js`

#### Use
```
1. import { objectDiff } from 'quick-utils-js'
2. import * as utils from 'quick-utils-js'
3.  const utils = require('quick-utils-js')
```

###  basic function

#### 1. Object traversal (supports multiple levels of nested objects)
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

#### 2. Object deep copy
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

#### 3. object to queryString
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

#### 4. object to key + value string
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

####  5. object diff
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

####  6. get url params
```
import { getURLParameters } from 'quick-utils-js';

let url = 'http://www.baidu.com?name=yang&test=123';

let query = getURLParameters(url);

console.log(query);
// {name: "yang", test: "123"}
```

 There are not many methods in the tool library, and will continue to be added in the future