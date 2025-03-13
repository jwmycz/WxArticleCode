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
let jscode=fs.readFileSync('./第二步还原.js','utf8');
//解析成树
let ast=parser.parse(jscode);

///////////////////////////////////////////////////////////////////
//还原字符串

var _0x41a60d = "9|1|0|7|2|5|6|8|3|4"["split"]('|')
var _0x4772b2 = "2|5|3|1|0|4"['split']('|')
var _0x5826b6 = "5|0|1|4|3|2"["split"]('|')
var _0x5845b9 = "0|2|4|1|3"["split"]('|')
var _0x46be1b = "0|4|2|5|1|3"['split']('|')
var _0x563f71 = "3|1|0|4|2|5"['split']('|')
var _0x415bc0 = '3|2|4|1|0'["split"]('|')
var _0x492a62 = "7|1|8|9|5|2|3|6|0|4"["split"]('|')
temp=[]
combinBin={
    SwitchStatement:function (path) {
        name=path.get('discriminant.object.name').node
        //console.log(name)
        len=path.get('cases.length')
        aa=path.get('cases.0.test').node.value
        data=[]
        for(let i=0;i<len;i++){
            bb=path.get('cases.'+i+'.consequent.0').toString()
            data.push(bb)
        }
        // console.log(name)
        temp[name]=data
    }
}



traverse(ast,combinBin,opts={});
// console.log(temp)
codenamepd=['_0x41a60d','_0x4772b2','_0x5826b6','_0x5845b9','_0x46be1b','_0x563f71','_0x415bc0','_0x492a62']
function newcodeaa(name){
    let newcodes=""
    for (let i of eval(name) ){
        newcodes+=temp[name][i]
    }
    return newcodes;

}

combinBin1={
    WhileStatement:function (path) {
        codename=path.get('body').node.body[0].discriminant.object.name
        // console.log(codename)
        if(codenamepd.indexOf(codename) !== -1){
            console.log(codename)
            cc=newcodeaa(codename)
            console.log(cc)
            dd=parser.parse(cc)
            console.log(dd)
            path.replaceWithSourceString(dd)
        }

    }
}
traverse(ast,combinBin1,opts={});
///////////////////////////////////////////////////////////////////
//还原控制流




///////////////////////////////////////////////////////////////////
//保存还原代码
let{code}=generator(ast);  //{}解包的意思   等价于letcode=generator(ast).code
fs.writeFile('第四步还原.js', code, (err)=>{});