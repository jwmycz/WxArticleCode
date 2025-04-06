var hexcase = 0;
function hex_sha1(a) {
    return binb2hex(core_sha1(AlignSHA1(a)))
}
function bin_sha1(a) {
    return hex2binary(hex_sha1(a))
}
function hex2binary(r) {
    for (var n = '', t = 0; t < r.length; ++t) {
        var e = parseInt(r[t], 16).toString(2);
        n += Array(4 - e.length + 1).join('0') + e
    }
    return n
}
function core_sha1(a) {
    for (var r = a, e = Array(80), n = 1732584193, t = -271733879, f = -1732584194, d = 271733878, h = -1009589776, s = 0; s < r.length; s += 16) {
        for (var c = n, o = t, _ = f, u = d, i = h, l = 0; l < 80; l++) {
            e[l] = l < 16 ? r[s + l] : rol(e[l - 3] ^ e[l - 8] ^ e[l - 14] ^ e[l - 16], 1);
            var A = safe_add(safe_add(rol(n, 5), sha1_ft(l, t, f, d)), safe_add(safe_add(h, e[l]), sha1_kt(l)));
            h = d,
                d = f,
                f = rol(t, 30),
                t = n,
                n = A
        }
        n = safe_add(n, c),
            t = safe_add(t, o),
            f = safe_add(f, _),
            d = safe_add(d, u),
            h = safe_add(h, i)
    }
    return new Array(n, t, f, d, h)
}
function sha1_ft(a, r, e, n) {
    return a < 20 ? r & e | ~r & n : a < 40 ? r ^ e ^ n : a < 60 ? r & e | r & n | e & n : r ^ e ^ n
}
function sha1_kt(a) {
    return a < 20 ? 1518500249 : a < 40 ? 1859775393 : a < 60 ? -1894007588 : -899497514
}
function safe_add(a, r) {
    var e = (65535 & a) + (65535 & r);
    return (a >> 16) + (r >> 16) + (e >> 16) << 16 | 65535 & e
}
function rol(a, r) {
    return a << r | a >>> 32 - r
}
function AlignSHA1(a) {
    for (var r = 1 + (a.length + 8 >> 6), e = new Array(16 * r), n = 0; n < 16 * r; n++)
        e[n] = 0;
    for (n = 0; n < a.length; n++)
        e[n >> 2] |= a.charCodeAt(n) << 24 - 8 * (3 & n);
    return e[n >> 2] |= 128 << 24 - 8 * (3 & n),
        e[16 * r - 1] = 8 * a.length,
        e
}
function binb2hex(a) {
    for (var r = hexcase ? '0123456789ABCDEF' : '0123456789abcdef', e = '', n = 0; n < 4 * a.length; n++)
        e += r.charAt(a[n >> 2] >> 8 * (3 - n % 4) + 4 & 15) + r.charAt(a[n >> 2] >> 8 * (3 - n % 4) & 15);
    return e
}

function cookie_safeline(prefix,cookies) {
    var leading_zero_bit = 9;
    var cnt = 0;
    var suffix = cnt.toString(16);
    var cookie ='';
    var sid = function () {
        var hash = bin_sha1(prefix + suffix);
        if (hash.substr(0, leading_zero_bit) == Array(leading_zero_bit + 1).join('0')) {
            clearInterval(sid);
            safeline = cookies
            cookie = 'safeline_bot_challenge_ans=' + safeline + suffix + ';Max-Age=60;path=/';
            console.log(cookie)
            running = false
        }
        ++cnt;
        suffix = cnt.toString(16);
    }
    let running = true
    while (running) {
        sid()
    }
    return cookie
}