const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

}

const middle = (arr) => {

  let resultArr = [];
  arr.length % 2 === 0 ? resultArr = arr.slice(arr.length / 2 - 1, arr.length / 2 + 1) :  resultArr = arr.slice(Math.round(arr.length/2 -1), arr.length /2 + 1);
  return resultArr;
}

console.log(middle([1, 2, 3, 4, 5, 6]));