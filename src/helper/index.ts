export type ValueTypeEnum = 'string' | 'number' | 'boolean' | 'object' | 'array' | 'asyncFunction' | 'function'
| 'date' | 'null' | 'promise' | 'unknown';

export const isNumber = ( data:any ):boolean => typeof data === 'number';

export const isString = ( data:any ):boolean => typeof data === 'string';

export const isBoolean = ( data:any ):boolean => typeof data === 'boolean';

export const isArray = ( data:any ):boolean => Object.prototype.toString.call ( data ) === '[object Array]';

export const isObject = ( data:any ):boolean => Object.prototype.toString.call ( data ) === '[object Object]';

export const isEmptyArray = ( data: any ):boolean => isArray ( data ) && !data.length;

export const isEmptyObject = ( data:any ):boolean => isObject ( data ) ? !Object.keys ( data ).length : false;

export const isPromise = ( fn: any ): boolean => Object.prototype.toString.call ( fn ) === '[object Promise]';

export const isNull = ( data: any ): boolean => Object.prototype.toString.call ( data ) === '[object Null]';

export const isDate = ( data: any ): boolean => Object.prototype.toString.call ( data ) === '[object Date]';

export const isAsyncFunction = ( fn: any ): boolean => Object.prototype.toString.call ( fn ) === '[object AsyncFunction]';

export const isPlainFunction = ( fn: any ): boolean => Object.prototype.toString.call ( fn ) === '[object Function]';

export function getValueType ( data: any ): ValueTypeEnum | string {

  return Object.prototype.toString.call ( data ).slice ( 8, -1 ).
    toLowerCase ( );

}