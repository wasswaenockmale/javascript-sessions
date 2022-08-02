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
                    result.innerHTML = euroToOtherCurrency(+input.value,updateSelecteTo())
                    result.style.backgroundColor = "aquamarine"
                    currencySign.innerHTML = "&dollar;"
                    break
                case "pound":
                    // Do the calucation here
                    result.innerHTML = euroToOtherCurrency(+input.value,updateSelecteTo())
                    result.style.backgroundColor = "aquamarine"
                    currencySign.innerHTML = "&pound;"
                    break
                case "shillings":
                    result.innerHTML = otherCurrencyToUgx(amount, updateSelectFrom())
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
                    result.innerHTML = dollarToOtherCurrecy(+input.value,updateSelecteTo())
                    result.style.backgroundColor = "aquamarine"
                    currencySign.innerHTML = "&euro;"
                    break;
                case "pound":
                    result.innerHTML = dollarToOtherCurrecy(+input.value,updateSelecteTo())
                    result.style.backgroundColor = "aquamarine"
                    currencySign.innerHTML = "&pound;"
                    break
                case "shillings":
                    result.innerHTML = otherCurrencyToUgx(+input.value,updateSelectFrom())
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
                    result.innerHTML = poundToOTherCurrecy(+input.value, updateSelecteTo())
                    result.style.backgroundColor = "aquamarine"
                    currencySign.innerHTML = "&euro;"
                    break;
                case "dollars":
                    result.innerHTML = poundToOTherCurrecy(+input.value, updateSelecteTo())
                    result.style.backgroundColor = "aquamarine"
                    currencySign.innerHTML = "&dollar;"
                    break;

                case "shillings":
                    result.innerHTML = otherCurrencyToUgx(+input.value, updateSelectFrom())
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
                    result.innerHTML = shillingsToOtherCurrecy(+input.value, updateSelecteTo())
                    currencySign.innerHTML = "&euro;"
                    result.style.backgroundColor = "aquamarine"
                    break;
                case "dollars":
                    result.innerHTML = shillingsToOtherCurrecy(+input.value, updateSelecteTo())
                    currencySign.innerHTML = "&dollar;"
                    result.style.backgroundColor = "aquamarine"
                    break
                case "pound":
                    result.innerHTML = shillingsToOtherCurrecy(+input.value, updateSelecteTo())
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
    },50)
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