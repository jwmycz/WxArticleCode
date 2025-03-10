// 十六进制字符串转换为 Uint8Array
function hexToUint8Array(hexString) {
    const length = hexString.length / 2;
    const uint8Array = new Uint8Array(length);
    for (let i = 0; i < length; i++) {
        uint8Array[i] = parseInt(hexString.substr(i * 2, 2), 16);
    }
    return uint8Array;
}

// 简化版转换函数
function convert(n, i, s) {
    // 如果输入编码和输出编码相同，直接返回
    if (i === s) {
        return n;
    }

    // 转换输入为 Uint8Array
    let inputArray;
    if (s === 'hex') {
        inputArray = hexToUint8Array(n);
    } else if (s === 'utf8') {
        inputArray = new TextEncoder().encode(n);
    } else {
        throw new Error("Unsupported input encoding type: " + s);
    }

    // 根据输出类型转换
    if (i === 'uint8Array') {
        return inputArray;
    } else {
        throw new Error("Unsupported output encoding type: " + i);
    }
}

// 测试调用
const n = '62c859ddf68a570b50b3ae63c91b8f2d';
const i = 'uint8Array';
const s = 'utf8';

try {
    const result = convert(n, i, s);
    console.log("Converted Uint8Array:", result);
} catch (err) {
    console.error("Error:", err.message);
}