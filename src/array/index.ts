import { RecordObj } from '../types';

import { isArray } from '../helper';

/**
 * @desc Array decrement, object decrement
 * @param { Array<any> } arr  decrement array
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
* @desc Array recursively traverses the generic method, generating a new array and returning it
 * @param { array } data each element of the array
 * @param { function } callback each element of the function
 * @param { string } childKey  the key of the child
 * @return { array }
* */

export function arrayRecursionMap<T = any, R = any> ( data: T[], callback: ( item: T ) => R, childKey = 'children' ): R[] {

  let result: R[] = [];

  const eachItemFn = ( list: T[] ): R[] => {

    const childList: R[] = [];

    list.forEach ( item => {

      const current = item[ childKey ];

      if ( current && current.length ) {

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
 * @desc Flattening an array
 * @param { any[] } data flat array
 * @param { string } childKey flat child key
 * @return { array }
 * **/

export function flatTreeArray<T = any> ( data: T[], childKey = 'children' ): T[] {

  const result: T[] = [];

  function flatMap ( list: T[] ) {

    list.forEach ( item => {

      const temp = { ...item };

      if ( isArray ( item[ childKey ] ) ) {

        delete temp[ childKey ];

        result.push ( temp );

        return flatMap ( item[ childKey ] );

      }

      result.push ( item );

    } );

  }

  flatMap ( data );

  return result;

}

/**
 *@desc split array, [ 1, 2, 3, 4, 5, 6 ]  => [ [ 1, 2, 3 ], [ 4, 5, 6 ] ]
 * @param { Array } arr split array
 * @param { number } step  split step
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