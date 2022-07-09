/**
 *
 * @desc  url validate www.baidu.com
 * @param  { string } str
 * @return { boolean }
 */

export const isDomainUrl = ( str:string ):boolean => /[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i.test ( str );

/**
 *@desc  netword url validate http://www.baidu.com
 * @param { string } str
 * @return { boolean }
 * **/

export const isNetWorkUrl = ( str: string ):boolean => /http[s]{0,1}:\/\/([\w.]+\/?)\S*/.test ( str );

/**
 *@desc http url validate http://www.baidu.com
 * @param { string } str
 * @return { boolean }
 * **/

export const isHttpUrl = ( str: string ):boolean => /(http):\/\/([\w.]+\/?)\S*/.test ( str );

/**
 *@desc https url validate https://www.baidu.com
 * @param { string } str
 * @return { boolean }
 * **/

export const isHttpsUrl = ( str: string ):boolean => /(https):\/\/([\w.]+\/?)\S*/.test ( str );

/**
 *
 * @desc phone validate （Strict check）
 * @param  { string } str
 * @return { boolean }
 */

export const isPhoneStrict = ( str: string ): boolean => /^(\+?0?86\-?)?1[3456789]\d{9}$/.test ( str );

/**
* @desc phone validate
 @param  { string } str
 @return { boolean }
* */

export const isPhone = ( str: string ):boolean => /^1\d{10}$/.test ( str );

/**
 *
 * @desc  id card validate
 * @param  { string } str
 * @return { boolean }
 */

export const isIdCard = ( str:string ):boolean => /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test ( str );

/**
 *
 * @desc   email validate
 * @param  { string }  str
 * @return { boolean }
 */

export const isEmail = ( str: string ): boolean => /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test ( str );

/**
* @desc Password regular: Contains 8 to 20 characters, including digits, uppercase and lowercase letters, and special characters
 * @param { string } str
 * @return { boolean }
* */

export const isPassword = ( str: string ): boolean => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$&*\(\)_\-+=\[\]:;\?,.])[A-Za-z\d!@#$&*\(\)_\-+=\[\]:;\?,.]/.test ( str );

/**
* @desc The value contains a maximum of 30 characters including digits, uppercase and lowercase letters, and special characters -_+
 @param { string } str
 @return { boolean }
* */

export const isFieldName = ( str: string ): boolean => /^[a-zA-Z0-9\d!@#$&*\(\)_\-+=\[\]:;\?,.]{1,30}$/.test ( str );


/**
* @desc Matches letters or numbers
 @param { string } str
 @return { boolean }
* */

export const isNumberOrLetter = ( str: string ): boolean => /^[0-9a-zA-Z]+$/.test ( str );

/**
 * @desc Digit accuracy check, whether the integer or decimal is greater than 0, up to eight decimal 19.8n accuracy
 *  @param { string } str
 *  @return { boolean }
 * **/

export const isNumberOrFloat = ( str: string ): boolean => /^[1-9]+([.]{1}[0-9]{1,8})?$/.test ( str );


/**
 *
 * @desc Determine whether it is a hexadecimal color, RGB or RGBA
 * @param  { string }  str
 * @return { boolean }
 */

export const isHexColor = ( str: string ): boolean => /^(#([0-9a-fA-F]{3}){1,2}|[rR][gG][Bb](\((\s*(2[0-4]\d|25[0-5]|[01]?\d{1,2})\s*,){2}\s*(2[0-4]\d|25[0-5]|[01]?\d{1,2})\s*\)|[Aa]\((\s*(2[0-4]\d|25[0-5]|[01]?\d{1,2})\s*,){3}\s*([01]|0\.\d+)\s*\)))$/.test ( str );