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
 * @desc According to the timestamp to get the specific day, hour, minute, second, etc
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
 * @desc  format the time to the specific format
 * @param  {Date} endTime
 * @return {FormatRemainTimeResult}
 */


export function getRemainTime ( endTime: string | number | Date ): FormatRemainTimeResult {

  const startDate = new Date (); // start time

  const endDate = new Date ( endTime ); // end time

  const t = endDate.getTime () - startDate.getTime ();

  const timeValue = getTimeValue ( t );

  return {
    ...timeValue,
    formatStr: `${ timeValue.d }天 ${ timeValue.h }小时 ${ timeValue.m }分钟 ${ timeValue.s }秒`,
  };

}

/**
 * @desc ${starttime-endTime} Remaining time, if startTime > endTime, return 0
 * @param { Date | String | unix } startTime
 * @param { Date | String } endTime
 * @returns { FormatTimeValue | null } { d, h, m, s } day h m s
 */

export function getTimeLeft ( startTime, endTime ): FormatTimeValue | null {

  if ( !startTime || !endTime ) {

    return null;

  }

  const t = dayjs ( endTime ).valueOf () - dayjs ( startTime ).valueOf ();

  return getTimeValue ( t );

}

/**
 * @desc date format
 * @param { string|number } timestamp unix
 * @param { string } formatStr format: YYYY-MM-DD HH:mm:ss
 * @returns { null | string }
 * **/

export function dateFormat ( timestamp?:string|number, formatStr?: string ): null | string {

  if ( !timestamp ) {

    return null;

  }

  const timestampStr = typeof timestamp === 'string' ? Number ( timestamp ) : timestamp;

  return formatStr ? dayjs ( timestampStr ).format ( formatStr ) :
    dayjs ( timestampStr ).format ( 'YYYY-MM-DD HH:mm:ss' );

}
