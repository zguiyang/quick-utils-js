export const isNumber = ( data:any ):boolean => typeof data === 'number';

export const isString = ( data:any ):boolean => typeof data === 'string';

export const isBoolean = ( data:any ):boolean => typeof data === 'boolean';

export const isArray = ( data:any ):boolean => Object.prototype.toString.call ( data ) === '[object Array]';

export const isObject = ( data:any ):boolean => Object.prototype.toString.call ( data ) === '[object Object]';

export const isEmptyArray = ( data: any ):boolean => isArray ( data ) && !data.length;

export const isEmptyObject = ( data:any ):boolean => isObject ( data ) ? !Object.keys ( data ).length : false;

/**
 *
 * @desc 判断浏览器是否支持webP格式图片
 * @return {Boolean}
 */

export function isSupportWebP (): boolean {

  return !![].map && document.createElement ( 'canvas' ).toDataURL ( 'image/webp' ).
    indexOf ( 'data:image/webp' ) === 0;

}

/**
 * @desc JS判断两个数组是否相等
 * @param { array } arr1
 * @param { array } arr2
 * @returns { boolean } 返回true 或 false
 */

export function arrayEqual ( arr1:any[], arr2:any[] ): boolean {

  if ( arr1 === arr2 ) return true;

  if ( arr1.length !== arr2.length ) return false;

  for ( let i = 0; i < arr1.length; ++ i ) {

    if ( arr1[ i ] !== arr2[ i ] ) return false;

  }

  return true;

}