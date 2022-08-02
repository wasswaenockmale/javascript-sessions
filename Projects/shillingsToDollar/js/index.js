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
console.log("Things are working")
let convertingMoney = (event)=>{
    event.preventDefault()
    // I have used an async function to wait for the input value from the user.
    setTimeout(()=>{
        if(updateSelectFrom() == "euro"){
            switch (updateSelecteTo()) {
                case "dollars":
                    // Do the calculation here
                    result.innerHTML = input.value
                    currencySign.innerHTML = "&dollar;"
                    break
                case "pound":
                    // Do the calucation here
                    result.innerHTML = input.value
                    currencySign.innerHTML = "&pound;"
                    break
                case "shillings":
                    result.innerHTML = input.value
                    currencySign.innerHTML = "UGX"
                    break;
                default:
                    // Default is when it is shillings
                    result.innerHTML = input.value
                    currencySign.innerHTML = "&euro;"
                    break;
            }
        }else if(updateSelectFrom() == "dollars"){
            switch (updateSelecteTo()) {
                case "euro":
                    result.innerHTML = input.value
                    currencySign.innerHTML = "&euro;"
                    break;
                case "pound":
                    result.innerHTML = input.value
                    currencySign.innerHTML = "&pound;"
                    break
                case "shillings":
                    result.innerHTML = input.value
                    currencySign.innerHTML = "UGX"
                    break
                default:
                    result.innerText = input.value
                    currencySign.innerHTML = "&dollar;"
                    break;
            }
        }else if(updateSelectFrom() == "pound"){
            switch (updateSelecteTo()) {
                case "euro":
                    result.innerHTML = input.value
                    currencySign.innerHTML = "&euro;"
                    break;
                case "dollars":
                    result.innerHTML = input.value
                    currencySign.innerHTML = "&dollar;"
                    break;

                case "shillings":
                    result.innerHTML = input.value
                    currencySign.innerHTML = "UGX"
                    break;
                default:
                    result.innerHTML = input.value
                    currencySign.innerHTML = "&pound"
                    break;
            }
        }else if(updateSelectFrom() == "shillings"){
            // This is when the selectFrom.value
            switch (updateSelecteTo()){
                case "euro":
                    result.innerHTML = input.value
                    currencySign.innerHTML = "&euro;"
                    break;
                case "dollars":
                    result.innerHTML = input.value
                    currencySign.innerHTML = "&dollar;"
                    break
                case "pound":
                    result.innerHTML = input.value
                    currencySign.innerHTML = "&pound;"
                    break;
                default:
                    result.innerHTML = input.value
                    currencySign.innerHTML = "UGX"
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