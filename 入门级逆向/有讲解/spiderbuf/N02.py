import requests
from lxml import etree
import UsersAgent
import os
import base64



def views(url):
    res=requests.get(url,headers=UsersAgent.PcUA()).content
    pichtml=etree.HTML(res)
    data=pichtml.xpath("//div[@class='row']/div/img/@src")
    #print(data)
    return data
def decode_base64(base64_data):
    with open('base64.jpg','wb') as file:
        img = base64.b64decode(base64_data)
        file.write(img)


url='http://www.spiderbuf.cn/n02/'
picdata=views(url)[0]
#print(picdata.split(",")[1])
decode_base64(picdata.split(",")[1])