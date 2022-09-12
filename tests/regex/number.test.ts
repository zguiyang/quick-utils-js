import { describe, expect, it } from 'vitest';

import { largeNumberReg, integerReg, strictDecimalsReg, looseDecimalsReg } from '../../src';

describe ( '金额正则测试', () => {

  it ( '19.8n整数金额测试', () => {

    expect ( largeNumberReg ( '0.' ) ).toBeFalsy ();

    expect ( largeNumberReg ( '12.' ) ).toBeFalsy ();

    expect ( largeNumberReg ( '0.8' ) ).toBeFalsy ();

    expect ( largeNumberReg ( '0..8' ) ).toBeFalsy ();

    expect ( largeNumberReg ( '111.888888888' ) ).toBeFalsy ();

    expect ( largeNumberReg ( '1111111111111111111111111111111111111111.88888888' ) ).toBeFalsy ();

    expect ( largeNumberReg ( '111.88888888' ) ).toBeTruthy ();

    expect ( largeNumberReg ( '1999999999999999999.88888888' ) ).toBeTruthy ();

  } );

} );

describe ( '整数正则测试', () => {

  it ( '合法整数测试', () => {

    expect ( integerReg ( '0.' ) ).toBeFalsy ();

    expect ( integerReg ( '12.88' ) ).toBeFalsy ();

    expect ( integerReg ( '-12.88' ) ).toBeFalsy ();

    expect ( integerReg ( '012' ) ).toBeFalsy ();

    expect ( integerReg ( '0012' ) ).toBeFalsy ();

    expect ( integerReg ( '-12' ) ).toBeFalsy ();

    expect ( integerReg ( '12' ) ).toBeTruthy ();

    expect ( integerReg ( '102' ) ).toBeTruthy ();

    expect ( integerReg ( '-102', true ) ).toBeTruthy ();

    expect ( integerReg ( '102', true ) ).toBeTruthy ();

  } );

} );

describe ( '小数正则测试', () => {

  it ( '弱校验小数测试', () => {

    expect ( looseDecimalsReg ( '0.' ) ).toBeFalsy ();

    expect ( looseDecimalsReg ( '12.' ) ).toBeFalsy ();

    expect ( looseDecimalsReg ( '12.21' ) ).toBeTruthy ();

    expect ( looseDecimalsReg ( '00.0123', 4 ) ).toBeTruthy ();

    expect ( looseDecimalsReg ( '01.0123', 4 ) ).toBeTruthy ();

    expect ( looseDecimalsReg ( '11.22' ) ).toBeTruthy ();

    expect ( looseDecimalsReg ( '-11.22' ) ).toBeTruthy ();

    expect ( looseDecimalsReg ( '-0.22' ) ).toBeTruthy ();

  } );

  it ( '严格小数测试', () => {

    expect ( strictDecimalsReg ( '0.' ) ).toBeFalsy ();

    expect ( strictDecimalsReg ( '12.' ) ).toBeFalsy ();

    expect ( strictDecimalsReg ( '00.0123' ) ).toBeFalsy ();

    expect ( strictDecimalsReg ( '013.88' ) ).toBeFalsy ();

    expect ( strictDecimalsReg ( '-0.0123' ) ).toBeFalsy ();

    expect ( strictDecimalsReg ( '0.0123', { decimalsMax: 4 } ) ).toBeTruthy ();

    expect ( strictDecimalsReg ( '-0.01', { minus: true } ) ).toBeTruthy ();

    expect ( strictDecimalsReg ( '0.01', { minus: true } ) ).toBeTruthy ();

    expect ( strictDecimalsReg ( '12.21' ) ).toBeTruthy ();

  } );

} );