const eqArrays = require('./eqArrays');



const assertArrays = (arr1, arr2) => {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ ${arr1} matches ${arr2} ✅✅✅`);
  } else {
    console.log(`🛑🛑🛑 ${arr1} does not match ${arr2} 🛑🛑🛑`);
  }
};

module.exports = assertArrays;

