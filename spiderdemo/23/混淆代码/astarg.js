///////////////////////////////////////////////////////////////////
//导库
//导入fs
const fs = require("fs");
//导入babel/parser
const parser = require('@babel/parser')
//导入babel/traverse
const traverse = require('@babel/traverse').default;
//导入babel/types  节点类型
const types = require('@babel/types');
//将AST转换成JavaScript源代码：
const generator = require("@babel/generator").default;
///////////////////////////////////////////////////////////////////
//ob还原代码
function f() {
  const t = ['nCoDdCkRWOu', 'jCkfWQldL3u', 'CmoKsmkJtaFcHdJcOq', 'kSkkodxdOW', 'WQtcKMtcIte', 'h8oKmSo7hXpcRCkqBmkCWPRcJG', 'qCkicW', 'WRu2WQxdR8oW', 'WQ4cmeycm8kmWPHAdSkB', 'WOOSW7i', 'tCktD8opW5RdSZXuyLeg', 'iCk/eSkgEW', 'W5tcPdxdVcu', 'WR4sx8kh', 'tSkjd8opW5q', 'WPKWWPFdV8oH', 'WQPqpGy6', 'pZJdU33cJa', 'jSkAWPjLkW', 'dmk+WR3dGq', 'g8ocjCkoWO8', 'WOrgASohW4K', 'itpdRWTeW5yTW4tcHa', 'cu9zra', 'E0ZcQrVdPmoXysjnW6aMaNOb', 'WRvpfa', 'W47dL8oG', 'bKNcMvZdUW', 'WOy2W5Wnpa', 'bCkfWO/dPcm', 'WRBcSIWyW5O', '5BAX6kgd5lY55OQG44gf', 'E3xcVJS', '54285Agu772c6Aci6z+i', 'iCkDW4boW7SloM/cK8ksCG', 'WRuqWQBdNSok', 'iCkFW45lW7LsqxlcO8k6zezW', 'W5pdSmoxWQ8n', 'W7T2W5NdOSo3', 'WQjeaJSv', 'WRWebCk4W7m', 'WPFdOwFcVxVcL8oNCcBdGCo4WR8', 'W4lcHX7dVJi', 'tSktCSocW5RcI3mlx3SYmw7cMa', 'dJxdLKJcUq', 'WPhdVmkpW61m', 'fIFdVJ5AD8kaog54WQ4h', 'W7vRW4hcQ8k1WRXnW44BW6lcPW8J', 'gCoImCkxyxxcTSkRAW', 'nCkOfmk/qq', 'WQPAhdiE', '5Qov5REM5yUj6lg46kYB', 'CfBdU8o8WPq', 'W6/dTCoBga', 'kxFdJa', 'xmkxemooW4u', 'W5f2WQvxESoDd8oofHZcHG', 'n8oncCkxWPW', 'D2pdRmokWPu', 'sMdcQmot', 'qSohW5FdIGjoW5XqiG', 'WQbvhJS', 'W6SDuIXm', 'WRNcQcXBW50', 'W6FdPsu7W43dLCkWW5G', 'eCoima', 'W5pcQ8oeW4HevSkEgW', 'W50MW5fiDG', 'WPCTW4yxoG', 'W5nrsrLf', 'o0TGqmkF', 'W77cUdFdRcK', 'dJ/dThZcNq', 'cSkemCk5', 'jZFdOMGYW6K0W5tcPKeZ', 'iNBdJ8o9', 'W6mCuSoHWQ5jF8kzm8oyW67dLG', 'WO3cIwBcItC', 'W7noCaWx', 'FvRdTxNcMa', 'FxJdVmod', 'W4RdO8olWRlcVq', 'W5lcVGxdVdG', 'v8kvtclcNW', 'gSk2WOpdLJ4', 'aZtdUgZcIa', 'Fb/dTZBcMMxdKHX1fem', 'WOqNW6C'];
  f = function () {
    return t;
  };
  return f();
}
function qqq(h, R) {
  const S = f();
  return q = function (C, o) {
    C = C - 310;
    let Z = S[C];
    if (q['SIkMXf'] === undefined) {
      var Y = function (v) {
        const N = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let i = '',
          m = '';
        for (let n = 0, w, y, j = 0; y = v['charAt'](j++); ~y && (w = n % 4 ? w * 64 + y : y, n++ % 4) ? i += String['fromCharCode'](255 & w >> (-2 * n & 6)) : 0) {
          y = N['indexOf'](y);
        }
        for (let B = 0, A = i['length']; B < A; B++) {
          m += '%' + ('00' + i['charCodeAt'](B)['toString'](16))['slice'](-2);
        }
        return decodeURIComponent(m);
      };
      const M = function (v, N) {
        let m = [],
          n = 0,
          w,
          B = '';
        v = Y(v);
        let A;
        for (A = 0; A < 256; A++) {
          m[A] = A;
        }
        for (A = 0; A < 256; A++) {
          n = (n + m[A] + N['charCodeAt'](A % N['length'])) % 256, w = m[A], m[A] = m[n], m[n] = w;
        }
        A = 0, n = 0;
        for (let d = 0; d < v['length']; d++) {
          A = (A + 1) % 256, n = (n + m[A]) % 256, w = m[A], m[A] = m[n], m[n] = w, B += String['fromCharCode'](v['charCodeAt'](d) ^ m[(m[A] + m[n]) % 256]);
        }
        return B;
      };
      q['jMdnff'] = M, h = arguments, q['SIkMXf'] = true;
    }
    const T = S[0],
      L = C + T,
      Q = h[L];
    return !Q ? (q['ReKBrx'] === undefined && (q['ReKBrx'] = true), Z = q['jMdnff'](Z, o), h[L] = Z) : Z = Q, Z;
  }, q(h, R);
}
(function (h, R) {
  const r = qqq,
    S = h();
  while (true) {
    try {
      const C = parseInt(r(340, 'Jsc5')) / 1 + parseInt(r(330, 'l[j2')) / 2 * (-parseInt(r(360, 'IW)^')) / 3) + parseInt(r(374, '6JEp')) / 4 * (-parseInt(r(338, '6JEp')) / 5) + parseInt(r(320, '^0jy')) / 6 * (parseInt(r(324, 'uG!@')) / 7) + -parseInt(r(388, 'D[l]')) / 8 + -parseInt(r(393, 'y4T9')) / 9 + parseInt(r(376, '@hy(')) / 10;
      if (C === R) break;else S['push'](S['shift']());
    } catch (o) {
      S['push'](S['shift']());
    }
  }
})(f, 565676);
///////////////////////////////////////////////////////////////////
//AST解密代码
//导入需要解析树的文件

