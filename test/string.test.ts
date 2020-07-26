import { getURLParameters } from '../src/lib/string';

test('get url params', () => {
  let url = 'http://www.baidu.com?a=1&b=2&c=3';
  const query = getURLParameters(url);
  expect(query).toEqual({ a: "1", b: "2", c: "3" });
})