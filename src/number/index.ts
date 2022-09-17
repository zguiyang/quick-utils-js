import BigNumber from 'bignumber.js';

type BigNumberCalcType = 'plus' | 'minus' | 'times' | 'div' | 'idiv' | 'mod' | 'pow';

/**
 * @desc The number is formatted in thousands and truncated automatically when the number exceeds eight decimal places
 * @param { number | string } num format number
 * @param { string } unit unit， xus usd...
 * @param { Object } options other options
 * @param { number } options.integerLength integer length
 * @param { number } options.decimalsLength decimals length
 * @return { string }
 * **/

export function numberToThousands ( num: number | string, unit?: string,
  options?: { integerLength: number, decimalsLength: number } ): string | null {

  const { integerLength, decimalsLength } = options || { integerLength: 24, decimalsLength: 8 };

  const BN = BigNumber.clone ();

  BN.config ( {
    DECIMAL_PLACES: decimalsLength,
    EXPONENTIAL_AT: integerLength + decimalsLength + 1,
    RANGE: 500,
    FORMAT: {
      decimalSeparator: '.',
      fractionGroupSeparator: '',
      fractionGroupSize: 0,
      groupSeparator: ',',
      groupSize: 3,
      secondaryGroupSize: 0,
    },
  } );

  if ( num === '--' || ( !num && num !== 0 ) ) {

    return null;

  }

  // format result

  let resultNum = '';

  // format value

  let formatVal = String ( num );

  const isDotEnd = formatVal[ formatVal.length - 1 ] === '.';

  // is decimal

  const isDecimal = formatVal.includes ( '.' );

  if ( isDecimal ) {

    let [ integerVal = '', decimalVal = '' ] = formatVal.split ( '.' );

    integerVal = integerVal.length > integerLength ? integerVal.substring ( 0, integerLength ) : integerVal;

    decimalVal = decimalVal.length > decimalsLength ? decimalVal.substring ( 0, decimalsLength ) : decimalVal;

    formatVal = `${ integerVal }.${ decimalVal }`;

  } else {

    formatVal = formatVal.length > integerLength ? formatVal.substring ( 0, integerLength ) : formatVal;

  }

  const bigNum = new BN ( formatVal );

  const [ formatIntegerVal = '', formatDecimalVal = '' ] = bigNum.toFormat ().split ( '.' );

  resultNum = isDecimal ? `${ formatIntegerVal }.${ formatDecimalVal }` : `${ formatIntegerVal }${ isDotEnd ? '.' : '' }`;

  return ( `${ resultNum } ${ unit || ''}` ).trim ();

}

/**
 * @desc thousands str to number 999,999,999 => 999999999
 * @param { string } str thousands str
 * @param { string } groupSeparator split separator
 * **/

export function thousandsToString ( str: string, groupSeparator?: string ):string {

  return str.split ( groupSeparator || ',' ).join ( '' );

}

/**
 * @desc big number calculation
 * @param { string | number } a
 * @param { string | number } b
 * @param { BigNumberCalcType }  calcType calculation type
 * 参考 https://mikemcl.github.io/bignumber.js/#config
 * **/

export function numberCalculate ( a: string | number, b: string | number, calcType: BigNumberCalcType ): string {

  const BN = BigNumber.clone ();

  BN.config ( {
    DECIMAL_PLACES: 8,
    EXPONENTIAL_AT: 32,
  } );

  const bigNum = new BN ( `${ a }` );

  return bigNum[ calcType ] ? bigNum[ calcType ] ( b ).toString () : '--';

}
