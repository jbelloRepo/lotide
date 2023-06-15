const assert = require("chai").assert;
const flatten = require("../flatten");

describe("#flatten", () => {
  it("should return [1, 2, 3, 4, 5, 6] for input [1, 2, [3, 4], 5, [6]]", () => {
    const result = flatten([1, 2, [3, 4], 5, [6]]);
    assert.deepEqual(result, [1, 2, 3, 4, 5, 6]);
  });
});
