import { describe, expect } from 'vitest';

import { numberToThousands, thousandsToString, numberCalculate } from "../src";

describe('number to thousands', () => {

    it ('format base test', () => {
        const result = numberToThousands('100000');

        expect( result ).toEqual('100,000');
    })

    it ('format unit test', () => {
        const result = numberToThousands('100000', 'usd');

        expect( result ).toEqual('100,000 usd');
    })

    it ('format options test', () => {
        const result = numberToThousands('10000.999', '', {
            integerLength: 4,
            decimalsLength: 2,
        });

        expect( result ).toEqual('1,000.99');
    })

})

describe('thousands to string', () => {

    it ( 'base format', function () {

        const result = thousandsToString('100,000');

        expect( result ).toEqual('100000');

    } );

})

describe('number calculate', () => {

    it ( 'plus in calculate', function () {

        const result = numberCalculate(0.1, 0.2, 'plus');

        expect( result ).toEqual('0.3');
    } );

    it ( 'minus in calculate', function () {
        const result = numberCalculate('999', '99', 'minus');

        expect( result ).toEqual('900');
    } );

    it ( 'times in calculate', function () {
        const result = numberCalculate('10', '10', 'times');

        expect( result ).toEqual('100');
    } );

    it ( 'div in calculate', function () {
        const result = numberCalculate('100', '5', 'div');

        expect( result ).toEqual('20');
    } );

    it ( 'idiv in calculate', function () {
        const result = numberCalculate('10', '3', 'idiv');

        expect( result ).toEqual('3');
    } );
    it ( 'mod in calculate', function () {
        const result = numberCalculate('1', '0.9', 'mod');

        expect( result ).toEqual('0.1');
    } );
    it ( 'pow in calculate', function () {
        const result = numberCalculate('3', '-2', 'pow');

        expect( result ).toEqual('0.11111111');
    } );

})

describe ('calculate for big number', () => {

    it ( 'plus for big number', function () {
        const result = numberCalculate('9999999999999999999', '9999999999999999999', 'plus');

        expect( result ).toEqual('19999999999999999998');
    } );

    it ( 'minus for big number', function () {
        const result = numberCalculate('9999999999999999999', '99999999999999999', 'minus');

        expect( result ).toEqual('9900000000000000000');
    } );

    it ( 'times for big number', function () {
        const result = numberCalculate('9999999999999999999', '9999999999', 'times');

        expect( result ).toEqual('99999999989999999990000000001');
    } );
})