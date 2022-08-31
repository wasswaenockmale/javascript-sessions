function usingCallBack(callfun){
    console.log("Runing...")
    callfun()
}

function runThis(){
    console.log("Function 1")
}

usingCallBack(runThis)