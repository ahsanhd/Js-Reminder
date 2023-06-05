const Person = function(firstAndLast) {
  this.getFullName = function() {
    return firstAndLast;
  };
  this.getLastName = function() {
    return firstAndLast = firstAndLast.split(" ")[1];
  }
  this.getFirstName = function(){
    return firstAndLast = firstAndLast.split(" ")[0];
  }
  this.setFullName = function(newFullName) {
    return firstAndLast = newFullName;
  }
  this.setFirstName = function(newFirstName) {
    return firstAndLast = newFirstName + " " + this.getLastName();
  }
  this.setLastName = function(newLastName) {
    return firstAndLast = this.getFirstName() + " " + newLastName;
  }
  
};

const bob = new Person('Bob Ross');
// bob.getFullName();


console.log(bob.getLastName())