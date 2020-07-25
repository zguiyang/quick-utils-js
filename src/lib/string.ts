import { ObjectInterface } from '../types';
/**
 * 获取url参数
 * 
 */
export function getURLParameters(url: string): ObjectInterface {
  let result: ObjectInterface = {};
  const urlArr =  url.match(/([^?=&]+)(=([^&]*))/g) || [];
  console.log(urlArr);
  result = urlArr.reduce((a, v) => ((a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1)), a), {});
  return result;
}