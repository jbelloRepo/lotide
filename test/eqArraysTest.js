const assert = require("chai").assert;
const eqArrays = require("../eqArrays");

describe("#eqArrays", () => {
  it("should return true for equal arrays [1, 2, 3] and [1, 2, 3]", () => {
    assert.isTrue(eqArrays([1, 2, 3], [1, 2, 3]));
  });

  it("should return false for non-equal arrays [1, 2, 3] and [1, 2, 4]", () => {
    assert.isFalse(eqArrays([1, 2, 3], [1, 2, 4]));
  });

  it("should return true for equal arrays ['1', '2', '3'] and ['1', '2', '3']", () => {
    assert.isTrue(eqArrays(["1", "2", "3"], ["1", "2", "3"]));
  });

  it("should return true for equal arrays ['1', '2', '3'] and ['1', '2', 3]", () => {
    assert.isFalse(eqArrays(["1", "2", "3"], ["1", "2", 3]));
  });

  it("should return true for equal arrays [[2, 3], [4]] and [[2, 3], [4]]", () => {
    assert.isTrue(eqArrays([[2, 3], [4]], [[2, 3], [4]]));
  });

  it("should return false for non-equal arrays [[2, 3], [4]] and [[2, 3], [4, 5]]", () => {
    assert.isFalse(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]));
  });

  it("should return false for non-equal arrays [[2, 3], [4]] and [[2, 3], 4]", () => {
    assert.isFalse(eqArrays([[2, 3], [4]], [[2, 3], 4]));
  });

});
