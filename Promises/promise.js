let empty_tank = function(){
    return new Promise(function(){
        resolve("The tank is empty")
    })
}

let engine = function(){
    return new Promise(function(){
        resolve("The engine is over heating.")
    })
}

let travel = function(){
    return new Promise(function(){
        resolve("The car is not safe for travelling.")
    })
}


