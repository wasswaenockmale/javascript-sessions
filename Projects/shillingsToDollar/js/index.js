const result = document.getElementById("res")
const input = document.getElementById("input")
const selectFrom = document.getElementById("from_currency")
const selectTo = document.getElementById("to_currency")
const currencySign = document.getElementById("currecySign")


// This object contains values of different currences to UGX
let currencyValues = {
    dollars:3878.47,
    euro: 3966.27,
    pound: 4737.72
}

// The function that converts shillings to dollars
let convertingMoney = (event)=>{
    event.preventDefault()
    // I have used an async function to wait for the input value from the user.
    setTimeout(()=>{
        if(updateSelectFrom() == "euro"){
            switch (updateSelecteTo()) {
                case "dollars":
                    // Do the calculation here
                    result.innerHTML = thousandOperator(euroToOtherCurrency(+input.value,updateSelecteTo()))
                    result.style.backgroundColor = "aquamarine"
                    currencySign.innerHTML = "&dollar;"
                    break
                case "pound":
                    // Do the calucation here
                    result.innerHTML = thousandOperator(euroToOtherCurrency(+input.value,updateSelecteTo()))
                    result.style.backgroundColor = "aquamarine"
                    currencySign.innerHTML = "&pound;"
                    break
                case "shillings":
                    result.innerHTML = thousandOperator(otherCurrencyToUgx(amount, updateSelectFrom()))
                    result.style.backgroundColor = "aquamarine"
                    currencySign.innerHTML = "UGX"
                    break;
                default:
                    // Default is when the selectedFrom == selectedTo
                    result.innerHTML = "Same currency selected!!!"
                    result.style.backgroundColor = "yellow"
                    currencySign.innerHTML = ""
                    break;
            }
        }else if(updateSelectFrom() == "dollars"){
            switch (updateSelecteTo()) {
                case "euro":
                    result.innerHTML = thousandOperator(dollarToOtherCurrecy(+input.value,updateSelecteTo()))
                    result.style.backgroundColor = "aquamarine"
                    currencySign.innerHTML = "&euro;"
                    break;
                case "pound":
                    result.innerHTML = thousandOperator(dollarToOtherCurrecy(+input.value,updateSelecteTo()))
                    result.style.backgroundColor = "aquamarine"
                    currencySign.innerHTML = "&pound;"
                    break
                case "shillings":
                    result.innerHTML = thousandOperator(otherCurrencyToUgx(+input.value,updateSelectFrom()))
                    result.style.backgroundColor = "aquamarine"
                    currencySign.innerHTML = "UGX"
                    break
                default:
                    // Default is when the selectedFrom == selectedTo
                    result.innerHTML = "Same currency selected!!!"
                    result.style.backgroundColor = "yellow"
                    currencySign.innerHTML = ""
                    break;
            }
        }else if(updateSelectFrom() == "pound"){
            switch (updateSelecteTo()) {
                case "euro":
                    result.innerHTML = thousandOperator(poundToOTherCurrecy(+input.value, updateSelecteTo()))
                    result.style.backgroundColor = "aquamarine"
                    currencySign.innerHTML = "&euro;"
                    break;
                case "dollars":
                    result.innerHTML = thousandOperator(poundToOTherCurrecy(+input.value, updateSelecteTo()))
                    result.style.backgroundColor = "aquamarine"
                    currencySign.innerHTML = "&dollar;"
                    break;

                case "shillings":
                    result.innerHTML = thousandOperator(otherCurrencyToUgx(+input.value, updateSelectFrom()))
                    result.style.backgroundColor = "aquamarine"
                    currencySign.innerHTML = "UGX"
                    break;
                default:
                    // Default is when the selectedFrom == selectedTo
                    result.innerHTML = "Same currency selected!!!"
                    result.style.backgroundColor = "yellow"
                    currencySign.innerHTML = ""
                    break;
            }
        }else if(updateSelectFrom() == "shillings"){
            // This is when the selectFrom.value
            switch (updateSelecteTo()){
                case "euro":
                    result.innerHTML = thousandOperator(shillingsToOtherCurrecy(+input.value, updateSelecteTo()))
                    currencySign.innerHTML = "&euro;"
                    result.style.backgroundColor = "aquamarine"
                    break;
                case "dollars":
                    result.innerHTML = thousandOperator(shillingsToOtherCurrecy(+input.value, updateSelecteTo()))
                    currencySign.innerHTML = "&dollar;"
                    result.style.backgroundColor = "aquamarine"
                    break
                case "pound":
                    result.innerHTML = thousandOperator(shillingsToOtherCurrecy(+input.value, updateSelecteTo()))
                    currencySign.innerHTML = "&pound;"
                    result.style.backgroundColor = "aquamarine"
                    break;
                default:
                    // Default is when the selectedFrom == selectedTo
                    result.innerHTML = "Same currency selected!!!"
                    result.style.backgroundColor = "yellow"
                    currencySign.innerHTML = ""
                    break
            }
        }
        // result.innerHTML =  (input.value/3878.47).toFixed(2)
    },500)
}


function updateSelectFrom(){
    return selectFrom.options[selectFrom.selectedIndex].value
}

function updateSelecteTo(){
        return selectTo.options[selectTo.selectedIndex].value
}

/**
 * I am writing all my currency converter calculations here.
 */

let shillingsToOtherCurrecy = (amount, curr)=>{
    return (amount/currencyValues[curr]).toFixed(3)
}
let dollarToOtherCurrecy = (amount, currency)=>{
    // First change the amount to shillings
    let shillings = amount * (currencyValues.dollars)
    return shillingsToOtherCurrecy(shillings, currency)
}

let poundToOTherCurrecy = (amount, currency)=>{
    let shillings = amount * (currencyValues.pound)
    return shillingsToOtherCurrecy(shillings, currency)
}

let euroToOtherCurrency = (amount, currency)=>{
    let shillings = amount * (currencyValues.euro)
    return shillingsToOtherCurrecy(shillings, currency)
}

let otherCurrencyToUgx = (amount, from)=>{
    return (amount * currencyValues[from]).toFixed(3)
}

/**
 * Creating a function that will put a thousand operators on the amount returned
 */
let thousandOperator = (amount)=>{
    // This is a regular expression that splits the 'amount' string into chunks of 3substring, 
    //the \d shows it must be a number
    let regex = /\d{1,3}/
    let result;
    // I have used the string template to turn the amount in Number to String
    let str = `${amount}` 

    // regular expression to check whether there is a decimal point in the string
    let regDecimalPoint = /[.]/g

    if(regDecimalPoint.test(amount)){
        // I will take the string at index 0 and work on that
        let str1 = str.split(".")[0] 
        let len = str1.length

        if(len%3 != 0){
            if(len%3 === 1){
                result = str1.slice(0,1)+","+str1.slice(1).match(regex).join(",")
            }else{
                result = str1.slice(0,2)+","+str1.slice(2).match(regex).join(",")
            }
        }else{
            result = str1.match(regex).join(",")
        }
    }else{
        let len = str.length
        if(len%3 != 0){
            if(len%3 === 1){
                result = str.slice(0,1)+","+str.slice(1).match(regex).join(",")
            }else{
                result = str.slice(0,2)+","+str.slice(2).match(regex).join(",")
            }
        }else{
            result = str.match(regex).join(",")
        }
    }
    return result
}