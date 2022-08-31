const PENDING = 0;
const FULLFILLED = 1;
const REJECTED = 2;

function myPromiseDesign(resolve, reject){
    let value = null;
    let state = PENDING;
    let handlers = []
    let catches = []
}