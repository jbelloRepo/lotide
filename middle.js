// FUNCTION IMPLEMENTATION
const successEmoji = "✅✅✅";
const failedEmoji = "❌❌❌";
const assertArraysEqual = function(arr1, arr2) {
//   console.log(arr1, arr2);
  const isEqual = eqArrays(arr1, arr2);

  if (isEqual) {
    console.log(`${successEmoji} Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`${failedEmoji} Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const eqArrays = function(arr1, arr2) {
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

//----------- FUNCTION IMPLEMENTATION --------------//
const middle = function(arr) {
  let middleIndex;
  let newArr;
  const emptyArr = [];
  if (arr.length <= 2) {
    return emptyArr;
  } else {
    if (arr.length % 2 === 0) {
      middleIndex = Math.floor(arr.length / 2) - 1;
      newArr = arr.slice(middleIndex, middleIndex + 2);
    } else {
      middleIndex = Math.ceil(arr.length / 2) - 1;
      newArr = arr.slice(middleIndex, middleIndex + 1);
    }
    // console.log(middleIndex);
    // console.log("===middle=== " + newArr);
    return newArr;
  }
};
//----------- FUNCTION IMPLEMENTATION END --------------//

assertArraysEqual(middle([1]), []); // => []
assertArraysEqual(middle([1, 2]), []); // => []
assertArraysEqual(middle([1, 2, 3, 4, 45, 5, 6, 6]), [4, 45]); // => []
assertArraysEqual(middle([1, 2, 4, 7, 89, 9, 2, 3, 4]), [89]); // => []
assertArraysEqual(middle([14, 5, 6, 1]), [5, 6]); // => []
assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]
