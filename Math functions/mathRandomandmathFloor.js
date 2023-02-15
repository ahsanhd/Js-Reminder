/// This is code will generate a random whole number between max and min numbers.. 


const min = 12;
const max = 19;

const range = max - min + 1 ;

const wholeNumber = Math.random() * range;         // Math.random will generate a random number b/w 0 and 1( 1 ko nikaal k matlab 0 say le kr 0.99 tk)
const result = Math.floor(wholeNumber) + min;      // Math.floor() will round any decimal number to the nearest whole number 
 

console.log(range)
console.log(wholeNumber)
console.log(result)


// this code is function that will do the same thing but with a function call


function randomRange(myMin, myMax) {
 // Only change code below this line


 return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin ;
 // Only change code above this line
}

console.log(randomRange(2, 11))

const w = 20; 
const x = x + w;