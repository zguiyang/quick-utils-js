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
function r(r,t){var e="function"==typeof Symbol&&r[Symbol.iterator];if(!e)return r;var n,o,c=e.call(r),i=[];try{for(;(void 0===t||t-- >0)&&!(n=c.next()).done;)i.push(n.value)}catch(r){o={error:r}}finally{try{n&&!n.done&&(e=c.return)&&e.call(c)}finally{if(o)throw o.error}}return i}function t(r){return"[object Array]"===Object.prototype.toString.call(r)}function e(r){return"[object Object]"===Object.prototype.toString.call(r)}function n(r,t){if(!e(r))throw Error("Parameter must be object");Object.keys(r).forEach((function(o){var c=r[o];e(c)&&c?n(c,t):t(c,o)}))}function o(r){var t=r.constructor===Array?[]:{};for(var n in r)r.hasOwnProperty(n)&&(r[n]&&e(r[n])?(t[n]=r[n].constructor===Array?[]:{},t[n]=o(r[n])):t[n]=r[n]);return t}function c(r,n){var o={};return Object.keys(n).forEach((function(i){if(r[i]){if(e(n[i])){var u=c(r[i]||{},n[i]);return a=u,void(0===Object.keys(a).length&&(o[i]=u))}var a;(t(n[i])||r[i]!==n[i])&&(o[i]=n[i])}else o[i]=n[i]})),o}function i(n){return n?Object.entries(n).reduce((function(n,o){var c=r(o,2),i=c[0],u=c[1],a=0===n.length?"":"&";return e(u)||t(u)?n+=u?""+a+i+"="+JSON.stringify(u):"":n+=u?""+a+i+"="+u:"",n}),""):""}function u(t,e,n){var o,c,i="";try{for(var u=function(r){var t="function"==typeof Symbol&&Symbol.iterator,e=t&&r[t],n=0;if(e)return e.call(r);if(r&&"number"==typeof r.length)return{next:function(){return r&&n>=r.length&&(r=void 0),{value:r&&r[n++],done:!r}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}(Object.entries(t)),a=u.next();!a.done;a=u.next()){var f=r(a.value,2),l=f[0],y=f[1];n?n(l,y):i+=l+":"+y+(e||";")}}catch(r){o={error:r}}finally{try{a&&!a.done&&(c=u.return)&&c.call(u)}finally{if(o)throw o.error}}return i}function a(r){return(r.match(/([^?=&]+)(=([^&]*))/g)||[]).reduce((function(r,t){return r[t.slice(0,t.indexOf("="))]=t.slice(t.indexOf("=")+1),r}),{})}export{a as getURLParameters,o as objectClone,c as objectDiff,n as objectEach,i as objectToQueryString,u as objectToString};
