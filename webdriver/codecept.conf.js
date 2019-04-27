//

const { config } = require("../codecept.conf");

exports.config = {
  ...config,
  multiple: {
    basic: {
      browsers: [
        "chrome",
        {
          desiredCapabilities: {
            browserName: "safari",
            "browserstack.os": "OS X",
            "browserstack.os_version": "High Sierra",
            windowSize: "maximize",
            "browserstack.local": false,
            "browserstack.video": true,
            ignoreHTTPSErrors: true,
            acceptInsecureCerts: true,
            acceptInvalidCerts: true,
            acceptSslCerts: true
          }
        }
      ]
    }
  },

  helpers: {
    WebDriver: {
      url: "http://todomvc.com/",
      browser: "Chrome",
      user: process.env.BROWSERSTACK_USER,
      key: process.env.BROWSERSTACK_ACCESS_KEY,
      desiredCapabilities: {
        acceptInsecureCerts: true,
        acceptInvalidCerts: true,
        acceptSslCerts: true
      }
    }
  },

  plugins: {
    wdio: {
      services: ["browserstack"],
      user: process.env.BROWSERSTACK_USER,
      key: process.env.BROWSERSTACK_ACCESS_KEY,
      browserstackLocal: true
    }
  }
};
