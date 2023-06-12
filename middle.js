//----------- FUNCTION IMPLEMENTATION --------------//
const middle = function(arr) {
  let middleIndex;
  let newArr;
  const emptyArr = [];
  if (arr.length <= 2) {
    return emptyArr;
  } else {
    if (arr.length % 2 === 0) {
      middleIndex = Math.floor(arr.length / 2) - 1;
      newArr = arr.slice(middleIndex, middleIndex + 2);
    } else {
      middleIndex = Math.ceil(arr.length / 2) - 1;
      newArr = arr.slice(middleIndex, middleIndex + 1);
    }
    // console.log(middleIndex);
    // console.log("===middle=== " + newArr);
    return newArr;
  }
};
//----------- FUNCTION IMPLEMENTATION END --------------//


module.exports = middle;


