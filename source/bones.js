
import Mock from "mock";

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
    console.log("File ", e.fileName);
    console.log("Line ", e.lineNumber, ":", e.columnNumber);
    console.log("Stack Trace:\n", e.stack);
  }
}

module.exports = test;
