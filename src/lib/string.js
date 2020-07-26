function getURLParameters(url) {
    var result = {};
    var urlArr = url.match(/([^?=&]+)(=([^&]*))/g) || [];
    result = urlArr.reduce(function (a, v) { return ((a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1)), a); }, {});
    return result;
}
export { getURLParameters };
