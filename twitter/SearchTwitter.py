import time
from urllib.parse import quote
import requests
import json
import threading
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import create_engine
from sqlalchemy import Column, Integer, String, Date, UnicodeText,JSON,VARCHAR
from sqlalchemy.orm import sessionmaker
from datetime import datetime
engine=create_engine("mysql+pymysql://root:root@127.0.0.1:3306/twitter")

# #创建表
Base = declarative_base()
class TweetText(Base):
    __tablename__ ='TweetText'
    #创建字段
    id = Column(Integer, primary_key=True)#主键
    # 推文内容
    full_text = Column(VARCHAR(256),nullable=True)
    # 推文id
    id_str = Column(VARCHAR(30),nullable=True)
    # 用户id
    screen_name = Column(VARCHAR(30),nullable=True)
    # 用户名称
    name=Column(VARCHAR(256),nullable=True)
    #被关注人数
    followers_count= Column(Integer,nullable=True)
    #正在关注人数
    friends_count= Column(Integer,nullable=True)
    # 推文查看
    count= Column(Integer,nullable=True)
    #推文喜欢
    favorite_count=Column(Integer,nullable=True)
    #回复数
    reply_count=Column(Integer,nullable=True)
    #转发数
    retweet_count=Column(Integer,nullable=True)
    #判断有无视频图片
    media=Column(VARCHAR(6),nullable=False)
class mediaText(Base):
  __tablename__ = 'mediaText'
  # 创建字段
  id = Column(Integer, primary_key=True)  # 主键
  # 推文id
  id_str = Column(VARCHAR(30), nullable=True)  # 是否可以为空
  # 用户id
  screen_name = Column(VARCHAR(30), nullable=True)
  # 用户名称
  name = Column(VARCHAR(256), nullable=True)
  # pic地址
  pic=Column(VARCHAR(256), nullable=True)
  # vid地址
  video=Column(VARCHAR(256), nullable=True)
  # 下载下来的地址
  Adpath=Column(VARCHAR(256), nullable=True)
#初始化数据库
def init_db():
  Base.metadata.create_all(engine)
#删除数据库
def drop_db():
  Base.metadata.drop_all(engine)


