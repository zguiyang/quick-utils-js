
export interface ObjectInterface {
  [propName: string]: any;
}

export interface FunctionInterface {
  (...args: any[]): any;
}

export interface CallbackInterface<T = string[],R = void> {
  (...arg: any[]): R
}