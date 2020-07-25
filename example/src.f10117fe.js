// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/helper/util.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isEmptyObject = exports.isObject = exports.isArray = exports.isBoolean = exports.isString = exports.isNumber = void 0;

function isNumber(key) {
  return typeof key === 'number';
}

exports.isNumber = isNumber;

function isString(key) {
  return typeof key === 'string';
}

exports.isString = isString;

function isBoolean(key) {
  return typeof key === 'boolean';
}

exports.isBoolean = isBoolean;

function isArray(key) {
  return Object.prototype.toString.call(key) === '[object Array]';
}

exports.isArray = isArray;

function isObject(key) {
  return Object.prototype.toString.call(key) === '[object Object]';
}

exports.isObject = isObject;

function isEmptyObject(obj) {
  return Object.keys(obj).length !== 0;
}

exports.isEmptyObject = isEmptyObject;
},{}],"src/lib/object.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.objectEach = exports.objectToString = exports.objectClone = exports.objectDiff = void 0;

var util_1 = require("../helper/util");
/**
 * 深度遍历对象, 将多层对象扁平化
 * @param { object } obj 遍历对象
 * @param { function } fn 每一个key执行的方法
 * **/


function objectEach(obj, fn) {
  // 如果不是对象直接返回
  if (!util_1.isObject(obj)) {
    throw Error('Parameter must be object');
  }

  var keys = Object.keys(obj);
  keys.forEach(function (key) {
    var value = obj[key];

    if (util_1.isObject(value) && value) {
      objectEach(value, fn);
    } else {
      fn(value, key);
    }
  });
}

exports.objectEach = objectEach;
;
/**
 * 对象深拷贝
 * @param { object } target 需要拷贝的对象
 * */

function objectClone(target) {
  var result = target.constructor === Array ? [] : {};

  for (var key in target) {
    if (target.hasOwnProperty(key)) {
      if (target[key] && util_1.isObject(target[key])) {
        result[key] = target[key].constructor === Array ? [] : {};
        result[key] = objectClone(target[key]);
      } else {
        result[key] = target[key];
      }
    }
  }

  return result;
}

exports.objectClone = objectClone;
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
    } // 属性是个对象


    if (util_1.isObject(target[key])) {
      var values = objectDiff(original[key] || {}, target[key]);

      if (util_1.isEmptyObject(values)) {
        result[key] = values;
      }

      return;
    } // 属性是个数组


    if (util_1.isArray(target[key])) {
      result[key] = target[key];
      return;
    } // 属性值更新了


    if (original[key] !== target[key]) {
      result[key] = target[key];
    }
  });
  return result;
}

exports.objectDiff = objectDiff;
/**
 * 将对象转为字符串
 * @param { object } obj 需要转化的对象
*/

function objectToQueryString(obj) {
  return obj ? Object.entries(obj).reduce(function (queryString, _a) {
    var key = _a[0],
        val = _a[1];
    var symbol = queryString.length === 0 ? '' : '&';

    if (util_1.isObject(val) || util_1.isArray(val)) {
      queryString += val ? "" + symbol + key + "=" + JSON.stringify(val) : '';
    } else {
      queryString += val ? "" + symbol + key + "=" + val : '';
    }

    return queryString;
  }, '') : '';
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
    var _b = _a[_i],
        key = _b[0],
        value = _b[1];

    if (callback) {
      callback(key, value);
    } else {
      queryStr += key + ": " + value + (separator || ';');
    }
  }

  return queryStr;
}

exports.objectToString = objectToString;
},{"../helper/util":"src/helper/util.ts"}],"src/lib/function.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.throttle = exports.debounce = void 0; // 函数执行相关

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

exports.debounce = debounce;
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
    } else {
      last = now;
      fn.apply(that, args);
    }
  };
}

exports.throttle = throttle;
},{}],"src/lib/string.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getURLParameters = void 0;
/**
 * 获取url参数
 *
 */

function getURLParameters(url) {
  var result = {};
  var urlArr = url.match(/([^?=&]+)(=([^&]*))/g) || [];
  result = urlArr.reduce(function (a, v) {
    return a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1), a;
  }, {});
  return result;
}

exports.getURLParameters = getURLParameters;
},{}],"src/index.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getURLParameters = exports.throttle = exports.debounce = exports.objectEach = exports.objectToString = exports.objectClone = exports.objectDiff = void 0;

var object_1 = require("./lib/object");

Object.defineProperty(exports, "objectDiff", {
  enumerable: true,
  get: function get() {
    return object_1.objectDiff;
  }
});
Object.defineProperty(exports, "objectClone", {
  enumerable: true,
  get: function get() {
    return object_1.objectClone;
  }
});
Object.defineProperty(exports, "objectToString", {
  enumerable: true,
  get: function get() {
    return object_1.objectToString;
  }
});
Object.defineProperty(exports, "objectEach", {
  enumerable: true,
  get: function get() {
    return object_1.objectEach;
  }
});

var function_1 = require("./lib/function");

Object.defineProperty(exports, "debounce", {
  enumerable: true,
  get: function get() {
    return function_1.debounce;
  }
});
Object.defineProperty(exports, "throttle", {
  enumerable: true,
  get: function get() {
    return function_1.throttle;
  }
});

var string_1 = require("./lib/string");

Object.defineProperty(exports, "getURLParameters", {
  enumerable: true,
  get: function get() {
    return string_1.getURLParameters;
  }
});
console.log(string_1.getURLParameters('http://www.baidu.com?id=123'));
},{"./lib/object":"src/lib/object.ts","./lib/function":"src/lib/function.ts","./lib/string":"src/lib/string.ts"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "57010" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/index.ts"], null)
//# sourceMappingURL=/src.f10117fe.js.map