# 更新日志



## [1.3.0](https://github.com/zguiyang/quick-utils-js/compare/v1.2.0...v1.3.0) (2022-09-12)


### ⚠ BREAKING CHANGES

* 移除了之前的正则方法，现在的正则校验是一个全新的模块
* `scrollToTop`移除，`setScrollTop` 移除返回值

### ⚡ 性能优化

* ✅  测试工具替换为vitest ([6409b5d](https://github.com/zguiyang/quick-utils-js/commit/6409b5d5e248c5f22cbdddaf41f5c8cbdc623e31))


### ♻️ 代码重构

* ♻️   dom模块方法重构，`scrollTo` 增加类型约束，`setScrollTop` 设置默认值 ([176dc34](https://github.com/zguiyang/quick-utils-js/commit/176dc340125b77e831df179c696b224baaf0cd40))


### 🎉 新功能

*  🎉`uniqueArrayObj`支持根据`key`去重 ([937366e](https://github.com/zguiyang/quick-utils-js/commit/937366ef083afbfea6e3f8be23ef8bd773fa2a2a))
* 🎉 `getRemainTime`  参数增加类型约束 ([dc99e78](https://github.com/zguiyang/quick-utils-js/commit/dc99e78761aa9bef961c74c3af8c996b6e7b5f57))
* 🎉 随机ID生成，固定为16位 ([ad41d76](https://github.com/zguiyang/quick-utils-js/commit/ad41d76551f770e456f7f31588e9380d2096aa87))
* 🎉 正则校验模块增加多个校验方法 ([f92f253](https://github.com/zguiyang/quick-utils-js/commit/f92f25350733b949d57e203c0f22a6320102482a))
* 🎉 add `enhanceTypeof` in `helper.ts` ([5c639c1](https://github.com/zguiyang/quick-utils-js/commit/5c639c1179f39feeb00b8b1d0b8509bf8d101601))

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