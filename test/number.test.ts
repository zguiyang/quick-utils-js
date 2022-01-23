import { numberToThousands, thousandsToString, numberCalculate } from "../src/number";

test('number to thousands', () => {

    const result = numberToThousands('100000');

    expect( result ).toEqual('100,000');

})

test('thousands to string', () => {

    const result = thousandsToString('100,000');

    expect( result ).toEqual('100000');

})

test('number calculate', () => {

    const result = numberCalculate(0.1, 0.2, 'plus');

    expect( result ).toEqual('0.3');

})

test('big number calculate', () => {

    const result = numberCalculate(9999999999, 9999999999, 'plus');

    expect( result ).toEqual('19999999998');

})