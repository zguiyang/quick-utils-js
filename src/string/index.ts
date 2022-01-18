import { RecordObj } from '../types';


/**
 * @desc 获取url参数
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
 * @desc 对象序列化
 * @param {RecordObj} obj
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


/**
 * @desc 驼峰命名转换为横杆/下划线命名 getElementById => get-element-by-id/get_element_by_id
 * @param { string } str 需要转换的字符串
 * @param { string } separator 分隔符,默认"-"
 * **/

export function getKebabCase ( str: string, separator?:string ): string {

  const separatorStr = separator || '-';

  let temp = str.replace ( /[A-Z]/g, ( i ) => {

    return `${ separatorStr }${ i.toLowerCase ()}`;

  } );

  if ( temp.slice ( 0, 1 ) === separatorStr ) {

    temp = temp.slice ( 1 ); // 如果首字母是大写，执行replace时会多一个_，需要去掉

  }

  return temp;

}

/**
 * @desc 横杆/下划线命名转换为驼峰命名 get-element-by-id/get_element_by_id => getElementById
 * @param { string } str 需要转换的字符串
 * @param { string } separator 分隔符,默认"-"
 * **/

export function getCamelCase ( str: string, separator?:string ):string {

  let arr = str.split ( separator || '-' );

  return arr.map ( ( item, index ) => {

    if ( index === 0 ) {

      return item;

    } else {

      return item.charAt ( 0 ).toUpperCase () + item.slice ( 1 );

    }

  } ).join ( '' );

}