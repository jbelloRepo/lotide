/**
 * Description: The function should take in a sentence (as a string)
 * and then return a count of each of the letters in that sentence.
 * For example, countLetters('LHL') should return results indicating
 * that L appears twice, and H once.
 */

// FUNCTION IMPLEMENTATION
const countLetters = function(varString) {
  let arrayTracker = [];
  let returnObj = {};
  for (let str of varString) {
    let itemCount = 0;
    if (str !== " ") {
      if (!arrayTracker.includes(str)) {
        for (let str2 of varString) {
          if (str2 === str) {
            itemCount++;
          }
          arrayTracker.push(str);
        }
        returnObj[str] = itemCount;
      }
    }
  }
  return returnObj;
};

module.exports = countLetters;

