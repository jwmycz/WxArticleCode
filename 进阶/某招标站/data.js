const smCrypto = require('sm-crypto');
const {sm3} = require("sm-crypto");
////////////////////////////////////////////
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
n = genLocalRandom(16)
i = arrayToHexString(n)


////////////////////////////////////////////
function W(r, t, n) {
    return new (function (i, s) {
            function o(h) {
                try {
                    c(n.next(h))
                } catch (y) {
                    s(y)
                }
            }

            function a(h) {
                try {
                    c(n.throw(h))
                } catch (y) {
                    s(y)
                }
            }

            function c(h) {
                var y;
                h.done ? i(h.value) : (y = h.value,
                    y instanceof e ? y : new e(function (v) {
                            v(y)
                        }
                    )).then(o, a)
            }

            c((n = n.apply(r, t || [])).next())
        }
    )
}
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



buildKey('4f9c666d52b658732c029ed722ab5c7bce92e0db52fdbee1e2b8b4e0d60a3ecf')
function encryptBySessionKey(t, e, n, i, s) {
    return W(this, arguments, function* () {
        s = s;
        const o = {
            "code": 0,
            "errMsg": "",
            "apiName": "encryptBySessionKey"
        }
        try {
            const a = yield pt.getInstance().storageApi.getItem(t.trim());
            if (a === null)
                throw new G(L.SESSION_KEY_ENCRYPT_ERROR, "\u4F1A\u8BDD\u5BC6\u94A5\u4E0D\u5B58\u5728");
            const c = yield this.api.encryptMessage(e, Object.assign(Object.assign({}, s), {
                key: a,
                publicKeys: n,
                symAlg: i
            }));
            o.successful(c)
        } catch (a) {
            o.fail(L.SESSION_KEY_ENCRYPT_ERROR, a)
        }
        return o
    })
}

function bt(t, e) {
    const s = encryptBySessionKey(t, e, ["MFkwEwYHKoZIzj0CAQYIKoEcz1UBgi0DQgAEw9BKlrotz02BQBHebAO8bEkvI4DFCCcZDlwYse3XerGxTn3tF6OXNi4ePFh7MGplQf1EUDehn1ZzI9Rphi9Rnw=="], "SM4_CBC", {
        inEncoding: "utf8",
        outEncoding: "base64",
        iv: "31323334353637383132333435363738",
        padding: "pkcs#7",
        cipherMode: "C1C3C2"
    });
    if (s.getCode() === 0)
        return s.getValue();
    console.error("\u6253\u5305\u5931\u8D25")
}


data = {
    "searchContent": "",
    "channelId": "51",
    "currentPage": 6,
    "pageSize": 15
}
e = "098daa3f42b684e832a59469cf366092c9cb917b0868f5e72966986b6bada1ab"
result = bt(e, JSON.stringify(data))
console.log("加密结果:", result);
