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
var encode_arr = ["MTRweCBBcmlhbA==", "YWxwaGFiZXRpYw==", "ZmlsbFN0eWxl", "I2Y2MA==", "ZmlsbFJlY3Q=", "IzA2OQ==", "ZmlsbFRleHQ=", "QnJvd3NlciBmaW5nZXJwcmludA==", "cmdiYSgxMDIsIDIwNCwgMCwgMC43KQ==", "Z2V0VGltZQ==", "X0FVVE9NQVRJT05fREVURUNURURf", "X0xBTkdVQUdFX0RFVEVDVEVEXw==", "eHl6NTE3Y2RhOTZlZmdo", "Zmxvb3I=", "cmFuZG9t", "eHl6NTE3Y2RhOTZlZmho", "", "L2F1dGhlbnRpY2F0aW9uL2FwaS9vYjFfY2hhbGxlbmdlL3BhZ2U=", "Z2V0", "YXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8q", "ZG93bg==", "NTAwMA==", "aXBob25l", "b25l", "cGFpZA==", "ZW5jb2RlVVJJQ29tcG9uZW50", "cmVwbGFjZQ==", "MHg=", "YnRvYQ==", "QnVmZmVy", "ZnJvbQ==", "dG9TdHJpbmc=", "YmFzZTY0", "cGx1Z2lucw==", "bGVuZ3Ro", "bG9jYXRpb24=", "aHJlZg==", "YWJvdXQ6Ymxhbms=", "Y2xvc2U=", "bGFuZ3VhZ2Vz", "ZW4tVVM=", "NjY=", "NzI=", "NmY=", "NmQ=", "NDM=", "Njg=", "NjE=", "NjQ=", "NjU=", "Zm9yRWFjaA==", "dW5lc2NhcGU=", "JXUwMA==", "U3RyaW5n", "c3BsaXQ=", "Y2hhckNvZGVBdA==", "am9pbg==", "b2IxX2NoZWNrPUExc2RSVUlRQ2h0eGVuOHBJMGRBTmk4emNYNXpIQmwrWW5FaEx5WklQeHc4V2tWUlZSbGlZR0JGVlZkZVNGa3VYQmM=", "YUFFRUFCQWhWVkZOUVFWQmFjVjVBVlZwRUIzeFVWMGNlQ3laUGFnY1NRRXB2QVdkVlNrY3NTejFMQkI0UUhCdFRYRjBHRFVWU1drbFdCUnNDSEFrY0JCb1k7IA==", "IFVTRVJJTkZPPUdqVlkwSXRPN0dDY01RcUpRZGlKY0hucXdtclQlMkZNeU5sM0lPJTJGJTJGTzExS1JSdGl0bk1kWTJFV21lUld6RkhIb0tOU0pm", "M2s2VXJkMEt4M3VrQ2JsZWdmNE1OWEJXbWxoRDBnOElBVEtNS00lMkZwa1hoJTJCQWM4JTJGdDFTQWppVjJmb2pTYiUyRkNBenZYR2lkNHZSTHBNZg==", "YnclMkZnQSUzRCUzRDsgQVVUSEtFWT1ZJTJCZ1JZZFJSc3lORGhBMGRydSUyQlF6RVphbllVT1lLb05KR2FQajdWaTN5bVdPZ1hkdDJCQSUyQkolMg==", "RkdlNzhaMm9QZlpqYWpHak03MjV5VUpkTU1zdHJqeXpWVWhZZldPaWNmRmdiSFFIRSUyQkJwZ0Nzb1A0Z0l4VTh3JTNEJTNEOw==", "IGFkYTM1NTc3MTgyNjUwZjFfZ3JfbGFzdF9zZW50X2NzMT1vYjEyMjQxNDA4NTk2NDsgYXNvX3VjZW50ZXI9NWJhYnlrV0g2QW5LcmJ6YzlkMHVnR1NPaG1PUQ==", "ME41bSUyRmtTQlhyYTlxbW10RzZBdVR2R2R6Zm16c2Y4ZXclMkJLJTJCdiUyRk07IGFkYTM1NTc3MTgyNjUwZjFfZ3Jfc2Vzc2lvbl9pZD0=", "MzQ5ODM1ZTktNWU3My00Y2NhLTgyM2MtZDVmMzc3MDk2YzFmOyBhZGEzNTU3NzE4MjY1MGYxX2dyX2xhc3Rfc2VudF9zaWRfd2l0aF9jczE9", "MzQ5ODM1ZTktNWU3My00Y2NhLTgyM2MtZDVmMzc3MDk2YzFmOyBhZGEzNTU3NzE4MjY1MGYxX2dyX3Nlc3Npb25faWRfc2VudF92c3Q9", "MzQ5ODM1ZTktNWU3My00Y2NhLTgyM2MtZDVmMzc3MDk2YzFmOyBhZGEzNTU3NzE4MjY1MGYxX2dyX2NzMT1vYjEyMjQxNDA4NTk2NDsg", "c3luY3Q9", "bm93", "LjIyMzsgc3luY2Q9LTE1MzA=", "UmVnRXhw", "KF58ICk=", "PShbXjtdKikoO3wkKQ==", "bWF0Y2g=", "c3luY2Q=", "RGF0ZQ==", "QCM=", "T2JqZWN0", "a2V5cw==", "cGFyYW1z", "YW5hbHlzaXM=", "aGFzT3duUHJvcGVydHk=", "cHVzaA==", "c29ydA==", "dXJs", "YmFzZVVSTA==", "Z2V0T3duUHJvcGVydHlEZXNjcmlwdG9y", "ZG9jdW1lbnQ=", "aW5kZXhPZg==", "bmF0aXZlIGNvZGU=", "Y3JlYXRlRWxlbWVudA==", "Y2FudmFz", "Z2V0Q29udGV4dA==", "MmQ=", "dGV4dEJhc2VsaW5l", "dG9w", "Zm9udA=="];
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
function OoO0ooo0(index) {
    return atob(encode_arr[index]);
}

