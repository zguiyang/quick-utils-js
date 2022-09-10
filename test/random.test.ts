import { test, expect } from 'vitest';

import {  randomNum, randomColor, randomWord, generateID } from '../src';

test ('randomNum create number test ', () => {

    const num = randomNum( 10, 20 );

    expect( num ).toBeGreaterThan( 9 );

    expect( num ).toBeLessThan( 21 );

});

test('random create color', () => {

    const color = randomColor();

    expect(color).toMatch(/#/);

})

test('random create word length test ', () => {

    const word = randomWord ( true, 10, 20 );

    expect( word.length ).toBeGreaterThan( 10 );

    expect( word.length ).toBeLessThan( 20 );

})

test('随机ID生成测试 ', () => {

    const id = generateID ( );

    expect( id.length ).toBeGreaterThan( 16 );

    expect( id.length ).toBeLessThan( 32 );

})