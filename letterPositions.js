const letterPositions = function(varString) {
  //   let arrayTracker = [];
  let returnObj = {};
  for (let str of varString) {
    let itemIdex = [];
    if (str !== " ") {
      //   console.log(str);
      for (let i = 0; i < varString.length; i++) {
        if (varString[i] === str) {
          itemIdex.push(i);
        }
      }
      returnObj[str] = itemIdex;
    }
  }
  console.log(returnObj);
  return returnObj;
};

letterPositions("lighthouse in the house");
