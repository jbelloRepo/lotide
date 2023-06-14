/**
 * Description: The map function will take in two arguments:
 * 1. An array to map
 * 2. A callback function
 * The map function will return a new array based on the
 * results of the callback function.
 */

// FUNCTION IMPLEMENTATION
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;