//

const { config } = require("../codecept.conf");

exports.config = {
  ...config,
  multiple: {
    basic: {
      browsers: [
        "chrome",
        "safari"
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
        project: config.name,
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
