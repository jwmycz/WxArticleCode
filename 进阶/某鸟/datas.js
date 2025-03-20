var Qb = /%20/g;
function isFunc(a) {
    return "function" === type(a)
};
function each(a, b, c) {
            var d, e = 0, f = a.length, g = r(a);
            if (c) {
                if (g) {
                    for (; f > e; e++)
                        if (d = b.apply(a[e], c),
                        d === !1)
                            break
                } else
                    for (e in a)
                        if (d = b.apply(a[e], c),
                        d === !1)
                            break
            } else if (g) {
                for (; f > e; e++)
                    if (d = b.call(a[e], e, a[e]),
                    d === !1)
                        break
            } else
                for (e in a)
                    if (d = b.call(a[e], e, a[e]),
                    d === !1)
                        break;
            return a
        };
function type(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a
        };
function Vb(a, b, c, d) {
        var e;
        if (Array.isArray(b))
            each(b, function(b, e) {
                c || Rb.test(a) ? d(a, e) : Vb(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
            });
        else if (c || "object" !== type(b))
            d(a, b);
        else
            for (e in b)
                Vb(a + "[" + e + "]", b[e], c, d)
    }
function bbb(a, b) {

        var c, d = [], e = function(a, b) {
           b = isFunc(b) ? b() : null == b ? "" : b,
            d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
        };
        for (c in a)
            Vb(c, a[c], b, e);
        return d.join("&").replace(Qb, "+")
    }
x={'year': '', 'version': 'CH4'}

console.log(bbb(x))