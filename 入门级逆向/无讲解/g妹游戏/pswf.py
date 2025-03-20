import requests
import execjs
cookies = {
    'PHPSESSID': '1k9dh19nsnm86f71onrnvdst17',
}

headers = {
    'Accept': '*/*',
    'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    # 'Cookie': 'PHPSESSID=1k9dh19nsnm86f71onrnvdst17',
    'Pragma': 'no-cache',
    'Referer': 'https://www.gm99.com/',
    'Sec-Fetch-Dest': 'script',
    'Sec-Fetch-Mode': 'no-cors',
    'Sec-Fetch-Site': 'same-site',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36 Edg/128.0.0.0',
    'sec-ch-ua': '"Chromium";v="128", "Not;A=Brand";v="24", "Microsoft Edge";v="128"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
}
file=open("passwd.js","r",encoding="utf-8").read()
ctx=execjs.compile(file)
pwd=ctx.call('pwd','123456')
params = {
    'callback': 'jQuery1710600139219327728_1727958846494',
    'encrypt': '1',
    'uname': '15899999999',
    'password': pwd,
    'remember': 'checked',
    'ckcode': 'ctc3',
    '_': '1727962743962',
}

response = requests.get('https://passport.gm99.com/login/login3', params=params, cookies=cookies, headers=headers)
print(response.text.encode("utf-8").decode("unicode_escape"))