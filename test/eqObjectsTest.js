const assert = require("chai").assert;
const eqObjects = require("../eqObjects");

describe("#eqObjects", () => {
  it("returns true for two objects with identical keys and values", () => {
    const shirtObject = { color: "red", size: "medium" };
    const anotherShirtObject = { size: "medium", color: "red" };
    assert.isTrue(eqObjects(shirtObject, anotherShirtObject));
  });

  it("returns false for two objects with different values", () => {
    const shirtObject = { color: "red", size: "medium" };
    const longSleeveShirtObject = {
      size: "medium",
      color: "red",
      sleeveLength: "long",
    };
    assert.isFalse(eqObjects(shirtObject, longSleeveShirtObject));
  });

  it("returns true for two objects with nested arrays", () => {
    const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
    const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
    assert.isTrue(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject));
  });

  it("returns false for two objects with nested arrays and different values", () => {
    const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
    const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
    assert.isFalse(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject));
  });

  it("returns true for two objects with nested objects", () => {
    const obj1 = { a: { z: 1 }, b: 2 };
    const obj2 = { a: { z: 1 }, b: 2 };
    assert.isTrue(eqObjects(obj1, obj2));
  });

  it("returns false for two objects with nested objects and different values", () => {
    const obj1 = { a: { y: 0, z: 1 }, b: 2 };
    const obj2 = { a: { z: 1 }, b: 2 };
    assert.isFalse(eqObjects(obj1, obj2));
  });

  it("returns false for two objects with nested objects and different types", () => {
    const obj1 = { a: { y: 0, z: 1 }, b: 2 };
    const obj2 = { a: 1, b: 2 };
    assert.isFalse(eqObjects(obj1, obj2));
  });
});
