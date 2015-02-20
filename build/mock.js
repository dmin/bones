"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var expectedCalls = [];
var actualCalls = [];
var errors = [];

// TODO feature: expect a certain number of calls to a method
var Mock = (function () {
  function Mock() {
    _classCallCheck(this, Mock);
  }

  _prototypeProperties(Mock, null, {
    expect: {
      value: function expect(methodName, expectedArgs, returnValue) {
        if (!(typeof methodName === "string")) {
          throw TypeError("methodName must be a string.");
        }

        // TODO feature: expect a certain number of calls to a method
        if (expectedCalls.includes(methodName)) {
          throw Error(methodName + " is already expected to be called. You currently cannot expect an method call more than once.");
        } else {
          expectedCalls.push(methodName);
        }

        this[methodName] = function () {
          for (var _len = arguments.length, actualArgs = Array(_len), _key = 0; _key < _len; _key++) {
            actualArgs[_key] = arguments[_key];
          }

          // TODO feature: How deep should equality be checked?
          if (!arrayEqual(expectedArgs, actualArgs)) {
            errors.push("Expected " + methodName + " to be called with [" + expectedArgs + "]. It was actually called with [" + actualArgs + "].");
          }

          if (!actualCalls.includes(methodName)) {
            actualCalls.push(methodName);
          }

          return returnValue;
        };
      },
      writable: true,
      configurable: true
    },
    verify: {
      value: function verify() {
        if (!arrayEqual(expectedCalls, actualCalls)) {
          errors.push("Expected the following method calls: [" + expectedCalls + "], but received these methods calls: [" + actualCalls + "].");
        }

        if (errors.length) {
          console.log("Errors:" + errors);
        } else {
          return true;
        }
      },
      writable: true,
      configurable: true
    }
  });

  return Mock;
})();

module.exports = Mock;