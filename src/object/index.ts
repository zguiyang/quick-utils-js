import { isObject, isArray, getValueType, isEmptyObject } from '../helper';

import { RecordObj } from '../types';

export type CommonCallback = ( key: string, val: any ) => any;

export type ObjectEachCallback = ( key: string, val: any ) => any;

export interface ResetObjectOptions {
  array?: any,
  string?: any,
  number?: any,
  other?: any,
}

/**
 * Depth traverses the object, flattening multiple layers of objects
 * @param { RecordObj }  obj each object
 * @param { ObjectEachCallback } fn the callback function
 * @returns void
 * **/

export function objectEach ( obj: RecordObj, fn: ObjectEachCallback ): void {


  // 如果不是对象直接返回

  if ( !isObject ( obj ) ) {

    throw Error ( `obj is ${ typeof obj}` );

  }

  const keys: string[] = Object.keys ( obj );

  keys.forEach ( key => {

    const value = obj[ key ];

    if ( isObject ( value ) && value ) {

      objectEach ( value, fn );

    } else {

      fn ( key, value );

    }

  } );

}

/**
* object diff
* @param { RecordObj } original original object
* @param { RecordObj } target target object
* @returns new diff object
 * **/

export function objectDiff<T=any> ( original: RecordObj, target: RecordObj ): T {

  const result: RecordObj = {};

  const targetKeys: string[] = Object.keys ( target );

  targetKeys.forEach ( key => {

    // 新增的属性

    if ( !original[ key ] ) {

      result[ key ] = target[ key ];

      return;

    }

    // 属性是个对象

    if ( isObject ( target[ key ] ) ) {

      let values = objectDiff ( original[ key ] || {}, target[ key ] );

      if ( !isEmptyObject ( values ) ) {

        result[ key ] = values;

      }

      return;

    }

    // 属性是个数组

    if ( isArray ( target[ key ] ) ) {

      if ( isArray ( original[ key ] ) ) {

        result[ key ] = [];

        target[ key ].forEach ( ( item, index ) => {

          const temp = original[ key ][ index ];

          if ( isObject ( item ) && isObject ( temp ) ) {

            result[ key ][ index ] = objectDiff ( temp, item );

          } else {

            if ( item !== temp ) {

              result[ key ][ index ] = item;

            }

          }

        } );

      } else {

        if ( target[ key ] !== original[ key ] ) {

          result[ key ] = target[ key ];

        }

      }

      return;

    }

    // 属性值更新了

    if ( original[ key ] !== target[ key ] ) {

      result[ key ] = target[ key ];

    }

  } );

  return result;

}

/**
 * @desc reset object value
 * @param { Object } obj target object
 * @param { ResetObjectOptions } options options
 * @return { Object }
 * */

export function resetObjectValue<T=any> ( obj, options?: ResetObjectOptions ): T {

  const resetOptions: ResetObjectOptions = options || {
    array: [],
    string: null,
    number: null,
    other: null,
  };

  for ( const key in obj ) {

    const currentVal = obj[ key ];

    const currentType = getValueType ( currentVal );

    if ( currentType === 'object' ) {

      obj[ key ] = resetObjectValue ( currentVal, options );

    } else {

      obj[ key ] = resetOptions.hasOwnProperty ( currentType ) ? resetOptions[ currentType ] : resetOptions.other;

    }

  }

  return obj;

}