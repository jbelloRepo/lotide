// FUNCTION IMPLEMENTATION
const successEmoji = "✅✅✅";
const failedEmoji = "❌❌❌";
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`${successEmoji} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${failedEmoji} Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function (object1, object2) {
  let obj1Count = 0;
  let obj2Count = 0;

  // check length
  for (const key1 in object1) {
    obj1Count++;
  }
  for (const key2 in object2) {
    obj2Count++;
  }

  if (obj1Count !== obj2Count) {
    return false;
  }

  // check key and value
  //   console.log(object1, object2);
  for (const key in object1) {
    // console.log(object1[key], object2[key]);

    //check for array
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      return eqArrays(object1[key], object2[key]);
    }

    if (object1[key] === object2[key]) {
      continue;
    } else {
      return false;
    }
  }

  //check for arrays

  return true;
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function (actual, expected) {
  //call the inspect function in the util library
  const inspect = require("util").inspect;
  const isEqual = eqObjects(actual, expected); // call eq function
  if (isEqual) {
    console.log(`${successEmoji} Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`${failedEmoji} Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
  // Implement me!
};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject1 = { size: "medium", color: "red" };
const anotherShirtObject2 = { size: "medium", color: "green" };
assertObjectsEqual(shirtObject, anotherShirtObject1);
assertObjectsEqual(shirtObject, anotherShirtObject2);
// console.log(eqObjects(shirtObject, anotherShirtObject)); // => true

// const longSleeveShirtObject = {
//   size: "medium",
//   color: "red",
//   sleeveLength: "long",
// };
// console.log(eqObjects(shirtObject, longSleeveShirtObject)); // => false
