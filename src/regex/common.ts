import { strictDecimalsReg, integerReg, letterNumberReg, letterZhNumberReg, chineseReg } from './';

/**
 *  常规邮箱格式校验
 * @description  `gaozihang-001@gmail.com` 只允许英文字母、数字、下划线、英文句号、以及中划线组成
 * @param { string } email 邮箱
 * @param { boolean }  isHaveChinese 是否允许中文 ( 名称允许汉字, 域名只允许英文域名 )
 * @return boolean
 * **/

export function generalEmailReg ( email: string, isHaveChinese?: boolean ): boolean {

  const reg = `[${ isHaveChinese ? '\\u4e00-\\u9fa5' : ''}a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\\.[a-zA-Z0-9_-]+)+$`;

  return RegExp ( reg, 'g' ).test ( email );

}

/**
 * 宽松手机号校验
 * @description 手机号(mobile phone)中国(宽松), 只要是13,14,15,16,17,18,19开头即可
 * @param { string } mobile 手机号
 * @param { `${number}-${number}` } scope 'min-max' 可指定手机号第二位的数字范围 默认为 0-9
 * @returns boolean
 * **/

export function loosePhoneReg ( mobile: string, scope?:`${number}-${number}` ): boolean {

  const reg = `^[1][${ scope || '0-9' }]\\d{9}$`;

  return RegExp ( reg ).test ( mobile );

}

/**
 * 严格手机号校验
 * @description 手机号(mobile phone)中国(严谨), 根据工信部2019年最新公布的手机号段，支持已+86、+086开头的手机号
 * @param { string } mobile 手机号
 * @param { boolean } isArea 是否加上区号验证，默认为true
 * @returns boolean
 * **/

export function strictPhoneReg ( mobile: string, isArea?: boolean ): boolean {

  const reg = `^${ isArea ? '(?:\\+086|\\+86)' : '' }1([3456789])\\d{9}$`;

  return RegExp ( reg ).test ( mobile );

}

/**
 * 国内固定电话号码校验 051-4405222、0211-87888822
 * @description 固定电话号码(telephone number)中国, 只要是区号+号码(3+{7,8}、4+{7,8})组成即可
 * @param { string } tel 固定电话号码
 * @param { boolean } isExtension 是否需要分机号码
 * @return boolean
 * **/

export function chinaTelPhoneReg ( tel: string, isExtension?: boolean ): boolean {

  const reg = !isExtension ? /^(0?\d{3})-\d{7,8}$/g : /^(0?\d{3})-(\d{7,8})(-\d{1,6})?$/g;

  // const reg = /\(0?\d{2}\)-?\d{8}$|0?\d{2}-?\d{8}$|0?\d{3}-?\d{8}$/;

  return RegExp ( reg ).test ( tel );

}

/**
 * 固定电话号码校验
 * 固定电话号码校验 "XXX-XXXXXXX"、"XXXX-XXXXXXXX"、"XXX-XXXXXXX"、"XXX-XXXXXXXX"、"XXXXXXX"和"XXXXXXXX
 * @description 国际固定电话号码校验
 * @param { string } tel 固定电话号码
 * @return boolean
 * **/

export function telPhoneReg ( tel: string ): boolean {

  const reg = '^(\\+|00)[1-9][0-9 \\-\\(\\)\\.]{7,32}$';

  return RegExp ( reg, 'g' ).test ( tel );

}

/**
 *  域名正则校验(一级或二级域名)
 * @description  url validate www.baidu.com test.baidu.com
 * @param  { string } str 需要校验的字符串
 * @return boolean
 */

