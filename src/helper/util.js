export function isNumber(key) {
    return typeof key === 'number';
}
export function isString(key) {
    return typeof key === 'string';
}
export function isBoolean(key) {
    return typeof key === 'boolean';
}
export function isArray(key) {
    return Object.prototype.toString.call(key) === '[object Array]';
}
export function isObject(key) {
    return Object.prototype.toString.call(key) === '[object Object]';
}
export function isEmptyObject(obj) {
    return Object.keys(obj).length === 0;
}
