const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = (arr) => {
  let tailArr = [];
  for (let i = 1; i < arr.length; i++) {
    tailArr.push(arr[i]);
  }
  if (arr.length === 1 || arr === []) {
    tailArr = [];
  }
  return tailArr;
};

let result = tail(["Hello", "Lighthouse", "Labs", "Bootcamp"]);
assertEqual(result.length, 3);
assertEqual(result[2], "Bootcamp");
assertEqual(result[1], "Labs");


let words = ["Bootcamp", "Lighthouse", "Labs", "Javascript"];
tail(words);
assertEqual(words.length, 4);