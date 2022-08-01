const result = document.getElementById("res")
const input = document.getElementById("input").value
const reset = document.getElementById("reset")

// The function that converts shillings to dollars
let convertToDollars = (event,amount)=>{
    event.preventDefault()
    result.innerHTML =  (amount/3878.47).toFixed(2)
}
// The reset button should reset the h1 tag of the html
// let resetButton = ()=>{
//     result.innerHTML = "That was it"
// }

// // using the addEventListener()
// reset.addEventListener('click',resetButton())

// Form validation using Javascript
function validation(){
    let inputValue = document.forms['formname']['inputname'].value
    if(inputValue == ""){
        alert("Field name should not be empty.");
        return false
    }
}

// function questionToKevin(string){
//     if(string === "You love me more"){
//         console.log("I will marry you")
//     }else{
//         console.log("You don't wanna get married to me")
//     }
// }