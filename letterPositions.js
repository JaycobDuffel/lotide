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

const letterPositions = (str) => {
  let output = {};
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {

    if (output[str[i]]) {
      output[str[i]].push(i);
    } else {
      output[str[i]] = [i];
    }
  } return output;
}

// assertArrays(letterPositions("bootcamp").o, [1, 2])
// assertArrays(letterPositions("assertArraysEqual").a, [0, 6, 9, 15])
// assertArrays(letterPositions("javascript").j, [0])
// assertArrays(letterPositions("lighthouse Labs").l, [0, 11])


module.exports = letterPositions;