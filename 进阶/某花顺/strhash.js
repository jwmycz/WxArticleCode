// function G(n) {
//     var t, e, a;
//     t = e = a = s;
//     var o, i, u;
//     o = i = u = r;
//     for (var c = u[52], v = a[2], f = n[o[56]]; v < f; v++)
//         c = (c << a[123]) - c + n.charCodeAt(v),
//         c >>>= o[52];
//     return c
// }
function G(n) {
    for (var c = 0, v = 0, f = n['length']; v < f; v++)
        c = (c << 5) - c + n.charCodeAt(v),
            c >>>= 0;
    console.log(c)
    return c
}
data='Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36 Edg/134.0.0.0'
G(data)