const assert = require("chai").assert;
const map = require("../map");

describe("#map", () => {
  it('returns ["g", "c", "t", "m", "t"] for ["ground", "control", "to", "major", "tom"]', () => {
    // Test input
    const words = ["ground", "control", "to", "major", "tom"];

    // Expected output
    const expectedArray = ["g", "c", "t", "m", "t"];

    // Modify the elements using the map function
    const actualArray = map(words, (word) => word[0]);

    // Assert the result
    assert.deepEqual(actualArray, expectedArray);
  });
});
