let empty_tank = function(){
    return new Promise(function(resolve, reject){
        resolve("The tank is empty")
    })
}

let engine = function(){
    return new Promise(function(resolve, reject){
        resolve("The engine is over heating.")
    })
}

let travel = function(){
    return new Promise(function(resolve, reject){
        resolve("The car is not safe for travelling.")
    })
}


empty_tank()
.then((val)=>{
    console.log("This is the first value")
    return engine()
}).then((val)=>{
    console.log("This is the first value")
    return travel()
}).then(()=>{
    console.log("This is done")
})