
/**
 *
 * @desc Change the cash amount to uppercase
 * @param  {Number} money
 * @return {String}
 */

export function digitUppercase ( money: number ): string {

  let num = money;

  // 向右移位

  const shiftRight = ( number, digit ) => {

    const digitNum = parseInt ( digit, 10 );

    let value = number.toString ().split ( 'e' );

    return Number ( `${value[ 0 ] }e${ value[ 1 ] ? Number ( value[ 1 ] ) + digitNum : digitNum}` );

  };


  // 向左移位

  const shiftLeft = ( number, digit ) => {

    const digitNum = parseInt ( digit, 10 );

    let value = number.toString ().split ( 'e' );

    return Number ( `${value[ 0 ] }e${ value[ 1 ] ? Number ( value[ 1 ] ) - digitNum : -digitNum}` );

  };

  let fraction = [ '角', '分' ];

  let digit = [ '零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖' ];

  let unit = [
    [ '元', '万', '亿' ],
    [ '', '拾', '佰', '仟' ],
  ];

  let head = num < 0 ? '欠' : '';

  num = Math.abs ( num );

  let s = '';

  for ( let i = 0; i < fraction.length; i ++ ) {

    s += ( digit[ Math.floor ( shiftRight ( num, 1 + i ) ) % 10 ] + fraction[ i ] ).replace ( /零./,
      '' );

  }

  s = s || '整';

  num = Math.floor ( num );

  for ( let i = 0; i < unit[ 0 ].length && num > 0; i ++ ) {

    let p = '';

    for ( let j = 0; j < unit[ 1 ].length && num > 0; j ++ ) {

      p = digit[ num % 10 ] + unit[ 1 ][ j ] + p;

      num = Math.floor ( shiftLeft ( num, 1 ) );

    }

    s = p.replace ( /(零.)*零$/, '' ).replace ( /^$/, '零' ) + unit[ 0 ][ i ] + s;

  }

  return (
    head +
      s.
        replace ( /(零.)*零元/, '元' ).
        replace ( /(零.)+/g, '零' ).
        replace ( /^整$/, '零元整' )
  );

}

/**
 * @desc get file extension name xxx.txt => txt
 * @param { string } filename file name
 * @return { string | undefined }
 * **/

export function getFileExtension ( filename:string ): string | undefined {

  const reg1 = /[.]/.exec ( filename );

  const reg2 = /[^.]+$/.exec ( filename );

  if ( reg1 && reg2 && reg2.length ) {

    return reg2[ 0 ].toLocaleLowerCase ();

  }

  return undefined;

}