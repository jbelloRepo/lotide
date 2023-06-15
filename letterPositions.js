/**
 * Description: letterPositions will return all the indices
 * (zero-based positions) in the string where each character
 * is found.
 */

// FUNCTION IMPLEMENTATION
const letterPositions = function(varString) {
  let returnObj = {};
  for (let str of varString) {
    let itemIdex = [];
    if (str !== " ") {
      for (let i = 0; i < varString.length; i++) {
        if (varString[i] === str) {
          itemIdex.push(i);
        }
      }
      returnObj[str] = itemIdex;
    }
  }
  return returnObj;
};

module.exports = letterPositions;
