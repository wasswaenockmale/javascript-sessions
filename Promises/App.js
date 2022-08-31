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