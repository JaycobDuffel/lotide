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
const words = ["ground", "control", "to", "major", "tom"];


const map = (arr, cb) => {
// declare output array
  const outputArr = [];
  for (const item of arr) {

    outputArr.push(cb(item));
  }


  //return output array
  return outputArr;
};

// const result1 = map(words, word => word.length);
// assertArrays(result1, [ 6, 7, 2, 5, 3 ]);

// const result2 = map(words, word => word[0]);
// assertArrays(result2,[ 'g', 'c', 't', 'm', 't' ]);

module.exports = map;