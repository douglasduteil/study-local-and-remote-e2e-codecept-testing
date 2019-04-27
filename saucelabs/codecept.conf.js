//

const { config } = require("../codecept.conf");

exports.config = {
  ...config,
  multiple: {
    basic: {
      browsers: [
        {
          browserName: "chrome",
          platform: "OS X 10.12",
          version: "49"
        }
      ]
    }
  },

  helpers: {
    WebDriver: {
      url: "http://todomvc.com",
      restart: false,
      browser: "Chrome",
      user: process.env.SAUCE_USER,
      key: process.env.SAUCE_ACCESS_KEY,
      desiredCapabilities: {
        build: "Travis #" + process.env.TRAVIS_BUILD_NUMBER
      }
    }
  },

  plugins: {
    wdio: {
      services: ["sauce"],
      user: process.env.SAUCE_USER,
      key: process.env.SAUCE_ACCESS_KEY,
      region: "eu",
      sauceConnect: true
    }
  }
};
