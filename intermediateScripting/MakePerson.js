const Person = function(firstAndLast) {
    // Only change code below this line
    // Complete the method below and implement the others similarly
    this.getFullName = function() {
      return firstAndLast;
    }
    this.getFirstName = function(){
      return firstAndLast.split(" ")[0]
    }
    this.getLastName = function(){
      return firstAndLast.split(" ")[1]
    }
    this.setFirstName = function(first){
      
    }
    this.setLastName = function(last){
  
    }
    this.setFullName = function(firstAndLast){
      
    }
  };
  
  const bob = new Person('Bob Ross');
  bob.getFullName();