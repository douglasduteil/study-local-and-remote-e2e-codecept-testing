//

const {config} = require("../codecept.conf");

exports.config = {
  ...config,
  helpers: {
    Puppeteer: {
      restart: false,
      chrome: {
        headless: true,
        args: ["--no-sandbox"]
      },
      url: "http://todomvc.com"
    }
  }
};
