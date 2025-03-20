import requests



heard={
    "User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36 Edg/124.0.0.0",
}
url="https://pl.qcheng.cc/Cache/mytv/f269ea1313657b16e06ac48d826db0db.m3u8"
res=requests.get(url=url,headers=heard).text
#以二进制追加
file=open('mm.mp4', 'ab+')

for i in res.split("\n"):
    if "https:" in i:
        he=requests.get(url=i,headers=heard)
        new_content = he.content[486:]
        file.write(new_content)
        #删除视频伪装字节
        #if len(he.content) > 486:
            #new_content = he.content[486:]
            # 保存修改后的内容到新文件
            #with open('mm.mp4', 'wb') as file:
            #    file.write(new_content)
        #else:
        #    print("文件太小，无法删除486个字节。")

file.close()

