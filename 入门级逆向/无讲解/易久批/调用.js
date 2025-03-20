const CryptoJS = require("crypto-js");
function a0_0x2069(_0x208d4c, _0x254b05) {
  _0x208d4c = _0x208d4c - 247;
  var _0x23723c = a0_0x36a3[_0x208d4c];
  return _0x23723c;
}
function UUID() {
  let _0x2617b9 = [];
  let _0x2401ae = "0123456789abcdefghijklmnopqrstuvwxyz";
  for (let _0x15b3fc = 0; _0x15b3fc < 36; _0x15b3fc++) {
    _0x2617b9[_0x15b3fc] = _0x2401ae.substr(Math.floor(Math.random() * 16), 1);
  }
  _0x2617b9[14] = "4";
  _0x2617b9[19] = _0x2401ae.substr(_0x2617b9[19] & 3 | 8, 1);
  _0x2617b9[8] = _0x2617b9[13] = _0x2617b9[18] = _0x2617b9[23] = "_";
  let _0x429349 = _0x2617b9.join("");
  return _0x429349;
}
UU=UUID()
console.log(UU)
function encodeUTF8(_0x2e8852) {
  var _0x5d5164;
  var _0x326ec1 = [];
  var _0x408e89;
  var _0x423ffe;
  for (_0x5d5164 = 0; _0x5d5164 < _0x2e8852.length; _0x5d5164++) if ((_0x408e89 = _0x2e8852.charCodeAt(_0x5d5164)) < 128) _0x326ec1.push(_0x408e89);else {
    if (_0x408e89 < 2048) _0x326ec1.push(192 + (_0x408e89 >> 6 & 31), 128 + (_0x408e89 & 63));else {
      if ((_0x423ffe = _0x408e89 ^ 55296) >> 10 == 0) {
        _0x408e89 = (_0x423ffe << 10) + (_0x2e8852.charCodeAt(++_0x5d5164) ^ 56320) + 65536;
        _0x326ec1.push(240 + (_0x408e89 >> 18 & 7), 128 + (_0x408e89 >> 12 & 63));
      } else _0x326ec1.push(224 + (_0x408e89 >> 12 & 15));
      _0x326ec1.push(128 + (_0x408e89 >> 6 & 63), 128 + (_0x408e89 & 63));
    }
  }
  ;
  return _0x326ec1;
}
function sha1(_0x328bf9) {
  var _0x7a158e = new Uint8Array(encodeUTF8(_0x328bf9));
  var _0x1761a1;
  var _0x370dd9;
  var _0x450bd1;
  var _0x5c2ada = (_0x7a158e.length + 8 >>> 6 << 4) + 16;
  var _0x328bf9 = new Uint8Array(_0x5c2ada << 2);
  _0x328bf9.set(new Uint8Array(_0x7a158e.buffer));
  _0x328bf9 = new Uint32Array(_0x328bf9.buffer);
  for (_0x450bd1 = new DataView(_0x328bf9.buffer), _0x1761a1 = 0; _0x1761a1 < _0x5c2ada; _0x1761a1++) _0x328bf9[_0x1761a1] = _0x450bd1.getUint32(_0x1761a1 << 2);
  _0x328bf9[_0x7a158e.length >> 2] |= 128 << 24 - (_0x7a158e.length & 3) * 8;
  _0x328bf9[_0x5c2ada - 1] = _0x7a158e.length << 3;
  var _0x5b7acf = [];
  var _0xbf1df5 = [function () {
    return _0x179a15[1] & _0x179a15[2] | ~_0x179a15[1] & _0x179a15[3];
  }, function () {
    return _0x179a15[1] ^ _0x179a15[2] ^ _0x179a15[3];
  }, function () {
    return _0x179a15[1] & _0x179a15[2] | _0x179a15[1] & _0x179a15[3] | _0x179a15[2] & _0x179a15[3];
  }, function () {
    return _0x179a15[1] ^ _0x179a15[2] ^ _0x179a15[3];
  }];
  var _0x47d098 = function (_0x3a34fa, _0x34b940) {
    return _0x3a34fa << _0x34b940 | _0x3a34fa >>> 32 - _0x34b940;
  };
  var _0xd78af8 = [1518500249, 1859775393, -1894007588, -899497514];
  var _0x179a15 = [1732584193, -271733879, null, null, -1009589776];
  _0x179a15[2] = ~_0x179a15[0];
  _0x179a15[3] = ~_0x179a15[1];
  for (_0x1761a1 = 0; _0x1761a1 < _0x328bf9.length; _0x1761a1 += 16) {
    var _0x37d522 = _0x179a15.slice(0);
    for (_0x370dd9 = 0; _0x370dd9 < 80; _0x370dd9++) {
      _0x370dd9 < 16 ? _0x5b7acf[_0x370dd9] = _0x328bf9[_0x1761a1 + _0x370dd9] : _0x5b7acf[_0x370dd9] = _0x47d098(_0x5b7acf[_0x370dd9 - 3] ^ _0x5b7acf[_0x370dd9 - 8] ^ _0x5b7acf[_0x370dd9 - 14] ^ _0x5b7acf[_0x370dd9 - 16], 1);
      _0x450bd1 = _0x47d098(_0x179a15[0], 5) + _0xbf1df5[_0x370dd9 / 20 | 0]() + _0x179a15[4] + _0x5b7acf[_0x370dd9] + _0xd78af8[_0x370dd9 / 20 | 0] | 0;
      _0x179a15[1] = _0x47d098(_0x179a15[1], 30);
      _0x179a15.pop();
      _0x179a15.unshift(_0x450bd1);
    }
    for (_0x370dd9 = 0; _0x370dd9 < 5; _0x370dd9++) _0x179a15[_0x370dd9] = _0x179a15[_0x370dd9] + _0x37d522[_0x370dd9] | 0;
  }
  ;
  _0x450bd1 = new DataView(new Uint32Array(_0x179a15).buffer);
  for (var _0x1761a1 = 0; _0x1761a1 < 5; _0x1761a1++) _0x179a15[_0x1761a1] = _0x450bd1.getUint32(_0x1761a1 << 2);
  var _0x201332 = Array.prototype.map.call(new Uint8Array(new Uint32Array(_0x179a15).buffer), function (_0x121b86) {
    return (_0x121b86 < 16 ? "0" : "") + _0x121b86.toString(16);
  }).join("");
  return _0x201332;
}
function getlocal_init_time() {
  let _0x42e1a9 = new Date().getTime() / 1000;
  // return parseFloat(localStorage.getItem("local_init_time") || _0x42e1a9);
  return parseFloat(_0x42e1a9);
}
function getserver_init_time() {
  let _0x431ecb = new Date().getTime() / 1000;
  //return parseFloat(localStorage.getItem("server_init_time") || _0x431ecb);
  return parseFloat(_0x431ecb);
}
function isBrowser() {
  let _0xfe3a3a = ![];
  return typeof window !== "undefined" && (_0xfe3a3a = !![]), typeof navigator !== undefined && typeof navigator.userAgent === "string" && (_0xfe3a3a = !![]), _0xfe3a3a;
}
function initInterAuth(_0x5d84cb) {
  // let _0x5c70ae = isBrowser();
  // if (!_0x5c70ae) return ![];
  let _0x91e645 = UUID();
  let _0x27d700 = new Date().getTime() / 1000;
  let _0x1c6bd0 = getlocal_init_time();
  let _0x55ac35 = getserver_init_time();
  let _0xb071cc = _0x55ac35 + (_0x27d700 - _0x1c6bd0);
  _0xb071cc = (_0xb071cc + "").split(".")[0];
  _0x5d84cb.data = _0x5d84cb.data || {};
  let _0x547cfe = JSON.stringify(_0x5d84cb.data);
  let _0x52da94 = sha1(_0x547cfe);
  let _0x261c8a = "POST" + _0x5d84cb.url + _0x52da94;
  _0x5d84cb.method == "get" && (_0x261c8a = "GET" + _0x5d84cb.url);
  // const _0x28079e = localStorage.getItem("TOKEN") || "";
  const _0x28079e = "";
  let _0x540238 = _0x28079e || _0xb071cc;
  _0x5d84cb.headers.token = _0x28079e;
  (_0x5d84cb.noRequireToken || _0x5d84cb.url.startsWith("/himalaya-ApiService-UA2")) && (_0x540238 = _0xb071cc, _0x5d84cb.headers.token = "");
  let _0x2486c0 = CryptoJS.HmacSHA1(_0xb071cc + _0x91e645 + _0x261c8a, _0x540238);
  _0x5d84cb.headers["x-sign-nonce"] = _0x91e645;
  _0x5d84cb.headers["x-sign-version"] = "1.0";
  _0x5d84cb.headers["x-sign-timestamp"] = _0xb071cc;
  let _0x355d08 = _0x2486c0.toString();
  _0x5d84cb.headers["x-sign"] = _0x355d08;
  return _0x5d84cb;
}
data={
    "url": "/v58/City/GetVisitorCityRegion",
    "method": "post",
    "headers": {
        "common": {
            "Accept": "application/json, text/plain, */*"
        },
        "delete": {},
        "get": {},
        "head": {},
        "post": {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        "put": {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        "patch": {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        "appCode": "ShoppingMallPC",
        "UUID": "ac95bd19ac40cd674c399d45083242c5",
        "token": ""
    },
    "transformRequest": [
        null
    ],
    "transformResponse": [
        null
    ],
    "timeout": 0,
    "xsrfCookieName": "XSRF-TOKEN",
    "xsrfHeaderName": "X-XSRF-TOKEN",
    "maxContentLength": -1,
    "maxBodyLength": -1,
    "transitional": {
        "silentJSONParsing": true,
        "forcedJSONParsing": true,
        "clarifyTimeoutError": false
    },
    "noRequireToken": true,
    "data": {
        "cityId": 402,
        "countyRegionId": "320116",
        "userClassId": 1,
        "userDisplayClass": 0,
        "addressId": "",
        "deviceType": 3
    }
}
console.log(initInterAuth(data).headers)
// export {
//     initInterAuth
// };