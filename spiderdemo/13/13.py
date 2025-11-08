import base64
import io
import time
from PIL import Image
import httpx
import ddddocr
cookies = {
    'sessionid': ''
}
ocrt = ddddocr.DdddOcr(beta=True,show_ad=False)
requests=httpx.Client(http2=True,cookies=cookies)
def getimge():

    headers = {
        'accept': 'application/json, text/javascript, */*; q=0.01',
        'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
        'cache-control': 'no-cache',
        'pragma': 'no-cache',
        'priority': 'u=1, i',
        'referer': 'https://www.spiderdemo.cn/captcha/cap3_challenge/?challenge_type=cap3_challenge',
        'sec-ch-ua': '"Microsoft Edge";v="141", "Not?A_Brand";v="8", "Chromium";v="141"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36 Edg/141.0.0.0',
        'x-requested-with': 'XMLHttpRequest',
    }
    params = {
        't': str(int(time.time()*1000)),
    }

    response = requests.get(
        'https://www.spiderdemo.cn/captcha/api/cap3_challenge/captcha_image/',
        params=params,
        headers=headers,
    )
    # print(response.text)
    data_json=response.json()
    images = []
    for item in data_json["data"]:
        img_data = base64.b64decode(item)
        img = Image.open(io.BytesIO(img_data))
        images.append(img)

    # ======= 获取单个切片的尺寸 =======
    width, height = images[0].size

    # ======= 拼接图片（横向拼接）=======
    total_width = width * len(images)
    new_image = Image.new('RGB', (total_width, height))

    for i, img in enumerate(images):
        new_image.paste(img, (i * width, 0))

    # ======= 保存拼接结果 =======
    new_image.save("captcha_image.png")

    img = Image.open('captcha_image.png')

    # 坐标根据你的需求修改
    crop_box = (53, 20, 95, 36)
    cropped_img = img.crop(crop_box)

    # 3️⃣ 放大图片
    scale_factor = 2  # 放大 2 倍
    width, height = cropped_img.size
    resized_img = cropped_img.resize((width * scale_factor, height * scale_factor), Image.LANCZOS)

    # 4️⃣ 保存放大后的图片（可选，调试用）
    resized_img.save("resized.png")
    with open("resized.png", "rb") as f:
        img_bytes = f.read()
    yzm2 = ocrt.classification(img_bytes)
    print(yzm2)
    if '+' in yzm2:
        yzmlist = yzm2.split('+')
        result=int(yzmlist[0])+int(yzmlist[1])
    elif '-' in yzm2:
        yzmlist = yzm2.split('-')
        result=int(yzmlist[0])-int(yzmlist[1])
    elif 'x' in yzm2:
        yzmlist = yzm2.split('x')
        result=int(yzmlist[0])*int(yzmlist[1])
    elif '/' in yzm2:
        yzmlist = yzm2.split('/')
        result=int(yzmlist[0])/int(yzmlist[1])
    elif '*' in yzm2:
        yzmlist = yzm2.split('*')
        result=int(yzmlist[0])*int(yzmlist[1])
    else:
        result=0
    return result
def onepage():
    headers = {
        'accept': 'application/json, text/javascript, */*; q=0.01',
        'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
        'cache-control': 'no-cache',
        'content-type': 'application/json',
        'origin': 'https://www.spiderdemo.cn',
        'pragma': 'no-cache',
        'priority': 'u=1, i',
        'referer': 'https://www.spiderdemo.cn/captcha/cap3_challenge/?challenge_type=cap3_challenge',
        'sec-ch-ua': '"Microsoft Edge";v="141", "Not?A_Brand";v="8", "Chromium";v="141"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36 Edg/141.0.0.0',
        'x-requested-with': 'XMLHttpRequest',
    }

    params = {
        'challenge_type': 'cap3_challenge',
    }

    response = requests.get(
        'https://www.spiderdemo.cn/captcha/api/cap3_challenge/init/',
        params=params,
        headers=headers,
    )
    res = response.json()
    page_data = res['page_data']
    print(response.text)
    return page_data


