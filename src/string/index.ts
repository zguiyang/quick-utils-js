import { RecordObj } from '../types';


/**
 * 获取url参数
 * @param { string } url 目标url
 */

export function getURLParameters ( url: string ): RecordObj {

  let result: RecordObj;

  const urlArr = url.match ( /([^?=&]+)(=([^&]*))/g ) || [];

  // eslint-disable-next-line no-return-assign,no-sequences

  result = urlArr.reduce ( ( a, v ) => {

    a[ v.slice ( 0, v.indexOf ( '=' ) ) ] = v.slice ( v.indexOf ( '=' ) + 1 );

    return a;

  }, {} );

  return result;

}


/**
 *
 * @desc   对象序列化
 * @param  {RecordObj} obj
 * @return {String}
 */

export function objQueryString ( obj: RecordObj ):string {

  if ( !obj ) return '';

  let pairs:string[] = [];

  for ( let key in obj ) {

    let value = obj[ key ];

    if ( value instanceof Array ) {

      for ( let i = 0; i < value.length; ++ i ) {

        pairs.push ( `${encodeURIComponent ( `${key }[${ i }]` ) }=${ encodeURIComponent ( value[ i ] )}` );

      }

      continue;

    }

    pairs.push ( `${encodeURIComponent ( key ) }=${ encodeURIComponent ( obj[ key ] )}` );

  }

  return pairs.join ( '&' );

}