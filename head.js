const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

head = (arr) => {
  return arr[0];
}
assertEqual(head([17]), 17);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");