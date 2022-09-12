/**
 * 大数输入值验证，整数大于0，小数点最高可达8位19.8n精度(特定场景使用)
 *@param { string } str 需要检查的字符串
 * @return { boolean } 是否符合精度要求
 * **/

export function largeNumberReg ( str: string ): boolean {

  const reg = /^[1-9]{1,19}([.]([0-9]{1,8}))?$/;

  return reg.test ( str );

}


/**
 * 整数数字正则校验
 * @description
 * @param { string } str 需要检查的字符串
 * @param { boolean } minus 是否支持负数
 * @return { boolean } 是否匹配
 * **/

export function integerReg ( str: string, minus?: boolean ): boolean {

  const reg = `^${ minus ? '-?' : '' }[1-9]+[0-9]*$`;

  return RegExp ( reg ).test ( str );

}

/**
 * 弱小数正则校验, 支持负数
 * @description 只要是 xxx.xxx、-xxx.xxx 格式均可通过
 * @param { string } str 需要检查的字符串
 * @param { number } decimalsMax 最大小数位. 默认为8
 * @return { boolean } 是否匹配
 * **/

export function looseDecimalsReg ( str: string, decimalsMax?: number ): boolean {

  const reg = RegExp ( `^-?\\d+\.\\d{1,${ decimalsMax || 2 }}$`, 'g' );

  return reg.test ( str );

}

/**
 * 严格小数正则校验, 支持负数
 * @description 01.xxx 00.xxx 不可通过
 * @param { string } str 需要检查的字符串
 * @param { Object } options 配置项
 * @param { number } options.decimalsMax 支持的小数位数，默认八位小数
 * @param { boolean } options.minus 是否支持负数，默认false
 * **/

export function strictDecimalsReg ( str: string, options?: { decimalsMax?: number, minus?: boolean } ): boolean {

  const minusReg = options && options.minus ? '-?' : '';

  const decimalsReg = options && options.decimalsMax ? `{1,${options.decimalsMax}}` : '{1,2}';

  const reg = `(^${minusReg}[1-9]\\d*\.\\d${decimalsReg}$|^${minusReg}0\\.\\d${decimalsReg}$|^${minusReg}[1-9]\\d{1,2}$|^0{1}$)`;

  return RegExp ( reg, 'g' ).test ( str );

}