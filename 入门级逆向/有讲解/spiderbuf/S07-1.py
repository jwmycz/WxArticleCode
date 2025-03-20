import json
import requests
import UsersAgent
def urs(urs):
    try:
        Ua=UsersAgent.PcUA()
        response=requests.get(url=urs,headers=Ua)
        #print(response.text)
        return response.text
    except Exception as e:
        print(e)
urls="http://www.spiderbuf.cn/iplist/?order=asc"
jsonurl=json.loads(urs(urls))
for i in jsonurl:
    print(i)