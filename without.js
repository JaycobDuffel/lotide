const assertArraysEqual = (arr1, arr2) => {
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
};

const without = (srcArr, itemsToRemove) => {
  let resultArr = [...srcArr]
  for (let i = 0; i < itemsToRemove.length; i++) {
    const foundIndex = resultArr.indexOf(itemsToRemove[i]);
  if (foundIndex > -1) {
      //.log(resultArr);
      resultArr.splice(foundIndex, 1);
      
    }
  }
  console.log(resultArr);
}



