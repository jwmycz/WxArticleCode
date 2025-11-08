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
  ;
  ;
  const _fnStr_check = O0o0O0O0["toString"]();
  const _first50_check = 'debugger;';
  if (!_first50_check["includes"]("deb")) {
    throw new Error("检测到反调试代码被修改");
  }
    for (var oOO0OOOO = 2629851545 - (2629851545 - 16); oOO0OOOO !== 2738104540 - (2738104540 - 0); ) {
        ; ;switch (oOO0OOOO) {
        case 360102485 - (360102485 - 145):
            var O0o0OO0O = -O0oooO00(O0ooooO0.VVxVvvvvvv);
            oOO0OOOO += 1013863700 - (1013863700 - 21);
            break;
        case 3820145045 - (3820145045 - 197):
            var oOOO0oo0 = [];
            oOO0OOOO += 1768788333 - (1768788333 - 5);
            break;
        case 3495091381 - (3495091381 - 63):
            function O00oO0oo(t) {
                ; ;const _fnStr_check = O00oO0oo["toString"]();
                const _first50_check = 'debugger;';
                if (!_first50_check["includes"]("deb")) {
                    throw new Error("\u68C0\u6D4B\u5230\u53CD\u8C03\u8BD5\u4EE3\u7801\u88AB\u4FEE\u6539")
                }
                for (var OO0o0oOO = 909391134 - (909391134 - 1); OO0o0oOO !== 3998571536 - (3998571536 - 0); ) {
                    ; ;switch (OO0o0oOO) {
                    case 1127927094 - (1127927094 - 1):
                        var oOO0oo00 = o00oOo0O;
                        OO0o0oOO += 3664392430 - (3664392430 - 1);
                        break;
                    case 1431738776 - (1431738776 - 10):
                        try {
                            ; ;return oo0O00oO[oooO0oOo.xvxVVVvVxx](t)
                        } catch (n) {
                            ; ;return oo0O00oO[oooO0oOo.VvVvvvvxxv][oooO0oOo.vVvvvvVVvV](t)[oooO0oOo.VVvVxVxxVV](oooO0oOo.VvvVxVVxxv)
                        }
                        OO0o0oOO = 339746102 - (339746102 - 0);
                        break;
                    case 503428286 - (503428286 - 9):
                        t = oo0O00oO[oooO0oOo.vxvVvVxxvx](t)[oooO0oOo.VVVxxxvvvV](/%([0-9A-F]{2})/g, function(n, t) {
                            ; ;return ooOoO0oo(oooO0oOo.vvxVxVvxvx + t)
                        });
                        OO0o0oOO += 1291752077 - (1291752077 - 1);
                        break;
                    case 1994728520 - (1994728520 - 2):
                        var oOooOOOo = {
                            v0: 2857070368 - (2857070368 - 9),
                            v1: 4155679318 - (4155679318 - 10),
                            v2: 2293488042 - (2293488042 - 11),
                            v3: 2714965437 - (2714965437 - 12),
                            v4: 795832844 - (795832844 - 13),
                            v5: 3793145049 - (3793145049 - 14),
                            v6: 1393988412 - (1393988412 - 15),
                            v7: 3148688917 - (3148688917 - 16)
                        };
                        OO0o0oOO += 1527124356 - (1527124356 - 3);
                        break;
                    case 2786484701 - (2786484701 - 5):
                        var oooO0oOo = {
                            vxvVvVxxvx: oOO0oo00(oOooOOOo.v0),
                            VVVxxxvvvV: oOO0oo00(oOooOOOo.v1),
                            vvxVxVvxvx: oOO0oo00(oOooOOOo.v2),
                            xvxVVVvVxx: oOO0oo00(oOooOOOo.v3),
                            VvVvvvvxxv: oOO0oo00(oOooOOOo.v4),
                            vVvvvvVVvV: oOO0oo00(oOooOOOo.v5),
                            VVvVxVxxVV: oOO0oo00(oOooOOOo.v6),
                            VvvVxVVxxv: oOO0oo00(oOooOOOo.v7)
                        };
                        OO0o0oOO += 722501548 - (722501548 - 4);
                        break
                    }
                }
            }
            oOO0OOOO += 3764710106 - (3764710106 - 24);
            break;
        case 858149872 - (858149872 - 115):
            var OoOOooOo = o0OoOOOO();
            oOO0OOOO += 3298011695 - (3298011695 - 12);
            break;
        case 88581093 - (88581093 - 202):
            oo0O00oO[O0ooooO0.VvvxvvVvvv][O0ooooO0.VvVxxVvxVx](oo00o00O[O0ooooO0.VxxvVVVvxV])[O0ooooO0.vVxvVvvvVv](function(n) {
                ; ;if (n == O0ooooO0.VVvxvvxvxv)
                    return false;
                oo00o00O[O0ooooO0.VxxvVVVvxV][O0ooooO0.xVvxvVvxxv](n) && oOOO0oo0[O0ooooO0.VVVvVVvxxV](oo00o00O[O0ooooO0.VxxvVVVvxV][n])
            });
            oOO0OOOO += 4157640300 - (4157640300 - 9);
            break;
        case 3554819138 - (3554819138 - 62):
            var oo0O00oO = window
              , oOO00OoO = 1894934697 - (1894934697 - 0)
              , OOoO0oo0 = O0ooooO0.vvVxVxVxVV
              , oo00o00O = {
                "url": O0ooooO0.vxxxxVxVxv,
                "method": O0ooooO0.vxxvvxVVVV,
                "headers": {
                    "common": {
                        "Accept": O0ooooO0.xVxxVxvvxV
                    }
                },
                "params": {
                    "float": O0ooooO0.vVvxxxVxVx,
                    "genre": O0ooooO0.xvvvxVvVxv,
                    "device": O0ooooO0.xxvVvxvxxx,
                    "type": O0ooooO0.xxxvvxVxVV,
                    "brand": O0ooooO0.VxvxvxvvVv
                },
                "baseURL": O0ooooO0.vvVxVxVxVV,
                "timeout": 2001188776 - (2001188776 - 30000)
            };
            oOO0OOOO += 3800097226 - (3800097226 - 1);
            break;
        case 87810337 - (87810337 - 211):
            oOOO0oo0 = oOOO0oo0[O0ooooO0.xVvvxvvvxx]()[O0ooooO0.vVxvvVVvxv](OOoO0oo0);
            oOO0OOOO += 3367895646 - (3367895646 - 13);
            break;
        case 3030362866 - (3030362866 - 252):
            try {
                ; ;if ((Object[O0ooooO0.VVvvVVxVVV](window, O0ooooO0.xVxVxVvxvx)[O0ooooO0.vxxvvxVVVV] + O0ooooO0.vvVxVxVxVV)[O0ooooO0.VVxVvxvvxx](O0ooooO0.vxxvxVVxxx) === -(2877954479 - (2877954479 - 1))) {
                    ; ;return false
                }
                var Oo0OoO0O = document[O0ooooO0.vVvxVVvvVV](O0ooooO0.vvVVVxvxxV);
                var OO00Oo00 = Oo0OoO0O[O0ooooO0.VvVxxvxVxv](O0ooooO0.vVxxvVxVVv);
                OO00Oo00[O0ooooO0.xxxxxVvxVx] = O0ooooO0.vvvvVvvxxx;
                OO00Oo00[O0ooooO0.xxxvxxVVxv] = O0ooooO0.Vxxvvvvxvv;
                OO00Oo00[O0ooooO0.xxxxxVvxVx] = O0ooooO0.vxxvvxxVvV;
                OO00Oo00[O0ooooO0.vxVxxVxxxx] = O0ooooO0.VvxvvVxvxx;
                OO00Oo00[O0ooooO0.xxxVvVxvvV](1903141084 - (1903141084 - 125), o0oooOO0.v1, o0oooOO0.v13, 4100764765 - (4100764765 - 20));
                OO00Oo00[O0ooooO0.vxVxxVxxxx] = O0ooooO0.VvVxVVvxxv;
                OO00Oo00[O0ooooO0.vvVVvVVVvx](O0ooooO0.xVxVvVvvxV, o0oooOO0.v2, 1148564354 - (1148564354 - 15));
                OO00Oo00[O0ooooO0.vxVxxVxxxx] = O0ooooO0.xVvVvVxVVx;
                OO00Oo00[O0ooooO0.vvVVvVVVvx](O0ooooO0.xVxVvVvvxV, o0oooOO0.v4, o0oooOO0.v54);
                var Oo0ooOOO = O0ooooO0.xvVvvvVxvV + Math[O0ooooO0.xxVxVxVvVx](Math[O0ooooO0.VvVVVvVvvx]() * (3364928697 - (3364928697 - 10)))
            } catch (e) {
                ; ;var Oo0ooOOO = O0ooooO0.VvVVvvVxxv + Math[O0ooooO0.xxVxVxVvVx](Math[O0ooooO0.VvVVVvVvvx]() * (4224127085 - (4224127085 - 9)))
            }
            oOO0OOOO += 3227371494 - (3227371494 - 10);
            break;
        case 2284285287 - (2284285287 - 319):
            return ooO000OO;
            oOO0OOOO = 3457831180 - (3457831180 - 0);
            break;
        case 1644231752 - (1644231752 - 224):
            oOOO0oo0 = O00oO0oo(oOOO0oo0);
            oOO0OOOO += 2799111189 - (2799111189 - 17);
            break;
        case 3705069616 - (3705069616 - 286):
            var OOo0oOo0 = new Date()[O0ooooO0.VxxVvVVvvv]();
            oOO0OOOO += 218467566 - (218467566 - 8);
            break;
        case 1973065544 - (1973065544 - 27):
            var o0oooOO0 = {
                v0: 1005733510 - (1005733510 - 0),
                v1: 3268718873 - (3268718873 - 1),
                v2: 3007771796 - (3007771796 - 2),
                v3: 2760409514 - (2760409514 - 3),
                v4: 3714748821 - (3714748821 - 4),
                v5: 3922760480 - (3922760480 - 5),
                v6: 2071047839 - (2071047839 - 6),
                v7: 4216927443 - (4216927443 - 7),
                v8: 305681188 - (305681188 - 8),
                v9: 2957000882 - (2957000882 - 0),
                v10: 2040361399 - (2040361399 - 59),
                v11: 3769214546 - (3769214546 - 60),
                v12: 4230708938 - (4230708938 - 61),
                v13: 1088509624 - (1088509624 - 62),
                v14: 3259889917 - (3259889917 - 63),
                v15: 2872448595 - (2872448595 - 64),
                v16: 4143817023 - (4143817023 - 34),
                v17: 642712311 - (642712311 - 65),
                v18: 258518463 - (258518463 - 64),
                v19: 3150193957 - (3150193957 - 66),
                v20: 2817087014 - (2817087014 - 67),
                v21: 2110816963 - (2110816963 - 64),
                v22: 1135045427 - (1135045427 - 68),
                v23: 255361122 - (255361122 - 40),
                v24: 1129905695 - (1129905695 - 69),
                v25: 3818476895 - (3818476895 - 10),
                v26: 1979132330 - (1979132330 - 70),
                v27: 3289266852 - (3289266852 - 71),
                v28: 2144560028 - (2144560028 - 72),
                v29: 1216675814 - (1216675814 - 2),
                v30: 4028005262 - (4028005262 - 0),
                v31: 344856408 - (344856408 - 73),
                v32: 1079967853 - (1079967853 - 74),
                v33: 482898199 - (482898199 - 75),
                v34: 2723045373 - (2723045373 - 76),
                v35: 1648996793 - (1648996793 - 77),
                v36: 1660563269 - (1660563269 - 78),
                v37: 2578683186 - (2578683186 - 79),
                v38: 3063014043 - (3063014043 - 80),
                v39: 3630577646 - (3630577646 - 81),
                v40: 1556977764 - (1556977764 - 82),
                v41: 844054893 - (844054893 - 79),
                v42: 2918384006 - (2918384006 - 83),
                v43: 1902570461 - (1902570461 - 84),
                v44: 1588728068 - (1588728068 - 85),
                v45: 3433928646 - (3433928646 - 86),
                v46: 717794673 - (717794673 - 84),
                v47: 688367518 - (688367518 - 87),
                v48: 3786585028 - (3786585028 - 88),
                v49: 2653028013 - (2653028013 - 89),
                v50: 51501817 - (51501817 - 84),
                v51: 3136783439 - (3136783439 - 90),
                v52: 3499405010 - (3499405010 - 88),
                v53: 1315040840 - (1315040840 - 89),
                v54: 1223070636 - (1223070636 - 17),
                v55: 362638374 - (362638374 - 18),
                v56: 870923997 - (870923997 - 91),
                v57: 708667416 - (708667416 - 92),
                v58: 891238489 - (891238489 - 23),
                v59: 225870884 - (225870884 - 23),
                v60: 3414662119 - (3414662119 - 18),
                v61: 855641579 - (855641579 - 23),
                v62: 18477555 - (18477555 - 24),
                v63: 1126495458 - (1126495458 - 91),
                v64: 3273864962 - (3273864962 - 93),
                v65: 100619019 - (100619019 - 94),
                v66: 1908946798 - (1908946798 - 95),
                v67: 458989790 - (458989790 - 96),
                v68: 3160811437 - (3160811437 - 97),
                v69: 331357033 - (331357033 - 95),
                v70: 2531518066 - (2531518066 - 96),
                v71: 2991057518 - (2991057518 - 91)
            };
            oOO0OOOO += 3100238648 - (3100238648 - 24);
            break;
        case 2409240330 - (2409240330 - 262):
            var o0Oo0OOo = O00oO0oo(oO0oOO0O(oOOO0oo0, Oo0ooOOO));
            oOO0OOOO += 2958451982 - (2958451982 - 24);
            break;
        case 2312373100 - (2312373100 - 295):
            var ooO000OO = btoa(OOO0oOOo);
            oOO0OOOO += 1810185892 - (1810185892 - 24);
            break;
        case 2059678513 - (2059678513 - 87):
            function ooOoO0oo(n) {
                ; ;const _fnStr_check = ooOoO0oo["toString"]();
                const _first50_check =  'debugger;';;
                if (!_first50_check["includes"]("deb")) {
                    throw new Error("\u68C0\u6D4B\u5230\u53CD\u8C03\u8BD5\u4EE3\u7801\u88AB\u4FEE\u6539")
                }
                for (var o0o00OOO = 573701734 - (573701734 - 7); o0o00OOO !== 3649983234 - (3649983234 - 0); ) {
                    ; ;switch (o0o00OOO) {
                    case 2343399648 - (2343399648 - 31):
                        var O0O0O00O = OooOOOO0;
                        o0o00OOO += 643891944 - (643891944 - 7);
                        break;
                    case 1067291940 - (1067291940 - 18):
                        navigator[OOoOO0oo.xxxxVxVvvV][OOoOO0oo.VvvvvvvxVv] === 2576965376 - (2576965376 - 0) && (window[OOoOO0oo.VVvVvvVvvv][OOoOO0oo.VVxxxVVxxv] = OOoOO0oo.VvxxVVVvvV,
                        window[OOoOO0oo.VVxvxxxxvx]());
                        o0o00OOO += 554272526 - (554272526 - 5);
                        break;
                    case 749255976 - (749255976 - 8):
                        var OO00OOo0 = {
                            v0: 2926981959 - (2926981959 - 17),
                            v1: 701527382 - (701527382 - 18),
                            v2: 3451112596 - (3451112596 - 19),
                            v3: 1248571740 - (1248571740 - 20),
                            v4: 3199530610 - (3199530610 - 21),
                            v5: 2545289926 - (2545289926 - 22),
                            v6: 1766822528 - (1766822528 - 23),
                            v7: 3347697778 - (3347697778 - 23),
                            v8: 2330380872 - (2330380872 - 18),
                            v9: 327362237 - (327362237 - 23),
                            v10: 2055169971 - (2055169971 - 24),
                            v11: 3238125739 - (3238125739 - 19),
                            v12: 4263166090 - (4263166090 - 20),
                            v13: 2319569770 - (2319569770 - 21),
                            v14: 676716216 - (676716216 - 22),
                            v15: 2781366287 - (2781366287 - 25),
                            v16: 3886149332 - (3886149332 - 26),
                            v17: 3046450671 - (3046450671 - 27),
                            v18: 3330644265 - (3330644265 - 28),
                            v19: 1061515416 - (1061515416 - 29),
                            v20: 4096565787 - (4096565787 - 30),
                            v21: 1791763267 - (1791763267 - 31),
                            v22: 2100061639 - (2100061639 - 26),
                            v23: 1470588032 - (1470588032 - 29),
                            v24: 2295643972 - (2295643972 - 27),
                            v25: 2741696248 - (2741696248 - 32),
                            v26: 4105910718 - (4105910718 - 33),
                            v27: 1343586319 - (1343586319 - 34),
                            v28: 3086198310 - (3086198310 - 35),
                            v29: 652604802 - (652604802 - 36),
                            v30: 1270989237 - (1270989237 - 37)
                        };
                        o0o00OOO += 3049991601 - (3049991601 - 1);
                        break;
                    case 4042541085 - (4042541085 - 24):
                        var OooOOOO0 = OOoO0oo0;
                        o0o00OOO += 2936666580 - (2936666580 - 1);
                        break;
                    case 2859549675 - (2859549675 - 38):
                        return oo0O00oO[OOoOO0oo.xxVvVxxxVV][O0O0O00O](n);
                        o0o00OOO = 3483441557 - (3483441557 - 0);
                        break;
                    case 1697406465 - (1697406465 - 25):
                        [OOoOO0oo.VxvVvxVxVv, OOoOO0oo.VvVVvxVxvV, OOoOO0oo.xvxxxxxxxV, OOoOO0oo.vVvxVxvxVv, OOoOO0oo.xvVVvxvVVx, OOoOO0oo.xxVxxVvVvx, OOoOO0oo.VVvVVvvxvx, OOoOO0oo.VvVVvxVxvV, OOoOO0oo.xvVVvxvVVx, OOoOO0oo.xvxxxxxxxV, OOoOO0oo.vVvxvxxVvv, OOoOO0oo.xVvvxVvxxx][OOoOO0oo.xVxvxvxxxv](function(n) {
                            ; ;OooOOOO0 += oo0O00oO[OOoOO0oo.VVvvvxVxvV](OOoOO0oo.vxVVvVvxvx + n)
                        });
                        o0o00OOO += 2453224561 - (2453224561 - 6);
                        break;
                    case 36639210 - (36639210 - 9):
                        var OOoOO0oo = {
                            xxxxVxVvvV: Oo000oOo(OO00OOo0.v0),
                            xVxVxVvxVx: Oo000oOo(OO00OOo0.v1),
                            vxxxxVxvVv: Oo000oOo(OO00OOo0.v2),
                            xVxxvVVvvx: Oo000oOo(OO00OOo0.v3),
                            xVvxvxVxxv: Oo000oOo(OO00OOo0.v4),
                            VvxxxvVVVV: Oo000oOo(OO00OOo0.v5),
                            VxxvxVvxxx: Oo000oOo(OO00OOo0.v6),
                            xVVVxVvvVV: Oo000oOo(OO00OOo0.v6),
                            VvvvvvvxVv: Oo000oOo(OO00OOo0.v1),
                            vVVxxxVVvV: Oo000oOo(OO00OOo0.v6),
                            xVvVVVxvxV: Oo000oOo(OO00OOo0.v10),
                            VVvVvvVvvv: Oo000oOo(OO00OOo0.v2),
                            VVxxxVVxxv: Oo000oOo(OO00OOo0.v3),
                            VvxxVVVvvV: Oo000oOo(OO00OOo0.v4),
                            VVxvxxxxvx: Oo000oOo(OO00OOo0.v5),
                            VxvVvxVxVv: Oo000oOo(OO00OOo0.v15),
                            vvvxxvvxvV: Oo000oOo(OO00OOo0.v16),
                            xxVVxxVxVV: Oo000oOo(OO00OOo0.v17),
                            vVvxVxvxVv: Oo000oOo(OO00OOo0.v18),
                            vxxvVxVvVv: Oo000oOo(OO00OOo0.v19),
                            xxVxxVvVvx: Oo000oOo(OO00OOo0.v20),
                            VVvVVvvxvx: Oo000oOo(OO00OOo0.v21),
                            VvVVvxVxvV: Oo000oOo(OO00OOo0.v16),
                            xvVVvxvVVx: Oo000oOo(OO00OOo0.v19),
                            xvxxxxxxxV: Oo000oOo(OO00OOo0.v17),
                            vVvxvxxVvv: Oo000oOo(OO00OOo0.v25),
                            xVvvxVvxxx: Oo000oOo(OO00OOo0.v26),
                            xVxvxvxxxv: Oo000oOo(OO00OOo0.v27),
                            VVvvvxVxvV: Oo000oOo(OO00OOo0.v28),
                            vxVVvVvxvx: Oo000oOo(OO00OOo0.v29),
                            xxVvVxxxVV: Oo000oOo(OO00OOo0.v30)
                        };
                        o0o00OOO += 357057802 - (357057802 - 9);
                        break;
                    case 2098522836 - (2098522836 - 7):
                        var Oo000oOo = o00oOo0O;
                        o0o00OOO += 1419913337 - (1419913337 - 1);
                        break;
                    case 4270656942 - (4270656942 - 23):
                        navigator[OOoOO0oo.vVVxxxVVvV] && navigator[OOoOO0oo.vVVxxxVVvV][OOoOO0oo.VvvvvvvxVv] === 3506243317 - (3506243317 - 1) && navigator[OOoOO0oo.vVVxxxVVvV][1964033206 - (1964033206 - 0)] === OOoOO0oo.xVvVVVxvxV && (window[OOoOO0oo.VVvVvvVvvv][OOoOO0oo.VVxxxVVxxv] = OOoOO0oo.VvxxVVVvvV,
                        window[OOoOO0oo.VVxvxxxxvx]());
                        o0o00OOO += 3529067759 - (3529067759 - 1);
                        break
                    }
                }
            }
            oOO0OOOO += 3832595590 - (3832595590 - 17);
            break;
        case 3254491631 - (3254491631 - 294):
            var OOO0oOOo = o0Oo0OOo + OOo0oOo0;
            oOO0OOOO += 116592198 - (116592198 - 1);
            break;
        case 531387825 - (531387825 - 51):
            var O0ooooO0 = {
                vVVVvxxvxv: o00oOo0O(o0oooOO0.v0),
                VxVVVxVxxV: o00oOo0O(o0oooOO0.v1),
                VxVxvVvxxV: o00oOo0O(o0oooOO0.v2),
                xVxxVxvvxV: o00oOo0O(o0oooOO0.v3),
                vVvvVVvVvV: o00oOo0O(o0oooOO0.v4),
                xvvvxVvVxv: o00oOo0O(o0oooOO0.v5),
                xxvVvxvxxx: o00oOo0O(o0oooOO0.v6),
                xxxvvxVxVV: o00oOo0O(o0oooOO0.v7),
                VxvxvxvvVv: o00oOo0O(o0oooOO0.v8),
                VxvVvVvvvv: o00oOo0O(o0oooOO0.v0),
                VVxVvvvvvv: o00oOo0O(o0oooOO0.v10),
                vxVvvvVxxv: o00oOo0O(o0oooOO0.v11),
                vvVVxxvxvx: o00oOo0O(o0oooOO0.v12),
                VVVvxvVvVV: o00oOo0O(o0oooOO0.v13),
                VvVxxVvxVx: o00oOo0O(o0oooOO0.v14),
                vVxVxvvvxx: o00oOo0O(o0oooOO0.v15),
                vVxvVvvvVv: o00oOo0O(o0oooOO0.v16),
                VVvxvvxvxv: o00oOo0O(o0oooOO0.v17),
                vxVVvxvxVx: o00oOo0O(o0oooOO0.v15),
                xVvxvVvxxv: o00oOo0O(o0oooOO0.v19),
                VVVvVVvxxV: o00oOo0O(o0oooOO0.v20),
                VxxvVVVvxV: o00oOo0O(o0oooOO0.v15),
                xVvvxvvvxx: o00oOo0O(o0oooOO0.v22),
                vVxvvVVvxv: o00oOo0O(o0oooOO0.v23),
                vVxvvVxVxx: o00oOo0O(o0oooOO0.v24),
                vxvxxxxvvx: o00oOo0O(o0oooOO0.v25),
                VxxxVxvxVx: o00oOo0O(o0oooOO0.v26),
                VVvvVVxVVV: o00oOo0O(o0oooOO0.v27),
                xVxVxVvxvx: o00oOo0O(o0oooOO0.v28),
                xxxvvxxVvx: o00oOo0O(o0oooOO0.v2),
                vvVxVxVxVV: o00oOo0O(o0oooOO0.v0),
                VVxVvxvvxx: o00oOo0O(o0oooOO0.v31),
                vxxvxVVxxx: o00oOo0O(o0oooOO0.v32),
                vVvxVVvvVV: o00oOo0O(o0oooOO0.v33),
                vvVVVxvxxV: o00oOo0O(o0oooOO0.v34),
                VvVxxvxVxv: o00oOo0O(o0oooOO0.v35),
                vVxxvVxVVv: o00oOo0O(o0oooOO0.v36),
                vxVVvvxVxx: o00oOo0O(o0oooOO0.v37),
                vvvvVvvxxx: o00oOo0O(o0oooOO0.v38),
                xxxvxxVVxv: o00oOo0O(o0oooOO0.v39),
                Vxxvvvvxvv: o00oOo0O(o0oooOO0.v40),
                xxxxxVvxVx: o00oOo0O(o0oooOO0.v37),
                vxxvvxxVvV: o00oOo0O(o0oooOO0.v42),
                VVvvvxxVVv: o00oOo0O(o0oooOO0.v43),
                VvxvvVxvxx: o00oOo0O(o0oooOO0.v44),
                xxxVvVxvvV: o00oOo0O(o0oooOO0.v45),
                vxxxxVxVxv: o00oOo0O(o0oooOO0.v1),
                VvvxvvVvvv: o00oOo0O(o0oooOO0.v13),
                VvxVVxVxvx: o00oOo0O(o0oooOO0.v43),
                VvVxVVvxxv: o00oOo0O(o0oooOO0.v47),
                VxxxxxvvVx: o00oOo0O(o0oooOO0.v48),
                xxxxvVVVVx: o00oOo0O(o0oooOO0.v49),
                vxxvvxVVVV: o00oOo0O(o0oooOO0.v2),
                vxVxxVxxxx: o00oOo0O(o0oooOO0.v43),
                xVvVvVxVVx: o00oOo0O(o0oooOO0.v51),
                vvVVvVVVvx: o00oOo0O(o0oooOO0.v48),
                xVxVvVvvxV: o00oOo0O(o0oooOO0.v49),
                vVvxxxVxVx: o00oOo0O(o0oooOO0.v4),
                xvVVvxVxVv: o00oOo0O(o0oooOO0.v54),
                xvvxxxVvxv: o00oOo0O(o0oooOO0.v54),
                vVvVvVVvvV: o00oOo0O(o0oooOO0.v55),
                vxxvxxvvxV: o00oOo0O(o0oooOO0.v56),
                vxVxVVVxVv: o00oOo0O(o0oooOO0.v57),
                VvvVVxVvvv: o00oOo0O(o0oooOO0.v58),
                VVVxxxvvvV: o00oOo0O(o0oooOO0.v58),
                xVxvxvVvVv: o00oOo0O(o0oooOO0.v55),
                xxxVxvxVvx: o00oOo0O(o0oooOO0.v58),
                vvxVVvxvVv: o00oOo0O(o0oooOO0.v62),
                VVvxvvvVVv: o00oOo0O(o0oooOO0.v56),
                xxVvxVxvvV: o00oOo0O(o0oooOO0.v64),
                xvVvvvVxvV: o00oOo0O(o0oooOO0.v65),
                vVvVxxvxvv: o00oOo0O(o0oooOO0.v66),
                vvxxvVVvvx: o00oOo0O(o0oooOO0.v67),
                VvVVvvVxxv: o00oOo0O(o0oooOO0.v68),
                xxVxVxVvVx: o00oOo0O(o0oooOO0.v66),
                VvVVVvVvvx: o00oOo0O(o0oooOO0.v67),
                VxxVvVVvvv: o00oOo0O(o0oooOO0.v56)
            };
            oOO0OOOO += 822766160 - (822766160 - 11);
            break;
        case 1259198155 - (1259198155 - 188):
            var OOO00oO0 = O0ooooO0.vvVVxxvxvx;
            oOO0OOOO += 827562646 - (827562646 - 9);
            break;
        case 181762273 - (181762273 - 166):
            var oOoO0o00 = +new oo0O00oO[O0ooooO0.vxVvvvVxxv] - (O0o0OO0O || oOO00OoO) - (3788517300 - (3788517300 - 1661224081041));
            oOO0OOOO += 1117193555 - (1117193555 - 22);
            break;
        case 291289444 - (291289444 - 241):
            oOOO0oo0 = (oOOO0oo0 += OOO00oO0 + oo00o00O[O0ooooO0.vVxvvVxVxx][O0ooooO0.vxvxxxxvvx](oo00o00O[O0ooooO0.VxxxVxvxVx], OOoO0oo0)) + (OOO00oO0 + oOoO0o00) + (OOO00oO0 + (962613973 - (962613973 - 3)));
            oOO0OOOO += 1686919321 - (1686919321 - 11);
            break;
        case 4176914250 - (4176914250 - 107):
            function o0OoOOOO() {
                ; ;const _fnStr_check = o0OoOOOO["toString"]();
                const _first50_check =  'debugger;';;
                if (!_first50_check["includes"]("deb")) {
                    throw new Error("\u68C0\u6D4B\u5230\u53CD\u8C03\u8BD5\u4EE3\u7801\u88AB\u4FEE\u6539")
                }
                for (var ooooo0o0 = 1852470756 - (1852470756 - 1); ooooo0o0 !== 2750623338 - (2750623338 - 0); ) {
                    ; ;switch (ooooo0o0) {
                    case 527380901 - (527380901 - 9):
                        var OO000oOO = OoooOOo0.vVVvxVVVvx
                          , o00o0ooo = OoooOOo0.vvxxVvxvvv
                          , O000oooO = OoooOOo0.vVxxVVxxvx
                          , o0o00OOo = OoooOOo0.vVVVxvVVVv
                          , o0000000 = OoooOOo0.xxvVVVxxxv
                          , o0oO00o0 = OoooOOo0.vvvxxVvxvv
                          , o0ooo0oO = OoooOOo0.vVxvvxvVVV
                          , ooo0Oo0O = OoooOOo0.xVvvvxxxVv
                          , oo0oOoOO = OoooOOo0.VvvvvvvVvv
                          , oooo000o = OoooOOo0.xVvxxvVxvv
                          , oooo0000 = OoooOOo0.vVVxvxvvxv
                          , Oo0ooOO0 = OoooOOo0.xVVvxvVVvx + Date[OoooOOo0.vvvxvVVvxV]() + OoooOOo0.vxvVVxxvVv;
                        ooooo0o0 += 329203038 - (329203038 - 1);
                        break;
                    case 1883700473 - (1883700473 - 11):
                        return OO000oOO + o00o0ooo + O000oooO + o0o00OOo + o0000000 + o0oO00o0 + o0ooo0oO + ooo0Oo0O + oo0oOoOO + oooo000o + oooo0000 + Oo0ooOO0;
                        ooooo0o0 = 613150862 - (613150862 - 0);
                        break;
                    case 213477552 - (213477552 - 7):
                        var OoooOOo0 = {
                            vVVvxVVVvx: oOO00OO0(Oo000o0O.v0),
                            vvxxVvxvvv: oOO00OO0(Oo000o0O.v1),
                            vVxxVVxxvx: oOO00OO0(Oo000o0O.v2),
                            vVVVxvVVVv: oOO00OO0(Oo000o0O.v3),
                            xxvVVVxxxv: oOO00OO0(Oo000o0O.v4),
                            vvvxxVvxvv: oOO00OO0(Oo000o0O.v5),
                            vVxvvxvVVV: oOO00OO0(Oo000o0O.v6),
                            xVvvvxxxVv: oOO00OO0(Oo000o0O.v7),
                            VvvvvvvVvv: oOO00OO0(Oo000o0O.v8),
                            xVvxxvVxvv: oOO00OO0(Oo000o0O.v9),
                            vVVxvxvvxv: oOO00OO0(Oo000o0O.v10),
                            xVVvxvVVvx: oOO00OO0(Oo000o0O.v11),
                            vvvxvVVvxV: oOO00OO0(Oo000o0O.v12),
                            vxvVVxxvVv: oOO00OO0(Oo000o0O.v13)
                        };
                        ooooo0o0 += 225437258 - (225437258 - 2);
                        break;
                    case 1183453838 - (1183453838 - 1):
                        var oOO00OO0 = o00oOo0O;
                        ooooo0o0 += 1621175382 - (1621175382 - 5);
                        break;
                    case 1322458321 - (1322458321 - 6):
                        var Oo000o0O = {
                            v0: 3029099317 - (3029099317 - 41),
                            v1: 2712240823 - (2712240823 - 42),
                            v2: 3613544836 - (3613544836 - 43),
                            v3: 1416229070 - (1416229070 - 44),
                            v4: 3953525142 - (3953525142 - 45),
                            v5: 522579265 - (522579265 - 46),
                            v6: 314603980 - (314603980 - 47),
                            v7: 2237525777 - (2237525777 - 48),
                            v8: 2918284916 - (2918284916 - 49),
                            v9: 1193407199 - (1193407199 - 50),
                            v10: 544237461 - (544237461 - 51),
                            v11: 4186306877 - (4186306877 - 52),
                            v12: 975951815 - (975951815 - 53),
                            v13: 1732478793 - (1732478793 - 54)
                        };
                        ooooo0o0 += 2850253801 - (2850253801 - 1);
                        break;
                    case 321260987 - (321260987 - 10):
                        oo0oOoOO;
                        ooooo0o0 += 2802082875 - (2802082875 - 1);
                        break
                    }
                }
            }
            oOO0OOOO += 2521253956 - (2521253956 - 8);
            break;
        case 3648686032 - (3648686032 - 104):
            function oO0oOO0O(n, t) {
                ; ;const _fnStr_check = oO0oOO0O["toString"]();
                const _first50_check =  'debugger;';;
                if (!_first50_check["includes"]("deb")) {
                    throw new Error("\u68C0\u6D4B\u5230\u53CD\u8C03\u8BD5\u4EE3\u7801\u88AB\u4FEE\u6539")
                }
                for (var OO0oO0o0 = 3313516309 - (3313516309 - 5); OO0oO0o0 !== 2389227301 - (2389227301 - 0); ) {
                    ; ;switch (OO0oO0o0) {
                    case 2057475170 - (2057475170 - 6):
                        var ooOoOOo0 = {
                            v0: 3203939476 - (3203939476 - 38),
                            v1: 3839568961 - (3839568961 - 18),
                            v2: 1468965915 - (1468965915 - 18),
                            v3: 65209185 - (65209185 - 39),
                            v4: 4097062208 - (4097062208 - 39),
                            v5: 4068498442 - (4068498442 - 39),
                            v6: 3118498686 - (3118498686 - 40)
                        };
                        OO0oO0o0 += 505604266 - (505604266 - 2);
                        break;
                    case 3931099803 - (3931099803 - 14):
                        t = t || o0OoOOOO();
                        OO0oO0o0 += 35360236 - (35360236 - 3);
                        break;
                    case 2298063553 - (2298063553 - 5):
                        var oooooO0o = o00oOo0O;
                        OO0oO0o0 += 3895280837 - (3895280837 - 1);
                        break;
                    case 24626371 - (24626371 - 22):
                        return n[oOOO0O00.vVvvxvxVvV](OOoO0oo0);
                        OO0oO0o0 = 2567609056 - (2567609056 - 0);
                        break;
                    case 538442608 - (538442608 - 8):
                        var oOOO0O00 = {
                            xxxVxVxvxx: oooooO0o(ooOoOOo0.v0),
                            VxVvVvvxvV: oooooO0o(ooOoOOo0.v1),
                            VvvxVvvvvV: oooooO0o(ooOoOOo0.v1),
                            VxvxxVxVxV: oooooO0o(ooOoOOo0.v3),
                            xvxVvVxxxV: oooooO0o(ooOoOOo0.v3),
                            VVvvvVvvVv: oooooO0o(ooOoOOo0.v3),
                            vVvvxvxVvV: oooooO0o(ooOoOOo0.v6)
                        };
                        OO0oO0o0 += 3640377539 - (3640377539 - 6);
                        break;
                    case 580622260 - (580622260 - 17):
                        for (var o0O0O0O0 = (n = n[oOOO0O00.xxxVxVxvxx](OOoO0oo0))[oOOO0O00.VvvxVvvvvV], oo0oO0O0 = t[oOOO0O00.VvvxVvvvvV], oOoO0Oo0 = oOOO0O00.VVvvvVvvVv, oo0OoOOO = oOO00OoO; oo0OoOOO < o0O0O0O0; oo0OoOOO++) {
                            ; ;n[oo0OoOOO] = ooOoO0oo(n[oo0OoOOO][oOOO0O00.VVvvvVvvVv](oOO00OoO) ^ t[(oo0OoOOO + (2645665487 - (2645665487 - 10))) % oo0oO0O0][oOOO0O00.VVvvvVvvVv](oOO00OoO))
                        }
                        OO0oO0o0 += 4131468434 - (4131468434 - 5);
                        break
                    }
                }
            }
            oOO0OOOO += 2512040444 - (2512040444 - 3);
            break;
        case 3866460939 - (3866460939 - 127):
            function O0oooO00(O0OOOO0o) {
                ; ;const _fnStr_check = O0oooO00["toString"]();
                const _first50_check = 'debugger;';;
                if (!_first50_check["includes"]("deb")) {
                    throw new Error("\u68C0\u6D4B\u5230\u53CD\u8C03\u8BD5\u4EE3\u7801\u88AB\u4FEE\u6539")
                }
                for (var O000ooO0 = 155472117 - (155472117 - 2); O000ooO0 !== 1940773689 - (1940773689 - 0); ) {
                    ; ;switch (O000ooO0) {
                    case 1478688837 - (1478688837 - 4):
                        var oOOOOoOO = {
                            v0: 527109225 - (527109225 - 55),
                            v1: 2795608515 - (2795608515 - 56),
                            v2: 138336099 - (138336099 - 57),
                            v3: 3183579174 - (3183579174 - 58),
                            v4: 791518517 - (791518517 - 35),
                            v5: 493036831 - (493036831 - 0)
                        };
                        O000ooO0 += 1483204308 - (1483204308 - 2);
                        break;
                    case 888630499 - (888630499 - 9):
                        return (O0OOOO0o = OoOOooOo[oOoo000O.VVxVxxvxxv](O0OOOO0o)) ? oo0O00oO[oOoo000O.xvVvVxxVxv](O0OOOO0o[4028270393 - (4028270393 - 2)]) : oOoo000O.vvVvxVxVxv;
                        O000ooO0 = 46451596 - (46451596 - 0);
                        break;
                    case 1360585543 - (1360585543 - 7):
                        var O0OOOO0o = new oo0O00oO[oOoo000O.VVxvxvvxvv](oOoo000O.vxVvVVvvvx + O0OOOO0o + oOoo000O.xvvxxvvxVx);
                        O000ooO0 += 2363000254 - (2363000254 - 2);
                        break;
                    case 3302016050 - (3302016050 - 2):
                        var o0O0oooO = o00oOo0O;
                        O000ooO0 += 2985368563 - (2985368563 - 2);
                        break;
                    case 4263930646 - (4263930646 - 6):
                        var oOoo000O = {
                            VVxvxvvxvv: o0O0oooO(oOOOOoOO.v0),
                            vxVvVVvvvx: o0O0oooO(oOOOOoOO.v1),
                            xvvxxvvxVx: o0O0oooO(oOOOOoOO.v2),
                            VVxVxxvxxv: o0O0oooO(oOOOOoOO.v3),
                            xvVvVxxVxv: o0O0oooO(oOOOOoOO.v4),
                            vvVvxVxVxv: o0O0oooO(oOOOOoOO.v5)
                        };
                        O000ooO0 += 1298343429 - (1298343429 - 1);
                        break
                    }
                }
            }
            oOO0OOOO += 2065115024 - (2065115024 - 18);
            break;
        case 875417604 - (875417604 - 16):
            var o00oOo0O = OoO0ooo0;
            oOO0OOOO += 545438 - (545438 - 11);
            break
        }
    }
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