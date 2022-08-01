const result = document.getElementById("res")
const input = document.getElementById("input")
const selectFrom = document.getElementById("from_currency")
const selectTo = document.getElementById("to_currency")


// Creating an object that contains more the values of the different currency
let currencyValues = {
    dollars:3878.47,
    euro: 3966.27
}
// The function that converts shillings to dollars
console.log("Things are working")
let ShillingsToDollars = (event)=>{
    event.preventDefault()
    // I have used an async function to wait for the input value from the user.
    setTimeout(()=>{
        result.innerHTML =  (input.value/3878.47).toFixed(2)
    },50)
}
