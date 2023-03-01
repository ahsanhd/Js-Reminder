// NOT WORKING FOR MY SOLUTION THE ORDER IS INCORRECT EVERYTHING IS 
// BUT ORDER OF STRING IS NOT CORRENT

function titleCase(str) {
    let arr = str.split(' ');
    let arrTwo = [];
    let arrThree = [];
   // console.log(arr)
    let strTwo = '';
    for(let i = arr.length; i > 0; i--){
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase();
     // console.log(arr[i].split(' '))
  
      strTwo = arr[i] + " " + strTwo;
      
      
    }
    arrThree.push(arrTwo)
    return strTwo;
  }
  
  titleCase("HERE IS MY HANDLE HERE IS MY SPOUT");
  
  console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));


  // THIS ONE WORKS 

  function titleCase(str) {
    let arr = str.split(' ');
    let arrTwo = [];
    let arrThree = [];
   // console.log(arr)
    let strTwo = '';
    for(let i = 0; i < arr.length; i++){
     strTwo = strTwo + ' ' + (arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase());
     // console.log(arr[i].split(' '))
  //console.log(arr[i])
  
     // strTwo = arr[i] + " " + strTwo;
      
      
    }
    arrThree.push(arrTwo)
    return strTwo;
  }
  
  titleCase("HERE IS MY HANDLE HERE IS MY SPOUT");
  
  console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"))