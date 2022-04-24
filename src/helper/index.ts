export type ValueTypeEnum = 'string' | 'number' | 'boolean' | 'object' | 'array' | 'unknown';


export const isNumber = ( data:any ):boolean => typeof data === 'number';

export const isString = ( data:any ):boolean => typeof data === 'string';

export const isBoolean = ( data:any ):boolean => typeof data === 'boolean';

export const isArray = ( data:any ):boolean => Object.prototype.toString.call ( data ) === '[object Array]';

export const isObject = ( data:any ):boolean => Object.prototype.toString.call ( data ) === '[object Object]';

export const isEmptyArray = ( data: any ):boolean => isArray ( data ) && !data.length;

export const isEmptyObject = ( data:any ):boolean => isObject ( data ) ? !Object.keys ( data ).length : false;

export function getValueType ( data: any ): ValueTypeEnum {

  if ( isNumber ( data ) ) {

    return 'number';

  } else if ( isString ( data ) ) {

    return 'string';

  } else if ( isBoolean ( data ) ) {

    return 'boolean';

  } else if ( isArray ( data ) ) {

    return 'array';

  } else if ( isObject ( data ) ) {

    return 'object';

  } else {

    return 'unknown';

  }

}