def getnum(nums, max_retry=10, delay=2):
    """
    提交验证码和页码，失败自动重试（每次重试重新识别验证码）
    """
    for attempt in range(1, max_retry + 1):
        try:
            # 每次重试都重新获取验证码
            yzm = getimge()

            headers = {
                'accept': 'application/json, text/javascript, */*; q=0.01',
                'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
                'cache-control': 'no-cache',
                'content-type': 'application/json',
                'origin': 'https://www.spiderdemo.cn',
                'pragma': 'no-cache',
                'priority': 'u=1, i',
                'referer': 'https://www.spiderdemo.cn/captcha/cap3_challenge/?challenge_type=cap3_challenge',
                'sec-ch-ua': '"Microsoft Edge";v="141", "Not?A_Brand";v="8", "Chromium";v="141"',
                'sec-ch-ua-mobile': '?0',
                'sec-ch-ua-platform': '"Windows"',
                'sec-fetch-dest': 'empty',
                'sec-fetch-mode': 'cors',
                'sec-fetch-site': 'same-origin',
                'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36 Edg/141.0.0.0',
                'x-requested-with': 'XMLHttpRequest',
                # 'cookie': 'sessionid=cjomi84jr3x0r0boau4r978b9sk0qjgy',
            }


            json_data = {
                'captcha_input':str(yzm),
                'page_num': nums,
                'challenge_type': 'cap3_challenge',
            }
            response = requests.post(
                'https://www.spiderdemo.cn/captcha/api/cap3_challenge/page/',
                headers=headers,
                json=json_data,
                timeout=10
            )

            response.raise_for_status()
            res = response.json()

            # 验证返回结果是否正确
            if 'page_data' not in res:
                raise ValueError(f"响应中无 page_data：{res}")

            print(f"✅ 第 {attempt} 次成功")
            return res['page_data']

        except Exception as e:
            print(f"❌ 第 {attempt} 次失败：{e}")
            if attempt < max_retry:
                print("⏳ 等待重试中...\n")
                time.sleep(delay)
            else:
                print("🚨 达到最大重试次数，返回 None")
                return None
