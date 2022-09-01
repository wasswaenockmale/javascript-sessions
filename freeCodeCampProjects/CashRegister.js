function checkCashRegister(price, cash, cid) {
    const change_due = cash - price
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
    let totalcid = filteredcid.reduce((prev, curr)=>{
        prev += curr[1]
    },0)


    let arr = [];
    let sum = 0;

    filteredcid.forEach(ar=>{
        let value = ar[1]
        let vName = ar[0]

        let unit = currencyUnit[vName]
        let div = change_due/unit
        if(div >= 1){
            let amount = 0
            let count_unit = 0
            while(sum <= change_ && value > 0){
                sum += unit
                if(sum > change_){
                    sum -= unit
                    break
                }else{
                    count_unit += 1
                    value -= unit
                }
            }
            arr.push(vName, unit*count_unit)
            
        }

    })

      return arr
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))
console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))
