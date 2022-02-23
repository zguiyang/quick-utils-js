import { getRemainTime, getTimeLeft } from '../src/date';

test('get remain time', () => {

    const val = getRemainTime ( new  Date().getTime() + 10000 );

    expect( val ).toEqual({ formatStr: '0天 0小时 0分钟 10秒', d: 0, h: 0, m:0, s: 10 });
});

test('get time left', () => {

    const val = getTimeLeft ( new  Date().getTime(), new Date().getTime() + 10000 );

    expect( val ).toEqual({ d: 0, h: 0, m: 0, s: 10 });
});