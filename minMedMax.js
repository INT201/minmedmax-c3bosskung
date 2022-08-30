const { template } = require('@babel/core')

function minMedMax(n1, n2, n3) {
  let arr = [n1, n2, n3];
  let min;
  let med;
  let max;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      for (let k = 0; k < arr.length; k++) {
        if(arr[i] < arr[j] && arr[i] < arr[k]) {
          min = arr[i];
        }
        else if (arr[j] < arr[i] && arr[j] < arr[k]) {
          min = arr[j];
        }
        else if (arr[k] < arr[i] && arr[k] < arr[j]) {
          min = arr[k];
        }
        else if (arr[i] > arr[j] && arr[i] > arr[k]) {
          max = arr[i];
        }
        else if (arr[j] > arr[i] && arr[j] > arr[k]) {
          max = arr[j];
        }
        else if (arr[k] > arr[i] && arr[k] > arr[j]) {
          max = arr[k];
        }
        else {
          med = arr[i];
        }
      }
    }
  }
  return {min: min, med: med, max: max};
}

module.exports = minMedMax
