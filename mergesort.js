function split(wholeArray) {
  let midpoint = wholeArray.length / 2;

  let firstHalf = wholeArray.slice(0, midpoint);
  let secondHalf = wholeArray.slice(midpoint);

  return [firstHalf, secondHalf];
}

function merge(arr1, arr2) {
  let pointerA = arr1[0];
  let pointerB = arr2[0];
  let temp = 0;

  if (arr1[0] > arr2[0]) {
    temp = arr1[0];
    arr1[0] = arr2[0];
    arr2[0] = temp;
  }

  console.log(arr1, arr2);
}
