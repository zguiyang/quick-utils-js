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

    const value = number.toString ().split ( 'e' );

    return Number ( `${value[ 0 ] }e${ value[ 1 ] ? Number ( value[ 1 ] ) + digitNum : digitNum}` );

  };


  // 向左移位

  const shiftLeft = ( number, digit ) => {

    const digitNum = parseInt ( digit, 10 );

    const value = number.toString ().split ( 'e' );

    return Number ( `${value[ 0 ] }e${ value[ 1 ] ? Number ( value[ 1 ] ) - digitNum : -digitNum}` );

  };

  const fraction = [ '角', '分' ];

  const digit = [ '零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖' ];

  const unit = [
    [ '元', '万', '亿' ],
    [ '', '拾', '佰', '仟' ],
  ];

  const head = num < 0 ? '欠' : '';

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

/**
 * file size transform
 * **/

export function byteConvert ( bytes: number ) {

  const symbols = [ 'bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB' ];

  let bytesResult: string|number;

  let exp = Math.floor ( Math.log ( bytes ) / Math.log ( 2 ) );

  if ( exp < 1 ) {

    exp = 0;

  }

  const i = Math.floor ( exp / 10 );

  bytesResult = bytes / Math.pow ( 2, 10 * i );

  if ( bytes.toString ().length > bytes.toFixed ( 2 ).toString ().length ) {

    bytesResult = bytes.toFixed ( 2 );

  }

  return `${ bytesResult } ${ symbols[ i ]}`;

}


/**
 * @desc file size bytes to kb...
 * @param { number } bytes file size
 * @param { boolean } unitType file size type
 * @param { boolean } unit size unit if you need
 * @return {  string | number }
 * **/

export function getFileSize ( bytes : number, unitType?: 'KB' | 'MB' | 'GB' | 'TB', unit?: boolean ): string | number {

  const marker = 1024;

  const kiloBytes = marker;

  const megaBytes = marker * marker;

  const gigaBytes = marker * marker * marker;

  const teraBytes = marker * marker * marker * marker;

  const unitTypeFnMap = {
    'KB': ( val: number ) => ( val / kiloBytes ).toFixed ( 2 ),
    'MB': ( val: number ) => ( val / megaBytes ).toFixed ( 2 ),
    'GB': ( val: number ) => ( val / gigaBytes ).toFixed ( 2 ),
    'TB': ( val: number ) => ( val / teraBytes ).toFixed ( 2 ),
  };

  if ( unitType ) {

    const value = unitTypeFnMap[ unitType ] ( bytes );

    return unit ? `${value} ${ unitType }` : value;

  } else {

    return byteConvert ( bytes );

  }

}