# Bones

A barebones testing framework. Well, more of a function than a framework.

## Install

`npm install dmin/bones`

## Usage

```javascript
var test = require('bones');


// Function your testing
function Dog(name) {
  this.name = name;
}

Dog.prototype.speak = function () {
  return "Bark!";
}

// Tests
test("Dog should have a name", function () {

  return new Dog("Fido").name === "Fido";
});

test("Dog should be able to speak", function () {
  return new Dog("Fido").speak() === "Bark!";
});
