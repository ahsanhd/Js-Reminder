function myReplace(str, before, after) {
  let targetStr = str.split(" ")
  for(let i = 0; i < targetStr.length; i++){

    if(targetStr[i][0] === before[0].toUpperCase()){
      targetStr[i] =after[0].toUpperCase() + after.slice(1)
      return targetStr.join(" ");
    }

    if(targetStr[i] === before ) {
      targetStr[i] = after.toLowerCase();
      return targetStr.join(" ");
    }
    
  } 
  
}

let result = myReplace("I think we should look up there", "up", "Down");

console.log(result)