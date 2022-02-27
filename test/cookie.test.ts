import { getCookie, setCookie, removeCookie } from "../src/cookie";

describe('cookie api test', () => {
    const cookieName = 'test-cookie';
    test('set cookie test', () => {
        setCookie(cookieName, cookieName, 1);
    });
    test('get test cookie', () => {
        expect( getCookie( cookieName)).toBe( cookieName );
    })
    test('remove cookie', () => {

        removeCookie( cookieName );

        expect( getCookie( cookieName )).toBe('');
    });
});