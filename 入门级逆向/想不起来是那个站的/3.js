function a(t) {
    function e(t, e) {
        return t << e | t >>> 32 - e
    }
    function n(t, e) {
        var n, r, i, o, a;
        return i = 2147483648 & t,
        o = 2147483648 & e,
        n = 1073741824 & t,
        r = 1073741824 & e,
        a = (1073741823 & t) + (1073741823 & e),
        n & r ? 2147483648 ^ a ^ i ^ o : n | r ? 1073741824 & a ? 3221225472 ^ a ^ i ^ o : 1073741824 ^ a ^ i ^ o : a ^ i ^ o
    }
    function r(t, e, n) {
        return t & e | ~t & n
    }
    function i(t, e, n) {
        return t & n | e & ~n
    }
    function o(t, e, n) {
        return t ^ e ^ n
    }
    function a(t, e, n) {
        return e ^ (t | ~n)
    }
    function s(t, i, o, a, s, c, l) {
        return t = n(t, n(n(r(i, o, a), s), l)),
        n(e(t, c), i)
    }
    function c(t, r, o, a, s, c, l) {
        return t = n(t, n(n(i(r, o, a), s), l)),
        n(e(t, c), r)
    }
    function l(t, r, i, a, s, c, l) {
        return t = n(t, n(n(o(r, i, a), s), l)),
        n(e(t, c), r)
    }
    function u(t, r, i, o, s, c, l) {
        return t = n(t, n(n(a(r, i, o), s), l)),
        n(e(t, c), r)
    }
    function d(t) {
        var e, n = t.length, r = n + 8, i = (r - r % 64) / 64, o = 16 * (i + 1), a = Array(o - 1), s = 0, c = 0;
        while (c < n)
            e = (c - c % 4) / 4,
            s = c % 4 * 8,
            a[e] = a[e] | t.charCodeAt(c) << s,
            c++;
        return e = (c - c % 4) / 4,
        s = c % 4 * 8,
        a[e] = a[e] | 128 << s,
        a[o - 2] = n << 3,
        a[o - 1] = n >>> 29,
        a
    }
    function f(t) {
        var e, n, r = "", i = "";
        for (n = 0; n <= 3; n++)
            e = t >>> 8 * n & 255,
            i = "0" + e.toString(16),
            r += i.substr(i.length - 2, 2);
        return r
    }
    function p(t) {
        t = t.replace(/\r\n/g, "\n");
        for (var e = "", n = 0; n < t.length; n++) {
            var r = t.charCodeAt(n);
            r < 128 ? e += String.fromCharCode(r) : r > 127 && r < 2048 ? (e += String.fromCharCode(r >> 6 | 192),
            e += String.fromCharCode(63 & r | 128)) : (e += String.fromCharCode(r >> 12 | 224),
            e += String.fromCharCode(r >> 6 & 63 | 128),
            e += String.fromCharCode(63 & r | 128))
        }
        return e
    }
    var h, v, m, g, y, b, w, x, S, _ = Array(), T = 7, O = 12, E = 17, k = 22, C = 5, j = 9, P = 14, I = 20, M = 4, L = 11, $ = 16, D = 23, A = 6, N = 10, B = 15, z = 21;
    for (t = p(t),
    _ = d(t),
    b = 1732584193,
    w = 4023233417,
    x = 2562383102,
    S = 271733878,
    h = 0; h < _.length; h += 16)
        v = b,
        m = w,
        g = x,
        y = S,
        b = s(b, w, x, S, _[h + 0], T, 3614090360),
        S = s(S, b, w, x, _[h + 1], O, 3905402710),
        x = s(x, S, b, w, _[h + 2], E, 606105819),
        w = s(w, x, S, b, _[h + 3], k, 3250441966),
        b = s(b, w, x, S, _[h + 4], T, 4118548399),
        S = s(S, b, w, x, _[h + 5], O, 1200080426),
        x = s(x, S, b, w, _[h + 6], E, 2821735955),
        w = s(w, x, S, b, _[h + 7], k, 4249261313),
        b = s(b, w, x, S, _[h + 8], T, 1770035416),
        S = s(S, b, w, x, _[h + 9], O, 2336552879),
        x = s(x, S, b, w, _[h + 10], E, 4294925233),
        w = s(w, x, S, b, _[h + 11], k, 2304563134),
        b = s(b, w, x, S, _[h + 12], T, 1804603682),
        S = s(S, b, w, x, _[h + 13], O, 4254626195),
        x = s(x, S, b, w, _[h + 14], E, 2792965006),
        w = s(w, x, S, b, _[h + 15], k, 1236535329),
        b = c(b, w, x, S, _[h + 1], C, 4129170786),
        S = c(S, b, w, x, _[h + 6], j, 3225465664),
        x = c(x, S, b, w, _[h + 11], P, 643717713),
        w = c(w, x, S, b, _[h + 0], I, 3921069994),
        b = c(b, w, x, S, _[h + 5], C, 3593408605),
        S = c(S, b, w, x, _[h + 10], j, 38016083),
        x = c(x, S, b, w, _[h + 15], P, 3634488961),
        w = c(w, x, S, b, _[h + 4], I, 3889429448),
        b = c(b, w, x, S, _[h + 9], C, 568446438),
        S = c(S, b, w, x, _[h + 14], j, 3275163606),
        x = c(x, S, b, w, _[h + 3], P, 4107603335),
        w = c(w, x, S, b, _[h + 8], I, 1163531501),
        b = c(b, w, x, S, _[h + 13], C, 2850285829),
        S = c(S, b, w, x, _[h + 2], j, 4243563512),
        x = c(x, S, b, w, _[h + 7], P, 1735328473),
        w = c(w, x, S, b, _[h + 12], I, 2368359562),
        b = l(b, w, x, S, _[h + 5], M, 4294588738),
        S = l(S, b, w, x, _[h + 8], L, 2272392833),
        x = l(x, S, b, w, _[h + 11], $, 1839030562),
        w = l(w, x, S, b, _[h + 14], D, 4259657740),
        b = l(b, w, x, S, _[h + 1], M, 2763975236),
        S = l(S, b, w, x, _[h + 4], L, 1272893353),
        x = l(x, S, b, w, _[h + 7], $, 4139469664),
        w = l(w, x, S, b, _[h + 10], D, 3200236656),
        b = l(b, w, x, S, _[h + 13], M, 681279174),
        S = l(S, b, w, x, _[h + 0], L, 3936430074),
        x = l(x, S, b, w, _[h + 3], $, 3572445317),
        w = l(w, x, S, b, _[h + 6], D, 76029189),
        b = l(b, w, x, S, _[h + 9], M, 3654602809),
        S = l(S, b, w, x, _[h + 12], L, 3873151461),
        x = l(x, S, b, w, _[h + 15], $, 530742520),
        w = l(w, x, S, b, _[h + 2], D, 3299628645),
        b = u(b, w, x, S, _[h + 0], A, 4096336452),
        S = u(S, b, w, x, _[h + 7], N, 1126891415),
        x = u(x, S, b, w, _[h + 14], B, 2878612391),
        w = u(w, x, S, b, _[h + 5], z, 4237533241),
        b = u(b, w, x, S, _[h + 12], A, 1700485571),
        S = u(S, b, w, x, _[h + 3], N, 2399980690),
        x = u(x, S, b, w, _[h + 10], B, 4293915773),
        w = u(w, x, S, b, _[h + 1], z, 2240044497),
        b = u(b, w, x, S, _[h + 8], A, 1873313359),
        S = u(S, b, w, x, _[h + 15], N, 4264355552),
        x = u(x, S, b, w, _[h + 6], B, 2734768916),
        w = u(w, x, S, b, _[h + 13], z, 1309151649),
        b = u(b, w, x, S, _[h + 4], A, 4149444226),
        S = u(S, b, w, x, _[h + 11], N, 3174756917),
        x = u(x, S, b, w, _[h + 2], B, 718787259),
        w = u(w, x, S, b, _[h + 9], z, 3951481745),
        b = n(b, v),
        w = n(w, m),
        x = n(x, g),
        S = n(S, y);
    var R = f(b) + f(w) + f(x) + f(S);
    return R.toUpperCase()
}
function s(t, e) {
    var n = Object.keys(t)
      , r = n.map((function(t) {
        return ("" + t).toLowerCase()
    }
    )).sort()
      , i = r.reduce((function(e, r) {
        var i = "";
        return n.forEach((function(t) {
            ("" + t).toLowerCase() === r && (i = t)
        }
        )),
        e + i + t[i]
    }
    ), "")
      , o = "" + t.method + i + e;
    return a(o)
}
t={
    "userName": "18899996666",
    "uuid": "7a88bf73-523b-47c5-90c0-2328e30ad88e",
    "kaptcha": "",
    "password": "e10adc3949ba59abbe56e057f20f883e",
    "method": "ddsy.user.reg.h5.login",
    "versionName": "5.3.0",
    "plat": "H5",
    "platform": "H5",
    "t": "2024-12-24 20:43:55",
    "v": "1.0"
}
e='6C57AB91A1308E26B797F4CD382AC79D'

console.log(s(t, e))