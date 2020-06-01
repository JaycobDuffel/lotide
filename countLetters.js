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

module.exports = countLetters;
