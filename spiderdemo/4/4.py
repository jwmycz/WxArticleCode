import time
import httpx
requests = httpx.Client(http2=True)
import execjs
cookies = {
    'sessionid': '',
}
with open('tbjswasm.js',encoding='utf-8') as f:
    data=f.read()
ctx=execjs.compile(data)

allnums = []
for i in range(1,101):
    data=f'wasm_challenge_page_{str(i)}'
    timestamp=str(int(time.time()))
    wasm_auth = ctx.call('getdata', data, timestamp)
    headers = {
        'accept': 'application/json, text/javascript, */*; q=0.01',
        'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
        'content-type': 'application/json',
        'referer': 'https://www.spiderdemo.cn/sec1/wasm_challenge/?challenge_type=wasm_challenge',
        'sec-ch-ua': '"Microsoft Edge";v="141", "Not?A_Brand";v="8", "Chromium";v="141"',
        'sec-fetch-site': 'same-origin',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36 Edg/141.0.0.0',
        'x-requested-with': 'XMLHttpRequest',
        'x-wasm-page': str(i),
        'x-wasm-timestamp': timestamp,
    }
    response = requests.get(
        f'https://www.spiderdemo.cn/sec1/api/wasm_challenge/page/{str(i)}/?challenge_type=wasm_challenge&wasm_auth={str(wasm_auth)}',
        cookies=cookies,
        headers=headers,
    )
    res = response.json()
    allnums.extend(res.get('page_data'))

print(allnums)
k = 0
for i in allnums:
    k = k + i
print(k)