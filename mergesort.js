function split(wholeArray) {
  let midpoint = wholeArray.length / 2;

  let firstHalf = wholeArray.slice(0, midpoint);
  let secondHalf = wholeArray.slice(midpoint);

  return [firstHalf, secondHalf];
}

function merge(arr1, arr2) {
  let newArr = [];

  while (arr1.length > 0 && arr2.length > 0) {
    if (arr1[0] > arr2[0]) {
      newArr.push(arr2.shift());
    } else {
      newArr.push(arr1.shift());
    }
  }

  if (arr2.length > 0) {
    newArr.push(arr2.shift());
  }
  if (arr1.length > 0) {
    newArr.push(arr1.shift());
  }

  return newArr;
}

function mergeSort() {}
