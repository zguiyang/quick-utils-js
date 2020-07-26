import { objectClone, objectDiff, objectToQueryString, objectToString, objectEach } from '../src/index';

//对象克隆测试(深拷贝)
test('object depth clone', () => {
  const data = { a: 1 };
  const data2 = objectClone(data);
  data2.a = 3;
  expect(data).toEqual({ a: 1 });
});

// 对象比较

test('object diff add key', () => {
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

test('object diff delete key', () => {
  const diff1 = { name: 'yang', age: 20 };
  const diff2 = {  age: 18, };
  const diff = objectDiff(diff1, diff2);
  expect(diff).toEqual({ age: 18 });
})

// 对象转字符串

test('object to query string', () => {
  const data = { a: 1, b: 2, c: 3};
  const queryString =  objectToQueryString(data);
  expect(queryString).toBe('a=1&b=2&c=3');
})

test('depth object to query string', () => {
  const data = { a: 1, b: 2, c: { h: 2, g: 3 }};
  const queryString = objectToQueryString(data);
  expect(queryString).toBe('a=1&b=2&c={"h":2,"g":3}');
})

test('object array to query string', () => {
  const data = { a: 1, b: 2, c: [1, 2]};
  const queryString = objectToQueryString(data);
  expect(queryString).toBe('a=1&b=2&c=[1,2]');
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
  objectEach(obj, (val, key) => {
      result[key] = val;
  });
  expect(result).toEqual({ a: 1, b:2, c: 3 });
});

test('depth object foreach', () => {
  const obj = { a: 1, b: 2, c: { d: 3, e: 4, g: { h: 6 } } };
  let result = {};
  objectEach(obj, (val, key) => {
      result[key] = val;
  });
  expect(result).toEqual({ a: 1, b:2, d: 3, e: 4, h: 6 });
});