if __name__ == '__main__':
    onedata=onepage()
    allnums = []
    allnums.extend(onedata)
    for i in range(2, 101):
        data = getnum(i)
        allnums.extend(data)
    print(allnums)
    # allnums=[5647, 3185, 7879, 5983, 6545, 9897, 4099, 5491, 2658, 3850, 5608, 2217, 3430, 4278, 6664, 8308, 6589, 7851, 2250, 2026, 6606, 4508, 9766, 7090, 5524, 9493, 1436, 4257, 8357, 6183, 3295, 5688, 9280, 3044, 4100, 7687, 5800, 1884, 7540, 3354, 1378, 8532, 4368, 9507, 2563, 6028, 1236, 7872, 3586, 9775, 3833, 5548, 1292, 1499, 4646, 9495, 7827, 8599, 6035, 6318, 5836, 2644, 1653, 3516, 6802, 9399, 8798, 7562, 1451, 1021, 7207, 6120, 2094, 5084, 6590, 2040, 6408, 1317, 6099, 9867, 6322, 5832, 4278, 9759, 7529, 1396, 4854, 5493, 7927, 4635, 8214, 3650, 5531, 4900, 1250, 7427, 1500, 2529, 8657, 9243, 6780, 1054, 1611, 7466, 3915, 7220, 9993, 3761, 3303, 8917, 5032, 3206, 6946, 9312, 2159, 9702, 7285, 3548, 4070, 9096, 4497, 4242, 4346, 1638, 4377, 5738, 7864, 1617, 9133, 2210, 4960, 6250, 5265, 2603, 3520, 3095, 5591, 3367, 5100, 8185, 2653, 6689, 4386, 7052, 9088, 8684, 9030, 3853, 7731, 7154, 3952, 1472, 7680, 3582, 7668, 9375, 3568, 1327, 3751, 6080, 6764, 9379, 5913, 6959, 1589, 9409, 8066, 6643, 2820, 5765, 7016, 1320, 9570, 6656, 3628, 3530, 4049, 5548, 9114, 6423, 7625, 3577, 6946, 4224, 6301, 9761, 2184, 7062, 7314, 2310, 6896, 7435, 7310, 9507, 3231, 8951, 7534, 5045, 9531, 8237, 7511, 7634, 2384, 9854, 5689, 8606, 5464, 6289, 7726, 5567, 4479, 5173, 8075, 2546, 1540, 7023, 2442, 4428, 7334, 3308, 2135, 3874, 4596, 3083, 6763, 8407, 1112, 6531, 1124, 1349, 8498, 2361, 2687, 2850, 4361, 9091, 1109, 3955, 4138, 2651, 6954, 9630, 2498, 6800, 9181, 8958, 8175, 3465, 5579, 6321, 2797, 3431, 1954, 9170, 5821, 8521, 3554, 8697, 8501, 7105, 1733, 5259, 9195, 3826, 7842, 2845, 2032, 7672, 3817, 3226, 7151, 9120, 4208, 2054, 6898, 1741, 6041, 3085, 9601, 4163, 5372, 7511, 8929, 1949, 2072, 2817, 7829, 1487, 8166, 8503, 8566, 1084, 1689, 3158, 1714, 8050, 7017, 9711, 6241, 2686, 3863, 4842, 4680, 9416, 6195, 4141, 6453, 3049, 9982, 1515, 5839, 5870, 9426, 9233, 7014, 4453, 3570, 9438, 9717, 1261, 6789, 3123, 7120, 3022, 6338, 4360, 6948, 9715, 9449, 9145, 6155, 8793, 5120, 8309, 2215, 1579, 4298, 1539, 5742, 5316, 8822, 7229, 1867, 8767, 1978, 4076, 7950, 3507, 5147, 8465, 5674, 6157, 6666, 4208, 8593, 6176, 5395, 5529, 7025, 3314, 7032, 7833, 9405, 1738, 5108, 1366, 3054, 9247, 4355, 7350, 2499, 2565, 2286, 3778, 5509, 1191, 3460, 1293, 2477, 8072, 5256, 2400, 8270, 8354, 6431, 4986, 1744, 9829, 6442, 1938, 9365, 5745, 9133, 4248, 6765, 3187, 8212, 7297, 4113, 2412, 4427, 6015, 1504, 7136, 2307, 2922, 6990, 1228, 1404, 1950, 3202, 9219, 7161, 3272, 3851, 8108, 1422, 7000, 6145, 9019, 9901, 7084, 1406, 4669, 1399, 1695, 2060, 3387, 7857, 2490, 5230, 6002, 4123, 6713, 5150, 5781, 3058, 4844, 6120, 4517, 6751, 5553, 4589, 1597, 9006, 4530, 2075, 9006, 9764, 3951, 6923, 3004, 6119, 8040, 3283, 5036, 4858, 9699, 3837, 3574, 5304, 8568, 7707, 2915, 2307, 4615, 9242, 8772, 9941, 2332, 7703, 7145, 2057, 3389, 1966, 5326, 1656, 4263, 7600, 9132, 4543, 6304, 7486, 9235, 4934, 3491, 6787, 3448, 6975, 8025, 8869, 2433, 5937, 3383, 7769, 6381, 1292, 8420, 5250, 3434, 1645, 7161, 8590, 7012, 4954, 1604, 8500, 9336, 9939, 2365, 2052, 4649, 8203, 2819, 9741, 5834, 6057, 5778, 6214, 8662, 4793, 5613, 1412, 8891, 9975, 2595, 7250, 9030, 8887, 4065, 9366, 4750, 2818, 6827, 4901, 3905, 5351, 4683, 5783, 3024, 3166, 9338, 8127, 8137, 5209, 1021, 4712, 2748, 3119, 4276, 1839, 6766, 4861, 3482, 8623, 5112, 1116, 2869, 7567, 9990, 1917, 2228, 1141, 1241, 1835, 1919, 7690, 7567, 6770, 6855, 8044, 8517, 4172, 5827, 3617, 1019, 4441, 5863, 2893, 2235, 1042, 1107, 9056, 6100, 4199, 8762, 1451, 4463, 9442, 5193, 8619, 9792, 7269, 1450, 3495, 5970, 9070, 1785, 9667, 4611, 7766, 9429, 9246, 7497, 5848, 8945, 4848, 6232, 1070, 7774, 1702, 4976, 8317, 6414, 6522, 4833, 1712, 8086, 3069, 7491, 8432, 7845, 1801, 8576, 5826, 6726, 5471, 4080, 3516, 7382, 1200, 9572, 1986, 4872, 5518, 9999, 3603, 1842, 5723, 6327, 9736, 3679, 6321, 7282, 3537, 7818, 9484, 9876, 8001, 1093, 3902, 3121, 3042, 5749, 2216, 5132, 2028, 1398, 9957, 8154, 2223, 8189, 4608, 1423, 1878, 7143, 2408, 7207, 6162, 6675, 5967, 3087, 4845, 2601, 4995, 7778, 7119, 2044, 2260, 8519, 8241, 2659, 8678, 3205, 7482, 1173, 4985, 6944, 5557, 2683, 5557, 7124, 4227, 9395, 2693, 5514, 1074, 5646, 1576, 5280, 2340, 6580, 5274, 8897, 3736, 7400, 3042, 4459, 5705, 8423, 2405, 2179, 1366, 4870, 2890, 9452, 3286, 2489, 4823, 7640, 4129, 2519, 4184, 1913, 5624, 8404, 2843, 8602, 1693, 8539, 7499, 8974, 2785, 3267, 1385, 7174, 2748, 9189, 2208, 2467, 8433, 3850, 8454, 5803, 3753, 9696, 8024, 4513, 3158, 7210, 2165, 3366, 8363, 3105, 5174, 7532, 5737, 4550, 1702, 1280, 5661, 5325, 7952, 6791, 3060, 8177, 7242, 6699, 5439, 6575, 9386, 7382, 2209, 6597, 3506, 4598, 6144, 9557, 3868, 2252, 9652, 1096, 8228, 7855, 8969, 4527, 2922, 9679, 1754, 6709, 8009, 7806, 9448, 8696, 2486, 9746, 3696, 8695, 2452, 4158, 1018, 1465, 1633, 6100, 8928, 4552, 7122, 9590, 3025, 3764, 7221, 5953, 7238, 3397, 6776, 1470, 2965, 1892, 2113, 2341, 3563, 6897, 2957, 1829, 7382, 2066, 2668, 6590, 2595, 3937, 3553, 3221, 1348, 4236, 5078, 6993, 4965, 3165, 1740, 3215, 9987, 6232, 1427, 7751, 7293, 1832, 6596, 1683, 8854, 9446, 2686, 8062, 9931, 6677, 7515, 7102, 2626, 6036, 3889, 9325, 7218, 8224, 3430, 1668, 3699, 6530, 5973, 2424, 5845, 9726, 8899, 2987, 1408, 7119, 7051, 4325, 4594, 4044, 1643, 5059, 1166, 8021, 4859, 8305, 5854, 6089, 2964, 9165, 5712, 3195, 8575, 8658, 4915, 6766, 7794, 3950, 2375, 1771, 7253, 9489, 8573, 9115, 5183, 3127, 3854, 7139, 4906, 4144, 3611, 1375, 4230, 4782, 5863, 8564, 2547, 4803, 7141, 6362, 9376, 5092, 8628, 3648, 1204, 9460, 3965, 3637, 8684, 7622, 4152, 9760, 2391, 4647, 2465, 8393, 5003, 4797, 4138, 3341, 6055, 7836, 6815, 3588, 2584, 2163, 2256, 4599, 9035, 2414, 3122, 1033, 8611, 4624, 3585, 5928, 4538, 3654, 3733, 6113, 6794, 2612, 7149, 9062, 6684, 1434, 1588, 3204, 1873, 3906, 6803, 7825, 2407, 3225, 1739, 3788, 9496, 8061, 4286, 9869, 8912, 4383, 3628, 9730, 3727, 4633, 8292, 4414, 5791, 9242, 4596, 1072, 8939, 7036, 9383, 4327, 1324, 1803, 3257, 7551, 9878, 9104]
    nidnum = 0
    for i in allnums:
        newi = int(i)
        nidnum = nidnum + newi
    print(nidnum)

