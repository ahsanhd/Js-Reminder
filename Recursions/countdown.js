// Only change code below this line
function countdown(n){
    if ( n < 1){
    return [];
    } else {
        console.info(n)
      const countArray = countdown(n -1);
      console.info(n)
      
      countArray.unshift(n);
     //console.info(countArray)
      return countArray;
    }
  }
  // Only change code above this line
  countdown(5)
  //console.log(countdown(10))

  /// aaa check 