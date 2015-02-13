
var colors = require('colors/safe');

function test(description, test) {
  try {
    if (test()) {
      console.log(colors.green("PASS: ", description));
    }
    else {
      console.log(colors.red("FAIL: ", description));
    }
  } catch (e) {
    var error = e.toString().replace(/(\r\n|\n|\r)/gm," ");
    console.log(colors.red("ERROR:", description, "(" + error + ")"));
  }
}

module.exports = test;
