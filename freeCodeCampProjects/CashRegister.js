function checkCashRegister(price, cash, cid) {
    const change_due = (cash - price)*100
    const change_ = change_due
    console.log(change_)
    const currencyUnit = {
        "PENNY": 0.01,
        "NICKEL": 0.05,
        "DIME": 0.1,
        "QUARTER": 0.25,
        "ONE": 1,
        "FIVE": 5,
        "TEN": 10,
        "TWENTY": 20,
        "ONE HUNDRED": 100
      }

    const filteredcid = cid.filter(element=> element[1] !== 0).reverse()
    // let totalcid = filteredcid.reduce((prev, curr)=>{
    //     prev += curr[1]
    // },0)


    let arr = [];
    let sum = 0;

    filteredcid.forEach(ar=>{
        let value = ar[1]*100
        let vName = ar[0]

        let unit = currencyUnit[vName]*100
        let div = change_due/unit
        if(div >= 1){
            let amount = 0

            while(sum < change_ && value !== 0){
                if(change_ >= (sum + unit)){
                    // console.log(unit)
                    sum += unit
                    value -= unit
                    amount += unit
                }else{
                    break
                }
            }
            ar[1] = value/100
            arr.push(vName, amount/100)
            
        }

    })
    return arr
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))
console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))
