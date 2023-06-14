/**
 * Description: The function will return a
 * "slice of the array with elements taken from the beginning."
 * It should keep going until the callback/predicate returns
 * a truthy value.
 */

// Function implementation
const takeUntil = function(arr, callback) {
  let returnArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      break;
    } else {
      returnArr.push(arr[i]);
    }
  }
  return returnArr;
};

module.exports = takeUntil;