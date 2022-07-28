const result = document.getElementById("res")
const input = document.getElementById("input").value
const reset = document.getElementById("reset")

// The function that converts shillings to dollars
let convertToDollars = (event,amount)=>{
    event.preventDefault()
    result.innerHTML =  amount/3878.47
}
// The reset button should reset the h1 tag of the html
// let resetButton = ()=>{
//     result.innerHTML = "That was it"
// }

// // using the addEventListener()
// reset.addEventListener('click',resetButton())