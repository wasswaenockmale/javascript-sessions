function addTogether() {
    for(let k of arguments){
        if(typeof k !== "number"){
            return
        }
    }
    let k = [...arguments][0]
    if(arguments.length>1){
        return [...arguments].reduce((sum, currentV)=> { return sum += currentV},0)
    }else{

        return function(z){
            if(typeof z !== "number"){
                return
            }else{
                return z + k
            }
        }
    }
  }
  
  console.log(addTogether(10)([10]))