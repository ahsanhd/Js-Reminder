function convertToRoman(num) {
 var roman = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };
  console.log(Object.values(roman))
  var str = '';

  for (var i of Object.keys(roman)) {


    var q = Math.floor(num / roman[i]);
    // console.log(q)
    num -= q * roman[i];
    str += i.repeat(q);
    console.log(roman[i],q)
  }

  return str;
}

let result = convertToRoman(36);
console.log(result)
var a = 36;
var b = 9;
  a -= 1;
console.log(Math.floor(a))