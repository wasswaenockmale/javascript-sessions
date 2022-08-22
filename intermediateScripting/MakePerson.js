const Person = function(firstAndLast) {
    // Only change code below this line
    // Complete the method below and implement the others similarl
    let name = firstAndLast
    this.getFullName = function() {
      return name;
    }
    this.getFirstName = function(){
      return name.split(" ")[0]
    }
    this.getLastName = function(){
      return name.split(" ")[1]
    }
    this.setFirstName = function(first){
        name = first +" "+name.split(" ")[1]
    }
    this.setLastName = function(last){
        name = name.split(" ")[0]+" "+last
    }
    this.setFullName = function(another){
      name = another
    }
  };
  
  const bob = new Person('Bob Ross')
  console.log(bob.getFullName())
  console.log(bob.getFirstName())
  console.log(bob.getLastName())
  bob.setFirstName("Enock")
  bob.setFullName("Enock Wasswa")
  bob.setLastName("Male")
  console.log(bob.getFullName())