# Bones

A barebones testing framework. Well, more of a function than a framework.

## Install

`npm install dmin/bones`

## Usage

In `dog.js`:

```javascript
var test = require('bones');

// Function you're testing
function Dog(name) {
  this.name = name;
}

Dog.prototype.speak = function () {
  return "I don't like to bark!";
}

// Tests
test("Dog should have a name", function () {
  return new Dog("Fido").name === "Fido";
});

test("Dog should be able to speak", function () {
  return new Dog("Fido").speak() === "Bark!";
});

test("Dog should be able to fly", function () {
  return new Dog("Fido").fly() === "Flying";
});
```

In console

```bash
$ node dog.js
PASS:  Dog should have a name
FAIL:  Dog should be able to speak
ERROR: Dog should be able to fly (TypeError: Object #<Dog> has no method 'fly')
```
