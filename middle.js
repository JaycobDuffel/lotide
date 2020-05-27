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

assertArrays(middle([1, 2, 3, 4, 5, 6]), [3,4]);