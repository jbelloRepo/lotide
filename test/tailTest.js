const assertEqual = require("../assertEqual");
const tail = require("../tail");

// Test Case 1: Check the returned array elements
const tailTest = function(arr) {
  const sampleArr1 = arr;
  const result = tail(sampleArr1);
  // console.log(result);
  if (typeof result !== "undefined" && result.length > 1) {
    assertEqual(result.length, sampleArr1.length - 1); // ensure we get back two elements
    for (let i = 0; i < sampleArr1.length - 1; i++) {
      assertEqual(result[i], sampleArr1[i + 1]);
    }
  } else {
    console.log("The array has no tail or is empty");
  }
};

// list arrays to test
const arrList = [
  ["Hello", "Lighthouse", "Labs"],
  ["Yo Yo", "Lighthouse", "Labs"],
  ["Hello"],
]; // add more arrays here to test the function above
for (let i = 0; i < arrList.length; i++) {
  console.log(`\nTesting array: ${arrList[i]}`);
  tailTest(arrList[i]);
}
