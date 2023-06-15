const assertObjectsEqual = require('../assertObjectsEqual');

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject1 = { size: "medium", color: "red" };
const anotherShirtObject2 = { size: "medium", color: "green" };
assertObjectsEqual(shirtObject, anotherShirtObject1);
assertObjectsEqual(shirtObject, anotherShirtObject2);