import requests

# cookies = {
#     'btoken': 'FIR4919J0NMKK85JH3VJ0Z3E8832BCDC',
# }

headers = {
    'accept': 'application/json',
    'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
    'cache-control': 'no-cache',
    'content-type': 'application/json',
    # 'cookie': 'btoken=FIR4919J0NMKK85JH3VJ0Z3E8832BCDC',
    'origin': 'https://www.xiniudata.com',
    'pragma': 'no-cache',
    'priority': 'u=1, i',
    'referer': 'https://www.xiniudata.com/industry/newest?from=data',
    'sec-ch-ua': '"Microsoft Edge";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36 Edg/131.0.0.0',
}

json_data = {
    'payload': 'LBc3V0I6ZGB5bXsxTCQnPRBuAgQVcDhbICcmb2x3AjI=',
    'sig': 'FCC4B7EA5867C7C82AE4CD3E1A7A979D',
    'v': 1,
}

response = requests.post(
    'https://www.xiniudata.com/api2/service/x_service/person_industry_list/list_industries_by_sort',
    # cookies=cookies,
    headers=headers,
    json=json_data,
)

print(response.text)