class Tweet:
  #搜索关键字，cookies路径
  def __init__(self,searchword,cookiespath,ifmysql):
    self.searchword=searchword
    self.cookiespath=cookiespath
    self.header={}
    # self.ifdownload=ifdownload
    self.ifmysql=ifmysql
  def TopostHeader(self):
    #写header
    with open(self.cookiespath, "r", encoding="utf-8") as f:
      cook=f.read().strip()
      tok=cook.strip().split(";")
      xcsrftoken=tok[11].split("=")[1]
    #x-csrf-token在cookies中
    header = {
      'x-twitter-active-user': 'yes',
      'x-twitter-auth-type': 'OAuth2Session',
      'x-twitter-client-language': 'zh-cn',
      'x-csrf-token': str(xcsrftoken),
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36 Edg/128.0.0.0',
      "Cookie": str(cook),
      'authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA',
    }
    self.header=header
  def ToSearch(self):
    # 创建session
    Session = sessionmaker(bind=engine)
    session = Session()
    sw=quote(self.searchword,"utf-8")
    data='variables=%7B%22rawQuery%22%3A%22'+sw+'%22%2C%22count%22%3A20%2C%22querySource%22%3A%22typed_query%22%2C%22product%22%3A%22Top%22%7D&features=%7B%22rweb_tipjar_consumption_enabled%22%3Atrue%2C%22responsive_web_graphql_exclude_directive_enabled%22%3Atrue%2C%22verified_phone_label_enabled%22%3Afalse%2C%22creator_subscriptions_tweet_preview_api_enabled%22%3Atrue%2C%22responsive_web_graphql_timeline_navigation_enabled%22%3Atrue%2C%22responsive_web_graphql_skip_user_profile_image_extensions_enabled%22%3Afalse%2C%22communities_web_enable_tweet_community_results_fetch%22%3Atrue%2C%22c9s_tweet_anatomy_moderator_badge_enabled%22%3Atrue%2C%22articles_preview_enabled%22%3Atrue%2C%22responsive_web_edit_tweet_api_enabled%22%3Atrue%2C%22graphql_is_translatable_rweb_tweet_is_translatable_enabled%22%3Atrue%2C%22view_counts_everywhere_api_enabled%22%3Atrue%2C%22longform_notetweets_consumption_enabled%22%3Atrue%2C%22responsive_web_twitter_article_tweet_consumption_enabled%22%3Atrue%2C%22tweet_awards_web_tipping_enabled%22%3Afalse%2C%22creator_subscriptions_quote_tweet_preview_enabled%22%3Afalse%2C%22freedom_of_speech_not_reach_fetch_enabled%22%3Atrue%2C%22standardized_nudges_misinfo%22%3Atrue%2C%22tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled%22%3Atrue%2C%22rweb_video_timestamps_enabled%22%3Atrue%2C%22longform_notetweets_rich_text_read_enabled%22%3Atrue%2C%22longform_notetweets_inline_media_enabled%22%3Atrue%2C%22responsive_web_enhance_cards_enabled%22%3Afalse%7D'
    url='https://x.com/i/api/graphql/UN1i3zUiCWa-6r-Uaho4fw/SearchTimeline?'+data
    self.header['referer']='https://x.com/search?q='+sw+'&src=typed_query'
    try:
      res = requests.get(url, headers=self.header).json()
      with open(self.searchword+".json","w",encoding="utf-8") as f:
        json.dump(res,f)
      datas=res['data']['search_by_raw_query']['search_timeline']['timeline']['instructions'][0]['entries']
      for i in range(21):
        print(f"开始第{i}个json")
        try:
          print(f"进入第{i}个json")
          # 推文内容
          full_text=datas[i]['content']['itemContent']['tweet_results']['result']['legacy']['full_text']
          # 推文id
          id_str=datas[i]['content']['itemContent']['tweet_results']['result']['legacy']['id_str']
          # 用户id
          screen_name=datas[i]['content']['itemContent']['tweet_results']['result']['core']['user_results']['result']['legacy']['screen_name']
          # 用户名称
          name=datas[i]['content']['itemContent']['tweet_results']['result']['core']['user_results']['result']['legacy']['name']
          # 被关注人数
          followers_count=datas[i]['content']['itemContent']['tweet_results']['result']['core']['user_results']['result']['legacy']['followers_count']
          # 正在关注人数
          friends_count=datas[i]['content']['itemContent']['tweet_results']['result']['core']['user_results']['result']['legacy']['friends_count']
          # 推文查看
          count=datas[i]['content']['itemContent']['tweet_results']['result']['views']['count']
          # 推文喜欢
          favorite_count=datas[i]['content']['itemContent']['tweet_results']['result']['legacy']['favorite_count']
          # 回复数
          reply_count=datas[i]['content']['itemContent']['tweet_results']['result']['legacy']['reply_count']
          # 转发数
          retweet_count=datas[i]['content']['itemContent']['tweet_results']['result']['legacy']['retweet_count']
          # 推文视频或者图片，需要判断是否为空
          try:
            print("进入media")
            media=datas[i]['content']['itemContent']['tweet_results']['result']['legacy']['entities']['media']
            num=len(media)
            for i in range(num+1):
              print(f"进入第{i}个media")
              pic=media[i]['media_url_https']
              print(pic)
              Adpath=self.download(pic,str(id_str)+'+'+str(i)+'+pic.jpg')
              obja = mediaText(id_str=id_str, screen_name=screen_name, name=name, pic=pic, Adpath=Adpath)
              session.add(obja)
              session.commit()
              try:
                print(f"进入视频")
                vs=media[i]['video_info']['variants']
                nv=len(vs)
                for i in range(nv+1):
                  try:
                    video=vs[i]['url']
                    print(video)
                    objb = mediaText(id_str=id_str, screen_name=screen_name, name=name, video=video, Adpath=Adpath)
                    session.add(objb)
                    session.commit()
                    Adpath = self.download(video, str(id_str) + '+' + str(i) + '+video.mp4')
                    t2 = threading.Thread(target=Adpath.run, args=(), name="video下载线程")
                    t2.start()

                  except Exception as e:
                    print(e)
              except Exception as e:
                print(f"跳过视频")
                print(e)
              objs=TweetText(full_text=full_text,id_str=id_str,screen_name=screen_name,name=name,followers_count=followers_count,friends_count=friends_count,count=count,favorite_count=favorite_count,reply_count=reply_count,retweet_count=retweet_count,media='True')
              session.add(objs)
              session.commit()
          except:
            print(f"跳过media")
            obj=TweetText(full_text=full_text,id_str=id_str,screen_name=screen_name,name=name,followers_count=followers_count,friends_count=friends_count,count=count,favorite_count=favorite_count,reply_count=reply_count,retweet_count=retweet_count,media='False')
            session.add(obj)
            session.commit()
        except Exception as e:
          print(f"跳过第{i}个json")
          print(e)
      # self.id_str=ids
      # print(self.id_str)
      # 翻页在data中写入"cursor"，尚未写
      session.commit()
    except Exception as e:
      print(e)

  def download(self,downurl,namepath):
    header = {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36 Edg/124.0.0.0"
    }
    res=requests.get(downurl,headers=header)
    with open(namepath,"ab") as f:
      f.write(res.content)
    f.close()
    return namepath

  def run(self):
    ifmysql=self.ifmysql
    # ifdownload=self.ifdownload
    if ifmysql==True:
      init_db()
      # 在运行拼接header
      self.TopostHeader()
      # 搜索爬取
      self.ToSearch()
    else:
      # 在运行拼接header
      self.TopostHeader()
      # 搜索爬取
      self.ToSearch()

if __name__ == '__main__':
  ifmysql = False
  # drop_db()
  searchword="女高中生"
  cookiespath='cookx.txt'
  # ifdownload= True
  tt = Tweet(searchword, cookiespath,ifmysql)
  tt.run()






