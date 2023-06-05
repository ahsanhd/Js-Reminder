function palindrome(str) {
  let noSpacesStr = str.replace(/\W+|_/g,"").toLowerCase();
  let reversedStr = noSpacesStr.split("").reverse().join("");

  return (noSpacesStr === reversedStr ? true : false);

  
}

let result = palindrome("A man, a plan, a canal. Panama");

console.log(result);