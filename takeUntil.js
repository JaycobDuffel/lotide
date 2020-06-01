
const takeUntil = function(arr, cb) {
  const resultArr = [];
  for (const elem of arr) {
    if (cb(elem)) {
      return resultArr;
    } else {
      resultArr.push(elem);
    }
  }
  return resultArr;
};

module.exports = takeUntil;


// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x > 5);
// console.log(results1);

// console.log('\n --- \n');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);