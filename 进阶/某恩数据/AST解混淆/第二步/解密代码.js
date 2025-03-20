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
///////////////////////////////////////////////////////////////////
//AST解密代码
//导入需要解析树的文件
let jscode=fs.readFileSync('./第一步还原.js','utf8');
//解析成树
let ast=parser.parse(jscode);

///////////////////////////////////////////////////////////////////
//还原字符串
var arrydata=['_0x10331a', '_0x1a3d16', '_0x4ae38a', '_0x3e6f37','_0x2a3b98','_0x30e436','_0x5c8cf3','_0x9abeb5','_0x124ebb','_0x5be735','_0x40aa0d','_0x2639dd',
    '_0x2be785','_0x2968f6','_0x33cc44','_0x292806','_0x5b7b3d','_0x3852d5','_0x3f2fdc','_0x57e205',
'_0x199175','_0x1aedce','_0x98fde8','_0x5c96b5','ziaKOb','_0x586848','_0xcff7d6','_0xaba0e5','_0x311b5f',
'_0x29a2d1','_0x11bbc8','_0x5e5354','_0x4da59e','_0x51eedc']
combinBin={
    VariableDeclarator:function (path) {
        // console.log(path.get('id.name'))
        nameid=path.get('id.name').node
        if(arrydata.indexOf(nameid) !== -1) {
            eval(path.toString())
            // datas = path.get('init').node.properties;
            // console.log(datas)
            // for (i in datas) {
            //     console.log(datas[i].value.type);
            // }
        }
    }
}


combinBin1={
    MemberExpression:function (path) {
        if(path.get('property').type==='StringLiteral'){
            if(arrydata.indexOf(path.get('object.name').node) !== -1){
            console.log(path.toString())
            let result=eval(path.toString())
            console.log(result)
            if(typeof result==='string'){
                path.replaceWith(
                {
                    type:"StringLiteral",
                    value:result
                }
                )
            }
        }
    }
}}


traverse(ast,combinBin,opts={});
// console.log(_0x10331a)
traverse(ast,combinBin1,opts={});
///////////////////////////////////////////////////////////////////
//还原控制流




///////////////////////////////////////////////////////////////////
//保存还原代码
let{code}=generator(ast);  //{}解包的意思   等价于letcode=generator(ast).code
fs.writeFile('第二步还原.js', code, (err)=>{});