const FULLFILLED = 1;
const REJECTED = 2;
const PENDING = 0;

function customPromise(executor){
    let state = PENDING;
    let value = null;
    let handlers = [];
    let catches = [];

    function resolve(result){
        if(state !== PENDING) return;

        state = FULLFILLED;
        value = result;
    }

    function reject(){
        
    }
}
