function truthCheck(collection, pre) {
   return collection.every(item => {
     console.info(item[pre])

   return item[pre]
    }); 
}

let result = truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "name");

console.log(result);