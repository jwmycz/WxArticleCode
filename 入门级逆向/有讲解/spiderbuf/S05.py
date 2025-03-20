from lxml import etree
import requests
import UsersAgent
import os
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
    nodes = one.xpath('//div[@class="col-sm-4"]')
    for node in nodes:
        #print(node.xpath("./td/text()"))
        #print(node.xpath("./td/a/text()"))
        #print(node.xpath("./td/font/text()"))
        oneu="http://www.spiderbuf.cn"
        twou=node.xpath("./img/@src")
        picurl=str(oneu)+str(twou[0])
        picdown(picurl)
        print(picurl)
        print("-----------")
def picdown(url):
    try:
        Ua = UsersAgent.PcUA()
        imgdata = requests.get(url,headers=Ua).content  # 请求到了图的二进制数据
        # 生成图片名称
        imgname = url.split('/')[-1]
        # 图片存储路径
        imgpath = './s05picture/' + imgname
        with open(imgpath, 'wb') as fp:
            fp.write(imgdata)
            print(imgname, '下载成功！')
    except Exception as e:
        print(e)

if not os.path.exists('./s05picture'):
    os.mkdir('./s05picture')
urls="http://www.spiderbuf.cn/s05/"
#print(urls)
htm=urs(urls)
sxml(htm)

