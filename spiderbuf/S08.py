import random
from lxml import etree
import requests
import UsersAgent
def urs(urs):
    try:
        data={
            'level' : '8',
        }
        Ua=UsersAgent.PcUA()
        response=requests.post(url=urs,headers=Ua,data=data)
        #print(response.text)
        return response.content
    except Exception as e:
        print(e)
def sxml(html):
    one = etree.HTML(html)
    nodes = one.xpath('//tr')
    for node in nodes:
        print(node.xpath("./td/text()")+node.xpath("./td/a/text()")+node.xpath("./td/font/text()"))
        print(" -------- ")
urls="http://www.spiderbuf.cn/s08/"
htm=urs(urls)
sxml(htm)