let jscode = fs.readFileSync('html混淆.js', 'utf8');
//解析成树
let ast = parser.parse(jscode);

//替换十六进制为数字,编码修改
traverse(ast, {
    NumericLiteral({node}) {
        if (node.extra && /^0[obx]/i.test(node.extra.raw)) {
            node.extra = undefined;
        }
    },
    StringLiteral({node}) {
        if (node.extra && /\\[ux]/gi.test(node.extra.raw)) {
            node.extra = undefined;
        }
    },
});
traverse(ast, {
    NumericLiteral: function (path) {
        if (path.node.extra && path.node.value) { // 检查 extra 和 value 是否存在
            const numstr = path.node.extra;
            const numstring = path.node.value;
            console.log(numstr, numstring); // 打印初始值
            path.replaceWith(types.numericLiteral(numstring)); // 使用 path 替换节点
            console.log("替换完成");
        } else {
            // console.log("节点缺少 extra 或 value 属性",path.node.extra && path.node.value);
        }
    },

}, opts = {});
//字符串
traverse(ast, {
    CallExpression(path){

        if(path.node.callee.name==='q'){
            console.log(path+'');
            if(path+''!=='q(h, R)'){
                leftarg=path.node.arguments[0].value;
            console.log(leftarg)
            rightarg=path.node.arguments[1].value;
            data=qqq(leftarg, rightarg)
            console.log(data);
            path.replaceWith(types.stringLiteral(data));
            }



        }
    }

})
//计算数字
// 检查路径或其任一子路径是否包含逗号表达式