export function domainUrlReg ( str:string ):boolean {

  return /^(?=^.{3,255}$)[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+$/gi.test ( str );

}

/**
 *  网络地址正则校验
 * @description http or https 开头的链接
 * @param  { string } str 需要校验的字符串
 * @param  { 'https' | 'http' } agreement 可指定http或https
 * @return boolean
 */

export function netWorkUrlReg ( str:string, agreement?: 'https' | 'http' ):boolean {

  const agreementStr = agreement ? `^${ agreement }:` : 'http[s]{0,1}:';

  const reg = `^${agreementStr}\\/\\/([\\w.]+\\/?)\\S*`;

  return RegExp ( reg ).test ( str );

}

/**
 * 身份证号码正则宽松校验
 * @description 身份证号码(identity card number)中国, 只要是18位（支持末尾x|X）、15位数字即可
 * @param  { string } str 需要校验的字符串
 * @return boolean
 * **/

export function looseIdCardReg ( str:string ):boolean {

  const reg = str.length === 15 ? '^\\d{15}$' : '^\\d{17}[0-9Xx]$';

  return RegExp ( reg ).test ( str );

}

/**
 * 身份证号码正则严格校验
 * @description 身份证号码(identity card number)中国, 严格校验
 * @param  { string } str 需要校验的字符串
 * @return boolean
 * **/

export function strictIdCardReg ( str:string ):boolean {

  const reg = /^\d{6}((((((19|20)\d{2})(0[13-9]|1[012])(0[1-9]|[12]\d|30))|(((19|20)\d{2})(0[13578]|1[02])31)|((19|20)\d{2})02(0[1-9]|1\d|2[0-8])|((((19|20)([13579][26]|[2468][048]|0[48]))|(2000))0229))\d{3})|((((\d{2})(0[13-9]|1[012])(0[1-9]|[12]\d|30))|((\d{2})(0[13578]|1[02])31)|((\d{2})02(0[1-9]|1\d|2[0-8]))|(([13579][26]|[2468][048]|0[048])0229))\d{2}))(\d|X|x)$/;

  return RegExp ( reg ).test ( str );

}

/**
 * 弱密码校验
 @description 密码规则:密码长度为m ~ n个字符，只能包含数字、大写字母、小写字母和下划线组成(有其一即可)
 @param { string } str
 @param { [ number, number ] } len [ min, max ] 密码长度范围, 默认 6-15
 @return boolean
 * **/

export function loosePasswordReg ( str:string, len?: [ number, number ] ):boolean {

  const reg = `^[0-9a-zA-Z_]{${ len ? len.join ( ',' ) : '6,15'}}$`;

  return RegExp ( reg, 'g' ).test ( str );

}

/**
 * 简单密码校验
 @description 密码规则:密码长度为m ~ n个字符，必须包含数字和字母（大小写均可），允许除空格外的特殊符号
 @param { string } str
 @param { [ number, number ] } len [ min, max ] 密码长度范围, 默认 6-15
 @return boolean
 * **/

export function simplePasswordReg ( str: string, len?: [ number, number ] ): boolean {

  const reg = `^(?=.*[0-9].*)(?=.*[A-Za-z].*)[^\\s]{${len ? len.join ( ',' ) : '6,15'}}$`;

  return RegExp ( reg, 'g' ).test ( str );

}



/**
 * 强密码正则校验
 * @description 密码规则:密码长度为8 ~ 20个字符，由数字、大写字母、小写字母和特殊字符组成, 默认8-20位字符
 * @param { string } str
 * @param { [ number, number ] } len [ min, max ] 密码长度范围
 * @return boolean
 * **/

export function strictPasswordReg ( str: string, len?: [ number, number] ): boolean {

  const reg = `^(?=.*[a-z])(?=.*[A-Z])(?=.*\\\d)(?=.*[!@#$&*\\\(\\\)_\\\-+=\\\[\\\]:;\\\?,.])[A-Za-z\\\d!@#$&*\\\(\\)_\\\-+=\\\[\\\]:;\\\?,.]{${len ? len.join ( ',' ) : '8,20'}}$`;

  return RegExp ( reg, 'g' ).test ( str );

}

/**
 * 昵称正则校验
 * @description 昵称规则: 中文组合、英文数字组合，英文中文数字组合
 *  @param { string } str 需要校验的字符串
 *  @return boolean
 * **/


export function fieldNameReg ( str: string ): boolean {

  return chineseReg ( str, 30 ) || letterNumberReg ( str, 30 ) || letterZhNumberReg ( str, 30 );

}

/**
 *
 * @desc 十六进制颜色正则校验
 * @param  { string }  str 需要校验的字符串
 * @return boolean
 */

export function hexColorReg ( str: string ): boolean {

  const reg = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{3,6})$/;

  return reg.test ( str );

}


/**
 * @description 金额正则校验
 *@param { string } str 需要校验的字符串
 * @param { Object } options 配置项
 * @param { number } options.decimalsMax 支持的小数位数，默认八位小数
 * @param { boolean } options.minus 是否支持负数，默认false
 * @return boolean
 * **/

export function moneyReg ( str: string, options?: { minus?: boolean, decimalsMax?: number } ): boolean {

  return integerReg ( str, options?.minus ) || strictDecimalsReg ( str, options );


}


/**
 * 千分位正则
 * @description 千分位正则校验 10,000.00 100,000,000 199999
 * @param { string } str 需要校验的字符串
 *@return boolean
 * **/

export function thousandsMoneyReg ( str: string ): boolean {

  const reg = '^([0-9]+|[0-9]{1,3}(,[0-9]{3})*)(.[0-9]{1,2})?$';

  return RegExp ( reg, 'g' ).test ( str );

}

/**
 * @description IP正则校验
 * @param { string } str 需要校验的字符串
 * @return boolean
 * **/

export function ipReg ( str: string ): boolean {

  const reg = /((?:(?:25[0-5]|2[0-4]\d|[01]?\d?\d)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d?\d))/;

  return reg.test ( str );

}

/**
 * 日期格式正则校验
 * @description 校验日期格式 2020-01-01、2020/1/1
 * param { string } str 需要校验的字符串
 * @return boolean
 * **/

export function dateReg ( str: string ): boolean {

  const reg = '^\\d{4}[-\\/]\\d{1,2}[-\\/]\\d{1,2}';

  return RegExp ( reg, 'g' ).test ( str );

}

/**
 * 日期时间格式正则校验
 * @description 校验日期格式 2020-01-01、2020-1-1
 * param { string } str 需要校验的字符串
 * @return boolean
 * **/

export function dateTimeReg ( str: string ): boolean {

  const reg = '^\\d{4}[-\\/]\\d{1,2}[-\\/]\\d{1,2}\\s\\d{1,2}:\\d{1,2}:\\d{1,2}';

  return RegExp ( reg, 'g' ).test ( str );

}