import requests
from lxml import etree
heard={
    "User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36 Edg/124.0.0.0"
}
url = 'http://www.hktvyb.vip/'
r = requests.get(url=url, headers=heard)
r.encoding="UTF-8"
resdata=etree.HTML(r.content,parser=etree.HTMLParser(encoding='utf8'))
datas=resdata.xpath("//li/a")
for i in datas:
    nameurl=i.xpath(".//text()")
    referurl=i.xpath("@href")
    print(nameurl[0],referurl[0])


