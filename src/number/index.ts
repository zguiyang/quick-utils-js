import BigNumber from 'bignumber.js';

type BigNumberCalcType = 'plus' | 'minus' | 'times' | 'div' | 'idev' | 'mod' | 'pow';

/**
 * @desc 数字千分位格式化, 小数超过八位自动截断
 * @param { number | string } num 需要格式化的数字
 * @param { string } unit 单位， 如 xus usd 等
 * @param { Object } options 其他配置项，精度配置
 * @param { number } options.integerLength 整数最大长度
 * @param { number } options.decimalsLength 小数最大长度
 * @return { string } 返回格式化后的数据
 * **/

export function numberToThousands ( num: number | string, unit?: string,
  options?: { integerLength: number, decimalsLength: number } ): string | null {

  const { integerLength, decimalsLength } = options || { integerLength: 24, decimalsLength: 8 };

  BigNumber.config ( {
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

  // 格式化的结果

  let resultNum = '';

  // 需要格式化的字符串

  let formatVal = String ( num );

  // 是否是以小数点结尾

  const isDotEnd = formatVal[ formatVal.length - 1 ] === '.';

  // 是否是小数

  const isDecimal = formatVal.includes ( '.' );

  // 在大数格式化之前就处理为符合限制条件的数字

  if ( isDecimal ) {

    let [ integerVal = '', decimalVal = '' ] = formatVal.split ( '.' );

    integerVal = integerVal.length > integerLength ? integerVal.substring ( 0, integerLength ) : integerVal;

    decimalVal = decimalVal.length > decimalsLength ? decimalVal.substring ( 0, decimalsLength ) : decimalVal;

    formatVal = `${ integerVal }.${ decimalVal }`;

  } else {

    formatVal = formatVal.length > integerLength ? formatVal.substring ( 0, integerLength ) : formatVal;

  }

  // 大数实例化

  const bigNum = new BigNumber ( formatVal );

  const [ formatIntegerVal = '', formatDecimalVal = '' ] = bigNum.toFormat ().split ( '.' );

  resultNum = isDecimal ? `${ formatIntegerVal }.${ formatDecimalVal }` : `${ formatIntegerVal }${ isDotEnd ? '.' : '' }`;

  // 一定要去除首尾空格，防止输入框值绑定异常

  return ( `${ resultNum } ${ unit || ''}` ).trim ();

}

/**
 * @desc 数字千分位还原为字符串 999,999,999 => 999999999
 * @param { string } str 千分位数字
 * @param { string } groupSeparator 分隔符
 * **/

export function thousandsToString ( str: string, groupSeparator?: string ):string {

  return str.split ( groupSeparator || ',' ).join ( '' );

}

/**
 * @desc 大数计算: 加、减、乘、除
 * @param { string | number } a 需要操作的值
 * @param { string | number } b 需要操作的值
 * @param { BigNumberCalcType }  calcType 计算类型
 * 参考 https://mikemcl.github.io/bignumber.js/#config
 * **/

export function numberCalculate ( a: string | number, b: string | number, calcType: BigNumberCalcType ): string {

  const bigNum = new BigNumber ( `${ a }` );

  return bigNum[ calcType ] ? bigNum[ calcType ] ( b ).toString () : '--';

}
