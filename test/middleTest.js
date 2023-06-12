const assert = require("chai").assert;
const middle = require("../middle");

describe("#middle", () => {
  it('returns ["Lighthouse", "Labs"] for ["Hello", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it('returns [] for ["Hello"]', () => {
    assert.deepEqual(middle(["Hello"]), []);
  });

  it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });

  it("returns [] for [1]", () => {
    assert.deepEqual(middle([1]), []);
  });

  it("returns [] for [1, 2]", () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it("returns [4, 45] for [1, 2, 3, 4, 45, 5, 6, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 45, 5, 6, 6]), [4, 45]);
  });

  it("returns [89] for [1, 2, 4, 7, 89, 9, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 4, 7, 89, 9, 2, 3, 4]), [89]);
  });

  it("returns [5, 6] for [14, 5, 6, 1]", () => {
    assert.deepEqual(middle([14, 5, 6, 1]), [5, 6]);
  });

  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("returns [3] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it("returns [2, 3] for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

  it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
});
