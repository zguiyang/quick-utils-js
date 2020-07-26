"use strict";function r(r,t){var e="function"==typeof Symbol&&r[Symbol.iterator];if(!e)return r;var n,o,c=e.call(r),i=[];try{for(;(void 0===t||t-- >0)&&!(n=c.next()).done;)i.push(n.value)}catch(r){o={error:r}}finally{try{n&&!n.done&&(e=c.return)&&e.call(c)}finally{if(o)throw o.error}}return i}function t(r){return"[object Array]"===Object.prototype.toString.call(r)}function e(r){return"[object Object]"===Object.prototype.toString.call(r)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.getURLParameters=function(r){return(r.match(/([^?=&]+)(=([^&]*))/g)||[]).reduce((function(r,t){return r[t.slice(0,t.indexOf("="))]=t.slice(t.indexOf("=")+1),r}),{})},exports.objectClone=function r(t){var n=t.constructor===Array?[]:{};for(var o in t)t.hasOwnProperty(o)&&(t[o]&&e(t[o])?(n[o]=t[o].constructor===Array?[]:{},n[o]=r(t[o])):n[o]=t[o]);return n},exports.objectDiff=function r(n,o){var c={};return Object.keys(o).forEach((function(i){if(n[i]){if(e(o[i])){var u=r(n[i]||{},o[i]);return a=u,void(0===Object.keys(a).length&&(c[i]=u))}var a;(t(o[i])||n[i]!==o[i])&&(c[i]=o[i])}else c[i]=o[i]})),c},exports.objectEach=function r(t,n){if(!e(t))throw Error("Parameter must be object");Object.keys(t).forEach((function(o){var c=t[o];e(c)&&c?r(c,n):n(c,o)}))},exports.objectToQueryString=function(n){return n?Object.entries(n).reduce((function(n,o){var c=r(o,2),i=c[0],u=c[1],a=0===n.length?"":"&";return e(u)||t(u)?n+=u?""+a+i+"="+JSON.stringify(u):"":n+=u?""+a+i+"="+u:"",n}),""):""},exports.objectToString=function(t,e,n){var o,c,i="";try{for(var u=
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function(r){var t="function"==typeof Symbol&&Symbol.iterator,e=t&&r[t],n=0;if(e)return e.call(r);if(r&&"number"==typeof r.length)return{next:function(){return r&&n>=r.length&&(r=void 0),{value:r&&r[n++],done:!r}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}(Object.entries(t)),a=u.next();!a.done;a=u.next()){var f=r(a.value,2),l=f[0],y=f[1];n?n(l,y):i+=l+":"+y+(e||";")}}catch(r){o={error:r}}finally{try{a&&!a.done&&(c=u.return)&&c.call(u)}finally{if(o)throw o.error}}return i};
