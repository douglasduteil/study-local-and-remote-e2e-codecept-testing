exports.config = {
  tests: "./*_test.js",
  output: "./output",
  helpers: {
    Puppeteer: {
      chrome: {
        headless: true,
        args: ["--no-sandbox"]
      },
      url: "http://todomvc.com/examples/vanillajs/"
    }
  },
  include: {
    I: "./steps_file.js"
  },
  bootstrap: null,
  mocha: {},
  name: "study-local-and-remote-e2e-codecept-testing"
};
