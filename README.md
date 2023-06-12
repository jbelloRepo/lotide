# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @jbello/lotide`

**Require it:**

`const _ = require('@jbello/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertEqual(value1, value2)`: Returns true if value1 and value2 are equal, and false otherwise.
* `assertEqualTemplate(value1, value2)`: Returns an updated version of assertEqual that uses template literals.
* `head(array)`: Returns the first element of the array.
* `tail(array)`: Returns a new array with all elements of array except the first one.
* `eqArrays(array1, array2)`: Returns true if array1 and array2 are equal, and false otherwise.
* `assertArraysEqual(array1, array2)`: Prints an appropriate message after comparing the two arrays.
* `without(source, itemsToRemove)`: Returns a new array containing only the items from source that are not in the itemsToRemove array.
* `flatten(array)`: Returns a new array that is a flattened version of the input array.
* `middle(array)`: Returns the middle element of the input array.
* `countOnly(allItems, itemsToCount)`: Returns a new object with counts of specific items in the allItems collection.
* `countLetters(sentence)`: Returns a count of each letter in the input sentence.
* `letterPositions(string)`: Returns an object with indices of each letter position in the input string.
* `findKeyByValue(object, value)`: Returns the first key in the input object that corresponds to the provided value.
* `eqObjects(object1, object2)`: Returns true if object1 and object2 are equal, and false otherwise.
* `assertObjectsEqual(object1, object2)`: Returns true if object1 and object2 are equal objects, and false otherwise.
* `map(array, callback)`: Returns a new array based on the results of the callback function applied to each item in the input array.
* `takeUntil(array, callback)`: Returns a slice of the input array until the callback function returns a truthy value.
* `findKey(object, callback)`: Returns the first key in the input object that meets the criteria specified by the callback function.

