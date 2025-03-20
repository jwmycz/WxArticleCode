import requests
import re
def ALL():
    session=requests.Session()
    data='斗破苍穹'
    all={}
    name=[]
    header={"user-agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36 Edg/127.0.0.0"}
    url1='https://www.3bqg.cc/user/hm.html?q='+data
    url='https://www.3bqg.cc/user/search.html?q='+data
    session.get(url1,headers=header)
    r=session.get(url,headers=header).json()

    for i in r:
        print(i['articlename'])
        if any(word in i['articlename'] for word in ['淫', '虐', '欲', '艳', '色', '情', '荡','h','献身']):
            continue
        else:
            all[i['articlename']]=i['url_list']
            name.append(i['articlename'])
    print(name)
    return [all,name]

def downurl(q):
    url='https://www.3bqg.cc/'+q
    session = requests.Session()
    header = {"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36 Edg/127.0.0.0"}
    r=session.get(url, headers=header).text
    reurl='<dd><a href =".*">(.*?)</a></dd>'
    rename='<dd><a href ="(.*?)">.*</a></dd>'
    res=re.compile(reurl).findall(r)
    resname=re.compile(rename).findall(r)
    # print(res)
    # print(resname)
    ALLurl={}
    for i in range(len(res)):
        link=res[i]
        title=resname[i]
        # print(link)
        # print(title)
        # txtnote()
        ALLurl[link] = title
        # ALLurl[title]=link
    print(ALLurl)
    return ALLurl
def txtnote():
    url='https://www.bi02.cc'+'/kan/45755/1311.html'

    session = requests.Session()
    header = {"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36 Edg/127.0.0.0"}
    session.headers=header

    r=session.get(url).text
    reurl='<div id="chaptercontent" class="Readarea ReadAjax_content">(.*?)<p class="readinline">'
    res=re.compile(reurl,re.S).findall(r)[0]
    one=res.replace('\u3000\u3000','\n').replace('<br /><br />','\n').replace('请收藏本站：https://www.bi02.cc。笔趣阁手机版：https://m.bi02.cc','\n')
    # two=one.replace('请收藏本站：https://www.bi02.cc。笔趣阁手机版：https://m.bi02.cc','\n')
    print(one)

if __name__ == '__main__':
    ALL()
