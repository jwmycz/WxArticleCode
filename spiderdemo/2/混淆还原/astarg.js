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

///////////////////////////////////////////////////////////////////
//AST解密代码
//导入需要解析树的文件

let jscode = fs.readFileSync('还原.js', 'utf8');
//解析成树
let ast = parser.parse(jscode);

////////////////////////////////////////////////////////
/////变量重命名
console.time("处理完毕，耗时");

function getRandomName(length) {

    let initArr   = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let puzzleArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let ranInx = Math.floor(Math.random() * initArr.length);
    let randomName = initArr[ranInx];

    for (var i = 1; i < length; i++) {
        ranInx = Math.floor(Math.random() * puzzleArr.length);
        randomName += puzzleArr[ranInx];
    }

    return randomName;
}

let allNewNames = new Map();  //定义一个全局变量，保存需要处理的函数
function getUnusedIdentifier()
{//获取未被使用的名称,返回 Identifier 类型。
	do
	{
		var newName = getRandomName(2);
		if (allNewNames.size > 300)
		{
			newName = getRandomName(3);
		}
	}while(allNewNames.has(newName))

	allNewNames.set(newName,1);

	let UnusedIdentifier = types.Identifier(newName);

	return UnusedIdentifier;
}
let spIdentifiers = new Map();
const getAllspIdentifiers =
{//h获取所有需要处理的变量名。
	"Identifier"({ node }) {
		let name = node.name;
		for (var index = 0; index < name.length; index++) {
			if (name.charCodeAt(index) > 127) {
				break;
			}
		}
		if (index < name.length && !spIdentifiers.has(node.name)) {
			spIdentifiers.set(node.name,false);
		}
	},
}
traverse(ast, getAllspIdentifiers);
if(spIdentifiers.size > 0)
{
	const renameSpIdentifier =
	{
		"Identifier"(path)
		{
			let {node,scope} = path;
			if (!spIdentifiers.has(node.name))
			{
				return;
			}

			let  idName = spIdentifiers.get(node.name);

			if (!idName)
			{
				let newIdentifier = getUnusedIdentifier();
				path.replaceWith(newIdentifier);
				spIdentifiers.set(node.name,newIdentifier);
			}
			else
			{
				path.replaceWith(idName);
			}

		}
	}

	traverse(ast, renameSpIdentifier);
}


allNewNames.clear();
spIdentifiers.clear();



console.timeEnd("处理完毕，耗时");
////替换十六进制为数字,编码修改
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


//字符串替换


let all={}

traverse(ast, {
  VariableDeclarator(path) {
    if (types.isIdentifier(path.node.init)) {
      const id = path.node.id.name;
      const init = path.node.init.name;
      const binding = path.scope.getBinding(id);
      if (binding && !binding.constantViolations.length) {
        all[id] = init;
      }
    }
  }
});
// console.log( all);
traverse(ast,{
    Identifier(path){
        // console.log(path+'');
        // console.log(path.node.name);
        if(all[path.node.name]){
            // console.log(`替换前--》${path.node.name},替换后--》${all[path.node.name]}`);
            path.node.name=all[path.node.name]
        }
    }
})
//逗号表达式
const removeNonExecutableNodes = {

    "SequenceExpression"(path) {

        let expressionPaths = path.get('expressions');

        for (let expressPath of expressionPaths.slice(0, -1)) {

            if (expressPath.isIdentifier() || expressPath.isLiteral() || expressPath.isMemberExpression() || expressPath.isBinaryExpression()) {
                expressPath.remove();
            }
        }

    },

    "ExpressionStatement"(path) {
        let expressPath = path.get('expression');

        if (expressPath.isIdentifier() || expressPath.isLiteral() || expressPath.isMemberExpression() || expressPath.isBinaryExpression()) {
            expressPath.remove();
        }
    },

    "EmptyStatement|DebuggerStatement"(path) {
        path.remove();
    },
}

traverse(ast, removeNonExecutableNodes);


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



