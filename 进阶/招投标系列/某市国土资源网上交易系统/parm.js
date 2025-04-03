h = [214, 144, 233, 254, 204, 225, 61, 183, 22, 182, 20, 194, 40, 251, 44, 5, 43, 103, 154, 118, 42, 190, 4, 195, 170, 68, 19, 38, 73, 134, 6, 153, 156, 66, 80, 244, 145, 239, 152, 122, 51, 84, 11, 67, 237, 207, 172, 98, 228, 179, 28, 169, 201, 8, 232, 149, 128, 223, 148, 250, 117, 143, 63, 166, 71, 7, 167, 252, 243, 115, 23, 186, 131, 89, 60, 25, 230, 133, 79, 168, 104, 107, 129, 178, 113, 100, 218, 139, 248, 235, 15, 75, 112, 86, 157, 53, 30, 36, 14, 94, 99, 88, 209, 162, 37, 34, 124, 59, 1, 33, 120, 135, 212, 0, 70, 87, 159, 211, 39, 82, 76, 54, 2, 231, 160, 196, 200, 158, 234, 191, 138, 210, 64, 199, 56, 181, 163, 247, 242, 206, 249, 97, 21, 161, 224, 174, 93, 164, 155, 52, 26, 85, 173, 147, 50, 48, 245, 140, 177, 227, 29, 246, 226, 46, 130, 102, 202, 96, 192, 41, 35, 171, 13, 83, 78, 111, 213, 219, 55, 69, 222, 253, 142, 47, 3, 255, 106, 114, 109, 108, 91, 81, 141, 27, 175, 146, 187, 221, 188, 127, 17, 217, 92, 65, 31, 16, 90, 216, 10, 193, 49, 136, 165, 205, 123, 189, 45, 116, 208, 18, 184, 229, 180, 176, 137, 105, 151, 74, 12, 150, 119, 126, 101, 185, 241, 9, 197, 110, 198, 132, 24, 240, 125, 236, 58, 220, 77, 32, 121, 238, 95, 62, 215, 203, 57, 72]
p = [462357, 472066609, 943670861, 1415275113, 1886879365, 2358483617, 2830087869, 3301692121, 3773296373, 4228057617, 404694573, 876298825, 1347903077, 1819507329, 2291111581, 2762715833, 3234320085, 3705924337, 4177462797, 337322537, 808926789, 1280531041, 1752135293, 2223739545, 2695343797, 3166948049, 3638552301, 4110090761, 269950501, 741554753, 1213159005, 1684763257]
l = [2746333894, 1453994832, 1736282519, 2993693404]
g = function (t) {
    return h[t >>> 24 & 255] << 24 | h[t >>> 16 & 255] << 16 | h[t >>> 8 & 255] << 8 | h[255 & t]
}
b = 16
_ = function (t) {
    if (null === t)
        return null;
    var e = b - t.length % b
        , n = new Array(t.length + e);
    return t.forEach((function (t, e) {
            return n[e] = t
        }
    )),
        n.fill(e, t.length),
        n
}
m = function (t) {
    var e = g(t)
        , n = e ^ F(e, 13) ^ F(e, 23);
    return n
}
F = function (t, e) {
    return t << e | t >>> 32 - e
}
f = function (t) {
    return /string/gi.test(Object.prototype.toString.call(t)) || (t = JSON.stringify(t)),
        unescape(encodeURIComponent(t)).split("").map((function (t) {
                return t.charCodeAt()
            }
        ))
}
y = function (t) {
    var e = []
        ,
        n = [t[0] << 24 | t[1] << 16 | t[2] << 8 | t[3], t[4] << 24 | t[5] << 16 | t[6] << 8 | t[7], t[8] << 24 | t[9] << 16 | t[10] << 8 | t[11], t[12] << 24 | t[13] << 16 | t[14] << 8 | t[15]]
        , r = new Array(36);
    r[0] = n[0] ^ l[0],
        r[1] = n[1] ^ l[1],
        r[2] = n[2] ^ l[2],
        r[3] = n[3] ^ l[3];
    for (var i = 0; i < 32; i++)
        r[i + 4] = r[i] ^ m(r[i + 1] ^ r[i + 2] ^ r[i + 3] ^ p[i]),
            e[i] = r[i + 4];
    return e
}
d = function (t) {
    var e = g(t)
        , n = e ^ F(e, 2) ^ F(e, 10) ^ F(e, 18) ^ F(e, 24);
    return n
}
B = function (t, e) {
    var n = new Array(36);
    t.forEach((function (t, e) {
            return n[e] = t
        }
    ));
    for (var r = 0; r < 32; r++)
        n[r + 4] = n[r] ^ d(n[r + 1] ^ n[r + 2] ^ n[r + 3] ^ e[r]);
    var i = [n[35], n[34], n[33], n[32]];
    return i
}
S = function (t, e) {
    return !(!e || 16 != e.length) || (console.error("".concat(t, " should be a 16 bytes string.")),
        !1)
}
v = function (t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
        ,
        n = [t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3], t[e + 4] << 24 | t[e + 5] << 16 | t[e + 6] << 8 | t[e + 7], t[e + 8] << 24 | t[e + 9] << 16 | t[e + 10] << 8 | t[e + 11], t[e + 12] << 24 | t[e + 13] << 16 | t[e + 14] << 8 | t[e + 15]];
    return n
}
r = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '/']

