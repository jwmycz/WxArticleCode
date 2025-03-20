import requests
import UsersAgent
from lxml import etree

def view(url):
    heard={
        'User-Agent': 'Mozilla/5.0 (Linux; Android 8.1; PAR-AL00 Build/HUAWEIPAR-AL00; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/57.0.2987.132 MQQBrowser/6.2 TBS/044304 Mobile Safari/537.36 MicroMessenger/6.7.3.1360(0x26070333) NetType/WIFI Language/zh_CN Process/tools',
        'Referer':'http://www.spiderbuf.cn/list?pageno=2',
    }
    res=requests.get(url,headers=heard).content
    xpml(res)

def xpml(res):
    ress=etree.HTML(res)
    views=ress.xpath("//div[@class='col-xs-6 col-lg-4']")
    for i in views:
        s=i.xpath("./h2/text()")+i.xpath("./p/text()")
        #print(i.xpath("./h2/text()")+i.xpath("./p/text()"))
        #print("-----------------")
        with open("n01.txt","a") as fp:
            fp.write(str(s)+"\n"+"-----------------"+"\n")


url="http://www.spiderbuf.cn/n01/"
view(url)