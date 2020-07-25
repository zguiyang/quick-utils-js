import { ObjectInterface } from './../types/index';

export function isNumber(key: any): boolean {
  return typeof key === 'number';
}

export function isString(key: any): boolean {
  return typeof key === 'string';
}

export function isBoolean(key: any): boolean {
  return typeof key === 'boolean';
}

export function isArray(key: any): boolean {
  return Object.prototype.toString.call(key) === '[object Array]';
}

export function isObject(key: any): boolean {
  return Object.prototype.toString.call(key) === '[object Object]';
}

export function isEmptyObject(obj: ObjectInterface): boolean {
  return Object.keys(obj).length !== 0;
}