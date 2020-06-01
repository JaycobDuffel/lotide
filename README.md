# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @duffelshuffel/lotide`

**Require it:**

`const _ = require('@duffelshuffel/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: Compares two arrays and returns a message stating if they match or not.
* `assertEqual`: Compares two arguments and returns a message stating if they match or not.
* `assertObjectsEqual`: Compares two objects and returns a message stating if they match or not.
* `countLetters`: Counts each time a character appears in a string.
* `countOnly`: Counts how many times a specific element appears in an array.
* `eqArrays`: Returns true if two arrays match.
* `eqObjects`: Returns true if two objects are equal.
* `findKeyByValue`: Finds a key in an object based on its value.
* `findKey`: Finds key when value is an object.
* `flatten`: Returns array with no nested arrays.
* `head`: Returns the first element from an array.
* `letterPositions`: Returns the index of that a specified character appears in a string.
* `map`: Performs a callback function on each element in an array.
* `middle`: Returns the middle elements of an array (if an array has an even number of elements then it returns the two middle elements)
* `tail`: Returns an array minus the first element.
* `takeUntil`: Returns an array from a different array until a specified elemenet is reached.
* `without`: Returns an array minus a specific element.