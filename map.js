// FUNCTION IMPLEMENTATION
const successEmoji = "✅✅✅";
const failedEmoji = "❌❌❌";
const assertArraysEqual = function (arr1, arr2) {
  const isEqual = eqArrays(arr1, arr2);

  if (isEqual) {
    console.log(`${successEmoji} Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`${failedEmoji} Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};


// Function implementation
// takes in array and callback function
const words = ["ground", "control", "to", "major", "tom"];

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, (word) => word[0]);
console.log(results1);

assertArraysEqual([ 'g', 'c', 't', 'm', 't' ], results1);