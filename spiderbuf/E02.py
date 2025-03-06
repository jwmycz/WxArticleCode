from lxml import etree
import requests
import UsersAgent
import os

def picurl(url):
    try:
        UA=UsersAgent.PcUA()
        res=requests.get(url,headers=UA).content
        res=etree.HTML(res)
        urlpic=res.xpath('//div[@class="col-sm-4"]/img/@src')
        urlname='http://www.spiderbuf.cn/e02'+str(urlpic[0].split('.')[1])+'.png'
        #print(urlname)
        return urlname
    except Exception as e:
        print(e)
def picdown(url):
    try:
        UA=UsersAgent.PcUA()
        res=requests.get(url,headers=UA).content
        namepic=url.split('/')[-1]
        #print(namepic)
        # 图片存储路径
        imgpath = './E02picture/' + namepic
        with open(imgpath, 'wb') as fp:
            fp.write(res)
            print(namepic, '下载成功！')
        #print(namepic.split('.')[0])
        return namepic.split('.')[0]
    except Exception as e:
        print(e)
def urs1(urs,pic,picname):
    try:
        Ua = UsersAgent.PcUA()
        session = requests.Session()
        data={
            'username': 'admin',
            'password': '123456',
            'captchaSolution': pic,
            'captchaId': picname,
        }
        response=session.post(url=urs,headers=Ua,data=data,allow_redirects=False)
        cookies1=response.headers["Set-Cookie"]
        #print(cookies1)
        return cookies1
    except Exception as e:
        print(e)
def urs2(urs,cookie,pic,picname):
    try:
        data={
            'username': 'admin',
            'password': '123456',
            'captchaSolution': pic,
            'captchaId': picname,
        }
        heard={
            'cookie':cookie,
            'User-Agent': 'Mozilla/5.0 (Linux; Android 8.1; PAR-AL00 Build/HUAWEIPAR-AL00; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/57.0.2987.132 MQQBrowser/6.2 TBS/044304 Mobile Safari/537.36 MicroMessenger/6.7.3.1360(0x26070333) NetType/WIFI Language/zh_CN Process/tools',
        }
        response=requests.post(url=urs,headers=heard,data=data)
        #print(response.text)
        return response.content
    except Exception as e:
        print(e)
def sxml(html):
    one = etree.HTML(html)
    nodes = one.xpath('//tr')
    for node in nodes:
        print(node.xpath("./td/text()"))
        print(" -------- ")

if not os.path.exists('./E02picture'):
    os.mkdir('./E02picture')
oneurl="http://www.spiderbuf.cn/e02/"
picname=picdown(picurl(oneurl))
pic=input()
urls1="http://www.spiderbuf.cn/e02/login"
urls2="http://www.spiderbuf.cn/e02/list"
htm=urs2(urls2,urs1(urls1,pic,picname),pic,picname)
sxml(htm)