function Ff(t) {
    return r[t >> 18 & 63] + r[t >> 12 & 63] + r[t >> 6 & 63] + r[63 & t]
}

function FF(t, e, n) {
    for (var r, i = [], o = e; o < n; o += 3)
        r = (t[o] << 16 & 16711680) + (t[o + 1] << 8 & 65280) + (255 & t[o + 2]),
            i.push(Ff(r));
    return i.join("")
}

function fromByteArray(t) {
    for (var e, n = t.length, i = n % 3, o = [], s = 16383, a = 0, u = n - i; a < u; a += s)
        o.push(FF(t, a, a + s > u ? u : a + s));
    return 1 === i ? (e = t[n - 1],
        o.push(r[e >> 2] + r[e << 4 & 63] + "==")) : 2 === i && (e = (t[n - 2] << 8) + t[n - 1],
        o.push(r[e >> 10] + r[e >> 4 & 63] + r[e << 2 & 63] + "=")),
        o.join("")
}

encrypt_ecb = function (t, e) {
    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "base64";
    if (S("key", e)) {
        for (var r = y(f(e)), i = f(t), o = _(i), s = o.length / b, a = [], u = 0; u < s; u++)
            for (var h = u * b, p = v(o, h), l = B(p, r), F = 0; F < b; F++)
                a[h + F] = l[parseInt(F / 4)] >> (3 - F) % 4 * 8 & 255;
        return "base64" === n ? fromByteArray(a) : decodeURIComponent(escape(String.fromCharCode.apply(String, a)))
    }
}

encryptSM4Text = function (t) {
    return encrypt_ecb(t, "a38e3e97b0cc6806")
}

encryptSM4Param = function (t) {
    var e = ["and", "exec", "insert", "select", "delete", "update", "count", "chr", "mid", "master", "truncate", "char", "declare"]
        , n = {}
        , r = function (r) {
        t[r] && e.map((function (e) {
                t[r].toString().indexOf(e) > -1 && (t[r] = t[r].toString().replace(e, ""))
            }
        )),
            t[r] ? n[r] = "pageNo" != r && "pageSize" != r && "timeStamp" != r ? encryptSM4Text(t[r].toString()) : t[r] : n[r] = ""
    };
    for (var i in t)
        r(i);
    return n
}


function resourcetype(type) {
    timeStamp = encodeURIComponent(Math.random())
    data = {
        "resourcetype": type,
        "pageNo": 1,
        "timeStamp": timeStamp
    }
    SM4Param=encryptSM4Param(data)['resourcetype']
    console.log(SM4Param)
    return SM4Param
}

resourcetype('00A',2)

//type:001,002,003,00A