import os
import time
import requests
from lxml import etree
import threading
import re
from queue import Queue
header={"user-agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36 Edg/127.0.0.0"}
urllink=False
urltitle=[]
def url_get(url,q):
    global urllink
    global urltitle
    # urls=[]
    reurl='<dd><a href ="(.*?)">(.*?)</a></dd>'
    response = requests.get(url,headers=header)
    res=re.compile(reurl).findall(response.text)
    # print(res)
    # res = etree.HTML(response.text)
    # res.xpath()
    for i in res:
        link="https://www.3bqg.cc"+i[0]
        # print(link)
        q.put(link)
        # urls.append(i[0])
        urltitle.append(i[1].replace('*','').replace(' ',''))
    # print(urls)
    # print(title)
    # return url,title
    urllink=True
def downurl(q):
    while True:
        if q.empty() and urllink:
            break
        else:
            url=q.get()
            # print(url)
            req=requests.get(url,headers=header)
            tex=etree.HTML(req.text)
            cont=tex.xpath("//*[@id='chaptercontent']/text()")
            title=tex.xpath("//h1/text()")[0]
            cont="".join(cont).replace("\u3000\u3000","\n").strip().replace("请收藏本站：https://www.3bqg.cc。笔趣阁手机版：https://m.3bqg.cc","\n")
            with open(f"{title}.txt","w",encoding="utf-8") as f:
                f.write(title+"\n\n")
                f.write(cont+"\n\n")
            print(f"{title}已下载")
            # break

def txtnote():
    while not urltitle:
        time.sleep(2)
    rf=open(f"{time.time()}.txt","a",encoding="utf-8")
    for i in urltitle:
        while True:
            i=i.replace('*', '').replace(' ', '')
            if os.path.isfile(f"{i}.txt"):
                with open(f"{i}.txt","r",encoding="utf-8") as f:
                    content=f.read()
                    rf.write(content)
                    print(f"{i}合并成功")
                os.remove(f"{i}.txt")
                break
            else:
                time.sleep(0.5)
    rf.close()
    print("完成合并")




def main():
    url="https://www.3bqg.cc/book/137474/"
    q=Queue(maxsize=5000)
    t1=threading.Thread(target=url_get,args=(url,q))
    t1.start()
    for i in range(4):
        t2=threading.Thread(target=downurl,args=(q,),name=f"下载线程{i}")
        t2.start()
    for i in range(3):
        t3=threading.Thread(target=txtnote,args=(),name=f"合并线程{i}")
        t3.start()
if __name__ == '__main__':
    main()

