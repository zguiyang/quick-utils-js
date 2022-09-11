/**
 * @vitest-environment jsdom
 */

import { describe, it, expect } from 'vitest';

import { setScrollTop, getScrollTop } from '../src';
describe('dom api test', () => {
    let body = document.body,
        bodyHeight = getComputedStyle(body).getPropertyValue('height'),
        top = 100;

    body.style.height = '10000px';

    setScrollTop( top );

    it ('set scroll top', () => {
        expect(getScrollTop()).toBe( 0 );
    });


});