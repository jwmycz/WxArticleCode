const {sm3} = require('sm-crypto');
const CryptoJS = require('crypto-js');

function arrayToHexStringi(o) {
    o = new Uint8Array(o);
    const a = "0123456789abcdef";
    let c = "";
    for (let h = 0; h < o.length; h++) {
        let y = o[h] >> 4
            , v = 15 & o[h];
        c += a[y] + a[v]
    }
    return c
}

arrayToHexString = function (i) {
    return arrayToHexStringi(i)
}

function genLocalRandom(t) {
    if (t < 1)
        throw new Error("the randomLen has to be greater than 0");
    const e = [];
    for (let n = 0; n < t; ++n)
        e.push(Math.floor(256 * Math.random()));
    return new Uint8Array(e)
}

// function getTid() {
//         return this.devInfo.getDevId(),
//         this.devInfo.getDevId()
//     }
function genLogTrackId() {
    let t = arrayToHexString(genLocalRandom(4))
        // , e =getTid()//'821b26eb6820231a8647790ad6a3491c'
        , e = '671cd6ea74b3b98ffe9393e135bcd6f1'
        , n = Date.now().toString(16);
    return CryptoJS.SHA1(t + e).toString(CryptoJS.enc.Hex) + "-" + n
}

// function genSessionKey(t) {
//     return W(this, arguments, void 0, function* () {
//         t = B.assign({
//             mode: 0,
//             outEncoding: "hex",
//             length: 16
//         }, t);
//         const e = this.getResponse("genSessionKey", arguments);
//         try {
//             const n = yield B.RANDOM.getRandomBytes(t.length)
//                 , i = Bn(n);
//             let s;
//             if (t.mode === 0) {
//                 const o = Qr.calculateSessionKeyHandle(i);
//                 pt.getInstance().storageApi.setItem(o, i),
//                     s = o
//             } else
//                 s = i;
//             e.successful(B.CONVERT(s, t.outEncoding, "hex"))
//         } catch (n) {
//             e.fail(L.GEN_SESSION_KEY_ERROR, n)
//         }
//         return e
//     })
// }


// function It() {
//     const e = genSessionKey({
//         outEncoding: "hex",
//         mode: 0,
//         length: 16
//     });
//     if (e.getCode() === 0)
//         return e.getValue();
//     console.error("\u751F\u6210\u5931\u8D25")
// }

// e = It()
// bt(e, JSON.stringify(data))

// 'a0cdc7c5e8087f24fb373bd9c62184f7f990fe1b-1952e4a91aa'
// 'ecd532e826530cda2dcf020af8e1460fb3e33025-1952e46dfb2'
one = genLogTrackId()
// '2f4deeca260cea8ecb029b4eb7c98d3d718af817-1952e4bdbc2==>API calls start, name: genSessionKey,parameters: ,{"0":{"outEncoding":"hex","mode":0,"length":16}}'
two = one + '==>API calls start, name: genSessionKey,parameters: ,{"0":{"outEncoding":"hex","mode":0,"length":16}}'
console.log(two)
// data = {
//     "searchContent": "",
//     "channelId": "51",  //id序号
//     "currentPage": 4,   //页数
//     "pageSize": 15      //页面数量
// }
function calculateSessionKeyHandle(t) {
    // 将输入十六进制字符串转换为 Buffer
    const e = typeof t === "string" ? Buffer.from(t, 'hex') : new Uint8Array(t);

    // 使用 SM3 哈希算法加密，并返回十六进制编码的结果
    const hash = sm3(e);
    return hash;
}

n = genLocalRandom(16)
i = arrayToHexString(n)
// i='59684ebff084f7089f7f3d019fe9c688'
console.log('i-->', i.length)
const handler = calculateSessionKeyHandle(i)
console.log('handler-->', handler)

function buildKey(t) {
    const e = "smf-data" + "/" + t;
    try {
        const hash = sm3(e);
        console.log('buildKey-->', hash)
        return hash;
    } catch (n) {
        throw new G(L.SESSION_DATA_CIPHER_ERROR, n)
    }
}

buildKey(handler)

function getMid() {
    const t = '821b26eb6820231a8647790ad6a3491c';
    const e = t + "KOAL File Store v2.0"

    // 将输入字符串以 UTF-8 格式转换为 Buffer
    const inputBuffer = Buffer.from(e, 'utf8');

    // 进行 SM3 哈希加密（返回十六进制字符串）
    const hexHash = sm3(inputBuffer);

    // 将十六进制哈希值转换为 Base64 编码
    const hashBuffer = Buffer.from(hexHash, 'hex');
    const base64Hash = hashBuffer.toString('base64');
    console.log('getMid-->', base64Hash)
    return base64Hash;

}

