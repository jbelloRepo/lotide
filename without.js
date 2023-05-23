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

//----- FUNCTION IMPLEMENTATION -----------//
const without = function(arr, itemRemove) {
  let itemRemoveIndex = [];
  let isSkipped = false;
  let isPresent = false;
  let newArr = [];

  // Get the index of the itemRemove in the arr
  for (let i = 0; i < itemRemove.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      // console.log(i, j);
      if (itemRemove[i] === arr[j]) {
        // console.log('equal');
        itemRemoveIndex.push(j);
      }
    }
  }
  // console.log(`The index of items to remove is: ${itemRemoveIndex}`);

  // Iterate over arr skipping indexes in itemRemove
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < itemRemoveIndex.length; j++) {
      // console.log(i, j);
      if (i === itemRemoveIndex[j]) {
        // console.log("skip this");
        // console.log(`i = ${i}`);
        isSkipped = true; // false by default
        break;
      } else {
        if (j === itemRemoveIndex.length - 1) {
          isSkipped = false; //false when iteration over itemRemoveIndex is complete
        }
      }
    }

    // check if the [i] index is skipped
    if (isSkipped === false) {
      // if not not skipped, check if the item at index [i] exist in the new array
      if (newArr.length >= 1) {
        // console.log("Array has more than one element");
        for (let k = 0; k < newArr.length; k++) {
          if (arr[i] === newArr[k]) {
            // console.log("The item already exists in the new array");
            isPresent = true;
          }
        }
        // add it if its not
        if (isPresent === false) {
          // console.log("adding i.... The element is not present");
          newArr.push(arr[i]);
        }
      } else { // Add the first element
        // console.log("adding i....");
        newArr.push(arr[i]);
        // console.log(newArr.length);
      }
      // isAdded = false;
      // break;
    }

    //   break;
  }
  // console.log("\nThe new array is: " + [newArr]);
  return newArr;
};
//----- FUNCTION IMPLEMENTATION END -----------//


// TESTS FOR WITHOUT IMP
without([1, 2, 3, 3, 1, 1], [1, 2]);
without([1, 2, 3, 3, 1, 1, 4, 7, 5, 5, 7], [1, 2, 3, 4]);
without(["1", "2", "3"], [1, 2, "3"]);

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);