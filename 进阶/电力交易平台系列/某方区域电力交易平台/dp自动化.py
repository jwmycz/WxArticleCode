import time
from DrissionPage import Chromium, ChromiumOptions
from DrissionPage.common import Settings

# 初始化开始时间
begintime = time.time()

# 设置语言环境
Settings.set_language('zh_cn')  # 设置为中文

# 配置浏览器路径及选项
browser_path = r'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe'
options = ChromiumOptions().set_browser_path(browser_path)
options.headless(True)  # 无头模式
options.no_imgs(True)  # 禁用图片加载

# 设置浏览器启动参数
browser_args = [
    '--no-sandbox',
    '--disable-blink-features=AutomationControlled',  # 防止 webdriver 检测
    '--disable-web-security',
    '--disable-features=IsolateOrigins,site-per-process',
    '--start-maximized'
]
for arg in browser_args:
    options.set_argument(arg)

# 启动浏览器并打开目标页面
try:
    browser = Chromium(options)
    tab = browser.latest_tab

    # 设置 User-Agent
    user_agent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36 Edg/135.0.0.0'
    tab.set.user_agent(user_agent)
    tab.get('https://pm.gx.csg.cn/#/door/about?node=B1')

    print(f"User-Agent: {tab.user_agent}")
    tab.refresh()

    # 监听指定 URL 并抓取数据
    listen_url = 'https://pm.gx.csg.cn/GXJYHD/qctc_pm_mh/mh/mhIndex/getMhAllNews'
    tab.listen.start(listen_url)

    page_count = 0
    max_pages = 11  # 最大翻页次数
    for step in tab.listen.steps():
        if page_count >= max_pages:
            break

        print(step.response.body)  # 打印数据包内容
        try:
            next_button = tab('@class=btn-next')

            if next_button:
                next_button.click()  # 点击下一页
                page_count += 1
            else:
                print("未找到下一页按钮，停止翻页")
                break
        except Exception as e:
            print(f"点击下一页按钮时发生错误: {e}")
            break

finally:
    # 关闭浏览器并计算运行时间
    tab.close()
    end_time = time.time()
    elapsed_time = end_time - begintime
    print(f"程序运行时间: {elapsed_time} 秒")