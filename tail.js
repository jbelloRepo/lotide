// FUNCTION IMPLEMENTATION
const tail = function(arr) {
  if (arr.length === 1) {
    return [];
  } else if (arr.length > 1) {
    const myArr = arr.slice(1);
    return myArr;
  } else {
    return [];
  }
};

module.exports = tail;