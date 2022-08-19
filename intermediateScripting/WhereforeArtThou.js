function whatIsInAName(collection, source) {
    let arr = [];
    // Only change code below this line
    collection.forEach(element=>{
      if(element.size === source.length){
        for(let src in source){
            if(element[src] === source[src]){
                arr.push(element)
                break
            }
          }
      }
    })
    // Only change code above this line
    return arr;
  }
  