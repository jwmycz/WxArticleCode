///////////////////////////////////////////////////////////////////
//导库
//导入fs
const fs= require("fs");
//导入babel/parser
const parser=require('@babel/parser')
//导入babel/traverse
const traverse=require('@babel/traverse').default;
//导入babel/types  节点类型
const types=require('@babel/types');
//将AST转换成JavaScript源代码：
const generator = require("@babel/generator").default;

//AST解密代码
//导入需要解析树的文件
let jscode=fs.readFileSync('./第一步还原.js','utf8');
//解析成树
let ast=parser.parse(jscode);

///////////////////////////////////////////////////////////////////


let combinBin = {
    StringLiteral(path) {
        if (path.node.value !== path.node.extra.raw) {
            path.node.extra.raw = "'" + path.node.value + "'";
        }
    },
}
traverse(ast,combinBin);


//将 AST 语法树还原成代码
let {code} = generator(ast, opts = {
    "jsescOption": {"minimal": true},
});

///////////////////////////////////////////////////////////////////
//保存还原代码

fs.writeFile('第二步还原.js', code, (err)=>{});