var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
import { isObject, isArray, isEmptyObject } from '../helper/util';
function objectEach(obj, fn) {
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
;
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
function objectDiff(original, target) {
    var result = {};
    var targetKeys = Object.keys(target);
    targetKeys.forEach(function (key) {
        if (!original[key]) {
            result[key] = target[key];
            return;
        }
        if (isObject(target[key])) {
            var values = objectDiff(original[key] || {}, target[key]);
            if (isEmptyObject(values)) {
                result[key] = values;
            }
            return;
        }
        if (isArray(target[key])) {
            result[key] = target[key];
            return;
        }
        if (original[key] !== target[key]) {
            result[key] = target[key];
        }
    });
    return result;
}
function objectToQueryString(obj) {
    return obj
        ? Object.entries(obj).reduce(function (queryString, _a) {
            var _b = __read(_a, 2), key = _b[0], val = _b[1];
            var symbol = queryString.length === 0 ? '' : '&';
            if (isObject(val) || isArray(val)) {
                queryString += val ? "" + symbol + key + "=" + JSON.stringify(val) : '';
            }
            else {
                queryString += val ? "" + symbol + key + "=" + val : '';
            }
            return queryString;
        }, '')
        : '';
}
function objectToString(obj, separator, callback) {
    var e_1, _a;
    var queryStr = '';
    try {
        for (var _b = __values(Object.entries(obj)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var _d = __read(_c.value, 2), key = _d[0], value = _d[1];
            if (callback) {
                callback(key, value);
            }
            else {
                queryStr += key + ":" + value + (separator || ';');
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return queryStr;
}
export { objectDiff, objectClone, objectToString, objectToQueryString, objectEach };