///////////////////////////////////////////////////////////////////
//AST解密代码
//导入需要解析树的文件

let jscode = fs.readFileSync('jm.js', 'utf8');
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

            if(numstring !==30000){
                console.log(numstr, numstring); // 打印初始值
                console.log('numstring-->', numstring);
                path.replaceWith(types.numericLiteral(numstring)); // 使用 path 替换节点
                console.log("替换完成");
            }

        } else {
            // console.log("节点缺少 extra 或 value 属性",path.node.extra && path.node.value);
        }
    },

}, opts = {});


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

            let {parent, scope, parentPath, node} = path;

            let {left, operator, right} = node;

            if (types.isLiteral(left) && types.isLiteral(right)) {
                const {confident, value} = path.evaluate();
                if (!confident || value == "Infinity") return;
                path.replaceWith(types.valueToNode(value));
                return;
            }

            if (parentPath.isBinaryExpression({left: node})) {
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
    CallExpression(path) {
        if (types.isIdentifier(path.node.callee) && path.node.callee.name === "OoO0ooo0") {
        }
        {
            let arg = path.node.arguments[0]
            if (types.isNumericLiteral(arg) && path.node.arguments.length === 1 && path.node.arguments[0].value !== 30000
            ) {
                value=path.node.arguments[0].value
                console.log(path + '');
                console.log(path.node.arguments[0].value)
                console.log(OoO0ooo0(value));
                path.replaceWith(types.valueToNode(OoO0ooo0(value)));

            }


        }

    }
})

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
let {code} = generator(ast, {
    jsescOption: {minimal: true}, // 这样就不会把中文转义成 \uXXXX
    // compact:true
});  //{}解包的意思   等价于let code=generator(ast).code
fs.writeFile('还原.js', code, (err) => {
});






