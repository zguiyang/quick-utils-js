import { describe, test, expect } from 'vitest';

import { digitUppercase,  getFileExtension,getFileSize } from '../../src';

test('amount to uppercase', () => {

    expect(digitUppercase( 100 )).toEqual('壹佰元整');
});

test('decimal amount to uppercase', () => {

    expect(digitUppercase( 100.99 )).toEqual('壹佰元玖角玖分');
});

test ('get file ext name 1', () => {

    const fileName = 'file.jpg';
    expect( getFileExtension( fileName )).toBe('jpg');

})

test ('get file ext name 2', () => {

    const fileName = 'file.JPG';
    expect( getFileExtension( fileName )).toBe('jpg');

})

describe ('get file size test', () => {

    it ('get file size normal', () => {

        expect( getFileSize(1024) ).toBe('1 KB')
    });
    it ( 'get file size in unitType', () => {

        expect(getFileSize(1025, 'KB')).toBe('1.00');
        expect(getFileSize(10026, 'MB')).toBe('0.01');
        expect(getFileSize(1002610026, 'GB')).toBe('0.93');
        expect(getFileSize(100261002610026, 'TB')).toBe('91.19');
    } );

    it ( 'get file size unit', () => {

        expect(getFileSize(1025, 'KB', true)).toBe('1.00 KB');
        expect(getFileSize(10026, 'MB', true)).toBe('0.01 MB');
        expect(getFileSize(1002610026, 'GB', true)).toBe('0.93 GB');
        expect(getFileSize(100261002610026, 'TB', true)).toBe('91.19 TB');
    } );

})