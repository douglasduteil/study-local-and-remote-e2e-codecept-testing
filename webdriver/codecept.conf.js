//

const { config } = require("../codecept.conf");

exports.config = {
  ...config,
  multiple: {
    basic: {
      browsers: [
        {
          browser: "chrome",
          desiredCapabilities: {
            name: "Chrome 74 on Windows 10",
            os: "Windows",
            os_version: "10",
            browserName: "chrome",
            browser_version: "74.0"
          }
        },
        {
          browser: "firefox",
          desiredCapabilities: {
            name: "Firefox 66 on Windows 10",
            os: "Windows",
            os_version: "10",
            browserName: "firefox",
            browser_version: "66.0"
          }
        }
      ]
    }
  },

  helpers: {
    WebDriver: {
      url: "http://todomvc.com",
      restart: false,
      browser: "Chrome",
      user: process.env.BROWSERSTACK_USER,
      key: process.env.BROWSERSTACK_ACCESS_KEY,
      desiredCapabilities: {
        "browserstack.local": true,
        "browserstack.localIdentifier":
          process.env.BROWSERSTACK_LOCAL_IDENTIFIER,
        "browserstack.selenium_version": "3.14.0",
        build: "Travis #" + process.env.TRAVIS_BUILD_NUMBER,
        acceptInsecureCerts: true,
        acceptInvalidCerts: true,
        acceptSslCerts: true,
        project: config.name + "#" + process.env.TRAVIS_BRANCH
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