const removeBlockOfSwitchCase ={ SwitchCase(path)  { let {consequent} = path.node; if (consequent.length == 1 && types.isBlockStatement(consequent[0]))  {  path.node.consequent = consequent[0].body;  }  }}
traverse(ast,removeBlockOfSwitchCase);
///////////////////////////////////////
//控制流还原

// traverse(ast, {
//     ForStatement(path){
//
//         if(path.node.body.body&&types.isSwitchStatement(path.node.body.body[0])){
//             console.log(generator(path.parent.body[0]).code);
//             // console.log(path.parentPath.node.body[0]);
//             console.log(path+'');
//             switchcase=path.node.body.body[0].cases
//             for(let i=0;i<switchcase.length;i++){
//                 // console.log(switchcase[i])
//                 valuekey=switchcase[i].test.value;
//             }
//         }
//
//     }
// })
const changeUnaryToLiteral =
{
    AssignmentExpression(path)
    {
        let {left,operator,right} = path.node;

        if (!types.isUnaryExpression(right,{"operator":"-"}) || !types.isNumericLiteral(right.argument))
        {
            return;
        }

        if (operator == "-=")
        {
            path.node.operator = "+=";
            path.node.right = right.argument;
            return;
        }
        if (operator == "+=")
        {
            path.node.operator = "-=";
            path.node.right = right.argument;
            return;
        }

    }
}

traverse(ast,changeUnaryToLiteral)
console.time("处理完毕，耗时");



const simplifyAssign =
{
	SwitchStatement(path) {
		let { discriminant, cases } = path.node;
		if (!types.isIdentifier(discriminant)) {
			return;
		}

		let name = discriminant.name;

		let casesPath = path.get('cases');

		for (let eachCase of casesPath) {
			let { test } = eachCase.node;
			if (!types.isNumericLiteral(test)) {
				continue;
			}
			let value = test.value;
			eachCase.traverse({
				AssignmentExpression(_path) {
					let { left, operator, right } = _path.node;

					if (!types.isIdentifier(left, { "name": name }) || !types.isNumericLiteral(right)) {
						return;
					}

					if (operator == "-=") {
						_path.node.right.value = value - right.value;
					}
					else if (operator == "+=") {
						_path.node.right.value = value + right.value;
					}
					else {
						return;
					}

					_path.node.operator = "=";
				}
			})
		}


	}
}

traverse(ast, simplifyAssign);


const changeIfToConditional =
{
	IfStatement(path) {
		let { test, consequent, alternate } = path.node;

		if (!types.isBlockStatement(consequent) || !types.isBlockStatement(alternate)) {
			return;
		}

		if (consequent.body.length != 1 || alternate.body.length != 1) {
			return;
		}

		let conseNode = consequent.body[0];
		let alterNode = alternate.body[0];

		if (!types.isExpressionStatement(conseNode) || !types.isAssignmentExpression(conseNode.expression)) {
			return;
		}
		if (!types.isExpressionStatement(alterNode) || !types.isAssignmentExpression(alterNode.expression)) {
			return;
		}

		let conseLeft = conseNode.expression.left;
		let conseOp   = conseNode.expression.operator;
		let conseRight   = conseNode.expression.right;

		if (!types.isIdentifier(conseLeft) || conseOp != "=" || !types.isNumericLiteral(conseRight) ||
		    conseLeft.name != alterNode.expression.left.name)
		{
			return;
		}

		let ConditionalNode = types.ConditionalExpression(test,conseRight,alterNode.expression.right);

		let assignNode = types.AssignmentExpression("=",conseLeft,ConditionalNode);

		path.replaceWith(types.ExpressionStatement(assignNode));
	}
}


traverse(ast, changeIfToConditional);


console.timeEnd("处理完毕，耗时");
///////////////////////////////////////////////////////////////////
//traverse(ast, {}, opts = {});
//保存还原代码
let { code } = generator(ast, {
    jsescOption: { minimal: true } , // 这样就不会把中文转义成 \uXXXX
    // compact:true
});  //{}解包的意思   等价于let code=generator(ast).code
fs.writeFile('还原2.js', code, (err) => {
});






