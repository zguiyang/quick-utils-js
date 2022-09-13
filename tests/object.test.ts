import { test, describe, expect } from 'vitest';

import { objectDiff, objectEach, resetObjectValue } from '../src';


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

test('object diff array element', () => {
  const diff1 = { name: 'yang', phone: '18190678380', list: [ { a: '1 ', b: '2' } ], list2: [ [ 1 ] ] };
  const diff2 = { name: 'yang2', phone: '18190678380', list: [ { a: '1 ', b: '5', c: '3' } ], list2: [ [ 1, 2, 3 ] ] };
  const diff = objectDiff(diff1, diff2);
  expect(diff).toEqual({ name: 'yang2', list:[ { b: '5', c: '3'} ], list2: [ [ 1, 2, 3 ] ] });
})


test('object diff delete key', () => {
  const diff1 = { name: 'yang', age: 20 };
  const diff2 = {  age: 18, };
  const diff = objectDiff(diff1, diff2);
  expect(diff).toEqual({ age: 18 });
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

describe ('reset object value custom options', () => {
  it ('default reset', () => {
    const obj = {
      a: 'describe',
      b: {
        c: [ 'describe' ],
        d: {
          e: 123,
        },
      },
      d: () => {

        console.log ( 'describe' );

      },
    };
    let result = resetObjectValue( obj );
    expect(result).toEqual({
      a: null,
      b: {
        c: null,
        d: {
          e: null,
        },
      },
      d: null,
    } );
  })
  it ('ignore key reset', () => {
    const obj = {
      a: 'describe',
      b: {
        c: [ 'describe' ],
        d: {
          e: 123,
        },
      },
    };
    let result = resetObjectValue( obj, { ignore: [ 'c', 'd' ] } );
    expect(result).toEqual({
      a: null,
      b: {
        c: [ 'describe' ],
        d: {
          e: 123,
        },
      },
    } );
  })

  it ('custom reset key value', () => {
    const obj = {
      a: 'describe',
      b: {
        c: [ 'describe' ],
        d: {
          e: 123,
        },
      },
    };
    let result = resetObjectValue( obj, { resetKeyValues: { c: 'ccc', e: [ 333 ] } } );
    expect(result).toEqual({
      a: null,
      b: {
        c: 'ccc',
        d: {
          e: [ 333 ],
        },
      },
    } );
  })

  it ('ignore key and custom reset key value  reset', () => {
    const obj = {
      a: 'aaaaa',
      b: {
        c: [ 'cccc' ],
        d: {
          e: 123,
        },
      },
    };
    let result = resetObjectValue( obj, { ignore: [ 'c' ], resetKeyValues: { c: 'test,,,' } } );
    expect(result).toEqual({
      a: null,
      b: {
        c: [ 'cccc' ],
        d: {
          e: null,
        },
      },
    } );
  })

});