const assertArrays = (arr1, arr2) => {
  let result = true;
  if (arr1.length !== arr2.length) {
    result = false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      result = false;
    }
  }
  if (result) {
    console.log(`✅✅✅ ${arr1} matches ${arr2} ✅✅✅`);
  } else {
    console.log(`🛑🛑🛑 ${arr1} does not match ${arr2} 🛑🛑🛑`);
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

