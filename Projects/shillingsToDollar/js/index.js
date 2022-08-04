const result = document.getElementById("res")
const input = document.getElementById("input")
const selectFrom = document.getElementById("from_currency")
const selectTo = document.getElementById("to_currency")
const currencySign = document.getElementById("currecySign")

let count = 0
// This object contains values of different currences to UGX
let currencyValues = {
    dollars:3878.47,
    euro: 3966.27,
    pound: 4737.72
}
// Creating a function that receives the input from the user
let inputValue = "";
input.addEventListener('input',(event)=>{
    // event.target.style.background = "red"
    inputValue = event.target.value
    event.target.value = thousandOperator(removeComma(event.target.value))
    // console.log(thousandOperator(event.target.value))
})
// The function that converts shillings to dollars
let convertingMoney = (event)=>{
    event.preventDefault()

    // This if statement checks whether the inputValue is an empty string.
        if(inputValue === ""){
            result.innerHTML = "0"
            currencySign.innerHTML = "&dollar;"
        }

        // This if statement checks the option selected by the user to 
        if(updateSelectFrom() == "euro"){
            switch (updateSelecteTo()) {
                case "dollars":
                    // Do the calculation here
                    result.innerHTML = thousandOperator(euroToOtherCurrency(+removeComma(inputValue),updateSelecteTo()))
                    result.style.backgroundColor = "aquamarine"
                    currencySign.innerHTML = "&dollar;"
                    break
                case "pound":
                    // Do the calucation here
                    result.innerHTML = thousandOperator(euroToOtherCurrency(+removeComma(inputValue),updateSelecteTo()))
                    result.style.backgroundColor = "aquamarine"
                    currencySign.innerHTML = "&pound;"
                    break
                case "shillings":
                    result.innerHTML = thousandOperator(otherCurrencyToUgx(+removeComma(inputValue), updateSelectFrom()))
                    result.style.backgroundColor = "aquamarine"
                    currencySign.innerHTML = "UGX"
                    currencySign.style.fontSize = "20px"
                    currencySign.style.margin = "5px"
                    break;
                default:
                    // Default is when the selectedFrom == selectedTo
                    result.innerHTML = inputValue
                    currencySign.innerHTML = "&euro"
                    break;
            }
        }else if(updateSelectFrom() == "dollars"){
            switch (updateSelecteTo()) {
                case "euro":
                    result.innerHTML = thousandOperator(dollarToOtherCurrecy(+removeComma(inputValue),updateSelecteTo()))
                    result.style.backgroundColor = "aquamarine"
                    currencySign.innerHTML = "&euro;"
                    break;
                case "pound":
                    result.innerHTML = thousandOperator(dollarToOtherCurrecy(+removeComma(inputValue),updateSelecteTo()))
                    result.style.backgroundColor = "aquamarine"
                    currencySign.innerHTML = "&pound;"
                    break
                case "shillings":
                    result.innerHTML = thousandOperator(otherCurrencyToUgx(+removeComma(inputValue),updateSelectFrom()))
                    result.style.backgroundColor = "aquamarine"
                    currencySign.innerHTML = "UGX"
                    currencySign.style.fontSize = "20px"
                    currencySign.style.margin = "5px"
                    break
                default:
                    // Default is when the selectedFrom == selectedTo
                    result.innerHTML = inputValue
                    currencySign.innerHTML = "&dollar;"
                    break;
            }
        }else if(updateSelectFrom() == "pound"){
            switch (updateSelecteTo()) {
                case "euro":
                    result.innerHTML = thousandOperator(poundToOTherCurrecy(+removeComma(inputValue), updateSelecteTo()))
                    result.style.backgroundColor = "aquamarine"
                    currencySign.innerHTML = "&euro;"
                    break;
                case "dollars":
                    result.innerHTML = thousandOperator(poundToOTherCurrecy(+removeComma(inputValue), updateSelecteTo()))
                    result.style.backgroundColor = "aquamarine"
                    currencySign.innerHTML = "&dollar;"
                    break;

                case "shillings":
                    result.innerHTML = thousandOperator(otherCurrencyToUgx(+removeComma(inputValue), updateSelectFrom()))
                    result.style.backgroundColor = "aquamarine"
                    currencySign.innerHTML = "UGX"
                    currencySign.style.fontSize = "20px"
                    currencySign.style.margin = "5px"
                    break;
                default:
                    // Default is when the selectedFrom == selectedTo
                    result.innerHTML = inputValue
                    currencySign.innerHTML = "&pound;"
                    break;
            }
        }else if(updateSelectFrom() == "shillings"){
            // This is when the selectFrom.value
            switch (updateSelecteTo()){
                case "euro":
                    result.innerHTML = thousandOperator(shillingsToOtherCurrecy(+removeComma(inputValue), updateSelecteTo()))
                    currencySign.innerHTML = "&euro;"
                    result.style.backgroundColor = "aquamarine"
                    break;
                case "dollars":
                    result.innerHTML = thousandOperator(shillingsToOtherCurrecy(+removeComma(inputValue), updateSelecteTo()))
                    currencySign.innerHTML = "&dollar;"
                    result.style.backgroundColor = "aquamarine"
                    break
                case "pound":
                    result.innerHTML = thousandOperator(shillingsToOtherCurrecy(+removeComma(inputValue), updateSelecteTo()))
                    currencySign.innerHTML = "&pound;"
                    result.style.backgroundColor = "aquamarine"
                    break;
                default:
                    // Default is when the selectedFrom == selectedTo
                    result.innerHTML = inputValue
                    currencySign.innerHTML = "UGX"
                    currencySign.style.fontSize = "20px"
                    currencySign.style.margin = "5px"
                    break
            }
        }
}


// Functions that have to be used to calculate the different files
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
    let regex = /\d{2,3}/g
    let result;
    // I have used the string template to turn the amount in Number to String
    let str = `${amount}` 

    // regular expression to check whether there is a decimal point in the string
    let regDecimalPoint = /[.]/

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

// function to remove ',' from the string in javascript
let removeComma = (string)=>{
    // This is the regular expression that you are supposed to work on 
    let reg = /[,]/g
    return string.replace(reg,"")
}