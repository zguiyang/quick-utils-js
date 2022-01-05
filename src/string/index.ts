import { RecordObj } from '../types';


/**
 * 获取url参数
 * @param { string } url 目标url
 */

function getURLParameters ( url: string ): RecordObj {

  let result: RecordObj;

  const urlArr = url.match ( /([^?=&]+)(=([^&]*))/g ) || [];

  // eslint-disable-next-line no-return-assign,no-sequences

  result = urlArr.reduce ( ( a, v ) => {

    a[ v.slice ( 0, v.indexOf ( '=' ) ) ] = v.slice ( v.indexOf ( '=' ) + 1 );

    return a;

  }, {} );

  return result;

}

export { getURLParameters };