var _c
(function(e){
    var r = {}
    function d(t) {
        if (r[t])
            return r[t].exports;
        var a = r[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(a.exports, a, a.exports, d),
        a.l = !0,
        a.exports
    }
	_c=d
})({
    248:function(t, e, i) {
    var n;
    t.exports = (n = n || function(t, e) {
        var i = Object.create || function() {
            function t() {}
            return function(e) {
                var i;
                return t.prototype = e,
                i = new t,
                t.prototype = null,
                i
            }
        }()
          , n = {}
          , r = n.lib = {}
          , a = r.Base = {
            extend: function(t) {
                var e = i(this);
                return t && e.mixIn(t),
                e.hasOwnProperty("init") && this.init !== e.init || (e.init = function() {
                    e.$super.init.apply(this, arguments)
                }
                ),
                e.init.prototype = e,
                e.$super = this,
                e
            },
            create: function() {
                var t = this.extend();
                return t.init.apply(t, arguments),
                t
            },
            init: function() {},
            mixIn: function(t) {
                for (var e in t)
                    t.hasOwnProperty(e) && (this[e] = t[e]);
                t.hasOwnProperty("toString") && (this.toString = t.toString)
            },
            clone: function() {
                return this.init.prototype.extend(this)
            }
        }
          , o = r.WordArray = a.extend({
            init: function(t, e) {
                t = this.words = t || [],
                this.sigBytes = null != e ? e : 4 * t.length
            },
            toString: function(t) {
                return (t || l).stringify(this)
            },
            concat: function(t) {
                var e = this.words
                  , i = t.words
                  , n = this.sigBytes
                  , r = t.sigBytes;
                if (this.clamp(),
                n % 4)
                    for (var a = 0; a < r; a++) {
                        var o = i[a >>> 2] >>> 24 - a % 4 * 8 & 255;
                        e[n + a >>> 2] |= o << 24 - (n + a) % 4 * 8
                    }
                else
                    for (a = 0; a < r; a += 4)
                        e[n + a >>> 2] = i[a >>> 2];
                return this.sigBytes += r,
                this
            },
            clamp: function() {
                var e = this.words
                  , i = this.sigBytes;
                e[i >>> 2] &= 4294967295 << 32 - i % 4 * 8,
                e.length = t.ceil(i / 4)
            },
            clone: function() {
                var t = a.clone.call(this);
                return t.words = this.words.slice(0),
                t
            },
            random: function(e) {
                for (var i, n = [], r = function(e) {
                    e = e;
                    var i = 987654321
                      , n = 4294967295;
                    return function() {
                        var r = ((i = 36969 * (65535 & i) + (i >> 16) & n) << 16) + (e = 18e3 * (65535 & e) + (e >> 16) & n) & n;
                        return r /= 4294967296,
                        (r += .5) * (t.random() > .5 ? 1 : -1)
                    }
                }, a = 0; a < e; a += 4) {
                    var s = r(4294967296 * (i || t.random()));
                    i = 987654071 * s(),
                    n.push(4294967296 * s() | 0)
                }
                return new o.init(n,e)
            }
        })
          , s = n.enc = {}
          , l = s.Hex = {
            stringify: function(t) {
                for (var e = t.words, i = t.sigBytes, n = [], r = 0; r < i; r++) {
                    var a = e[r >>> 2] >>> 24 - r % 4 * 8 & 255;
                    n.push((a >>> 4).toString(16)),
                    n.push((15 & a).toString(16))
                }
                return n.join("")
            },
            parse: function(t) {
                for (var e = t.length, i = [], n = 0; n < e; n += 2)
                    i[n >>> 3] |= parseInt(t.substr(n, 2), 16) << 24 - n % 8 * 4;
                return new o.init(i,e / 2)
            }
        }
          , u = s.Latin1 = {
            stringify: function(t) {
                for (var e = t.words, i = t.sigBytes, n = [], r = 0; r < i; r++) {
                    var a = e[r >>> 2] >>> 24 - r % 4 * 8 & 255;
                    n.push(String.fromCharCode(a))
                }
                return n.join("")
            },
            parse: function(t) {
                for (var e = t.length, i = [], n = 0; n < e; n++)
                    i[n >>> 2] |= (255 & t.charCodeAt(n)) << 24 - n % 4 * 8;
                return new o.init(i,e)
            }
        }
          , h = s.Utf8 = {
            stringify: function(t) {
                try {
                    return decodeURIComponent(escape(u.stringify(t)))
                } catch (t) {
                    throw new Error("Malformed UTF-8 data")
                }
            },
            parse: function(t) {
                return u.parse(unescape(encodeURIComponent(t)))
            }
        }
          , c = r.BufferedBlockAlgorithm = a.extend({
            reset: function() {
                this._data = new o.init,
                this._nDataBytes = 0
            },
            _append: function(t) {
                "string" == typeof t && (t = h.parse(t)),
                this._data.concat(t),
                this._nDataBytes += t.sigBytes
            },
            _process: function(e) {
                var i = this._data
                  , n = i.words
                  , r = i.sigBytes
                  , a = this.blockSize
                  , s = r / (4 * a)
                  , l = (s = e ? t.ceil(s) : t.max((0 | s) - this._minBufferSize, 0)) * a
                  , u = t.min(4 * l, r);
                if (l) {
                    for (var h = 0; h < l; h += a)
                        this._doProcessBlock(n, h);
                    var c = n.splice(0, l);
                    i.sigBytes -= u
                }
                return new o.init(c,u)
            },
            clone: function() {
                var t = a.clone.call(this);
                return t._data = this._data.clone(),
                t
            },
            _minBufferSize: 0
        })
          , d = (r.Hasher = c.extend({
            cfg: a.extend(),
            init: function(t) {
                this.cfg = this.cfg.extend(t),
                this.reset()
            },
            reset: function() {
                c.reset.call(this),
                this._doReset()
            },
            update: function(t) {
                return this._append(t),
                this._process(),
                this
            },
            finalize: function(t) {
                return t && this._append(t),
                this._doFinalize()
            },
            blockSize: 16,
            _createHelper: function(t) {
                return function(e, i) {
                    return new t.init(i).finalize(e)
                }
            },
            _createHmacHelper: function(t) {
                return function(e, i) {
                    return new d.HMAC.init(t,i).finalize(e)
                }
            }
        }),
        n.algo = {});
        return n
    }(Math),
    n)
},
    390:function(t, e, i) {
    var n;
    t.exports = (n = i(248),
    function(t) {
        var e = n
          , i = e.lib
          , r = i.WordArray
          , a = i.Hasher
          , o = e.algo
          , s = []
          , l = [];
        !function() {
            function e(e) {
                for (var i = t.sqrt(e), n = 2; n <= i; n++)
                    if (!(e % n))
                        return !1;
                return !0
            }
            function i(t) {
                return 4294967296 * (t - (0 | t)) | 0
            }
            for (var n = 2, r = 0; r < 64; )
                e(n) && (r < 8 && (s[r] = i(t.pow(n, .5))),
                l[r] = i(t.pow(n, 1 / 3)),
                r++),
                n++
        }();
        var u = []
          , h = o.SHA256 = a.extend({
            _doReset: function() {
                this._hash = new r.init(s.slice(0))
            },
            _doProcessBlock: function(t, e) {
                for (var i = this._hash.words, n = i[0], r = i[1], a = i[2], o = i[3], s = i[4], h = i[5], c = i[6], d = i[7], p = 0; p < 64; p++) {
                    if (p < 16)
                        u[p] = 0 | t[e + p];
                    else {
                        var f = u[p - 15]
                          , g = (f << 25 | f >>> 7) ^ (f << 14 | f >>> 18) ^ f >>> 3
                          , m = u[p - 2]
                          , v = (m << 15 | m >>> 17) ^ (m << 13 | m >>> 19) ^ m >>> 10;
                        u[p] = g + u[p - 7] + v + u[p - 16]
                    }
                    var y = n & r ^ n & a ^ r & a
                      , x = (n << 30 | n >>> 2) ^ (n << 19 | n >>> 13) ^ (n << 10 | n >>> 22)
                      , b = d + ((s << 26 | s >>> 6) ^ (s << 21 | s >>> 11) ^ (s << 7 | s >>> 25)) + (s & h ^ ~s & c) + l[p] + u[p];
                    d = c,
                    c = h,
                    h = s,
                    s = o + b | 0,
                    o = a,
                    a = r,
                    r = n,
                    n = b + (x + y) | 0
                }
                i[0] = i[0] + n | 0,
                i[1] = i[1] + r | 0,
                i[2] = i[2] + a | 0,
                i[3] = i[3] + o | 0,
                i[4] = i[4] + s | 0,
                i[5] = i[5] + h | 0,
                i[6] = i[6] + c | 0,
                i[7] = i[7] + d | 0
            },
            _doFinalize: function() {
                var e = this._data
                  , i = e.words
                  , n = 8 * this._nDataBytes
                  , r = 8 * e.sigBytes;
                return i[r >>> 5] |= 128 << 24 - r % 32,
                i[14 + (r + 64 >>> 9 << 4)] = t.floor(n / 4294967296),
                i[15 + (r + 64 >>> 9 << 4)] = n,
                e.sigBytes = 4 * i.length,
                this._process(),
                this._hash
            },
            clone: function() {
                var t = a.clone.call(this);
                return t._hash = this._hash.clone(),
                t
            }
        });
        e.SHA256 = a._createHelper(h),
        e.HmacSHA256 = a._createHmacHelper(h)
    }(Math),
    n.SHA256)
},
    391:function(t, e, i) {
    var n, r, a;
    t.exports = (a = i(248),
    r = (n = a).lib.WordArray,
    n.enc.Base64 = {
        stringify: function(t) {
            var e = t.words
              , i = t.sigBytes
              , n = this._map;
            t.clamp();
            for (var r = [], a = 0; a < i; a += 3)
                for (var o = (e[a >>> 2] >>> 24 - a % 4 * 8 & 255) << 16 | (e[a + 1 >>> 2] >>> 24 - (a + 1) % 4 * 8 & 255) << 8 | e[a + 2 >>> 2] >>> 24 - (a + 2) % 4 * 8 & 255, s = 0; s < 4 && a + .75 * s < i; s++)
                    r.push(n.charAt(o >>> 6 * (3 - s) & 63));
            var l = n.charAt(64);
            if (l)
                for (; r.length % 4; )
                    r.push(l);
            return r.join("")
        },
        parse: function(t) {
            var e = t.length
              , i = this._map
              , n = this._reverseMap;
            if (!n) {
                n = this._reverseMap = [];
                for (var a = 0; a < i.length; a++)
                    n[i.charCodeAt(a)] = a
            }
            var o = i.charAt(64);
            if (o) {
                var s = t.indexOf(o);
                -1 !== s && (e = s)
            }
            return function(t, e, i) {
                for (var n = [], a = 0, o = 0; o < e; o++)
                    if (o % 4) {
                        var s = i[t.charCodeAt(o - 1)] << o % 4 * 2
                          , l = i[t.charCodeAt(o)] >>> 6 - o % 4 * 2;
                        n[a >>> 2] |= (s | l) << 24 - a % 4 * 8,
                        a++
                    }
                return r.create(n, a)
            }(t, e, n)
        },
        _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
    },
    a.enc.Base64)
},

})

var a=_c(390)
var b=_c(391)
t='timestamp=1737123512742&secret=KHVheWluZ18zZWNyZXRfYXBB'
console.log(a(t))
console.log(b.stringify(a(t)))
