const successEmoji = "✅✅✅";
const failedEmoji = "❌❌❌";
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`${successEmoji} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${failedEmoji} Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function (obj, value) {
  for (const val in obj) {
    // console.log(obj[val]);
    if (obj[val] === value) {
      return val;
    }
  }
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

// findKeyByValue(bestTVShowsByGenre, "The Wire");

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
