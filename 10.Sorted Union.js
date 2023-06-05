function uniteUnique(arr) {
  let finalArray = [];
  //  console.log(Object.values(arguments))
  let values = Object.values(arguments);

  for(let i = 0; i < values.length;i++){
    let a =values[i]
     console.log(a)
    for(let j = 0; j < values[i].length; j++) {
      console.log(values[i][j])
      if(finalArray.indexOf(a[j]) === -1) {
        finalArray.push(values[i][j])
      }
    }
  }

  return finalArray;
}

console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]));

///////////////////////////////////// USING forEach HIGHER FUNCTION //////////////////////////////////////

function uniteUnique(arr) {
  let finalArray = [];
  //  console.log(Object.values(arguments))
  let values = Object.values(arguments);
  values.forEach(value => {
    let a =value
     //console.log(a)
  a.forEach(valuesA => {
    //console.log(valuesA)
    let b = valuesA;
    if(finalArray.indexOf(b) === -1) {
        finalArray.push(b)
      }
  })
  })

  return finalArray;
}

console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]));


///////////////////////////////////// USING one liner HIGHER FUNCTION //////////////////////////////////////

function uniteUnique(...arr) {
  return arr.flat().filter((value, idx, array) => array.indexOf(value) === idx) 
}


console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]));
