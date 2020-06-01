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


const eqObjects = function(object1, object2) {
  let objKey = Object.keys(object1);
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } else {
    for /*(let i = 0; i < objKey.length; i++)*/ (const prop in objKey) {
      if (Array.isArray(object1[objKey[prop]]) && Array.isArray(object2[objKey[prop]])) {
        if (eqArrays(object1[objKey[prop]], object2[objKey[prop]])) {
          return true;
        } else {
          return false;
        }
      } else {
        if (object1[objKey[prop]] !== object2[objKey[prop]]) {
          return false;
        }
      }
    }
  }
  return true;
};

const assertObjectsEqual = (actual, expected) => {

  const inspect = require('util').inspect;
  
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

let ranobj = {
  name: "seven",
  hairstyle: "perm"
};
let objran = {
  name: "seven",
  hairstyle: "perm"
};

module.exports = assertObjectsEqual;