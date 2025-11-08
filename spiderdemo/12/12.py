import time
import requests
import ddddocr
import base64
from PIL import Image
from io import BytesIO
import httpx

ocr = ddddocr.DdddOcr(show_ad=False)
headers = {
    'accept': 'application/json, text/javascript, */*; q=0.01',
    'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
    'priority': 'u=1, i',
    # 'referer': 'https://www.spiderdemo.cn/captcha/cap2_challenge/?challenge_type=cap2_challenge',
    'sec-ch-ua': '"Microsoft Edge";v="141", "Not?A_Brand";v="8", "Chromium";v="141"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36 Edg/141.0.0.0',
    'x-requested-with': 'XMLHttpRequest',
}
cookies={
    'sessionid': ''
}
# ------------------- 全局 session -------------------
# session = requests.Session()
session=httpx.Client(http2=True)

session.headers.update(headers)
session.cookies.update(cookies)


# ------------------- 获取验证码并识别 -------------------
def getimg():
    """获取验证码并用 ddddocr 识别"""
    url=f'https://www.spiderdemo.cn/captcha/api/cap2_challenge/captcha_image/?t={str(int(time.time() * 1000))}'
    print(url)
    resp = session.get(url)
    resp.raise_for_status()
    data = resp.json()
    oooo = data['T']
    ttt=data['F']
    if len(oooo)>len(ttt):
        pic_base64=oooo
    else:
        pic_base64=ttt
    if "," in pic_base64:
        pic_base64 = pic_base64.split(",")[1]
    pic_bytes = base64.b64decode(pic_base64)
    image = Image.open(BytesIO(pic_bytes))
    image.save("test.gif")
    # 打开 GIF，取第一帧直接识别
    with Image.open(BytesIO(pic_bytes)) as img:
        total_frames = getattr(img, "n_frames", 1)
        for frame in range(total_frames):
            img.seek(frame)
            buffer = BytesIO()
            img.save(buffer, format="PNG")
            img_bytes = buffer.getvalue()
            code = ocr.classification(img_bytes)
            if len(code) == 4:  # 假设验证码是 4 位
                print(f"第 {frame + 1} 帧识别成功：{code}")
                return code

    code = ocr.classification(img_bytes)
    print(f"识别验证码：{code}")
    return code


# ------------------- 初始化第一页 -------------------
def oneurl():
    resp = session.get('https://www.spiderdemo.cn/captcha/api/cap2_challenge/init/?challenge_type=cap2_challenge')
    resp.raise_for_status()
    res = resp.json()
    page_data = res.get('page_data', [])
    print(f"第一页数据获取成功，共 {len(page_data)} 条")
    return page_data




# ------------------- 分页请求 -------------------
def getnum(page_num, max_retry=10, delay=0.5):
    for attempt in range(1, max_retry + 1):
        try:
            # getimg()
            yzm = getimg()  # 每次重试都获取新的验证码
            # time.sleep(1)
            payload = {
                'captcha_input': yzm.lower(),
                'page_num': str(page_num),
                'challenge_type': 'cap2_challenge'
            }
            session.headers.clear()
            headers = {
                'accept': 'application/json, text/javascript, */*; q=0.01',
                'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
                'content-type': 'application/json',
                'origin': 'https://www.spiderdemo.cn',
                'referer': 'https://www.spiderdemo.cn/captcha/cap2_challenge/?challenge_type=cap2_challenge',
                'sec-ch-ua': '"Microsoft Edge";v="141", "Not?A_Brand";v="8", "Chromium";v="141"',
                'sec-ch-ua-platform': '"Windows"',
                'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36 Edg/141.0.0.0',
                'x-requested-with': 'XMLHttpRequest',
            }
            session.headers.update(headers)
            resp = session.post('https://www.spiderdemo.cn/captcha/api/cap1_challenge/page/',json=payload)
            resp.raise_for_status()
            res = resp.json()

            if not res.get('page_data'):
                raise ValueError(f"响应中无 page_data：{res}")
            print(f"✅ 第 {attempt} 次成功（页码 {page_num}）")
            return res['page_data']

        except Exception as e:
            print(f"❌ 第 {attempt} 次失败（页码 {page_num}）：{e}")
            time.sleep(delay)
    print(f"🚨 达到最大重试次数，页码 {page_num} 返回空列表")
    return []


# ------------------- 主程序 -------------------
if __name__ == '__main__':
    allnums = []

    # 第一页
    allnums.extend(oneurl())

    # 后续分页
    for i in range(2, 101):
        data = getnum(i)
        allnums.extend(data)
        print(f"当前累计条数：{len(allnums)}")

    print(f"总数据量：{len(allnums)}")

    # 求和
    nidnum = sum(int(x) for x in allnums if str(x).isdigit())
    print(f"所有数字总和：{nidnum}")