function containsSequenceExpression(path) {
    let containsSequence = false;
    // 深度优先遍历当前路径及其所有子路径
    path.traverse({
        SequenceExpression(_path) {
            containsSequence = true;
            _path.stop(); // 找到逗号表达式后立即停止遍历
        }
    });
    return containsSequence;
}

traverse(ast, {
    "BinaryExpression|UnaryExpression|MemberExpression|CallExpression"(path) {
        if (containsSequenceExpression(path)) {
            return;
        }
        if (path.isUnaryExpression({operator: "-"}) ||
            path.isUnaryExpression({operator: "void"})) {
            return;
        }
        const {confident, value} = path.evaluate();

        if (!confident || typeof value == "function")
            return;

        if (typeof value == 'number' && (!Number.isFinite(value))) {
            return;
        }

        // console.log(path.toString(), "--->", value);

        path.replaceWith(types.valueToNode(value));
    },
}, opts = {});
//
traverse(ast, {
    VariableDeclarator(path) {
        if (types.isObjectExpression(path.node.init)) {
            //console.log(path + '');
            let props = path.node.init.properties;
            let obj = {};
            for (let i = 0; i < props.length; i++) {
                obj[props[i].key.name] = props[i].value;
            }
            //console.log(obj);
            let bingname = path.scope.getBinding(path.node.id.name);
            let arrbd = bingname.referencePaths;
            for (let i = 0; i < arrbd.length; i++) {
                let mempath = arrbd[i].parentPath;
                if (mempath.isMemberExpression()) {
                    //console.log(mempath+'',mempath.node.property.name);
                    let propname = mempath.node.property.name
                    if (types.isNumericLiteral(obj[propname])) {
                        //console.log(mempath+'',mempath.node.property.name);
                        // console.log(propname,obj[propname])
                        mempath.replaceWith(obj[propname])
                    }
                }
            }

        }
    }
}, opts = {});



const calcPartBinaryExpression =
{
    "BinaryExpression"(path) {

        let { parent, scope, parentPath, node } = path;

        let { left, operator, right } = node;

        if (types.isLiteral(left) && types.isLiteral(right)) {
            const { confident, value } = path.evaluate();
            if (!confident || value == "Infinity") return;
            path.replaceWith(types.valueToNode(value));
            return;
        }

        if (parentPath.isBinaryExpression({ left: node })) {
            if (!types.isLiteral(left) && operator == "+" &&
                types.isLiteral(right)) {
                if (parent.operator == "+" && types.isLiteral(parent.right)) {

                    path.node.right.value += parent.right.value;

                    parentPath.replaceWith(path.node);
                }
            }
        }
    },
}

traverse(ast, calcPartBinaryExpression);


traverse(ast, {
  VariableDeclarator(path) {
    // 检查是否是对象初始化
    if (types.isObjectExpression(path.node.init)) {
      let props = path.node.init.properties;
      let obj = {};

      // 收集对象属性键值
      for (let i = 0; i < props.length; i++) {
        let keyName = props[i].key.name || props[i].key.value;
        obj[keyName] = props[i].value;
      }

      // 获取变量引用
      let binding = path.scope.getBinding(path.node.id.name);
      if (!binding) return;

      let refPaths = binding.referencePaths;

      for (let i = 0; i < refPaths.length; i++) {
        let mempath = refPaths[i].parentPath;
        if (mempath.isMemberExpression()) {
          let propname =
            mempath.node.property.name || mempath.node.property.value;

          // 如果对象属性存在
          if (obj[propname]) {
            // 深拷贝后替换
            mempath.replaceWith(types.cloneDeep(obj[propname]));
          }
        }
      }
    }
  },
});







///////////////////////////////////////////////////////////////////
//traverse(ast, {}, opts = {});
//保存还原代码
let { code } = generator(ast, {
    jsescOption: { minimal: true } , // 这样就不会把中文转义成 \uXXXX
    // compact:true
});  //{}解包的意思   等价于let code=generator(ast).code
fs.writeFile('还原.js', code, (err) => {
});






