import time
from datetime import datetime
import execjs
import requests
import json
from loguru import logger
import pymysql
import hashlib

import sys

def memory(data_list):
    logger.info('开始写入数据库')
    logger.info(f'需要写入{len(data_list)}条数据')
    for row_data in data_list:
        try:
            cont = json.dumps(row_data[2], ensure_ascii=False)
            # print(cont)
            sql = """
                INSERT INTO gdzwfw (发布时间, 发布标题,内容信息, 链接,哈希值)
                VALUES (%s, %s, %s, %s,%s)
                """
            cursor.execute(sql, (row_data[0], row_data[1], cont, row_data[3], row_data[4]))
        except Exception as e:
            logger.error(e)
            continue
def get_header_data(params):
    # 生成header
    headers = {
        "Accept": "application/json, text/plain, */*",
        "Accept-Language": "zh-CN,zh;q=0.9",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
        "Content-Type": "application/json",
        "Origin": "https://ygp.gdzwfw.gov.cn",
        "Pragma": "no-cache",
        "Referer": "https://ygp.gdzwfw.gov.cn/",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-origin",
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
        "sec-ch-ua": "\"Chromium\";v=\"122\", \"Not(A:Brand\";v=\"24\", \"Google Chrome\";v=\"122\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"macOS\""
    }
    with open('get_header.js', 'r') as f:
        js_ = f.read()
    js_c = execjs.compile(js_)
    header_rst = js_c.call('get_header', params)
    headers['X-Dgi-Req-App'] = header_rst['X-Dgi-Req-App']
    headers['X-Dgi-Req-Signature'] = header_rst['X-Dgi-Req-Signature']
    headers['X-Dgi-Req-Nonce'] = header_rst['X-Dgi-Req-Nonce']
    headers['X-Dgi-Req-Timestamp'] = str(header_rst['X-Dgi-Req-Timestamp'])
    # logger.info(f"X-Dgi-Req-App：{header_rst['X-Dgi-Req-App']}")
    # logger.info(f"X-Dgi-Req-Signature：{header_rst['X-Dgi-Req-Signature']}")
    # logger.info(f"X-Dgi-Req-Nonce：{header_rst['X-Dgi-Req-Nonce']}")
    # logger.info(f"X-Dgi-Req-Timestamp：{header_rst['X-Dgi-Req-Timestamp']}")
    # logger.info('生成headers')
    session.headers.update(headers)
def get_columns():
    list={}
    try:
        params = {
            'siteCode': '44',
        }
        get_header_data(params)
        response = session.get('https://ygp.gdzwfw.gov.cn/ggzy-portal/base/columns/tree',params=params)
        try:
            data = response.json()['data'][15]['children']
            for i in data:
                columnSiteName=i['columnSiteName']
                columnCode=i['columnCode']
                list[columnSiteName]=columnCode
            logger.info('获取单页所有栏目序号')
            return list
        except:
            logger.error('获取栏目失败:JSON格式有误')
            logger.error(f'错误格式:{response.text}')

    except Exception as e:
        logger.error(e)
def get_items(pageType, pageNum):
    try:
        url = "https://ygp.gdzwfw.gov.cn/ggzy-portal/search/v2/items"
        data = {
            "type": "trading-type",
            "openConvert": False,
            "keyword": "",
            "siteCode": "44",
            "secondType": pageType,
            "tradingProcess": "",
            "thirdType": "[]",
            "projectType": "",
            "publishStartTime": "",
            "publishEndTime": "",
            "pageNo": pageNum,
            "pageSize": 10
        }
        get_header_data(data)
        data = json.dumps(data, separators=(',', ':'))
        res = session.post(url, data=data).json()
        if res["errcode"]==10300:
            logger.error('请求参数错误')
        else:
            logger.info('获取单页数据')
            return res
    except Exception as e:
        logger.error(e)
