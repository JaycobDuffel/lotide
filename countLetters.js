const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

countLetters = (string) => {
  let output = {};
  for (let char of string) {
  if (output[char]) {
    output[char] += 1;
  } else {
    output[char] = 1;
  }
  }
  delete output[" "]
  return output;
}

console.log(countLetters("lighthouse in the house"));
