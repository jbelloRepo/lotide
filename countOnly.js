/**
 * Description: This function should take in a collection of items
 * and return counts for a specific subset of those items. It won't
 * count everything. In order to decide what to count, it will also be
 * given an idea of which items we care about and it will only count
 * those, ignoring the others.
 */

// FUNCTION IMPLEMENTATION
const countOnly = function(allItems, itemsToCount) {
  let returnObj = {};

  for (const item in itemsToCount) {
    let itemCount = 0;
    //  if value true
    if (itemsToCount[item]) {
      //check key in allItems
      if (allItems.includes(item)) {
        for (const anItem of allItems) {
          if (anItem === item) {
            itemCount++;
          }
        }
        returnObj[item] = itemCount;
      }
    }
  }
  return returnObj;
};

module.exports = countOnly;