/*

Remove all falsy values from an array. Return a new array; do not mutate the original array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Hint: Try converting each value to a Boolean.

*/

function bouncer(arr) {
    let arrCopy = arr.slice();
    let bool = true;
    let arrl = [];
    for(let i = 0; i < arrCopy.length; i++){
      bool = Boolean(arrCopy[i]);                                   // this converts all the elements to Boolean
      if(bool == false){
       delete arrCopy[i];
  
      }
     // console.log(arrCopy[i])
      if(arrCopy[i]){                       // does this return to true idk Ask::: Hamza about this
        arrl.push(arrCopy[i])
      }
    }
  
    return arrl;
   
  }
  
  //bouncer([7, "ate", "", false, 9]);
  
  
  console.log(bouncer([null, NaN, 1, 2, undefined]))