const fs = require('fs');
const path = require('path');
const { TextDecoder, TextEncoder } = require('util');

let wasm;

// ---- wasm memory 相关 ----
let cachedUint8ArrayMemory0 = null;
let cachedDataViewMemory0 = null;

function getUint8ArrayMemory0() {
    if (!cachedUint8ArrayMemory0 || cachedUint8ArrayMemory0.buffer !== wasm.memory.buffer) {
        cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8ArrayMemory0;
}

function getDataViewMemory0() {
    if (!cachedDataViewMemory0 || cachedDataViewMemory0.buffer !== wasm.memory.buffer) {
        cachedDataViewMemory0 = new DataView(wasm.memory.buffer);
    }
    return cachedDataViewMemory0;
}

const cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });
const cachedTextEncoder = new TextEncoder('utf-8');
let WASM_VECTOR_LEN = 0;

function getStringFromWasm0(ptr, len) {
    return cachedTextDecoder.decode(getUint8ArrayMemory0().subarray(ptr, ptr + len));
}

function passStringToWasm0(arg, malloc, realloc) {
    const buf = cachedTextEncoder.encode(arg);
    const ptr = malloc(buf.length, 1) >>> 0;
    getUint8ArrayMemory0().set(buf, ptr);
    WASM_VECTOR_LEN = buf.length;
    return ptr;
}

function takeFromExternrefTable0(idx) {
    const value = wasm.__wbindgen_export_3.get(idx);
    wasm.__externref_table_dealloc(idx);
    return value;
}

function getImports() {
    const imports = {};
    imports.wbg = {};

    imports.wbg.__wbg_new_8a6f238a6ece86ea = () => new Error();

    imports.wbg.__wbg_stack_0ed75d68575b0f3c = (ptr, errorObj) => {
        const stack = errorObj.stack || "";
        const ptr1 = passStringToWasm0(stack, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        getDataViewMemory0().setInt32(ptr + 4 * 1, len1, true);
        getDataViewMemory0().setInt32(ptr + 4 * 0, ptr1, true);
    };

    imports.wbg.__wbg_now_807e54c39636c349 = () => Date.now();
    imports.wbg.__wbg_error_7534b8e9a36f1ab4 = (ptr, len) => { console.error(getStringFromWasm0(ptr, len)); };
    imports.wbg.__wbindgen_init_externref_table = () => {
        const table = wasm.__wbindgen_export_3;
        const offset = table.grow(4);
        table.set(0, undefined);
        table.set(offset + 0, undefined);
        table.set(offset + 1, null);
        table.set(offset + 2, true);
        table.set(offset + 3, false);
    };
    imports.wbg.__wbindgen_string_new = (ptr, len) => getStringFromWasm0(ptr, len);
    imports.wbg.__wbindgen_throw = (ptr, len) => { throw new Error(getStringFromWasm0(ptr, len)); };

    return imports;
}

async function initWasm(filePath) {
    const imports = getImports();
    const wasmBuffer = fs.readFileSync(filePath);
    const { instance } = await WebAssembly.instantiate(wasmBuffer, imports);
    wasm = instance.exports;
    cachedDataViewMemory0 = null;
    cachedUint8ArrayMemory0 = null;
    if (wasm.__wbindgen_start) wasm.__wbindgen_start();
    return wasm;
}

function encrypt_simple(page, timestamp) {
    let deferred4_0, deferred4_1;
    const ptr0 = passStringToWasm0(page, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passStringToWasm0(timestamp, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;

    const ret = wasm.encrypt_simple(ptr0, len0, ptr1, len1);
    let ptr3 = ret[0], len3 = ret[1];

    if (ret[3]) {
        ptr3 = 0; len3 = 0;
        throw takeFromExternrefTable0(ret[2]);
    }
    deferred4_0 = ptr3;
    deferred4_1 = len3;
    const result = getStringFromWasm0(ptr3, len3);
    wasm.__wbindgen_free(deferred4_0, deferred4_1, 1);
    return result;
}

// // ---- 测试 ----
// (async () => {
//     await initWasm(path.resolve('./jm.wasm'));
//     const page = "test_page";
//     const timestamp = Date.now().toString();
//     const encrypted = encrypt_simple(page, timestamp);
//     // console.log("加密结果:", encrypted);
// })();

async function getdata(page, timestamp) {
    await initWasm(path.resolve('./jm.wasm'));
    const encrypted = encrypt_simple(page, timestamp);
    console.log("加密结果:", encrypted);
    return encrypted;
}
// page = "test_page";
timestamp = Date.now().toString();
console.log(timestamp);
// getdata(page, timestamp);