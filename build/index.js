(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.index = {}));
}(this, (function (exports) { 'use strict';

  function isArray(key) {
      return Object.prototype.toString.call(key) === '[object Array]';
  }
  function isObject(key) {
      return Object.prototype.toString.call(key) === '[object Object]';
  }
  function isEmptyObject(obj) {
      return Object.keys(obj).length !== 0;
  }

  /**
   * 深度遍历对象, 将多层对象扁平化
   * @param { object } obj 遍历对象
   * @param { function } fn 每一个key执行的方法
   * **/
  function objectEach(obj, fn) {
      // 如果不是对象直接返回
      if (!isObject(obj)) {
          throw Error('Parameter must be object');
      }
      var keys = Object.keys(obj);
      keys.forEach(function (key) {
          var value = obj[key];
          if (isObject(value) && value) {
              objectEach(value, fn);
          }
          else {
              fn(value, key);
          }
      });
  }
  /**
   * 对象深拷贝
   * @param { object } target 需要拷贝的对象
   * */
  function objectClone(target) {
      var result = target.constructor === Array ? [] : {};
      for (var key in target) {
          if (target.hasOwnProperty(key)) {
              if (target[key] && isObject(target[key])) {
                  result[key] = target[key].constructor === Array ? [] : {};
                  result[key] = objectClone(target[key]);
              }
              else {
                  result[key] = target[key];
              }
          }
      }
      return result;
  }
  /**
  * 对象比较(不比较原型链的属性)
  * @param original 原始对象
  * @param target 目标对象
   *
   * **/
  function objectDiff(original, target) {
      var result = {};
      var targetKeys = Object.keys(target);
      targetKeys.forEach(function (key) {
          // 新增的属性
          if (!original[key]) {
              result[key] = target[key];
              return;
          }
          // 属性是个对象
          if (isObject(target[key])) {
              var values = objectDiff(original[key] || {}, target[key]);
              if (isEmptyObject(values)) {
                  result[key] = values;
              }
              return;
          }
          // 属性是个数组
          if (isArray(target[key])) {
              result[key] = target[key];
              return;
          }
          // 属性值更新了
          if (original[key] !== target[key]) {
              result[key] = target[key];
          }
      });
      return result;
  }
  /**
   *  将对象转化为key+value 字符串
   * @param { object } obj 需要转化的object
   * @param { string } separator 分隔符号
   * @param { Function } callback 自定义处理回调函数
   */
  function objectToString(obj, separator, callback) {
      var queryStr = '';
      for (var _i = 0, _a = Object.entries(obj); _i < _a.length; _i++) {
          var _b = _a[_i], key = _b[0], value = _b[1];
          if (callback) {
              callback(key, value);
          }
          else {
              queryStr += key + ": " + value + (separator || ';');
          }
      }
      return queryStr;
  }

  // 函数执行相关
  /**
   * 函数防抖 (只执行最后一次点击)
   * @param { function } fn  执行的函数
   * @param { number } time 延迟执行时间
   */
  function debounce(fn, time) {
      var delay = time || 500;
      var timer = null;
      return function () {
          var that = this;
          var args = arguments;
          if (timer) {
              clearTimeout(timer);
          }
          timer = setTimeout(function () {
              timer = null;
              fn.apply(that, args);
          }, delay);
      };
  }
  /**
   *  函数节流
   * @param { function } fn  执行的函数
   * @param { number } time 延迟执行时间
   *
   */
  function throttle(fn, time) {
      var last = 0;
      var timer = null;
      var interval = time || 500;
      return function () {
          var that = this;
          var args = arguments;
          var now = +new Date();
          if (last && now - last < interval) {
              clearTimeout(timer);
              timer = setTimeout(function () {
                  last = now;
                  fn.apply(that, args);
              }, interval);
          }
          else {
              last = now;
              fn.apply(that, args);
          }
      };
  }

  /**
   * 获取url参数
   *
   */
  function getURLParameters(url) {
      var result = {};
      var urlArr = url.match(/([^?=&]+)(=([^&]*))/g) || [];
      result = urlArr.reduce(function (a, v) { return ((a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1)), a); }, {});
      return result;
  }

  exports.debounce = debounce;
  exports.getURLParameters = getURLParameters;
  exports.objectClone = objectClone;
  exports.objectDiff = objectDiff;
  exports.objectEach = objectEach;
  exports.objectToString = objectToString;
  exports.throttle = throttle;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
