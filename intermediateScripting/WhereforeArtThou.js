function whatIsInAName(collection, source) {
    let arr = [];
    // Only change code below this line
    collection.forEach(element=>{
      for(let k in source){
        if(element[k] === source[k]){
          // console.log(element)
          arr.push(element)
        }
      }
    })
    // Only change code above this line
    return arr;
  }
  
  console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }))
  console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }))