# Nightwatch101
手牽手一起來學 Nightwatch！

![Nightwatch.js](https://cythilya.github.io/assets/nightwatch101/nightwatch.png)

## 安裝
簡易安裝步驟如下。

### Step 1：安裝 Java Development Kit（JDK）
安裝 [Java Development Kit（JDK）](http://www.oracle.com/technetwork/java/javase/downloads/jdk9-downloads-3848520.html)，至少版本 7 以上。（適用 Windows 和 macOS）

在 Linux 用 `apt` 安裝:

```bash
sudo apt install openjdk-8-jdk # 版本號可以改
```

### Step 2：下載專案
下載本專案並移動到此資料夾底下。

```
git clone https://github.com/cythilya/nightwatch101.git & cd nightwatch101
```

### Step 3：安裝相關檔案
```
npm install
```

### Step 4：啟動 Nightwatch，並進行測試
```
npm test
```

## 測試報告
安裝 [nightwatch-html-reporter](https://github.com/jls/nightwatch-html-reporter)。

```
npm install -g nightwatch-html-reporter
```

執行指令如下，跑一次測試程式，解析 Nightwatch 所產生的 XML 檔案，最後產生客製化測試報告。

```
nightwatch test/e2e/
nightwatch-html-reporter -d ./reports
```

或者，在本專案中也可以執行：
```
npm run report
```

## 教學
### 投影片-快速上手版
[Nightwatch101-手牽手一起來學 Nightwatch！](https://www.slideshare.net/cythilya/nightwatch101)

### 鐵人賽-詳細說明版
1. [前言](https://cythilya.github.io/2017/12/11/nightwatch-intro/)
2. [Nightwatch 與 Selenium Webdriver](https://cythilya.github.io/2017/12/12/nightwatch-and-selenium-webdriver/)
3. [環境建置](https://cythilya.github.io/2017/12/13/nightwatch-installation/)
4. [設定檔](https://cythilya.github.io/2017/12/14/nightwatch-config/)
5. [使用 CSS Selector 定位網頁元素](https://cythilya.github.io/2017/12/15/nightwatch-css-selector/)
6. [使用 Xpath 定位網頁元素](https://cythilya.github.io/2017/12/16/nightwatch-xpath/)
7. [指令 Part 1](https://cythilya.github.io/2017/12/17/nightwatch-commands-part-1/)
8. [指令 Part 2](https://cythilya.github.io/2017/12/18/nightwatch-commands-part-2/)
9. [指令 Part 3](https://cythilya.github.io/2017/12/19/nightwatch-commands-part-3/)
10. [BDD Expect](https://cythilya.github.io/2017/12/20/nightwatch-bdd-expect/)
11. [BDD Assert](https://cythilya.github.io/2017/12/21/nightwatch-bdd-assert/)
12. [BDD Verify](https://cythilya.github.io/2017/12/22/nightwatch-bdd-verify/)
13. [Test Hooks](https://cythilya.github.io/2017/12/23/nightwatch-test-hooks/)
14. [Asynchronous Test Hooks](https://cythilya.github.io/2017/12/24/nightwatch-asynchronous-test-hooks/)
15. [External Globals](https://cythilya.github.io/2017/12/25/nightwatch-external-globals/)
16. [簡單測試範例](https://cythilya.github.io/2017/12/26/nightwatch-example-1/)
17. [Nightwatch Test Runner](https://cythilya.github.io/2017/12/27/nightwatch-test-runner/)
18. [依照分組做測試（Test Groups）](https://cythilya.github.io/2017/12/28/nightwatch-test-groups/)
19. [依照標籤做測試（Test Tags）](https://cythilya.github.io/2017/12/29/nightwatch-test-tags/)
20. [禁跑特定測試（Disable Tests）](https://cythilya.github.io/2017/12/30/nightwatch-disabling-tests/)
21. [平行執行測試程式](https://cythilya.github.io/2017/12/31/nightwatch-parallel-running/)
22. [Page Objects](https://cythilya.github.io/2018/01/01/nightwatch-page-objects/)
23. [使用 Sections 優化 Page Objects](https://cythilya.github.io/2018/01/02/nightwatch-page-objects-sections/)
24. [客製化指令（Custom Commands）](https://cythilya.github.io/2018/01/03/nightwatch-custom-commands/)
25. [客製化斷言（Custom Assertions）](https://cythilya.github.io/2018/01/04/nightwatch-custom-assertions/)
26. [客製化測試報告](https://cythilya.github.io/2018/01/05/nightwatch-custom-reporter/)
27. [進階測試範例](https://cythilya.github.io/2018/01/06/nightwatch-example-2/)
28. [獨立使用 ChromeDriver 跑測試](https://cythilya.github.io/2018/01/07/nightwatch-standalone-chrome-driver/)
29. [Selenium IDE](https://cythilya.github.io/2018/01/08/selenium-ide/)
30. [總結](https://cythilya.github.io/2018/01/09/nightwatch-summary/)

[2018 iT 邦幫忙鐵人賽](https://ithelp.ithome.com.tw/users/20092232/ironman/1241)。

## Todos
持續改進中，未來會繼續完成的項目...

- [ ] localhost test
- [ ] 設定假的 https certificate，然後 bypass https
- [ ] 假資料填充、測完後移除
- [ ] CI/CD 整合
- [ ] 通知機制
- [ ] 手機版網站測試範例