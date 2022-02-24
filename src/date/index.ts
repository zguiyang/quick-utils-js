import dayjs from 'dayjs';

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
 * @desc 根据时间戳获取出具体的天、时、分、秒等
 * @param { number } timeValue
 * **/

export function getTimeValue ( timeValue: number ): FormatTimeValue {

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


export function getRemainTime ( endTime ): FormatRemainTimeResult {

  let startDate = new Date (); // 开始时间

  let endDate = new Date ( endTime ); // 结束时间

  let t = endDate.getTime () - startDate.getTime ();

  const timeValue = getTimeValue ( t );

  return {
    ...timeValue,
    formatStr: `${ timeValue.d }天 ${ timeValue.h }小时 ${ timeValue.m }分钟 ${ timeValue.s }秒`,
  };

}

/**
 * @desc ${ startTime - endTime }的剩余时间,startTime大于endTime时，均返回0
 * @param { Date | String | unix } startTime
 * @param { Date | String } endTime
 * @returns { FormatTimeValue | null } { d, h, m, s } 天 时 分 秒
 */

export function getTimeLeft ( startTime, endTime ): FormatTimeValue | null {

  if ( !startTime || !endTime ) {

    return null;

  }

  let t = dayjs ( endTime ).valueOf () - dayjs ( startTime ).valueOf ();

  return getTimeValue ( t );

}

/**
 * @desc 日期时间格式化
 * @param { string|number } timestamp 需要格式化的时间戳
 * @param { string } formatStr 格式化时间的展示格式
 * @returns { null | string } 返回日期转换结果
 * **/

export function dateFormat ( timestamp:string|number, formatStr?: string ): null | string {

  const timestampStr = typeof timestamp === 'string' ? Number ( timestamp ) : timestamp;

  return formatStr ? dayjs ( timestampStr ).format ( formatStr ) :
    dayjs ( timestampStr ).format ( 'YYYY-MM-DD HH:mm:ss' );

}