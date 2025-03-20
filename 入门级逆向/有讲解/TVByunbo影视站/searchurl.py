import requests
import time
import re
import execjs

from urllib.parse import urlencode
import threading
import json


heard = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36 Edg/127.0.0.0",
    # "referer": "http://www.tvyb03.com/vod/search.html?wd=%E7%A0%B4%E6%AF%92%E5%BC%BA%E4%BA%BA&submit="
}
session = requests.Session()

def huadong():
    global session
    file = open("hd.js", "r", encoding="utf-8").read()
    ctx = execjs.compile(file)
    timestamp = int(time.time())
    # print("当前时间戳：", timestamp)
    url = "http://www.tvyb03.com/huadong_296d626f_c096703b225a76f80b4c6edc24d58930.js?id=1723981729" + str(timestamp)
    req = requests.get(url, headers=heard).text
    # print(req)
    value = re.findall('",value="(.*?)"', req)[0]
    key = re.findall(',key="(.*?)",value=', req)[0]
    valuemd5 = ctx.call('stringtoHex', value)
    # print("value为： " + value, "\nkey为: " + key, "\nvalue加密后为: " + valuemd5)
    url1 = "http://www.tvyb03.com/a20be899_96a6_40b2_88ba_32f1f75f1552_yanzheng_huadong.php?type=ad82060c2e67cc7e2cc47552a4fc1242&key=" + key + "&value=" + valuemd5
    # print(url1)
    session.get(url1, headers=heard)
    # print(session.cookies)

def searchurl(key):
    global session

    url="http://www.tvyb03.com/vod/search.html?wd="+key+"&submit="
    # heard['referer']=url
    # print(heard)
    print(url)
    req = session.get(url, headers=heard)
    print(req.text)

def m3u8down():
    pass

def main():
    huadong()
    searchurl("破毒强人")

if __name__ == '__main__':
    main()



