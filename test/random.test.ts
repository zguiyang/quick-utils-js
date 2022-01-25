import {  randomNum, randomColor, randomWord } from '../src/random';

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