const successEmoji = "✅✅✅";
const failedEmoji = "❌❌❌";
const eqObjects = require("./eqObjects");

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  //call the inspect function in the util library
  const inspect = require("util").inspect;
  const isEqual = eqObjects(actual, expected); // call eq function
  if (isEqual) {
    console.log(`${successEmoji} Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`${failedEmoji} Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual;