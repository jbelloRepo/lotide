const assert = require("chai").assert;
const countOnly = require("../countOnly");

describe("#countOnly", () => {
  it("returns the correct count for specified elements in the firstNames array", () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe",
    ];

    const expected = { Jason: 1, Fang: 2 };
    const result = countOnly(firstNames, {
      Jason: true,
      Karima: true,
      Fang: true,
      Agouhanna: false,
    });

    assert.deepEqual(result, expected);
  });

  it("returns the correct count for specified elements in the arr array", () => {
    const arr = ["a", "a", "b", "c", "d", "e", "a"];

    const expected = { a: 3, d: 1 };
    const result = countOnly(arr, { a: true, d: true, b: false, f: true });

    assert.deepEqual(result, expected);
  });
});
