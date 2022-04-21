export interface DomOffsetPos {
  left: number;
  top: number;
  parent: null | Element;
}

/**
 *
 * @desc 获取滚动条距顶部的距离
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
 * @desc 设置滚动条距顶部的距离
 * @param { number } value
 */

export function setScrollTop ( value:number ): number {

  window.scrollTo ( 0, value );

  return value;

}

/**
 *
 * @desc  在${duration}时间内，滚动条平滑滚动到${to}指定位置
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
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
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
 * @desc  获取一个元素的距离文档(document)的位置，类似jQ中的offset()
 * @param { HTMLElement| null } ele 元素节点
 * @returns { DomOffsetPos }
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


