class wi {
    constructor() {
        this.devId = "";
    }

    static async getDevId() {
        try {
            return await wi.calculateDevId();
        } catch (err) {
            throw new Error("Failed to generate device ID: " + err.message);
        }
    }

    static async calculateDevId() {
        try {
            if (typeof window !== 'undefined') {
                // 浏览器环境下生成设备 ID
                const canvas = document.createElement("canvas");
                const ctx = canvas.getContext("2d");
                const text = "http://www.koal.com/";
                ctx.textBaseline = "middle";
                ctx.font = "14px 'Arial'";
                ctx.fillStyle = "#f60";
                ctx.fillRect(125, 1, 62, 20);
                ctx.fillStyle = "#069";
                ctx.fillText(text, 2, 15);
                ctx.fillStyle = "rgba(102, 204, 0, 0.7)";
                ctx.fillText(text, 4, 17);
                const dataUrl = canvas.toDataURL().replace("data:image/png;base64,", "");
                const hexData = B.CONVERT(dataUrl, "hex", "base64");
                return B.HASH.SM3.cipher(hexData, { outEncoding: "hex", inEncoding: "utf8" }).slice(-32);
            } else {
                // Node.js 环境下生成随机 ID
                const crypto = require('crypto');
                return crypto.randomBytes(16).toString('hex');
            }
        } catch {
            throw new Error("Failed to generate device fingerprint");
        }
    }
}

// (async function main() {
//     try {
//         const devId = await wi.getDevId();
//         console.log("Device ID:", devId);
//     } catch (error) {
//         console.error("Error:", error);
//     }
// })();
const crypto = require('crypto');
a=crypto.randomBytes(16).toString('hex');
console.log(a);


