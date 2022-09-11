import { isObject, isArray, getValueType, isEmptyObject } from '../helper';

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
 * @param { Record<string, any> }  obj each object
 * @param { ObjectEachCallback } fn the callback function
 * @returns void
 * **/

export function objectEach ( obj: Record<string, any>, fn: ObjectEachCallback ): void {

  if ( !isObject ( obj ) ) {

    throw Error ( `obj is ${ typeof obj}` );

  }

  const keys: string[] = Object.keys ( obj );

  keys.forEach ( key => {

    const value = obj[ key ];

    if ( value && isObject ( value ) ) {

      objectEach ( value, fn );

    } else {

      fn ( key, value );

    }

  } );

}

/**
* object diff
* @param { Record<string, any> } original original object
* @param { Record<string, any> } target target object
* @returns new diff object
 * **/

export function objectDiff<T=any> ( original: Record<string, any>, target: Record<string, any> ): T {

  const result: Record<string, any> = {};

  const targetKeys: string[] = Object.keys ( target );

  targetKeys.forEach ( key => {

    if ( !original[ key ] ) {

      result[ key ] = target[ key ];

      return;

    }

    if ( isObject ( target[ key ] ) ) {

      let values = objectDiff ( original[ key ] || {}, target[ key ] );

      if ( !isEmptyObject ( values ) ) {

        result[ key ] = values;

      }

      return;

    }

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

    if ( original[ key ] !== target[ key ] ) {

      result[ key ] = target[ key ];

    }

  } );

  return result as T;

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