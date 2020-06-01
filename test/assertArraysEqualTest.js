const eqArrays = require('../eqArrays');
const assertArrays = require('../assertArraysEqual')


assertArrays([14, 110, 21, 3], [14, 110, 21, 3]);
assertArrays([14, 1 + "hello", 21, 3, "Bootcamp"], [14, 1 + "hello", 21, 3, "Bootcamp"]);