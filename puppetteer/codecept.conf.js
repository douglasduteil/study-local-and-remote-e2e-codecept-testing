//

const {config} = require("../codecept.conf");

exports.config = {
  ...config,
  helpers: {
    Puppeteer: {
      restart: false,
      chrome: {
        headless: false,
        args: ["--no-sandbox"]
      },
      url: "http://todomvc.com/examples/vanillajs/"
    }
  }
};
