import {test, expect, describe} from 'vitest';

import {
  replaceWhiteSpace,
  getCustomKebabCase,
  getCustomCamelCase,
} from '../src';

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

describe ('replace string of space white', () => {
  it ('only replace for white spaces at both ends of string', () => {
    expect( replaceWhiteSpace (' 123' ) ).toBe('123');
    expect( replaceWhiteSpace ('123 ' ) ).toBe('123');
    expect( replaceWhiteSpace (' 123 ' ) ).toBe('123');
    expect( replaceWhiteSpace (' 1 2 3 ' ) ).toBe('123');
    expect( replaceWhiteSpace (' 12 3 ' ) ).toBe('123');
    expect( replaceWhiteSpace (' 1      2 3 ' ) ).toBe('123');
  })
  it ('replace all white space for string', () => {
    expect( replaceWhiteSpace (' 123', true ) ).toBe('123');
    expect( replaceWhiteSpace ('123 ', true ) ).toBe('123');
    expect( replaceWhiteSpace (' 123 ', true ) ).toBe('123');
    expect( replaceWhiteSpace (' 1 2 3 ', true ) ).toBe('1 2 3');
    expect( replaceWhiteSpace (' 12 3 ', true ) ).toBe('12 3');
    expect( replaceWhiteSpace (' 12 3    ', true ) ).toBe('12 3');
  })
})
