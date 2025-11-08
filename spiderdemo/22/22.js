const CryptoJS = require('crypto-js');  // ✅ 正确的库
const {sha3_256} = require('js-sha3'); // ✅ 额外引入 SHA3 支持
function l(e) {
    var n = CryptoJS.enc.Utf8.parse("6f726c64")
        , t = CryptoJS.enc.Utf8.parse("01234567");
    return CryptoJS.DES.encrypt(e, n, {
        iv: t,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    }).toString()
}

function geturldata(page) {
    var url = "/page/"+page+"/?challenge_type=symmetry_challenge"
    var n, t, r;
    var o = ["/page/"+page+"/", page]

    var a = parseInt(o[1])
        , c = "symmetry_challenge"
        , s = Date.now()
        , i = "".concat(a, "_").concat(c, "_").concat(s);
    XAesToken = (n = i,
        t = CryptoJS.enc.Utf8.parse("1234567890123456"),
        r = CryptoJS.enc.Utf8.parse("abcdefghijklmnop"),
        CryptoJS.AES.encrypt(n, t, {
            iv: r,
            mode: CryptoJS.mode.CTR,
            padding: CryptoJS.pad.NoPadding
        }).toString()),
        XDesToken = l(i);
    var p = function (e) {
        var n = CryptoJS.enc.Utf8.parse("12345678901234567890123456789012")
            , t = CryptoJS.enc.Utf8.parse("abcdefghijklmnop");
        return CryptoJS.AES.encrypt(e, n, {
            iv: t,
            mode: CryptoJS.mode.OFB,
            padding: CryptoJS.pad.NoPadding
        }).toString()
    }(i)
        , f = l(i + "_param")
        , d = url.includes("?") ? "&" : "?";
    url += "".concat(d, "aes_sign=").concat(encodeURIComponent(p), "&des_sign=").concat(encodeURIComponent(f), "&t=").concat(s)
    console.log(url);
    return {'destoken':XDesToken,'aestoken':XAesToken,'url':url}
}

// console.log(geturldata('1'));
