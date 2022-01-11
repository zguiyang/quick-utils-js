import { isArray, isObject } from '../helper';

export interface FormatTimeValue {
  d: number,
  h: number,
  m: number,
  s: number;
}

export interface FormatRemainTimeResult extends FormatTimeValue {
  formatStr: string;
}

/**
 *
 * @desc 判断浏览器是否支持webP格式图片
 * @return {Boolean}
 */

export function isSupportWebP (): boolean {

  return !![].map && document.createElement ( 'canvas' ).toDataURL ( 'image/webp' ).
    indexOf ( 'data:image/webp' ) === 0;

}

/**
 * @desc 根据时间差值获取出具体的天、时、分、秒等
 * @param { number } timeValue
 * **/

export function getDiffTimeValue ( timeValue: number ): FormatTimeValue {

  const t = timeValue;

  let d = 0;

  let h = 0;

  let m = 0;

  let s = 0;

  if ( t >= 0 ) {

    d = Math.floor ( t / 1000 / 3600 / 24 );

    h = Math.floor ( t / 1000 / 60 / 60 % 24 );

    m = Math.floor ( t / 1000 / 60 % 60 );

    s = Math.floor ( t / 1000 % 60 );

  }

  return { d, h, m, s };

}

/**
 *
 * @desc   格式化现在距${ endTime }的剩余时间
 * @param  {Date} endTime
 * @return {FormatRemainTimeResult}
 */


export function formatRemainTime ( endTime ): FormatRemainTimeResult {

  let startDate = new Date (); // 开始时间

  let endDate = new Date ( endTime ); // 结束时间

  let t = endDate.getTime () - startDate.getTime ();

  const timeValue = getDiffTimeValue ( t );

  return {
    ...timeValue,
    formatStr: `${ timeValue.d }天 ${ timeValue.h }小时 ${ timeValue.m }分钟 ${ timeValue.s }秒`,
  };

}

/**
 * @desc ${ startTime - endTime }的剩余时间,startTime大于endTime时，均返回0
 * @param { Date | String } startTime
 * @param { Date | String } endTime
 * @returns { FormatTimeValue | null } { d, h, m, s } 天 时 分 秒
 */

export function getTimeLeft ( startTime, endTime ): FormatTimeValue | null {

  if ( !startTime || !endTime ) {

    return null;

  }

  let startDate;

  let endDate;

  if ( startTime instanceof Date ) {

    startDate = startTime;

  } else {

    startDate = new Date ( startTime.replace ( /-/g, '/' ) ); // 开始时间

  }

  if ( endTime instanceof Date ) {

    endDate = endTime;

  } else {

    endDate = new Date ( endTime.replace ( /-/g, '/' ) ); // 结束时间

  }

  let t = endDate.getTime () - startDate.getTime ();

  return getDiffTimeValue ( t );

}

/**
 *
 * @desc   现金额转大写 bug
 * @param  {Number} n
 * @return {String}
 */

export function digitUppercase ( n: number ): string {

  let money = n || 0;

  let fraction = [ '角', '分' ];

  let digit = [
    '零', '壹', '贰', '叁', '肆',
    '伍', '陆', '柒', '捌', '玖',
  ];

  let unit = [
    [ '元', '万', '亿' ],
    [ '', '拾', '佰', '仟' ],
  ];

  let head = n < 0 ? '欠' : '';

  money = Math.abs ( n );

  let s = '';

  for ( let i = 0; i < fraction.length; i ++ ) {

    s += ( digit[ Math.floor ( money * 10 * Math.pow ( 10, i ) ) % 10 ] + fraction[ i ] ).replace ( /零./, '' );

  }

  s = s || '整';

  money = Math.floor ( n );

  for ( let i = 0; i < unit[ 0 ].length && money > 0; i ++ ) {

    let p = '';

    for ( let j = 0; j < unit[ 1 ].length && money > 0; j ++ ) {

      p = digit[ n % 10 ] + unit[ 1 ][ j ] + p;

      money = Math.floor ( n / 10 );

    }

    s = p.replace ( /(零.)*零$/, '' ).replace ( /^$/, '零' ) + unit[ 0 ][ i ] + s;

  }

  return head + s.replace ( /(零.)*零元/, '元' ).
    replace ( /(零.)+/g, '零' ).
    replace ( /^整$/, '零元整' );

}


/**
 * @desc 获取文件扩展名 xxx.txt => txt
 * @param { string } filename 文件名称
 * @return { string | undefined }
 * **/

export function getFileExtension ( filename:string ): string | undefined {

  const reg1 = /[.]/.exec ( filename );

  const reg2 = /[^.]+$/.exec ( filename );

  if ( reg1 && reg2 && reg2.length ) {

    return reg2[ 0 ];

  }

  return undefined;

}

/**
 * @desc generateUUID 生成UUID
 * @returns { string } 返回字符串
 */

export function generateUUID ():string {

  let d = new Date ().getTime ();

  let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace ( /[xy]/g, ( c ) => {

    let r = ( d + Math.random () * 16 ) % 16 | 0;

    d = Math.floor ( d / 16 );

    return ( c === 'x' ? r : ( r & 0x7 | 0x8 ) ).toString ( 16 );

  } );

  return uuid;

}