import { isObject, isArray, isEmptyObject } from '../helper/util';
import { ObjectInterface, FunctionInterface, CallbackInterface } from '../interface';
/**
 * 深度遍历对象, 将多层对象扁平化
 * @param { object } obj 遍历对象
 * @param { function } fn 每一个key执行的方法
 * **/ 
function objectEach(obj: ObjectInterface, fn: FunctionInterface) {
  // 如果不是对象直接返回
    if (!isObject(obj)) {
      throw Error('Parameter must be object');
    }
    const keys: string[] = Object.keys(obj);
    keys.forEach(key => {
      const value  = obj[key];
     if (isObject(value) && value) {
      objectEach(value, fn);
     } else {
      fn(key, value);
     }
    });
};

/**
 * 对象深拷贝
 * @param { object } target 需要拷贝的对象
 * */

function objectClone(target: ObjectInterface): ObjectInterface {
  const result: ObjectInterface = target.constructor === Array ? [] : {};
  for (let key in target) {
    if (target.hasOwnProperty(key)) {
      if (target[key] && isObject(target[key])) {
        result[key] = target[key].constructor === Array ? [] : {};
        result[key] = objectClone(target[key]);
      } else {
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
function objectDiff(original: ObjectInterface, target: ObjectInterface): ObjectInterface { 

  const result: ObjectInterface = {};

  const targetKeys: string[] = Object.keys(target);

targetKeys.forEach(key => {

  // 新增的属性
  if (!original[key]) {
    result[key] = target[key];
    return;
  }

  // 属性是个对象
  if (isObject(target[key])) {
    let values = objectDiff(original[key] || {}, target[key]);
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
 * 将对象转为字符串
 * @param { object } obj 需要转化的对象
*/
function objectToQueryString(obj: ObjectInterface): string {
  return obj
    ? Object.entries(obj).reduce((queryString, [key, val]) => {
      const symbol = queryString.length === 0 ? '' : '&';
      if (isObject(val) || isArray(val)) {
        queryString += val ? `${symbol}${key}=${JSON.stringify(val)}` : '';
      } else {
        queryString += val ? `${symbol}${key}=${val}` : '';
      }
      return queryString;
    }, '')
    : '';
}

 /**
  *  将对象转化为key+value 字符串
  * @param { object } obj 需要转化的object
  * @param { string } separator 分隔符号
  * @param { Function } callback 自定义处理回调函数
  */

function objectToString(obj: ObjectInterface, separator?: string, callback?:CallbackInterface<[ string, any], void>) {
    let queryStr = '';
    for (const [key, value] of Object.entries(obj)) {
      if (callback) {
        callback(key, value);
      } else {
        queryStr +=`${key}:${value}${separator || ';'}`;
      }
    }
     return queryStr;
  }

  export { objectDiff, objectClone, objectToString,
    objectToQueryString, objectEach }