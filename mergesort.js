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
    for(let i = 0; i < arr2.length; i++){
      newArr.push(arr2[i])
    }
    
  }
  if (arr1.length > 0) {
    for(let i = 0; i < arr1.length; i++){
      newArr.push(arr1[i]);
    }
  }

  return newArr;
}

function mergeSort(wholeArray) {
  if(wholeArray.length === 1){
    return wholeArray;
  } else{
    const [firstHalf, secondHalf] = split(wholeArray);
    return merge(mergeSort(firstHalf), mergeSort(secondHalf));
  }
  // let splitArray =[];
  // let newArrays = split(wholeArray);
  
  // newArrays.map(array => {
  //   if(array.length > 1){
  //     // return splitArray = [...splitArray, mergeSort(array)];
  //     mergeSort(array);

  //   }else {
  //     splitArray.push(array);
      
  //   }
    
  // });
  // console.log(splitArray);
  // return splitArray;
}
