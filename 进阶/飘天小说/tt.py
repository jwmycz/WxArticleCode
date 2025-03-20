import requests
from lxml import etree
import re

headers = {
    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    'accept-language': 'zh-CN,zh;q=0.9',
    'cache-control': 'no-cache',
    # 'cookie': 'cf_clearance=y4W1czVBM4BTLeNs7BwgWMt667GQsQk6I4EtjR45fWQ-1735559554-1.2.1.1-ED4KMA_noFrB8pRh92Q5owu.1AOJbvyIAXbYBWqNRboSDB3QiFrl3lfC0Af5aqSuIQDMrtF3Y7SRQ5kQcj.QPw7R4fxljsztsgqTtf4CzbM8UhdSIuSgyRRLbZTDEAizJA_mRddD7j1V3Z7ttpqeWxSFQmiMH62oy8z5XRtEVJxaY9VtBeUxgr6BcocSJX6pB33T3nZnCnSPsNTiMdKQVd_0sP7GY5lpUXszHhKJzx4GND.UxIxA3kZXa2pJdMVFL7wCBYCH3Mc2mGqfd_uelQcXesMte21_SFLsM.aCG11.p1Hs.NszRV52rRtvWmQW3T7_1Tj7KIc9i.OUbRhoKGuCJPm2vZ5vcUCKNLw9wajHC3Ts6j03KlsrpTNGLJ7MDHhqoZbR82PYTD16qNL1fg; jieqiVisitId=article_articleviews%3D15296',
    'pragma': 'no-cache',
    'priority': 'u=0, i',
    'referer': 'https://www.piaotia.com/bookinfo/15/15296.html',
    'sec-ch-ua': '"Microsoft Edge";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'document',
    'sec-fetch-mode': 'navigate',
    'sec-fetch-site': 'same-origin',
    'sec-fetch-user': '?1',
    'upgrade-insecure-requests': '1',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36 Edg/131.0.0.0',
}
allhref=[]
allnametext=[]
def allurl():
    response = requests.get('https://www.piaotia.com/html/15/15296/index.html',  headers=headers)
    response.encoding='gbk'
    htl = etree.HTML(response.text)
    nametextXpath = '//li/a/text()'
    hrefXpath = '//li/a/@href'
    nametexts = htl.xpath(nametextXpath)
    hrefs = htl.xpath(hrefXpath)
    for i in nametexts:
        allnametext.append(i)
    for i in hrefs:
        allhref.append(i)
def downtext(urld):
    try:
        url='https://www.piaotia.com/html/15/15296/'+urld
        response = requests.get(url, headers=headers)
        response.encoding = 'gbk'
        red = '&nbsp;&nbsp;&nbsp;&nbsp;(.*?)<'
        tt = '<H1>.*</a>(.*?)</H1>'
        s = re.compile(tt, re.S).findall(response.text)
        x = re.compile(red, re.S).findall(response.text)
        print(s[0])
        f=open('g.txt','a',encoding="utf-8")
        f.write(s[0]+"\n\n")
        for i in x:
            f.write(i+"\n\n")
    except Exception as e:
        print(e)
def run():
    allurl()
    for i in allhref:
        downtext(i)
if __name__ == '__main__':
    run()
    print(allhref)
    print(allnametext)