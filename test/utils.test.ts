import { digitUppercase,  getFileExtension } from '../src/utils';

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