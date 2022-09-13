import { test, expect, describe } from 'vitest';

import {
  getValueType, isNumber, isArray, isEmptyArray, isBoolean, isEmptyObject, isObject, isString,
  isPromise, isNull,isDate, isAsyncFunction, isPlainFunction } from '../src';

test ('enhanceTypeof test...', () => {

  expect ( getValueType ( '123' ) ).toBe ( 'string' );

  expect ( getValueType ( 123 ) ).toBe ( 'number' );

  expect ( getValueType ( [ { a: 1 } ] ) ).toBe ( 'array' );

  expect ( getValueType ( { a: 1 } ) ).toBe ( 'object' );

  expect ( getValueType ( null ) ).toBe ( 'null' );

});

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

test('isNull true', () => {

  expect( isNull( {} )).toBeFalsy();
  expect( isNull( null )).toBeTruthy();

})

test('isDate true', () => {

  expect( isDate( '1998-01-02' )).toBeFalsy();
  expect( isDate(  new Date () )).toBeTruthy();
  expect( isDate(  new Date('1998-01-02') )).toBeTruthy();

})

test ('isPromise test', () => {

  const a = () => { console.log('test...') };

  function b () {

    return Promise.resolve({});
  }

  const c = new Promise ( resolve => {} );

  expect( isPromise ( a ) ).toBeFalsy();

  expect ( isPromise( b () ) ).toBeTruthy();

  expect( isPromise( c ) ).toBeTruthy();

});

describe ('function validator test...', () => {

  it ('async function', () => {

    const fn1 = () => {};
    const fn2 = async () => { return Promise.resolve( { } ) };
    const fn3 = () => { return new Promise(resolve => resolve({}) )};

    expect ( isAsyncFunction( fn1 ) ).toBeFalsy();
    expect ( isAsyncFunction( fn3 ) ).toBeFalsy ();
    expect ( isAsyncFunction( fn2 ) ).toBeTruthy();

  });

  it ('plain function', () => {

    const fn1 = () => {};
    const fn2 = async () => { return Promise.resolve( { } ) };
    const fn3 =  () => { return new Promise(resolve => {})};

    expect ( isPlainFunction( fn2 ) ). toBeFalsy();
    expect ( isPlainFunction( fn3 ) ).toBeTruthy();
    expect ( isPlainFunction( fn1 ) ).toBeTruthy();
  });

})