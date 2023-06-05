function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  let orbitalPeriods = [];
  
  arr.forEach(item => {
    let object = {};
    object.name = item.name;
    
    let twoPie = Math.PI * 2;
    let topOfDivider = Math.pow((earthRadius + item.avgAlt),3);
    let toBeSquared = Math.sqrt(topOfDivider / GM);
    object.orbitalPeriod = Math.round(twoPie * toBeSquared);

    orbitalPeriods.push(object)
    console.log(toBeSquared);
  });
return orbitalPeriods;
}

let result = orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]);

console.log(result);

let a = 6;
let b = 2;

console.log(a/b)