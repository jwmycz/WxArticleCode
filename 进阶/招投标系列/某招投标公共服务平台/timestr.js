O = 'https://xxxx.xxxx.xxxx/xxxxx/xxxxx'
sig = function (I) {
    for (var V = 0, O = encodeURIComponent(I), W = 0; W < O["length"]; W++) V = (V << 7) - V + 398 + O["charCodeAt"](W), V |= 0;
    return V;
}
uu = function (I, V, O) {
    for (var W, v, D, y, R = {}, A = {}, S = '', x = 2, B = 3, P = 2, N = [], w = 0, q = 0, C = 0; C < I["length"]; C += 1) if (D = I["charAt"](C), Object["prototype"]["hasOwnProperty"]["call"](R, D) || (R[D] = B++, A[D] = true), y = S + D, Object["prototype"]["hasOwnProperty"]["call"](R, y)) S = y; else {
        if (Object["prototype"]["hasOwnProperty"]["call"](A, S)) {
            if (S["charCodeAt"](0) < 256) {
                for (W = 0; W < P; W++) w <<= 1, q == V - 1 ? (q = 0, N["push"](O(w)), w = 0) : q++;
                for (v = S["charCodeAt"](0), W = 0; W < 8; W++) w = w << 1 | 1 & v, q == V - 1 ? (q = 0, N["push"](O(w)), w = 0) : q++, v >>= 1;
            } else {
                for (v = 1, W = 0; W < P; W++) w = w << 1 | v, q == V - 1 ? (q = 0, N["push"](O(w)), w = 0) : q++, v = 0;
                for (v = S["charCodeAt"](0), W = 0; W < 16; W++) w = w << 1 | 1 & v, q == V - 1 ? (q = 0, N["push"](O(w)), w = 0) : q++, v >>= 1;
            }
            0 == --x && (x = Math["pow"](2, P), P++), delete A[S];
        } else {
            for (v = R[S], W = 0; W < P; W++) w = w << 1 | 1 & v, q == V - 1 ? (q = 0, N["push"](O(w)), w = 0) : q++, v >>= 1;
        }
        0 == --x && (x = Math["pow"](2, P), P++), R[y] = B++, S = String(D);
    }
    return N["join"]('');
}
ua = function (I, V) {
    var v = {};
    v["iPESF"] = "DGi0YA7BemWnQjCl4+bR3f8SKIF9tUz/xhr2oEOgPpac=61ZqwTudLkM5vHyNXsVJ";
    var D = v;
    if (null == I) return '';
    var y = uu(I, 6, function (R) {
        return D["iPESF"]["charAt"](R);
    });
    if (V) return y;
    W = 0;
    switch (y["length"] % 4) {
        default:
        case 0:
            return y;
        case 1:
            return y + "===";
        case 2:
            return y + '==';
        case 3:
            return y + '=';
    }
}
data = sig(O) + '|' + 0 + '|' + new Date()["getTime"]() + '|1'
console.log(data)
console.log(ua(data))