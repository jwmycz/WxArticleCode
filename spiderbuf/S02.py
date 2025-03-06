from lxml import etree
import requests
import UsersAgent
def urs(urs):
    try:
        Ua=UsersAgent.PcUA()
        response=requests.get(url=urs,headers=Ua)
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
urls="http://www.spiderbuf.cn/s02/"
htm=urs(urls)
sxml(htm)