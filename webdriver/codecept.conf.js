//

const { config } = require("../codecept.conf");

exports.config = {
  ...config,
  multiple: {
    basic: {
      browsers: [
        {
          name: "Chrome Windows 10",
          os: "Windows",
          os_version: "10",
          browser: "chrome"
        },
        {
          name: "Firefox Windows 10",
          os: "Windows",
          os_version: "10",
          browser: "firefox"
        }
      ]
    }
  },

  helpers: {
    WebDriver: {
      url: "http://todomvc.com",
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
        project: config.name + "#" + process.env.TRAVIS_BRAN
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
