// FUNCTION IMPLEMENTATION
const without = function(arr, itemRemove) {
  let itemRemoveIndex = [];
  let isSkipped = false;
  let isPresent = false;
  let newArr = [];

  // Get the index of the itemRemove in the arr
  for (let i = 0; i < itemRemove.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (itemRemove[i] === arr[j]) {
        itemRemoveIndex.push(j);
      }
    }
  }

  // Iterate over arr skipping indexes in itemRemove
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < itemRemoveIndex.length; j++) {
      if (i === itemRemoveIndex[j]) {
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
        for (let k = 0; k < newArr.length; k++) {
          if (arr[i] === newArr[k]) {
            isPresent = true;
          }
        }
        // add it if its not
        if (isPresent === false) {
          newArr.push(arr[i]);
        }
      } else { // Add the first element
        newArr.push(arr[i]);
      }
    }

  }
  return newArr;
};

module.exports = without;