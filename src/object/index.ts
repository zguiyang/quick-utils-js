import { isObject, isArray, isEmptyObject } from '../helper';

/**
 * Depth traverses the object, flattening multiple layers of objects
 * @param { Record<string, any> }  obj each object
 * @param { ( key: string, val: any ) => any } fn the callback function
 * @returns void
 * **/

export function objectEach ( obj: Record<string, any>, fn: ( key: string, val: any ) => any ): void {

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

      const values = objectDiff ( original[ key ] || {}, target[ key ] );

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
 * @param { object } options options
 * @param { array } options.ignore set ignore keys
 * @param { object } options.resetKeyValues set key value
 * @return { Object }
 * */

export function resetObjectValue<T=any> ( obj, options?: {
  ignore?: any[],
  resetKeyValues?: Record<string, any>,
} ): T {

  const ignoreKeys = options ? ( options.ignore || [] ) : [];

  const resetKeyValues = options ? ( options.resetKeyValues || {} ) : {};

  for ( const key in obj ) {

    if ( !ignoreKeys.includes ( key ) ) {

      const currentVal = obj[ key ];

      if ( isObject ( currentVal ) ) {

        obj[ key ] = resetObjectValue ( currentVal, options );

      } else {

        obj[ key ] = resetKeyValues[ key ] || null;

      }

    }

  }

  return obj;

}