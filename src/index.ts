import { objectDiff, objectClone, objectToString, objectEach } from './lib/object';
import { debounce, throttle  } from './lib/function';
import { getURLParameters } from './lib/string';

export {
  objectDiff, objectClone, objectToString, objectEach,
  debounce, throttle,
  getURLParameters,
}
console.log(getURLParameters('http://www.baidu.com?id=123'));