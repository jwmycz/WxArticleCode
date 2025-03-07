import requests
import execjs
# https://id.leiting.com/accountCenter/register
# TW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzEzMC4wLjAuMCBTYWZhcmkvNTM3LjM2IEVkZy8xMzAuMC4wLjA=
url="https://memberweb.leiting.com/register"
header={
    'cookie':'',
    'host':'memberweb.leiting.com',
    'origin':'https://id.leiting.com',
    'referer':'https://id.leiting.com/',
    'content-type':'application/json;charset=UTF-8'


}
file=open("reg.js","r",encoding="utf-8").read()
ctx=execjs.compile(file)
rsaa=ctx.call('regwd')
print(rsaa)
response = requests.post(url,headers=header,data=rsaa)
print(response.text)