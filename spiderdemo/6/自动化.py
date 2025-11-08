import re
import time
from DrissionPage import WebPage, ChromiumOptions


def initdp():
    browser_path = r'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe'
    options = ChromiumOptions().set_browser_path(browser_path)
    options.headless(False)
    options.no_imgs(False)

    # 添加浏览器参数
    browser_args = [
        '--no-sandbox',
        '--disable-gpu',
        '--disable-web-security',
        '--disable-features=IsolateOrigins,site-per-process',
        '--start-maximized'
    ]
    for arg in browser_args:
        options.set_argument(arg)

    # 打开会话模式页面
    page = WebPage('s', chromium_options=options)
    page.set.user_agent(
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) '
        'Chrome/135.0.0.0 Safari/537.36 Edg/135.0.0.0'
    )
    return page


def click_next_page(tab):
    try:
        next_btn = tab.ele('@@class=page-btn@@text()=下一页 →', timeout=5)
        if not next_btn:
            print("❌ 没有找到下一页按钮。")
            return False
        next_btn.click()
        print("➡️ 点击下一页成功。")
        return True

    except Exception as e:
        print(f"⚠️ 点击下一页出错: {e}")
        return False
def getdatanew(page):
    tab = page.latest_tab
    url = 'https://www.spiderdemo.cn/authentication/jsvmp_challenge/?challenge_type=jsvmp_challenge'
    tab.get(url, retry=3, interval=2, timeout=30)
    tab.console.start()

    time.sleep(2)
    alldata=[]
    for i in range(1,101):
        page_index = i
        print(f"\n===== 第 {page_index} 页 =====")
        js_code = '''
        let numbers = [];
        for (let sheet of document.styleSheets) {
            try {
                for (let rule of sheet.cssRules) {
                    if (rule.selectorText && rule.selectorText.includes('::before')) {
                        let content = rule.style.getPropertyValue('content');
                        if (content) {
                            content = content.replace(/["']/g, '');
                            numbers.push(content);
                        }
                    }
                }
            } catch(e) {
                continue;
            }
        }
        let numberss = document.querySelectorAll('.number-box');
        let values = Array.from(numberss).map(div => div.innerHTML);
        console.log("提取CSS:", values.join(","),"提取数字",numbers,"提取数字结束");
        '''
        tab.run_js(js_code)
        time.sleep(5)
        while True:
            result=tab.console.wait().text
            if '提取数字' in result:
                newdata=result.replace(' ','').replace('\n','')
                html_list=newdata.split('提取数字')[0].split(',')
                print(html_list)
                nums = newdata.split('提取数字')[1].split(',')
                nums.pop(0)
                result_list = []
                for html, num in zip(html_list, nums):
                    html = re.sub(r'<spanclass=', '<span class=', html)
                    new_html = re.sub(r'<span class="context_kw\d+"></span>', num, html)
                    final_number = re.sub(r'<.*?>', '', new_html)
                    result_list.append(final_number)
                alldata.extend(result_list)
                tab.console.clear()
                break
        tab.console.clear()
        time.sleep(8)
        click_next_page(tab)
        print(alldata)
        time.sleep(2)
    print("\n✅ 所有分页处理完成。")
    print(alldata)
    return alldata

def check_duplicate_groups(data):
    seen_groups = set()   # 保存已出现过的组
    duplicates = []       # 保存重复组（方便后面打印）
    k=0
    for i in range(0, len(data), 10):
        group = data[i:i + 10]
        print(group)
        k=k+1
        print(k)
        # 转为字符串，方便放入 set 比较
        key = str(group)

        if key in seen_groups:
            print(f"⚠️ 发现重复组：{group}")
            duplicates.append(group)
        else:
            seen_groups.add(key)

    # 输出统计信息
    print(f"\n总共有 {len(seen_groups)} 个唯一组")
    print(f"其中 {len(duplicates)} 组是重复的")

    return duplicates
if __name__ == '__main__':
    page = initdp()
    data=getdatanew(page)

    duplicates = check_duplicate_groups(data)

    print(f"\n数据总长度：{len(data)}")
    k=0
    for i in data:
        if '提取CSS:' in i:
            i=i.replace('提取CSS:','')
        k=k+int(i)
    print(k)



