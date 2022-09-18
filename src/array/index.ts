import { isArray } from '../helper';

/**
 * @desc Array decrement, object decrement
 * @param { Array<any> } arr  decrement array
 * @param { string } key Array decrement for key
 * @return {  Array<any>> }
 * **/

export function uniqueArrayObj<T=Record<string, any>> ( arr:T[], key?:string ): T[] {

  let result:any[] = [];

  const hashTable = {};

  if ( key ) {

    arr.forEach ( ( item ) => {

      if ( !hashTable[ item[ key ] ] ) {

        hashTable[ item[ key ] ] = item;

      }

    } );

    result = Object.values ( hashTable );

  } else {

    result = arr.filter ( ( el ) => {

      const key = JSON.stringify ( el );

      const match = Boolean ( hashTable[ key ] );

      return ( match ? false : hashTable[ key ] = true );

    } );

  }

  return result;

}

/**
* @desc Array recursively traverses the generic method, generating a new array and returning it
 * @param { array } data each element of the array
 * @param { function } callback each element of the function
 * @param { string } childKey  the key of the child
 * @return { array }
* */

export function arrayRecursionMap<T = any, R = any> ( data: T[], callback: ( item: T ) => R, childKey = 'children' ): R[] {

  const eachItemFn = ( list: T[] ): R[] => {

    const childList: R[] = [];

    list.forEach ( item => {

      const temp = callback ( item );

      if ( !temp ) {

        return;

      }

      const current = temp[ childKey ];

      if ( current && current.length ) {

        temp[ childKey ] = eachItemFn ( current );

      }

      childList.push ( temp );

    } );

    return childList;

  };

  return eachItemFn ( data );

}

/**
 * @description deep filter for array
 * @param { any[] } arr filter arr
 * @param { ( item ) => boolean } callback filter callback
 * @param { string } childrenKey  children key deep each key
 * @return array
 * **/

export function arrayDeepFilter<T=any> ( arr: T[], callback: ( item ) => boolean, childrenKey = 'children' ): Array<T> {

  function eachItem ( list: Array<T> ) {

    const result: T[] = [];

    list.forEach ( item => {

      if ( callback ( item ) ) {

        const children = item[ childrenKey ];

        if ( children && children.length ) {

          item[ childrenKey ] = eachItem ( children );

        }

        result.push ( item );

      }

    } );

    return result;

  }

  return eachItem ( arr );

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

  const result: Array<T[]> = [];

  const len = arr.length;

  for ( let i = 0; i < len; i += step ) {

    result.push ( arr.slice ( i, i + step ) );

  }

  return result;

}