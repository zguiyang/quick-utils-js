import { ObjectInterface } from '../interface';
/**
 * 获取url参数
 * 
 */
function getURLParameters(url: string): ObjectInterface {
  let result: ObjectInterface = {};
  const urlArr =  url.match(/([^?=&]+)(=([^&]*))/g) || [];
  result = urlArr.reduce((a, v) => ((a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1)), a), {});
  return result;
}

export { getURLParameters };