# Nightwatch101
手牽手一起來學 Nightwatch！

![Nightwatch.js](https://cythilya.github.io/assets/nightwatch101/nightwatch.png)

## 安裝
簡易安裝步驟如下。

### Step 1：安裝 Java Development Kit（JDK）
安裝 [Java Development Kit（JDK）](http://www.oracle.com/technetwork/java/javase/downloads/jdk9-downloads-3848520.html)，至少版本 7 以上。

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
安裝 [nightwatch-html-reporter](nightwatch-html-reporter)。

```
npm install -g nightwatch-html-reporter
```

執行指令如下，跑一次測試程式，解析 Nightwatch 所產生的 XML 檔案，最後產生客製化測試報告。

```
nightwatch test/e2e/
nightwatch-html-reporter -d ./reports
```

## 教學
待 2018 鐵人賽補好補滿。

1. [前言：使用 Nightwatch 實現 End-to-End Testing](https://cythilya.github.io/2017/12/11/nightwatch-intro/)
2. [Nightwatch 與 Selenium Webdriver](https://cythilya.github.io/2017/12/12/nightwatch-and-selenium-webdriver/)
3. [環境建置](https://cythilya.github.io/2017/12/13/nightwatch-installation/)
4. [設定檔](https://cythilya.github.io/2017/12/14/04-nightwatch-config/)
5. [使用 CSS Selector 定位網頁元素](https://cythilya.github.io/2017/12/15/nightwatch-css-selector/)
6. [使用 Xpath 定位網頁元素](https://cythilya.github.io/2017/12/16/nightwatch-xpath/)
7. [指令 Part 1](https://cythilya.github.io/2017/12/17/nightwatch-commands-part-1/)
