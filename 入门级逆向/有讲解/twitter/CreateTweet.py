import time
from urllib.parse import quote
import requests
import json
from Logcookies import twitter
import threading
class Tweet:
  #搜索关键字，cookies路径，发帖文字路径，用户名密码路径,回帖文字
  def __init__(self,searchword,cookiespath,tweettextpath,userpath,replyword):

    self.searchword=searchword
    self.cookiespath=cookiespath
    self.tweettextpath=tweettextpath
    self.header={}
    self.id_str = []
    self.userpath=userpath
    self.replyword=replyword
  def topostheader(self):
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
  def tosearch(self):
    #搜索关键字
    ids=[]
    sw=quote(self.searchword,"utf-8")
    data='variables=%7B%22rawQuery%22%3A%22'+sw+'%22%2C%22count%22%3A20%2C%22querySource%22%3A%22typed_query%22%2C%22product%22%3A%22Top%22%7D&features=%7B%22rweb_tipjar_consumption_enabled%22%3Atrue%2C%22responsive_web_graphql_exclude_directive_enabled%22%3Atrue%2C%22verified_phone_label_enabled%22%3Afalse%2C%22creator_subscriptions_tweet_preview_api_enabled%22%3Atrue%2C%22responsive_web_graphql_timeline_navigation_enabled%22%3Atrue%2C%22responsive_web_graphql_skip_user_profile_image_extensions_enabled%22%3Afalse%2C%22communities_web_enable_tweet_community_results_fetch%22%3Atrue%2C%22c9s_tweet_anatomy_moderator_badge_enabled%22%3Atrue%2C%22articles_preview_enabled%22%3Atrue%2C%22responsive_web_edit_tweet_api_enabled%22%3Atrue%2C%22graphql_is_translatable_rweb_tweet_is_translatable_enabled%22%3Atrue%2C%22view_counts_everywhere_api_enabled%22%3Atrue%2C%22longform_notetweets_consumption_enabled%22%3Atrue%2C%22responsive_web_twitter_article_tweet_consumption_enabled%22%3Atrue%2C%22tweet_awards_web_tipping_enabled%22%3Afalse%2C%22creator_subscriptions_quote_tweet_preview_enabled%22%3Afalse%2C%22freedom_of_speech_not_reach_fetch_enabled%22%3Atrue%2C%22standardized_nudges_misinfo%22%3Atrue%2C%22tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled%22%3Atrue%2C%22rweb_video_timestamps_enabled%22%3Atrue%2C%22longform_notetweets_rich_text_read_enabled%22%3Atrue%2C%22longform_notetweets_inline_media_enabled%22%3Atrue%2C%22responsive_web_enhance_cards_enabled%22%3Afalse%7D'
    url='https://x.com/i/api/graphql/UN1i3zUiCWa-6r-Uaho4fw/SearchTimeline?'+data
    self.header['referer']='https://x.com/search?q='+sw+'&src=typed_query'
    try:
      res = requests.get(url, headers=self.header).json()
      with open(self.searchword+".json","w",encoding="utf-8") as f:
        json.dump(res,f)
      for i in range(20):
        stra=res['data']['search_by_raw_query']['search_timeline']['timeline']['instructions'][0]['entries'][i]['entryId'].split("-")
        #获取推文id存到id_str中
        ids.append(stra[1])
      self.id_str=ids
      print(self.id_str)
      # 翻页在data中写入"cursor"，尚未写

    except Exception as e:
      print(e)
  def toposttext(self):
    # 批量发帖
    with open(self.tweettextpath, "r", encoding="utf-8") as f:
      #根据&&&分割需要发的帖子
      tweet = f.read().split("&&&")
      for i in tweet:
        tweettext = i.strip()
        data = {
          "variables": {
            "tweet_text": tweettext,
            "dark_request": False,
            "media": {
              "media_entities": [

              ],
              "possibly_sensitive": False
            },
            "semantic_annotation_ids": [

            ],
            "disallowed_reply_options": None
          },
          "features": {
            "communities_web_enable_tweet_community_results_fetch": True,
            "c9s_tweet_anatomy_moderator_badge_enabled": True,
            "responsive_web_edit_tweet_api_enabled": True,
            "graphql_is_translatable_rweb_tweet_is_translatable_enabled": True,
            "view_counts_everywhere_api_enabled": True,
            "longform_notetweets_consumption_enabled": True,
            "responsive_web_twitter_article_tweet_consumption_enabled": True,
            "tweet_awards_web_tipping_enabled": False,
            "creator_subscriptions_quote_tweet_preview_enabled": False,
            "longform_notetweets_rich_text_read_enabled": True,
            "longform_notetweets_inline_media_enabled": True,
            "articles_preview_enabled": True,
            "rweb_video_timestamps_enabled": True,
            "rweb_tipjar_consumption_enabled": True,
            "responsive_web_graphql_exclude_directive_enabled": True,
            "verified_phone_label_enabled": False,
            "freedom_of_speech_not_reach_fetch_enabled": True,
            "standardized_nudges_misinfo": True,
            "tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled": True,
            "responsive_web_graphql_skip_user_profile_image_extensions_enabled": False,
            "responsive_web_graphql_timeline_navigation_enabled": True,
            "responsive_web_enhance_cards_enabled": False
          },
          "queryId": "xT36w0XM3A8jDynpkram2A"
        }
        try:
          res = requests.post('https://x.com/i/api/graphql/xT36w0XM3A8jDynpkram2A/CreateTweet', headers=self.header,json=data)
          if res.status_code == 200:
            print("内容  ：  \n" + tweettext + "\n   发送成功\n\n\n")
        except Exception as e:
          print(e)
        #太快会被判定为机器人
        time.sleep(15)
  def toreply(self):
    #在搜索关键词中批量回复每个帖子
    sw = quote(self.replyword, "utf-8")
    self.header['referer']='https://x.com/compose/post'
    for idstr in self.id_str[:2]:
      if len(idstr)>15:
        print(idstr)
        data={
          "variables": {
            "tweet_text": sw,
            "reply": {
              "in_reply_to_tweet_id": str(idstr),
              "exclude_reply_user_ids": [

              ]
            },
            "dark_request": False,
            "media": {
              "media_entities": [

              ],
              "possibly_sensitive": False
            },
            "semantic_annotation_ids": [

            ],
            "disallowed_reply_options": None
          },
          "features": {
            "communities_web_enable_tweet_community_results_fetch": True,
            "c9s_tweet_anatomy_moderator_badge_enabled": True,
            "responsive_web_edit_tweet_api_enabled": True,
            "graphql_is_translatable_rweb_tweet_is_translatable_enabled": True,
            "view_counts_everywhere_api_enabled": True,
            "longform_notetweets_consumption_enabled": True,
            "responsive_web_twitter_article_tweet_consumption_enabled": True,
            "tweet_awards_web_tipping_enabled": False,
            "creator_subscriptions_quote_tweet_preview_enabled": False,
            "longform_notetweets_rich_text_read_enabled": True,
            "longform_notetweets_inline_media_enabled": True,
            "articles_preview_enabled": True,
            "rweb_video_timestamps_enabled": True,
            "rweb_tipjar_consumption_enabled": True,
            "responsive_web_graphql_exclude_directive_enabled": True,
            "verified_phone_label_enabled": False,
            "freedom_of_speech_not_reach_fetch_enabled": True,
            "standardized_nudges_misinfo": True,
            "tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled": True,
            "responsive_web_graphql_skip_user_profile_image_extensions_enabled": False,
            "responsive_web_graphql_timeline_navigation_enabled": True,
            "responsive_web_enhance_cards_enabled": False
          },
          "queryId": "xT36w0XM3A8jDynpkram2A"
        }
        try:
          res = requests.post('https://x.com/i/api/graphql/xT36w0XM3A8jDynpkram2A/CreateTweet', headers=self.header,json=data)
          if res.status_code == 200:
            print("内容  ：  \n" + self.replyword + "\n   发送成功\n\n\n")
        except Exception as e:
          print(e)
  def cookdata(self):
    #利用selenium获取cookies
    with open(self.userpath, "r", encoding="utf-8") as f:
      datas=f.read().split("||")
      for i in datas:
        email =i.split("^")[0].strip()
        name = i.split("^")[1].strip()
        password = i.split("^")[2].strip()
        path =name+"&xcook.json"
        try:
          # 多线程获取
          tw = twitter(name, password, email, path)
          t1 = threading.Thread(target=tw.run, args=(), name="获取cookies线程")
          t1.start()
        except Exception as e:
          print(e)

if __name__ == '__main__':
  searchword="chinese"
  replyword = "hello"
  cookiespath='cookx.txt'
  tweettextpath='txts.txt'
  userpath='datas.txt'
  tt = Tweet(searchword, cookiespath, tweettextpath, userpath,replyword)
  #先运行获取cookies
  tt.cookdata()
  #在运行拼接header
  tt.topostheader()
  # 搜索爬取
  tt.tosearch()
  # 批量发帖
  tt.toposttext()
  # 批量回复
  tt.toreply()