def Process_Data(res,pageType):
    logger.info('开始处理数据')
    urls_data= {}
    urls=[]
    pageData=res['data']['pageData']
    pageTotal=res['data']['pageTotal']
    for Data in pageData:
        noticeId=Data['noticeId']
        docId=Data['docId']
        projectCode=Data['projectCode']
        tradingProcess=Data['tradingProcess']
        siteCode=Data['siteCode']
        publishDate=Data['publishDate']
        pubServicePlat=Data['pubServicePlat']
        noticeSecondTypeDesc=Data['noticeSecondTypeDesc']
        projectType=Data['projectType']

        nodeId=get_nodeId(siteCode,pageType,tradingProcess,projectType)
        if nodeId==None:
            # 主页链接
            url=f'https://ygp.gdzwfw.gov.cn/#/44/new/jygg/v3/{pageType}?noticeId={noticeId}&projectCode={projectCode}&bizCode={tradingProcess}&siteCode={siteCode}&publishDate={publishDate}&source={pubServicePlat}&titleDetails={noticeSecondTypeDesc}&classify={projectType}'
            hashMd5 = hashlib.md5(url.encode('utf-8')).hexdigest()
            logger.error(f'需修正链接:{url}')
            with open('error.json', 'a') as f:
                f.write(f'url:{url}$hashMd5:{hashMd5}\n\n')
        else:
            url=f'https://ygp.gdzwfw.gov.cn/ggzy-portal/center/apis/trading-notice/new/detail?nodeId={nodeId}&version=v3&tradingType={pageType}&noticeId={noticeId}&bizCode={tradingProcess}&projectCode={projectCode}&siteCode={siteCode}'
            urls.append(url)

    #
    logger.info(f'发送{len(urls)}条链接')
    return urls,pageTotal
def get_nodeId(siteCode,tradingType,bizCode,classify):
    try:
        url = f"https://ygp.gdzwfw.gov.cn/ggzy-portal/center/apis/trading-notice/new/singleNode?siteCode={siteCode}&tradingType={tradingType}&bizCode={bizCode}&classify={classify}"
        params=f'siteCode={siteCode}&tradingType={tradingType}&bizCode={bizCode}&classify={classify}'
        get_header_data(params)
        res=session.get(url)
        try:
            if res.json()['errcode'] == 0:
                data = res.json()['data']
                return data
            else:
                logger.error('获取nodeId失败')
                logger.error(f'错误格式:{res.text}')
        except Exception as e:
            logger.error('获取nodeId失败:JSON格式有误')
            logger.error(f'错误格式:{res.text}')
    except Exception as e:
        logger.error(e)

def get_alldata(pageType,i):
    try:
        res = get_items(pageType, i)
        if res:
            urls, p = Process_Data(res, pageType)
            return urls

    except Exception as e:
        logger.error(e)
def download_data(urls):
    logger.info(f'接收到{len(urls)}条链接')
    alldata_list = []
    for i in urls:
        try:
            params=i.split('?')[1]
            get_header_data(params)
            res=session.get(i)
            try:
                if res.json()['errcode'] == 0:
                    data=res.json()['data']
                    Date=data['publishDate']
                    title=data['title']
                    tradingNoticeColumnModelList=data['tradingNoticeColumnModelList']
                    hashMd5=hashlib.md5(i.encode('utf-8')).hexdigest()
                    alldata_list.append([Date,title,tradingNoticeColumnModelList,i,hashMd5])
                    # alldata={
                    #     '发布时间':Date,
                    #     '发布标题':title,
                    #     '内容信息':tradingNoticeColumnModelList,
                    #     '链接':i,
                    #     '哈希值':hashlib.md5(i.encode('utf-8')).hexdigest()
                    # }
                    # logger.info('获取单独招标信息')
                    time.sleep(0.5)
                    # logger.info(i)
            except Exception as e:
                logger.error(e)
                logger.error('获取数据失败:JSON格式有误')
                logger.error(f'错误格式:{res.text}')
                time.sleep(0.5)
                continue
        except Exception as e:
            logger.error(e)
            time.sleep(0.5)
            continue
    return alldata_list
if __name__ == '__main__':
    begintime = time.time()
    conn = pymysql.connect(
        host="127.0.0.1",
        port=3306,
        user='root',
        passwd='root',
        db='jwmycz',
        charset='utf8mb4'
    )
    cursor = conn.cursor()
    logger.info(f"开始获取数据:{datetime.fromtimestamp(time.time()).strftime('%Y-%m-%d %H:%M:%S')}")
    session = requests.session()
    # 获取栏目标记：pageType
    # list=get_columns()
    pageType, pageNum = 'A', 1
    res=get_items(pageType, pageNum)
    logger.info(f'开始获取第{pageNum}页数据')
    if res:
        urls,pageTotal=Process_Data(res,pageType)
        time.sleep(0.5)
        alldata = download_data(urls)
        memory(alldata)
        conn.commit()
        # for i in range(689,pageTotal+1):
        for i in range(2, 300):
            try:
                logger.info(f'开始获取第{i}页数据')
                urls=get_alldata(pageType,i)
                alldata=download_data(urls)
                memory(alldata)
                conn.commit()
                time.sleep(1)
                logger.info(f'提交第{i}页数据成功')
            except:
                logger.error(f'获取第{i}页数据失败')
    cursor.close()
    conn.close()
    logger.info('数据爬取完毕')
    endtime=time.time()-begintime
    logger.info(f"共耗时: {endtime:.2f} 秒")
