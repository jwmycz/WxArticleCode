// function V() {
//     var n, t, e;
//     n = t = e = r;
//     var a, o, i;
//     a = o = i = u;
//     for (var c = navigator[o[206]], s = o[2]; s < An[o[111]]; s++)
//         if (An[s].test(c))
//             return s + e[54];
//     return i[2]
// }
let An = [/^Win32/, /^Win64/, /^Linux armv|Android/, /^Android/, /^iPhone/, /^iPad/, /^MacIntel/, /^Linux [ix]\d+/, /^ARM/, /^iPod/, /^BlackBerry/]

function V() {

    for (var c = navigator["platform"], s = 0; s < An['length']; s++)
        if (An[s].test(c))
            return s + 1;
    return 0
}

navigator = {}
navigator["platform"] = 'Win32'
console.log(V())