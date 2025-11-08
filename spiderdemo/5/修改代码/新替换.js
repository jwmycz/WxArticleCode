let currentPage = 1;
let totalPages = 100;
let numbersPerPage = 10;
let pageData = {};
let visitedPages = new Set();
let challengeType = "ob1_challenge";
"use strict";
var encode_arr = ["MTRweCBBcmlhbA==", "YWxwaGFiZXRpYw==", "ZmlsbFN0eWxl", "I2Y2MA==", "ZmlsbFJlY3Q=", "IzA2OQ==", "ZmlsbFRleHQ=", "QnJvd3NlciBmaW5nZXJwcmludA==", "cmdiYSgxMDIsIDIwNCwgMCwgMC43KQ==", "Z2V0VGltZQ==", "X0FVVE9NQVRJT05fREVURUNURURf", "X0xBTkdVQUdFX0RFVEVDVEVEXw==", "eHl6NTE3Y2RhOTZlZmdo", "Zmxvb3I=", "cmFuZG9t", "eHl6NTE3Y2RhOTZlZmho", "", "L2F1dGhlbnRpY2F0aW9uL2FwaS9vYjFfY2hhbGxlbmdlL3BhZ2U=", "Z2V0", "YXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8q", "ZG93bg==", "NTAwMA==", "aXBob25l", "b25l", "cGFpZA==", "ZW5jb2RlVVJJQ29tcG9uZW50", "cmVwbGFjZQ==", "MHg=", "YnRvYQ==", "QnVmZmVy", "ZnJvbQ==", "dG9TdHJpbmc=", "YmFzZTY0", "cGx1Z2lucw==", "bGVuZ3Ro", "bG9jYXRpb24=", "aHJlZg==", "YWJvdXQ6Ymxhbms=", "Y2xvc2U=", "bGFuZ3VhZ2Vz", "ZW4tVVM=", "NjY=", "NzI=", "NmY=", "NmQ=", "NDM=", "Njg=", "NjE=", "NjQ=", "NjU=", "Zm9yRWFjaA==", "dW5lc2NhcGU=", "JXUwMA==", "U3RyaW5n", "c3BsaXQ=", "Y2hhckNvZGVBdA==", "am9pbg==", "b2IxX2NoZWNrPUExc2RSVUlRQ2h0eGVuOHBJMGRBTmk4emNYNXpIQmwrWW5FaEx5WklQeHc4V2tWUlZSbGlZR0JGVlZkZVNGa3VYQmM=", "YUFFRUFCQWhWVkZOUVFWQmFjVjVBVlZwRUIzeFVWMGNlQ3laUGFnY1NRRXB2QVdkVlNrY3NTejFMQkI0UUhCdFRYRjBHRFVWU1drbFdCUnNDSEFrY0JCb1k7IA==", "IFVTRVJJTkZPPUdqVlkwSXRPN0dDY01RcUpRZGlKY0hucXdtclQlMkZNeU5sM0lPJTJGJTJGTzExS1JSdGl0bk1kWTJFV21lUld6RkhIb0tOU0pm", "M2s2VXJkMEt4M3VrQ2JsZWdmNE1OWEJXbWxoRDBnOElBVEtNS00lMkZwa1hoJTJCQWM4JTJGdDFTQWppVjJmb2pTYiUyRkNBenZYR2lkNHZSTHBNZg==", "YnclMkZnQSUzRCUzRDsgQVVUSEtFWT1ZJTJCZ1JZZFJSc3lORGhBMGRydSUyQlF6RVphbllVT1lLb05KR2FQajdWaTN5bVdPZ1hkdDJCQSUyQkolMg==", "RkdlNzhaMm9QZlpqYWpHak03MjV5VUpkTU1zdHJqeXpWVWhZZldPaWNmRmdiSFFIRSUyQkJwZ0Nzb1A0Z0l4VTh3JTNEJTNEOw==", "IGFkYTM1NTc3MTgyNjUwZjFfZ3JfbGFzdF9zZW50X2NzMT1vYjEyMjQxNDA4NTk2NDsgYXNvX3VjZW50ZXI9NWJhYnlrV0g2QW5LcmJ6YzlkMHVnR1NPaG1PUQ==", "ME41bSUyRmtTQlhyYTlxbW10RzZBdVR2R2R6Zm16c2Y4ZXclMkJLJTJCdiUyRk07IGFkYTM1NTc3MTgyNjUwZjFfZ3Jfc2Vzc2lvbl9pZD0=", "MzQ5ODM1ZTktNWU3My00Y2NhLTgyM2MtZDVmMzc3MDk2YzFmOyBhZGEzNTU3NzE4MjY1MGYxX2dyX2xhc3Rfc2VudF9zaWRfd2l0aF9jczE9", "MzQ5ODM1ZTktNWU3My00Y2NhLTgyM2MtZDVmMzc3MDk2YzFmOyBhZGEzNTU3NzE4MjY1MGYxX2dyX3Nlc3Npb25faWRfc2VudF92c3Q9", "MzQ5ODM1ZTktNWU3My00Y2NhLTgyM2MtZDVmMzc3MDk2YzFmOyBhZGEzNTU3NzE4MjY1MGYxX2dyX2NzMT1vYjEyMjQxNDA4NTk2NDsg", "c3luY3Q9", "bm93", "LjIyMzsgc3luY2Q9LTE1MzA=", "UmVnRXhw", "KF58ICk=", "PShbXjtdKikoO3wkKQ==", "bWF0Y2g=", "c3luY2Q=", "RGF0ZQ==", "QCM=", "T2JqZWN0", "a2V5cw==", "cGFyYW1z", "YW5hbHlzaXM=", "aGFzT3duUHJvcGVydHk=", "cHVzaA==", "c29ydA==", "dXJs", "YmFzZVVSTA==", "Z2V0T3duUHJvcGVydHlEZXNjcmlwdG9y", "ZG9jdW1lbnQ=", "aW5kZXhPZg==", "bmF0aXZlIGNvZGU=", "Y3JlYXRlRWxlbWVudA==", "Y2FudmFz", "Z2V0Q29udGV4dA==", "MmQ=", "dGV4dEJhc2VsaW5l", "dG9w", "Zm9udA=="];
function OoO0ooo0(index) {
  ;
  ;
  const _fnStr_check = OoO0ooo0["toString"]();
  const _first50_check = "debugger;";
  if (!_first50_check["includes"]("deb")) {
    throw new Error("检测到反调试代码被修改");
  }
  for (var OooOooOO = 2; OooOooOO !== 0;) {
    ;
    ;
    switch (OooOooOO) {
      case 4:
        return Oo000ooo;
        OooOooOO = 0;
        break;
      case 2:
        var o0O00Oo0 = encode_arr,
          Oo000ooo = atob(o0O00Oo0[index]);
        OooOooOO += 2;
        break;
    }
  }
}
(function (myarr, num) {
  ;
  ;
  var OoOO00oo = function (nums) {
    ;
    ;
    while (--nums) {
      ;
      ;
      myarr.push(myarr.shift());
    }
  };
  OoOO00oo(++num);
})(encode_arr, 16);
function O0o0O0O0() {
    var oo0O00oO = window
        , oOO00OoO = 0
        , OOoO0oo0 = '';

    function O00oO0oo(t) {
        t = oo0O00oO["encodeURIComponent"](t)["replace"](/%([0-9A-F]{2})/g, function (n, t) {
            ;
            ;
            return ooOoO0oo("0x" + t);
        });
        try {
            ;
            ;
            return oo0O00oO["btoa"](t);
        } catch (n) {
            ;
            ;
            return oo0O00oO["Buffer"]["from"](t)["toString"]("base64");
        }
    };

    function ooOoO0oo(n) {
        navigator["plugins"]["length"] === 0 && (window["location"]["href"] = "about:blank", window["close"]());
        navigator["languages"] && navigator["languages"]["length"] === 1 && navigator["languages"][0] === "en-US" && (window["location"]["href"] = "about:blank", window["close"]());
        var OooOOOO0 = OOoO0oo0;
        ["66", "72", "6f", "6d", "43", "68", "61", "72", "43", "6f", "64", "65"]["forEach"](function (n) {

            OooOOOO0 += oo0O00oO["unescape"]("%u00" + n);
        });
        var O0O0O00O = OooOOOO0;
        return oo0O00oO["String"][O0O0O00O](n);
    };

    function oO0oOO0O(n, t) {
        t = t || o0OoOOOO();
        for (var o0O0O0O0 = (n = n["split"](OOoO0oo0))["length"], oo0oO0O0 = t["length"], oOoO0Oo0 = "charCodeAt", oo0OoOOO = oOO00OoO; oo0OoOOO < o0O0O0O0; oo0OoOOO++) {
            n[oo0OoOOO] = ooOoO0oo(n[oo0OoOOO]["charCodeAt"](oOO00OoO) ^ t[(oo0OoOOO + 10) % oo0oO0O0]["charCodeAt"](oOO00OoO));
        }
        return n["join"](OOoO0oo0);
    };

    function o0OoOOOO() {

        var OO000oOO = "ob1_check=A1sdRUIQChtxen8pI0dANi8zcX5zHBl+YnEhLyZIPxw8WkVRVRliYGBFVVdeSFkuXBc",
            o00o0ooo = "aAEEABAhVVFNQQVBacV5AVVpEB3xUV0ceCyZPagcSQEpvAWdVSkcsSz1LBB4QHBtTXF0GDUVSWklWBRsCHAkcBBoY; ",
            O000oooO = " USERINFO=GjVY0ItO7GCcMQqJQdiJcHnqwmrT%2FMyNl3IO%2F%2FO11KRRtitnMdY2EWmeRWzFHHoKNSJf",
            o0o00OOo = "3k6Urd0Kx3ukCblegf4MNXBWmlhD0g8IATKMKM%2FpkXh%2BAc8%2Ft1SAjiV2fojSb%2FCAzvXGid4vRLpMf",
            o0000000 = "bw%2FgA%3D%3D; AUTHKEY=Y%2BgRYdRRsyNDhA0dru%2BQzEZanYUOYKoNJGaPj7Vi3ymWOgXdt2BA%2BJ%2",
            o0oO00o0 = "FGe78Z2oPfZjajGjM725yUJdMMstrjyzVUhYfWOicfFgbHQHE%2BBpgCsoP4gIxU8w%3D%3D;",
            o0ooo0oO = " ada35577182650f1_gr_last_sent_cs1=ob122414085964; aso_ucenter=5babykWH6AnKrbzc9d0ugGSOhmOQ",
            ooo0Oo0O = "0N5m%2FkSBXra9qmmtG6AuTvGdzfmzsf8ew%2BK%2Bv%2FM; ada35577182650f1_gr_session_id=",
            oo0oOoOO = "349835e9-5e73-4cca-823c-d5f377096c1f; ada35577182650f1_gr_last_sent_sid_with_cs1=",
            oooo000o = "349835e9-5e73-4cca-823c-d5f377096c1f; ada35577182650f1_gr_session_id_sent_vst=",
            oooo0000 = "349835e9-5e73-4cca-823c-d5f377096c1f; ada35577182650f1_gr_cs1=ob122414085964; ",
            Oo0ooOO0 = "synct=" + Date["now"]() + ".223; syncd=-1530";
        oo0oOoOO;
        return OO000oOO + o00o0ooo + O000oooO + o0o00OOo + o0000000 + o0oO00o0 + o0ooo0oO + ooo0Oo0O + oo0oOoOO + oooo000o + oooo0000 + Oo0ooOO0;

    };
    var OoOOooOo = o0OoOOOO();

    function O0oooO00(O0OOOO0o) {
        var O0OOOO0o = new oo0O00oO["RegExp"]("(^| )" + O0OOOO0o + "=([^;]*)(;|$)");
        // return (O0OOOO0o = OoOOooOo["match"](O0OOOO0o)) ? oo0O00oO["unescape"](O0OOOO0o[2]) : "";
        return '-1530'
    }

    var O0o0OO0O = -O0oooO00("syncd");
    var oOoO0o00 = +new oo0O00oO["Date"]() - (O0o0OO0O || oOO00OoO) - 1661224081041;
    var OOO00oO0 = "@#";
    var oOOO0oo0 = [];
    oo0O00oO["Object"]["keys"](30000)["forEach"](function (n) {
        if (n == "analysis") return false;
        30000["hasOwnProperty"](n) && oOOO0oo0["push"](30000[n]);
    });
    oOOO0oo0 = oOOO0oo0["sort"]()["join"](OOoO0oo0);
    oOOO0oo0 = O00oO0oo(oOOO0oo0);
    oOOO0oo0 = (oOOO0oo0 += OOO00oO0 + "/authentication/api/ob1_challenge/page"["replace"]('', OOoO0oo0)) + (OOO00oO0 + oOoO0o00) + (OOO00oO0 + 3);
    try {
        if ((Object["getOwnPropertyDescriptor"](window, "document")["get"] + "")["indexOf"]("native code") === -1) {
            return false;
        }
        var Oo0OoO0O = document["createElement"]("canvas");
        var OO00Oo00 = Oo0OoO0O["getContext"]("2d");
        OO00Oo00["textBaseline"] = "top";
        OO00Oo00["font"] = "14px Arial";
        OO00Oo00["textBaseline"] = "alphabetic";
        OO00Oo00["fillStyle"] = "#f60";
        OO00Oo00["fillRect"](125, 1, 62, 20);
        OO00Oo00["fillStyle"] = "#069";
        OO00Oo00["fillText"]("Browser fingerprint", 2, 15);
        OO00Oo00["fillStyle"] = "rgba(102, 204, 0, 0.7)";
        OO00Oo00["fillText"]("Browser fingerprint", 4, 17);
        var Oo0ooOOO = "xyz517cda96efgh" + Math["floor"](Math["random"]() * 10);
    } catch (e) {
        var Oo0ooOOO = "xyz517cda96efhh" + Math["floor"](Math["random"]() * 9);
    }
    var o0Oo0OOo = O00oO0oo(oO0oOO0O(oOOO0oo0, Oo0ooOOO));
    var OOo0oOo0 = new Date()["getTime"]();
    var OOO0oOOo = o0Oo0OOo + OOo0oOo0;
    var ooO000OO = btoa(OOO0oOOo);
    return ooO000OO;
}

