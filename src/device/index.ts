/**
 *
 * @desc get Browser type and version
 * @return {String}
 */

export function getExplore ():string {

  const sys:Record<string, any> = {};

  const ua = window.navigator.userAgent.toLowerCase ();

  let s:RegExpMatchArray | null = null;

  ( s = ua.match ( /rv:([\d.]+)\) like gecko/ ) ) ? sys.ie = s[ 1 ] :
    ( s = ua.match ( /msie ([\d\.]+)/ ) ) ? sys.ie = s[ 1 ] :
      ( s = ua.match ( /edge\/([\d\.]+)/ ) ) ? sys.edge = s[ 1 ] :
        ( s = ua.match ( /firefox\/([\d\.]+)/ ) ) ? sys.firefox = s[ 1 ] :
          ( s = ua.match ( /(?:opera|opr).([\d\.]+)/ ) ) ? sys.opera = s[ 1 ] :
            ( s = ua.match ( /chrome\/([\d\.]+)/ ) ) ? sys.chrome = s[ 1 ] :
              ( s = ua.match ( /version\/([\d\.]+).*safari/ ) ) ? sys.safari = s[ 1 ] : 0;

  // 根据关系进行判断

  if ( sys.ie ) return ( `IE: ${ sys.ie }` );

  if ( sys.edge ) return ( `EDGE: ${ sys.edge }` );

  if ( sys.firefox ) return ( `Firefox: ${ sys.firefox }` );

  if ( sys.chrome ) return ( `Chrome: ${ sys.chrome }` );

  if ( sys.opera ) return ( `Opera: ${ sys.opera }` );

  if ( sys.safari ) return ( `Safari: ${ sys.safari }` );

  return 'Unkonwn';

}



/**
 *
 * @desc get system type
 * @return {String}
 */

export function getOS (): string | undefined {

  let userAgent = 'navigator' in window && 'userAgent' in navigator && navigator.userAgent.toLowerCase () || '';

  // let vendor = 'navigator' in window && 'vendor' in navigator && navigator.vendor.toLowerCase () || '';

  let appVersion = 'navigator' in window && 'appVersion' in navigator && navigator.appVersion.toLowerCase () || '';

  if ( /iphone/i.test ( userAgent ) || /ipad/i.test ( userAgent ) || /ipod/i.test ( userAgent ) ) return 'ios';

  if ( /android/i.test ( userAgent ) ) return 'android';

  if ( /win/i.test ( appVersion ) && /phone/i.test ( userAgent ) ) return 'windowsPhone';

  if ( /mac/i.test ( appVersion ) ) return 'MacOSX';

  if ( /win/i.test ( appVersion ) ) return 'windows';

  if ( /linux/i.test ( appVersion ) ) return 'linux';

}