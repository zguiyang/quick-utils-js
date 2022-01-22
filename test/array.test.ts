import { uniqueArrayObj } from '../src/array';


test('The object element is deduplicated', () => {
  const arr = [ { a: 1, b:1 }, { a: 1, b: 1 }, { a: 1, b: 1 }, { d: 1, e: 2 } ];

  const result = uniqueArrayObj( arr );

  expect( result ).toEqual([ { a: 1, b: 1 }, { d: 1, e: 2} ] );
});