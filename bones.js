

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

function Dog(name) {
  this.name = name;
}

Dog.prototype.speak = function () {
  return "Bark!";
}

var dog = function (name) { return new Dog(name) };

test("Dog should have a name", function () {
  return dog("Knight").name === "Knight";
});

test("Dog should be able to speak", function () {
  return dog("Knight").speak() === "Bark!";
});
