const assert = require("chai").assert;
const takeUntil = require("../takeUntil");

describe("#takeUntil", () => {
  it("returns [1, 2, 5, 7, 2] for [1, 2, 5, 7, 2, -1, 2, 4, 5]", () => {
    // Test input
    const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];

    // Expected output
    const expectedArray = [1, 2, 5, 7, 2];

    // Execute takeUntil function
    const actualArray = takeUntil(data1, (x) => x < 0);

    // Assert the result
    assert.deepEqual(actualArray, expectedArray);
  });

  it('returns ["I\'ve", "been", "to", "Hollywood"] for [ "I\'ve", "been", "to", "Hollywood", ",", "I\'ve", "been", "to", "Redwood"]', () => {
    // Test input
    const data2 = [
      "I've",
      "been",
      "to",
      "Hollywood",
      ",",
      "I've",
      "been",
      "to",
      "Redwood"
    ];

    // Expected output
    const expectedArray = ["I've", "been", "to", "Hollywood"];

    // Execute takeUntil function
    const actualArray = takeUntil(data2, (x) => x === ",");

    // Assert the result
    assert.deepEqual(actualArray, expectedArray);
  });
});
