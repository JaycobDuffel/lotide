const assert = require('chai').assert;
const middle = require('../middle')

describe('#middle', () => {
  it('should return an empty array when given an empty array', () => {
    const actual = middle([1, 2]);
    const expected = [];
    assert.deepStrictEqual(actual, expected);
  });
  it('should return 2 when given an [1, 2, 3]', () => {
    const actual = middle([1, 2, 3]);
    const expected = [2];
    assert.deepStrictEqual(actual, expected);
  });
  it('should return [3, 4] when given an [1, 2, 3, 4, 5, 6]', () => {
    const actual = middle([1, 2, 3, 4, 5, 6]);
    const expected = [3, 4];
    assert.deepStrictEqual(actual, expected);
  });
})
