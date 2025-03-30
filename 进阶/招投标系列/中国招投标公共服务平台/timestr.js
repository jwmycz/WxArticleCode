sig = function (I) {
    for (var V = 0, O = encodeURIComponent(I), W = 0; W < O["length"]; W++) V = (V << 7) - V + 398 + O["charCodeAt"](W), V |= 0;
    return V;
}

O = 'https://bulletin.cebpubservice.com/xxfbcmses/search/bulletin.html?dates=300&categoryId=88&page=1&showStatus=1'
function r() {
    return 0;
}
data = sig(O) + '|' + r() + '|' + new Date()["getTime"]() + '|1'
console.log(data)
uu=function (I, V, O) {
      if (null == I) return '';
      for (var W, v, D, y, R = {}, A = {}, S = '', x = 2, B = 3, P = 2, N = [], w = 0, q = 0, C = 0; C < I["length"]; C += 1) if (D = I["charAt"](C), Object["prototype"]["hasOwnProperty"]["call"](R, D) || (R[D] = B++, A[D] = true), y = S + D, Object["prototype"]["hasOwnProperty"]["call"](R, y)) S = y;else {
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
      if ('' !== S) {
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
        0 == --x && (x = Math["pow"](2, P), P++);
      }
      for (v = 2, W = 0; W < P; W++) w = w << 1 | 1 & v, q == V - 1 ? (q = 0, N["push"](O(w)), w = 0) : q++, v >>= 1;
      for (;;) {
        if (w <<= 1, q == V - 1) {
          N["push"](O(w));
          break;
        }
        q++;
      }
      return N["join"]('');
    }
ua = function (I, V) {
    O = "1|2|3|4|0"["split"]('|'),
        W = 0;
    while (true) {
        switch (O[W++]) {
            case '0':
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
                continue;
            case '1':
                var v = {};
                v["iPESF"] = "DGi0YA7BemWnQjCl4+bR3f8SKIF9tUz/xhr2oEOgPpac=61ZqwTudLkM5vHyNXsVJ";
                var D = v;
                continue;
            case '2':
                if (null == I) return '';
                continue;
            case '3':
                var y = uu(I, 6, function (R) {
                    return D["iPESF"]["charAt"](R);
                });
                continue;
            case '4':
                if (V) return y;
                continue;
        }
        break;
    }
}
console.log(ua(data))