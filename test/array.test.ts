import { describe, expect } from 'vitest';

import { uniqueArrayObj, arrayRecursionMap, flatTreeArray, sliceArray } from '../src';


describe('The object element is deduplicated', () => {
  const arr = [ { a: 1, b:1 }, { a: 1, b: 1 }, { a: 1, b: 1 }, { d: 1, e: 2 } ];

  const arr2 =  [ { a: 1, b:1 }, { a: 2, b: 1 }, { a: 3, b: 1 }, { d: 1, e: 2 } ];

  const result = uniqueArrayObj ( arr );

  const result2 = uniqueArrayObj ( arr2, 'b' );

  expect( result ).toEqual([ { a: 1, b: 1 }, { d: 1, e: 2 } ] );

  expect( result2 ).toEqual([ { a: 1, b: 1 }, { d: 1, e: 2 } ] );

});


describe('array recursion map callback', () => {

  const list:any[] = [ { label:'a', value:1, id: '111', children: [ {  label: '999', value: 2, id: 2 } ] }, { label: '90998', value: 7, id: 10 } ];

  const result: any[] = arrayRecursionMap( list, ( item ) => {
    const temp: any = {
      key: item.label,
      val: item.value,
    };

    if ( item.children ) {

      temp.children = item.children as any;

    }

    return temp;

  }, 'children');

  expect( result ).toEqual([ {key:'a', val:1, children: [ { key: '999', val: 2 } ] }, { key: '90998', val: 7 } ]);

});

describe('tree array to flat array', () => {

  const list = [ { a: 1, b: 1, children: [ { c: 1, d: 1 } ] }, { b:2, c: 2}, { d:3, children: [ { e: 4 }] } ];

  const result: any[] = flatTreeArray( list, 'children');

  expect( result ).toEqual([ { a: 1, b: 1}, { c: 1, d: 1 }, { b: 2, c: 2 }, { d: 3 }, { e: 4  } ]);

});

describe('slice array', () => {

  const list = [ 1, 2, 3, 4, 5, 6 ];

  const result: any[] = sliceArray( list, 2);

  expect( result ).toEqual([ [ 1, 2], [ 3, 4 ], [ 5, 6 ] ]);

});