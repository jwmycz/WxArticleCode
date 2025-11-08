let debug_str = "debugger";
function debug() {
    if (setInterval["toString"]() !== "function setInterval() { [native code] }") return location["href"] = "https://yuanshen.com/", document["body"]["innerHTML"] = "检测到调试环境，页面已被保护。", true;
    if (setInterval["toString"]() !== Function["prototype"]["toString"]["call"](setInterval)) return location["href"] = "https://yuanshen.com/", document["body"]["innerHTML"] = "检测到调试环境，页面已被保护。", true;
    Function(debug_str)["call"]();
    Function(debug_str)["apply"]();
    Function(debug_str)["bind"]()();
    Function(debug_str + ';' + Date["now"]());
    eval(debug_str + ';' + Date["now"]());
    Function["constructor"]("debugger")();
    (function () {
        return true;
    })["constructor"]("debugger")();
}

setInterval(debug, 500);