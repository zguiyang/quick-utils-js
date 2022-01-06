import { RecordObj } from '../types';

export const isNumber = ( data:any ):boolean => typeof data === 'number';

export const isString = ( data:any ):boolean => typeof data === 'string';

export const isBoolean = ( data:any ):boolean => typeof data === 'boolean';

export const isArray = ( data:any ):boolean => Object.prototype.toString.call ( data ) === '[object Array]';

export const isObject = ( data:any ):boolean => Object.prototype.toString.call ( data ) === '[object Object]';

export const isEmptyArray = ( data: any[] ):boolean => !data.length;

export const isEmptyObject = ( data:RecordObj ):boolean => isObject ( data ) ? !Object.keys ( data ).length : false;