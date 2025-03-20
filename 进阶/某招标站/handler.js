// header中handler参数
const {sm3} = require("sm-crypto");

function arrayToHexString(o) {
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

function genLocalRandom(t) {
    const e = [];
    for (let n = 0; n < t; ++n)
        e.push(Math.floor(256 * Math.random()));
    return new Uint8Array(e)
}
function calculateSessionKeyHandle(t) {
    // 将输入十六进制字符串转换为 Buffer
    // const e = typeof t === "string" ? Buffer.from(t, 'hex') : new Uint8Array(t);
    const e =Buffer.from(t, 'hex')
    // 使用 SM3 哈希算法加密，并返回十六进制编码的结果
    const hash = sm3(e);
    return hash;
}
// 测试
// i='59684ebff084f7089f7f3d019fe9c688'
i = arrayToHexString(genLocalRandom(16))

const handler = calculateSessionKeyHandle(i)
console.log(handler)