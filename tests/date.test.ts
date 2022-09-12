import { test, expect } from 'vitest';

import { getRemainTime, getTimeLeft, dateFormat } from '../src';

test('get remain time', () => {

    const val = getRemainTime ( new  Date().getTime() + 10000 );
 
    expect( val ).toEqual({ formatStr: '0天 0小时 0分钟 10秒', d: 0, h: 0, m:0, s: 10 });
});

test('get time left', () => {

    const val = getTimeLeft ( new  Date().getTime(), new Date().getTime() + 10000 );

    expect( val ).toEqual({ d: 0, h: 0, m: 0, s: 10 });
});

test('date format', () => {

    const val = dateFormat( 1645709960833 );

    expect( val ).toEqual('2022-02-24 21:39:20');

})

test('custom date format', () => {

    const val = dateFormat( 1645709960833, 'YYYY-MM-DD' );

    expect( val ).toEqual('2022-02-24');

})