/**
 *
 * @desc Generates a random integer in the specified range [min, Max]
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
 * @desc random color
 * @return {String}
 */

export function randomColor (): string {

  return `#${Math.floor ( Math.random () * 0xffffff ).toString ( 16 )}`;

}

/**
 * @desc Generates random alphanumeric combinations of any length
 * @param { boolean } randomFlag Whether Any length min- Minimum bit of any length [Fixed bit] Max - Maximum bit of any length
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

  // random crate

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
 * @desc generateUUID
 * @returns { string }
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