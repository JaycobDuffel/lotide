const middle = (arr) => {

  let resultArr = [];
  if (arr.length >= 3 ) {
    arr.length % 2 === 0 ?  resultArr = arr.slice(arr.length / 2 - 1, arr.length / 2 + 1) : resultArr = arr.slice(Math.round(arr.length/2 -1), arr.length /2 + 1);
  } else {
    resultArr = [];
  }
  return resultArr;
}



module.exports = middle;