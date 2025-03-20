from lxml import etree
import requests
import UsersAgent
def urs1(urs):
    try:
        Ua = UsersAgent.PcUA()
        session = requests.Session()
        data={
            'username': 'admin',
            'password': '123456',
        }
        response=session.post(url=urs,headers=Ua,data=data,allow_redirects=False)
        cookies1=response.headers["Set-Cookie"]
        #print(cookies1)
        return cookies1
    except Exception as e:
        print(e)
def urs2(urs,cookie):
    try:
        data={
            'username': 'admin',
            'password': '123456',
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
urls1="http://www.spiderbuf.cn/e01/login"
urls2="http://www.spiderbuf.cn/e01/list"
htm=urs2(urls2,urs1(urls1))
sxml(htm)