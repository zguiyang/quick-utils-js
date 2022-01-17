/**
 *
 * @desc 判断是否为URL地址 www.baidu.com
 * @param  { string } str
 * @return { boolean }
 */

export const isUrl = ( str:string ):boolean => /[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i.test ( str );

/**
 *@desc 判断是否是http或https开头的网络地址
 * @param { string } str
 * @return { boolean }
 * **/

export const isNetWorkUrl = ( str: string ):boolean => /http[s]{0,1}:\/\/([\w.]+\/?)\S*/.test ( str );

/**
 *@desc 判断是否是http开头的地址
 * @param { string } str
 * @return { boolean }
 * **/

export const isHttpUrl = ( str: string ):boolean => /(http):\/\/([\w.]+\/?)\S*/.test ( str );

/**
 *@desc 判断是否是https开头的地址
 * @param { string } str
 * @return { boolean }
 * **/

export const isHttpsUrl = ( str: string ):boolean => /(https):\/\/([\w.]+\/?)\S*/.test ( str );

/**
 *
 * @desc 判断是否为手机号码（强校验）
 * @param  { string } str
 * @return { boolean }
 */

export const isPhoneStrict = ( str: string ): boolean => /^(\+?0?86\-?)?1[3456789]\d{9}$/.test ( str );

/**
* @desc 手机号验证 (弱校验)
 @param  { string } str
 @return { boolean }
* */

export const isPhone = ( str: string ):boolean => /^1\d{10}$/.test ( str );

/**
 *
 * @desc  判断是否为身份证号
 * @param  { string } str
 * @return { boolean }
 */

export const isIdCard = ( str:string ):boolean => /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test ( str );

/**
 *
 * @desc   判断是否为邮箱地址
 * @param  { string }  str
 * @return { boolean }
 */

export const isEmail = ( str: string ): boolean => /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test ( str );

/**
* @desc 密码正则：规则为8~20位，必须包含数字、大小写字母和特殊字符组成
 * @param { string } str
 * @return { boolean }
* */

export const isPassword = ( str: string ): boolean => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$&*\(\)_\-+=\[\]:;\?,.])[A-Za-z\d!@#$&*\(\)_\-+=\[\]:;\?,.]/.test ( str );

/**
* @desc 30位以内的字符，支持输入数字、大小写英文字母、特殊符号-_+
 @param { string } str
 @return { boolean }
* */

export const isFieldName = ( str: string ): boolean => /^[a-zA-Z0-9\d!@#$&*\(\)_\-+=\[\]:;\?,.]{1,30}$/.test ( str );


/**
* @desc 匹配字母或数字
 @param { string } str
 @return { boolean }
* */

export const isNumberOrLetter = ( str: string ): boolean => /^[0-9a-zA-Z]+$/.test ( str );

/**
 * @desc 数字精度校验，是否是大于0的整数或小数,最多八位小数19.8N精度
 *  @param { string } str
 *  @return { boolean }
 * **/

export const isNumberOrFloat = ( str: string ): boolean => /^[1-9]+([.]{1}[0-9]{1,8})?$/.test ( str );


/**
 *
 * @desc 判断是否为16进制颜色，rgb 或 rgba
 * @param  { string }  str
 * @return { boolean }
 */

export const isColor = ( str: string ): boolean => /^(#([0-9a-fA-F]{3}){1,2}|[rR][gG][Bb](\((\s*(2[0-4]\d|25[0-5]|[01]?\d{1,2})\s*,){2}\s*(2[0-4]\d|25[0-5]|[01]?\d{1,2})\s*\)|[Aa]\((\s*(2[0-4]\d|25[0-5]|[01]?\d{1,2})\s*,){3}\s*([01]|0\.\d+)\s*\)))$/.test ( str );