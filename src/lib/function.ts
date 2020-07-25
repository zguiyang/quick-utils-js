import { FunctionInterface, ObjectInterface } from './../types/index';
// 函数执行相关

/**
 * 函数防抖 (只执行最后一次点击)
 * @param { function } fn  执行的函数
 * @param { number } time 延迟执行时间
 */
function debounce(fn: FunctionInterface, time?: number) {
  let delay: number = time || 500;
  let timer:any  = null;
  return function() {
    const that = this;
    let args = arguments;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      timer = null;
      fn.apply(that, args);
    }, delay);
  }
}

/**
 *  函数节流
 * @param { function } fn  执行的函数
 * @param { number } time 延迟执行时间
 * 
 */

function throttle(fn: ObjectInterface, time?: number) {
  let last: number = 0;
  let timer: any = null;
  let interval = time || 500;
  return function () {
    const that = this;
      let args = arguments;
      let now: number = +new Date();
      if (last && now - last < interval) {
          clearTimeout(timer);
          timer = setTimeout(() => {
              last = now;
              fn.apply(that, args);
          }, interval);
      } else {
          last = now;
          fn.apply(that, args);
      }
  }

}

export { debounce, throttle }