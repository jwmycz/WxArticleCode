from lxml import etree
import requests
import UsersAgent
def urs(urs):
    try:
        Ua=UsersAgent.PcUA()
        response=requests.get(url=urs,headers=Ua)
        #print(response.text)
        return response.json()
    except Exception as e:
        print(e)
urls="http://www.spiderbuf.cn/iplist/?order=asc"
jsonurl=urs(urls)
for i in jsonurl:
    print(i)