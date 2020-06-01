const assert = require('chai').assert;
const tail = require('../tail');

// let result = tail(["Hello", "Lighthouse", "Labs", "Bootcamp"]);
// assertEqual(result.length, 3);
// assertEqual(result[2], "Bootcamp");
// assertEqual(result[1], "Labs");


// let words = ["Bootcamp", "Lighthouse", "Labs", "Javascript"];
// tail(words);
// assertEqual(words.length, 4);

describe("#tail", () => {
  it('should return [2, 3] from [1, 2, 3]', () => {
    const actual = tail([1, 2, 3]);
    const expected = [2, 3];
    assert.deepStrictEqual(actual, expected);
  });
  it("should return [1, [2, 3, 5], 'Bootcamp', 3] from [0, 1, [2 , 3 , 5], 'Bootcamp', 3]", () => {
    const actual = tail([0, 1, [2], 'Bootcamp', 3]);
    const expected = [1, [2], 'Bootcamp', 3];
    assert.deepStrictEqual(actual, expected);
  });
})