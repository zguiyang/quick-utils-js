# Changelog



### [1.3.6](https://github.com/zguiyang/quick-utils-js/compare/v1.3.4...v1.3.6) (2023-06-19)


### ✨ 新功能

* :sparkles: add depth param for `getFileExtension` ([53ab1d1](https://github.com/zguiyang/quick-utils-js/commit/53ab1d15d1eaae6daf3b5b74be474c0284dafb04))

### [1.3.5](https://github.com/zguiyang/quick-utils-js/compare/v1.3.4...v1.3.5) (2023-03-15)


### ✨ 新功能

* :sparkles: add `replaceWhiteSpace` function for replace white space in string ([a988c0b](https://github.com/zguiyang/quick-utils-js/commit/a988c0b20268bafbb9c555740d4167f346cb93dd))
* :sparkles: add `whiteSpacesReg`function, validate white spaces in the string ([32003e1](https://github.com/zguiyang/quick-utils-js/commit/32003e1176c228c32e836fc24aac755be7ef10cd))
### [1.3.4](https://github.com/zguiyang/quick-utils-js/compare/v1.3.3...v1.3.4) (2023-03-12)


### 🐛 Bug 修复

* **object:** :bug: fixed custom set key value bug for `resetObjectValue` ([d5e18b9](https://github.com/zguiyang/quick-utils-js/commit/d5e18b95a9e17f5eb85ae108752502ac1cd8eadd))


### ✨ 新功能

* 🎉 新增`base64Reg`方法，用于校验`base64`字符串的合法性 ([b5a0239](https://github.com/zguiyang/quick-utils-js/commit/b5a02391cbd7162b71a40ae5f994917d8e8f2c4b))
* add search plugin in docs ([9cd29e0](https://github.com/zguiyang/quick-utils-js/commit/9cd29e00bd9285c3ab9cede2519a8502211cc16e))
* **date:** :sparkles: `timestamp` parameter is updated non-required ([13e97e2](https://github.com/zguiyang/quick-utils-js/commit/13e97e2472f37945afd7704473e535b43d8345e2))

### [1.3.3](https://github.com/zguiyang/quick-utils-js/compare/v1.3.2...v1.3.3) (2022-09-24)


### ⏪ 回滚功能或版本

* ⏪ 回滚代码，移除`es5`的打包产物及配置 ([74ecec2](https://github.com/zguiyang/quick-utils-js/commit/74ecec2ce3652c08cc8cd0e448c5d34014dd75ed))


### 🐛 Bug 修复

* 🐛 `numberCalculate`中的`calcType` 类型错误 ([8a00e49](https://github.com/zguiyang/quick-utils-js/commit/8a00e4938f8d41bf421c905dbff2621e8789902b))
* 🐛 `numberCalculate` 修复 `calcType`错误 ([65e85b7](https://github.com/zguiyang/quick-utils-js/commit/65e85b77df49f67ff7d793885c23db9a3e9e56a4))
* 🐛  `getRemainTime`参数类型错误 ([3a3ddbc](https://github.com/zguiyang/quick-utils-js/commit/3a3ddbc7c6e4625a1f7f0f93c8fc7225ac63a4f5))
* 🐛 `numberCalculate` Problem of calculation accuracy ([15a3369](https://github.com/zguiyang/quick-utils-js/commit/15a33698d57e0adec7e58ae5ba9c9b0b8a8dd7b3))
* 🐛 `numberCalculate`修复大数计算精度问题 ([ecc5b46](https://github.com/zguiyang/quick-utils-js/commit/ecc5b46cd84ea9e9816b1b2ab90a93bdf7bf56df))


### ⚡ 性能优化

* ⚡️ `arrayRecursionMap``callback`返回值增加有效数据验证 ([551780b](https://github.com/zguiyang/quick-utils-js/commit/551780b44a2603c2fe9738ffa6f743ff97bff30b))
* ⚡️ 移除`resetObjectValue`中的`es语法`，防止在某些情况下出现不兼容问题 ([2e0b697](https://github.com/zguiyang/quick-utils-js/commit/2e0b697b2bd0df7d8f5a415b5d10a8f8f29d4741))


### 🎉 新功能

* 🎉 `helper.ts`新增`isUndefined`、`isFormData`、`isFile`、`isBlob` ([bf56187](https://github.com/zguiyang/quick-utils-js/commit/bf5618730f3119eb7addce59d5817e284b99ee87))
* 🎉 `object.ts`新增`objectToFormData` ([eb03e85](https://github.com/zguiyang/quick-utils-js/commit/eb03e85ddf6b7c8900597433d19cced6eac17d5e))
* 🎉 增加`arrayDeepFilter`数组递归过滤 ([f52899d](https://github.com/zguiyang/quick-utils-js/commit/f52899d89f943d56957e19deb9329a6e682e9ab5))
* 🎉 新增`getFileSize`文件单位转换 ([49fbea2](https://github.com/zguiyang/quick-utils-js/commit/49fbea23efd964a577d68cb147a56d39bfcff4a1))

### [1.3.2](https://github.com/zguiyang/quick-utils-js/compare/v1.3.1...v1.3.2) (2022-09-14)


### 🐛 Bug 修复

* 🐛 紧急修复`webpack`等打包器低版本不支持`es2020`语法问题，打包产物改为`es5` ([0e09250](https://github.com/zguiyang/quick-utils-js/commit/0e09250c7acd96d237e4140ecabf2e32b1345528))

### [1.3.1](https://github.com/zguiyang/quick-utils-js/compare/v1.3.0...v1.3.1) (2022-09-13)


### ⚠ BREAKING CHANGES

* `resetObjectValue`的`options`参数已经更改，无法与之前的方法兼容，使用者请及时修正更新

### 🎉 新功能

* 🎉  `resetObjectValue` 新增 `ignore`、`resetKeyValues` 参数 ([be21cf7](https://github.com/zguiyang/quick-utils-js/commit/be21cf70c1a27aa44f80c1f8940a07acff0b2515))
* 🎉 `getValueType`返回值增加类型提示增强 ([ae29233](https://github.com/zguiyang/quick-utils-js/commit/ae2923395ee142b340ea275d05aebf14a90eb188))
* 🎉 新增辅助方法: `isAsyncFunction`、`isPlainFunction` ([d51ba5f](https://github.com/zguiyang/quick-utils-js/commit/d51ba5f5c5b2484a997654bcc596bcdce96422b1))
* 🎉 新增辅助方法：`isDate` ([e661edc](https://github.com/zguiyang/quick-utils-js/commit/e661edcb79271a8436b2b3cab8ffb2dba65da6b2))
* 🎉 新增辅助方法：`isNull` ([a8ef596](https://github.com/zguiyang/quick-utils-js/commit/a8ef596b723d2a9d34dd86ded96067c7bf562303))
* 🎉 新增辅助方法：`isPromise` ([15910e5](https://github.com/zguiyang/quick-utils-js/commit/15910e5892f2b04415c85c122e7e8cde70c21486))

## [1.3.0](https://github.com/zguiyang/quick-utils-js/compare/v1.2.0...v1.3.0) (2022-09-12)


### ⚠ BREAKING CHANGES

* 移除了之前的正则方法，现在的正则校验是一个全新的模块
* `scrollToTop`移除，`setScrollTop` 移除返回值

### ♻️ 代码重构

* ♻️   dom模块方法重构，`scrollTo` 增加类型约束，`setScrollTop` 设置默认值 ([176dc34](https://github.com/zguiyang/quick-utils-js/commit/176dc340125b77e831df179c696b224baaf0cd40))


### 🎉 新功能

*  🎉`uniqueArrayObj`支持根据`key`去重 ([937366e](https://github.com/zguiyang/quick-utils-js/commit/937366ef083afbfea6e3f8be23ef8bd773fa2a2a))
* 🎉 `getRemainTime`  参数增加类型约束 ([dc99e78](https://github.com/zguiyang/quick-utils-js/commit/dc99e78761aa9bef961c74c3af8c996b6e7b5f57))
* 🎉 随机ID生成，固定为16位 ([ad41d76](https://github.com/zguiyang/quick-utils-js/commit/ad41d76551f770e456f7f31588e9380d2096aa87))
* 🎉 正则校验模块增加多个校验方法 ([f92f253](https://github.com/zguiyang/quick-utils-js/commit/f92f25350733b949d57e203c0f22a6320102482a))

## [1.2.0](https://github.com/zguiyang/quick-utils-js/compare/v1.1.0...v1.2.0) (2022-07-09)


### 🎉 新功能

*  🎉 增加随机id方法 ([464c4ad](https://github.com/zguiyang/quick-utils-js/commit/464c4adf6e824d8d14b6c4d2bd731793d354edf7))


### 🐛 Bug 修复

* 🐛  修复邮箱正则校验bug ([99d0318](https://github.com/zguiyang/quick-utils-js/commit/99d031899b1d280dae7906a26ca5d7f6baa495bb))

### [1.1.0](https://github.com/zguiyang/quick-utils-js/compare/v1.0.4...v1.1.0) (2022-06-09)


### 🎉 新功能

* **helper/:** add getValueType ([1475b24](https://github.com/zguiyang/quick-utils-js/commit/1475b247b63b320adc645791fcb4deab4d4901a3))
* **helper/:** add getValueType ([d7f4a70](https://github.com/zguiyang/quick-utils-js/commit/d7f4a70788240aad414f926dfe849b8f313ceaaf))
* **object/:** resetObjectValue update ([3946da1](https://github.com/zguiyang/quick-utils-js/commit/3946da10f1f654047ce3f3bcd88fe1b07e126c56))
* **object/:** resetObjectValue update ([c60ea38](https://github.com/zguiyang/quick-utils-js/commit/c60ea388211dbe47de876a3c433b26fcadb7b5cf))

## 1.0.4

### Breaking Changes

1. delete ``utils/copyToClipboard``

2. delete ``helper/isSupportWebP``、``helper/arrayEqual``

### 🐛 Bug 修复

1. Fixed bug where console error messages appear in production environment


## 1.0.3

### Breaking Changes

1. ``regex/index``, function name update, ``isUrl => isDomainUrl``、``isColor => isHexColor``