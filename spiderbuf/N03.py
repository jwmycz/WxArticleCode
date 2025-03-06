import requests
import UsersAgent
from lxml import etree
import time
import os
def views(url):
    try:
        res=requests.get(url,headers=UsersAgent.PcUA()).content
        res=etree.HTML(res)
        view=res.xpath("//tr")
        for note in view:
            notes=note.xpath("string(.)")
            #print(notes)
            with open("./N03/N03.txt","a") as fp:
                fp.write(notes+"\n"+"-----------------"+"\n")
    except Exception as e:
        print(e)
    #print(view)


if not os.path.exists('./N03'):
    os.mkdir('./N03')
for i in range(1,21):
    url="http://www.spiderbuf.cn/n03/"+str(i)
    views(url)
    print("第"+str(i)+"页下载完成")
    time.sleep(1)
