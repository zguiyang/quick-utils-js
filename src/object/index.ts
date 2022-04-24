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
 * 深度遍历对象, 将多层对象扁平化
 * @param { RecordObj }  obj 遍历对象
 * @param { ObjectEachCallback } fn 每一个key执行的方法
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
* 对象比较(不比较原型链的属性)
* @param { RecordObj } original 原始对象
* @param { RecordObj } target 目标对象
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
 * @desc 初始化对象属性值
 * @param { Object } obj 需要初始化对象的值
 * @param { ResetObjectOptions } options 重置数据配置项
 * @return { Object } 返回数据清空的对象
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