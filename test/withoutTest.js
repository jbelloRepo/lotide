const assert = require("chai").assert;
const without = require("../without");

describe("#without", () => {
  it("should return an array without specified elements", () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
  });

  it("should return a new array without specified elements", () => {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
  });

  it("should return a new array without specified elements (case-sensitive)", () => {
    const words = ["hello", "world", "lighthouse"];
    assert.deepEqual(without(words, ["lighthouse"]), ["hello", "world"]);
  });

  it("should not modify the original array", () => {
    const numbers = [1, 2, 3];
    const result = without(numbers, [1]);
    assert.deepEqual(numbers, [1, 2, 3]);
  });
});
