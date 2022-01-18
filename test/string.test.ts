import { getURLParameters, getCustomKebabCase, getCustomCamelCase } from '../src/string';

test('get url params', () => {
  let url = 'http://www.baidu.com?a=1&b=2&c=3';
  const query = getURLParameters(url);
  expect(query).toEqual({ a: "1", b: "2", c: "3" });
})

test('CamelCase to kebab-case', () => {

  let key = 'getElementById';

  const resultKey = getCustomKebabCase(key);

  expect( resultKey ).toBe('get-element-by-id');

});

test('CamelCase to under_score_case', () => {

  let key = 'getElementById';

  const resultKey = getCustomKebabCase(key, '_');

  expect( resultKey ).toBe('get_element_by_id');

});

test('pascal to kebab-case', () => {

  let key = 'GetElementById';

  const resultKey = getCustomKebabCase(key);

  expect( resultKey ).toBe('get-element-by-id');

});

test('CamelCase  to custom name', () => {

  let key = 'getElementById';

  const resultKey = getCustomKebabCase(key, '%');

  expect( resultKey ).toBe('get%element%by%id');

});

test('pascal to under_score_case', () => {

  let key = 'GetElementById';

  const resultKey = getCustomKebabCase(key, '_');

  expect( resultKey ).toBe('get_element_by_id');

});

test('kebab-case to CamelCase', () => {

  let key = 'get-element-by-id';

  const resultKey = getCustomCamelCase(key);

  expect( resultKey ).toBe('getElementById');

});

test('under_score_case to CamelCase', () => {

  let key = 'get_element_by_id';

  const resultKey = getCustomCamelCase(key, '_');

  expect( resultKey ).toBe('getElementById');

});

test('custom name to CamelCase', () => {

  let key = 'get%element%by%id';

  const resultKey = getCustomCamelCase(key, '%');

  expect( resultKey ).toBe('getElementById');

});