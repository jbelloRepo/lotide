// FUNCTION IMPLEMENTATION
const findKeyByValue = function(obj, value) {
  for (const val in obj) {
    // console.log(obj[val]);
    if (obj[val] === value) {
      return val;
    }
  }
};

module.exports = findKeyByValue;
