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

const without = function (arr, itemRemove) {
  let itemRemoveIndex = [];
  let isRemoved = false;
  let isPresent = false;
  let newArr = [];

  for (let i = 0; i < itemRemove.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(i, j);
      if (itemRemove[i] === arr[j]) {
        // console.log('equal');
        itemRemoveIndex.push(j);
      }
    }
  }
  console.log(itemRemoveIndex);

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < itemRemoveIndex.length; j++) {
      console.log(i, j);
      if (i === itemRemoveIndex[j]) {
        console.log("True");
        console.log(`i = ${i}`);
        isRemoved = true; // false by default
        // console.log(i, j); [ 0, 3, 4, 1 ] i = 0, 3, 4,1
        // console.log(i, itemRemoveIndex[j]); [ 0, 4, 5, 1 ]
        break;
      } else {
        isRemoved = false;
      }
      // console.log(i, j);
      // console.log(i, itemRemoveIndex[j]);
      if (j === itemRemoveIndex.length - 1 && isRemoved === false) {
        if (newArr.length >= 1) {
          for (let j = 0; i < newArr.length; j++) {
            if (arr[i] === newArr[j]) {
              console.log("The item already exists in the new array");
              isPresent = true;
            }
          }
          if (isPresent === false) {
            console.log("adding i....");
            newArr.push(arr[i]);
          }
        } else {
          console.log("adding i....");
          newArr.push(arr[i]);
          console.log(newArr.length);
        }
        // isAdded = false;
        // break;
      }

      //   break;
    }
  }
  console.log(newArr);
  return newArr;
};

without([1, 2, 3, 3, 1, 1], [1, 2]);