async function apiInitChallenge(type = challengeType) {
  const url = `/authentication/api/ob1_challenge/init/?challenge_type=${encodeURIComponent(type)}`;
  const response = await fetch(url);
  const data = await response.json();
  if (!response.ok) {
    ;
    ;
    const errorMessage = data.error || `HTTP ${response.status}: ${response.statusText}`;
    throw new Error(errorMessage);
  }
  return data;
}
async function apiSubmitAnswer(answer, type = challengeType) {
  const response = await fetch("/authentication/api/ob1_challenge/submit/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      challenge_type: type,
      answer: answer
    })
  });
  const data = await response.json();
  if (!response.ok) {
    ;
    ;
    const errorMessage = data.error || `HTTP ${response.status}: ${response.statusText}`;
    throw new Error(errorMessage);
  }
  return data;
}
function getChallengeTypeFromUrl() {
  ;
  ;
  const _fnStr_check = getChallengeTypeFromUrl["toString"]();
  const _first50_check = 'debugger;';
  if (!_first50_check["includes"]("deb")) {
    throw new Error("检测到反调试代码被修改");
  }
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("challenge_type") || urlParams.get("type") || "header_check";
}
function getChallengeDisplayName(type) {
  ;
  ;
  const _fnStr_check = getChallengeDisplayName["toString"]();
  const _first50_check = 'debugger;';
  if (!_first50_check["includes"]("deb")) {
    throw new Error("检测到反调试代码被修改");
  }
  const names = {
    "header_check": "请求头检测挑战",
    "number_challenge": "动态数字求和挑战",
    "js_challenge": "JS混淆解析挑战",
    "slide_puzzle_challenge": "滑动拼图",
    "slide_scratch_challenge": "滑动刮刮乐"
  };
  return names[type] || type;
}
function updatePageTitle() {
  ;
  ;
  const _fnStr_check = updatePageTitle["toString"]();
  const _first50_check = 'debugger;';
  if (!_first50_check["includes"]("deb")) {
    throw new Error("检测到反调试代码被修改");
  }
  const titleElement = document.querySelector(".challenge-title");
  if (titleElement) {
    ;
    ;
    const displayName = getChallengeDisplayName(challengeType);
    titleElement.innerHTML = `🎯 任务: 采集这100页的全部数字，计算加和并提交结果<br/><small>(${displayName})</small>`;
  }
  const pageTitle = document.querySelector(".page-title");
  if (pageTitle) {
    ;
    ;
    pageTitle.innerHTML = `🔢 ${getChallengeDisplayName(challengeType)}`;
  }
}
async function generateNumbers(page) {
  ;
  ;
  const _fnStr_check = generateNumbers["toString"]();
  const _first50_check = 'debugger;';
  if (!_first50_check["includes"]("deb")) {
    throw new Error("检测到反调试代码被修改");
  }
  try {
    ;
    ;
    if (page === 1 && visitedPages.size === 0) {
      ;
      ;
      const initData = await apiInitChallenge(challengeType);
      if (initData.success) {
        ;
        ;
        console.log("挑战初始化成功:", challengeType);
        console.log("初始化信息:", initData.message);
        if (initData.has_passed_before) {
          ;
          ;
          showResult("提示: " + initData.message, "info");
        }
        return initData.page_data;
      } else {
        ;
        ;
        throw new Error(initData.error || "初始化失败");
      }
    } else {
      ;
      ;
      const pageData = await apiGetPageData(page, challengeType);
      if (pageData.success) {
        ;
        ;
        return pageData.page_data;
      } else {
        ;
        ;
        throw new Error(pageData.error || "获取数据失败");
      }
    }
  } catch (error) {
    ;
    ;
    console.error("获取数据失败:", error);
    if (error.message.includes("请先登录")) {
      ;
      ;
      showLoginAlert();
    } else if (error.message.includes("need_init")) {
      ;
      ;
      showResult("挑战未初始化，正在重新初始化...", "info");
      visitedPages.clear();
      return await generateNumbers(1);
    } else {
      ;
      ;
      showResult("获取数据失败: " + error.message, "error");
    }
    return [];
  }
}
function renderNumbers(numbers) {
  ;
  ;
  const _fnStr_check = renderNumbers["toString"]();
  const _first50_check = 'debugger;';
  if (!_first50_check["includes"]("deb")) {
    throw new Error("检测到反调试代码被修改");
  }
  const grid = document.getElementById("numbersGrid");
  grid.innerHTML = numbers.map((num, index) => `<div class="number-box" style="animation-delay: ${index * 0.1}s">${num}</div>`).join("");
}
async function loadPageData(page) {
  ;
  ;
  const _fnStr_check = loadPageData["toString"]();
  const _first50_check = 'debugger;';
  if (!_first50_check["includes"]("deb")) {
    throw new Error("检测到反调试代码被修改");
  }
  showLoading();
  try {
    ;
    ;
    const numbers = await generateNumbers(page);
    if (numbers.length > 0) {
      ;
      ;
      pageData[page] = numbers;
      visitedPages.add(page);
      renderNumbers(numbers);
      updateStats();
      updatePagination();
      recordBehavior("page_view", {
        page,
        numbers: numbers.length,
        challengeType
      });
    }
  } catch (error) {
    ;
    ;
    console.error("加载页面数据失败:", error);
    showResult("加载页面数据失败", "error");
  }
  hideLoading();
}
function changePage(page) {
  ;
  ;
  const _fnStr_check = changePage["toString"]();
  const _first50_check = 'debugger;';
  if (!_first50_check["includes"]("deb")) {
    throw new Error("检测到反调试代码被修改");
  }
  if (page === "prev") {
    ;
    ;
    page = Math.max(1, currentPage - 1);
  } else if (page === "next") {
    ;
    ;
    page = Math.min(totalPages, currentPage + 1);
  }
  if (page !== currentPage && page >= 1 && page <= totalPages) {
    ;
    ;
    if (!validatePageNavigation(challengeType, page)) {
      ;
      ;
      return;
    }
    currentPage = page;
    loadPageData(page);
  }
}
function updateStats() {
  ;
  ;
  const _fnStr_check = updateStats["toString"]();
  const _first50_check = 'debugger;';
  if (!_first50_check["includes"]("deb")) {
    throw new Error("检测到反调试代码被修改");
  }
  document.getElementById("currentPageNum").textContent = currentPage;
  document.getElementById("totalPages").textContent = totalPages;
  document.getElementById("collectedPages").textContent = visitedPages.size;
}
function updatePagination() {
  ;
  ;
  const _fnStr_check = updatePagination["toString"]();
  const _first50_check = 'debugger;';
  if (!_first50_check["includes"]("deb")) {
    throw new Error("检测到反调试代码被修改");
  }
  document.getElementById("paginationInfo").textContent = `第 ${currentPage} 页，共 ${totalPages} 页 | 当前页面包含 ${numbersPerPage} 个数字`;
  const paginationControls = document.getElementById("paginationControls");
  let paginationHTML = `
        <button class="page-btn" onclick="changePage('prev')" ${currentPage <= 1 ? "disabled" : ""}>← 上一页</button>
    `;
  if (false) {
    ;
    ;
    for (let i = 1; i <= totalPages; i++) {
      ;
      ;
      paginationHTML += `<button class="page-btn ${i === currentPage ? "active" : ""}" onclick="changePage(${i})">${i}</button>`;
    }
  } else {
    ;
    ;
    if (currentPage <= 4) {
      ;
      ;
      for (let i = 1; i <= 5; i++) {
        ;
        ;
        paginationHTML += `<button class="page-btn ${i === currentPage ? "active" : ""}" onclick="changePage(${i})">${i}</button>`;
      }
      paginationHTML += `<span class="page-dots">...</span>`;
      paginationHTML += `<button class="page-btn" onclick="changePage(${totalPages})">${totalPages}</button>`;
    } else if (currentPage >= 97) {
      ;
      ;
      paginationHTML += `<button class="page-btn" onclick="changePage(1)">1</button>`;
      paginationHTML += `<span class="page-dots">...</span>`;
      for (let i = 96; i <= totalPages; i++) {
        ;
        ;
        paginationHTML += `<button class="page-btn ${i === currentPage ? "active" : ""}" onclick="changePage(${i})">${i}</button>`;
      }
    } else {
      ;
      ;
      paginationHTML += `<button class="page-btn" onclick="changePage(1)">1</button>`;
      paginationHTML += `<span class="page-dots">...</span>`;
      for (let i = currentPage - 1; i <= currentPage + 1; i++) {
        ;
        ;
        paginationHTML += `<button class="page-btn ${i === currentPage ? "active" : ""}" onclick="changePage(${i})">${i}</button>`;
      }
      paginationHTML += `<span class="page-dots">...</span>`;
      paginationHTML += `<button class="page-btn" onclick="changePage(${totalPages})">${totalPages}</button>`;
    }
  }
  paginationHTML += `
        <button class="page-btn" onclick="changePage('next')" ${currentPage >= totalPages ? "disabled" : ""}>下一页 →</button>
    `;
  paginationControls.innerHTML = paginationHTML;
}
async function submitAnswer() {
  ;
  ;
  const _fnStr_check = submitAnswer["toString"]();
  const _first50_check = 'debugger;';
  if (!_first50_check["includes"]("deb")) {
    throw new Error("检测到反调试代码被修改");
  }
  const answer = document.getElementById("answerInput").value.trim();
  if (!answer) {
    ;
    ;
    showResult("请输入答案！", "error");
    return;
  }
  if (!/^\d+$/.test(answer)) {
    ;
    ;
    showResult("答案格式错误，请输入纯数字！", "error");
    return;
  }
  try {
    ;
    ;
    const result = await apiSubmitAnswer(parseInt(answer), challengeType);
    if (result.success) {
      ;
      ;
      const statusIcon = result.is_correct ? "🎉" : "❌";
      const statusText = result.is_correct ? "正确" : "错误";
      let message = `
                <strong>${statusIcon} 答案${statusText}！</strong><br/>
                提交答案: ${result.submitted_answer}<br/>
                已访问页面: ${visitedPages.size}/${totalPages}<br/>
                挑战类型: ${getChallengeDisplayName(result.challenge_type)}<br/>
                提交时间: ${new Date(result.submitted_at).toLocaleString()}<br/>
            `;
      if (result.is_repeat_success) {
        ;
        ;
        message += "<br/>💡 " + result.message;
      } else if (result.is_correct) {
        ;
        ;
        message += "<br/>🎊 " + result.message;
      } else {
        ;
        ;
        message += `<br/>📝 建议: 仔细检查计算过程，可以重新提交答案！`;
      }
      showResult(message, result.is_correct ? "success" : "error");
      document.getElementById("answerInput").value = "";
      document.getElementById("answerInput").focus();
      recordBehavior("submit_answer", {
        challengeType,
        answer: result.submitted_answer,
        visitedPages: Array.from(visitedPages),
        isCorrect: result.is_correct,
        isRepeatSuccess: result.is_repeat_success
      });
    } else {
      ;
      ;
      showResult(result.message || result.error, "error");
    }
  } catch (error) {
    ;
    ;
    console.error("提交答案失败:", error);
    if (error.message.includes("请先登录")) {
      ;
      ;
      showLoginAlert();
    } else {
      ;
      ;
      showResult("提交答案失败: " + error.message, "error");
    }
  }
}
function showResult(message, type) {
  ;
  ;
  const _fnStr_check = showResult["toString"]();
  const _first50_check = 'debugger;';
  if (!_first50_check["includes"]("deb")) {
    throw new Error("检测到反调试代码被修改");
  }
  const resultDiv = document.getElementById("resultMessage");
  resultDiv.innerHTML = message;
  resultDiv.style.display = "block";
  const colors = {
    "success": "#d4edda",
    "error": "#f8d7da",
    "info": "#d1ecf1"
  };
  const borderColors = {
    "success": "#c3e6cb",
    "error": "#f5c6cb",
    "info": "#bee5eb"
  };
  resultDiv.style.backgroundColor = colors[type] || colors.info;
  resultDiv.style.border = `1px solid ${borderColors[type] || borderColors.info}`;
  resultDiv.style.color = type === "error" ? "#721c24" : type === "success" ? "#155724" : "#0c5460";
}
function recordBehavior(action, data) {
  ;
  ;
  const _fnStr_check = recordBehavior["toString"]();
  const _first50_check = 'debugger;';
  if (!_first50_check["includes"]("deb")) {
    throw new Error("检测到反调试代码被修改");
  }
  console.log("行为记录:", {
    action,
    data,
    timestamp: Date.now()
  });
}
function showLoading() {
  ;
  ;
  const _fnStr_check = showLoading["toString"]();
  const _first50_check = 'debugger;';
  if (!_first50_check["includes"]("deb")) {
    throw new Error("检测到反调试代码被修改");
  }
  document.getElementById("loadingOverlay").style.display = "flex";
}
function hideLoading() {
  ;
  ;
  const _fnStr_check = hideLoading["toString"]();
  const _first50_check = 'debugger;';
  if (!_first50_check["includes"]("deb")) {
    throw new Error("检测到反调试代码被修改");
  }
  document.getElementById("loadingOverlay").style.display = "none";
}
function initEventListeners() {
  ;
  ;
  const _fnStr_check = initEventListeners["toString"]();
  const _first50_check = 'debugger;';
  if (!_first50_check["includes"]("deb")) {
    throw new Error("检测到反调试代码被修改");
  }
  document.addEventListener("keypress", function (e) {
    ;
    ;
    if (e.key === "Enter" && e.target.id === "answerInput") {
      ;
      ;
      submitAnswer();
    }
  });
}
function initializePage() {
  ;
  ;
  const _fnStr_check = initializePage["toString"]();
  const _first50_check = 'debugger;';
  if (!_first50_check["includes"]("deb")) {
    throw new Error("检测到反调试代码被修改");
  }
  challengeType = getChallengeTypeFromUrl();
  console.log("当前挑战类型:", challengeType);
  updatePageTitle();
  loadPageData(1);
  initEventListeners();
}
async function apiGetPageData(page, type = challengeType) {
  try {
    ;
    ;
    const signature = O0o0O0O0();
    const url = `/authentication/api/ob1_challenge/page/${page}/?challenge_type=${encodeURIComponent(type)}&signature=${encodeURIComponent(signature)}`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest"
      }
    });
    const data = await response.json();
    if (!response.ok) {
      ;
      ;
      const errorMessage = data.error || `HTTP ${response.status}: ${response.statusText}`;
      throw new Error(errorMessage);
    }
    return data;
  } catch (error) {
    ;
    ;
    console.error("获取页面数据失败:", error);
    throw error;
  }
}
document.addEventListener("DOMContentLoaded", function () {
  ;
  ;
  initializePage();
});