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
 * @desc   现金额转大写
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


