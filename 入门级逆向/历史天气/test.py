import httpx
import execjs
with open('22222222.js', 'r', encoding='utf-8') as f:
    js_code = f.read()
cc=execjs.compile(js_code)
datas=cc.call('ffffff')
print(datas)

headers = {
    'accept': 'application/json, text/javascript, */*; q=0.01',
    'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
    'cache-control': 'no-cache',
    'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'origin': 'https://lishi.tianqi.com',
    'pragma': 'no-cache',
    'priority': 'u=1, i',
    'referer': 'https://lishi.tianqi.com/hefei/202308.html',
    'sec-ch-ua': '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
    'x-requested-with': 'XMLHttpRequest',
    # 'cookie': 'UserId=17413533769861641; Hm_lvt_7c50c7060f1f743bccf8c150a646e90a=1741353379; HMACCOUNT=FDC0470174128ACA; Hm_lpvt_7c50c7060f1f743bccf8c150a646e90a=1741353553',
}
session = httpx.Client(http2=True)
data = {
    'crypte': datas,
}

response = session.post('https://lishi.tianqi.com/monthdata/hefei/202308', headers=headers, data=data)
print(response.text)