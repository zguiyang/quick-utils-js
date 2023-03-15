/**
 * @desc 驼峰命名转换为横杆/下划线命名 getElementById => get-element-by-id/get_element_by_id
 * @param { string } str 需要转换的字符串
 * @param { string } separator 分隔符,默认"-"
 * **/

export function getCustomKebabCase ( str: string, separator?:string ): string {

  const separatorStr = separator || '-';

  let temp = str.replace ( /[A-Z]/g, ( i ) => {

    return `${ separatorStr }${ i.toLowerCase ()}`;

  } );

  if ( temp.slice ( 0, 1 ) === separatorStr ) {

    temp = temp.slice ( 1 ); // 如果首字母是大写，执行replace时会多一个-，需要去掉

  }

  return temp;

}

/**
 * @desc 横杆/下划线命名转换为驼峰命名 get-element-by-id/get_element_by_id => getElementById
 * @param { string } str 需要转换的字符串
 * @param { string } separator 分隔符,默认"-"
 * **/

export function getCustomCamelCase ( str: string, separator?:string ):string {

  const arr = str.split ( separator || '-' );

  return arr.map ( ( item, index ) => {

    if ( index === 0 ) {

      return item;

    } else {

      return item.charAt ( 0 ).toUpperCase () + item.slice ( 1 );

    }

  } ).join ( '' );

}

/**
 * @description replace white space in string
 * @param { string } str need replace string of space white
 * @param { boolean } trim only replace for spaces at both ends of string default: false
 * **/

export function replaceWhiteSpace ( str: string, trim = false ): string {

  if ( trim ) {

    return str.replace ( /^\s+|\s+$/g, '' );

  }

  return str.replace ( /\s+/g, '' );

}
