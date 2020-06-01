const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;

};
const assertArrays = (arr1, arr2) => {
  // let result = true;
  // if (arr1.length !== arr2.length) {
  //   result = false;
  // }
  // for (let i = 0; i < arr1.length; i++) {
  //   if (arr1[i] !== arr2[i]) {
  //     result = false;
  //   }
  // }

  
  

  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ ${arr1} matches ${arr2} ✅✅✅`);
  } else {
    console.log(`🛑🛑🛑 ${arr1} does not match ${arr2} 🛑🛑🛑`);
  }
};
const flatten = (array) => {
  let output = [];
  array.forEach(item => {
    if (Array.isArray(item)) {
      output = output.concat(flatten(item));
    } else {
      output.push(item);
    }
  });
  return output;
};
// assertArr

module.exports = flatten;

