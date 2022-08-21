function whatIsInAName(collection, source) {
    let arr = [];
    let res = []
    // Only change code below this line
    // I have to check whether the object has both of these properties.
    collection.forEach(element=>{
      let bool = false
      for(let k in source){
        if(element[k] === source[k]){
          // console.log(element)
          bool = true
        }else{
          bool = false
          break
        }
      }
      if(bool === true){
        arr.push(element)
      }
    })
    // Only change code above this line
    return arr;
  }
  
  console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }))
  console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }))