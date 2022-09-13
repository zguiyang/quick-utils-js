export type ValueTypeEnum = 'string' | 'number' | 'boolean' | 'object' | 'array' | 'unknown';

export const isNumber = ( data:any ):boolean => typeof data === 'number';

export const isString = ( data:any ):boolean => typeof data === 'string';

export const isBoolean = ( data:any ):boolean => typeof data === 'boolean';

export const isArray = ( data:any ):boolean => Object.prototype.toString.call ( data ) === '[object Array]';

export const isObject = ( data:any ):boolean => Object.prototype.toString.call ( data ) === '[object Object]';

export const isEmptyArray = ( data: any ):boolean => isArray ( data ) && !data.length;

export const isEmptyObject = ( data:any ):boolean => isObject ( data ) ? !Object.keys ( data ).length : false;

export const isAsyncFunction = ( fn: any ): boolean => Object.prototype.toString.call ( fn ) === '[object AsyncFunction]';

export const isPlainFunction = ( fn: any ): boolean => Object.prototype.toString.call ( fn ) === '[object Function]';

export function getValueType ( data: any ): ValueTypeEnum | string {

  return Object.prototype.toString.call ( data ).slice ( 8, -1 ).
    toLowerCase ( );

}