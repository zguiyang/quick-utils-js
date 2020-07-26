import { ObjectInterface, FunctionInterface, CallbackInterface } from '../interface';
declare function objectEach(obj: ObjectInterface, fn: FunctionInterface): void;
declare function objectClone(target: ObjectInterface): ObjectInterface;
declare function objectDiff(original: ObjectInterface, target: ObjectInterface): ObjectInterface;
declare function objectToQueryString(obj: ObjectInterface): string;
declare function objectToString(obj: ObjectInterface, separator?: string, callback?: CallbackInterface<[string, any], void>): string;
export { objectDiff, objectClone, objectToString, objectToQueryString, objectEach };
