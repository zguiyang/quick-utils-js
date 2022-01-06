/**
 *
 * @desc read cookies based on name
 * @param  {String} name
 * @returns {String}
 */

export function getCookie ( name:string ): string {

  let arr = document.cookie.replace ( /\s/g, '' ).split ( ';' );

  for ( const item of arr ) {

    let tempArr = item.split ( '=' );

    if ( tempArr[ 0 ] === name ) {

      return decodeURIComponent ( tempArr[ 1 ] );

    }

  }

  return '';

}


/**
 *
 * @desc  set cookie
 * @param {String} name
 * @param {String} value
 * @param {Number} days
 */

export function setCookie ( name:string, value:string, days: number ):void {

  let date = new Date ();

  date.setDate ( date.getDate () + days );

  document.cookie = `${name }=${ value };expires=${ date}`;

}

/**
 *
 * @desc 根据name删除cookie
 * @param  {String} name
 */

export function removeCookie ( name:string ):void {


  // 设置已过期，系统会立刻删除cookie

  setCookie ( name, '1', -1 );

}