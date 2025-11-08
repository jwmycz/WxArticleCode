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
var _ÿgcadf = Symbol;
var _ÿdigec = Object;
var _ÿbidfc = TypeError;
var _ÿhcceg = Promise;
var _ÿdijia = String;
var _ÿgdjhd = decodeURIComponent;
var _ÿdddej = escape;
var _ÿjhbia = atob;
var _ÿdaehi = Set;
var _ÿbiagb = undefined;
var _ÿbgaie = encodeURIComponent;
var _ÿjhfjj = fetch;
var _ÿcidac = Error;
var _ÿdghia = JSON;
// var _ÿbjghg = window;
// var _ÿjbcfa = recordBehavior;
var _ÿahfid = Date;
var _ÿabfdj = console;
var _ÿigfjh = URLSearchParams;
// var _ÿdabgi = document;
// var _ÿgbbea = showResult;
var _ÿhcgii = Math;
var _ÿacccf = parseInt;
var _ÿeihce = Array;
// var _ÿaciia = performance;
// var _ÿbhbch = location;
var _ÿdjcda = setInterval;
var _ÿjhiag = Function;
var _ÿhbcfd = setTimeout;
function _ÿhecih(_0x841bd7, _0x44fab0) {
  let _0x1f1cc1 = 4;
  for (let _0x536a0d = 0; _0x536a0d < 5; _0x536a0d++) {
    switch (_0x1f1cc1) {
      case 2:
        {
          return _0x3bc79e;
        }
      case 3:
        {
          for (var _0x39d32e = 0; _0x39d32e < _0x841bd7["length"]; _0x39d32e++) {
            _0x3bc79e += _ÿdijia["fromCharCode"](_0x841bd7["charCodeAt"](_0x39d32e) ^ _0x44fab0["charCodeAt"](_0x39d32e % _0x44fab0["length"]));
          }
          _0x1f1cc1 += -1;
          break;
        }
      case 1:
        {
          var _0x3bc79e = "";
          _0x1f1cc1 += 2;
          break;
        }
      case 4:
        {
          try {
            _0x841bd7 = _ÿgdjhd(_ÿdddej(_ÿjhbia(_0x841bd7)));
          } catch (_0x7648cb) {
            _0x841bd7 =atob(_0x841bd7);
          }
          _0x1f1cc1 += -3;
          break;
        }
    }
  }
}
///////////////////////////////////////////////////////////////////
//AST解密代码
//导入需要解析树的文件

let jscode = fs.readFileSync('4.js', 'utf8');
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
//字符串  _ÿhecih
traverse(ast, {
    CallExpression(path){

        if(path.node.callee.name==='_ÿhecih'){
            console.log(path+'');
            leftarg=path.node.arguments[0].value;
            rightarg=path.node.arguments[1].value;
            data=_ÿhecih(leftarg, rightarg)
            console.log(data);
            path.replaceWith(types.stringLiteral(data));


        }
    }

})
let all={}
traverse(ast,{
    VariableDeclarator(path){

        if(types.isIdentifier(path.node.init)){
            idname=path.node.id.name
            if(idname.indexOf('_0x') === -1){
                console.log(path+'');
                all[path.node.id.name] = path.node.init.name;
            }
        }

    }
})
console.log( all);
traverse(ast,{
    Identifier(path){
        // console.log(path+'');
        // console.log(path.node.name);
        if(all[path.node.name]){
            console.log(`替换前--》${path.node.name},替换后--》${all[path.node.name]}`);
            path.node.name=all[path.node.name]
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







// traverse(ast, {
//   VariableDeclarator(path) {
//     // 检查是否是对象初始化
//     if (types.isObjectExpression(path.node.init)) {
//       let props = path.node.init.properties;
//       let obj = {};
//
//       // 收集对象属性键值
//       for (let i = 0; i < props.length; i++) {
//         let keyName = props[i].key.name || props[i].key.value;
//         obj[keyName] = props[i].value;
//       }
//
//       // 获取变量引用
//       let binding = path.scope.getBinding(path.node.id.name);
//       if (!binding) return;
//
//       let refPaths = binding.referencePaths;
//
//       for (let i = 0; i < refPaths.length; i++) {
//         let mempath = refPaths[i].parentPath;
//         if (mempath.isMemberExpression()) {
//           let propname =
//             mempath.node.property.name || mempath.node.property.value;
//
//           // 如果对象属性存在
//           if (obj[propname]) {
//             // 深拷贝后替换
//             mempath.replaceWith(types.cloneDeep(obj[propname]));
//           }
//         }
//       }
//     }
//   },
// });


///////////////////////////////////////////////////////////////////
//traverse(ast, {}, opts = {});
//保存还原代码
let { code } = generator(ast, {
    jsescOption: { minimal: true } , // 这样就不会把中文转义成 \uXXXX
    // compact:true
});  //{}解包的意思   等价于let code=generator(ast).code
fs.writeFile('还原.js', code, (err) => {
});






