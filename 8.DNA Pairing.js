
function pairElement(str) {
  function calculatePair(initial) {
    if (initial === 'A'){
      return initial = "T";
    } else if (initial === "T"){
      return (initial = "A")
    }else if (initial === "C") {
      return initial = "G"
    } else if(initial === "G"){
      return initial = "C"
    }
  }

  return str.split('').map(initialPair => {
     let pair = [initialPair, calculatePair(initialPair)]
     return pair
  });
}

let result = pairElement("GCG");

console.log(result)