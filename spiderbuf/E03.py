import requests
import UsersAgent
from lxml import etree

def viewurl(url):
    try:
        UA=UsersAgent.PcUA()
        res=requests.get(url,headers=UA).content
        ress=etree.HTML(res)
        listurl=ress.xpath("//div[@class='pull-right']//li/a/@href")
        for i in listurl:
            ur=i.split(".")[1]
            everyoneurl(ur)
    except Exception as e:
        print(e)
def everyoneurl(url):
    try:
        UA = UsersAgent.PcUA()
        url="http://www.spiderbuf.cn/e03"+url
        print(url)
        res = requests.get(url, headers=UA).content
        sxml(res)
    except Exception as e:
        print(e)
def sxml(html):
    one = etree.HTML(html)
    nodes = one.xpath('//tr')
    for node in nodes:
        #print(node.xpath("./td/text()"))
        i=node.xpath("./td/text()")
        with open("./e03.txt","a") as fp:
            fp.write(str(i)+"\n")
            #print('下载成功！')
        #print(" -------- ")


url="http://www.spiderbuf.cn/e03/"
viewurl(url)

