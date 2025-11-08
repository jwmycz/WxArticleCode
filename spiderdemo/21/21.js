const CryptoJS = require('crypto-js');  // ✅ 正确的库
const {sha3_256} = require('js-sha3'); // ✅ 额外引入 SHA3 支持
const o = "spiderdemo_sha_salt_2025";

function r(e, t, n) {
    const s = `${e}_${t}_${n}`
        , a = (r = s,
        c = "spiderdemo_hmac_secret_2025",
        CryptoJS.HmacSHA256(r, c).toString());
    var r, c;
    const i = function (e) {
        return CryptoJS.MD5(e).toString()
    }(s + "spiderdemo_md5_salt_2025")
        , l = function (e) {
        return CryptoJS.SHA256(e).toString()
    }(s + o)
        , u = function (e) {
        return sha3_256(e)
    }(s + o);
    return {
        hmac: a,
        md5: i,
        sha256: l,
        sha3_256: u
    }
}


function geturldata(page) {
    t = [
        "/page/"+page+"/",
        page
    ]
    const n = parseInt(t[1])
        , s = "hash_challenge"
        , a = Date.now()
        , k = r(n, s, a);
    console.log(k);
    XRequestToken = k.hmac,
        XVerifyCode = k.md5;
    url = "/page/"+page+"/?challenge_type=hash_challenge"
    const c = url.includes("?") ? "&" : "?";
    url += `${c}sign=${k.sha256}&code=${k.sha3_256}&t=${a}`
    console.log(url)
    return {'token':XRequestToken,'code':XVerifyCode,'url':url}
}
geturldata('3')
