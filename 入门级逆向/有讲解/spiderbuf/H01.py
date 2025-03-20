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
        a=i.xpath("./h2/i[@style='width: 32px;position: relative; left: -32px;']/text()")
        b = i.xpath("./h2/i[@style='width: 32px;position: relative; left: 32px;']/text()")
        c = i.xpath("./h2/i[@style='width: 32px;position: relative;']/text()")
        x=i[0].xpath("string(.)")
        #print(i[0].xpath("string(.)"))
        #print(i[1].xpath("string(.)"))
        #print(i[2].xpath("string(.)"))
        #print(i[3].xpath("string(.)"))
        #print(i[4].xpath("string(.)"))
        print(x[1]+x[0]+x[2:])
        #print(a+b+c+i.xpath("./p/text()"))
        print("-----------------")
        #with open("n01.txt","a") as fp:
        #    fp.write(str(s)+"\n"+"-----------------"+"\n")


url="http://www.spiderbuf.cn/h01/"
view(url)