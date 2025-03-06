import requests

cookies = {
    '71afaa6c6fb1a8f737d0680d1942ccad' : '91512a19534df5af98826d3d7353f218',
}

headers = {
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
    'Cache-Control': 'no-cache',
    'Pragma': 'no-cache',
    'Proxy-Connection': 'keep-alive',
    'Referer': 'http://www.tvyb03.com/vod/search.html?wd=%E4%BC%99%E8%AE%B0%E5%8A%9E%E5%A4%A7%E4%BA%8B&submit=',
    'Upgrade-Insecure-Requests': '1',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36 Edg/131.0.0.0',
}

response = requests.get(
    'http://www.tvyb03.com/vod/search/wd/%E4%BD%A0%E6%98%AF%E6%88%91%E7%9A%84%E5%9F%8E%E6%B1%A0%E8%90%A5%E5%9E%92.html',
    cookies=cookies,
    headers=headers,
    verify=False,
)
print(response.text)