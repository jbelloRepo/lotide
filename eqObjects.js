// FUNCTION IMPLEMENTATION
const eqArrays = require("./eqArrays");
const eqObjects = function(object1, object2) {
  let obj1Count = 0;
  let obj2Count = 0;

  for (const key1 in object1) {
    obj1Count++;
  }
  for (const key2 in object2) {
    obj2Count++;
  }

  if (obj1Count !== obj2Count) {
    return false;
  }

  for (const key in object1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (typeof object1[key] === "object" && typeof object2[key] === "object") {
      if (!eqObjects(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }

  return true;
};

module.exports = eqObjects;