/**
 *
 * @desc 生成指定范围[min, max]的随机整数
 * @param  {Number} min
 * @param  {Number} max
 * @return {Number}
 */

export function randomNum ( min: number, max: number ): number {

  let minNum = Math.ceil ( min );

  let maxNum = Math.floor ( max );

  return Math.floor ( Math.random () * ( maxNum - minNum + 1 ) ) + minNum;

}

/**
 *
 * @desc 随机生成颜色
 * @return {String}
 */

export function randomColor (): string {

  return `#${Math.floor ( Math.random () * 0xffffff ).toString ( 16 )}`;

}

/**
 * @desc 产生任意长度随机字母数字组合
 * @param { boolean } randomFlag 是否任意长度 min-任意长度最小位[固定位数] max-任意长度最大位
 * @param { number } min
 * @param { number } max
 * @return { string }
 */

export function randomWord ( randomFlag: boolean, min: number, max:number ): string {

  let str = '';

  let pos = 0;

  let range = min;

  let arr = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
    'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
    'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ];

  // 随机产生

  if( randomFlag ){

    range = Math.round ( Math.random () * ( max - min ) ) + min;

  }

  for( let i = 0; i < range; i ++ ){

    pos = Math.round ( Math.random () * ( arr.length - 1 ) );

    str += arr[ pos ];

  }

  return str;

}

/**
 * @desc generateUUID 生成UUID
 * @returns { string } 返回字符串
 */

export function generateUUID ():string {

  let d = new Date ().getTime ();

  let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace ( /[xy]/g, ( c ) => {

    let r = ( d + Math.random () * 16 ) % 16 | 0;

    d = Math.floor ( d / 16 );

    return ( c === 'x' ? r : ( r & 0x7 | 0x8 ) ).toString ( 16 );

  } );

  return uuid;

}