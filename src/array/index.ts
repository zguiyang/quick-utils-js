import { RecordObj } from '../types';

import { isArray } from '../helper';

/**
 * @desc 数组去重，针对object去重
 * @param { Array<any> } arr  去重的数组
 * @return {  Array<any>> }
 * **/

export function uniqueArrayObj<T=RecordObj> ( arr:T[] ): T[] {

  let hashTable = {};

  return arr.filter ( ( el ) => {

    let key = JSON.stringify ( el );

    let match = Boolean ( hashTable[ key ] );

    return ( match ? false : hashTable[ key ] = true );

  } );

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

/**
* @desc 数组递归遍历通用方法, 生成新的数组并返回
 * @param { array } data 遍历的数组
 * @param { function } callback 每次遍历的回调函数
 * @param { string } childKey 递归的数组key名
 * @return { array }
* */

export function arrayRecursionUtil<T = any, R = any> ( data: T[], callback: ( item: T ) => R, childKey = 'children' ): R[] {

  let result: R[] = [];

  const eachItemFn = ( list: T[] ): R[] => {

    const childList: R[] = [];

    list.forEach ( item => {

      const current = item[ childKey ] || [];

      if ( current.length ) {

        item[ childKey ] = eachItemFn ( current );

      }

      childList.push ( callback ( item ) );

    } );

    return childList;

  };

  result = eachItemFn ( data );

  return result;

}

/**
 *
 * @desc 扁平化数组：就是将一个多级数组拍平成一个一级数组
 * @param { any[] } data 需要扁平化的数组
 * @param { string } childKey 递归子级key
 * @return { array }
 * **/

export function flatArrayData<T = any> ( data: T[], childKey = 'children' ): T[] {

  const result: T[] = [];

  function flatMap ( list: T[] ) {

    list.forEach ( item => {

      if ( item && isArray ( item[ childKey ] ) ) {

        return flatMap ( item[ childKey ] );

      }

      result.push ( item );

    } );

  }

  flatMap ( data );

  return result;

}

/**
 *@desc 数组切割, [ 1, 2, 3, 4, 5, 6 ]  => [ [ 1, 2, 3 ], [ 4, 5, 6 ] ]
 * @param { Array } arr 进行切割的数组
 * @param { number } step 切割的步长
 * @return { Array<Array> }
 */

export function sliceArray<T=any> ( arr: T[], step: number ): Array<T[]> {

  let result: Array<T[]> = [];

  let len = arr.length;

  for ( let i = 0; i < len; i += step ) {

    result.push ( arr.slice ( i, i + step ) );

  }

  return result;

}

console.log ( sliceArray ( [ 1, 2, 3, 4, 5, 6 ], 3 ) );