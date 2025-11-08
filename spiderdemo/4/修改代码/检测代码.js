function recordBehavior(_0x57bedd, _0x1d62c8) {
  console["log"]("行为记录:", {
    "action": _0x57bedd,
    "data": _0x1d62c8,
    "timestamp": Date["now"]()
  });
}
function _ÿijjji() {
  try {
    if (console["table"]["toString"]() !== "function table() { [native code] }") {
              location["href"] = "https://yuanshen.com/";
              document["body"]["innerHTML"] = "检测到调试环境，页面已被保护。";
              return true;
            };
    if (console["table"]["toString"]() !== Function["prototype"]["toString"]["call"](console["table"])) {
      location["href"] = "https://yuanshen.com/";
      document["body"]["innerHTML"] = "检测到调试环境，页面已被保护。";
      return true;
    };
    if (console["clear"]["toString"]() !== "function clear() { [native code] }") {
              location["href"] = "https://yuanshen.com/";
              document["body"]["innerHTML"] = "检测到调试环境，页面已被保护。";
              return true;
            };
    if (setInterval["toString"]() !== "function setInterval() { [native code] }") {
              location["href"] = "https://yuanshen.com/";
              document["body"]["innerHTML"] = "检测到调试环境，页面已被保护。";
              return true;
            };
    if (setTimeout["toString"]() !== "function setTimeout() { [native code] }") {
              location["href"] = "https://yuanshen.com/";
              document["body"]["innerHTML"] = "检测到调试环境，页面已被保护。";
              return true;
            };
    if (setInterval["toString"]() !== Function["prototype"]["toString"]["call"](setInterval)) {
              location["href"] = "https://yuanshen.com/";
              document["body"]["innerHTML"] = "检测到调试环境，页面已被保护。";
              return true;
            };
    if (setTimeout["toString"]() !== Function["prototype"]["toString"]["call"](setTimeout)) {
              location["href"] = "https://yuanshen.com/";
              document["body"]["innerHTML"] = "检测到调试环境，页面已被保护。";
              return true;
            };
    if (Date["now"]["toString"]() !== "function now() { [native code] }") {
              location["href"] = "https://yuanshen.com/";
              document["body"]["innerHTML"] = "检测到调试环境，页面已被保护。";
              return true;
            };
    if (performance["now"]["toString"]() !== "function now() { [native code] }") {
              location["href"] = "https://yuanshen.com/";
              document["body"]["innerHTML"] = "检测到调试环境，页面已被保护。";
              return true;
            }
    if (console["log"]["toString"]() !== "function log() { [native code] }") {
      location["href"] = "https://yuanshen.com/";
      document["body"]["innerHTML"] = "检测到调试环境，页面已被保护。";
      return true;
    }
    return false;
  } catch (_0x43ee34) {
    location["href"] = "https://yuanshen.com/";
    document["body"]["innerHTML"] = "检测到调试环境，页面已被保护。";
    return true;
  }
}
function _ÿbgbad() {
  var _0x1d1aeb = performance["now"]();
  _ÿijjji();
  var _0x29fa91 = Array(1000)["fill"]()["map"](function (_0x31947b, _0x3b4860) {
            return {
              "id": _0x3b4860,
              "name": "test" + _0x3b4860,
              "value": Math["random"]()
            };
          });
  console["table"](_0x29fa91);
  console["clear"]();
  var _0x1a88d8 = performance["now"]();
  var _0x33304b = _0x1a88d8 - _0x1d1aeb;
  console["log"]("执行时间:", _0x33304b);
  if (_0x33304b > 10) {
    recordBehavior("debugger_detected", {
              "executionTime": _0x33304b,
              "timestamp": Date["now"]()
            });
    location["href"] = "https://yuanshen.com/";
    document["body"]["innerHTML"] = "检测到调试环境，页面已被保护。";
  }
}
_ÿaedfa = setInterval(_ÿbgbad, 1000);