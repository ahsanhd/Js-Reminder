function steamrollArray(arr,result=[]) {
  arr.forEach(item=> {
    if(Array.isArray(item)){
      steamrollArray(item,result);
      console.info(item,result)
    } else {
      result.push(item);
      // console.info(result.push(item))
    }
  });
  return result;
}

let result = steamrollArray([1, [2], [3, [[4]]]]);

console.info(result)