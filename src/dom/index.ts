export interface DomOffsetPos {
  left: number;
  top: number;
  parent: null | Element;
}

/**
 *
 * @desc get scroll top value
 */

export function getScrollTop (): number {

  const dom = document.documentElement || document.documentElement || document.body;

  return dom.scrollTop;

}

/**
 * Scroll To Top
 * @param { element } element element
 * **/

export function scrollToTop ( element: Element ) {

  element.scrollIntoView ( { behavior: 'smooth', block: 'start' } );

}

/**
 * Scroll To Bottom
 * @param { element } element element
 * **/

export function scrollToBottom ( element: Element ) {

  element.scrollIntoView ( { behavior: 'smooth', block: 'end' } );

}

/**
 *
 * @desc set scroll top value
 * @param { number } value
 */

export function setScrollTop ( value:number ): number {

  window.scrollTo ( 0, value );

  return value;

}

/**
 *
 * @desc  Within ${duration}，The scroll bar scrolls smoothly to ${to}
 * @param { number } to
 * @param { number } durationVal
 */

export function scrollTo ( to, durationVal?: number ) {

  const duration = durationVal || 0;

  if ( duration < 0 ) {

    setScrollTop ( to );

    return;

  }

  const requestAnimFrame = ( function () {

    return window.requestAnimationFrame ||
        ( window as any ).webkitRequestAnimationFrame ||
        ( window as any ).mozRequestAnimationFrame ||
        function ( callback ) {

          window.setTimeout ( callback, 1000 / 60 );

        };

  } ) ();


  let diff = to - getScrollTop ();

  if ( diff === 0 ) return;

  let step = diff / duration * 10;

  requestAnimFrame ( () => {

    if ( Math.abs ( step ) > Math.abs ( diff ) ) {

      setScrollTop ( getScrollTop () + diff );

      return;

    }

    setScrollTop ( getScrollTop () + step );

    if ( diff > 0 && getScrollTop () >= to || diff < 0 && getScrollTop () <= to ) {

      return;

    }

    scrollTo ( to, duration - 16 );

  } );

}

/**
 *
 * @desc  Gets an element's distance from the document, similar to offset() in jQ.
 * @param { HTMLElement| null } ele element node
 * @returns DomOffsetPos
 */

export function getElOffsetPos ( ele:HTMLElement | null ): DomOffsetPos {

  let pos:DomOffsetPos = {
    left: 0,
    top: 0,
    parent: null,
  };

  if ( !ele ) {

    return pos;

  }

  pos.left = ele.offsetLeft;

  pos.top = ele.offsetTop;

  pos.parent = ele.offsetParent;

  return pos;

}


