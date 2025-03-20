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
        #print(node.xpath("./td/text()"))
        #print(node.xpath("./td/a/text()"))
        #print(node.xpath("./td/font/text()"))
        print(node.xpath("./td/text()")+node.xpath("./td/a/text()")+node.xpath("./td/font/text()"))
        print("-----------")
for i in range(1,6):
    urls="http://www.spiderbuf.cn/s04/?pageno="+str(i)
    print(urls)
    htm=urs(urls)
    sxml(htm)