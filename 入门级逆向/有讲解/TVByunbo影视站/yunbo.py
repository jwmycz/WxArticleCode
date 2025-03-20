import requests
heard={
    "User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36 Edg/124.0.0.0"
}
url="https://pl.qcheng.cc/Cache/mytv/f269ea1313657b16e06ac48d826db0db.m3u8"
req=requests.get(url=url,headers=heard).text
# print(req)
file=open("vide.mp4","ab+")
for i in req.split("\n"):
    if "https://" in i:
        print(i)
        p=requests.get(url=i,headers=heard).content
        # with open("1.png","wb") as f:
        #     f.write(p)
        file.write(p[486:])