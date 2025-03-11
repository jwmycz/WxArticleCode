function x(n) {
    for (var e = 0, i = 0, u = n['length']; i < u; i++)
        e = (e << 5) - e + n[i];
    return e & parseInt('11111111', 2)
}

function g(n, a, o, i, u) {
    for (var c = '11', v = '11', f = n['length']; a < f;)
        o[i++] = n[a++] ^ u & parseInt(c + v + "11" + "11", 2),
            u = ~(u * parseInt('203', 8))
}

function w(n) {
    let m="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"
    for (var t = '0', i = 0, v = n['length'], f = []; i < v;) {
        var l = n[i++] << parseInt("1" + t, 16) | n[i++] << 8 | n[i++];
        f.push(m.charAt(l >> parseInt('22', 8)), m.charAt(l >> parseInt('12', 10) & parseInt('111111', 2)), m.charAt(l >> 6 & parseInt("6" + "3", 10)), m.charAt(l & parseInt('3f', 16)))
    }
    return f.join('')
}

function N(n) {
    var r = x(n)
        , e = [3, r];
    return g(n, 0, e, 2, r), w(e)
}

n = [222, 247, 39, 153, 103, 205, 123, 84, 103, 205, 125, 12, 242, 154, 231, 88, 1, 10, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 164, 0, 0, 0, 0, 0, 0, 0, 1, 3]
aa = x(n)
dd = N(n)
console.log(dd)
