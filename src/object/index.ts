import { isObject, isArray, isEmptyObject } from '../helper';

import { RecordObj } from '../types';

export type CommonCallback = ( key: string, val: any ) => any;

export type ObjectEachCallback = ( key: string, val: any ) => any;

/**
 * 深度遍历对象, 将多层对象扁平化
 * @param obj 遍历对象
 * @param fn 每一个key执行的方法
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
* @param original 原始对象
* @param target 目标对象
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

      result[ key ] = target[ key ];

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
  *  将对象转化为key+value 字符串
  * @param obj 需要转化的object
  * @param separator 分隔符号
  * @param callback 自定义处理回调函数
  * @returns key + value string
  */

export function objectToString ( obj: RecordObj, separator?: string, callback?:CommonCallback ): string {

  let queryStr = '';

  for ( const [ key, value ] of Object.entries ( obj ) ) {

    if ( callback ) {

      callback ( key, value );

    } else {

      queryStr += `${key}:${value}${separator || ';'}`;

    }

  }

  return queryStr;

}


/**
 * @desc 初始化对象属性值
 * @param { Object } obj 需要初始化对象的值
 * @return { Object } 返回数据清空的对象
 * */

export function resetObjectValue<T=any> ( obj ): T {

  for ( const key in obj ) {

    const currentVal = obj[ key ];


    if ( isObject ( currentVal ) ) {

      obj[ key ] = resetObjectValue ( currentVal );

    } else if ( isArray ( currentVal ) ) {

      obj[ key ] = [];

    } else {

      obj[ key ] = null;

    }



  }

  return obj;

}