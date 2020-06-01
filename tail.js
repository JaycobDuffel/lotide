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

module.exports = tail;