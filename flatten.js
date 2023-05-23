//----------- FUNCTION IMPLEMENTATION ----------//
const flatten = function (arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      for (let k = 0; k < arr[i].length; k++) {
        newArr.push(arr[i][k]);
      }
    } else {
      newArr.push(arr[i]);
    }
  }
  console.log(newArr);
  return newArr;
};
//----------- FUNCTION IMPLEMENTATION END ----------//

flatten([1, 2, [3, 4], 5, [6]]);
