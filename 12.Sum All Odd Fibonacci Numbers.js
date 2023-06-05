function sumFibs(num) {

  let theArr = [0,1];

  let theOddArr = [];

  let theSum = 0;

  for (let i=0;i<num-1;i++) {

    theArr.push(theArr[i]+theArr[i+1]);
    //console.log(theArr)

  }

  for (let i=0; i<theArr.length; i++) {

    if (theArr[i] <= num && theArr[i] % 2 !== 0) {

      theOddArr.push(theArr[i]);
      console.log(theOddArr)

    }

  }

  for (let i=0; i<theOddArr.length; i++) {

    theSum += theOddArr[i];

  }

  return theSum;

}

 let result = sumFibs(6);
 console.log(result)


/////////////////////////////	HAMZA SOLUTION EZ ONE ////////////////////////


function sumFibs(num) {
  let array = [0,1];
  for (let i = 0; i < num-1; i++) {
    array.push(array[i] + array[i+1]) 
    // console.log(array)
  }

  return array.filter(number => {
    return number % 2 !== 0 && number <= num
  }).reduce((acc,current)=>{
    return acc + current
  },0)

  // return num;
}

let result = sumFibs(1000);
console.log(result)
