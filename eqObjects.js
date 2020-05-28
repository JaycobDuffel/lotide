const assertEqual = function (actual, expected) {
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


const eqObjects = function (object1, object2) {
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
}
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };

assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };

assertEqual(eqObjects(ab, abc), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false