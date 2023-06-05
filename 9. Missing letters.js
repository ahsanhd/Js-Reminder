function fearNotLetter(str) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let startingPosition = alphabet.indexOf(str[0])
  console.log(startingPosition)
  let focusedAlphabet = alphabet.slice(startingPosition)
  console.log(focusedAlphabet)
  for (let i = 0; i < str.length; i++) {
    console.log(focusedAlphabet[i], str[i])
    if(focusedAlphabet[i] != str[i] ) {
      return focusedAlphabet[i]
    }
  }


  // return str;
}

console.log(fearNotLetter("stvwx"));