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

const countLetters = function (varString) {
  let arrayTracker = [];
  let returnObj = {};
  for (let str of varString) {
    let itemCount = 0;
    if (str !== " ") {
      //   console.log(str);
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
  console.log(returnObj);
  return returnObj;
};

countLetters("lighthouse in the house");
