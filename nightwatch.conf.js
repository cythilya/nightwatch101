const PKG = require('./package.json');
const GLOBALS = './globals.js';
const seleniumServer = require('selenium-server');
const chromedriver = require('chromedriver');
const config = {
  "src_folders": [
    "test/e2e"
  ],
  "output_folder": "./reports",
  "page_objects_path": './page_objects',
  "custom_commands_path": './custom_commands',
  "custom_assertions_path": './custom_assertions',
  "globals_path": GLOBALS,
  "selenium": {
    "start_process": true,
    "server_path": seleniumServer.path,
    "log_path": "",
    "host": "127.0.0.1",
    "port": 4444,
    "cli_args": {
      "webdriver.chrome.driver": chromedriver.path
    }
  },
  // "live_output": true,
  "test_workers" : {
    "enabled": true,
    "workers": "auto"
  },
  "test_settings": {
    "default": {
      "launch_url": "http://localhost",
      "selenium_port": 4444,
      "selenium_host": "127.0.0.1",
      "silent": true,
      "globals": {
        "waitForConditionTimeout": 10000,
        // "retryAssertionTimeout ": 500,
        "rtContext": {}
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
    }
  }
}

module.exports = config;