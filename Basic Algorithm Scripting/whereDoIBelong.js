/*


Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).


*/




function getIndexToIns(arr, num) {

//  TO SORT ARRAY OF NUMBERS WE USE THIS FUNCTION CALL BACK IN  THE EXISTING FUNCTION
    let arr1=arr.sort(function(a,b){return a-b});                      
    //console.log(arr1);
    for(let i = 0; i < arr1.length;i++){
      if(num <= arr1[i]){
        return i;
      }
    }
  
  
    
    return arr1.length;                                             // why does the length become 3 maybe because of i that we are returning
  }
  
  //getIndexToIns([3, 10, 5], 50);
  
  console.log(getIndexToIns([5, 3, 20, 3], 35))