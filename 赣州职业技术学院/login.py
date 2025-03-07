import requests
import ddddocr
import time
import execjs
import base64
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36 Edg/128.0.0.0',
}
tm=int(time.time())
def jsdata(datas):
    try:
        file=open('pwd.js',"r",encoding="utf-8").read()
        jsa=execjs.compile(file)
        if len(datas)==0:
            data = jsa.call("loginusertoken")
            return data
        else:
            data=jsa.call("RSAPWD",datas)
            return data
    except Exception as e:
        print(e)
def yzm():
    try:
        print("开始下载验证码")
        params = {
            '_t': tm,
            'uid': '',
        }
        loginUserToken=str(jsdata(""))
        headers['loginUserToken']=loginUserToken
        res = requests.get('https://gzpt.edu.cn:644/lyuapServer/kaptcha', params=params, headers=headers)
        pic_base64=res.json()['content'].replace('data:image/png;base64,','').encode()
        uid=res.json()['uid']
        imgdata = base64.b64decode(pic_base64)
        with open("yzm.png",'wb') as f:
            f.write(imgdata)
        f.close()
        print("验证码下载成功")
        return uid
    except Exception as e:
        print("验证码图片下载错误")
def yzmocr():
    try:
        print("开始识别验证码")
        ocr = ddddocr.DdddOcr()
        image = open("yzm.png", "rb").read()
        result = ocr.classification(image)
        print("识别结果为---->"+result)
        try:
            print("开始计算")
            if result[1] == "+":
                sbdata = int(result[0]) + int(result[2])
            elif result[1] == "-":
                sbdata = int(result[0]) - int(result[2])
            elif result[1] == "*":
                sbdata = int(result[0]) * int(result[2])
            else:
                sbdata = int(result[0]) / int(result[2])
            print("计算结果为---->" + str(sbdata))
            return sbdata
        except:
            print("计算结果出错，请手动输入")
            sbdata=input()
            return sbdata
    except Exception as e:
        print('验证码图片识别错误')
def login(uid,sbdata,username,pwd):
    loginUserToken = str(jsdata(""))
    headers['loginUserToken'] = loginUserToken
    password = str(jsdata(pwd))
    print("密码加密后---->\n"+password)
    data = {
        'username': username,
        'password': password,
        'service': 'https://jwxt.gzpt.edu.cn:12580/api/cas/login?pattern=teacher-login&returnUrl=https%3A%2F%2Fjwxt.gzpt.edu.cn%3A19995%2F',
        'loginType': '',
        'id': uid,
        'code': sbdata,
    }

    res = requests.post('https://gzpt.edu.cn:644/lyuapServer/v1/tickets', headers=headers, data=data)
    try:
        code = res.json()["data"]["code"]
        success=res.json()["meta"]["success"]
        statusCode=res.json()["meta"]["statusCode"]
        if code == "NOUSER":
            print("statusCode----->"+str(success))
            print("statusCode----->"+str(statusCode))
            print("登录失败,账号不存在")
    except:
        print(res.text)
def run(username,pwd):
    uid=yzm()
    time.sleep(1)
    sbdata=yzmocr()
    time.sleep(1)
    login(uid,sbdata,username,pwd)

if __name__ == '__main__':
    username="120512"
    pwd="120512"
    run(username,pwd)