mid = getMid()
devBytes = "0fffff81e971fa3f09107abf77931463fc0710bfb8962efeae3d5654b073bb0c" // 固定值
cipherMode = 1  // 固定值
separator = "||"   // 固定值
symAlgType = "SM4_GCM"   // 固定值
tid = "821b26eb6820231a8647790ad6a3491c"  // 设备id
SM3_DEF_UID = "1234567812345678"   // 固定值
CONVERTutf8StringToArray = function (o) {
    let a = o.split("")
        , c = [];
    for (let h = 0; h < a.length; h++) {
        let y = a[h].charCodeAt();
        y >= 0 && y <= 127 ? c.push(y) : y >= 128 && y <= 2047 ? (c.push(192 | 31 & y >> 6),
            c.push(128 | 63 & y)) : y >= 2048 && y <= 55295 || y >= 57344 && y <= 65535 ? (c.push(224 | 15 & y >> 12),
            c.push(128 | 63 & y >> 6),
            c.push(128 | 63 & y)) : y >= 65536 && y <= 1114111 && (c.push(240 | 7 & y >> 18),
            c.push(128 | 63 & y >> 12),
            c.push(128 | 63 & y >> 6),
            c.push(128 | 63 & y))
    }
    return arrayToHexString(new Uint8Array(c))
}

function hexToUint8Array(hexString) {
    const bytes = new Uint8Array(hexString.length / 2);
    for (let i = 0; i < hexString.length; i += 2) {
        bytes[i / 2] = parseInt(hexString.substr(i, 2), 16);
    }
    return bytes;
}

// 计算 Key
function calculateKeyss(t, e) {
    // 将输入转换为 Uint8Array
    e = typeof e === "string" ? hexToUint8Array(e) : new Uint8Array(e);

    // 使用 SM3 哈希计算
    const hashHex = sm3(e);
    const n = hexToUint8Array(hashHex); // 将哈希结果转换为 Uint8Array

    let i = [];

    // 只保留 SM4_GCM 相关逻辑
    if (t === "SM4_GCM") {
        i.push(n.slice(0, 16).buffer); // 前 16 字节
        i.push(n.slice(20).buffer);    // 从第 20 字节开始剩余部分
        return i;
    } else {
        throw new Error("Unsupported symmetric algorithm");
    }
}
function cipher(t, e, n) {
    var i;
    i = e,
        e = CONVERTutf8StringToArray(i, "hex", "utf8");
    let s = calculateKeyss("SM4_GCM", e);
    const o = s[0]
        , a = s[1];
    let c;
    if (n === 1) {
        const h = CONVERTutf8StringToArray(t, "uint8Array", "utf8");
        c = this.smfJs.symmetry(h, symAlgType, o, {
            iv: a,
            inEncoding: "uint8Array",
            outEncoding: "hex",
            mode: 1
        })
    } else {
        const h = B.CONVERT(t, "uint8Array", "hex");
        c = this.smfJs.symmetry(h, symAlgType, o, {
            iv: a,
            inEncoding: "uint8Array",
            outEncoding: "utf8",
            mode: 0
        })
    }
    return c.length > 200 && c.slice(0, 500),
        c
}

function devMainKeyCipher(t, e) {
    const n = devBytes + tid;
    return t.length > 500 && t.slice(0, 500),
        cipher(t, n, e)
}



function writeValue(t, e) {
    if (e == null || e === "")
        return e;
    const n = {
        "smfJs": {
            "SM3_DEF_UID": "1234567812345678"
        },
        "symAlgType": "SM4_GCM",
        "separator": "||",
        "cipherMode": 1,
        "tid": "821b26eb6820231a8647790ad6a3491c",// 设备id
        "mid": "x1CbmDdsY7C8NLtk7suzIY2Nf6xBtRc2/WmlziSKl8g="
    }
    let i = e;
    if (false) {
        const s = new Date().getTime();
        this.specialOptionMap.get(t) === hn.EXPIRE ? i = e + hn.EXPIRE + s : i = ""
    }
    if (i != null && i !== "") {
        const s = devMainKeyCipher(i.toString(), 1);
        return typeof i == "string" || (o => {
                B.CONVERT(o, "utf8", "uint8Array")
            }
        )(i),
            s
    }
    return i
}

writeValue(handler, i)