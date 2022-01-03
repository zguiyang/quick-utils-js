export type RecordObj<T=any> = Record<any, T>;

export interface FunctionInterface {
    (...args: any[]): any;
}

export interface CallbackInterface<T = string[],R = void> {
    (...arg: any[]): R
}