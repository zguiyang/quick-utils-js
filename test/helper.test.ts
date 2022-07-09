import { isNumber, isArray, isEmptyArray, isBoolean, isEmptyObject, isObject, isString } from '../src/helper';

// 数字校验
test('isNumber false', () => {
  const result = isNumber('3');
  expect(result).toBe(false);
}) 

test('isNumber true', () => {
  const result = isNumber(3);
  expect(result).toBe(true);
}) 

// 数组校验
test('isArray false', () => {
  const result = isArray({});
  expect(result).toBe(false);
}) 

test('isArray true', () => {
  const result = isArray([]);
  expect(result).toBe(true);
})

test('isEmptyArray false', () => {
  const result = isEmptyArray([ 1 , 2 ] );
  expect(result).toBe(false);
})


test('isEmptyArray true', () => {
  const result = isEmptyArray([] );
  expect(result).toBe(true);
})

// 布尔值校验
test('isBoolean false', () => {
  const result = isBoolean([]);
  expect(result).toBe(false);
}) 

test('isBoolean false', () => {
  const result = isBoolean(true);
  expect(result).toBe(true);
}) 

// 空对象校验
test('isEmptyObject false', () => {
  const result = isEmptyObject({ a: 2 });
  expect(result).toBe(false);
}) 

test('isEmptyObject true', () => {
  const result = isEmptyObject({ });
  expect(result).toBe(true);
}) 

// 是否是对象
test('isObject false', () => {
  const result = isObject(null);
  expect(result).toBe(false);
}) 
test('isObject false', () => {
  const result = isObject([]);
  expect(result).toBe(false);
}) 
test('isObject true', () => {
  const result = isObject({});
  expect(result).toBe(true);
}) 

// 是否是字符串
test('isString false', () => {
  const result = isString({});
  expect(result).toBe(false);
}) 

test('isString true', () => {
  const result = isString('');
  expect(result).toBe(true);
}) 
test('isString true', () => {
  const result = isString('21');
  expect(result).toBe(true);
})