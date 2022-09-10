import { describe, it, expect } from 'vitest';

import { getCookie, setCookie, removeCookie } from "../src/cookie";

describe('cookie api test', () => {
    const cookieName = 'test-cookie';
    it('set cookie test', () => {
        setCookie(cookieName, cookieName, 1);
    });
    it('get test cookie', () => {
        expect( getCookie( cookieName)).toBe( cookieName );
    })
    it('remove cookie', () => {

        removeCookie( cookieName );

        expect( getCookie( cookieName )).toBe('');
    });
});