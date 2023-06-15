const assert = require("chai").assert;
const findKeyByValue = require("../findKeyByValue");

describe("#findKeyByValue", () => {
  const bestTVShowsByGenre = {
    "sci_fi": "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama: "The Wire",
  };

  it('should return "drama" for value "The Wire"', () => {
    const result = findKeyByValue(bestTVShowsByGenre, "The Wire");
    assert.strictEqual(result, "drama");
  });

  it('should return undefined for value "That \'70s Show"', () => {
    const result = findKeyByValue(bestTVShowsByGenre, "That '70s Show");
    assert.strictEqual(result, undefined);
  });
});
