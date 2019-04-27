//

const { config } = require("../codecept.conf");

exports.config = {
  ...config,
  multiple: {
    basic: {
      browsers: ["chrome", "firefox"]
    }
  },

  helpers: {
    WebDriver: {
      url: "http://todomvc.com",
      browser: "Chrome",
      user: process.env.BROWSERSTACK_USER,
      key: process.env.BROWSERSTACK_ACCESS_KEY,
      desiredCapabilities: {
        build: "Travis #" + process.env.TRAVIS_BUILD_NUMBER,
        "browserstack.local": true,
        "browserstack.localIdentifier":
          process.env.BROWSERSTACK_LOCAL_IDENTIFIER,
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
