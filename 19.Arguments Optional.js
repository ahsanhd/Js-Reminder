function checkIfArgumentNumber(first){
  if (typeof first == "number") {
    return first;
  } else {
    return undefined;
  }
} 

let resultB = checkIfArgumentNumber("3");
console.log(resultB)


function addTogether() {
  let firstArgument = arguments[0];
  
  if (arguments.length > 1){
    let secondArgument = arguments[1];
    
    if(checkIfArgumentNumber(firstArgument) !== undefined && 
      checkIfArgumentNumber(secondArgument) !== undefined) {
    return firstArgument + secondArgument;
    }
     else {
      return undefined;
    } 
   } 
  else if (arguments.length === 1) {
    if(checkIfArgumentNumber(firstArgument) === undefined) {
      return undefined;
    }
  } else {
    return function(secondArgument) {
    if(checkIfArgumentNumber(firstArgument) !== undefined && 
      checkIfArgumentNumber(secondArgument) !== undefined) {
      return firstArgument + secondArgument;
      }
    }   
  }


  return undefined;
}

let result = addTogether(5)(7);

console.info(result);



//////////////////////////////////////////////////// Copied Solution I would say /////////////////////////////


function addTogether() {
  let [first,second] = arguments;
  if( typeof first == "number") {
    if(typeof second == "number") {
      return first + second;
    } if (arguments.length === 1) {
      return function(second) {
        if(typeof second == "number") {
          return first + second;
        }
      }
    }
  }

  return undefined;
}

let result2= addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ");

console.log(result2)


