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
 * @desc 日期时间格式化
 * @param { string } unix 需要格式化的时间戳
 * @param { string } formatStr 格式化时间的展示格式
 * @returns { null | string } 返回日期转换结果
 * **/

export function dateFormat ( unix?: string | number, formatStr?: string ): null | string {

  if ( !unix ) {

    return '--';

  }

  const dateUnix = typeof unix === 'string' ? Number ( unix ) : unix;

  return formatStr ? dayjs ( dateUnix ).format ( formatStr ) :
    dayjs ( dateUnix ).format ( 'YYYY-MM-DD HH:mm:ss' );

}