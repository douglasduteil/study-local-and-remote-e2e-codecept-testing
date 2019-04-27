//

const {join} = require('path')

exports.config = {
  tests: join(__dirname, "./*_test.js"),
  output: "./output",
  include: {
    I: join(__dirname, "./steps_file.js")
  },
  bootstrap: null,
  mocha: {},
  name: "study-local-and-remote-e2e-codecept-testing"
};
