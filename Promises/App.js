const PENDING = 0;
const FULLFILLED = 1;
const REJECTED = 2;

function myPromiseDesign(executor){
    let value = null;
    let state = PENDING;
    let handlers = []
    let catches = []

    function resolve(v){
        if(state !== PENDING) return;

        state = FULLFILLED;
        value = v

        handlers.forEach(handler=>handler(value))
    }

    function reject(er){
        if(state !== PENDING) return;

        state = REJECTED;
        value = er

        catches.forEach(c=>c(er))
    }

    this.then = function(callback){
        if(state === FULLFILLED){
            callback(value)
        }else{
            handlers.push(callback)
        }
    }

    executor(resolve, reject)
    
}

let doWork = (res, rej)=>{
    setTimeout(()=>{res("Hello world")},1000)
}

let doOtherWork = (res, rej)=>{
    setTimeout(()=>{res("Another one")})
}
let someOtherWork = new Promise(doWork)
let someWork = new myPromiseDesign(doWork)
someOtherWork.then((val)=>{
    console.log("1st Log: ", val)
    return new Promise(doOtherWork)
}).then((value)=>{
    console.log("I love programming")
    console.log(value)
})

// someWork.then((val)=>{
//     console.log("2nd Log: ", val)
// })

// setTimeout(()=>{
//     someWork.then((val)=>{
//         console.log("3rd Log: ", val)
//     })
// },3000)