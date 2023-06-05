function sumPrimes(num) {
  let counter = 2;
  let sum = 0;
  while(counter <= num) {
    if(isPrime(counter) == true) {
      sum += counter;
      console.log(sum)
    }  
    counter++;
  }
  return sum;
}

let result =  sumPrimes(10);
 console.log(result)


///////////////////////// HELPER FUNCTION TO FIND PRIME NUMBER ///////////////////
function isPrime(number) {
  let counter = 2;
  while (counter < number) {
    if(number % counter == 0) {
      return false 
    }
    counter++;
  }
  return true;
}

// console.log(isPrime(16))