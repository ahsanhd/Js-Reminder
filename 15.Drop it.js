function dropElements(arr, func) {
  let result = []
  for (let i = 0; i < arr.length;i++){
    let n = arr[i];
    // console.log(func(n),n)
    if(func(n)) {
    return  arr.slice(i)
}
  } 
  return result;
}

let result = dropElements([1, 2, 3, 4], function(n) {return n >= 3;});

console.log(result);


/////////////////////////findIndex() Method and Conditional Ternary Operator /////////////


function dropElements(arr, func) {
  let sliceIndex = arr.findIndex(func);
  return arr.slice(sliceIndex >= 0 ? sliceIndex : arr.length);
}

// test here
dropElements([1, 2, 3, 4], function(n) {
  return n >= 3;
});