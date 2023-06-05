 function characterToConvert(letter) {
    if (letter == "&") {
      return "&amp;";
    } else if (letter == "<") {
      return "&lt;";
    } else if (letter == ">") {
      return "&gt;";
    } else if (letter == '"') {
      return "&quot;";
    } else if (letter == "'") {
      return "&apos;";
    }
  }

function convertHTML(str) {
  let characterToCheck = ["&","<",">","'",'"'];
  for(let i = 0; i < str.length; i++) {

    if(characterToCheck.indexOf(str[i]) != -1) {
      str =  str.slice(0,i) + characterToConvert(str[i]) + str.slice(i + 1) ;
    }
  }
 


  return str;
}

 let result  = convertHTML("Hamburgers < Pizza < Tacos");
 console.log(result)