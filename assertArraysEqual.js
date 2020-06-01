const eqArrays = require('./eqArrays');



const assertArrays = (actual, expected) => {
 
  if (eqArrays(actual, expected) === true) {
    console.log(`✅✅✅ ${actual} matches ${expected} ✅✅✅`);
  } else {
    console.log(`🛑🛑🛑 ${actual} does not match ${expected} 🛑🛑🛑`);
  }
};
module.exports = assertArrays;

