/**
 * @vitest-environment jsdom
 */

import { describe, it, expect } from 'vitest';

import { getExplore, getOS } from '../../src';

describe('device api test', () => {
    Object.defineProperty(window.navigator, 'userAgent', {
        value: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.109 Safari/537.36',
    });

    it('getExplore test', () => {
        expect(getExplore()).toBe('Chrome: 98.0.4758.109');
    });

    it('getOs test', () => {
       expect( getOS()).toBeUndefined();
    });
});