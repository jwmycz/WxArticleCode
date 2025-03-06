from lxml import etree
import requests
import UsersAgent
def urs(urs):
    try:
        Ua=UsersAgent.PcUA()
        #heard={
        #    'Referer': 'http://www.spiderbuf.cn/s06/',
        #    'User-Agent':'Mozilla/5.0 (Windows NT 6.2; WOW64; rv:21.0) Gecko/20100101 Firefox/21.0'
        #}
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
    urls="http://www.spiderbuf.cn/inner/"
    #print(urls)
    htm=urs(urls)
    sxml(htm)