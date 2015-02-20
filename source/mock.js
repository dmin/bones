
import includes from "array-includes"
Array.prototype.includes = includes;

import arrayEqual from "array-equal";



var expectedCalls = [];
var actualCalls = [];
var errors = [];

// TODO feature: expect a certain number of calls to a method
export default class Mock {

  // TODO refactor: constructor should accept dependencies



  expect(methodName, expectedArgs, returnValue) {
    if (!(typeof methodName === "string")) { throw TypeError("methodName must be a string."); }

    // TODO feature: expect a certain number of calls to a method
    if (expectedCalls.includes(methodName)) {
      throw Error(methodName + " is already expected to be called. You currently cannot expect an method call more than once.");
    }
    else {
      expectedCalls.push(methodName);
    }

    this[methodName] = function (...actualArgs) {
      // TODO feature: How deep should equality be checked?
      if (!arrayEqual(expectedArgs,actualArgs)) {
        errors.push("Expected " + methodName + " to be called with [" + expectedArgs + "]. It was actually called with [" + actualArgs + "].");
      }

      if (!actualCalls.includes(methodName)) {
        actualCalls.push(methodName);
      }

      return returnValue;
    }
  }



  verify() {
    if (!arrayEqual(expectedCalls,actualCalls)) {
      errors.push("Expected the following method calls: [" + expectedCalls + "], but received these methods calls: [" + actualCalls + "].");
    }

    if (errors.length) {
      console.log("Errors:" + errors);
    }
    else {
      return true;
    }
  }



}
