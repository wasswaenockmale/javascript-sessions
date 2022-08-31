// function usingCallBack(callfun, call2){
//     call2()
//     console.log("Runing...")
//     callfun()
// }

// function runThis(){
//     console.log("Function 1")
// }

// function runfirst(){
//     console.log("This is the inner function")
// }

// usingCallBack(runThis, runfirst)

function callme(callback){
    let value = null
    function checkoutNumber(check){
        if(check === null) return;

        value = check

        return true;
    }

    function display(){
        console.log(`The number is ${value}`)
    }

    callback(checkoutNumber, display)
}

let custom = callme()
custom