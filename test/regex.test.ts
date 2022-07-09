import { isHttpUrl, isNetWorkUrl, isHttpsUrl, isPhoneStrict, isPhone, isIdCard, isEmail, isPassword, isFieldName,
    isNumberOrLetter, isNumberOrFloat, isHexColor } from '../src/regex';

test(' is url test false', () => {

    const result = isHttpUrl('../b/cx/cvc');

    expect( result ).toBeFalsy();
});

test(' is url test true', () => {

    const result = isHttpUrl('http://www.baidu.com');

    expect( result ).toBeTruthy();
});

test('http or https url test', () => {

    expect( isNetWorkUrl('http://a.com') ).toBeTruthy();

    expect( isNetWorkUrl('https://a.com') ).toBeTruthy();

    expect( isNetWorkUrl('https://') ).toBeFalsy();

    expect( isNetWorkUrl('httpp://') ).toBeFalsy();

    expect( isNetWorkUrl('htt://') ).toBeFalsy();
});

test(' is only http url test', () => {

    expect( isHttpUrl('http://a.com') ).toBeTruthy();

    expect(  isHttpUrl('https://a.com') ).toBeFalsy();

    expect( isHttpUrl('https://') ).toBeFalsy();

});

test(' is only https url test', () => {

    expect( isHttpsUrl('https://a.com') ).toBeTruthy();

    expect( isHttpsUrl('http://a.com') ).toBeFalsy();

    expect( isHttpsUrl('http://') ).toBeFalsy();

});

test('phone strict test', () => {

    expect( isPhoneStrict('akj') ).toBeFalsy();

    expect( isPhoneStrict('181') ).toBeFalsy();

    expect( isPhoneStrict('1818888888888') ).toBeFalsy();

    expect( isPhoneStrict('1819067838') ).toBeFalsy();

    expect( isPhoneStrict('12345678900') ).toBeFalsy();

    expect( isPhoneStrict('18190678380') ).toBeTruthy();

});

test('phone test', () => {

    expect( isPhone('akj') ).toBeFalsy();

    expect( isPhone('181') ).toBeFalsy();

    expect(  isPhone('1819067838') ).toBeFalsy();

    expect( isPhone('18190678380') ).toBeTruthy();

    expect( isPhone('12345678900') ).toBeTruthy();

});

test('id card test', () => {

    expect( isIdCard('akj') ).toBeFalsy();

    expect( isIdCard('51089898hj') ).toBeFalsy();

    expect(  isIdCard('51072519970228741f') ).toBeFalsy();

    expect( isIdCard('510725199702287410') ).toBeTruthy();

    expect( isIdCard('51072519970228741x') ).toBeTruthy();

});

test('email test', () => {

    expect( isEmail('2770723534qq.com') ).toBeFalsy();

    expect( isEmail('qq.com') ).toBeFalsy();

    expect(  isEmail('@.com') ).toBeFalsy();

    expect( isEmail('2770723534@qq') ).toBeFalsy();

    expect( isEmail('2770723534@qq.com') ).toBeTruthy();

    expect( isEmail('2770723534@stacs.cn') ).toBeTruthy();

    expect( isEmail('ahbjh_bjhb@stacs.cn') ).toBeTruthy();

    expect( isEmail('ahbjh98898@stacs.cn') ).toBeTruthy();

});

test('password test', () => {

    expect( isPassword('2770723534qq.com') ).toBeFalsy();

    expect( isPassword('1234554565') ).toBeFalsy();

    expect(  isPassword('jhjhkhjkhj') ).toBeFalsy();

    expect( isPassword('GJHJH5567') ).toBeFalsy();

    expect( isPassword('123@asf') ).toBeFalsy();

    expect( isEmail('2770723534@FHGF.com') ).toBeTruthy();

});

test('field name test ', () => {


    expect( isFieldName('') ).toBeFalsy();

    expect( isFieldName('+-hhhhhhhhhhhhhhhhcmghnjmhgfghjghjvhggjfhggjghghgfghnjhjghgffbgnhj') ).toBeFalsy();

    expect( isFieldName('+-hhh') ).toBeTruthy();

    expect( isFieldName('rr!!') ).toBeTruthy();

})

test('number or letter test ', () => {

    expect( isNumberOrLetter('!!!') ).toBeFalsy();

    expect( isNumberOrLetter('') ).toBeFalsy();

    expect( isNumberOrLetter('4455') ).toBeTruthy();

    expect( isNumberOrLetter('sfsfs') ).toBeTruthy();

    expect( isNumberOrLetter('sfsfs345ß') ).toBeFalsy();

    expect( isNumberOrLetter('sfsfs345ßAAD') ).toBeFalsy();

})

test('number float test ', () => {

    expect( isNumberOrFloat('!!!') ).toBeFalsy();

    expect( isNumberOrFloat('0' ) ).toBeFalsy();

    expect( isNumberOrFloat('9999999999999999999999999.999999999999999') ).toBeFalsy();

    expect( isNumberOrFloat('9999999999999999999.999999999') ).toBeFalsy();

    expect( isNumberOrFloat('999..999') ).toBeFalsy();

    expect( isNumberOrFloat('999.99.9') ).toBeFalsy();

    expect( isNumberOrFloat('999.999') ).toBeTruthy();

    expect( isNumberOrFloat('9999999999999999999.99999999') ).toBeTruthy();

})

test ( 'color test', () => {

    expect( isHexColor('124') ).toBeFalsy();

    expect( isHexColor('124456') ).toBeFalsy();

    expect( isHexColor('dbdbdb') ).toBeFalsy();

    expect( isHexColor('#') ).toBeFalsy();

    expect( isHexColor('#dbdbdb') ).toBeTruthy();

    expect( isHexColor('#fff') ).toBeTruthy();

})
