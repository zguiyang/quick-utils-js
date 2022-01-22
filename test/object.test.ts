import { objectDiff, objectToString, objectEach, resetObjectValue } from '../src/object';


// 对象比较

test('object diff - add key', () => {
  const diff1 = { name: 'yang' };
  const diff2 = {  age: 18 };
  const diff = objectDiff(diff1, diff2);
  expect(diff).toEqual({ age: 18 });
})

test('object diff update key', () => {
  const diff1 = { name: 'yang', age: 20 };
  const diff2 = {  age: 18, name: 'yang2' };
  const diff = objectDiff(diff1, diff2);
  expect(diff).toEqual({ age: 18, name: "yang2" });
})

test('object diff update object key', () => {
  const diff1 = { name: 'yang', age: 20, user: {
    money: '25',
  } };
  const diff2 = {  age: 18, name: 'yang2', user: {
    money: '25',
    total: 20,
  } };
  const diff = objectDiff(diff1, diff2);
  expect(diff).toEqual({ age: 18, name: "yang2", user: {
    total: 20,
  } });
})

test('object diff delete key', () => {
  const diff1 = { name: 'yang', age: 20 };
  const diff2 = {  age: 18, };
  const diff = objectDiff(diff1, diff2);
  expect(diff).toEqual({ age: 18 });
})


test('object to key + value string', () => {
  const data = {name: 'yang', age: '18'};
  const result = objectToString(data);
  expect(result).toBe('name:yang;age:18;');
})

test('object to key + value + separator string', () => {
  const data = {name: 'yang', age: '18'};
  const result = objectToString(data, '--');
  expect(result).toBe('name:yang--age:18--');
})

test('object to key + value to string callback', () => {
  const data = {name: 'yang', age: '18'};
  let result = '';
  objectToString(data, '--', (key, value) => {
   result += `${key}=${value}**`;
  });
  expect(result).toBe('name=yang**age=18**');
})

// 对象遍历扁平化
test('object foreach', () => {
  const obj = { a: 1, b: 2, c: 3 };
  let result = {};
  objectEach(obj, (key, val) => {
      result[key] = val;
  });
  expect(result).toEqual({ a: 1, b:2, c: 3 });
});

test('depth object foreach', () => {
  const obj = { a: 1, b: 2, c: { d: 3, e: 4, g: { h: 6 } } };
  let result = {};
  objectEach(obj, (key, val) => {
      result[key] = val;
  });
  expect(result).toEqual({ a: 1, b:2, d: 3, e: 4, h: 6 });
});

test('reset object value to null', () => {
  const obj = { a: 1, b: 2, c: { c1: 2, c2: [], c3: [ 1, 2 ] }, d: '8898' };
  let result = resetObjectValue( obj );
  expect(result).toEqual({ a: null, b: null, c: { c1: null, c2: [], c3: [] }, d: null } );
});