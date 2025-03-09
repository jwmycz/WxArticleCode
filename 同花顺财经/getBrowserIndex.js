BROWSER_LIST = {
    _1: function() {
        return c[185]in r[65]
    },
    _2: function() {
        return a[153]in r[65]
    },
    _3: function() {
        return e[154]in u[83]
    },
    _4: function() {
        var n = J
          , r = u[186]
          , o = s[187];
        return n = et,
        e[155]in e[65] && !(r + o + t in a[51].getElementsByTagName(en + f)[s[2]])
    },
    _5: function() {
        return e[155]in s[83] && !(e[156]in c[83])
    },
    _6: function() {
        var n, t, r;
        n = t = r = c;
        var e, o, u;
        return e = o = u = a,
        e[155]in t[83] && !i
    },
    _7: function() {
        var n, t, r;
        n = t = r = a;
        var e, o, i;
        return e = o = i = u,
        o[188]in o[83] && !o[83][r[157]]
    },
    _8: function() {
        return a[155]in e[65] && !e[65][e[158]]
    },
    _9: function() {
        return u[188]in s[83] && r[65][e[158]]
    },
    _10: function() {
        var n, t, r;
        n = t = r = a;
        var e, o, i;
        e = o = i = c;
        var u = o[189];
        return n[159] === navigator[an + u + on]
    },
    _11: function() {
        return ot(u[190]) === navigator[r[160]]
    },
    _12: function() {
        var n, t, r;
        return n = t = r = s,
        at(t[191])in r[83]
    },
    _13: function() {
        var n, t, r;
        n = t = r = s;
        var a, o, i;
        return a = o = i = e,
        i[161]in t[83]
    },
    _14: function() {
        return new u[27](a[162],r[116]).test(navigator.appVersion)
    },
    _15: function() {
        return e[163]in navigator
    },
    _16: function() {
        return new c[27](u[192],ot(u[193])).test(navigator.vendor)
    },
    _17: function() {
        return u[194]in u[83]
    },
    _18: function() {
        return u[195]in c[83] && new r[47](s[196],e[116]).test(o)
    },
    _19: function() {
        var n, t, r;
        n = t = r = s;
        var a, i, u;
        a = i = u = e;
        var c = ot(i[164], i[165])
          , v = u[166];
        return l + c + v in t[83] && new n[27](u[167],t[80]).test(o)
    },
    _20: function() {
        var n = u[197];
        return r[161]in u[83] && new r[47](n + un).test(o)
    },
    _21: function() {
        return ot(s[198], r[168])in r[65] && new c[27](c[199],r[116]).test(o)
    },
    _22: function() {
        var n = x;
        return n = S,
        s[195]in e[65] && new c[27](a[169]).test(o)
    },
    _23: function() {
        var n, t, r;
        n = t = r = c;
        var a, i, u;
        return a = i = u = e,
        u[161]in a[65] && new t[27](u[170]).test(o)
    },
    _24: function() {
        return s[195]in r[65] && s[200]in e[65]
    },
    _25: function() {
        var n = w;
        return n = Q,
        cn + sn in u[83]
    }
};
function M() {
    for (var n in BROWSER_LIST)
        if (BROWSER_LIST.hasOwnProperty(n)) {
            var t = BROWSER_LIST[n];
            if (t())
                return +n.substr(u[0])
        }
    return s[2]
}