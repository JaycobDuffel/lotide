const assertArrays = require('../assertArraysEqual');
const middle = require('../middle')


assertArrays(middle([1, 2]), []) // => []
assertArrays(middle([1, 2, 3]), [2]) // => [2]
assertArrays(middle([1, 2, 3, 4, 5]), [3]) // => [3]
assertArrays(middle([1, 2, 3, 4]), [2, 3]) // => [2, 3]
assertArrays(middle([1, 2, 3, 4, 5, 6]), [3, 4]) // => [3, 4]