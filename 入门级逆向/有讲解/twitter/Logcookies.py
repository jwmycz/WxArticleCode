import time
import json
# from seleniumwire import webdriver


from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.select import Select


class twitter:
    def __init__(self,name,password,email,path):
        self.name=name
        self.password=password
        self.email=email
        self.cpath = path
        self.loginurl="https://x.com/i/flow/login?redirect_after_login=%2Fhome"
    def login(self):
        tryname=True
        service = Service(r'E:\ToolFile\python37\msedgedriver.exe')
        driver = webdriver.Edge(service=service)
        driver.get(self.loginurl)
        time.sleep(10)
        # time.sleep(5000)
        #关掉x号
        #//*[@id="layers"]/div/div[2]/div/div/div/button/div/span/svg
        driver.find_element(By.XPATH,'//*[@id="layers"]/div/div[2]/div/div/div/button').click()
        time.sleep(3)
        #点击登录
        driver.find_element(By.XPATH,'//*[@id="react-root"]/div/div/div[2]/main/div/div/div[1]/div/div/div[3]/div[4]/a/div/span/span').click()
        time.sleep(10)
        # 输入用户名

        print("输入用户名：  "+self.name)
        driver.find_element(By.XPATH,'//*[@id="layers"]/div[2]/div/div/div/div/div/div[2]/div[2]/div/div/div[2]/div[2]/div/div/div/div[4]/label/div/div[2]/div/input').send_keys(self.name)
        time.sleep(8)
        #点击下一步
        driver.find_element(By.XPATH, '//*[@id="layers"]/div[2]/div/div/div/div/div/div[2]/div[2]/div/div/div[2]/div[2]/div/div/div/button[2]/div/span/span').click()
        time.sleep(8)
        # 输入电话或者邮箱
        try:
            WebDriverWait(driver,4).until(EC.presence_of_element_located(By.XPATH,'//*[@id="layers"]/div[2]/div/div/div/div/div/div[2]/div[2]/div/div/div[2]/div[2]/div[1]/div/div[1]/div/div/div/div/span/span'))
        except:
            tryname=False
        if tryname==True:
            driver.find_element(By.XPATH,'//*[@id="layers"]/div[2]/div/div/div/div/div/div[2]/div[2]/div/div/div[2]/div[2]/div[1]/div/div[2]/label/div/div[2]/div/input').send_keys(self.email)
            time.sleep(5)
        else:
            driver.find_element(By.XPATH,'//*[@id="layers"]/div[2]/div/div/div/div/div/div[2]/div[2]/div/div/div[2]/div[2]/div[1]/div/div[2]/label/div/div[2]/div/input').send_keys(self.email)
            time.sleep(5)
        #点击下一步
        driver.find_element(By.XPATH, '//*[@id="layers"]/div[2]/div/div/div/div/div/div[2]/div[2]/div/div/div[2]/div[2]/div[2]/div/div/div/button/div/span/span').click()
        time.sleep(2)
        # 输入密码
        driver.find_element(By.XPATH,'//*[@id="layers"]/div[2]/div/div/div/div/div/div[2]/div[2]/div/div/div[2]/div[2]/div[1]/div/div/div[3]/div/label/div/div[2]/div[1]/input').send_keys(self.password)
        time.sleep(2)
        # 点击登录
        driver.find_element(By.XPATH,'//*[@id="layers"]/div[2]/div/div/div/div/div/div[2]/div[2]/div/div/div[2]/div[2]/div[2]/div/div[1]/div/div/button/div/span/span').click()
        time.sleep(2)
        #获取保存cookies
        data=driver.get_cookies()
        with open(self.cpath, "w", encoding="utf-8") as f_w:
            json.dump(data, f_w)
        driver.close()
    def run(self):
       self.login()
if __name__ == '__main__':
    # service = Service(r'E:\ToolFile\python37\msedgedriver.exe')
    path="xcook.json"
    # driver = webdriver.Edge(service=service)
    email=''
    name=''
    password=''
    tw=twitter(name,password,email,path)
    tw.run()


