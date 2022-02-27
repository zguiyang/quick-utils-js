import { setScrollTop, getScrollTop, scrollToBottom } from '../src/dom';
describe('dom api test', () => {
    window.scrollTo = jest.fn();
    let body = document.body,
        bodyHeight = getComputedStyle(body).getPropertyValue('height'),
        top = 100;

    body.style.height = '10000px';

    setScrollTop( top );

    test ('set scroll top', () => {
        expect(getScrollTop()).toBe( 0 );
    });


});