import execjs
import requests
import json
header={
    'user-agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36 Edg/128.0.0.0',
    'referer':'https://www.birdreport.cn/',
    #检测content-type
    'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
}

# data = '{"year": "","version": "CH4"}'
data={"names": "北京市东城区,北京市西城区,北京市朝阳区,北京市丰台区,北京市石景山区,北京市海淀区,北京市门头沟区,北京市房山区,北京市通州区,北京市顺义区,北京市昌平区,北京市大兴区,北京市怀柔区,北京市平谷区,北京市密云区,北京市延庆区","year": "","version": "CH4"}
file=open("jj.js","r",encoding="utf-8").read()
data_json = json.dumps(data)
ctx=execjs.compile(file)
da=ctx.call('header',data_json)
postdata=da[1]
headers={**header,**da[0]}
print(headers)
# url="https://api.birdreport.cn/front/province/summary/adname"
url="https://api.birdreport.cn/front/province/summary/chartCity"
r=requests.post(url,headers=headers,data=postdata)
print(r.text)
