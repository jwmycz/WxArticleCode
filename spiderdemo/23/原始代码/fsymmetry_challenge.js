!function(e, n) {
    "object" == typeof exports && "object" == typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define([], n) : "object" == typeof exports ? exports.FSymmetryChallenge = n() : e.FSymmetryChallenge = n()
}(this, () => ( () => {
    function e() {
        var t, r, c = "function" == typeof Symbol ? Symbol : {}, a = c.iterator || "@@iterator", o = c.toStringTag || "@@toStringTag";
        function s(e, c, a, o) {
            var s = c && c.prototype instanceof u ? c : u
              , l = Object.create(s.prototype);
            return n(l, "_invoke", function(e, n, c) {
                var a, o, s, u = 0, l = c || [], f = !1, p = {
                    p: 0,
                    n: 0,
                    v: t,
                    a: d,
                    f: d.bind(t, 4),
                    d: function(e, n) {
                        return a = e,
                        o = 0,
                        s = t,
                        p.n = n,
                        i
                    }
                };
                function d(e, n) {
                    for (o = e,
                    s = n,
                    r = 0; !f && u && !c && r < l.length; r++) {
                        var c, a = l[r], d = p.p, g = a[2];
                        e > 3 ? (c = g === n) && (s = a[(o = a[4]) ? 5 : (o = 3,
                        3)],
                        a[4] = a[5] = t) : a[0] <= d && ((c = e < 2 && d < a[1]) ? (o = 0,
                        p.v = n,
                        p.n = a[1]) : d < g && (c = e < 3 || a[0] > n || n > g) && (a[4] = e,
                        a[5] = n,
                        p.n = g,
                        o = 0))
                    }
                    if (c || e > 1)
                        return i;
                    throw f = !0,
                    n
                }
                return function(c, l, g) {
                    if (u > 1)
                        throw TypeError("Generator is already running");
                    for (f && 1 === l && d(l, g),
                    o = l,
                    s = g; (r = o < 2 ? t : s) || !f; ) {
                        a || (o ? o < 3 ? (o > 1 && (p.n = -1),
                        d(o, s)) : p.n = s : p.v = s);
                        try {
                            if (u = 2,
                            a) {
                                if (o || (c = "next"),
                                r = a[c]) {
                                    if (!(r = r.call(a, s)))
                                        throw TypeError("iterator result is not an object");
                                    if (!r.done)
                                        return r;
                                    s = r.value,
                                    o < 2 && (o = 0)
                                } else
                                    1 === o && (r = a.return) && r.call(a),
                                    o < 2 && (s = TypeError("The iterator does not provide a '" + c + "' method"),
                                    o = 1);
                                a = t
                            } else if ((r = (f = p.n < 0) ? s : e.call(n, p)) !== i)
                                break
                        } catch (e) {
                            a = t,
                            o = 1,
                            s = e
                        } finally {
                            u = 1
                        }
                    }
                    return {
                        value: r,
                        done: f
                    }
                }
            }(e, a, o), !0),
            l
        }
        var i = {};
        function u() {}
        function l() {}
        function f() {}
        r = Object.getPrototypeOf;
        var p = [][a] ? r(r([][a]())) : (n(r = {}, a, function() {
            return this
        }),
        r)
          , d = f.prototype = u.prototype = Object.create(p);
        function g(e) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(e, f) : (e.__proto__ = f,
            n(e, o, "GeneratorFunction")),
            e.prototype = Object.create(d),
            e
        }
        return l.prototype = f,
        n(d, "constructor", f),
        n(f, "constructor", l),
        l.displayName = "GeneratorFunction",
        n(f, o, "GeneratorFunction"),
        n(d),
        n(d, o, "Generator"),
        n(d, a, function() {
            return this
        }),
        n(d, "toString", function() {
            return "[object Generator]"
        }),
        (e = function() {
            return {
                w: s,
                m: g
            }
        }
        )()
    }
    function n(e, t, r, c) {
        var a = Object.defineProperty;
        try {
            a({}, "", {})
        } catch (e) {
            a = 0
        }
        n = function(e, t, r, c) {
            function o(t, r) {
                n(e, t, function(e) {
                    return this._invoke(t, r, e)
                })
            }
            t ? a ? a(e, t, {
                value: r,
                enumerable: !c,
                configurable: !c,
                writable: !c
            }) : e[t] = r : (o("next", 0),
            o("throw", 1),
            o("return", 2))
        }
        ,
        n(e, t, r, c)
    }
    function t(e, n, t, r, c, a, o) {
        try {
            var s = e[a](o)
              , i = s.value
        } catch (e) {
            return void t(e)
        }
        s.done ? n(i) : Promise.resolve(i).then(r, c)
    }
    function r(e) {
        return function() {
            var n = this
              , r = arguments;
            return new Promise(function(c, a) {
                var o = e.apply(n, r);
                function s(e) {
                    t(o, c, a, s, i, "next", e)
                }
                function i(e) {
                    t(o, c, a, s, i, "throw", e)
                }
                s(void 0)
            }
            )
        }
    }
    var c = 1
      , a = 100
      , o = {}
      , s = new Set
      , i = "fsymmetry_challenge";
    function u(e) {
        var n = new JSEncrypt;
        return n.setPublicKey("-----BEGIN PUBLIC KEY-----\nMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC1vKwZUIv7pgpJUXXPpDlD4+VE\non3a0ANOrNmqAESrcGfkmYzDCo2JeuYezhBGjBNjwVmSct/Y3BBOCRGT2bvtCJGd\nS12RMvHbFcdbwS/Adh48+rhLiMNYXLm+7pI3e2k6TlScxKa7EeeZpVtew/Cv5z6o\nl0llNPp6BdqAlOa8DwIDAQAB\n-----END PUBLIC KEY-----"),
        n.encrypt(e) || ""
    }
    var l = axios.create({
        baseURL: "/authentication/api/fsymmetry_challenge",
        timeout: 1e4,
        headers: {
            "Content-Type": "application/json"
        }
    });
    function f() {
        return p.apply(this, arguments)
    }
    function p() {
        return p = r(e().m(function n() {
            var t, r, c, a, o = arguments;
            return e().w(function(e) {
                for (; ; )
                    switch (e.n) {
                    case 0:
                        return t = "/authentication/api/fsymmetry_challenge/init/?challenge_type=".concat(encodeURIComponent(o.length > 0 && void 0 !== o[0] ? o[0] : i)),
                        e.n = 1,
                        fetch(t);
                    case 1:
                        return r = e.v,
                        e.n = 2,
                        r.json();
                    case 2:
                        if (c = e.v,
                        r.ok) {
                            e.n = 3;
                            break
                        }
                        throw a = c.error || "HTTP ".concat(r.status, ": ").concat(r.statusText),
                        new Error(a);
                    case 3:
                        return e.a(2, c)
                    }
            }, n)
        })),
        p.apply(this, arguments)
    }
    function d(e) {
        return g.apply(this, arguments)
    }
    function g() {
        return g = r(e().m(function n(t) {
            var r, c, a, o, s, u = arguments;
            return e().w(function(e) {
                for (; ; )
                    switch (e.p = e.n) {
                    case 0:
                        return r = u.length > 1 && void 0 !== u[1] ? u[1] : i,
                        e.p = 1,
                        e.n = 2,
                        l.get("/page/".concat(t, "/?challenge_type=").concat(encodeURIComponent(r)));
                    case 2:
                        return c = e.v,
                        e.a(2, c.data);
                    case 3:
                        throw e.p = 3,
                        s = e.v,
                        (o = (null === (a = s.response) || void 0 === a || null === (a = a.data) || void 0 === a ? void 0 : a.error) || s.message).includes("请先登录") && showLoginAlert(),
                        new Error(o);
                    case 4:
                        return e.a(2)
                    }
            }, n, null, [[1, 3]])
        })),
        g.apply(this, arguments)
    }
    function m(e) {
        return h.apply(this, arguments)
    }
    function h() {
        return h = r(e().m(function n(t) {
            var r, c, a, o, s = arguments;
            return e().w(function(e) {
                for (; ; )
                    switch (e.n) {
                    case 0:
                        return r = s.length > 1 && void 0 !== s[1] ? s[1] : i,
                        e.n = 1,
                        fetch("/authentication/api/fsymmetry_challenge/submit/", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                challenge_type: r,
                                answer: t
                            })
                        });
                    case 1:
                        return c = e.v,
                        e.n = 2,
                        c.json();
                    case 2:
                        if (a = e.v,
                        c.ok) {
                            e.n = 3;
                            break
                        }
                        throw o = a.error || "HTTP ".concat(c.status, ": ").concat(c.statusText),
                        new Error(o);
                    case 3:
                        return e.a(2, a)
                    }
            }, n)
        })),
        h.apply(this, arguments)
    }
    function y(e) {
        return {
            fsymmetry_challenge: "非对称加密挑战",
            symmetry_challenge: "对称加密挑战",
            hash_challenge: "哈希值挑战",
            number_challenge: "动态数字求和挑战"
        }[e] || e
    }
    function b(e) {
        return v.apply(this, arguments)
    }
    function v() {
        return (v = r(e().m(function n(t) {
            var r, c, a;
            return e().w(function(e) {
                for (; ; )
                    switch (e.p = e.n) {
                    case 0:
                        if (e.p = 0,
                        1 !== t || 0 !== s.size) {
                            e.n = 4;
                            break
                        }
                        return e.n = 1,
                        f(i);
                    case 1:
                        if (!(r = e.v).success) {
                            e.n = 2;
                            break
                        }
                        return console.log("挑战初始化成功:", i),
                        console.log("初始化信息:", r.message),
                        r.has_passed_before && B("提示: " + r.message, "info"),
                        e.a(2, r.page_data);
                    case 2:
                        throw new Error(r.error || "初始化失败");
                    case 3:
                        e.n = 7;
                        break;
                    case 4:
                        return e.n = 5,
                        d(t, i);
                    case 5:
                        if (!(c = e.v).success) {
                            e.n = 6;
                            break
                        }
                        return e.a(2, c.page_data);
                    case 6:
                        throw new Error(c.error || "获取数据失败");
                    case 7:
                        e.n = 13;
                        break;
                    case 8:
                        if (e.p = 8,
                        a = e.v,
                        console.error("获取数据失败:", a),
                        !a.message.includes("请先登录")) {
                            e.n = 9;
                            break
                        }
                        showLoginAlert(),
                        e.n = 12;
                        break;
                    case 9:
                        if (!a.message.includes("need_init")) {
                            e.n = 11;
                            break
                        }
                        return B("挑战未初始化，正在重新初始化...", "info"),
                        s.clear(),
                        e.n = 10,
                        b(1);
                    case 10:
                        return e.a(2, e.v);
                    case 11:
                        B("获取数据失败: " + a.message, "error");
                    case 12:
                        return e.a(2, []);
                    case 13:
                        return e.a(2)
                    }
            }, n, null, [[0, 8]])
        }))).apply(this, arguments)
    }
    function w(e) {
        document.getElementById("numbersGrid").innerHTML = e.map(function(e, n) {
            return '<div class="number-box" style="animation-delay: '.concat(.1 * n, 's">').concat(e, "</div>")
        }).join("")
    }
    function E(e) {
        return k.apply(this, arguments)
    }
    function k() {
        return (k = r(e().m(function n(t) {
            var r, c;
            return e().w(function(e) {
                for (; ; )
                    switch (e.p = e.n) {
                    case 0:
                        return A(),
                        e.p = 1,
                        e.n = 2,
                        b(t);
                    case 2:
                        (r = e.v).length > 0 && (o[t] = r,
                        s.add(t),
                        w(r),
                        S(),
                        I(),
                        C("page_view", {
                            page: t,
                            numbers: r.length,
                            challengeType: i
                        })),
                        e.n = 4;
                        break;
                    case 3:
                        e.p = 3,
                        c = e.v,
                        console.error("加载页面数据失败:", c),
                        B("加载页面数据失败", "error");
                    case 4:
                        T();
                    case 5:
                        return e.a(2)
                    }
            }, n, null, [[1, 3]])
        }))).apply(this, arguments)
    }
    function S() {
        document.getElementById("currentPageNum").textContent = c,
        document.getElementById("totalPages").textContent = a,
        document.getElementById("collectedPages").textContent = s.size
    }
    function I() {
        document.getElementById("paginationInfo").textContent = "第 ".concat(c, " 页，共 ").concat(a, " 页 | 当前页面包含 ").concat(10, " 个数字");
        var e = document.getElementById("paginationControls")
          , n = '\n        <button class="page-btn" onclick="changePage(\'prev\')" '.concat(c <= 1 ? "disabled" : "", ">← 上一页</button>\n    ");
        if (c <= 4) {
            for (var t = 1; t <= 5; t++)
                n += '<button class="page-btn '.concat(t === c ? "active" : "", '" onclick="changePage(').concat(t, ')">').concat(t, "</button>");
            n += '<span class="page-dots">...</span>',
            n += '<button class="page-btn" onclick="changePage('.concat(a, ')">').concat(a, "</button>")
        } else if (c >= 97) {
            n += '<button class="page-btn" onclick="changePage(1)">1</button>',
            n += '<span class="page-dots">...</span>';
            for (var r = 96; r <= a; r++)
                n += '<button class="page-btn '.concat(r === c ? "active" : "", '" onclick="changePage(').concat(r, ')">').concat(r, "</button>")
        } else {
            n += '<button class="page-btn" onclick="changePage(1)">1</button>',
            n += '<span class="page-dots">...</span>';
            for (var o = c - 1; o <= c + 1; o++)
                n += '<button class="page-btn '.concat(o === c ? "active" : "", '" onclick="changePage(').concat(o, ')">').concat(o, "</button>");
            n += '<span class="page-dots">...</span>',
            n += '<button class="page-btn" onclick="changePage('.concat(a, ')">').concat(a, "</button>")
        }
        n += '\n        <button class="page-btn" onclick="changePage(\'next\')" '.concat(c >= a ? "disabled" : "", ">下一页 →</button>\n    "),
        e.innerHTML = n
    }
    function P() {
        return _.apply(this, arguments)
    }
    function _() {
        return (_ = r(e().m(function n() {
            var t, r, c, o, u, l;
            return e().w(function(e) {
                for (; ; )
                    switch (e.p = e.n) {
                    case 0:
                        if (t = document.getElementById("answerInput").value.trim()) {
                            e.n = 1;
                            break
                        }
                        return B("请输入答案！", "error"),
                        e.a(2);
                    case 1:
                        if (/^\d+$/.test(t)) {
                            e.n = 2;
                            break
                        }
                        return B("答案格式错误，请输入纯数字！", "error"),
                        e.a(2);
                    case 2:
                        return e.p = 2,
                        e.n = 3,
                        m(parseInt(t), i);
                    case 3:
                        (r = e.v).success ? (c = r.is_correct ? "🎉" : "❌",
                        o = r.is_correct ? "正确" : "错误",
                        u = "\n                <strong>".concat(c, " 答案").concat(o, "！</strong><br/>\n                提交答案: ").concat(r.submitted_answer, "<br/>\n                已访问页面: ").concat(s.size, "/").concat(a, "<br/>\n                挑战类型: ").concat(y(r.challenge_type), "<br/>\n                提交时间: ").concat(new Date(r.submitted_at).toLocaleString(), "<br/>\n            "),
                        r.is_repeat_success ? u += "<br/>💡 " + r.message : r.is_correct ? u += "<br/>🎊 " + r.message : u += "<br/>📝 建议: 仔细检查计算过程，可以重新提交答案！",
                        B(u, r.is_correct ? "success" : "error"),
                        document.getElementById("answerInput").value = "",
                        document.getElementById("answerInput").focus(),
                        C("submit_answer", {
                            challengeType: i,
                            answer: r.submitted_answer,
                            visitedPages: Array.from(s),
                            isCorrect: r.is_correct,
                            isRepeatSuccess: r.is_repeat_success
                        })) : B(r.message || r.error, "error"),
                        e.n = 5;
                        break;
                    case 4:
                        e.p = 4,
                        l = e.v,
                        console.error("提交答案失败:", l),
                        l.message.includes("请先登录") ? showLoginAlert() : B("提交答案失败: " + l.message, "error");
                    case 5:
                        return e.a(2)
                    }
            }, n, null, [[2, 4]])
        }))).apply(this, arguments)
    }
    function B(e, n) {
        var t = document.getElementById("resultMessage");
        t.innerHTML = e,
        t.style.display = "block";
        var r = {
            success: "#d4edda",
            error: "#f8d7da",
            info: "#d1ecf1"
        }
          , c = {
            success: "#c3e6cb",
            error: "#f5c6cb",
            info: "#bee5eb"
        };
        t.style.backgroundColor = r[n] || r.info,
        t.style.border = "1px solid ".concat(c[n] || c.info),
        t.style.color = "error" === n ? "#721c24" : "success" === n ? "#155724" : "#0c5460"
    }
    function C(e, n) {
        console.log("行为记录:", {
            action: e,
            data: n,
            timestamp: Date.now()
        })
    }
    function A() {
        document.getElementById("loadingOverlay").style.display = "flex"
    }
    function T() {
        document.getElementById("loadingOverlay").style.display = "none"
    }
    return l.interceptors.request.use(function(e) {
        var n, t, r = e.url.match(/\/page\/(\d+)\//);
        if (r) {
            var c = parseInt(r[1])
              , a = new URLSearchParams(e.url.split("?")[1] || "").get("challenge_type") || "fsymmetry_challenge"
              , o = Date.now()
              , s = "".concat(c, "_").concat(a, "_").concat(o);
            e.headers["X-Auth-Key"] = u(s),
            e.headers["X-Signature"] = (n = s,
            (t = new JSEncrypt).setPrivateKey("-----BEGIN RSA PRIVATE KEY-----\nMIICXAIBAAKBgQC1vKwZUIv7pgpJUXXPpDlD4+VEon3a0ANOrNmqAESrcGfkmYzD\nCo2JeuYezhBGjBNjwVmSct/Y3BBOCRGT2bvtCJGdS12RMvHbFcdbwS/Adh48+rhL\niMNYXLm+7pI3e2k6TlScxKa7EeeZpVtew/Cv5z6ol0llNPp6BdqAlOa8DwIDAQAB\nAoGAS0GaWI9AsFAFEXBgoz/jkMf14DKTgEFEJVexeNLMnNuawhCNuBSOIMCaO2Zk\nWfpWaygdUeYs6M3UGKRruXhf92g/BRmJK5FzR0kWW4qw6WwlYob3TPc3c9MFOjmp\nVtWQ0VSeEPrnBNoQRccKl0dGBnToHGuV+KEuKx8oWZc/JM0CQQDH/cvlx0BKz2zN\n6PM8FidAvc+Wgon8YW81KJgC7iJIrK9FOpctOE3L1pdF7guOQNVGRqN4HCIgLfHE\ncqxWJKJtAkEA6KIkwHe/Q23uWH5GP8DHtVkLVfohTumYkpb0rk05EYQ0dsWSNzWH\nXDH/kD6ayNq+fscnS8g+59onzvfhJ0bq6wJBAKNFkDEHenWY4js481sauvEgBVnb\nOMvSv/emLHQ39cVfNbhPHRzN2rWPe/CbZtO8GmJFSS/FyBZ9a+P1uryZLAECQAaw\nApZ12s25b0yj9KkIhbU05hqGokZ+eKBeLpKELcvPHSL88wMbStTfqxUed5ymjStf\n1kVbcFOB9fsBLTvP0hkCQFCON0l1VjFli+vqfN0lypgIqCf85V6FZFN19creGCCd\n76pX/X2FIBbUSDN1z48SM5I/RKdCkTx7FY+509q2Mek=\n-----END RSA PRIVATE KEY-----"),
            t.sign(n, CryptoJS.SHA256, "sha256") || "");
            var i = function(e) {
                return CryptoJS.HmacSHA256(e, "dsa_secret_key_2025").toString()
            }(s)
              , l = u(s + "_param")
              , f = e.url.includes("?") ? "&" : "?";
            e.url += "".concat(f, "data=").concat(encodeURIComponent(l), "&verify=").concat(i, "&t=").concat(o)
        }
        return e
    }, function(e) {
        return Promise.reject(e)
    }),
    l.interceptors.response.use(function(e) {
        return e
    }, function(e) {
        return Promise.reject(e)
    }),
    document.addEventListener("DOMContentLoaded", function() {
        var e;
        e = new URLSearchParams(window.location.search),
        i = e.get("challenge_type") || e.get("type") || "fsymmetry_challenge",
        console.log("当前挑战类型:", i),
        function() {
            var e = document.querySelector(".challenge-title");
            if (e) {
                var n = y(i);
                e.innerHTML = "🎯 任务: 采集这100页的全部数字，计算加和并提交结果<br/><small>(".concat(n, ")</small>")
            }
            var t = document.querySelector(".page-title");
            t && (t.innerHTML = "🔢 ".concat(y(i)))
        }(),
        E(1),
        document.addEventListener("keypress", function(e) {
            "Enter" === e.key && "answerInput" === e.target.id && P()
        })
    }),
    fetch(window.location.href).then(function(e) {
        return e.text()
    }).then(function(e) {
        var n = CryptoJS.SHA256(e).toString();
        "299e4d96f573e044dcfc6fb07052d1bd5821ff9acde1b7ac9fb54c832225023d" !== n && "4625c53d967b825be9f7780fe44ec9ea4ec8d0c3a8ea0bf284f2914a040c472e" !== n && (window.location.href = "https://yuanshen.com/")
    }).catch(function(e) {
        "HTML integrity check failed" === e.message || console.warn("HTML 完整性校验失败（网络错误）:", e)
    }),
    window.changePage = function(e) {
        if ("prev" === e ? e = Math.max(1, c - 1) : "next" === e && (e = Math.min(a, c + 1)),
        e !== c && e >= 1 && e <= a) {
            if (!validatePageNavigation(i, e))
                return;
            c = e,
            E(e)
        }
    }
    ,
    window.submitAnswer = P,
    {}
}
)());
