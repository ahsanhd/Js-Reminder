function sum(arr, n) {
    // Only change code below this line
    if (n <= 0){                                    // this is a base condition that will stop recursion
      return 0;
    }else {
      return sum(arr, n - 1) + arr[n - 1];          
    }
    // Only change code above this line
  }
  
  console.log(sum([1,3,2],2))

  // recursion is a function that calls itself.. recusrsions need base condition that will help it stop callling itself..


  function multiply(arr, n) {
    if (n <= 0) {
      return 1;
    } else {
      return multiply(arr, n - 1) * arr[n - 1];
    }
  }