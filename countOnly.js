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

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function (allItems, itemsToCount) {
  let returnObj = {};

  for (const item in itemsToCount) {
    let itemCount = 0;
    // console.log(itemsToCount[item]); //gives key's value

    //  if value true
    if (itemsToCount[item]) {
      //check key in allItems
      if (allItems.includes(item)) {
        // console.log(item);
        // count how many times its in there
        for (const anItem of allItems) {
          if (anItem === item) {
            itemCount++;
          }
        }
        returnObj[item] = itemCount;
      }
    }
  }
  //   console.log(returnObj);
  return returnObj;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
});

const arr = ["a", "a", "b", "c", "d", "e", "a"];
const result2 = countOnly(arr, { a: true, d: true, b: false, f: true });
assertEqual(result2["a"], 3);
assertEqual(result2["b"], undefined);
assertEqual(result2["d"], 1);

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
