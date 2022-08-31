//const { template } = require('@babel/core')

function minMedMax(n1, n2, n3) {
  let arr = [n1, n2, n3];
  let min, mid, max;
  if (arr[0] < arr[1] && arr[0] < arr[2]) {
    min = arr[0];
  }  if (arr[1] < arr[0] && arr[1] < arr[2] ) {
    min = arr[1];
  }  if (arr[2] < arr[0] && arr[2] < arr[1]) {
    min = arr[2];
  }  if (arr[0] > arr[1] && arr[0] > arr[2]) {
    max = arr[0];
  }  if (arr[1] > arr[0] && arr[1] > arr[2] ) {
    max = arr[1];
  }  if (arr[2] > arr[0] && arr[2] > arr[1]) {
    max = arr[2];
  }
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] != min && arr[i] != max) {
      mid = arr[i]
    }
  }
  return {
    min: min,
    mid: mid,
    max: max
  }
}

console.log(minMedMax(2, 5, 1));

//module.exports = minMedMax
