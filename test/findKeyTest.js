const assert = require("chai").assert;
const findKey = require("../findKey");

describe("#findKey", () => {
  it("returns the key for the first object that satisfies the provided condition", () => {
    // Test input
    const obj = {
      "Blue Hill": { stars: 1 },
      Akaleri: { stars: 3 },
      noma: { stars: 2 },
      elBulli: { stars: 3 },
      Ora: { stars: 2 },
      Akelarre: { stars: 3 },
    };

    // Expected return value
    const expectedResult = "noma";

    // Execute findKey function
    const actualResult = findKey(obj, (x) => x.stars === 2);

    // Assert the result
    assert.strictEqual(actualResult, expectedResult);
  });
});
