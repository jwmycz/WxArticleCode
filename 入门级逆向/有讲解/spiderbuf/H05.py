import requests
import execjs
file=open("H05.js","r",encoding="utf-8").read()
ctx=execjs.compile(file)
s=ctx.call('s')
heard={
    # 'sec-fetch-dest':'document',
    # 'sec-fetch-mode':'navigate',
    # 'sec-ch-ua':'"Not)A;Brand";v="99", "Microsoft Edge";v="127", "Chromium";v="127"',
    'user-agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36 Edg/127.0.0.0'
}
print(s)
url="https://www.spiderbuf.cn/playground/h05/api/"+s

res = requests.get(url=url,headers=heard).json()
print(url)
print(str(res))