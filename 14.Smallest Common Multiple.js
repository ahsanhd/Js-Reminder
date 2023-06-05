function getRange(highN,lowN) {
  let range = [];
  for (let i = lowN; i <= highN; i++) {
    range.push(i);
  }
  return range;
}  


function smallestCommons(arr) {

  let highNum = Math.max(...arr);
  let lowNum = Math.min(...arr);
  let range = getRange(highNum,lowNum);
  let multiple = 1; 
  while (multiple < 1000000){
    let highCommonMultiple = (multiple * lowNum) * highNum;
    let trueCounter = 0;
    for( let i = 0; i < range.length; i++) {
      if(highCommonMultiple % range[i] === 0) {
        trueCounter++;
      } 
      
      if(trueCounter == range.length) {
        return highCommonMultiple;
      }
    } 
    multiple++
  }

  return highCommonMultiple;
}

let result =  smallestCommons([1,3]);

console.log(result);



/;//////////////////////////////////////// HAMZA's APPROACH ///////////////////////////// 

function smallestCommons(arr) {
  const range_ = (min, max) => {
    const arr = [];
    for (let i = min; i <=max; i++) {
      arr.push(i)
    }

    return arr;
  }
  
  const gcd = (a, b) => {
    if (b === 0) return a;
    return gcd(b, a % b);

  }

  arr.sort((a,b) => a -b);

  const range = range_(arr[0], arr[1]);

  let lcm = range[0];
  for (let i = 1; i< range.length; i++) {
    lcm = (lcm * range[i] / gcd(lcm, range[i]));

    console.info(lcm)
  }
  return lcm
}

let result = smallestCommons([1,3]);
console.info(result);