const PKG = require('./package.json');
const BINPATH = './node_modules/nightwatch/bin/';
const GLOBALS = './globals.js';
const CONFIG = {
  "src_folders": [
    "test/e2e"
  ],
  "output_folder": "./reports",
  "page_objects_path": './page_objects',
  "custom_commands_path": './custom_commands',
  "custom_assertions_path": './custom_assertions',
  "selenium": {
    "start_process": true,
    "server_path": "./bin/selenium.jar",
    "log_path": "",
    "host": "127.0.0.1",
    "port": 4444,
    "cli_args": {
      "webdriver.chrome.driver": BINPATH + "chromedriver"
    }
  },
  // "live_output" : true,
  "test_workers" : {
    "enabled" : true,
    "workers" : "auto"
  },
  "test_settings": {
    "default": {
      "launch_url": "http://localhost",
      "selenium_port": 4444,
      "selenium_host": "127.0.0.1",
      "silent": true,
      "globals": {
        "waitForConditionTimeout": 10000
      },
      "desiredCapabilities": {
        "browserName": "chrome",
        "javascriptEnabled": true,
        "acceptSslCerts": true
      }
    },
    "local": {
      "launch_url": "http://localhost",
      "selenium_port": 4444,
      "selenium_host": "127.0.0.1",
      "silent": true,
      "globals": {
        "waitForConditionTimeout": 15000
      },
      "desiredCapabilities": {
        "browserName": "chrome",
        "javascriptEnabled": true,
        "acceptSslCerts": true
      }
    },
    "chrome": {
      "desiredCapabilities": {
        "browserName": "chrome",
        "javascriptEnabled": true,
        "acceptSslCerts": true
      }
    },
    "firefox" : {
      "desiredCapabilities": {
        "platform": "XP",
        "browserName": "firefox",
        "version": "33"
      }
    },
    "internet_explorer_10" : {
      "desiredCapabilities": {
        "platform": "Windows 7",
        "browserName": "internet explorer",
        "version": "10"
      }
    },
    "ie11": {
      "desiredCapabilities": {
        "browserName": "internet explorer",
        "platform": "Windows 10",
        "version": "11.0"
      }
    }
  } /*,
  reporter: GLOBALS.reporter */
}

module.exports = CONFIG;