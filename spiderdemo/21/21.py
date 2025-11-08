import time

import httpx
requests = httpx.Client(http2=True)
import execjs
with open('21.js',encoding='utf-8') as f:
    data=f.read()
ctx=execjs.compile(data)
cookies = {
    'sessionid': 'cjomi84jr3x0r0boau4r978b9sk0qjgy',
}
def getnum(page):

    data=ctx.call('geturldata', page)
    XRequestToken=data['token']
    XVerifyCode=data['code']
    url=data['url']
    headers = {
        'accept': 'application/json, text/plain, */*',
        'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
        'cache-control': 'no-cache',
        'pragma': 'no-cache',
        'priority': 'u=1, i',
        'referer': 'https://www.spiderdemo.cn/authentication/hash_challenge/?challenge_type=hash_challenge',
        'sec-ch-ua': '"Microsoft Edge";v="141", "Not?A_Brand";v="8", "Chromium";v="141"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36 Edg/141.0.0.0',
        'x-request-token': XRequestToken,
        'x-verify-code': XVerifyCode,
        # 'cookie': XVerifyCode,
    }
    newurl='https://www.spiderdemo.cn/authentication/api/hash_challenge'+url
    # print(headers)
    # print(newurl)

    response = requests.get(
        newurl,
        cookies=cookies,
        headers=headers,
    )
    # https://www.spiderdemo.cn/authentication/api/hash_challenge/page/5/?challenge_type=hash_challenge&sign=84f4b181b2fd13b31d53277feb5ca2b4161fc921751702f3d12ec23d23c7c48f&code=298ba077b04c463acb736473b5fd993e0bbf36f993dcb3eaf8e26b55a94e5530&t=1760512452935
    res = response.json()

    return res['page_data']

if __name__ == '__main__':

    allnums = []
    for i in range(1, 101):
        data = getnum(str(i))
        allnums.extend(data)
    print(allnums)
    nidnum = 0
    for i in allnums:
        newi = int(i)
        nidnum = nidnum + newi
    print(nidnum)