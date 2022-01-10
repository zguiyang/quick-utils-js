/**
 *
 * @desc 生成指定范围[min, max]的随机数
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

  return `#${ ( `00000${ ( Math.random () * 0x1000000 << 0 ).toString ( 16 )}` ).slice ( -6 )}`;

}