/**
 * @vitest-environment jsdom
 */

import { describe, beforeEach, it, expect, vi } from 'vitest';

import { setScrollTop, getScrollTop } from '../src';

window.scrollTo = vi.fn( () => { });

 describe ('dom scroll top api test', () => {
     beforeEach( () => {
         const box = document.createElement('div' );
         box.setAttribute('id', 'box');
         box.setAttribute('height', '1000px');
         document.body.appendChild( box );
         setScrollTop( 0 );
     })

    it ('set scroll top', () => {
        const box = document.getElementById('box');
        expect(box).not.toBeNull();
        expect(getScrollTop()).toBe( 0 );
    });


});