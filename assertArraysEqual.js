const eqArrays = require("./eqArrays.js");

// FUNCTION IMPLEMENTATION
const successEmoji = "✅✅✅";
const failedEmoji = "❌❌❌";
const assertArraysEqual = function(arr1, arr2) {
  const isEqual = eqArrays(arr1, arr2);

  if (isEqual) {
    console.log(`${successEmoji} Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`${failedEmoji} Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

module.exports = assertArraysEqual;


